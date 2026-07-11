#!/usr/bin/env python3
"""
Tests for UTM Link Builder — PepeWebTech affiliate tracking.
Run: python3 -m pytest test_utm_link_builder.py -v
"""

import csv
import os
import sys
import tempfile
from pathlib import Path
from urllib.parse import urlparse, parse_qs

# Add parent dir to path
sys.path.insert(0, str(Path(__file__).parent))
from utm_link_builder import (
    build_tracked_url,
    _sanitize_slug,
    init_tracking_csv,
    add_tracking_entry,
    read_tracking_csv,
    verify_tracking_csv,
    AFFILIATE_PROGRAMS,
    TRACKING_FIELDS,
    SITE_SOURCE,
    DEFAULT_MEDIUM,
)


class TestBuildTrackedUrl:
    """AC2: Python/bash script generates tracked affiliate URLs."""

    def test_basic_url(self):
        url = build_tracked_url(
            base_url="https://example.com/offer",
            campaign="test-post",
        )
        assert "utm_source=pepewebtech" in url
        assert "utm_medium=affiliate" in url
        assert "utm_campaign=test-post" in url

    def test_preserves_existing_params(self):
        """Z.AI links have ?ic=DQQVB6KRO6 — must be preserved."""
        url = build_tracked_url(
            base_url="https://z.ai/subscribe?ic=DQQVB6KRO6",
            campaign="my-post",
        )
        assert "ic=DQQVB6KRO6" in url
        assert "utm_source=pepewebtech" in url
        assert "utm_medium=affiliate" in url

    def test_content_param(self):
        url = build_tracked_url(
            base_url="https://example.com",
            campaign="post",
            content="inline_zai",
        )
        assert "utm_content=inline-zai" in url or "utm_content=inline_zai" in url

    def test_term_param(self):
        url = build_tracked_url(
            base_url="https://example.com",
            campaign="post",
            term="GLM Coding Plan",
        )
        assert "utm_term=glm-coding-plan" in url

    def test_campaign_required(self):
        try:
            build_tracked_url("https://example.com", "")
            assert False, "Should have raised ValueError"
        except ValueError:
            pass

    def test_base_url_required(self):
        try:
            build_tracked_url("", "campaign")
            assert False, "Should have raised ValueError"
        except ValueError:
            pass

    def test_campaign_sanitized(self):
        """Campaign with spaces/uppercase gets slugified."""
        url = build_tracked_url(
            base_url="https://example.com",
            campaign="My Cool Post Title!",
        )
        assert "utm_campaign=my-cool-post-title" in url

    def test_custom_source_medium(self):
        url = build_tracked_url(
            base_url="https://example.com",
            campaign="post",
            source="custom-source",
            medium="email",
        )
        assert "utm_source=custom-source" in url
        assert "utm_medium=email" in url

    def test_fragment_preserved(self):
        url = build_tracked_url(
            base_url="https://example.com/page#section",
            campaign="post",
        )
        assert "#section" in url

    def test_zai_full_url(self):
        """Full Z.AI link with all params."""
        url = build_tracked_url(
            base_url="https://z.ai/subscribe?ic=DQQVB6KRO6",
            campaign="zai-glm-coding-plan-review",
            content="inline_zai",
            term="glm-coding-plan",
        )
        parsed = urlparse(url)
        params = parse_qs(parsed.query)
        assert params["ic"][0] == "DQQVB6KRO6"
        assert params["utm_source"][0] == "pepewebtech"
        assert params["utm_medium"][0] == "affiliate"
        assert params["utm_campaign"][0] == "zai-glm-coding-plan-review"

    def test_does_not_override_existing_utm(self):
        """If base URL already has utm_source, don't override."""
        url = build_tracked_url(
            base_url="https://example.com?utm_source=existing",
            campaign="post",
        )
        parsed = urlparse(url)
        params = parse_qs(parsed.query)
        assert params["utm_source"][0] == "existing"


class TestSanitizeSlug:
    def test_basic(self):
        assert _sanitize_slug("Hello World") == "hello-world"

    def test_special_chars(self):
        assert _sanitize_slug("Foo! @Bar #Baz") == "foo-bar-baz"

    def test_multiple_spaces(self):
        assert _sanitize_slug("a   b   c") == "a-b-c"

    def test_leading_trailing(self):
        assert _sanitize_slug("---test---") == "test"

    def test_empty(self):
        assert _sanitize_slug("") == ""

    def test_numbers_preserved(self):
        assert _sanitize_slug("Post 2026 Guide") == "post-2026-guide"

    def test_already_slug(self):
        assert _sanitize_slug("already-slug") == "already-slug"


