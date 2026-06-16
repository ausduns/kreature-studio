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

const VALUE_PROPS = [
  {
    icon: "⚙",
    title: "Client Management",
    body: "Manage all client projects from a single dashboard. Assign roles, set permissions, and keep every stakeholder aligned.",
  },
  {
    icon: "🎨",
    title: "White-Label Options",
    body: "Rebrand Kreature as your own. Custom domain, branded client portal, and white-labeled exports with your agency identity.",
  },
  {
    icon: "⭐",
    title: "Partner Program",
    body: "Earn revenue share on client subscriptions. Get priority support, early access to features, and co-marketing opportunities.",
  },
  {
    icon: "📈",
    title: "Revenue Growth",
    body: "Scale output without scaling headcount. Ship 3x more client projects with the same team using AI-assisted workflows.",
  },
];

const WHY_KREATURE = [
  {
    title: "Speed Without Sacrifice",
    body: "AI-accelerated builds that don't cut corners. Your clients get production-grade code, not prototypes.",
  },
  {
    title: "Agency-Grade Tooling",
    body: "Built for teams that manage dozens of projects. Workspaces, permissions, version history, and audit logs included.",
  },
  {
    title: "Recurring Revenue",
    body: "Every client site you build becomes a recurring hosting and maintenance stream. Kreature handles the infrastructure.",
  },
];

const PARTNER_TIERS = [
  {
    tier: "Certified",
    accent: "color-accent-green",
    revenue: "10%",
    requirements: "1+ active client site",
    features: [
      "Partner badge & directory listing",
      "Standard support (24h SLA)",
      "Partner Slack community",
      "Co-branded case studies",
      "Monthly partner newsletter",
    ],
  },
  {
    tier: "Premier",
    accent: "color-accent-blue",
    revenue: "20%",
    requirements: "10+ active client sites",
    features: [
      "Everything in Certified",
      "Priority support (4h SLA)",
      "Dedicated partner manager",
      "White-label client dashboard",
      "Early access to new features",
      "Quarterly business review",
    ],
  },
  {
    tier: "Global",
    accent: "color-accent-purple",
    revenue: "25%",
    requirements: "50+ active client sites",
    features: [
      "Everything in Premier",
      "VIP support (1h SLA)",
      "Custom feature development",
      "Co-marketing campaigns & budget",
      "API access & custom integrations",
      "Revenue share on referrals",
      "Annual partner summit invite",
    ],
  },
];

const STATS = [
  { value: "1,200+", label: "Agency partners" },
  { value: "45,000+", label: "Client sites built" },
  { value: "$320M+", label: "Partner revenue" },
  { value: "4.8/5", label: "Partner satisfaction" },
];

/* ──────────────── Page Component ──────────────── */

export default function AgenciesPage() {
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
              For agencies
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
              Scale your agency with Kreature
            </h1>
            <p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: V("color-body"),
              }}
            >
              Ship client projects faster, earn recurring revenue, and
              differentiate your agency with white-labeled AI-assisted
              development. Join 1,200+ agencies already scaling with Kreature.
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
                Apply to partner program <Arrow />
              </a>
              <a
                href="#why"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                See how it works
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

        {/* ── VALUE PROPS ── */}
        <section
          id="value-props"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-blue") }}
            >
              Agency benefits
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Everything your agency needs
            </h2>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUE_PROPS.map((prop) => (
                <div
                  key={prop.title}
                  className="p-6 rounded-xl border transition-colors"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <div className="text-2xl mb-4">{prop.icon}</div>
                  <h4
                    className="mb-2"
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: V("color-ink"),
                    }}
                  >
                    {prop.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {prop.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY KREATURE ── */}
        <section
          id="why"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-purple") }}
            >
              Why Kreature
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Built for agencies, not freelancers
            </h2>
            <div className="mt-14 grid sm:grid-cols-3 gap-8">
              {WHY_KREATURE.map((item) => (
                <div key={item.title}>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: V("color-accent-blue") }}
                  >
                    <span className="text-white text-lg font-bold">
                      {WHY_KREATURE.indexOf(item) + 1}
                    </span>
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      color: V("color-ink"),
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: V("color-body-mid"), lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNER TIERS ── */}
        <section
          id="tiers"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-orange") }}
            >
              Partner program
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
              Choose your tier
            </h2>
            <p
              className="max-w-xl"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              Every tier includes access to the full Kreature platform. Higher
              tiers unlock more revenue share, dedicated support, and co-marketing.
            </p>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {PARTNER_TIERS.map((tier) => (
                <div
                  key={tier.tier}
                  className="p-8 rounded-xl border relative overflow-hidden transition-colors"
                  style={{
                    borderColor:
                      tier.tier === "Premier"
                        ? V("color-accent-blue")
                        : V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                    boxShadow:
                      tier.tier === "Premier"
                        ? `0 0 0 1px ${V("color-accent-blue")}, 0 24px 48px -12px rgba(0,0,0,0.15)`
                        : "none",
                  }}
                >
                  {tier.tier === "Premier" && (
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
                  <div className={tier.tier === "Premier" ? "mt-6" : ""}>
                    <p
                      className="text-xs uppercase tracking-widest font-semibold mb-2"
                      style={{ color: V(tier.accent) }}
                    >
                      {tier.tier}
                    </p>
                    <div
                      className="text-4xl font-bold mb-1"
                      style={{ color: V("color-ink") }}
                    >
                      {tier.revenue}
                    </div>
                    <p
                      className="text-sm mb-6"
                      style={{ color: V("color-mute") }}
                    >
                      revenue share
                    </p>
                    <p
                      className="text-xs uppercase tracking-wide mb-4"
                      style={{ color: V("color-body-mid") }}
                    >
                      Requirements
                    </p>
                    <p
                      className="text-sm mb-6 pb-6 border-b"
                      style={{
                        color: V("color-body"),
                        borderColor: V("color-hairline"),
                      }}
                    >
                      {tier.requirements}
                    </p>
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
              Become a partner
            </h2>
            <p
              className="mb-10 max-w-xl mx-auto"
              style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
            >
              Join 1,200+ agencies scaling their business with Kreature. Apply
              to the partner program and start earning revenue share on day one.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact-sales"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Apply now <Arrow />
              </a>
              <a
                href="/certified-partners"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                Explore partners
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
            {/* Brand column -- spans 1 of 7 */}
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

            {/* Link columns -- span remaining 6 columns */}
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
