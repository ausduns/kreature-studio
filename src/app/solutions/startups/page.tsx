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
    icon: "⚡",
    title: "Fast Iteration",
    body: "Go from idea to live product in days, not months. Our AI-assisted builder generates production-ready code instantly, so you can ship, learn, and pivot at startup speed.",
  },
  {
    icon: "\u{1F3A8}",
    title: "No-Code Flexibility",
    body: "Design and build entire products without writing a line of code. Drag-and-drop editor, pre-built components, and templates let anyone on your team ship.",
  },
  {
    icon: "\u{1F527}",
    title: "Developer Extensibility",
    body: "When you need custom logic, our developer tools have you covered. Custom code, API integrations, and headless exports give engineers full control without locking you in.",
  },
  {
    icon: "\u{1F4B0}",
    title: "Affordable Pricing",
    body: "Startup-friendly pricing that scales with you. Free to build, affordable to launch, and predictable as you grow. No surprise bills or enterprise negotiation.",
  },
];

const TIMELINE_STEPS = [
  {
    phase: "Day 1",
    title: "Design",
    body: "Create your MVP layout visually. Choose from 200+ startup-optimized templates or start from scratch with AI-assisted design.",
    accent: "color-accent-blue",
  },
  {
    phase: "Day 2-3",
    title: "Build",
    body: "Connect your data, set up user auth, and wire up integrations. Our visual CMS makes content management effortless from day one.",
    accent: "color-accent-purple",
  },
  {
    phase: "Day 4-5",
    title: "Launch",
    body: "Deploy to production with one click. SSL, CDN, and global edge hosting included. Your MVP goes live at a custom domain in minutes.",
    accent: "color-accent-green",
  },
  {
    phase: "Week 2+",
    title: "Iterate",
    body: "Analyze user behavior, run experiments, and ship improvements daily. Kreature's analytics and A/B testing help you find product-market fit faster.",
    accent: "color-accent-orange",
  },
];

const STARTUP_PLANS = [
  {
    name: "Starter",
    accent: "color-accent-green",
    price: "$0",
    period: "forever",
    description: "Everything you need to build and validate your MVP.",
    features: [
      "Up to 3 projects",
      "Visual designer & CMS",
      "1,000 monthly visitors",
      "Community support",
      "Basic SEO tools",
      "SSL & hosting included",
    ],
  },
  {
    name: "Growth",
    accent: "color-accent-blue",
    price: "$49",
    period: "/month",
    description: "For startups gaining traction and shipping fast.",
    features: [
      "Unlimited projects",
      "Custom domains",
      "50,000 monthly visitors",
      "Priority email support",
      "A/B testing & analytics",
      "Custom code & API access",
      "Team collaboration",
      "Remove Kreature branding",
    ],
  },
  {
    name: "Scale",
    accent: "color-accent-purple",
    price: "$149",
    period: "/month",
    description: "For funded startups scaling their product and team.",
    features: [
      "Everything in Growth",
      "500,000+ monthly visitors",
      "Dedicated success manager",
      "Advanced security & SSO",
      "99.9% uptime SLA",
      "Headless export",
      "Unlimited team seats",
      "Priority build queue",
    ],
  },
];

const SUCCESS_STORIES = [
  {
    company: "ShipFast",
    description:
      "Built their entire SaaS MVP on Kreature in 5 days. Raised a $2M seed round 3 months later. Still building on Kreature with 10,000+ users.",
    founder: "Alex Chen, CTO",
    stat: "$2M raised",
  },
  {
    company: "MerchKit",
    description:
      "Launched a print-on-demand marketplace without writing a single line of backend code. Hit $50K MRR in 6 months with a team of two.",
    founder: "Jordan Reyes, Co-founder",
    stat: "$50K MRR",
  },
  {
    company: "DataLens",
    description:
      "Shipped an analytics dashboard in 2 weeks with custom code extensions. Acquired by a larger platform 9 months after launch.",
    founder: "Priya Sharma, CEO",
    stat: "Acquired",
  },
];

const STATS = [
  { value: "15,000+", label: "Startups on Kreature" },
  { value: "5 days", label: "Average time to MVP" },
  { value: "$180M+", label: "Raised by customers" },
  { value: "4.9/5", label: "Founder satisfaction" },
];

/* ──────────────── Page Component ──────────────── */

