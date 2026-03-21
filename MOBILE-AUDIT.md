# Mobile-First Responsive Design Audit

**Site:** https://www.pepewebtech.com  
**Date:** 2026-03-20  
**Auditor:** PepeWebTech Design Audit (Automated)  
**Viewport Target:** 375px (iPhone SE) — primary, scaling up to 1280px  
**Philosophy:** Mobile-first progressive enhancement. Design for the smallest screen, enhance upward.

---

## Executive Summary

The site already has a solid mobile-first foundation — CSS uses `clamp()` for fluid typography, `min-width` breakpoints for progressive enhancement, and proper `viewport` meta tags. However, **30 specific issues** were identified ranging from undersized touch targets to font sizes below readability thresholds. All fixes are in `css/mobile-fixes.css` as an override stylesheet (no changes to the original `style.css`).

### Severity Breakdown

| Severity | Count | Description |
|----------|-------|-------------|
| 🔴 Critical | 5 | Touch targets < 44px, form inputs causing iOS zoom |
| 🟠 High | 8 | Font sizes below 12px, horizontal scroll risk, hover effects on touch |
| 🟡 Medium | 12 | Blog title overflow, spacing, focus states, safe areas |
| 🟢 Low | 5 | Desktop nav font size, blog list page layout |

---

## Issues Found & Fixes Applied

### 🔴 CRITICAL

#### 1. Form inputs trigger iOS zoom (body font < 16px + input font < 16px)
- **Problem:** `body` paragraph font uses `clamp(0.875rem, ...)` = 14px at 375px. Form inputs also use this. iOS Safari auto-zooms when inputs are < 16px font-size.
- **Fix:** Force `font-size: 16px !important` on all form inputs/select/textareas. Set `min-height: 44px`.
- **File:** mobile-fixes.css — Issue 15

#### 2. Hamburger menu button touch target too small
- **Problem:** Current padding is 4px with 22px wide spans = ~30x26px tap area. Apple HIG requires 44x44px minimum.
- **Fix:** Expanded to `padding: 12px`, `min-width: 48px`, `min-height: 48px`.
- **File:** mobile-fixes.css — Issue 9

#### 3. Navigation links lack touch padding on mobile
- **Problem:** Full-screen mobile nav links have no explicit padding or min-height — tappable area depends only on text size and line-height.
- **Fix:** Added `padding: 12px 24px`, `min-height: 48px`, flex centering.
- **File:** mobile-fixes.css — Issue 8

#### 4. Body scroll not locked when mobile menu is open
- **Problem:** Opening the full-screen nav overlay doesn't prevent background scrolling. Users can accidentally scroll the page behind the menu.
- **Fix:** Added `body.menu-open` class with `overflow: hidden; position: fixed`. JavaScript toggle in blog/index.html (needs to be added to main.js too).
- **File:** mobile-fixes.css — Issue 23

#### 5. Global `max-width: 100%` on `*` selector
- **Problem:** The blanket `* { max-width: 100% }` in style.css can break flexbox/grid children, transforms, and positioned elements. This is a common anti-pattern.
- **Fix:** Reverted to `max-width: none` on `*`, re-applied only to media elements (`img, picture, video, canvas, svg`). Added `overflow-x: hidden` on html/body for horizontal scroll prevention.
- **File:** mobile-fixes.css — Issue 17

---

### 🟠 HIGH

#### 6. Body paragraph font below 16px on mobile
- **Problem:** `clamp(0.875rem, 1.5vw, 1rem)` = 14px at 375px. Below the 16px minimum for readable content without zooming.
- **Fix:** Set `body { font-size: 16px }` and `p { font-size: 1rem }`.
- **File:** mobile-fixes.css — Issue 1

#### 7. Badge/section-tag font too small
- **Problem:** `clamp(0.625rem, ...)` = 10px at 375px. Nearly illegible.
- **Fix:** Bumped minimum to `clamp(0.6875rem, 1.5vw, 0.875rem)` ≈ 11px minimum.
- **File:** mobile-fixes.css — Issue 2

#### 8. Stat labels too small
- **Problem:** 10px at 375px.
- **Fix:** Minimum `clamp(0.75rem, ...)` = 12px.
- **File:** mobile-fixes.css — Issue 3

#### 9. Blog category badges too small
- **Problem:** 10px at 375px.
- **Fix:** Minimum 11px.
- **File:** mobile-fixes.css — Issue 4

