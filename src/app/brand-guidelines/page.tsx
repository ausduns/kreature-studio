"use client";

import { useState } from "react";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY (extracted from brand.webflow.com at 1440px) ─── */
const T = {
  h2: { fontSize: "85.008px", fontWeight: 600, lineHeight: "88.4083px", letterSpacing: "0.85008px" } as React.CSSProperties,
  h3: { fontSize: "37.008px", fontWeight: 600, lineHeight: "38.4883px", letterSpacing: "0.37008px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  navLabel: { fontSize: "14px", fontWeight: 500, lineHeight: "1.4" } as React.CSSProperties,
  navSublabel: { fontSize: "14px", fontWeight: 400, lineHeight: "1.4" } as React.CSSProperties,
};

/* ─── DATA ─── */

const SIDEBAR_SECTIONS = [
  {
    label: "Brand Assets",
    items: ["Logos", "Colors", "Typography", "Imagery"],
  },
  {
    label: "Design Guidelines",
    items: ["Logo usage", "Typography", "Color palette", "Iconography", "Motion"],
  },
  {
    label: "Voice and Tone",
    items: ["Dimensions of voice", "Voice across surfaces", "Boilerplate", "FAQs"],
  },
  {
    label: "Resources",
    items: ["FAQs", "Press Kit", "Partner Portal"],
  },
];

const BRAND_CATEGORIES = [
  {
    icon: "/logo/kreature-logo-light.png",
    title: "Logo",
    desc: "The Kreature mark represents engineered creativity — the intersection of product thinking and speed. Built from sharp geometry and a single accent color, it signals confidence without shouting.",
    link: "How to use the logo",
    accent: "var(--color-accent-blue)",
  },
  {
    icon: null,
    title: "Typography",
    desc: "Poly Sans is our voice in type. Its neutral, engineered forms with median and bulky weights give us range — from technical precision to bold confidence. No decorative flourishes, just clarity.",
    link: "How to use typography",
    accent: "var(--color-accent-purple)",
  },
  {
    icon: null,
    title: "Color",
    desc: "Dark mode is our native canvas. A near-black surface palette with high-contrast ink and a single orange accent for the conversion path. Chromatic accents — blue, purple, pink, green — categorize; orange converts.",
    link: "How to use color",
    accent: "var(--color-accent-orange)",
  },
  {
    icon: null,
    title: "Illustration",
    desc: "Abstract geometric forms with atmospheric glows add depth and warmth to our engineered surfaces. Illustrations use accent colors at low opacity — they suggest, never overwhelm.",
    link: "How to use illustration",
    accent: "var(--color-accent-pink)",
  },
  {
    icon: null,
    title: "Motion",
    desc: "Scroll reveals and hover states follow a single easing curve. Motion is fast and purposeful — never decorative. Transitions complete in 150-300ms; page loads use staggered reveals to create momentum.",
    link: "How to use motion",
    accent: "var(--color-accent-green)",
  },
  {
    icon: null,
    title: "Voice & Tone",
    desc: "Direct, confident, founder-centric. We speak like the technical co-founder every non-technical founder wishes they had: knowledgeable, experienced, warm, and allergic to jargon.",
    link: "How to use voice & tone",
    accent: "var(--color-accent-blue)",
  },
];

const FOOTER_COLS = [
  {
    label: "Product",
    links: ["Platform", "Design", "CMS", "Hosting", "Localization", "SEO", "AI", "Optimize", "Analyze", "Ecommerce", "Figma to Kreature", "Accessibility"],
  },
  {
    label: "Solutions",
    links: ["Enterprise", "Startups", "Agencies", "Freelancers", "Developers", "Creative Teams", "Marketers"],
  },
  {
    label: "Resources",
    links: ["Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Glossary", "Made in Kreature", "The Kreature Way"],
  },
  {
    label: "Company",
    links: ["About", "Careers", "Brand Guidelines", "Terms of Service", "Privacy policy", "Accessibility statement"],
  },
  {
    label: "Compare",
    links: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  },
  {
    label: "Community",
    links: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become an affiliate", "Find a meetup"],
  },
  {
    label: "Get help",
    links: ["Support", "Pricing", "Status", "Contact Sales"],
  },
];

/* ─── COMPONENTS ─── */

function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">→</span>;
}

