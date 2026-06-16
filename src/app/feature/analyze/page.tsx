"use client";

// ─── Design token accessor ───
const V = (n: string) => `var(--${n})`;

// ─── Analytics feature cards ───
const ANALYTICS_FEATURES = [
  {
    icon: "▤",
    title: "Real-time dashboard",
    description:
      "See visitors arriving on your site the moment they land. Track active users, page views per second, and live conversion events — all updating without a refresh.",
    accent: "color-accent-blue",
  },
  {
    icon: "◉",
    title: "Visitor analytics",
    description:
      "Understand exactly who your visitors are — geography, device, browser, language, and referral source. Segment by any dimension to find your best-performing audiences.",
    accent: "color-accent-purple",
  },
  {
    icon: "⌘",
    title: "Page performance",
    description:
      "Know which pages drive traffic, which ones convert, and which ones bounce. Sort by views, time on page, exit rate, or conversion rate to spot winners and underperformers.",
    accent: "color-accent-green",
  },
  {
    icon: "↗",
    title: "Traffic sources",
    description:
      "Break down every visit by channel — organic search, social, direct, referral, email, and paid. See exactly which platforms send the most valuable traffic, not just the most clicks.",
    accent: "color-accent-orange",
  },
  {
    icon: "◆",
    title: "Conversion tracking",
    description:
      "Define goals once and track them everywhere. Form submissions, button clicks, purchases, signups — every conversion event is recorded and attributed to the right channel.",
    accent: "color-accent-pink",
  },
  {
    icon: "◎",
    title: "Custom events",
    description:
      "Track anything that matters to your business. Video plays, scroll depth, file downloads, feature usage — define custom events without writing a line of code.",
    accent: "color-accent-blue",
  },
  {
    icon: "⌇",
    title: "UTM tracking",
    description:
      "Automatic UTM parameter capture and attribution. Every campaign, medium, source, and term is parsed and surfaced in your dashboard. No manual tagging spreadsheet required.",
    accent: "color-accent-purple",
  },
  {
    icon: "⬡",
    title: "GDPR-compliant by default",
    description:
      "No cookies, no fingerprinting, no cross-site tracking. Kreature Analytics uses privacy-first measurement that doesn't require consent banners — fully compliant with GDPR, CCPA, and PECR.",
    accent: "color-accent-green",
  },
];

// ─── Dashboard preview stats ───
const DASHBOARD_STATS = [
  {
    label: "Live visitors",
    value: "1,247",
    change: "+12%",
    up: true,
    accent: "color-accent-blue",
  },
  {
    label: "Bounce rate",
    value: "24.3%",
    change: "-5%",
    up: false,
    accent: "color-accent-green",
  },
  {
    label: "Avg. session",
    value: "4m 12s",
    change: "+8%",
    up: true,
    accent: "color-accent-purple",
  },
  {
    label: "Conversions",
    value: "342",
    change: "+18%",
    up: true,
    accent: "color-accent-orange",
  },
];

// ─── Comparison: Kreature Analytics vs Google Analytics ───
const COMPARISON_ROWS = [
  {
    feature: "Setup time",
    kreature: "Zero config — live on publish",
    ga4: "Hours of tag setup and event mapping",
  },
  {
    feature: "Cookie consent",
    kreature: "Not required — cookieless by design",
    ga4: "Consent banner required in EU/UK/CA",
  },
  {
    feature: "Real-time data",
    kreature: "Sub-second live dashboard",
    ga4: "24-48 hour delay in standard reports",
  },
  {
    feature: "Custom events",
    kreature: "No-code event builder",
    ga4: "GTM or manual code setup",
  },
  {
    feature: "UTM tracking",
    kreature: "Auto-captured and attributed",
    ga4: "Manual parameter configuration",
  },
  {
    feature: "Page performance",
    kreature: "Built-in Core Web Vitals + page stats",
    ga4: "Separate PageSpeed Insights required",
  },
  {
    feature: "Dashboard UX",
    kreature: "One-page, no menus, no training needed",
    ga4: "Complex navigation, steep learning curve",
  },
  {
    feature: "Data retention",
    kreature: "Unlimited — all plans",
    ga4: "2-14 months depending on settings",
  },
  {
    feature: "Data sampling",
    kreature: "Never sampled — 100% of traffic",
    ga4: "Sampled above threshold limits",
  },
  {
    feature: "Privacy compliance",
    kreature: "GDPR/CCPA/PECR by default",
    ga4: "Requires manual configuration + legal review",
  },
];