#### 10. Blog dates too small
- **Problem:** 12px at 375px — readable but tight.
- **Fix:** Minimum 13px.
- **File:** mobile-fixes.css — Issue 4

#### 11. Footer bottom text too small
- **Problem:** 11.2px at 375px.
- **Fix:** Minimum 12px.
- **File:** mobile-fixes.css — Issue 5

#### 12. Pricing badge text too small
- **Problem:** 10px at 375px.
- **Fix:** Minimum 11px.
- **File:** mobile-fixes.css — Issue 6

#### 13. Hover transforms cause "sticky hover" on touch devices
- **Problem:** Card hover effects (`translateY(-4px)`) persist after tapping on touch devices. The hover state doesn't dismiss until tapping elsewhere.
- **Fix:** Wrapped hover transforms in `@media (hover: hover) and (pointer: fine)`. Added `:active` states for touch devices.
- **File:** mobile-fixes.css — Issue 28

---

### 🟡 MEDIUM

#### 14. Blog card titles can overflow (long titles)
- **Problem:** Some titles are 60+ characters. On narrow screens, they break awkwardly and push content down excessively.
- **Fix:** Applied `-webkit-line-clamp: 3` with `overflow: hidden` on `.blog-content h3`.
- **File:** mobile-fixes.css — Issue 18

#### 15. Blog card descriptions too long on mobile
- **Problem:** Descriptions take too much vertical space on small screens.
- **Fix:** Applied `-webkit-line-clamp: 3` on `.blog-content p`.
- **File:** mobile-fixes.css — Issue 19

#### 16. CTA button minimum height not guaranteed
- **Problem:** `.btn` padding uses clamp() but no explicit min-height. Could fall below 44px on very small screens.
- **Fix:** Added `min-height: 44px` on `.btn`, 40px on `.btn-sm`, 48px on `.btn-lg`.
- **File:** mobile-fixes.css — Issue 10

#### 17. "Read More" links need larger touch target
- **Problem:** Just inline text with no padding. Hard to tap accurately on mobile.
- **Fix:** `display: inline-block`, `padding: 8px 0`, `min-height: 44px`.
- **File:** mobile-fixes.css — Issue 12

#### 18. Footer links need larger touch targets
- **Problem:** Footer nav links have no padding. On mobile, footer links are easy to misclick.
- **Fix:** `padding: 6px 0`, `min-height: 36px`. Reset to auto at 768px+.
- **File:** mobile-fixes.css — Issue 13

#### 19. Contact email link needs tap padding
- **Fix:** Added `padding: 4px 0`.
- **File:** mobile-fixes.css — Issue 14

#### 20. Safe area insets for iPhone X+
- **Problem:** No accommodation for notch/home indicator. Content can be obscured.
- **Fix:** Added `@supports (padding-top: env(safe-area-inset-top))` for navbar, hero, and footer.
- **File:** mobile-fixes.css — Issue 22

#### 21. No visible focus indicators for keyboard navigation
- **Problem:** No `:focus-visible` styles. Keyboard users can't see which element is focused.
- **Fix:** Added `outline: 2px solid var(--primary); outline-offset: 2px` on `:focus-visible` for all interactive elements.
- **File:** mobile-fixes.css — Issue 24

#### 22. Container side padding on very small screens
- **Fix:** `padding-left/right: max(1rem, env(safe-area-inset-left/right, 1rem))`.
- **File:** mobile-fixes.css — Issue 25

#### 23. Logo touch target
- **Fix:** `padding: 8px 0`, `min-height: 44px`.
- **File:** mobile-fixes.css — Issue 26

#### 24. Price description font size
- **Problem:** 12px at 375px.
- **Fix:** Minimum 13px.
- **File:** mobile-fixes.css — Issue 7

#### 25. Blog list page section header
- **Problem:** Uses inline `padding-top: 120px` which is hardcoded and doesn't account for safe areas.
- **Fix:** Replaced with `margin-top: clamp(5rem, 12vw, 7rem)` on `.section-header` inside `.blog-list`.
- **File:** mobile-fixes.css — Issue 21

---

### 🟢 LOW

#### 26. Desktop nav link font size
- **Problem:** At 1024px+, nav links are 0.9rem. Could be slightly larger.
- **Fix:** Bumped to 0.95rem at 1024px+.
- **File:** mobile-fixes.css — Issue 30