/* ─── PAGE ─── */

export default function BrandGuidelines() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="brand-page" style={{ background: V("color-canvas"), color: V("color-body"), minHeight: "100vh" }}>
      {/* ═══════ MOBILE NAV TOGGLE ═══════ */}
      <div className="fixed top-4 left-4 z-[1001] lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 rounded-full border flex items-center justify-center"
          style={{ borderColor: V("color-hairline"), background: V("color-canvas"), color: V("color-ink") }}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 2l12 12M14 2L2 14"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4h12M2 8h12M2 12h12"/></svg>
          )}
        </button>
      </div>

      {/* ═══════ OVERLAY ═══════ */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden" onClick={() => setMobileOpen(false)} style={{ background: "rgba(0,0,0,0.4)" }} />
      )}

      {/* ═══════ SIDEBAR ═══════ */}
      <aside
        className={`fixed top-0 left-0 h-full z-[1000] w-[280px] overflow-y-auto transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        style={{ background: V("color-canvas"), borderRight: `1px solid ${V("color-hairline")}` }}
      >
        <div className="p-8 flex flex-col gap-10 pt-8">
          {/* Logo header */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo/kreature-logo-dark.png"
              alt="Kreature"
              className="h-[36px] w-auto logo-dark"
            />
            <img
              src="/logo/kreature-logo-light.png"
              alt="Kreature"
              className="h-[36px] w-auto logo-light"
            />
            <span className="font-semibold text-lg tracking-tight" style={{ color: V("color-ink") }}>
              Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
            </span>
          </a>

          {/* Nav sections */}
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.label}>
              <p className="mb-3 font-medium" style={{ ...T.navLabel, color: V("color-ink") }}>
                {section.label}
              </p>
              <div className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="inline-block transition-colors hover:opacity-70"
                    style={{ ...T.navSublabel, color: V("color-body-mid"), textDecoration: "none" }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Search */}
          <div>
            <a href="#" className="inline-block transition-colors hover:opacity-70" style={{ ...T.navLabel, color: V("color-body-mid"), textDecoration: "none" }}>
              Search
            </a>
          </div>
        </div>
      </aside>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <div className="lg:ml-[280px]">
        {/* Hero section */}
        <section
          className="flex flex-col items-center justify-center text-center px-5 sm:px-8"
          style={{ paddingTop: "160px", paddingBottom: "160px", background: V("color-canvas") }}
        >
          {/* Logo mark stages */}
          <div className="flex items-center justify-center gap-4 mb-12 opacity-60">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ background: V("color-canvas-mid") }}>
              <span style={{ fontSize: "28px" }}>⬡</span>
            </div>
            <span className="text-2xl" style={{ color: V("color-mute") }}>→</span>
            <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ background: V("color-canvas-mid") }}>
              <span style={{ fontSize: "28px" }}>⬢</span>
            </div>
            <span className="text-2xl" style={{ color: V("color-mute") }}>→</span>
            <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ background: V("color-accent-blue"), color: "#fff" }}>
              <img src="/logo/kreature-logo-light.png" alt="Kreature mark" className="h-8 w-auto" />
            </div>
          </div>

          <h2
            className="max-w-[900px] mb-8"
            style={{ ...T.h2, color: V("color-ink") }}
          >
            Crafted for founders.<br />Powered by code.<br />Driven by speed.
          </h2>

          <a
            href="#explore"
            className="inline-flex flex-col items-center gap-2 transition-colors hover:opacity-70"
            style={{ ...T.body, color: V("color-body"), textDecoration: "none" }}
          >
            Explore our brand
            <span className="text-lg" style={{ color: V("color-accent-blue") }}>↓</span>
          </a>
        </section>

        {/* Divider */}
        <div className="w-full" style={{ height: "1px", background: V("color-hairline") }} />

        {/* Explore section */}
        <section
          id="explore"
          className="px-5 sm:px-8"
          style={{ paddingTop: "160px", paddingBottom: "160px", background: V("color-canvas") }}
        >
          <div className="max-w-[1200px] mx-auto">
            <h2 className="mb-20" style={{ ...T.h2, color: V("color-ink") }}>
              Explore our brand
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[clamp(2rem,4vw,4rem)]">
              {BRAND_CATEGORIES.map((cat) => (
                <a
                  key={cat.title}
                  href="#"
                  className="group block"
                  style={{ textDecoration: "none" }}
                >
                  {/* Category icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors"
                    style={{ background: "color-mix(in srgb, " + cat.accent + " 12%, transparent)" }}
                  >
                    {cat.icon ? (
                      <img src={cat.icon} alt={cat.title} className="h-6 w-auto" />
                    ) : (
                      <span style={{ fontSize: "20px", color: cat.accent }}>
                        {cat.title === "Typography" ? "Aa" :
                         cat.title === "Color" ? "◉" :
                         cat.title === "Illustration" ? "◇" :
                         cat.title === "Motion" ? "◎" :
                         cat.title === "Voice & Tone" ? "♪" : "◆"}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-4" style={{ ...T.h3, color: V("color-ink") }}>
                    {cat.title}
                  </h3>

                  <p className="mb-4" style={{ ...T.body, color: V("color-body") }}>
                    {cat.desc}
                  </p>

                  <span
                    className="inline-flex items-center transition-colors group-hover:opacity-70"
                    style={{ ...T.body, color: V("color-ink"), fontWeight: 500 }}
                  >
                    {cat.link} <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full" style={{ height: "1px", background: V("color-hairline") }} />

        {/* Download section */}
        <section
          className="px-5 sm:px-8"
          style={{ paddingTop: "clamp(4rem, 8vw, 8rem)", paddingBottom: "clamp(4rem, 8vw, 8rem)", background: V("color-canvas") }}
        >
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="mb-6" style={{ ...T.h3, color: V("color-ink") }}>
              Download brand assets
            </h2>
            <p className="mb-10 max-w-[600px] mx-auto" style={{ ...T.body, color: V("color-body") }}>
              Everything you need to represent Kreature correctly — logos, colors, fonts, and templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center rounded-sm transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "16px 24px",
                  borderRadius: "4px",
                  background: V("color-accent-blue"),
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Download logo kit <span className="ml-2">↓</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-sm transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "16px 24px",
                  borderRadius: "4px",
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                  textDecoration: "none",
                }}
              >
                View design guidelines <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full" style={{ height: "1px", background: V("color-hairline") }} />

        {/* ═══════ FOOTER ═══════ */}
        <footer className="px-5 sm:px-8" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 4vw, 3rem)", background: V("color-canvas") }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-12">
              {FOOTER_COLS.map((col) => (
                <div key={col.label}>
                  <p className="mb-4 font-medium" style={{ ...T.navLabel, color: V("color-ink") }}>
                    {col.label}
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="transition-colors hover:opacity-70"
                        style={{ ...T.navSublabel, color: V("color-body-mid"), textDecoration: "none" }}
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
              style={{ borderTop: `1px solid ${V("color-hairline")}` }}
            >
              <div className="flex items-center gap-2.5">
                <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="h-6 w-auto logo-dark" />
                <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-6 w-auto logo-light" />
                <span className="font-semibold text-sm tracking-tight" style={{ color: V("color-ink") }}>
                  Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
                </span>
              </div>

              <p style={{ ...T.bodySm, color: V("color-mute") }}>
                © {new Date().getFullYear()} Kreature Studio. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <a href="#" style={{ ...T.bodySm, color: V("color-mute"), textDecoration: "none" }}>Twitter</a>
                <a href="#" style={{ ...T.bodySm, color: V("color-mute"), textDecoration: "none" }}>LinkedIn</a>
                <a href="#" style={{ ...T.bodySm, color: V("color-mute"), textDecoration: "none" }}>GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
