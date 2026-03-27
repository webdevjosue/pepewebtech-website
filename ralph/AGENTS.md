# AGENTS.md — PepeWebTech.com

## Project Info
- **Type:** Static website (vanilla HTML/CSS/JS)
- **Hosting:** Vercel
- **Domain:** pepewebtech.com
- **Repo:** pepewebtech/website (GitHub)

## Structure
```
website/
├── index.html          # Homepage
├── about/index.html    # About page
├── services/index.html # Services page
├── pricing/index.html  # Pricing page
├── blog/index.html     # Blog index (60+ posts linked)
├── contact/index.html  # Contact page
├── css/
│   ├── style.css       # Main stylesheet
│   └── mobile-fixes.css # Mobile-specific fixes
├── js/
│   └── main.js         # Main JavaScript (nav, theme, animations)
├── blog/posts/         # Individual blog post HTML files
├── images/             # Image assets
├── vercel.json         # Vercel config
└── ralph/              # Ralph loop files
```

## Codebase Patterns
<!-- Populated by Ralph iterations -->

## Conventions
- No framework — vanilla HTML/CSS/JS only
- CSS custom properties in :root for theming
- Mobile-first responsive design
- Dark/light theme toggle
- No build step (static files served directly)

## Quality Checks
- HTML validation (check for broken references)
- CSS syntax validation (no build step)
- JS syntax validation (node --check)
- JSON validity (prd.json, vercel.json)
- No placeholder href="#" links
- All blog posts have mobile-fixes.css

## Known Issues (from Code Review 2026-03-27)
- Blog posts have ~100 lines of inline CSS duplicated 60+ times
- Nav HTML has buttons directly inside ul (invalid)
- No canonical URLs, OG tags, or structured data
- Contact form points to placeholder Formspree endpoint
- Pricing inconsistency between Services and Pricing pages
- No security headers in vercel.json
- Footer social links are href="#"
- No skip-to-content link

## Owner
Josue Zazueta LLC — info@pepewebtech.com
