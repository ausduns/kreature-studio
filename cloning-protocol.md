# Page Cloning Protocol

A systematic method for producing exact visual clones of web pages.

---

## Phase 0: Setup

### 0.1 Create output directory
```bash
PAGE_SLUG="<kebab-case-name>"
mkdir -p design-resources/$PAGE_SLUG-sections
```

### 0.2 Open source page in Playwright
```
Browser navigate → <target-url>
Browser resize → 1440×900 (desktop reference viewport)
```

### 0.3 Determine page structure
Run this evaluation to count major sections and identify structural pattern:
```js
() => {
  const main = document.querySelector('main');
  if (!main) return { error: 'no main element' };
  return {
    childCount: main.children.length,
    sections: Array.from(main.children).map((c, i) => ({
      idx: i,
      tag: c.tagName,
      bg: getComputedStyle(c).backgroundColor,
      h2: c.querySelector('h2')?.textContent?.trim().substring(0, 80) || '',
      h1: c.querySelector('h1')?.textContent?.trim().substring(0, 80) || '',
    })),
  };
}
```

---

## Phase 1: Extract — The Gold Standard

**CRITICAL**: Each evaluation call is expensive. Combine as many measurements as possible into single calls. Never extract the same element twice.

### 1.1 Extract the CSS token system
```js
() => {
  const root = getComputedStyle(document.documentElement);
  const tokens = {};
  for (let i = 0; i < root.length; i++) {
    const prop = root[i];
    if (prop.startsWith('--')) tokens[prop] = root.getPropertyValue(prop).trim();
  }
  return tokens;
}
```

### 1.2 Extract typography scale (one call for all headings)
```js
() => {
  function S(el) {
    if (!el) return null;
    const s = getComputedStyle(el);
    return [s.fontSize, s.fontWeight, s.lineHeight, s.letterSpacing, s.color, s.fontFamily?.substring(0, 80)];
  }
  return {
    h1: S(document.querySelector('h1')),
    h2s: Array.from(document.querySelectorAll('h2')).map(h => [h.textContent.trim().substring(0,60), ...S(h)]),
    h3s: Array.from(document.querySelectorAll('h3')).slice(0, 8).map(h => [h.textContent.trim().substring(0,60), ...S(h)]),
    bodyP: Array.from(document.querySelectorAll('p')).filter(p => p.textContent.length > 40 && p.textContent.length < 300).slice(0, 5).map(p => [p.textContent.trim().substring(0,100), ...S(p)]),
  };
}
```

### 1.3 Extract navigation
```js
() => {
  const d = {};
  const header = document.querySelector('header, [role="banner"]');
  if (header) {
    const s = getComputedStyle(header);
    d.header = { height: s.height, bg: s.backgroundColor, borderBottom: s.borderBottom, position: s.position, zIndex: s.zIndex };
  }
  const promo = document.querySelector('aside');
  if (promo) {
    const s = getComputedStyle(promo);
    const link = promo.querySelector('a');
    d.promo = { bg: s.backgroundColor, padding: s.padding };
    if (link) d.promoLink = [getComputedStyle(link).backgroundColor, getComputedStyle(link).color, getComputedStyle(link).fontSize, link.textContent.trim().substring(0, 120)];
  }
  // CTA buttons
  d.ctas = Array.from(document.querySelectorAll('a')).filter(a => a.href?.includes('signup') || a.href?.includes('sign') || a.textContent.includes('Start') || a.textContent.includes('Get started')).slice(0, 4).map(a => {
    const s = getComputedStyle(a);
    return { text: a.textContent.trim().substring(0,60), bg: s.backgroundColor, color: s.color, borderRadius: s.borderRadius, padding: s.padding, fontSize: s.fontSize, fontWeight: s.fontWeight };
  });
  return d;
}
```