export default function StartupsPage() {
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
              For startups
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
              Ship your MVP fast
            </h1>
            <p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: V("color-body"),
              }}
            >
              Stop wrestling with boilerplate and ship your product in days,
              not months. Kreature gives startups the speed of no-code with the
              power of developer tools -- so you can focus on finding
              product-market fit instead of configuring webpack.
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
                Launch your startup <Arrow />
              </a>
              <a
                href="#stories"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                See startup stories
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
              Startup toolset
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Built for speed, not complexity
            </h2>
            <p
              className="mt-4 max-w-xl"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              Everything a startup needs to go from zero to one -- without the
              overhead, without the boilerplate, and without an engineering team
              of ten.
            </p>
            <div className="mt-14 grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  className="p-8 rounded-xl border transition-colors"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <div className="text-3xl mb-4">{feat.icon}</div>
                  <h4
                    className="mb-2"
                    style={{
                      fontSize: 20,
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

        {/* ── TIMELINE ── */}
        <section
          id="timeline"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-4xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3 text-center"
              style={{ color: V("color-accent-orange") }}
            >
              Startup journey
            </p>
            <h2
              className="mb-4 text-center"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              From idea to launch
            </h2>
            <p
              className="text-center max-w-xl mx-auto mb-16"
              style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
            >
              Your first five days on Kreature. This is the path from napkin
              sketch to live product -- no engineering required.
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
                style={{ backgroundColor: V("color-hairline") }}
              />
              <div className="space-y-10">
                {TIMELINE_STEPS.map((step, i) => (
                  <div key={step.phase} className="flex gap-6 relative">
                    {/* Timeline dot */}
                    <div
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 z-10"
                      style={{
                        borderColor: "transparent",
                        backgroundColor: V(step.accent),
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-0.5">
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-1"
                        style={{ color: V(step.accent) }}
                      >
                        {step.phase}
                      </p>
                      <h4
                        className="mb-2"
                        style={{
                          fontSize: 22,
                          fontWeight: 600,
                          color: V("color-ink"),
                        }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="max-w-lg"
                        style={{ color: V("color-body-mid"), lineHeight: 1.7 }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section
          id="pricing"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-purple") }}
            >
              Startup pricing
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
              Pricing that grows with you
            </h2>
            <p
              className="max-w-xl mb-14"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              Start free, scale when you are ready. Every plan includes hosting,
              SSL, and the full visual builder. No hidden fees, no surprise
              invoices.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {STARTUP_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="p-8 rounded-xl border relative overflow-hidden transition-colors"
                  style={{
                    borderColor:
                      plan.name === "Growth"
                        ? V("color-accent-blue")
                        : V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                    boxShadow:
                      plan.name === "Growth"
                        ? `0 0 0 1px ${V("color-accent-blue")}, 0 24px 48px -12px rgba(0,0,0,0.15)`
                        : "none",
                  }}
                >
                  {plan.name === "Growth" && (
                    <div
                      className="absolute top-0 left-0 right-0 text-center text-xs font-semibold py-1.5"
                      style={{
                        backgroundColor: V("color-accent-blue"),
                        color: "#fff",
                      }}
                    >
                      Most popular
                    </div>
                  )}
                  <div className={plan.name === "Growth" ? "mt-6" : ""}>
                    <p
                      className="text-xs uppercase tracking-widest font-semibold mb-2"
                      style={{ color: V(plan.accent) }}
                    >
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: V("color-ink") }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: V("color-mute") }}
                      >
                        {plan.period}
                      </span>
                    </div>
                    <p
                      className="text-sm mb-6"
                      style={{ color: V("color-body-mid") }}
                    >
                      {plan.description}
                    </p>
                    <a
                      href={plan.name === "Starter" ? "/signup" : "/contact-sales"}
                      className="block text-center text-sm font-medium px-5 py-2.5 rounded mb-8 transition-colors"
                      style={{
                        backgroundColor:
                          plan.name === "Growth"
                            ? V("color-accent-blue")
                            : V("color-canvas-soft"),
                        color:
                          plan.name === "Growth" ? "#fff" : V("color-ink"),
                        border:
                          plan.name !== "Growth"
                            ? `1px solid ${V("color-hairline")}`
                            : "none",
                      }}
                    >
                      {plan.name === "Starter" ? "Start free" : "Get started"}
                    </a>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="text-sm flex items-start gap-2"
                          style={{ color: V("color-body") }}
                        >
                          <span style={{ color: V(plan.accent) }}>
                            &check;
                          </span>{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUCCESS STORIES ── */}
        <section
          id="stories"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-green") }}
            >
              Success stories
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
              Startups that shipped on Kreature
            </h2>
            <p
              className="max-w-xl mb-14"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              Real founders, real products, real traction. These startups went
              from idea to live product on Kreature -- some in under a week.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {SUCCESS_STORIES.map((story) => (
                <div
                  key={story.company}
                  className="p-8 rounded-xl border transition-colors"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <div
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                    style={{
                      backgroundColor: V("color-accent-green"),
                      color: "#fff",
                    }}
                  >
                    {story.stat}
                  </div>
                  <p
                    className="mb-4 text-sm leading-relaxed"
                    style={{ color: V("color-body") }}
                  >
                    {story.description}
                  </p>
                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: V("color-hairline") }}
                  >
                    <p
                      className="text-sm font-semibold"
                      style={{ color: V("color-ink") }}
                    >
                      {story.company}
                    </p>
                    <p className="text-xs" style={{ color: V("color-mute") }}>
                      {story.founder}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          id="cta"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
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
              Launch your startup
            </h2>
            <p
              className="mb-10 max-w-xl mx-auto"
              style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
            >
              Join 15,000+ startups who build, launch, and scale on Kreature.
              Start building your MVP for free -- no credit card required, no
              time limit on the Starter plan.
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
                Start building free <Arrow />
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
