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
  navLink: { fontSize: "14px", fontWeight: 500, lineHeight: "22.4px" } as React.CSSProperties,
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

/* ─── OPTIMIZE FEATURES ─── */
const OPTIMIZE_FEATURES = [
  {
    icon: "⚗️",
    title: "A/B testing",
    desc: "Run experiments on headlines, CTAs, images, layouts, and entire pages. Our visual editor lets you create variants without touching code. Statistical significance calculator built in.",
  },
  {
    icon: "🎯",
    title: "Personalization",
    desc: "Deliver tailored experiences based on visitor attributes, behavior, and history. Show different content to first-time visitors, returning customers, or users from specific campaigns.",
  },
  {
    icon: "🤖",
    title: "AI-powered recommendations",
    desc: "Our machine learning engine analyzes visitor behavior and automatically suggests which variants to test, which audiences to target, and which content performs best for each segment.",
  },
  {
    icon: "📊",
    title: "Conversion funnels",
    desc: "Visualize every step of your conversion path. See exactly where visitors drop off, identify friction points, and measure how optimizations impact each stage of the funnel.",
  },
  {
    icon: "🔥",
    title: "Heatmaps",
    desc: "Click, scroll, and attention heatmaps show you exactly how visitors interact with every page. Understand what they see, what they click, and what they ignore.",
  },
  {
    icon: "🔌",
    title: "Analytics integration",
    desc: "Connect to Google Analytics, Mixpanel, Amplitude, Segment, and 30+ other platforms. Send experiment data to your existing analytics stack with one-click integrations.",
  },
];

/* ─── HOW A/B TESTING WORKS ─── */
const HOW_AB_TESTING_WORKS = [
  {
    step: "01",
    title: "Create a variant",
    desc: "Clone any page and make changes with our visual editor. Modify headlines, swap images, rearrange layouts, or change CTAs. No developer needed to spin up an experiment.",
  },
  {
    step: "02",
    title: "Set your audience",
    desc: "Choose what percentage of traffic sees each variant. Target specific segments by location, device, referral source, or custom attributes. Run A/B or multivariate tests.",
  },
  {
    step: "03",
    title: "Measure results",
    desc: "Watch results update in real time. Our stats engine calculates confidence levels automatically and declares a winner when statistical significance is reached. Apply the winner with one click.",
  },
];

/* ─── PERSONALIZATION RULES ─── */
const PERSONALIZATION_RULES = [
  {
    icon: "🌍",
    title: "By location",
    desc: "Show region-specific pricing, local testimonials, and geo-targeted promotions. Detect visitor country or city automatically and serve the most relevant content.",
    highlight: "Geo-targeting",
  },
  {
    icon: "📱",
    title: "By device",
    desc: "Optimize the experience for desktop, tablet, and mobile separately. Show mobile-specific CTAs, simplify navigation for smaller screens, and tailor layouts per device type.",
    highlight: "Device-aware",
  },
  {
    icon: "🔗",
    title: "By referral source",
    desc: "Customize landing pages based on where visitors came from. Different messaging for social traffic, search traffic, email campaigns, and paid ads. Match the promise that brought them.",
    highlight: "Source-aware",
  },
  {
    icon: "🧠",
    title: "By behavior",
    desc: "Adapt based on what visitors do. Show returning visitors their last-viewed items, offer discounts to hesitant shoppers, or surface case studies to prospects who spent time on your pricing page.",
    highlight: "Behavior-driven",
  },
];

/* ─── PERFORMANCE METRICS ─── */
const PERFORMANCE_METRICS = [
  { value: "42%", label: "Average conversion lift from A/B testing" },
  { value: "3.2x", label: "Return on optimization investment" },
  { value: "18min", label: "Average time to launch an experiment" },
  { value: "99.9%", label: "Statistical confidence threshold" },
  { value: "50k+", label: "Experiments run per month" },
  { value: "2.8M", label: "Variants tested since launch" },
];

