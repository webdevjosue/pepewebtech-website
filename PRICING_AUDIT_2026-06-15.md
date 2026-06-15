# PepeWebTech Pricing Consistency Audit
Date: 2026-06-15
Auditor: critic profile

## Canonical Pricing (source of truth)
| Plan | Correct Price |
|---|---|
| AI Chatbot | $397/mo |
| AI Phone Agent | $697/mo |
| AI Follow-Up System | $397/mo |
| Full AI Package | $997/mo |
| Landing Page | $1,497 |
| Business Website | $2,997 |
| E-Commerce Store | $4,997 |

Old prices to flag: 297, 597, 897.

---

## VERDICT: REJECT

The pricing page itself contains 3 discrepancies (2 CRITICAL), making the most important pricing surface inconsistent with every other file.

---

## File-by-File Results

### PASS — components/hero.tsx
- L23: "From $397/month" (Chatbot) OK
- L47: "$397 /Month Starting" OK

### PASS — app/page.tsx (homepage)
- L28 JSON-LD priceRange: "$397-$997/mo (AI) | $1,497-$4,997 (Web)" OK
- L68: Chatbot "From $397/mo" OK
- L81: Phone "From $697/mo" OK
- L94: Websites "From $1,497" OK (matches Landing)

### PASS — app/contact/page.tsx
- L182: Chatbot $397/mo OK
- L183: Phone $697/mo OK
- L184: Follow-Up $397/mo OK
- L185: Full $997/mo OK
- L186: Landing $1,497 OK
- L187: Business $2,997 OK
- L188: E-Commerce $4,997 OK
- All 7 prices correct.

### PASS — app/services/page.tsx
- L64: Chatbot $397/mo OK
- L71: Phone $697/mo OK
- L78: Follow-Up $397/mo OK
- L85: Full $997/mo OK
- L112: Landing "From $1,497" OK
- L119: Business "From $2,997" OK
- L126: E-Commerce "From $4,997" OK
- L162: ROI math "$697/month = $8,364/year" OK

### FAIL — app/pricing/page.tsx (3 issues)

ISSUE 1 — CRITICAL
- File: app/pricing/page.tsx, line 83
- The Landing Page plan is priced at "$997" (one-time).
- Every other file (homepage L94, services L112, contact L186) shows Landing at $1,497.
- This is a direct on-page contradiction. A visitor comparing the pricing page to any other page sees a $500 gap.
- Fix: change L83 price from "$997" to "$1,497".

ISSUE 2 — CRITICAL
- File: app/pricing/page.tsx, line 10
- The SEO meta description reads: "Web design from $897."
- $897 is an OLD price (explicitly flagged: 897). The correct price is $1,497.
- This is the description Google shows in search results for the /pricing page. Visitors see $897 before they even click.
- Fix: change "Web design from $897" to "Web design from $1,497" in the metadata.description string.
- Note: the openGraph description on L16 already correctly says "$1,497" — so only the meta description needs fixing.

ISSUE 3 — HIGH
- File: app/pricing/page.tsx, lines 112-128 (webPlans array)
- The pricing page has NO E-Commerce plan. The third web plan is "Website + AI Employee" at $3,997 + $697/mo.
- E-Commerce ($4,997) appears on the homepage (JSON-LD priceRange L28), services page (L126), and contact form (L188) — but is absent from the pricing page.
- The "Website + AI Employee" bundle ($3,997) appears on NO other page.
- Fix: decide canonical offering. Either (a) replace the bundle with an E-Commerce card at $4,997 to match all other pages, or (b) add E-Commerce as a 4th web plan and keep the bundle. As-is, the pricing page and the rest of the site describe different product lineups.

### PASS — components/footer.tsx
- Nav labels only ("Landing Pages", "E-Commerce"), no prices. OK

### PASS — components/testimonials.tsx
- L12: "Free Setup — $497 Value" — setup-fee value, not a service price. Consistent with pricing page "save $497" mentions. OK

### PASS — app/about/page.tsx
- L49: "$20,000+" is a competitor-agency price reference, not our pricing. OK

### PASS — lib/blog-data.ts
- All dollar figures are editorial/news content (industry stats, not PepeWebTech service prices). OK

### LOW — AUDIT_REPORT.md (internal artifact)
- Contains stale prices ($297, $597, $897, $497, $997, $1,500) from a prior audit cycle. These match neither the old (297/597/897) nor new (397/697/1497) scheme consistently.
- Not served publicly by Next.js (root-level .md files are not routed).
- Recommendation: delete or move to /docs to prevent future confusion. Not a customer-facing risk.

---

## Summary Table

| File | Verdict | Issues |
|---|---|---|
| components/hero.tsx | PASS | none |
| app/page.tsx | PASS | none |
| app/contact/page.tsx | PASS | none |
| app/services/page.tsx | PASS | none |
| app/pricing/page.tsx | REJECT | Landing $997 (should be $1,497); meta desc $897 (old); missing E-Commerce |
| components/footer.tsx | PASS | none |
| components/testimonials.tsx | PASS | none |
| app/about/page.tsx | PASS | none |
| lib/blog-data.ts | PASS | none |
| AUDIT_REPORT.md | LOW | stale internal doc |
