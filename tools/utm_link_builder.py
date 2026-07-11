#!/usr/bin/env python3
"""
UTM Link Builder for PepeWebTech Affiliate Program
====================================================
Generates tracked affiliate URLs with UTM parameters.

UTM Convention (documented in UTM-Tracking-Convention.md):
    utm_source   = pepewebtech
    utm_medium   = affiliate
    utm_campaign = {post-slug}
    utm_content  = {placement}_{program}   (e.g. inline_zai, cta_box_semrush)
    utm_term     = {anchor_text_slug}      (optional)

Usage:
    # Build a single tracked link
    python utm_link_builder.py build \\
        --url "https://z.ai/subscribe?ic=DQQVB6KRO6" \\
        --campaign "zai-glm-coding-plan-review" \\
        --content "inline_zai"

    # Batch build from tracking CSV
    python utm_link_builder.py batch --csv affiliate_tracking.csv

    # Verify all links in tracking CSV have correct UTM params
    python utm_link_builder.py verify --csv affiliate_tracking.csv

    # List all known affiliate base URLs
    python utm_link_builder.py programs
"""

import argparse
import csv
import json
import re
import sys
import urllib.parse
from pathlib import Path
from datetime import datetime, timezone

# ─── Constants ────────────────────────────────────────────────────────────

SITE_SOURCE = "pepewebtech"
DEFAULT_MEDIUM = "affiliate"

# Known affiliate programs — base URLs without UTM params
# When programs are approved and we have real affiliate links, update here.
AFFILIATE_PROGRAMS = {
    "zai": {
        "name": "Z.AI (GLM Models)",
        "base_url": "https://z.ai/subscribe?ic=DQQVB6KRO6",
        "network": "direct",
        "commission": "Variable (plan-based)",
        "cookie_duration": "session",
        "status": "active",
        "affiliate_id": "DQQVB6KRO6",
    },
    "semrush": {
        "name": "Semrush",
        "base_url": "https://www.semrush.com/",  # Replace with Impact affiliate link
        "network": "Impact",
        "commission": "$200/sale + $10/trial",
        "cookie_duration": "120 days",
        "status": "pending",
        "affiliate_id": "",
    },
    "wp_engine": {
        "name": "WP Engine",
        "base_url": "https://wpengine.com/",  # Replace with ShareASale link
        "network": "ShareASale",
        "commission": "$200/signup or 100% first month",
        "cookie_duration": "180 days",
        "status": "pending",
        "affiliate_id": "",
    },
    "jasper": {
        "name": "Jasper AI",
        "base_url": "https://www.jasper.ai/",  # Replace with affiliate link
        "network": "direct",
        "commission": "25-30% recurring (12 months)",
        "cookie_duration": "45 days",
        "status": "pending",
        "affiliate_id": "",
    },
    "cloudways": {
        "name": "Cloudways",
        "base_url": "https://www.cloudways.com/",  # Replace with affiliate link
        "network": "direct",
        "commission": "$50-$125/sale or 30% recurring",
        "cookie_duration": "90 days",
        "status": "pending",
        "affiliate_id": "",
    },
    "brightlocal": {
        "name": "BrightLocal",
        "base_url": "https://www.brightlocal.com/",  # Replace with Awin link
        "network": "Awin",
        "commission": "15% recurring",
        "cookie_duration": "60 days",
        "status": "pending",
        "affiliate_id": "",
    },
}

# ─── URL Building ─────────────────────────────────────────────────────────

def build_tracked_url(
    base_url: str,
    campaign: str,
    content: str = "",
    term: str = "",
    source: str = SITE_SOURCE,
    medium: str = DEFAULT_MEDIUM,
) -> str:
    """
    Build a UTM-tracked affiliate URL.

    Args:
        base_url:  The affiliate link (may already have query params like ?ic=)
        campaign:  Post slug or campaign identifier (e.g. "ai-chat-widget-guide")
        content:   Placement identifier (e.g. "inline_zai", "cta_box_semrush")
        term:      Optional anchor text slug (e.g. "glm-coding-plan")
        source:    UTM source (default: pepewebtech)
        medium:    UTM medium (default: affiliate)

    Returns:
        Fully tracked URL with UTM parameters appended.
    """
    if not base_url:
        raise ValueError("base_url is required")

    if not campaign:
        raise ValueError("campaign (post slug) is required")

    # Sanitize campaign — lowercase, hyphens only
    campaign = _sanitize_slug(campaign)
    content = _sanitize_slug(content) if content else ""
    term = _sanitize_slug(term) if term else ""

    utm_params = {
        "utm_source": source,
        "utm_medium": medium,
        "utm_campaign": campaign,
    }
    if content:
        utm_params["utm_content"] = content
    if term:
        utm_params["utm_term"] = term

    # Parse existing URL to preserve existing params (like ?ic=DQQVB6KRO6)
    parsed = urllib.parse.urlparse(base_url)
    existing_params = urllib.parse.parse_qs(parsed.query, keep_blank_values=True)

    # Flatten existing params (take first value for each key)
    merged = {}
    for key in existing_params:
        merged[key] = existing_params[key][0]

    # Add UTM params (don't override existing UTM if somehow present)
    for key, val in utm_params.items():
        if key not in merged:
            merged[key] = val

    # Rebuild URL
    new_query = urllib.parse.urlencode(merged)
    tracked_url = urllib.parse.urlunparse((
        parsed.scheme,
        parsed.netloc,
        parsed.path,
        parsed.params,
        new_query,
        parsed.fragment,
    ))

    return tracked_url


