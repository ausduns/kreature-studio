# Kreature Design Strategy

**Agency:** Kreature — AI Product Studio for Founders Who Ship Fast
**Domain:** kreature.studio
**Last updated:** 2026-06-15

---

## 1. Brand Identity

### Core Position
Kreature builds products for non-technical founders. We're not an agency that sells hours — we sell shipped products with fixed scope, fixed timeline, fixed price. Our design must communicate speed, technical competence, and trust — not creative fluff.

### Brand Voice
- **Direct, not clever.** Say what we do. No jargon.
- **Confident, not loud.** We ship fast. The results speak.
- **Founder-centric.** We talk to people building businesses, not design committees.

### Name & Tagline
- **Name:** Kreature
- **Tagline:** We build products. You ship fast.
- **Wordmark:** `kreature.` — lowercase, trailing dot as signature mark

---

## 2. Visual Direction

### Primary Aesthetic: Engineered Confidence
Dark mode as default brand canvas. Deep near-black surfaces with high-contrast typography and a single sharp accent. Glassmorphism cards for depth without heaviness. Atmospheric accent glows for emotional warmth against the engineered precision.

**Keywords:** engineered, fast, sharp, dark, confident, productized

### Reference Inspirations
| Source | What We Extract |
|--------|-----------------|
| webflow.com | Light-canvas layout structure, fluid typography, logo marquees, card systems |
| Landin (reference) | Dark glassmorphic agency aesthetic, blue accent, DM Sans |
| LanderX (reference) | Blue/purple gradient glows, AI SaaS patterns |
| Nubien (reference) | Futuristic AI studio, rotating carousel, purple accents |

### Dual-Theme Strategy
Every cloned page gets two modes:
1. **Dark mode (default)** — Our brand-native dark canvas
2. **Light mode** — Source-page fidelity (for pages cloned from light-themed originals)

Users toggle via the theme button in nav. CSS custom properties handle the swap globally.

---

## 3. Color System

### Dark Mode (Brand Default)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-canvas` | `#050816` | Page background |
| `--color-canvas-soft` | `#0a0f1e` | Section alternation |
| `--color-canvas-mid` | `#0d1225` | Card surfaces |
| `--color-ink` | `#ffffff` | Headings, primary text |
| `--color-body` | `rgba(255,255,255,0.7)` | Body text |
| `--color-body-mid` | `rgba(255,255,255,0.5)` | Secondary text |
| `--color-mute` | `rgba(255,255,255,0.3)` | Tertiary labels |
| `--color-hairline` | `rgba(255,255,255,0.06)` | Borders, dividers |
| `--color-accent` | `#F97316` (orange) | Primary CTAs, brand signals |

### Chromatic Accent System (from webflow.com design language)
Used sparingly across the site — icon spots, category indicators, badges:

| Color | Hex | Kreature Application |
|-------|-----|---------------------|
| Purple | `#7a3dff` | AI/Intelligence features |
| Pink | `#ed52cb` | Creative/Design flourishes |
| Blue | `#3b89ff` | Engineering/Systems |
| Blue (deep) | `#006acc` | Link emphasis |
| Blue (info) | `#146ef5` | Badges, info states |
| Orange | `#ff6b00` | Speed/Shipping |
| Green | `#00d722` | Growth/Results, success states |
| Yellow | `#ffae13` | Warnings |
| Red | `#ee1d36` | Errors, destructive actions |

### Light Mode
Inverted surface hierarchy — `#ffffff` canvas, `#080808` ink. Accent colors brighten slightly for contrast against white.

---

## 4. Typography

### Primary Font: Poly Sans
- **Headings:** Poly Sans Neutral (400) / Median (500) / Bulky (600)
- **Body:** Poly Sans Neutral (400)
- **Mono:** Poly Sans Mono Neutral (400) — code, technical captions
- **Wide:** Poly Sans Wide Median (500) — hero eyebrow labels, section markers

### Fallback Stack
`'Poly Sans', system-ui, -apple-system, sans-serif`