class TestTrackingCsv:
    """AC3: Tracking spreadsheet mapping post -> affiliate link -> UTM."""

    def test_init_creates_csv(self, tmp_path):
        csv_path = str(tmp_path / "test.csv")
        result = init_tracking_csv(csv_path)
        assert os.path.exists(result)
        with open(result) as f:
            reader = csv.reader(f)
            header = next(reader)
        assert header == TRACKING_FIELDS

    def test_add_entry(self, tmp_path):
        csv_path = str(tmp_path / "test.csv")
        init_tracking_csv(csv_path)
        entry = add_tracking_entry(
            filepath=csv_path,
            post_slug="test-post",
            post_title="Test Post",
            program="zai",
            affiliate_base_url="https://z.ai/subscribe?ic=DQQVB6KRO6",
            placement_type="inline",
            anchor_text="Z.AI",
        )
        assert entry["post_slug"] == "test-post"
        assert entry["program"] == "zai"  # raw key, display name looked up from AFFILIATE_PROGRAMS
        assert "utm_source=pepewebtech" in entry["tracked_url"]
        assert "ic=DQQVB6KRO6" in entry["tracked_url"]

    def test_read_entries(self, tmp_path):
        csv_path = str(tmp_path / "test.csv")
        init_tracking_csv(csv_path)
        add_tracking_entry(
            filepath=csv_path,
            post_slug="post-1",
            post_title="Post One",
            program="zai",
            affiliate_base_url="https://z.ai/subscribe?ic=DQQVB6KRO6",
        )
        entries = read_tracking_csv(csv_path)
        assert len(entries) == 1
        assert entries[0]["post_slug"] == "post-1"

    def test_verify_valid(self, tmp_path):
        csv_path = str(tmp_path / "test.csv")
        init_tracking_csv(csv_path)
        add_tracking_entry(
            filepath=csv_path,
            post_slug="valid-post",
            post_title="Valid",
            program="zai",
            affiliate_base_url="https://z.ai/subscribe?ic=DQQVB6KRO6",
        )
        results = verify_tracking_csv(csv_path)
        assert results["valid"] == 1
        assert results["invalid"] == 0


class TestZaiAffiliateCode:
    """AC4: Z.AI affiliate link uses correct code (DQQVB6KRO6)."""

    def test_code_in_program_data(self):
        assert AFFILIATE_PROGRAMS["zai"]["affiliate_id"] == "DQQVB6KRO6"

    def test_code_in_base_url(self):
        assert "DQQVB6KRO6" in AFFILIATE_PROGRAMS["zai"]["base_url"]

    def test_code_not_doubled(self):
        url = AFFILIATE_PROGRAMS["zai"]["base_url"]
        # Should appear exactly once, not "DQQVB6KRO6KRO6"
        assert url.count("DQQVB6KRO6") == 1

    def test_tracked_url_preserves_code(self):
        url = build_tracked_url(
            base_url=AFFILIATE_PROGRAMS["zai"]["base_url"],
            campaign="test",
        )
        assert "ic=DQQVB6KRO6" in url
        assert "DQQVB6KRO6KRO6" not in url


class TestUtmConvention:
    """AC1: UTM convention documented: source=pepewebtech, medium=affiliate, campaign=post-slug."""

    def test_source_constant(self):
        assert SITE_SOURCE == "pepewebtech"

    def test_medium_constant(self):
        assert DEFAULT_MEDIUM == "affiliate"

    def test_all_programs_have_required_fields(self):
        for key, prog in AFFILIATE_PROGRAMS.items():
            assert "name" in prog, f"{key} missing name"
            assert "base_url" in prog, f"{key} missing base_url"
            assert "network" in prog, f"{key} missing network"
            assert "commission" in prog, f"{key} missing commission"
            assert "cookie_duration" in prog, f"{key} missing cookie_duration"
            assert "status" in prog, f"{key} missing status"
            assert "affiliate_id" in prog, f"{key} missing affiliate_id"

    def test_all_programs_listed(self):
        expected = {"zai", "semrush", "wp_engine", "jasper", "cloudways", "brightlocal"}
        assert set(AFFILIATE_PROGRAMS.keys()) == expected


class TestEdgeCases:
    def test_url_with_ampersand_in_param(self):
        url = build_tracked_url(
            base_url="https://example.com?existing=1",
            campaign="post",
        )
        parsed = urlparse(url)
        params = parse_qs(parsed.query)
        assert params["existing"][0] == "1"
        assert params["utm_source"][0] == "pepewebtech"

    def test_https_preserved(self):
        url = build_tracked_url(
            base_url="https://example.com",
            campaign="post",
        )
        assert url.startswith("https://")

    def test_http_preserved(self):
        url = build_tracked_url(
            base_url="http://example.com",
            campaign="post",
        )
        assert url.startswith("http://")

    def test_tracking_fields_complete(self):
        expected = {
            "post_slug", "post_title", "program", "affiliate_base_url",
            "tracked_url", "utm_campaign", "utm_content", "utm_term",
            "placement_type", "rel_attribute", "anchor_text",
            "date_added", "status", "notes",
        }
        assert set(TRACKING_FIELDS) == expected
