# Mobile Test Checklist

Test with Chrome DevTools (Cmd+Shift+M) or a real device before each release.

## Viewport Sizes

| Device | Width | Notes |
|---|---|---|
| iPhone 12 mini | 375px | Smallest common iOS |
| iPhone 12 / 14 | 390px | Standard iOS |
| iPhone 12 Plus / 14 Plus | 414px | Large iOS |
| iPad Mini | 768px | Tablet breakpoint |
| iPad Pro 11" | 834px | Near desktop |

---

## Global

- [ ] No horizontal overflow (set `overflow-x: hidden` on body if needed)
- [ ] All buttons/links have min tap target of **48px** height
- [ ] No text smaller than **12px**
- [ ] Fonts render correctly (no FOUT / layout shift)
- [ ] Safe area insets respected (notch, home indicator) — use `env(safe-area-inset-*)`
- [ ] BottomDock visible and not overlapping content (`pb-32 md:pb-12` on pages)

## Header

- [ ] Logo visible and not clipped
- [ ] Desktop nav hidden on mobile (hidden `md:flex`)
- [ ] No overflow from long content

## Index (Homepage)

- [ ] Hero text fits without overflow at 375px
- [ ] CTAs stacked and fully tappable
- [ ] Stats bento grid adapts (1-col on mobile)
- [ ] PropertyBento grid: 1-col on mobile
- [ ] ScrollToTop button not blocking content

## /immobili (Catalog)

- [ ] Filter/sort controls usable
- [ ] Property cards display correctly (image + text)
- [ ] No card truncation at 375px

## /immobile/:id (Property Detail)

- [ ] Image gallery scrollable horizontally, counter visible
- [ ] Specs row (mq, locali, bagni) fits without overflow
- [ ] Contact form accessible (sticky bottom bar visible)
- [ ] Open House booking section visible
- [ ] Map iframe loads (if present)
- [ ] Fixed bottom price bar does not block form submit button

## Contact Form

- [ ] All inputs reachable (keyboard does not hide fields)
- [ ] Privacy checkbox tappable
- [ ] Submit button at least 48px tall
- [ ] Error messages visible above keyboard

## /chi-siamo

- [ ] Team section displays correctly
- [ ] No image overflow

## Footer

- [ ] Links stacked or readable
- [ ] Social icons tappable (min 44px)
- [ ] Legal text readable (≥12px)

## CookieBanner

- [ ] Banner appears above BottomDock (`bottom-20 md:bottom-6`)
- [ ] Accept/Reject buttons side by side (or stacked on very small)
- [ ] Not overlapping form fields

## /terms, /cookies, /privacy

- [ ] Long text scrollable
- [ ] Tables scroll horizontally on narrow screens

---

## Results Log

| Date | Tester | Device | Issues Found |
|---|---|---|---|
| 2025-04 | - | Chrome DevTools 375px | - |
