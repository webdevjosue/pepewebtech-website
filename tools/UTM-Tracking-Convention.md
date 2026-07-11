# UTM Tracking Convention — PepeWebTech

> Standard UTM parameters for all affiliate links across pepewebtech.com

## Convention

All outbound affiliate links MUST be tagged with the following UTM parameters:

| Parameter | Value | Description |
|-----------|-------|-------------|
| `utm_source` | `pepewebtech` | Fixed — identifies our site as the traffic source |
| `utm_medium` | `affiliate` | Fixed — identifies the link type |
| `utm_campaign` | `{post-slug}` | The blog post slug where the link appears |
| `utm_content` | `{placement}_{program}` | Identifies link placement and program |
| `utm_term` | `{anchor-text-slug}` | Optional — the anchor text used |

## Placement Codes

| Code | Description |
|------|-------------|
| `inline` | Link within article body text |
| `cta_box` | Link inside a styled CTA box at end of post |
| `recommended_page` | Link on /recommended-tools page |
| `footer` | Link in footer or navigation |
| `sidebar` | Link in sidebar/widget |

## Program Codes

| Code | Program |
|------|---------|
| `zai` | Z.AI (GLM Models) |
| `semrush` | Semrush |
| `wp_engine` | WP Engine |
| `jasper` | Jasper AI |
| `cloudways` | Cloudways |
| `brightlocal` | BrightLocal |

## Example

Post: `zai-glm-coding-plan-review-small-business`
Program: Z.AI
Placement: inline

```
https://z.ai/subscribe?ic=DQQVB6KRO6&utm_source=pepewebtech&utm_medium=affiliate&utm_campaign=zai-glm-coding-plan-review-small-business&utm_content=inline_zai
```

## Existing Affiliate Links (Pre-UTM)

Existing Z.AI links in blog posts use `?ic=DQQVB6KRO6` without UTM parameters.
These links work but cannot be attributed to specific posts in analytics.
New and edited links should include full UTM tracking.

**Z.AI Affiliate Code:** `DQQVB6KRO6` (verified correct — not doubled)

## Tools

### Link Builder Script

```bash
# Build a single tracked link
cd ~/pepewebtech-website/tools
python3 utm_link_builder.py build \
    --url "https://z.ai/subscribe?ic=DQQVB6KRO6" \
    --campaign "post-slug-here" \
    --content "inline_zai"

# Batch rebuild all URLs in tracking CSV
python3 utm_link_builder.py batch --csv affiliate_tracking.csv

# Verify all tracked URLs are correct
python3 utm_link_builder.py verify --csv affiliate_tracking.csv

# List all affiliate programs
python3 utm_link_builder.py programs
```

### Tracking Spreadsheet

`affiliate_tracking.csv` maps every affiliate link placement:

| Column | Description |
|--------|-------------|
| `post_slug` | Blog post slug |
| `post_title` | Human-readable title |
| `program` | Affiliate program name |
| `affiliate_base_url` | Base URL (before UTM) |
| `tracked_url` | Full URL with UTM params |
| `utm_campaign` | Post slug |
| `utm_content` | placement_program |
| `utm_term` | Anchor text slug |
| `placement_type` | inline / cta_box / recommended_page |
| `rel_attribute` | SEO attribute (nofollow sponsored) |
| `anchor_text` | Visible link text |
| `date_added` | Date link was added |
| `status` | active / pending_approval / paused |
| `notes` | Any notes |

## SEO Compliance

ALL affiliate links must use `rel="nofollow sponsored"`:
- `nofollow` — tells search engines not to follow
- `sponsored` — identifies as paid/affiliate link (Google requirement)

No affiliate links in the first 2 paragraphs of any post.

## Related

- [[PepeWebTech Monetization]] — Full monetization strategy
- [[PepeWebTech Project]] — Site architecture