def _sanitize_slug(text: str) -> str:
    """Convert text to URL-safe slug: lowercase, alphanumeric + hyphens."""
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = text.strip("-")
    return text


# ─── Tracking CSV ─────────────────────────────────────────────────────────

TRACKING_FIELDS = [
    "post_slug",
    "post_title",
    "program",
    "affiliate_base_url",
    "tracked_url",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "placement_type",  # inline, cta_box, recommended_page, footer
    "rel_attribute",   # nofollow sponsored
    "anchor_text",
    "date_added",
    "status",          # active, pending_approval, paused
    "notes",
]


def init_tracking_csv(filepath: str = None) -> str:
    """Create an empty tracking CSV with headers. Returns the path."""
    if filepath is None:
        filepath = str(Path(__file__).parent / "affiliate_tracking.csv")
    path = Path(filepath)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=TRACKING_FIELDS)
        writer.writeheader()
    return str(path)


def add_tracking_entry(
    filepath: str,
    post_slug: str,
    post_title: str,
    program: str,
    affiliate_base_url: str,
    placement_type: str = "inline",
    anchor_text: str = "",
    utm_content: str = "",
    utm_term: str = "",
    notes: str = "",
) -> dict:
    """
    Add a single tracking entry to the CSV.

    Returns the entry dict that was written.
    """
    utm_content = f"{placement_type}_{_sanitize_slug(program)}"

    tracked_url = build_tracked_url(
        base_url=affiliate_base_url,
        campaign=post_slug,
        content=utm_content,
        term=utm_term,
    )

    entry = {
        "post_slug": post_slug,
        "post_title": post_title,
        "program": program,
        "affiliate_base_url": affiliate_base_url,
        "tracked_url": tracked_url,
        "utm_campaign": _sanitize_slug(post_slug),
        "utm_content": utm_content,
        "utm_term": _sanitize_slug(utm_term) if utm_term else "",
        "placement_type": placement_type,
        "rel_attribute": "nofollow sponsored",
        "anchor_text": anchor_text,
        "date_added": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "status": "active" if AFFILIATE_PROGRAMS.get(program, {}).get("status") == "active" else "pending_approval",
        "notes": notes,
    }

    path = Path(filepath)
    write_header = not path.exists()
    with open(path, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=TRACKING_FIELDS)
        if write_header:
            writer.writeheader()
        writer.writerow(entry)

    return entry


