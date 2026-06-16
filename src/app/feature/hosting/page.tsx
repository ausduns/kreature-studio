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

/* ─── HOSTING FEATURES ─── */
const HOSTING_FEATURES = [
  {
    icon: "☁",
    title: "Global CDN",
    subtitle: "Powered by AWS CloudFront",
    desc: "300+ points of presence across 90+ cities worldwide. Your content is served from the edge closest to every visitor, reducing latency to under 20ms globally.",
  },
  {
    icon: "◉",
    title: "99.99% uptime SLA",
    subtitle: "Enterprise reliability",
    desc: "Redundant infrastructure across multiple availability zones. Automatic failover ensures your site stays online even during regional outages.",
  },
  {
    icon: "🔒",
    title: "SSL certificates",
    subtitle: "One-click HTTPS",
    desc: "Free, auto-renewing SSL certificates for every custom domain. HTTP/2 and TLS 1.3 enabled by default with zero configuration required.",
  },
  {
    icon: "🛡",
    title: "DDoS protection",
    subtitle: "Enterprise-grade security",
    desc: "Layer 3, 4, and 7 protection absorbs attacks up to multiple Tbps. Rate limiting, WAF rules, and bot detection built into every plan.",
  },
  {
    icon: "↻",
    title: "Automatic backups",
    subtitle: "Point-in-time recovery",
    desc: "Every site backed up daily with 90-day retention. Restore any version with one click. Manual snapshots available before major changes.",
  },
  {
    icon: "⚡",
    title: "SEO optimization",
    subtitle: "Out-of-the-box performance",
    desc: "Automatic image compression, lazy loading, responsive images, and clean semantic HTML. Core Web Vitals optimized by default.",
  },
];

/* ─── PERFORMANCE STATS ─── */
const PERF_STATS = [
  { value: "100", label: "Lighthouse Performance", unit: "/100" },
  { value: "0.9s", label: "Average FCP", unit: "First Contentful Paint" },
  { value: "1.2s", label: "Average LCP", unit: "Largest Contentful Paint" },
  { value: "48ms", label: "Average TBT", unit: "Total Blocking Time" },
  { value: "0.05", label: "Average CLS", unit: "Cumulative Layout Shift" },
  { value: "<20ms", label: "Global TTFB", unit: "Time to First Byte" },
];

/* ─── SECURITY COMPLIANCE ─── */
const COMPLIANCE = [
  {
    badge: "SOC 2",
    type: "Type II",
    desc: "Annual third-party audit covering security, availability, and confidentiality. Report available under NDA for enterprise customers.",
  },
  {
    badge: "GDPR",
    desc: "Full compliance with EU data protection regulations. Data processing agreements, data residency options, and right-to-erasure support.",
  },
  {
    badge: "ISO 27001",
    desc: "Certified Information Security Management System. Regular penetration testing and vulnerability assessments by independent firms.",
  },
  {
    badge: "PCI DSS",
    type: "Level 1",
    desc: "Highest level of payment card security compliance. Secure checkout experiences without handling raw card data.",
  },
];