// ─── Top pages mock data ───
const TOP_PAGES = [
  { page: "/blog/how-to-build-saas-landing-page", views: "12,432", change: "+24%" },
  { page: "/templates/startup", views: "8,921", change: "+18%" },
  { page: "/pricing", views: "7,234", change: "+9%" },
  { page: "/blog/seo-checklist-2026", views: "6,543", change: "+32%" },
  { page: "/feature/analyze", views: "5,432", change: "+41%" },
];

// ─── Footer data ───
const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Design", href: "/feature/design" },
      { label: "CMS", href: "/feature/cms" },
      { label: "Hosting", href: "/feature/hosting" },
      { label: "SEO", href: "/feature/seo" },
      { label: "Ecommerce", href: "/feature/ecommerce" },
      { label: "Analytics", href: "/feature/analyze" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Startups", href: "/solutions/startups" },
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Ecommerce", href: "/solutions/ecommerce" },
      { label: "SaaS", href: "/solutions/saas" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Templates", href: "/templates" },
      { label: "Integrations", href: "/integrations" },
      { label: "Glossary", href: "/glossary" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact-sales" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs Webflow", href: "/webflow-clone" },
      { label: "vs WordPress", href: "/webflow-way" },
      { label: "vs Framer", href: "/made-in-webflow" },
      { label: "vs Shopify", href: "/feature/ecommerce" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Discord", href: "https://discord.com" },
      { label: "Forum", href: "/community" },
      { label: "Events", href: "/community/events" },
      { label: "Showcase", href: "/community/showcase" },
    ],
  },
  {
    heading: "Get Help",
    links: [
      { label: "Help Center", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Status", href: "/status" },
      { label: "Support", href: "/contact-sales" },
    ],
  },
];

// ─── Sub-components ───

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

// ─── Footer ───

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: V("color-hairline"),
        backgroundColor: V("color-canvas"),
      }}
    >
      <div
        className="mx-auto px-5 sm:px-8 py-16"
        style={{ maxWidth: "1440px" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/logo/kreature-logo-dark.png"
                alt="Kreature"
                className="logo-dark h-[32px] w-auto"
              />
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="logo-light h-[32px] w-auto"
              />
              <span
                className="font-heading font-[800] text-lg tracking-tight"
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
              Privacy-first analytics that give you the full picture — without
              the cookie banners. Built directly into every Kreature site.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div
                className="text-xs uppercase tracking-wider mb-4 font-medium"
                style={{ color: V("color-mute-soft") }}
              >
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: V("color-body-mid") }}
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
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
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
              className="transition-colors hover:opacity-80"
              style={{ color: V("color-mute") }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:opacity-80"
              style={{ color: V("color-mute") }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ───

export default function AnalyzeFeaturePage() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: V("color-canvas"),
          paddingTop: "140px",
          paddingBottom: "80px",
        }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: V("color-accent-blue") }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full blur-[120px] opacity-10"
            style={{ backgroundColor: V("color-accent-orange") }}
          />
        </div>

        <div
          className="mx-auto px-5 sm:px-8 text-center relative z-10"
          style={{ maxWidth: "900px" }}
        >
          {/* Eyebrow */}
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              color: V("color-accent-blue"),
              backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} 10%, transparent)`,
              border: `1px solid ${V("color-accent-blue")}20`,
            }}
          >
            Analytics Features
          </div>

          <h1
            className="font-heading font-semibold tracking-tight mb-6"
            style={{
              fontSize: "80px",
              lineHeight: "83.2px",
              letterSpacing: "-0.8px",
              color: V("color-ink"),
            }}
          >
            Understand your audience
          </h1>

          <p
            className="text-lg mx-auto mb-10"
            style={{
              color: V("color-body-mid"),
              maxWidth: "640px",
              fontSize: "18px",
              lineHeight: "28.8px",
            }}
          >
            Privacy-first analytics built directly into your site. No cookies,
            no consent banners, no third-party scripts slowing you down — just
            clean, actionable data from the moment you publish.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: V("color-accent-blue"),
                borderRadius: "4px",
              }}
            >
              Start analyzing
              <Arrow />
            </a>
            <a
              href="/feature/analyze#features"
              className="text-base font-medium px-8 py-4 rounded transition-colors border"
              style={{
                color: V("color-ink"),
                borderColor: V("color-hairline"),
                borderRadius: "4px",
              }}
            >
              See all features
            </a>
          </div>
        </div>
      </section>

      {/* ─── Dashboard Preview Section ─── */}
      <section
        style={{
          backgroundColor: V("color-canvas-soft"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="text-center mb-16">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-blue") }}
            >
              Live Dashboard
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Everything at a glance
            </h2>
            <p
              className="text-base mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "560px",
                fontSize: "16px",
                lineHeight: "25.6px",
              }}
            >
              One screen. Every metric that matters. No digging through menus,
              no waiting for reports to load — your site&apos;s pulse in
              real-time.
            </p>
          </div>

          {/* Dashboard mock stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {DASHBOARD_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: V("color-canvas"),
                  borderColor: V("color-hairline"),
                  boxShadow: `0 1px 2px ${V("color-hairline")}`,
                }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: V("color-mute") }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-3xl font-semibold mb-2 tracking-tight"
                  style={{ color: V("color-ink") }}
                >
                  {stat.value}
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{
                      color: stat.up
                        ? V("color-accent-green")
                        : V("color-accent-red"),
                      backgroundColor: `color-mix(in srgb, ${
                        stat.up
                          ? V("color-accent-green")
                          : V("color-accent-red")
                      } 12%, transparent)`,
                    }}
                  >
                    {stat.change}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: V("color-mute") }}
                  >
                    vs last week
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Visitor chart mock */}
          <div
            className="rounded-xl p-8 border mb-10"
            style={{
              backgroundColor: V("color-canvas"),
              borderColor: V("color-hairline"),
              boxShadow: `0 1px 2px ${V("color-hairline")}`,
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <div
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: V("color-mute") }}
                >
                  Visitors over time
                </div>
                <div
                  className="text-2xl font-semibold mt-1"
                  style={{ color: V("color-ink") }}
                >
                  38,492
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: V("color-mute") }}
                >
                  Last 30 days
                </div>
              </div>
              <div className="flex gap-3">
                {["7d", "30d", "90d", "12m"].map((range) => (
                  <span
                    key={range}
                    className="text-xs font-medium px-3 py-1 rounded-full cursor-pointer"
                    style={{
                      color:
                        range === "30d"
                          ? "#fff"
                          : V("color-body-mid"),
                      backgroundColor:
                        range === "30d"
                          ? V("color-accent-blue")
                          : V("color-canvas-soft"),
                    }}
                  >
                    {range}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart mock — bars (deterministic heights) */}
            <div className="flex items-end gap-2 h-[200px]">
              {Array.from({ length: 30 }).map((_, i) => {
                // Deterministic pseudo-random heights based on index
                const seed = (i * 7 + 13) % 30;
                const h = 25 + (seed / 30) * 70;
                const mixPct = 30 + ((seed * 3) % 50);
                const opacity = 0.55 + (seed / 30) * 0.4;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-200"
                    style={{
                      height: `${h}%`,
                      backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} ${Math.round(mixPct)}%, transparent)`,
                      opacity,
                    }}
                  />
                );
              })}
            </div>
            <div
              className="flex justify-between mt-3 text-xs"
              style={{ color: V("color-mute") }}
            >
              <span>Jun 1</span>
              <span>Jun 30</span>
            </div>
          </div>

          {/* Top pages */}
          <div
            className="rounded-xl p-8 border"
            style={{
              backgroundColor: V("color-canvas"),
              borderColor: V("color-hairline"),
              boxShadow: `0 1px 2px ${V("color-hairline")}`,
            }}
          >
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: V("color-mute") }}
            >
              Top pages
            </div>
            <div className="space-y-3">
              {TOP_PAGES.map((p, i) => (
                <div
                  key={p.page}
                  className="flex items-center justify-between py-2.5 border-b"
                  style={{
                    borderColor:
                      i < TOP_PAGES.length - 1
                        ? V("color-hairline")
                        : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-semibold w-5"
                      style={{ color: V("color-mute") }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: V("color-ink") }}
                    >
                      {p.page}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-sm font-medium"
                      style={{ color: V("color-body-mid") }}
                    >
                      {p.views}
                    </span>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        color: V("color-accent-green"),
                        backgroundColor: `color-mix(in srgb, ${V("color-accent-green")} 12%, transparent)`,
                      }}
                    >
                      {p.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Feature Grid ─── */}
      <section
        id="features"
        style={{
          backgroundColor: V("color-canvas"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="text-center mb-16">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-green") }}
            >
              Everything included
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Analytics without the complexity
            </h2>
            <p
              className="text-base mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "560px",
                fontSize: "16px",
                lineHeight: "25.6px",
              }}
            >
              Every feature below works the moment you publish your site. No
              scripts to install, no dashboards to configure — just insights
              that help you grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ANALYTICS_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 border"
                style={{
                  backgroundColor: V("color-canvas-soft"),
                  borderColor: V("color-hairline"),
                  boxShadow: `0 1px 2px ${V("color-hairline")}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${V(feature.accent)} 12%, transparent)`,
                    color: V(feature.accent),
                  }}
                >
                  {feature.icon}
                </div>
                <h4
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: V("color-body-mid") }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Privacy-first highlight ─── */}
      <section
        style={{
          backgroundColor: V("color-canvas-soft"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div>
              <div
                className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{
                  color: V("color-accent-green"),
                  backgroundColor: `color-mix(in srgb, ${V("color-accent-green")} 10%, transparent)`,
                  border: `1px solid ${V("color-accent-green")}20`,
                }}
              >
                Privacy-first by design
              </div>
              <h2
                className="font-heading font-semibold tracking-tight mb-5"
                style={{
                  fontSize: "48px",
                  lineHeight: "52px",
                  color: V("color-ink"),
                }}
              >
                Analytics that respect your users
              </h2>
              <p
                className="text-base mb-8"
                style={{
                  color: V("color-body-mid"),
                  fontSize: "16px",
                  lineHeight: "25.6px",
                }}
              >
                Kreature Analytics is built privacy-first. We never use
                cookies, never fingerprint visitors, and never track users
                across sites. That means no consent banners, no legal pop-ups,
                and fully compliant analytics from day one — in every
                jurisdiction.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "No cookie banners needed",
                    desc: "Cookieless tracking means you don't need a consent popup. Your analytics work in the EU, UK, California, and everywhere else without a single legal disclaimer.",
                  },
                  {
                    title: "100% data ownership",
                    desc: "Your analytics data lives on your Kreature account. It's never sold, never shared, and never used to train ad models. You control retention and deletion.",
                  },
                  {
                    title: "No cross-site tracking",
                    desc: "We don't build shadow profiles of your visitors across sites. Every Kreature Analytics instance is isolated — your data is yours alone.",
                  },
                  {
                    title: "No performance penalty",
                    desc: "Analytics runs on our edge infrastructure, not in your visitors' browsers. Zero additional JavaScript, zero render-blocking scripts, zero impact on your Core Web Vitals.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-lg border"
                    style={{
                      backgroundColor: V("color-canvas"),
                      borderColor: V("color-hairline"),
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        backgroundColor: V("color-accent-green"),
                        color: "#fff",
                        fontSize: "11px",
                      }}
                    >
                      &#10003;
                    </div>
                    <div>
                      <h4
                        className="font-semibold mb-1"
                        style={{
                          fontSize: "16px",
                          color: V("color-ink"),
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: V("color-body-mid") }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — visual */}
            <div
              className="rounded-2xl p-10 border relative overflow-hidden"
              style={{
                backgroundColor: V("color-canvas"),
                borderColor: V("color-hairline"),
                minHeight: "500px",
              }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-10 right-10 w-[250px] h-[250px] rounded-full blur-[80px] opacity-15"
                  style={{ backgroundColor: V("color-accent-green") }}
                />
              </div>

              <div className="relative z-10 space-y-6">
                {/* No cookie banner visual */}
                <div
                  className="rounded-lg p-5 border text-center"
                  style={{
                    backgroundColor: V("color-canvas-soft"),
                    borderColor: V("color-hairline"),
                  }}
                >
                  <div
                    className="text-2xl mb-3"
                    style={{ color: V("color-accent-green") }}
                  >
                    &#10003;
                  </div>
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: V("color-ink") }}
                  >
                    No cookie banner required
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    Your visitors land on a clean page — no popups, no
                    interruptions. Analytics runs silently in the background.
                  </p>
                </div>

                {/* Comparison: with vs without */}
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-lg p-4 border text-center opacity-60"
                    style={{
                      backgroundColor: V("color-canvas-soft"),
                      borderColor: V("color-hairline"),
                    }}
                  >
                    <div
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: V("color-mute") }}
                    >
                      Traditional
                    </div>
                    <div
                      className="w-12 h-1 mx-auto mb-2 rounded-full"
                      style={{ backgroundColor: V("color-accent-orange") }}
                    />
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: V("color-body-mid") }}
                    >
                      Cookie banner, legal review, vendor risk assessment,
                      consent management platform
                    </p>
                  </div>
                  <div
                    className="rounded-lg p-4 border text-center"
                    style={{
                      backgroundColor: V("color-canvas-soft"),
                      borderColor: V("color-hairline"),
                    }}
                  >
                    <div
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: V("color-mute") }}
                    >
                      Kreature
                    </div>
                    <div
                      className="w-12 h-1 mx-auto mb-2 rounded-full"
                      style={{ backgroundColor: V("color-accent-green") }}
                    />
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: V("color-body-mid") }}
                    >
                      Publish site. Analytics live. That&apos;s it.
                    </p>
                  </div>
                </div>

                <div
                  className="text-xs text-center mt-4"
                  style={{ color: V("color-mute") }}
                >
                  Thousands of sites use Kreature Analytics without a single
                  cookie consent popup.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Comparison: Kreature Analytics vs Google Analytics ─── */}
      <section
        style={{
          backgroundColor: V("color-canvas"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1000px" }}
        >
          <div className="text-center mb-14">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-orange") }}
            >
              Comparison
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "48px",
                lineHeight: "52px",
                color: V("color-ink"),
              }}
            >
              Kreature Analytics vs Google Analytics 4
            </h2>
            <p
              className="text-base mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "500px",
                fontSize: "16px",
                lineHeight: "25.6px",
              }}
            >
              GA4 is powerful but complex. Kreature Analytics gives you the
              insights you actually need — without the learning curve, the
              cookie banners, or the data sampling.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table
              className="w-full border-collapse"
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: V("color-canvas-soft"),
                  }}
                >
                  <th
                    className="py-4 px-6 text-left text-sm font-semibold"
                    style={{ color: V("color-ink") }}
                  >
                    Feature
                  </th>
                  <th
                    className="py-4 px-6 text-left text-sm font-semibold"
                    style={{ color: V("color-accent-blue") }}
                  >
                    Kreature Analytics
                  </th>
                  <th
                    className="py-4 px-6 text-left text-sm font-semibold"
                    style={{ color: V("color-body-mid") }}
                  >
                    Google Analytics 4
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className="border-b transition-colors"
                    style={{
                      borderColor: V("color-hairline"),
                      backgroundColor:
                        i % 2 === 0
                          ? V("color-canvas")
                          : V("color-canvas-soft"),
                    }}
                  >
                    <td
                      className="py-4 px-6 text-sm font-medium"
                      style={{ color: V("color-ink") }}
                    >
                      {row.feature}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span style={{ color: V("color-accent-green") }}>
                          &#10003;
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: V("color-body") }}
                        >
                          {row.kreature}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className="text-sm"
                        style={{ color: V("color-body-mid") }}
                      >
                        {row.ga4}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: V("color-canvas-soft"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15"
            style={{ backgroundColor: V("color-accent-blue") }}
          />
        </div>

        <div
          className="mx-auto px-5 sm:px-8 text-center relative z-10"
          style={{ maxWidth: "700px" }}
        >
          <h2
            className="font-heading font-semibold tracking-tight mb-5"
            style={{
              fontSize: "56px",
              lineHeight: "58.24px",
              color: V("color-ink"),
            }}
          >
            Start analyzing your audience
          </h2>
          <p
            className="text-lg mb-8 mx-auto"
            style={{
              color: V("color-body-mid"),
              maxWidth: "540px",
              fontSize: "18px",
              lineHeight: "28.8px",
            }}
          >
            Join thousands of sites that get clean, privacy-first analytics
            from the moment they publish — no setup, no scripts, no cookie
            banners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: V("color-accent-blue"),
                borderRadius: "4px",
              }}
            >
              Start for free
              <Arrow />
            </a>
            <a
              href="/contact-sales"
              className="text-base font-medium px-8 py-4 rounded transition-colors border"
              style={{
                color: V("color-ink"),
                borderColor: V("color-hairline"),
                borderRadius: "4px",
              }}
            >
              Talk to sales
            </a>
          </div>
          <p
            className="text-xs mt-5"
            style={{ color: V("color-mute") }}
          >
            No credit card required. Free plan includes analytics for up to
            100k monthly page views.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