#### 27. Hero stats wrapping on very small screens
- **Fix:** Added `gap: 1.5rem` and `min-width: 80px` on stat items.
- **File:** mobile-fixes.css — Issue 29

#### 28. Select dropdown styling on mobile
- **Fix:** Custom arrow via SVG background-image. `padding-right: 40px` for arrow space.
- **File:** mobile-fixes.css — Issue 16

#### 29. Pricing feature list spacing
- **Fix:** `padding: 10px 0` on list items, `font-size: 1rem`.
- **File:** mobile-fixes.css — Issue 20

#### 30. Blog list page spacing
- **Fix:** Added `.blog-list { padding-bottom: 3rem }`.
- **File:** mobile-fixes.css — Issue 27

---

## Blog Index Rebuild

### Problems with old blog/index.html:
- Only showed **~42 posts** despite **49 HTML files** in `/blog/posts/`
- Had **duplicate entries** (same post linked twice: AI Agents Software Development, AI Agents Small Business Revolution)
- **3 posts were missing entirely** from the index
- No category filtering
- No proper mobile-first card layout
- Used the full blog-card component (with decorative blog-image div) which is wasteful for a list of 49 posts
- No meta description optimized for the page
- Title didn't reflect actual article count

### What was rebuilt:
- **All 49 posts** listed, sorted newest-first
- **Compact card design** optimized for mobile list views (no decorative image div)
- **Category filtering** with 6 filter buttons: All, Guides, AI & Automation, Web Development, AI News, Digital Marketing
- **Month separators** for visual organization
- **Post count indicator** that updates when filtering
- **Touch-friendly** filter buttons with 40px min-height
- **Blog card titles** clamped to 3 lines, descriptions to 2 lines
- **`viewport-fit=cover`** added to viewport meta for edge-to-edge on modern phones
- **mobile-fixes.css** linked for consistent mobile experience
- **Body scroll lock** when mobile menu is open
- Proper **aria attributes** on filter buttons for accessibility

### Missing posts now included:
1. `2026-02-22-small-business-ai-adoption-2026-opportunity.html`
2. `2026-03-14-wordpress-browser-workspace-small-business-guide.html`
3. `2026-03-03-ai-web-development-beyond-chatgpt-2026.html`

---

## Files Modified

| File | Action | Size |
|------|--------|------|
| `css/mobile-fixes.css` | Created (new) | ~14KB |
| `blog/index.html` | Rebuilt completely | ~52KB |
| `MOBILE-AUDIT.md` | Created (this file) | — |

## Files NOT Modified (preserved as-is)

| File | Reason |
|------|--------|
| `css/style.css` | Original styles preserved. All fixes are additive overrides in mobile-fixes.css |
| `index.html` | Homepage not modified. Fixes apply via the external CSS |
| `js/main.js` | Not modified. Body scroll lock JS is embedded in blog/index.html `<script>` block. Should be ported to main.js for the homepage too |

---

## Recommended Next Steps

1. **Add `<link>` to mobile-fixes.css in index.html** — the homepage needs this too:
   ```html
   <link rel="stylesheet" href="css/mobile-fixes.css">
   ```

2. **Port body scroll lock to main.js** — currently only in blog/index.html's inline script. The homepage hamburger menu has the same issue.

3. **Test on real devices** — specifically:
   - iPhone SE (375px) — smallest target
   - iPhone 15 Pro Max (430px) — large phone
   - iPad Mini (768px) — tablet breakpoint
   - Android Chrome on various screen sizes

4. **Add `loading="lazy"` to blog card images** — the homepage loads 8 blog cards with gradient backgrounds. When real images are added, lazy loading will improve initial page load.

5. **Consider a blog post template** — currently the blog index uses a custom compact card. Blog post pages should also include the mobile-fixes.css link.

6. **Run Lighthouse audit** — after applying fixes, run Google Lighthouse on both mobile and desktop to verify improvements.

---

## What's Working Well ✅

The site already does several things right:
- Mobile-first CSS architecture with `clamp()` for fluid typography
- Proper `100dvh` for dynamic viewport height on mobile
- Single-column grid that progressively enhances
- Dark theme with good contrast ratios
- `overflow-x: hidden` on body
- Proper `viewport` meta tag
- Google Fonts with `display=swap` for font loading performance
- `prefers-reduced-motion` media query for accessibility
- Hamburger menu with full-screen overlay (good mobile pattern)
- `backdrop-filter: blur(20px)` for navbar (supported on modern mobile browsers)