/* ─── COMPARISON TABLE ─── */
const COMPARISON_ROWS = [
  { feature: "Global CDN", kreature: "300+ PoPs", traditional: "Limited regions" },
  { feature: "SSL certificates", kreature: "Free, auto-renewing", traditional: "Manual, often paid" },
  { feature: "Uptime SLA", kreature: "99.99%", traditional: "99.9% typical" },
  { feature: "Deploy time", kreature: "< 1 second", traditional: "2-5 minutes" },
  { feature: "Backups", kreature: "Daily with 90-day retention", traditional: "Weekly or manual only" },
  { feature: "Scaling", kreature: "Automatic, infinite", traditional: "Manual, plan-limited" },
  { feature: "DDoS protection", kreature: "Included, multi-Tbps", traditional: "Add-on or unavailable" },
  { feature: "HTTP/3 support", kreature: "Enabled by default", traditional: "Often unsupported" },
  { feature: "Server management", kreature: "Zero — fully managed", traditional: "Updates, patches, config" },
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
   HOSTING FEATURE PAGE
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function HostingPage() {
  return (
    <>
      <main>
        {/* ═══ HERO ═══ */}
        <section
          className="pt-[148px] pb-20 sm:pb-28 px-5 sm:px-8"
          style={{ background: V("color-canvas") }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p style={{ ...S.eyebrow, color: V("color-accent-orange") }}>Hosting Infrastructure</p>
            <h1 className="mt-4 mb-6" style={S.h1}>
              Lightning-fast hosting
            </h1>
            <p className="max-w-2xl mx-auto" style={{ ...S.body, color: V("color-body-mid"), fontSize: "20px" }}>
              Enterprise infrastructure built on AWS. Global CDN, automatic scaling, and zero-config
              performance that keeps your sites fast, secure, and always online.
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
                href="#features"
                className="no-underline inline-flex items-center"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                See features
              </a>
            </div>
          </div>
        </section>

        {/* ═══ HOSTING FEATURES ═══ */}
        <section
          id="features"
          className="py-20 sm:py-28 px-5 sm:px-8"
          style={{ background: V("color-canvas-soft") }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p style={{ ...S.eyebrow, color: V("color-accent-orange") }}>Features</p>
              <h2 className="mt-3 mb-4" style={S.h2}>
                Infrastructure you can trust
              </h2>
              <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
                Every site gets enterprise-grade hosting with global reach, automatic scaling, and
                best-in-class security.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HOSTING_FEATURES.map((feat) => (
                <div
                  key={feat.title}
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
                    style={{ background: V("color-canvas-soft"), color: V("color-accent-orange") }}
                  >
                    {feat.icon}
                  </div>
                  <p className="mb-2" style={{ ...S.caption, color: V("color-accent-orange"), textTransform: "uppercase" }}>
                    {feat.subtitle}
                  </p>
                  <h3 className="mb-3" style={{ ...S.h4, color: V("color-ink") }}>{feat.title}</h3>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PERFORMANCE STATS ═══ */}
        <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas") }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p style={{ ...S.eyebrow, color: V("color-accent-green") }}>Performance</p>
              <h2 className="mt-3 mb-4" style={S.h2}>
                Core Web Vitals, optimized
              </h2>
              <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
                Every site on Kreature passes Core Web Vitals out of the box. No plugins, no configuration,
                no performance engineer required.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {PERF_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-6 text-center"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <div className="mb-2" style={{ ...S.h2, color: V("color-accent-green"), fontSize: "44px" }}>
                    {stat.value}
                  </div>
                  <p className="mb-1" style={{ ...S.bodySm, color: V("color-ink"), fontWeight: 600 }}>
                    {stat.label}
                  </p>
                  <p style={{ ...S.caption, color: V("color-mute") }}>{stat.unit}</p>
                </div>
              ))}
            </div>

            {/* Page speed visualization */}
            <div className="mt-12 rounded-xl p-8 sm:p-12" style={{ background: V("color-canvas-soft"), border: `1px solid ${V("color-hairline")}` }}>
              <h3 className="text-center mb-8" style={{ ...S.h4, color: V("color-ink") }}>Lighthouse score breakdown</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { label: "Performance", score: "100", color: "color-accent-green" },
                  { label: "Accessibility", score: "100", color: "color-accent-blue" },
                  { label: "Best Practices", score: "100", color: "color-accent-purple" },
                  { label: "SEO", score: "100", color: "color-accent-pink" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ border: `4px solid ${V(item.color)}` }}
                    >
                      <span style={{ ...S.h4, color: V(item.color) }}>{item.score}</span>
                    </div>
                    <p style={{ ...S.caption, color: V("color-body-mid") }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECURITY COMPLIANCE ═══ */}
        <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas-soft") }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p style={{ ...S.eyebrow, color: V("color-accent-purple") }}>Security & Compliance</p>
              <h2 className="mt-3 mb-4" style={S.h2}>
                Enterprise security, by default
              </h2>
              <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
                Your data is protected by industry-leading security practices and verified by independent
                third-party audits.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {COMPLIANCE.map((item) => (
                <div
                  key={item.badge}
                  className="rounded-xl p-8 flex flex-col sm:flex-row gap-6"
                  style={{
                    background: V("color-canvas"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <div className="shrink-0">
                    <div
                      className="px-5 py-3 rounded-lg text-center"
                      style={{ background: V("color-canvas-soft"), border: `1px solid ${V("color-hairline")}` }}
                    >
                      <div style={{ ...S.h4, color: V("color-ink") }}>{item.badge}</div>
                      {"type" in item && (
                        <div style={{ ...S.caption, color: V("color-mute") }}>{item.type}</div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="m-0" style={{ ...S.bodySm, color: V("color-body-mid") }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas") }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p style={{ ...S.eyebrow, color: V("color-accent-blue") }}>Comparison</p>
              <h2 className="mt-3 mb-4" style={S.h2}>
                How we stack up
              </h2>
              <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
                Kreature hosting vs traditional providers. See what you get with a fully managed platform
                built for modern teams.
              </p>
            </div>

            <div className="overflow-x-auto -mx-5 sm:mx-0">
              <div className="min-w-[640px] sm:min-w-0">
                {/* Table header */}
                <div
                  className="grid grid-cols-3 rounded-t-xl overflow-hidden"
                  style={{ borderBottom: `1px solid ${V("color-hairline")}` }}
                >
                  <div className="p-4 font-semibold" style={{ ...S.bodySm, color: V("color-ink") }}>
                    Feature
                  </div>
                  <div className="p-4 font-semibold" style={{ background: V("color-canvas-soft"), ...S.bodySm, color: V("color-accent-blue") }}>
                    Kreature hosting
                  </div>
                  <div className="p-4 font-semibold" style={{ ...S.bodySm, color: V("color-body-mid") }}>
                    Traditional hosting
                  </div>
                </div>

                {/* Table rows */}
                {COMPARISON_ROWS.map((row, i) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3"
                    style={{
                      borderBottom: `1px solid ${V("color-hairline")}`,
                      background: i % 2 === 0 ? "transparent" : V("color-canvas-soft"),
                    }}
                  >
                    <div className="p-4" style={{ ...S.bodySm, color: V("color-ink") }}>
                      {row.feature}
                    </div>
                    <div className="p-4" style={{ background: i % 2 === 0 ? V("color-canvas-soft") : V("color-canvas") }}>
                      <span style={{ ...S.bodySm, color: V("color-accent-blue"), fontWeight: 600 }}>
                        {row.kreature}
                      </span>
                    </div>
                    <div className="p-4">
                      <span style={{ ...S.bodySm, color: V("color-mute") }}>
                        {row.traditional}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas-soft") }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4" style={S.h2}>
              Start for free
            </h2>
            <p className="max-w-xl mx-auto mb-10" style={{ ...S.body, color: V("color-body-mid"), fontSize: "20px" }}>
              Deploy your site on the same infrastructure trusted by Fortune 500 companies.
              Free to start, scales when you do.
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
                Deploy your site <Arrow />
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
