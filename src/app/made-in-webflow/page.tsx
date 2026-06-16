"use client";

import { useState } from "react";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Shared Components ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Data ─── */
const CATEGORY_FILTERS = [
  "All",
  "Agency",
  "SaaS",
  "Ecommerce",
  "Portfolio",
  "Media",
  "Startup",
  "Education",
  "Nonprofit",
];

const SHOWCASE_SITES = [
  {
    name: "Jasper AI",
    category: "SaaS",
    desc: "AI content platform with a bold, animated brand experience.",
    color: "color-accent-blue",
  },
  {
    name: "Normal Computing",
    category: "Startup",
    desc: "Deep tech startup with a clean, typography-driven site.",
    color: "color-accent-purple",
  },
  {
    name: "Cula",
    category: "Ecommerce",
    desc: "Premium home goods brand with immersive product storytelling.",
    color: "color-accent-orange",
  },
  {
    name: "Palmer Dinnerware",
    category: "Ecommerce",
    desc: "Artisan ceramics brand with a warm, tactile digital presence.",
    color: "color-accent-green",
  },
  {
    name: "Giulia Gartner",
    category: "Portfolio",
    desc: "Photographer portfolio with cinematic full-bleed galleries.",
    color: "color-accent-pink",
  },
  {
    name: "Siena Film Festival",
    category: "Media",
    desc: "Festival site with dynamic event schedules and video integration.",
    color: "color-accent-blue",
  },
  {
    name: "Figma Config",
    category: "Media",
    desc: "Conference site with interactive agenda and speaker profiles.",
    color: "color-accent-purple",
  },
  {
    name: "OrangeTheory Fitness",
    category: "Agency",
    desc: "Fitness brand with localized studio finders and class booking.",
    color: "color-accent-orange",
  },
  {
    name: "Lattice",
    category: "SaaS",
    desc: "People platform with a modern, conversion-focused design.",
    color: "color-accent-green",
  },
  {
    name: "Verifone",
    category: "Startup",
    desc: "Fintech rebrand with a distinctive visual identity system.",
    color: "color-accent-pink",
  },
  {
    name: "Dropbox",
    category: "SaaS",
    desc: "Product redesign showcasing collaboration features.",
    color: "color-accent-blue",
  },
  {
    name: "Docusign",
    category: "SaaS",
    desc: "Enterprise platform with a refreshed, approachable brand.",
    color: "color-accent-purple",
  },
  {
    name: "Rivian Stories",
    category: "Media",
    desc: "Brand storytelling platform with immersive long-form content.",
    color: "color-accent-orange",
  },
  {
    name: "The Sill",
    category: "Ecommerce",
    desc: "Plant retailer with educational content and shoppable guides.",
    color: "color-accent-green",
  },
  {
    name: "IDEO",
    category: "Agency",
    desc: "Design consultancy with a thought-leadership content hub.",
    color: "color-accent-pink",
  },
  {
    name: "New York Times Cooking",
    category: "Media",
    desc: "Recipe platform with a rich visual browsing experience.",
    color: "color-accent-blue",
  },
  {
    name: "Fivetran",
    category: "SaaS",
    desc: "Data integration platform with technical documentation hub.",
    color: "color-accent-purple",
  },
  {
    name: "Greenhouse",
    category: "SaaS",
    desc: "HR platform with a structured content architecture.",
    color: "color-accent-orange",
  },
  {
    name: "Upwork",
    category: "Startup",
    desc: "Freelance marketplace with dynamic search and discovery.",
    color: "color-accent-green",
  },
  {
    name: "Discord",
    category: "Startup",
    desc: "Community platform with an immersive, game-like brand experience.",
    color: "color-accent-pink",
  },
  {
    name: "Allbirds",
    category: "Ecommerce",
    desc: "Sustainable footwear brand with a clean, nature-inspired design.",
    color: "color-accent-blue",
  },
  {
    name: "BetterUp",
    category: "SaaS",
    desc: "Coaching platform with a warm, human-centered design system.",
    color: "color-accent-purple",
  },
  {
    name: "Notion",
    category: "SaaS",
    desc: "Productivity tool with an iconic, illustration-rich brand.",
    color: "color-accent-orange",
  },
  {
    name: "The Ocean Cleanup",
    category: "Nonprofit",
    desc: "Environmental nonprofit with data-driven impact storytelling.",
    color: "color-accent-green",
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
              See what the community is building with Kreature. Showcase of the
              best sites made on our platform.
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
export default function MadeInKreaturePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSites =
    activeFilter === "All"
      ? SHOWCASE_SITES
      : SHOWCASE_SITES.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "120px",
          background: V("color-canvas"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-pink")} 8%, transparent)`,
            }}
          />
        </div>
        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "800px" }}
        >
          <h1
            className="font-heading tracking-tight mb-6"
            style={{
              fontSize: "80px",
              fontWeight: 600,
              lineHeight: "83.2px",
              letterSpacing: "-0.8px",
              color: V("color-ink"),
            }}
          >
            Made in Kreature
          </h1>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
              maxWidth: "600px",
            }}
          >
            Discover the most inspiring sites built by the Kreature community.
            From startups to enterprise, see what&apos;s possible on our
            platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#gallery"
              className="font-medium transition-colors inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: V("color-accent-pink"),
                color: "#fff",
              }}
            >
              Explore showcase <Arrow />
            </a>
            <a
              href="#submit"
              className="font-medium transition-colors inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                border: `1px solid ${V("color-hairline")}`,
                color: V("color-ink"),
              }}
            >
              Submit your site
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="text-sm font-medium px-4 py-2 rounded-full transition-all"
                style={{
                  background:
                    activeFilter === cat
                      ? V("color-accent-pink")
                      : V("color-canvas"),
                  color: activeFilter === cat ? "#fff" : V("color-body-mid"),
                  border:
                    activeFilter === cat
                      ? `1px solid ${V("color-accent-pink")}`
                      : `1px solid ${V("color-hairline")}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSites.map((site) => (
              <a
                key={site.name}
                href="#"
                className="group rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                  boxShadow: V("shadow-card"),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `color-mix(in srgb, ${V(site.color)} 10%, transparent)`,
                  }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{ color: V(site.color) }}
                  >
                    {site.name}
                  </span>
                  <div
                    className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      background: V("color-canvas"),
                      color: V("color-body-mid"),
                      border: `1px solid ${V("color-hairline")}`,
                    }}
                  >
                    {site.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="font-heading mb-2"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      color: V("color-ink"),
                    }}
                  >
                    {site.name}
                  </h3>
                  <p
                    className="flex-1 mb-4"
                    style={{
                      fontSize: "14px",
                      lineHeight: "22.4px",
                      color: V("color-body-mid"),
                    }}
                  >
                    {site.desc}
                  </p>
                  <span
                    className="text-sm font-medium inline-flex items-center group-hover:underline"
                    style={{ color: V(site.color) }}
                  >
                    View site <Arrow />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {filteredSites.length === 0 && (
            <div
              className="text-center py-20"
              style={{ color: V("color-mute") }}
            >
              <p className="text-lg">No sites found in this category yet.</p>
              <p className="text-sm mt-2">
                Check back soon or submit your own site.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Submit CTA */}
      <section
        id="submit"
        className="relative overflow-hidden"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-pink")} 10%, transparent)`,
            }}
          />
        </div>
        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "600px" }}
        >
          <h2
            className="font-heading tracking-tight mb-4"
            style={{
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: "58.24px",
              color: V("color-ink"),
            }}
          >
            Built something great?
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
            }}
          >
            Submit your site to be featured in the Made in Kreature showcase.
            We&apos;re always looking for inspiring work from our community.
          </p>
          <a
            href="#"
            className="font-medium transition-colors inline-flex items-center"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              padding: "16px 24px",
              borderRadius: "4px",
              background: V("color-accent-pink"),
              color: "#fff",
            }}
          >
            Submit your site <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
