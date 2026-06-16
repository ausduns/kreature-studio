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
    heading: "Solutions",
    links: [
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Freelancers", href: "/solutions/freelancers" },
      { label: "Developers", href: "/solutions/developers" },
      { label: "Creative Teams", href: "/solutions/brand-creative-teams" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Designer", href: "/platform" },
      { label: "CMS", href: "/platform#cms" },
      { label: "Hosting", href: "/platform#hosting" },
      { label: "Integrations", href: "/integrations" },
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
    heading: "Social",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Community", href: "/community" },
    ],
  },
];

/* ──────────────── Section Data ──────────────── */

const FEATURES = [
  {
    icon: "⚡",
    title: "Design-to-Code Speed",
    body: "Convert your Figma designs into production-ready code in minutes. AI handles layout, responsive breakpoints, and semantic HTML while you focus on design.",
  },
  {
    icon: "💻",
    title: "Client CMS",
    body: "Give clients a simple, branded dashboard to manage content without touching the code. Role-based access, revision history, and scheduled publishing included.",
  },
  {
    icon: "🧩",
    title: "Template Marketplace",
    body: "Start from 500+ professionally-designed templates or build and sell your own. Each template is fully customizable and responsive out of the box.",
  },
  {
    icon: "📈",
    title: "Client Management",
    body: "Manage all your clients from one workspace. Track projects, send invoices, manage hosting, and monitor site analytics without switching tools.",
  },
  {
    icon: "🔗",
    title: "Built-in SEO & Analytics",
    body: "Every site ships with SEO best practices, sitemaps, schema markup, and analytics. No plugins needed. Your clients' sites rank from day one.",
  },
  {
    icon: "🔒",
    title: "Hosting & Security",
    body: "Enterprise-grade hosting with automatic SSL, global CDN, DDoS protection, and 99.99% uptime. One click to deploy. Zero DevOps required.",
  },
];

const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for trying Kreature and building your first project.",
    accent: "color-accent-green",
    features: [
      "1 project",
      "Visual designer",
      "Basic templates",
      "Community support",
      "Kreature subdomain",
      "1 GB bandwidth",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "Everything a solo freelancer needs to run their business.",
    accent: "color-accent-blue",
    features: [
      "Unlimited projects",
      "Full template library",
      "Client CMS",
      "Custom domains",
      "Export code",
      "Priority support",
      "100 GB bandwidth",
      "Remove Kreature branding",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "$79",
    period: "/month",
    desc: "For freelancers managing multiple clients and growing their practice.",
    accent: "color-accent-purple",
    features: [
      "Everything in Pro",
      "White-label client dashboard",
      "Team accounts (up to 3)",
      "API access",
      "Advanced analytics",
      "Dedicated support",
      "500 GB bandwidth",
      "Sell your own templates",
    ],
  },
];

const SUCCESS_STORIES = [
  {
    name: "Priya M.",
    role: "UX Designer & Freelancer",
    quote:
      "Kreature cut my project turnaround from 4 weeks to 4 days. I went from booking 3 clients a quarter to 12. It's been genuinely life-changing for my freelance practice.",
    stat: "4x more clients",
  },
  {
    name: "Marcus J.",
    role: "Independent Web Developer",
    quote:
      "The Client CMS alone is worth it. My clients can update their own content without breaking anything. Support tickets dropped 80%. I actually sleep now.",
    stat: "80% fewer tickets",
  },
  {
    name: "Elena R.",
    role: "Brand Designer & Freelancer",
    quote:
      "I used to hand off Figma files and hope developers got it right. Now I deliver live sites. My average project value tripled because I own the full stack.",
    stat: "3x project value",
  },
];

/* ──────────────── Page Component ──────────────── */

