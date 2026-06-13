# 🔴 PEPWEBTECH DESIGN & CONVERSION AUDIT REPORT
**Date:** June 13, 2026
**Auditor:** Design Critique & Conversion Specialist
**Site:** pepewebtech.com
**Current State:** Zero paying clients, near-zero budget, solo operator

---

## CRITICAL ISSUES (Fix TODAY — These Are Costing You Sales)

### 🔴 C1. CONTACT FORM IS BROKEN — Formspree ID Is a Placeholder
**File:** `app/contact/page.tsx`, line 29
**Code:** `fetch("https://formspree.io/f/NEEDS_REAL_ID", ...)`
**Impact:** EVERY form submission fails. Every single lead that fills out the contact form gets "Something went wrong." This is the most important page on your site and it's been broken since launch.
**Fix:** Register at formspree.io, get a real form ID, replace `NEEDS_REAL_ID`. Alternatively, switch to a free service like Web3Forms (no signup needed) or Resend's free tier (100 emails/day).
**Priority:** 🔴 Do this right now. Stop reading. Fix the form.

### 🔴 C2. PRICING INCONSISTENCY — Homepage vs. Services/Pricing (All Wrong)
The same services have wildly different prices across pages:

| Service | Homepage | Services Page | Pricing Page | Contact Form |
|---------|----------|---------------|--------------|--------------|
| AI Chatbot | **$497/mo** | $297/mo | $297/mo | — |
| AI Phone Agent | **$997/mo** | $597/mo | $597/mo | — |
| Landing Page | — | From $897 | $897 | **$1,500+** |
| Business Website | — | From $2,497 | $2,497 | **$4,000+** |
| E-Commerce | — | From $4,997 | $4,997 | **$8,000+** |

**Files affected:**
- `app/page.tsx` lines 68, 81 (homepage cards)
- `components/hero.tsx` line 23, 42 (hero text + stats: "$497/month")
- `app/contact/page.tsx` lines 141-143 (dropdown options)
- `app/page.tsx` line 28 (JSON-LD: "$497-$1,497/mo (AI) | $1,500-$8,000 (Web)")

**Impact:** When a plumber sees $497/mo on the homepage then $297/mo on pricing, they either think you're dishonest (bait-and-switch) or incompetent (can't keep your prices straight). The contact form shows $1,500+ for landing pages when pricing says $897 — that's 67% higher.
**Fix:** Pick ONE set of prices. Update ALL files. Use the Pricing page as the source of truth (lowest prices = best conversion). Update homepage, hero stats, JSON-LD, and contact form dropdown to match.

### 🔴 C3. FAKE TESTIMONIALS — Legal & Trust Liability
**File:** `components/testimonials.tsx` lines 10-27
**Issue:** Three fabricated testimonials from "Marcus R. (Los Angeles)", "Sarah K. (Online Retail)", "David L. (San Diego, Restaurant Owner)". You have ZERO paying clients. These are fake. This is:
1. A **violation of FTC guidelines** on deceptive advertising (§255.1)
2. **Grounds for legal action** if a competitor reports you
3. **Instant trust destruction** if anyone recognizes the pattern (generic names, no company names, no photos, no links)
**Fix:** REMOVE IMMEDIATELY. Replace with:
- A "Founder's Promise" / personal guarantee section instead
- Or: a "Limited-Time Founding Client Offer" that turns the lack of clients into an advantage ("Be one of our first 5 clients and get 50% off your first 3 months — plus our no-risk guarantee")

### 🔴 C4. FABRICATED "50+ PROJECTS" STAT
**File:** `app/about/page.tsx` line 81
**Issue:** Shows "50+ Projects" but the showcase has 3 items, one of which is "Your Project Here." This is a lie.
**Fix:** Change to something honest but compelling:
- "3 Live Sites Shipped" → "Built on Modern Tech" → "Temecula, CA" → "Founder Available 7 Days/Week"

---

## HIGH-IMPACT IMPROVEMENTS (Fix This Week)

### 🟠 H1. NO PHONE NUMBER ANYWHERE
**Issue:** The JSON-LD has `"telephone": ""` (empty). No phone number appears on any page. The contact page lists Email + Location + Response Time but NO PHONE. You're selling AI Phone Agents but don't list your own phone number.
**Impact:** Small business owners (plumbers, dentists, restaurant owners) prefer calling over emailing. A local business without a phone number looks unestablished.
**Fix:** Get a Google Voice number (free) or Twilio number ($1/mo). Display it prominently in the navbar, footer, and contact page. Even a "(951) XXX-XXXX — Call or Text" in the footer adds massive credibility.

