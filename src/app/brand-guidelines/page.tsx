"use client";

import { useState } from "react";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Data ─── */

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
    icon: null,
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
    heading: "Product",
    links: [
      { label: "Overview", href: "/webflow-clone" },
      { label: "Designer", href: "#" },
      { label: "CMS", href: "#" },
      { label: "Hosting", href: "#" },
      { label: "AI Features", href: "#" },
    ],
  },
  {
    heading: "Ecosystem",
    links: [
      { label: "Apps", href: "/apps" },
      { label: "Libraries", href: "/libraries" },
      { label: "Templates", href: "/templates" },
      { label: "Integrations", href: "/integrations" },
      { label: "Showcase", href: "/made-in-webflow" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Marketing Teams", href: "#" },
      { label: "Agencies", href: "#" },
      { label: "Startups", href: "#" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Freelancers", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Community", href: "/community" },
      { label: "Documentation", href: "#" },
      { label: "Webflow Way", href: "/webflow-way" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact-sales" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs WordPress", href: "#" },
      { label: "vs Framer", href: "#" },
      { label: "vs Wix", href: "#" },
      { label: "vs Squarespace", href: "#" },
      { label: "vs Bubble", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Discord", href: "https://discord.com" },
    ],
  },
];

/* ─── Shared Components ─── */

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}
    >
      <div
        className="mx-auto px-5 sm:px-8 py-14 sm:py-16"
        style={{ maxWidth: "1440px" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/logo/kreature-logo-dark.png"
                alt="Kreature"
                className="logo-dark h-[36px] w-auto"
              />
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="logo-light h-[36px] w-auto"
              />
              <span
                className="font-heading font-[800] text-xl tracking-tight"
                style={{ color: V("color-ink") }}
              >
                Kreature
                <span style={{ color: V("color-accent-blue") }}>.</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: V("color-mute") }}
            >
              Crafted for founders. Powered by code. Driven by speed. Our brand
              guidelines in full.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div
                className="text-xs uppercase tracking-wider mb-4"
                style={{ color: V("color-mute-soft"), fontWeight: 550 }}
              >
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: V("color-body-mid") }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = V("color-ink"))
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = V("color-body-mid"))
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: V("color-hairline") }}
        >
          <p className="text-xs" style={{ color: V("color-mute") }}>
            &copy; {new Date().getFullYear()} Kreature Studio. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="transition-colors"
              style={{ color: V("color-mute") }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors"
              style={{ color: V("color-mute") }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function BrandGuidelines() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      style={{
        background: V("color-canvas"),
        color: V("color-body"),
        minHeight: "100vh",
      }}
    >
      {/* Mobile nav toggle */}
      <div className="fixed top-4 left-4 z-[1001] lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 rounded-full border flex items-center justify-center"
          style={{
            borderColor: V("color-hairline"),
            background: V("color-canvas"),
            color: V("color-ink"),
          }}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 4h12M2 8h12M2 12h12" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[999] lg:hidden"
          onClick={() => setMobileOpen(false)}
          style={{ background: "rgba(0,0,0,0.4)" }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-[1000] w-[280px] overflow-y-auto transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        style={{
          background: V("color-canvas"),
          borderRight: `1px solid ${V("color-hairline")}`,
        }}
      >
        <div className="p-8 flex flex-col gap-10">
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
            <span
              className="font-heading font-[800] text-lg tracking-tight"
              style={{ color: V("color-ink") }}
            >
              Kreature
              <span style={{ color: V("color-accent-blue") }}>.</span>
            </span>
          </a>

          {/* Nav sections */}
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.label}>
              <p
                className="mb-3"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "1.4",
                  color: V("color-ink"),
                }}
              >
                {section.label}
              </p>
              <div className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="inline-block transition-colors hover:opacity-70"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.4",
                      color: V("color-body-mid"),
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Search */}
          <div>
            <a
              href="#"
              className="inline-block transition-colors hover:opacity-70"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "1.4",
                color: V("color-body-mid"),
                textDecoration: "none",
              }}
            >
              Search
            </a>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-[280px]">
        {/* Hero section */}
        <section
          className="flex flex-col items-center justify-center text-center px-5 sm:px-8"
          style={{
            paddingTop: "160px",
            paddingBottom: "160px",
            background: V("color-canvas"),
          }}
        >
          {/* Logo mark stages */}
          <div className="flex items-center justify-center gap-4 mb-12 opacity-60">
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{ background: V("color-canvas-mid") }}
            >
              <span style={{ fontSize: "28px" }}>⬡</span>
            </div>
            <span className="text-2xl" style={{ color: V("color-mute") }}>
              &rarr;
            </span>
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{ background: V("color-canvas-mid") }}
            >
              <span style={{ fontSize: "28px" }}>⬢</span>
            </div>
            <span className="text-2xl" style={{ color: V("color-mute") }}>
              &rarr;
            </span>
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{
                background: V("color-accent-blue"),
                color: "#fff",
              }}
            >
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature mark"
                className="h-8 w-auto"
              />
            </div>
          </div>

          <h1
            className="font-heading max-w-[900px] mb-8 tracking-tight"
            style={{
              fontSize: "80px",
              fontWeight: 600,
              lineHeight: "83.2px",
              letterSpacing: "-0.8px",
              color: V("color-ink"),
            }}
          >
            Crafted for founders.
            <br />
            Powered by code.
            <br />
            Driven by speed.
          </h1>

          <a
            href="#explore"
            className="inline-flex flex-col items-center gap-2 transition-colors hover:opacity-70"
            style={{
              fontSize: "16px",
              lineHeight: "25.6px",
              color: V("color-body"),
              textDecoration: "none",
            }}
          >
            Explore our brand
            <span
              className="text-lg"
              style={{ color: V("color-accent-blue") }}
            >
              &darr;
            </span>
          </a>
        </section>

        {/* Divider */}
        <div
          className="w-full"
          style={{ height: "1px", background: V("color-hairline") }}
        />

        {/* Explore section */}
        <section
          id="explore"
          className="px-5 sm:px-8"
          style={{
            paddingTop: "80px",
            paddingBottom: "80px",
            background: V("color-canvas-soft"),
          }}
        >
          <div
            className="mx-auto"
            style={{ maxWidth: "1200px" }}
          >
            <h2
              className="font-heading tracking-tight mb-16"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "52px",
                color: V("color-ink"),
              }}
            >
              Explore our brand
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                    style={{
                      background:
                        "color-mix(in srgb, " +
                        cat.accent +
                        " 12%, transparent)",
                    }}
                  >
                    <span style={{ fontSize: "20px", color: cat.accent }}>
                      {cat.title === "Logo"
                        ? "◆"
                        : cat.title === "Typography"
                          ? "Aa"
                          : cat.title === "Color"
                            ? "◉"
                            : cat.title === "Illustration"
                              ? "◇"
                              : cat.title === "Motion"
                                ? "◎"
                                : "♪"}
                    </span>
                  </div>

                  <h3
                    className="font-heading mb-4"
                    style={{
                      fontSize: "28px",
                      fontWeight: 600,
                      lineHeight: "36px",
                      color: V("color-ink"),
                    }}
                  >
                    {cat.title}
                  </h3>

                  <p
                    className="mb-4"
                    style={{
                      fontSize: "16px",
                      lineHeight: "25.6px",
                      color: V("color-body"),
                    }}
                  >
                    {cat.desc}
                  </p>

                  <span
                    className="inline-flex items-center transition-colors group-hover:opacity-70"
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "25.6px",
                      color: V("color-ink"),
                    }}
                  >
                    {cat.link} <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div
          className="w-full"
          style={{ height: "1px", background: V("color-hairline") }}
        />

        {/* Download section */}
        <section
          className="px-5 sm:px-8"
          style={{
            paddingTop: "80px",
            paddingBottom: "80px",
            background: V("color-canvas"),
          }}
        >
          <div
            className="mx-auto text-center"
            style={{ maxWidth: "1200px" }}
          >
            <h2
              className="font-heading tracking-tight mb-6"
              style={{
                fontSize: "40px",
                fontWeight: 600,
                lineHeight: "48px",
                color: V("color-ink"),
              }}
            >
              Download brand assets
            </h2>
            <p
              className="mb-10 mx-auto"
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                color: V("color-body"),
                maxWidth: "600px",
              }}
            >
              Everything you need to represent Kreature correctly — logos,
              colors, fonts, and templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center transition-colors font-medium"
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
                Download logo kit <Arrow />
              </a>
              <a
                href="#"
                className="inline-flex items-center transition-colors font-medium"
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

        <Footer />
      </div>
    </div>
  );
}