### 1.4 Extract section backgrounds, padding, and spacing
```js
() => {
  const main = document.querySelector('main');
  if (!main) return [];
  return Array.from(main.children).map((child, i) => {
    const s = getComputedStyle(child);
    return { idx: i, tag: child.tagName, bg: s.backgroundColor, pt: s.paddingTop, pb: s.paddingBottom, pl: s.paddingLeft, pr: s.paddingRight };
  });
}
```

### 1.5 Extract card/component border radius
```js
() => {
  const cards = document.querySelectorAll('[class*="card"], [class*="Card"], a[class*="rounded"]');
  return Array.from(cards).slice(0, 6).map(c => {
    const s = getComputedStyle(c);
    if (s.borderRadius === '0px') return null;
    return { tag: c.tagName, radius: s.borderRadius, border: s.border, padding: s.padding, bg: s.backgroundColor, text: c.textContent.trim().substring(0, 60) };
  }).filter(Boolean);
}
```

### 1.6 Extract all image URLs
```js
() => ({
  logoImgs: Array.from(document.querySelectorAll('img[alt*="logo"], img[alt*="Logo"]')).slice(0, 20).map(i => ({ alt: i.alt, src: i.src.substring(0, 150) })),
  cardImgs: Array.from(document.querySelectorAll('main img')).filter(i => i.naturalWidth > 100 && i.naturalHeight > 100 && !i.alt?.includes('logo')).slice(0, 20).map(i => ({ alt: i.alt, src: i.src.substring(0, 150), w: i.naturalWidth, h: i.naturalHeight })),
});
```