### 🟠 H2. HERO STATS SHOW WRONG PRICE + UNVERIFIABLE CLAIMS
**File:** `components/hero.tsx` lines 33-46
**Issue:** The 3 stats are: "24/7 Always On", "<60s Response Time", "$497 /Month Starting". The $497 is wrong (actual lowest is $297/mo). The "<60s Response Time" is ambiguous — response time for what? The AI answering calls?
**Fix:**
- Change "$497" to "$297" (matching actual pricing)
- Change "<60s Response Time" to "0 Missed Calls" or "<1s AI Response"
- Add a 4th stat or replace: "100% Money-Back" or "No Contract"

### 🟠 H3. CTA INCONSISTENCY ACROSS SITE
The primary call-to-action label changes on every page:
- Navbar: "Free Quote"
- Hero: "Book Free Strategy Call"
- Services CTA: "Get Free Strategy Call"
- Pricing CTA: "Book Free Strategy Call"
- Homepage CTA: "Get Your Free Quote" (default from CTASection component)
- Contact heading: "Ready to Start?"

**Impact:** Inconsistent CTAs create friction and confusion. The user doesn't know what to expect when clicking.
**Fix:** Pick ONE primary CTA label and use it everywhere: **"Book Your Free Call"** (short, clear, value-driven). Update CTASection default, navbar, and all page-level overrides.

### 🟠 H4. SETUP FEE INCONSISTENCY
- Services page Full Package: "Free setup (normally $997)" — `app/services/page.tsx` line 86
- Pricing page Phone Agent: "Setup included (normally $497)" — `app/pricing/page.tsx` line 58
- Pricing page Full Package: "Free setup (save $497)" — `app/pricing/page.tsx` line 73

Setup fee is listed as both $497 and $997 depending on where you look.
**Fix:** Pick one setup fee number. Use $497 everywhere or remove setup fee mentions entirely (simpler).