export default function FreelancersPage() {
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
              style={{ color: V("color-accent-green") }}
            >
              For freelancers
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
              Your freelance superpower
            </h1>
            <p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: V("color-body"),
              }}
            >
              Turn designs into live websites in minutes, give clients a CMS
              they actually understand, and run your entire freelance business
              from one platform. No coding required to get started.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-green"),
                  color: "#fff",
                }}
              >
                Start for free <Arrow />
              </a>
              <a
                href="#pricing"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                See pricing
              </a>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section
          id="features"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{
            backgroundColor: V("color-canvas-soft"),
            borderTop: `1px solid ${V("color-hairline")}`,
          }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-green") }}
            >
              Features
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Everything you need to go solo
            </h2>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-xl border transition-colors"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <div className="text-2xl mb-4">{f.icon}</div>
                  <h4
                    className="mb-2"
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: V("color-ink"),
                    }}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
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
              style={{ color: V("color-accent-blue") }}
            >
              Pricing
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
              Start free, scale affordably
            </h2>
            <p
              className="max-w-xl"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              No per-client pricing. No surprise fees. Just straightforward plans
              that grow with your freelance business.
            </p>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="p-8 rounded-xl border relative overflow-hidden"
                  style={{
                    borderColor: tier.featured
                      ? V("color-accent-blue")
                      : V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                    boxShadow: tier.featured
                      ? `0 0 0 1px ${V("color-accent-blue")}, 0 24px 48px -12px rgba(0,0,0,0.15)`
                      : "none",
                  }}
                >
                  {tier.featured && (
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
                  <div className={tier.featured ? "mt-6" : ""}>
                    <p
                      className="text-xs uppercase tracking-widest font-semibold mb-2"
                      style={{ color: V(tier.accent) }}
                    >
                      {tier.name}
                    </p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: V("color-ink") }}
                      >
                        {tier.price}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: V("color-mute") }}
                      >
                        {tier.period}
                      </span>
                    </div>
                    <p
                      className="text-sm mb-6"
                      style={{ color: V("color-body-mid") }}
                    >
                      {tier.desc}
                    </p>
                    <a
                      href="#cta"
                      className="block text-center text-sm font-medium px-5 py-2.5 rounded mb-8 transition-colors"
                      style={{
                        backgroundColor: tier.featured
                          ? V("color-accent-blue")
                          : V("color-canvas-soft"),
                        color: tier.featured ? "#fff" : V("color-ink"),
                        border: tier.featured
                          ? "none"
                          : `1px solid ${V("color-hairline")}`,
                      }}
                    >
                      {tier.name === "Free" ? "Get started" : "Start free trial"}
                    </a>
                    <ul className="space-y-3">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="text-sm flex items-start gap-2"
                          style={{ color: V("color-body") }}
                        >
                          <span style={{ color: V(tier.accent) }}>
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
              style={{ color: V("color-accent-purple") }}
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
              Freelancers shipping faster with Kreature
            </h2>
            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {SUCCESS_STORIES.map((story) => (
                <div
                  key={story.name}
                  className="p-8 rounded-xl border"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <blockquote
                    className="mb-6 leading-relaxed"
                    style={{ color: V("color-body") }}
                  >
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <div
                    className="pt-6 border-t"
                    style={{ borderColor: V("color-hairline") }}
                  >
                    <p
                      className="font-semibold text-sm"
                      style={{ color: V("color-ink") }}
                    >
                      {story.name}
                    </p>
                    <p
                      className="text-xs mb-2"
                      style={{ color: V("color-mute") }}
                    >
                      {story.role}
                    </p>
                    <span
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: V("color-canvas-soft"),
                        color: V("color-accent-green"),
                      }}
                    >
                      {story.stat}
                    </span>
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
              Start building for free
            </h2>
            <p
              className="mb-10 max-w-xl mx-auto"
              style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
            >
              No credit card required. Build your first project, publish it, and
              see why thousands of freelancers choose Kreature to power their
              business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/signup"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-green"),
                  color: "#fff",
                }}
              >
                Start for free <Arrow />
              </a>
              <a
                href="/templates"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                Browse templates
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
