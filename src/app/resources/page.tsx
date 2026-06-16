"use client";

import { useState } from "react";

/* ─── CSS Var helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Typography scale ─── */
const T = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── Helpers ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

/* ─── Footer ─── */
function Footer() {
  const FOOTER_COLS = [
    { heading: "Company", links: [{ label: "Services", href: "/#offers" }, { label: "Results", href: "/#case-studies" }, { label: "Process", href: "/#process" }, { label: "The Kreature Way", href: "/webflow-way" }] },
    { heading: "Resources", links: [{ label: "Blog", href: "/blog" }, { label: "Resources", href: "/resources" }, { label: "Community", href: "/community" }, { label: "FAQ", href: "/#faq" }] },
    { heading: "Connect", links: [{ label: "Contact", href: "/contact-sales" }, { label: "Book a Call", href: "https://cal.com" }] },
  ];

  return (
    <footer style={{ background: V("color-canvas"), borderTop: `1px solid ${V("color-hairline")}` }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-[36px] w-auto logo-dark" />
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-[36px] w-auto logo-light" />
              <span className="font-heading font-[800] text-xl tracking-tight" style={{ color: V("color-ink") }}>Kreature<span className="text-[#146ef5]">.</span></span>
            </div>
            <p style={{ ...T.bodySm, color: V("color-mute"), maxWidth: "280px" }}>AI Product Studio for founders who ship fast.</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div className="mb-4 uppercase tracking-wider" style={{ ...T.caption, color: V("color-mute") }}>{col.heading}</div>
              <ul className="space-y-3 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}><a href={link.href} className="no-underline transition-colors" style={{ ...T.bodySm, color: V("color-body-mid") }}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
          <p style={{ ...T.caption, color: V("color-mute") }}>&copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors" style={{ color: V("color-mute") }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors" style={{ color: V("color-mute") }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Resource data ─── */

type ResourceType = "Webinars" | "Ebooks" | "Guides" | "Case Studies" | "Templates" | "Tutorials";

interface Resource {
  title: string;
  description: string;
  type: ResourceType;
  featured?: boolean;
  duration?: string;
  pages?: string;
}

const RESOURCE_TYPES: ResourceType[] = [
  "Webinars",
  "Ebooks",
  "Guides",
  "Case Studies",
  "Templates",
  "Tutorials",
];

const TYPE_ICONS: Record<ResourceType, string> = {
  Webinars: "🎥",
  Ebooks: "📖",
  Guides: "📋",
  "Case Studies": "📊",
  Templates: "📐",
  Tutorials: "🛠",
};

const TYPE_COLORS: Record<ResourceType, string> = {
  Webinars: "color-accent-purple",
  Ebooks: "color-accent-blue",
  Guides: "color-accent-orange",
  "Case Studies": "color-accent-green",
  Templates: "color-accent-pink",
  Tutorials: "color-accent-blue",
};

const RESOURCES: Resource[] = [
  {
    title: "How to Validate Your Product Idea in 7 Days",
    description: "A step-by-step framework for testing product ideas before writing a line of code. Learn how to run customer interviews, build landing pages, and measure demand.",
    type: "Guides",
    featured: true,
    pages: "24 pages",
  },
  {
    title: "The Fixed-Scope Development Playbook",
    description: "Everything you need to know about fixed-scope engagements: pricing models, scope documents, change request processes, and how to protect both sides.",
    type: "Ebooks",
    featured: true,
    pages: "42 pages",
  },
  {
    title: "From 0 to 1: Building Your First AI Product",
    description: "A practical webinar covering how non-technical founders can leverage AI tools and studios to build their first product without hiring an engineering team.",
    type: "Webinars",
    duration: "45 min",
  },
  {
    title: "Design Systems for Startups: A Practical Guide",
    description: "How to build a design system that scales from MVP to Series B. Covers component architecture, token systems, and Figma workflows.",
    type: "Guides",
    pages: "18 pages",
  },
  {
    title: "SaaS Landing Page Template",
    description: "A production-ready Next.js + Tailwind landing page template with built-in analytics, waitlist capture, and dark mode support.",
    type: "Templates",
  },
  {
    title: "How Dropbox Reduced Dev Ticketing by 67%",
    description: "An inside look at how Dropbox used a visual development platform to empower marketing teams and drastically reduce engineering tickets.",
    type: "Case Studies",
    pages: "12 pages",
  },
  {
    title: "Building Real-Time Dashboards with Next.js",
    description: "A hands-on tutorial walking through building a real-time analytics dashboard using Next.js, WebSockets, and D3 — from scratch.",
    type: "Tutorials",
    duration: "60 min",
  },
  {
    title: "The AI Product Studio Model Explained",
    description: "An on-demand webinar exploring the emerging AI product studio category and why it's replacing traditional agencies for startup builds.",
    type: "Webinars",
    duration: "38 min",
  },
  {
    title: "MVP Scope Template",
    description: "A Notion template for defining your MVP scope, including feature prioritization matrices, user stories, and technical requirements.",
    type: "Templates",
  },
  {
    title: "AI Prompt Engineering for Product Builders",
    description: "Practical prompt patterns for using AI assistants during product development — from generating copy to debugging code.",
    type: "Ebooks",
    pages: "31 pages",
  },
  {
    title: "How Lattice Increased Site-Wide Conversion 20%",
    description: "How Lattice rebuilt their marketing site on a visual platform and saw immediate conversion improvements across every page.",
    type: "Case Studies",
    pages: "8 pages",
  },
  {
    title: "Building Accessible Products from Day One",
    description: "A comprehensive guide to WCAG compliance, semantic HTML, and accessible component patterns for product teams.",
    type: "Guides",
    pages: "28 pages",
  },
];

/* ══════════════════════════════════════════════════════════════════
   Resources Page
   ══════════════════════════════════════════════════════════════════ */
export default function ResourcesPage() {
  const [activeType, setActiveType] = useState<ResourceType | "All">("All");
  const [search, setSearch] = useState("");

  const filtered =
    activeType === "All"
      ? RESOURCES
      : RESOURCES.filter((r) => r.type === activeType);

  const searched = search.trim()
    ? filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(search.toLowerCase()) ||
          r.description.toLowerCase().includes(search.toLowerCase()) ||
          r.type.toLowerCase().includes(search.toLowerCase())
      )
    : filtered;

  const featuredResources = RESOURCES.filter((r) => r.featured);

  return (
    <>
      <main style={{ background: V("color-canvas") }}>
        {/* ─── Hero ─── */}
        <section className="relative pt-[68px] overflow-hidden" style={{ background: V("color-canvas") }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: V("color-accent-purple"), opacity: 0.06 }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center">
            <h1 className="font-heading mb-6" style={{ ...T.h1, color: V("color-ink") }}>
              Resources for builders
            </h1>
            <p className="max-w-2xl mx-auto mb-0" style={{ ...T.h4, color: V("color-body-mid"), fontWeight: 400 }}>
              Webinars, ebooks, guides, case studies, templates, and tutorials to help you
              build better products, faster.
            </p>
          </div>
        </section>

        {/* ─── Search + Filter ─── */}
        <section className="px-5 sm:px-8 pb-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              {/* Search */}
              <div className="relative max-w-md w-full">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={V("color-mute")}
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search resources..."
                  className="w-full pl-11 pr-4 py-3 outline-none transition-colors"
                  style={{
                    ...T.body,
                    borderRadius: "8px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                    color: V("color-ink"),
                  }}
                />
              </div>

              {/* Type chips */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveType("All")}
                  className="transition-all cursor-pointer"
                  style={{
                    ...T.caption,
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    border: activeType === "All" ? `2px solid ${V("color-accent-blue")}` : `2px solid ${V("color-hairline")}`,
                    background: activeType === "All" ? V("color-accent-blue") : "transparent",
                    color: activeType === "All" ? "#fff" : V("color-body"),
                  }}
                >
                  All
                </button>
                {RESOURCE_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className="transition-all cursor-pointer"
                    style={{
                      ...T.caption,
                      padding: "8px 16px",
                      borderRadius: "9999px",
                      border: activeType === type ? `2px solid ${V(TYPE_COLORS[type])}` : `2px solid ${V("color-hairline")}`,
                      background: activeType === type ? V(TYPE_COLORS[type]) : "transparent",
                      color: activeType === type ? "#fff" : V("color-body"),
                    }}
                  >
                    {TYPE_ICONS[type]} {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Featured Resources ─── */}
        {activeType === "All" && search === "" && (
          <section className="px-5 sm:px-8 pb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-heading mb-8" style={{ ...T.h3, color: V("color-ink") }}>
                Featured
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {featuredResources.map((res, i) => (
                  <article
                    key={i}
                    className="group cursor-pointer p-8 sm:p-10 transition-all flex flex-col"
                    style={{
                      borderRadius: "12px",
                      border: `1px solid ${V("color-hairline")}`,
                      background: V("color-canvas-soft"),
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="w-10 h-10 flex items-center justify-center text-lg"
                        style={{ borderRadius: "8px", background: V("color-canvas") }}
                      >
                        {TYPE_ICONS[res.type]}
                      </span>
                      <div>
                        <span style={{ ...T.caption, color: V(TYPE_COLORS[res.type]) }}>
                          {res.type}
                        </span>
                        {res.pages && (
                          <span style={{ ...T.caption, color: V("color-mute"), marginLeft: "8px" }}>
                            {res.pages}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="font-heading mb-2 flex-1" style={{ ...T.h4, color: V("color-ink") }}>
                      {res.title}
                    </h3>
                    <p className="mb-5" style={{ ...T.bodySm, color: V("color-body-mid") }}>
                      {res.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 no-underline font-medium"
                      style={{ ...T.bodySm, color: V("color-accent-blue") }}
                    >
                      Download now <Arrow />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── All Resources Grid ─── */}
        <section className="px-5 sm:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            {(activeType !== "All" || search !== "") && (
              <h2 className="font-heading mb-8" style={{ ...T.h3, color: V("color-ink") }}>
                {search ? `Search results: "${search}"` : activeType}
              </h2>
            )}

            {searched.length === 0 ? (
              <div className="text-center py-16">
                <p style={{ ...T.body, color: V("color-mute") }}>
                  No resources found. Try a different search or category.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searched.map((res, i) => (
                  <article
                    key={i}
                    className="group cursor-pointer p-6 transition-all flex flex-col"
                    style={{
                      borderRadius: "12px",
                      border: `1px solid ${V("color-hairline")}`,
                      background: V("color-canvas-soft"),
                    }}
                  >
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span style={{ fontSize: "18px" }}>{TYPE_ICONS[res.type]}</span>
                      <span
                        style={{
                          ...T.caption,
                          color: V(TYPE_COLORS[res.type]),
                          background: V("color-canvas"),
                          padding: "2px 10px",
                          borderRadius: "9999px",
                        }}
                      >
                        {res.type}
                      </span>
                      {res.duration && (
                        <span style={{ ...T.caption, color: V("color-mute") }}>
                          {res.duration}
                        </span>
                      )}
                      {res.pages && (
                        <span style={{ ...T.caption, color: V("color-mute") }}>
                          {res.pages}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading mb-2 flex-1" style={{ ...T.h4, color: V("color-ink") }}>
                      {res.title}
                    </h3>
                    <p className="mb-4" style={{ ...T.bodySm, color: V("color-body-mid") }}>
                      {res.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 no-underline font-medium"
                      style={{ ...T.caption, color: V("color-accent-blue") }}
                    >
                      {res.type === "Webinars" ? "Watch now" : res.type === "Templates" ? "Use template" : "Read now"} <Arrow />
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ─── Browse by category ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28" style={{ background: V("color-canvas-soft") }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading mb-12 text-center" style={{ ...T.h2, color: V("color-ink") }}>
              Browse by category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {RESOURCE_TYPES.map((type) => {
                const count = RESOURCES.filter((r) => r.type === type).length;
                return (
                  <button
                    key={type}
                    onClick={() => { setActiveType(type); setSearch(""); }}
                    className="cursor-pointer transition-all p-6 text-center"
                    style={{
                      borderRadius: "12px",
                      border: `1px solid ${V("color-hairline")}`,
                      background: V("color-canvas"),
                    }}
                  >
                    <div className="text-2xl mb-2">{TYPE_ICONS[type]}</div>
                    <div style={{ ...T.caption, color: V("color-ink"), fontWeight: 600 }}>{type}</div>
                    <div style={{ ...T.caption, color: V("color-mute") }}>{count} resources</div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden" style={{ background: V("color-canvas") }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]" style={{ background: V("color-accent-purple"), opacity: 0.06 }} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-heading mb-4" style={{ ...T.h2, color: V("color-ink") }}>
              Need something built?
            </h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              We take on a maximum of 2 active clients at a time. If there&apos;s a slot
              open, we can go from idea to working product in weeks, not months.
            </p>
            <a
              href="/contact-sales"
              className="inline-flex items-center text-white no-underline transition-colors"
              style={{ ...T.btn, background: V("color-accent-blue") }}
            >
              Book a discovery call <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