### 🟠 H5. CONTACT FORM MISSING KEY FIELDS
**File:** `app/contact/page.tsx` lines 110-161
**Issue:** Form only asks for Name, Email, Project Type, Message. Missing:
- **Phone number** (your audience prefers phone, not email)
- **Business name** (B2B form — you need to know who they are)
- **Best time to call** (for the "strategy call" you're offering)
**Fix:** Add phone (required), business name (required), and a "best time to reach you" field. Update the dropdown prices to match the actual pricing page.

### 🟠 H6. SERVICES PAGE SHOWCASE TECH STACK IS IRRELEVANT TO CLIENTS
**File:** `app/services/page.tsx` lines 251-264
**Issue:** The "Tech Stack" section lists: "Next.js 14, TypeScript, Tailwind CSS, Vercel, Static Export, SEO". A plumber does not care about TypeScript. This section signals "this person is a developer showing off" not "this person understands my business."
**Fix:** Remove the Tech Stack section entirely from the client-facing showcase. Replace with business outcomes: "Loads in under 1 second", "Found on Google for 12+ keywords", "Works on every phone".

### 🟠 H7. SHOWCASE TAGS ARE DATED
**File:** `components/showcase.tsx` lines 23, 33, 43
**Issue:** Tags say "HTML5", "CSS3", "JavaScript" — these are 2010-era buzzwords that make the work look dated.
**Fix:** Replace with outcome-focused tags: "Responsive", "SEO Optimized", "Fast Loading" or modern stack tags if you must show tech: "Next.js", "React", "Tailwind".

### 🟠 H8. DEFAULT THEME IS DARK — Wrong for This Audience
**File:** `app/layout.tsx` line 63
**Code:** `defaultTheme="dark"`
**Issue:** Dark theme as default is risky for B2B service targeting non-tech-savvy small business owners. Dark themes feel "developer-y" or "gamer-y." Light themes feel clean, professional, trustworthy — like a dentist's office or law firm.
**Impact:** Studies show light themes convert better for service-based businesses targeting older, less tech-savvy audiences.
**Fix:** Change to `defaultTheme="light"` or remove `defaultTheme` entirely and let `enableSystem` work. Keep dark mode as an option via the toggle, but don't force it.

### 🟠 H9. NO LOCAL SEO SIGNALS — Missing "Temecula" Everywhere
**Issue:** The site targets Temecula, CA small businesses but never mentions "Temecula." The About page says "Southern California." The JSON-LD says "Southern California." The showcase mentions "Murrieta, CA" for the barbershop.
**Impact:** Local SEO depends on mentioning your city. A plumber Googling "AI answering service Temecula" won't find you.
**Fix:**
- Add "Temecula, CA" to the hero or badge area
- Update About page to say "Based in Temecula, California"
- Update JSON-LD `address.addressLocality` to "Temecula"
- Add "Serving Temecula, Murrieta, & Southern California" in the footer
- Create a blog post: "Why Temecula Businesses Need AI Phone Agents in 2026"

### 🟠 H10. BLOG POST HEADLINES DON'T SPEAK TO TARGET AUDIENCE
**File:** `lib/blog-data.ts`
**Issue:** Blog titles like "Microsoft Just Turned Windows Into an AI Agent Platform: What Small Businesses Need to Know" and "Why AI Search Can't Find Your Small Business (And How Schema Markup Fixes It)" are too technical. A plumber won't click on "Schema Markup."
**Fix:** Write from the business owner's perspective:
- "How Temecula Plumbers Are Using AI to Answer Every Call"
- "Your Competitor's Website Is Stealing Your Customers — Here's Why"
- "Cost of a Missed Call: What It Really Costs Your Business"

---

## MEDIUM-IMPACT POLISH ITEMS (Fix When Time Allows)

### 🟡 P1. HOMEPAGE SERVICES SECTION TITLE IS GENERIC
**File:** `app/page.tsx` line 57
**Current:** "AI Employees + Websites"
**Fix:** "Never Miss Another Customer" or "Two Services. Zero Lost Revenue."

### 🟡 P2. HOMEPAGE "WHY US" SECTION USES UNVERIFIABLE CLAIMS
**File:** `app/page.tsx` lines 128-149
**Issue:** "4x Faster" and "50% Cheaper" are unsubstantiated marketing claims. The FTC doesn't like these without evidence, and savvy buyers are skeptical.
**Fix:** Change to benefit-focused cards:
- "4x Faster" → "Live in Days, Not Months"
- "50% Cheaper" → "Half the Price of Big Agencies" (with "Get a quote to compare" microcopy)
- "Secure Hosting" → Add "Free with every plan" as microcopy

### 🟡 P3. SERVICES PAGE HEADLINE IS GOOD BUT SUBHEAD IS SNARKY
**File:** `app/services/page.tsx` line 39
**Current:** "Your competitors are still paying humans to answer phones at 2am. You won't have to."
**Issue:** The "competitors" framing is good, but "paying humans to answer phones at 2am" is weird — nobody does that. Also, the snark may alienate.
**Fix:** "While your competitors miss 4 out of 10 calls after hours, you'll capture every single one."

### 🟡 P4. SERVICES PAGE ROI MATH IS QUESTIONABLE
**File:** `app/services/page.tsx` lines 141-166
**Issue:** Claims "$104,000/year lost" from missed calls. The math: 10 missed calls/week × $200 × 52 weeks = $104,000. But:
1. 10 missed calls/week is very high for a small business
2. $200 average job value is high for many businesses (a restaurant? a barber?)
3. "ROI: 1,350%" is suspiciously high and will trigger skepticism
**Fix:** Make it more conservative and realistic:
- "Without AI: You miss ~4 calls/week after hours"
- "At $150 average job value × 4 calls × 52 weeks = $31,200/year in missed revenue"
- "AI Employee cost: $297/month = $3,564/year. You only need 2 recovered calls/month to break even."

### 🟡 P5. PRICING PAGE THIRD WEB PLAN IS CONFUSING
**File:** `app/pricing/page.tsx` lines 113-128
**Issue:** The third web plan is "Website + AI Employee" at "$3,497 + $597/mo." This mixes one-time and recurring pricing in a confusing way. The period says "+ $597/mo" which is unclear.
**Fix:** Clarify: "$3,497 setup + $597/mo" with a note "(Most popular — saves $1,000 vs buying separately)".

### 🟡 P6. PRICING PAGE FAQ IS ACTUALLY GOOD — BUT BURIED
**File:** `app/pricing/page.tsx` lines 131-156
**Issue:** The FAQ answers are well-written and address real concerns (contract terms, setup time, what if AI can't answer). But FAQ is at the bottom of the pricing page and not on the homepage or services page where first-time visitors might have these questions.
**Fix:** Add the top 3 FAQs ("Is there a contract?", "How fast is setup?", "Can I see it first?") as a small section on the homepage below the services section.

### 🟡 P7. NAVBAR LOGO IS PLAIN TEXT
**File:** `components/navbar.tsx` line 42
**Issue:** "PepeWebTech" is plain text with no logo mark. Looks like a personal project, not a business.
**Fix:** Add a simple logo mark — even a stylized "P" in a rounded square with the brand gradient would add professionalism. Use an icon from Lucide (e.g., `Bot` or a custom SVG) before the wordmark.

### 🟡 P8. SHOWCASE HAS "Your Project Here" CARD — Looks Desperate
**File:** `components/showcase.tsx` lines 48-55
**Issue:** The fourth showcase card literally says "Your Project Here" which screams "I have no portfolio."
**Fix:** Remove this card entirely. With 3 real projects, that's enough. Or replace with a "Founding Client Spotlight" card explaining the special offer for first clients.

### 🟡 P9. FOOTER IS INCOMPLETE
**File:** `components/footer.tsx`
**Issue:**
- Services column lists "Landing Pages, Business Sites, E-Commerce, Maintenance" but NO link to AI Employees (your primary offering!)
- No phone number
- No physical address (just "Southern California" elsewhere)
- No social media links
- Connect section only has "Email"
**Fix:** Add AI Employees links to the Services column. Add phone number, social links (even if just LinkedIn), and city/region.

### 🟡 P10. ABOUT PAGE IS GENERIC
**File:** `app/about/page.tsx` lines 46-58
**Issue:** The "Our Mission" section is 3 paragraphs of generic agency copy ("make professional web development accessible", "No more $20,000 quotes", "cutting-edge AI tools"). Nothing personal. No story. No reason to trust this specific person.
**Fix:** Add a personal founder story:
- "I'm Josue. I work full-time at a grocery store in Temecula and build websites and AI systems in the evenings. I started PepeWebTech because I watched local businesses lose customers to missed calls and bad websites. I'm not a big agency — I'm your neighbor, and I'll personally handle your project from start to finish."
- This is HONEST, RELATABLE, and DIFFERENTIATING. The "grocery store by day, developer by night" story is genuinely compelling and builds more trust than generic agency copy.

### 🟡 P11. CONTACT PAGE DOESN'T MENTION "STRATEGY CALL"
**File:** `app/contact/page.tsx`
**Issue:** Every CTA on the site says "Book Free Strategy Call" but the contact page is a generic "Send Message" form. There's a disconnect between "book a call" and "fill out this form."
**Fix:** Either:
- Add a "Schedule a Call" option with a Calendly/embedded scheduler, OR
- Reframe the contact page: "Book Your Free Strategy Call" heading, and the form becomes "Tell us about your business and we'll reach out within 24 hours to schedule your call"

### 🟡 P12. NO TRUST INDICATORS ANYWHERE
**Issue:** The site has zero trust elements:
- No guarantee/risk reversal (money-back, satisfaction guarantee)
- No "as seen on" or partner badges
- No security badges on the contact form
- No "number of businesses served" (because it's zero)
- No industry affiliations (BBB, Chamber of Commerce)
**Fix:** Add at minimum:
- A "100% Satisfaction Guarantee — Cancel anytime, first 30 days free" banner
- "Month-to-month, no contracts" as a trust badge near pricing
- Consider joining the Temecula Chamber of Commerce ($75-150/year) and display the badge

### 🟡 P13. HOMEPAGE "READY TO BUILD YOUR WEBSITE?" CTA IS WEAK
**File:** `app/page.tsx` lines 191-194
**Issue:** The homepage's final CTA says "Ready to Build Your Website?" — but the page just spent the entire scroll talking about AI Employees. The CTA doesn't match the content.
**Fix:** "Ready to Stop Losing Customers?" (matching the services/pricing CTA) or "Ready to Hire Your First AI Employee?"

### 🟡 P14. SERVICES PAGE HAS DUPLICATE SHOWCASE
**Issue:** The homepage has a `Showcase` component (4 cards including PepeWebTech, Web Dev Josue, The Butchers, Your Project Here). The Services page ALSO has a showcase section (PepeTech with full tech stack). These are completely different and inconsistent.
**Fix:** Consolidate into one showcase. Put the better, cleaner version (without tech stacks) on the homepage. Remove the duplicate from services or make it a different format (e.g., a case study deep-dive format).

---

## SUMMARY OF PRICING FIXES NEEDED

Pick ONE price for each service and apply EVERYWHERE:

| Service | Recommended Price | Files to Update |
|---------|-------------------|-----------------|
| AI Chatbot | **$297/mo** | `page.tsx` L68, `hero.tsx` L23/L42, JSON-LD L28 |
| AI Phone Agent | **$597/mo** | `page.tsx` L81, JSON-LD L28 |
| Landing Page | **$897** | `contact/page.tsx` L141, JSON-LD L28 |
| Business Website | **$2,497** | `contact/page.tsx` L142, JSON-LD L28 |
| E-Commerce | **$4,997** | `contact/page.tsx` L143, JSON-LD L28 |
| Setup Fee | **$497** | `services/page.tsx` L86 (change $997→$497) |

---

## TOP 5 ACTIONS (If You Only Do 5 Things This Weekend)

1. **🔴 Fix the broken contact form** (C1) — You're losing 100% of form leads
2. **🔴 Align all pricing** (C2) — Use the table above, fix all files
3. **🔴 Remove fake testimonials** (C3) — Legal risk + trust killer
4. **🟠 Add a phone number** (H1) — Free via Google Voice
5. **🟠 Change default theme to light** (H8) — One line change, big trust boost

---

*Report generated from source code review of all pages, components, and configuration files.*