/* ─── ENTERPRISE OPTIMIZATION ─── */
const ENTERPRISE_OPTIMIZATION = [
  {
    title: "Multi-armed bandits",
    desc: "Automatically shift traffic toward winning variants in real time. Maximize conversions during the test instead of waiting for a winner. Built on Thompson sampling algorithms.",
  },
  {
    title: "Feature flags",
    desc: "Ship features behind flags and test with real users before full rollout. Gradual rollouts, kill switches, and percentage-based releases — all integrated with your optimization experiments.",
  },
  {
    title: "Server-side testing",
    desc: "Run experiments at the edge for zero flicker. Tests execute before the page renders, eliminating layout shift and improving reliability for mission-critical experiments.",
  },
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
      { label: "Localization", href: "/feature/localization" },
      { label: "Optimize", href: "/feature/optimize" },
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

/* ══════════════════════════════════════════════════════════════════════════════════════════
   OPTIMIZE FEATURE PAGE
   ══════════════════════════════════════════════════════════════════════════════════════════ */
export default function OptimizePage() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section
        className="pt-[148px] pb-20 sm:pb-28 px-5 sm:px-8"
        style={{ background: V("color-canvas") }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p style={{ ...S.eyebrow, color: V("color-accent-orange") }}>Optimization</p>
          <h1 className="mt-4 mb-6" style={S.h1}>
            Turn visitors into customers
          </h1>
          <p className="max-w-2xl mx-auto" style={{ ...S.body, color: V("color-body-mid"), fontSize: "20px" }}>
            A complete optimization platform built into your website. A/B testing, personalization,
            and AI-powered insights that help you convert more visitors — without slowing down your site.
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
              Start optimizing <Arrow />
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

      {/* ═══ OPTIMIZE FEATURES ═══ */}
      <section
        id="features"
        className="py-20 sm:py-28 px-5 sm:px-8"
        style={{ background: V("color-canvas-soft") }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ ...S.eyebrow, color: V("color-accent-orange") }}>Features</p>
            <h2 className="mt-3 mb-4" style={S.h2}>
              The tools you need to grow
            </h2>
            <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
              Everything from simple A/B tests to AI-driven personalization. Built for marketers
              who want results, not complexity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPTIMIZE_FEATURES.map((feat) => (
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
                <h3 className="mb-3" style={{ ...S.h4, color: V("color-ink") }}>{feat.title}</h3>
                <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW A/B TESTING WORKS ═══ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas") }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ ...S.eyebrow, color: V("color-accent-orange") }}>How A/B testing works</p>
            <h2 className="mt-3 mb-4" style={S.h2}>
              From hypothesis to winner in three steps
            </h2>
            <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
              Launch experiments with confidence. Our visual editor and statistical engine handle
              the heavy lifting so you can focus on growing your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {HOW_AB_TESTING_WORKS.map((item) => (
              <div key={item.step} className="text-center sm:text-left">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto sm:mx-0"
                  style={{ background: V("color-accent-orange"), color: "#fff" }}
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

      {/* ═══ PERSONALIZATION RULES ═══ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas-soft") }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ ...S.eyebrow, color: V("color-accent-orange") }}>Personalization rules</p>
            <h2 className="mt-3 mb-4" style={S.h2}>
              The right message to the right person
            </h2>
            <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
              Personalize every touchpoint based on who your visitors are and what they do.
              No code required — rules are configured visually.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PERSONALIZATION_RULES.map((rule) => (
              <div
                key={rule.title}
                className="rounded-xl p-8 flex flex-col sm:flex-row gap-5"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ background: V("color-canvas-soft"), color: V("color-accent-orange") }}
                >
                  {rule.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="m-0" style={{ ...S.h4, color: V("color-ink") }}>{rule.title}</h3>
                    <span
                      className="inline-block px-2 py-0.5 rounded-full"
                      style={{
                        ...S.caption,
                        background: V("color-canvas-soft"),
                        color: V("color-accent-orange"),
                      }}
                    >
                      {rule.highlight}
                    </span>
                  </div>
                  <p className="m-0" style={{ ...S.bodySm, color: V("color-body-mid") }}>{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PERFORMANCE METRICS ═══ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas") }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ ...S.eyebrow, color: V("color-accent-orange") }}>Results</p>
            <h2 className="mt-3 mb-4" style={S.h2}>
              Real results from real optimizations
            </h2>
            <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
              Our customers see measurable improvements across the board. Here is what the
              data shows across thousands of experiments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {PERFORMANCE_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl p-6 text-center"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="mb-2"
                  style={{
                    ...S.h3,
                    color: V("color-accent-orange"),
                    fontSize: "36px",
                    lineHeight: "44px",
                  }}
                >
                  {metric.value}
                </div>
                <p className="m-0" style={{ ...S.caption, color: V("color-body-mid") }}>{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="max-w-2xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
              Average results from customers actively using Kreature Optimize.
              Individual results may vary based on traffic volume and test design.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ENTERPRISE OPTIMIZATION ═══ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas-soft") }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ ...S.eyebrow, color: V("color-accent-purple") }}>Enterprise</p>
            <h2 className="mt-3 mb-4" style={S.h2}>
              Optimization at scale
            </h2>
            <p className="max-w-xl mx-auto" style={{ ...S.body, color: V("color-body-mid") }}>
              Advanced experimentation capabilities for teams running high-traffic sites
              and mission-critical optimization programs.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {ENTERPRISE_OPTIMIZATION.map((feat) => (
              <div
                key={feat.title}
                className="rounded-xl p-8"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <h3 className="mb-3" style={{ ...S.h4, color: V("color-ink") }}>{feat.title}</h3>
                <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: V("color-canvas") }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4" style={S.h2}>
            Start optimizing
          </h2>
          <p className="max-w-xl mx-auto mb-10" style={{ ...S.body, color: V("color-body-mid"), fontSize: "20px" }}>
            Launch your first A/B test in under 20 minutes. No developer needed, no performance
            hit, no credit card required.
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
    </main>
  );
}
