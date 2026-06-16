"use client";

/* ─── Design token helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Styles ─── */
const S = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  eyebrow: { fontSize: "15px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── Shared components ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

/* ─── Wordmark ─── */
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-heading font-[800] text-xl tracking-tight ${className}`} style={{ color: V("color-ink") }}>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
}

/* ─── CMS CAPABILITIES ─── */
const CMS_CAPABILITIES = [
  {
    icon: "✎",
    title: "Visual content editor",
    desc: "Drag-and-drop interface that lets you build pages visually, with real-time previews and inline editing. No coding required to create stunning layouts.",
  },
  {
    icon: "≡",
    title: "Collections",
    desc: "Define structured content types — blog posts, team members, case studies — then manage hundreds of items with bulk editing and CSV import.",
  },
  {
    icon: "☄",
    title: "Dynamic content",
    desc: "Connect collection fields to any element. Update once and see changes propagate across your entire site automatically.",
  },
  {
    icon: "➳",
    title: "API access",
    desc: "REST and GraphQL endpoints expose all your content. Use it anywhere — mobile apps, microsites, or other platforms.",
  },
  {
    icon: "⏰",
    title: "Content scheduling",
    desc: "Draft, schedule, and publish content on your timeline. Set publish and expiration dates for campaigns, promotions, or seasonal content.",
  },
  {
    icon: "🌐",
    title: "Multi-language",
    desc: "Translate and localize your entire site. Manage locales, fallback rules, and translators all from one dashboard.",
  },
];

/* ─── HOW IT WORKS ─── */
const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Model your content",
    desc: "Define content types, fields, and relationships. Our visual schema builder makes structuring your content intuitive — no database knowledge required.",
  },
  {
    step: "02",
    title: "Author and collaborate",
    desc: "Write, edit, and review content in a rich editor. Leave comments, track changes, and manage approvals with built-in workflows.",
  },
  {
    step: "03",
    title: "Publish everywhere",
    desc: "Hit publish and your content goes live instantly across your site, apps, and any connected channels. Headless APIs deliver content anywhere.",
  },
];

/* ─── DEVELOPER FEATURES ─── */
const DEV_FEATURES = [
  {
    title: "Headless APIs",
    desc: "REST and GraphQL endpoints with field-level filtering, pagination, and nested queries. SDKs for JavaScript, Python, and PHP.",
    highlight: "REST + GraphQL",
  },
  {
    title: "Webhooks",
    desc: "Trigger builds, invalidate caches, or sync data when content changes. Configure per-event webhooks with retry logic and delivery logs.",
    highlight: "Real-time triggers",
  },
  {
    title: "Custom code",
    desc: "Add HTML, CSS, and JavaScript directly in the CMS. Embed custom components, scripts, or third-party integrations anywhere on your pages.",
    highlight: "No limits",
  },
];

/* ─── INTEGRATIONS ─── */
const INTEGRATIONS = [
  { name: "Shopify", desc: "Embed products, collections, and checkout directly into your content pages." },
  { name: "Airtable", desc: "Sync Airtable bases as content collections with two-way field mapping." },
  { name: "Figma", desc: "Import Figma designs and turn them into CMS-powered pages automatically." },
  { name: "Zapier", desc: "Connect to 5,000+ apps. Automate content creation, translation, and publishing workflows." },
  { name: "Google Analytics", desc: "Attach analytics events to content blocks and measure engagement per piece." },
  { name: "HubSpot", desc: "Gate content behind forms, capture leads, and personalize based on CRM data." },
];

/* ─── FOOTER DATA ─── */
const FOOTER_COLS = [
  {
    heading: "Product",
    links: [
      { label: "CMS", href: "/feature/cms" },
      { label: "Hosting", href: "/feature/hosting" },
      { label: "Design", href: "/feature/design" },
      { label: "AI", href: "/feature/ai" },
      { label: "SEO", href: "/feature/seo" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Agencies", href: "/solutions" },
      { label: "Ecommerce", href: "/feature/ecommerce" },
      { label: "Startups", href: "/solutions" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Templates", href: "/templates" },
      { label: "Libraries", href: "/libraries" },
      { label: "Glossary", href: "/glossary" },
      { label: "Made in Webflow", href: "/made-in-webflow" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Contact", href: "/contact-sales" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs WordPress", href: "/webflow-vs-wordpress" },
      { label: "vs Framer", href: "/webflow-vs-framer" },
      { label: "vs Squarespace", href: "/webflow-vs-squarespace" },
      { label: "vs Wix", href: "/webflow-vs-wix" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Forum", href: "/community" },
      { label: "Events", href: "/community" },
      { label: "Webflow TV", href: "/community" },
      { label: "Discord", href: "/community" },
    ],
  },
  {
    heading: "Get Help",
    links: [
      { label: "Support", href: "/contact-sales" },
      { label: "Docs", href: "/resources" },
      { label: "Status", href: "/resources" },
      { label: "Login", href: "/login" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   CMS FEATURE PAGE
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function CMSPage() {
  return (
    <>
      <main>
        {/* ═══ HERO ═══ */}
        <section
          className="pt-[148px] pb-20 sm:pb-28 px-5 sm:px-8"
          style={{ background: V("color-canvas") }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p style={{ ...S.eyebrow, color: V("color-accent-blue") }}>Content Management</p>
            <h1 className="mt-4 mb-6" style={S.h1}>
              Content that scales with you
            </h1>
            <p className="max-w-2xl mx-auto" style={{ ...S.body, color: V("color-body-mid"), fontSize: "20px" }}>
              A visual, composable CMS that gives your team the freedom to create, manage, and publish content
              without bottlenecks. Developers get powerful APIs. Editors get a delightful interface.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <a
                href="/signup"
                className="no-underline inline-flex items-center"
                style={{
                  ...S.btn,
                  background: V("color-accent-blue"),
                  color: "#fff",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = V("color-accent-blue-hover"))}
                onMouseLeave={(e) => (e.currentTarget.style.background = V("color-accent-blue"))}
              >
                Start for free <Arrow />
              </a>
              <a
                href="#capabilities"
                className="no-underline inline-flex items-center"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                See capabilities
              </a>
            </div>
          </div>
        </section>

        {/* ═══ CMS CAPABILITIES ═══ */}
        <section
          id="capabilities"
          className="py-20 sm:py-28 px-5 sm:px-8"
          style={{ background: V("color-canvas-soft") }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p style={{ ...S.eyebrow, color: V("color-accent-blue") }}>Capabilities</p>
              <h2 className="mt-3 mb-4" style={S.h2}>
                Everything you need to manage content
              </h2>
              <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
                From simple blogs to complex multi-language sites, our CMS adapts to your workflow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CMS_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-xl p-8 transition-shadow"
                  style={{
                    background: V("color-canvas"),
                    border: `1px solid ${V("color-hairline")}`,
                    boxShadow: V("shadow-card"),
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = V("shadow-card-strong"))}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = V("shadow-card"))}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-5"
                    style={{ background: V("color-canvas-soft"), color: V("color-accent-blue") }}
                  >
                    {cap.icon}
                  </div>
                  <h3 className="mb-3" style={{ ...S.h4, color: V("color-ink") }}>{cap.title}</h3>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas") }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p style={{ ...S.eyebrow, color: V("color-accent-blue") }}>How it works</p>
              <h2 className="mt-3 mb-4" style={S.h2}>
                From idea to live content in three steps
              </h2>
              <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
                Content management that adapts to your team, not the other way around.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="text-center sm:text-left">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto sm:mx-0"
                    style={{ background: V("color-accent-blue"), color: "#fff" }}
                  >
                    <span style={{ ...S.h4, color: "#fff" }}>{item.step}</span>
                  </div>
                  <h3 className="mb-3" style={{ ...S.h4, color: V("color-ink") }}>{item.title}</h3>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ DEVELOPER FEATURES ═══ */}
        <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas-soft") }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p style={{ ...S.eyebrow, color: V("color-accent-purple") }}>For Developers</p>
              <h2 className="mt-3 mb-4" style={S.h2}>
                Built for developers, loved by editors
              </h2>
              <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
                Headless APIs, webhooks, and custom code give your engineering team full control.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {DEV_FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-xl p-8"
                  style={{
                    background: V("color-canvas"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <span
                    className="inline-block px-3 py-1 rounded-full mb-4"
                    style={{
                      ...S.caption,
                      background: V("color-canvas-soft"),
                      color: V("color-accent-purple"),
                    }}
                  >
                    {feat.highlight}
                  </span>
                  <h3 className="mb-3" style={{ ...S.h4, color: V("color-ink") }}>{feat.title}</h3>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ INTEGRATIONS ═══ */}
        <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas") }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p style={{ ...S.eyebrow, color: V("color-accent-green") }}>Integrations</p>
              <h2 className="mt-3 mb-4" style={S.h2}>
                Connect your entire stack
              </h2>
              <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
                Plug into the tools you already use. Our CMS plays nice with your favorite platforms.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INTEGRATIONS.map((integration) => (
                <div
                  key={integration.name}
                  className="rounded-xl p-8 flex flex-col gap-3"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <h3 className="m-0" style={{ ...S.h4, color: V("color-ink") }}>{integration.name}</h3>
                  <p className="m-0" style={{ ...S.bodySm, color: V("color-body-mid") }}>{integration.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas-soft") }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4" style={S.h2}>
              Start managing content
            </h2>
            <p className="max-w-xl mx-auto mb-10" style={{ ...S.body, color: V("color-body-mid"), fontSize: "20px" }}>
              Join thousands of teams who build, manage, and scale their content with Kreature.
              No credit card required.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="/signup"
                className="no-underline inline-flex items-center"
                style={{
                  ...S.btn,
                  background: V("color-accent-blue"),
                  color: "#fff",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = V("color-accent-blue-hover"))}
                onMouseLeave={(e) => (e.currentTarget.style.background = V("color-accent-blue"))}
              >
                Get started free <Arrow />
              </a>
              <a
                href="/contact-sales"
                className="no-underline inline-flex items-center"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                Talk to sales
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: V("color-canvas"), borderTop: `1px solid ${V("color-hairline")}` }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
            {/* Brand column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 lg:row-span-1">
              <a href="/" className="flex items-center gap-2.5 mb-3 no-underline">
                <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="logo-dark h-[36px] w-auto" />
                <img src="/logo/kreature-logo-light.png" alt="Kreature" className="logo-light h-[36px] w-auto" />
                <Wordmark />
              </a>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>
                AI Product Studio for founders who ship fast.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="lg:justify-self-start">
                <div className="mb-4" style={{ ...S.caption, color: V("color-mute"), textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {col.heading}
                </div>
                <ul className="list-none p-0 m-0 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="no-underline transition-colors"
                        style={{ ...S.bodySm, color: V("color-body-mid") }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = V("color-ink"))}
                        onMouseLeave={(e) => (e.currentTarget.style.color = V("color-body-mid"))}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}
          >
            <p className="text-xs m-0" style={{ color: V("color-mute") }}>
              &copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition-colors"
                style={{ color: V("color-mute") }}
                onMouseEnter={(e) => (e.currentTarget.style.color = V("color-ink"))}
                onMouseLeave={(e) => (e.currentTarget.style.color = V("color-mute"))}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
                onMouseEnter={(e) => (e.currentTarget.style.color = V("color-ink"))}
                onMouseLeave={(e) => (e.currentTarget.style.color = V("color-mute"))}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