def read_tracking_csv(filepath: str) -> list:
    """Read all entries from tracking CSV. Returns list of dicts."""
    path = Path(filepath)
    if not path.exists():
        return []
    with open(path, "r", newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def verify_tracking_csv(filepath: str) -> dict:
    """
    Verify all tracked URLs in the CSV have correct UTM params.
    Returns {valid: int, invalid: int, issues: [...]}
    """
    entries = read_tracking_csv(filepath)
    results = {"valid": 0, "invalid": 0, "issues": []}

    for i, entry in enumerate(entries, 1):
        tracked_url = entry.get("tracked_url", "")
        parsed = urllib.parse.urlparse(tracked_url)
        params = urllib.parse.parse_qs(parsed.query)

        issues = []

        # Check required UTM params
        for key in ["utm_source", "utm_medium", "utm_campaign"]:
            val = params.get(key, [""])[0]
            if not val:
                issues.append(f"missing {key}")

        # Check source is correct
        if params.get("utm_source", [""])[0] != SITE_SOURCE:
            issues.append(f"utm_source should be '{SITE_SOURCE}', got '{params.get('utm_source', [''])[0]}'")

        # Check medium is correct
        if params.get("utm_medium", [""])[0] != DEFAULT_MEDIUM:
            issues.append(f"utm_medium should be '{DEFAULT_MEDIUM}', got '{params.get('utm_medium', [''])[0]}'")

        # Check campaign matches post_slug
        expected_campaign = _sanitize_slug(entry.get("post_slug", ""))
        actual_campaign = params.get("utm_campaign", [""])[0]
        if expected_campaign and actual_campaign != expected_campaign:
            issues.append(f"utm_campaign should be '{expected_campaign}', got '{actual_campaign}'")

        # Check Z.AI links have affiliate code
        if "z.ai/subscribe" in tracked_url and "ic=DQQVB6KRO6" not in tracked_url:
            issues.append("Z.AI link missing affiliate code DQQVB6KRO6")

        if issues:
            results["invalid"] += 1
            results["issues"].append({
                "row": i,
                "post": entry.get("post_slug", "?"),
                "issues": issues,
            })
        else:
            results["valid"] += 1

    return results


# ─── CLI ──────────────────────────────────────────────────────────────────

def cmd_build(args):
    """Build a single tracked URL from CLI args."""
    url = build_tracked_url(
        base_url=args.url,
        campaign=args.campaign,
        content=args.content or "",
        term=args.term or "",
        source=args.source or SITE_SOURCE,
        medium=args.medium or DEFAULT_MEDIUM,
    )
    print(url)
    return 0


def cmd_batch(args):
    """Batch build URLs from a tracking CSV (regenerates tracked_url column)."""
    entries = read_tracking_csv(args.csv)
    if not entries:
        print(f"No entries in {args.csv}", file=sys.stderr)
        return 1

    updated = 0
    for entry in entries:
        entry["tracked_url"] = build_tracked_url(
            base_url=entry["affiliate_base_url"],
            campaign=entry["post_slug"],
            content=entry.get("utm_content", ""),
            term=entry.get("utm_term", ""),
        )
        updated += 1

    # Rewrite CSV
    with open(args.csv, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=TRACKING_FIELDS)
        writer.writeheader()
        writer.writerows(entries)

    print(f"Updated {updated} tracked URLs in {args.csv}")
    return 0


def cmd_verify(args):
    """Verify all tracked URLs in CSV have correct UTM params."""
    results = verify_tracking_csv(args.csv)
    print(f"Valid: {results['valid']}  Invalid: {results['invalid']}")
    if results["issues"]:
        for issue in results["issues"]:
            print(f"  Row {issue['row']} [{issue['post']}]: {', '.join(issue['issues'])}")
        return 1
    return 0


def cmd_programs(args):
    """List all known affiliate programs."""
    print(f"{'Program':<15} {'Network':<12} {'Status':<16} {'Cookie':<12} {'Commission'}")
    print("-" * 90)
    for key, prog in AFFILIATE_PROGRAMS.items():
        print(
            f"{key:<15} {prog['network']:<12} {prog['status']:<16} "
            f"{prog['cookie_duration']:<12} {prog['commission']}"
        )
    return 0


def cmd_init(args):
    """Initialize a new tracking CSV."""
    path = init_tracking_csv(args.output)
    print(f"Created tracking CSV: {path}")
    return 0


def main():
    parser = argparse.ArgumentParser(
        description="UTM Link Builder for PepeWebTech Affiliate Program"
    )
    sub = parser.add_subparsers(dest="command")

    # build
    p_build = sub.add_parser("build", help="Build a single tracked URL")
    p_build.add_argument("--url", required=True, help="Base affiliate URL")
    p_build.add_argument("--campaign", required=True, help="Post slug / campaign name")
    p_build.add_argument("--content", help="Placement identifier (e.g. inline_zai)")
    p_build.add_argument("--term", help="Optional anchor text slug")
    p_build.add_argument("--source", help=f"UTM source (default: {SITE_SOURCE})")
    p_build.add_argument("--medium", help=f"UTM medium (default: {DEFAULT_MEDIUM})")

    # batch
    p_batch = sub.add_parser("batch", help="Batch rebuild URLs from tracking CSV")
    p_batch.add_argument("--csv", required=True, help="Path to affiliate_tracking.csv")

    # verify
    p_verify = sub.add_parser("verify", help="Verify UTM params in tracking CSV")
    p_verify.add_argument("--csv", required=True, help="Path to affiliate_tracking.csv")

    # programs
    sub.add_parser("programs", help="List all known affiliate programs")

    # init
    p_init = sub.add_parser("init", help="Initialize empty tracking CSV")
    p_init.add_argument("--output", help="Output path (default: ./affiliate_tracking.csv)")

    args = parser.parse_args()

    if args.command == "build":
        return cmd_build(args)
    elif args.command == "batch":
        return cmd_batch(args)
    elif args.command == "verify":
        return cmd_verify(args)
    elif args.command == "programs":
        return cmd_programs(args)
    elif args.command == "init":
        return cmd_init(args)
    else:
        parser.print_help()
        return 0


if __name__ == "__main__":
    sys.exit(main())
