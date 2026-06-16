"use client";

/* ──────────────── Helpers ──────────────── */

const V = (n: string) => `var(--${n})`;

/* ──────────────── Shared Components ──────────────── */

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ──────────────── Footer Data ──────────────── */

const FOOTER_DATA = [
  {
    heading: "Product",
    links: [
      { label: "Designer", href: "/platform" },
      { label: "CMS", href: "/platform#cms" },
      { label: "Hosting", href: "/platform#hosting" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Freelancers", href: "/solutions/freelancers" },
      { label: "Performance Marketers", href: "/solutions/performance-marketers" },
      { label: "Startups", href: "/solutions/startups" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Libraries", href: "/libraries" },
      { label: "Glossary", href: "/glossary" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Contact", href: "/contact-sales" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs Webflow", href: "/webflow-clone" },
      { label: "vs Framer", href: "/webflow-way" },
      { label: "vs WordPress", href: "/made-in-webflow" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Forum", href: "/community" },
      { label: "Events", href: "/community#events" },
      { label: "Discord", href: "/community#discord" },
    ],
  },
  {
    heading: "Get Help",
    links: [
      { label: "Support", href: "/contact-sales" },
      { label: "Docs", href: "/resources" },
      { label: "Status", href: "https://status.kreature.studio" },
    ],
  },
];

/* ──────────────── Section Data ──────────────── */

const FEATURES = [
  {
    icon: "\u{1F310}",
    title: "Landing Pages",
    body: "Build and deploy conversion-optimized landing pages in minutes. AI-assisted layouts tuned for your campaign goals with built-in A/B testing hooks.",
  },
  {
    icon: "\u{1F4CA}",
    title: "A/B Testing",
    body: "Run multivariate tests across headlines, CTAs, layouts, and imagery. Statistical significance tracking with visual reports so you know when to call a winner.",
  },
  {
    icon: "\u{1F50D}",
    title: "SEO Tools",
    body: "Built-in on-page SEO audit, structured data generation, and Core Web Vitals monitoring. Every page ships at 90+ Lighthouse out of the box.",
  },
  {
    icon: "\u{1F4C8}",
    title: "Analytics Dashboard",
    body: "Unified view of all your campaign performance metrics. Connect Google Analytics, Meta, and ad platforms for a single source of truth.",
  },
  {
    icon: "\u{1F3AF}",
    title: "Conversion Optimization",
    body: "AI-powered insights that flag friction points in your funnels. Heatmaps, session recordings, and form analytics to maximize conversion rates.",
  },
  {
    icon: "\u{1F3C1}",
    title: "Campaign Tracking",
    body: "UTM management, pixel deployment, and event tracking all managed from one place. No more broken tags or missing attribution data.",
  },
];

const SPEED_ADVANTAGES = [
  {
    title: "Launch in hours, not weeks",
    body: "Pre-built, conversion-tested templates let you go from brief to live in a single afternoon. No developers, no bottlenecks, no excuses.",
  },
  {
    title: "Iterate without engineering",
    body: "Tweak copy, swap imagery, or restructure layouts without touching code or waiting for dev cycles. Marketing moves at your speed.",
  },
  {
    title: "Scale campaigns effortlessly",
    body: "Clone winning pages, spin up geo-targeted variants, and manage hundreds of landing pages from a single dashboard with bulk editing.",
  },
];

const INTEGRATIONS = [
  { name: "Google Analytics", icon: "GA", accent: "color-accent-orange" },
  { name: "Meta Ads", icon: "M", accent: "color-accent-blue" },
  { name: "Google Ads", icon: "G", accent: "color-accent-green" },
  { name: "HubSpot", icon: "H", accent: "color-accent-pink" },
  { name: "Klaviyo", icon: "K", accent: "color-accent-purple" },
  { name: "LinkedIn Ads", icon: "LI", accent: "color-accent-blue" },
  { name: "Segment", icon: "S", accent: "color-accent-orange" },
  { name: "Mixpanel", icon: "Mx", accent: "color-accent-pink" },
];

const STATS = [
  { value: "3.2x", label: "Average conversion lift" },
  { value: "48h", label: "Time to first test" },
  { value: "12,000+", label: "Marketers on platform" },
  { value: "99.9%", label: "Uptime SLA" },
];

/* ──────────────── Page Component ──────────────── */

export default function PerformanceMarketersPage() {
  return (
    <>
      <main>
        {/* ── HERO ── */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 lg:py-36 text-center"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-4xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-5"
              style={{ color: V("color-accent-blue") }}
            >
              For performance marketers
            </p>
            <h1
              className="max-w-3xl mx-auto"
              style={{
                fontSize: "clamp(44px, 6vw, 80px)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.8px",
                color: V("color-ink"),
              }}
            >
              Drive results that matter
            </h1>
            <p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: V("color-body"),
              }}
            >
              Build, test, and optimize landing pages at the speed your campaigns
              demand. Go from brief to live in hours, iterate without engineering,
              and watch your conversion rates climb with AI-powered optimization
              tools built for marketers who move fast.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Start driving results <Arrow />
              </a>
              <a
                href="#features"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                Explore features
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section
          className="px-5 sm:px-8 py-10 border-y"
          style={{
            backgroundColor: V("color-canvas-soft"),
            borderColor: V("color-hairline"),
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl sm:text-3xl font-semibold"
                  style={{ color: V("color-ink") }}
                >
                  {s.value}
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: V("color-mute") }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section
          id="features"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-blue") }}
            >
              Marketer toolset
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Everything you need to optimize
            </h2>
            <p
              className="mt-4 max-w-xl"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              From landing page builder to full-funnel analytics, Kreature gives
              performance marketers the toolkit to move fast and win.
            </p>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  className="p-6 rounded-xl border transition-colors"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <div className="text-2xl mb-4">{feat.icon}</div>
                  <h4
                    className="mb-2"
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: V("color-ink"),
                    }}
                  >
                    {feat.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {feat.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPEED SECTION ── */}
        <section
          id="speed"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p
                  className="text-sm uppercase tracking-widest mb-3"
                  style={{ color: V("color-accent-orange") }}
                >
                  Speed advantage
                </p>
                <h2
                  className="mb-6"
                  style={{
                    fontSize: "clamp(32px, 4vw, 56px)",
                    fontWeight: 600,
                    lineHeight: 1.04,
                    color: V("color-ink"),
                  }}
                >
                  Ship fast, test faster
                </h2>
                <p
                  className="mb-8"
                  style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
                >
                  The gap between idea and experiment is where campaigns die.
                  Kreature collapses that gap to zero. Build a landing page over
                  lunch, launch an A/B test before dinner, and wake up to results
                  the next morning.
                </p>
                <div className="space-y-6">
                  {SPEED_ADVANTAGES.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: V("color-accent-orange") }}
                      >
                        <span className="text-white text-lg font-bold">
                          {SPEED_ADVANTAGES.indexOf(item) + 1}
                        </span>
                      </div>
                      <div>
                        <h4
                          className="mb-1"
                          style={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: V("color-ink"),
                          }}
                        >
                          {item.title}
                        </h4>
                        <p style={{ color: V("color-body-mid"), lineHeight: 1.7 }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl border p-8"
                style={{
                  borderColor: V("color-hairline"),
                  backgroundColor: V("color-canvas"),
                  boxShadow: V("shadow-card"),
                }}
              >
                <div className="space-y-5">
                  {[
                    { label: "Brief to wireframe", time: "15 min" },
                    { label: "Wireframe to live page", time: "2 hours" },
                    { label: "A/B test setup", time: "10 min" },
                    { label: "First test results", time: "4-48 hours" },
                    { label: "Iterate winning variant", time: "30 min" },
                  ].map((step, i) => (
                    <div
                      key={step.label}
                      className="flex items-center justify-between pb-4"
                      style={{
                        borderBottom:
                          i < 4 ? `1px solid ${V("color-hairline")}` : "none",
                      }}
                    >
                      <span
                        className="text-sm"
                        style={{ color: V("color-body") }}
                      >
                        {step.label}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: V("color-ink") }}
                      >
                        {step.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS ── */}
        <section
          id="integrations"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-purple") }}
            >
              Integrations
            </p>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Plug into your stack
            </h2>
            <p
              className="max-w-xl mx-auto mb-14"
              style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
            >
              Connect every tool in your marketing stack. Pixel-perfect
              integrations with the platforms you already use, so your data
              flows seamlessly from click to conversion.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {INTEGRATIONS.map((integration) => (
                <div
                  key={integration.name}
                  className="p-6 rounded-xl border text-center transition-colors"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm"
                    style={{ backgroundColor: V(integration.accent) }}
                  >
                    {integration.icon}
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: V("color-ink") }}
                  >
                    {integration.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          id="cta"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Start driving results
            </h2>
            <p
              className="mb-10 max-w-xl mx-auto"
              style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
            >
              Join 12,000+ performance marketers who ship faster, test more, and
              convert higher with Kreature. Build your first landing page in
              minutes and start optimizing today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/signup"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Get started free <Arrow />
              </a>
              <a
                href="/contact-sales"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                Talk to sales
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer
        className="border-t"
        style={{
          borderColor: V("color-hairline"),
          backgroundColor: V("color-canvas"),
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="grid sm:grid-cols-3 lg:grid-cols-7 gap-8">
            {/* Brand column */}
            <div className="sm:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/logo/kreature-logo-dark.png"
                  alt="Kreature"
                  className="logo-dark h-[30px] w-auto"
                />
                <img
                  src="/logo/kreature-logo-light.png"
                  alt="Kreature"
                  className="logo-light h-[30px] w-auto"
                />
                <span
                  className="font-[800] text-lg tracking-tight"
                  style={{ color: V("color-ink") }}
                >
                  Kreature
                  <span style={{ color: V("color-accent-blue") }}>.</span>
                </span>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: V("color-mute") }}
              >
                AI Product Studio for teams who ship fast.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_DATA.map((col) => (
              <div key={col.heading}>
                <div
                  className="text-xs uppercase tracking-wider font-semibold mb-4"
                  style={{ color: V("color-body-mid") }}
                >
                  {col.heading}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs transition-colors"
                        style={{ color: V("color-mute") }}
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
            <p className="text-xs" style={{ color: V("color-mute-soft") }}>
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
    </>
  );
}