### Type Scale (from webflow.com analysis)
| Token | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| Display XXL | 80px | 600 | 83.2px | Hero headlines |
| Display XL | 56px | 600 | 58.24px | Section headlines |
| Display LG | 48px | 600 | ~50px | Sub-hero displays |
| Display MD | 32px | 500 | 41.6px | Card cluster headlines |
| Display SM | 24px | 500 | 31.2px | Sub-section displays |
| Display XS | 20px | 500 | 28px | Inline micro-headings |
| Eyebrow | 15px | 500 | 19.5px | UPPERCASE section markers |
| Body LG | 20px | 400 | ~30px | Lead paragraphs |
| Body MD | 16px | 400 | 25.6px | Default body |
| Body SM | 14px | 400 | 22.4px | Secondary body, nav links |
| Caption | 12.8px | 550 | 15.36px | Badge labels |
| Button | 16px | 500 | 19.2px | CTA labels |

---

## 5. Component System

### Buttons
- **Primary:** `#F97316` (orange) fill, white text, 4px radius, 16px/24px padding
- **Secondary:** Transparent, white border, white text, same geometry
- **Text + Arrow:** No background, ink text, underline on hover

### Cards
- **Default:** `--color-canvas-mid` surface, 1px hairline border, 8px radius, 32px padding
- **Featured/Polarity-flipped:** Dark fill + light text, layered shadow
- **Category:** Full-fill chromatic accent colors with white text

### Navigation
- Sticky, 68px height, canvas background
- Hairline bottom border on scroll
- Desktop: horizontal link row + CTA pill
- Mobile: hamburger → slide-down panel

### Section Structure
- Full-width bands with 1440px max-width inner container
- Section spacing: `clamp(3rem, 8vw, 9rem)` vertical padding
- Alternating backgrounds: canvas → canvas-soft → canvas

---

## 6. Page Architecture

### Home Page (kreature.studio)
```
Navigation → Hero → ProofBar → WhatWeSell → Offers → CaseStudies → Process → FAQ → CTASection → ContactForm → Footer
```
**Status:** Built. Dark theme. Orange accent. 11 component sections.

### Cloned Pages (in progress)
Each cloned page serves as a repurposable template:

| Page | Source | Purpose |
|------|--------|---------|
| `/webflow-clone` | webflow.com | Platform marketing page → repurpose as Kreature product page |

---

## 7. Design Principles

1. **Dark by default.** Our brand lives in dark mode. Light mode is an accommodation, not the identity.
2. **One accent color owns the conversion path.** Orange (`#F97316`) for every primary CTA. Chromatic accents are for categorization, never for actions.
3. **Type carries the voice.** Poly Sans at weight 500/600 is confident. Never use weight 700+. Negative tracking at display sizes.
4. **Cards don't shout.** Hairline borders, subtle hover shadows, glassmorphism for depth. No heavy borders or dramatic shadows.
5. **Every clone is a template.** Pages we clone are repurposed, skeletonized, and rebranded — not just copied.
6. **Light/dark duality.** Every page ships with both modes via CSS custom properties.
7. **No placeholder content ships.** Images come from CDN or are generated. Text is real. No lorem ipsum.
8. **Measured, not guessed.** Every spacing, font size, and color value is extracted from source pages via browser inspection or Firecrawl. No eyeballing.

---

## 8. Technical Implementation

### Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Fonts:** Poly Sans (self-hosted OTF via `@font-face`)
- **Images:** Next.js `<Image>` with remote CDN patterns

### Theme Switching
```css
:root { /* dark mode tokens (default) */ }
.light { /* light mode tokens */ }
```
Toggle applies `.light` class to `<html>`. All components reference `var(--color-*)` — no hardcoded colors.

### File Convention
- `/src/app/` — routes (home page, cloned pages)
- `/src/components/` — shared Kreature components
- `/src/app/fonts.css` — `@font-face` declarations
- `/src/app/globals.css` — CSS custom properties, theme tokens
- `/design-resources/` — screenshots, reference images, font files
- `/design-strategy.md` — this document

---

## 9. Open Decisions & Next Steps

- [ ] Kreature wordmark/logo design
- [ ] Favicon and social preview images
- [ ] Custom icon set vs Lucide/Heroicons
- [ ] Animation strategy (page load reveals, scroll triggers, hover states)
- [ ] Additional page clones (pricing, about, case studies)
- [ ] Component extraction — pull shared patterns from clones into `/src/components/`
- [ ] Responsive audit — verify all clones at 375px / 768px / 1024px / 1440px
- [ ] Accessibility audit — contrast ratios, keyboard navigation, screen reader testing

---

*This document grows as we build. Each cloned page brings new patterns; each decision gets logged here.*