### 1.7 Scrape exact text content (Firecrawl)
```bash
firecrawl scrape "<url>" --format markdown -o .firecrawl/<slug>.md
```
Read the output file in chunks (don't load the whole thing into context).

---

## Phase 2: Build

### 2.1 Project setup
If cloning into the Kreature project:
```bash
mkdir -p src/app/<page-slug>
```

### 2.2 Component architecture
One file: `src/app/<page-slug>/page.tsx`
- "use client" if the page has any interactivity (carousels, tabs, theme toggle)
- No external component imports unless reusing shared Kreature pieces
- Clone is self-contained

### 2.3 Data layer
Define all content as constants at the top of the file:
```tsx
const SECTION_DATA = [ ... ];
const FOOTER_DATA = { ... };
```
Never inline large text blocks inside JSX. Data goes in constants.

### 2.4 Color system
Reference all colors via CSS custom properties:
```tsx
const V = (n: string) => `var(--${n})`;
```
This makes dark/light mode automatic. Never hardcode color values in components.

### 2.5 Typography
Match the source page's exact pixel values. If it uses fluid typography, replicate the `clamp()` functions. Prefer exact values over ranges — 56px not "clamp(2rem, 5vw, 3.5rem)" unless the source actually uses fluid sizing.

### 2.6 Spacing
Use `clamp()` for section padding, exact pixel values for component internals.

### 2.7 Images
Reference source CDN URLs directly. Don't download or re-host. Add the CDN domain to `next.config.ts` `images.remotePatterns`.

### 2.8 Rebrand pass
After the clone is visually verified, do a find-replace:
- Site name → "Kreature"
- Keep the design DNA, change the content skin
- Add light/dark toggle if the original doesn't have one
- Replace logo with Kreature logo

---

## Phase 3: Verify

### 3.1 Build verification
```bash
npm run build 2>&1 | tail -15
```
Must produce zero errors. Fix TypeScript and ESLint issues before proceeding.

### 3.2 Quantitative comparison
Load both pages in Playwright tabs. Run the same evaluation on both and diff the results:
```js
() => ({
  h1: [getComputedStyle(document.querySelector('h1')).fontSize, getComputedStyle(document.querySelector('h1')).color],
  h2s: Array.from(document.querySelectorAll('h2')).map(h => getComputedStyle(h).fontSize),
  promoBg: getComputedStyle(document.querySelector('aside a') || document.querySelector('aside')).backgroundColor,
  startBtn: (() => { const b = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('Start')); return b ? [getComputedStyle(b).backgroundColor, getComputedStyle(b).borderRadius] : null; })(),
  imgCount: document.querySelectorAll('img').length,
  sectionCount: document.querySelectorAll('section').length,
});
```

### 3.3 Acceptance criteria
| Check | Target |
|-------|--------|
| H1 fontSize matches | ±1px |
| H2 fontSize matches all sections | ±1px |
| Primary CTA background color | Exact hex match |
| Button border-radius | Exact match |
| Section count matches | Same count |
| Dark sections present | If source has dark bg sections, clone must too |
| Image count within 50% | Source has N, clone can have fewer but not zero |
| Zero build errors | Required |
| Zero unused imports/vars | Required |

### 3.4 Fix discrepancies
If any measurement differs from source, fix it before proceeding. Don't ship "close enough."

---

## Phase 4: Distill

### 4.1 Extract reusable patterns
After the clone is verified, identify patterns that can be extracted into shared components:
- Navigation structure
- Footer layout
- Card variants
- Button styles
- Section templates

### 4.2 Document design decisions
Add notable findings to `design-strategy.md`:
- New color usages
- Typography variations
- Layout patterns worth reusing
- What surprised you about this clone

### 4.3 Commit
```bash
git add -A && git commit -m "feat: clone <page-name> with light/dark theme" && git push origin main
```

---

## Cheat Sheet: Key Extraction Functions

```js
// Universal style extractor — use in every evaluation
function S(el) {
  if (!el) return null;
  const s = getComputedStyle(el);
  return [s.fontSize, s.fontWeight, s.lineHeight, s.letterSpacing, s.color, s.backgroundColor, s.borderRadius, s.padding, s.border];
}

// Find button by text fragment
const btn = Array.from(document.querySelectorAll('a, button')).find(el => el.textContent.includes('Start for free'));

// Get all headings of a level
const h2s = Array.from(document.querySelectorAll('h2')).map(h => ({ text: h.textContent.trim().substring(0,80), fontSize: getComputedStyle(h).fontSize, color: getComputedStyle(h).color }));

// Get section backgrounds
const bgColors = Array.from(document.querySelectorAll('main > *')).map(c => getComputedStyle(c).backgroundColor);

// Count images by source pattern
const logoImgs = Array.from(document.querySelectorAll('img')).filter(i => i.src.includes('logo') || i.src.includes('Logo'));
```

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Guessing content instead of scraping it | Always use Firecrawl + Playwright evaluation |
| Hardcoding colors | Use CSS custom properties for theme support |
| Eye-balling spacing | Extract computed padding values |
| Skipping the quantitative verify step | Diff fontSize/color/spacing against source |
| Using "close enough" font sizes | Match exact pixel values from source |
| Not checking section background colors | Half of visual identity is in section alternation |
| Missing the promo/announcement bar | Check for `<aside>` elements in the header area |
| Not handling fluid typography | Source may use `clamp()` — check if values differ at 375px vs 1440px |
| Forgetting CDN image domains | Add to `next.config.ts` or images won't load |
| Building the rebrand before verifying the clone | Clone first, rebrand second — never mix the passes |

---

## Performance Notes

- **Combine evaluations**: Each `browser_evaluate` call is a round trip. Put as much logic in one call as possible.
- **Extract once, build from data**: Don't keep going back to the live page. One thorough extraction pass should give you everything.
- **Firecrawl for text, Playwright for styles**: Firecrawl gives exact text/links. Playwright gives exact pixel measurements. Use both.
- **Cache CDN URLs**: The source page's CDN URLs are stable. Reference them directly.

---

## Post-Clone: Kreature Integration Checklist

- [ ] All instances of source brand name replaced with "Kreature"
- [ ] Logo swapped to `/logo/kreature-logo.svg`
- [ ] Primary accent color mapped to `--color-accent-blue` (or brand orange for Kreature home)
- [ ] Light/dark theme toggle present and functional
- [ ] Design strategy document updated with new patterns
- [ ] GitHub pushed
