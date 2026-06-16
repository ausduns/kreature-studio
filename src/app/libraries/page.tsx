"use client";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Shared Components ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Data ─── */
const FEATURES = [
  {
    title: "Component libraries",
    desc: "Build and share reusable components across every project. Buttons, heroes, cards, navs — design once, use everywhere.",
    icon: "\u{1F9E9}",
    accent: "color-accent-blue",
    points: [
      "Create once, reuse infinitely",
      "Sync updates across all instances",
      "Team permissions and review workflows",
    ],
  },
  {
    title: "Style guides",
    desc: "Define colors, typography, spacing, and shadows in one place. Every component pulls from the same source of truth.",
    icon: "\u{1F3A8}",
    accent: "color-accent-purple",
    points: [
      "Centralized design tokens",
      "Automatic dark mode variants",
      "Version history for every change",
    ],
  },
  {
    title: "Asset management",
    desc: "Upload images, icons, fonts, and videos to a shared asset library. No more hunting through Slack or Drive.",
    icon: "\u{1F4C1}",
    accent: "color-accent-orange",
    points: [
      "CDN delivery with automatic optimization",
      "Alt text and metadata management",
      "AI-powered asset tagging and search",
    ],
  },
  {
    title: "Version control",
    desc: "Branch, merge, and roll back changes with confidence. Every edit is tracked and reversible.",
    icon: "\u{1F504}",
    accent: "color-accent-green",
    points: [
      "Branching and staging workflows",
      "Visual diff for design changes",
      "One-click rollback for any update",
    ],
  },
  {
    title: "Team collaboration",
    desc: "Work together in real time with comments, approvals, and role-based access. Designers, devs, and marketers in one space.",
    icon: "\u{1F91D}",
    accent: "color-accent-pink",
    points: [
      "Real-time commenting and feedback",
      "Custom roles and permissions",
      "Activity feed and change notifications",
    ],
  },
  {
    title: "Cross-site sharing",
    desc: "Share libraries across multiple sites and projects. Perfect for agencies managing dozens of client properties.",
    icon: "\u{1F310}",
    accent: "color-accent-blue",
    points: [
      "Multi-site library distribution",
      "Per-site overrides and customization",
      "Usage analytics across properties",
    ],
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create your library",
    desc: "Start a new library from scratch or import your existing design system. Define tokens, components, and patterns.",
    accent: "color-accent-blue",
  },
  {
    step: "02",
    title: "Build components",
    desc: "Design components visually or with code. Every change syncs in real time across every site that uses the library.",
    accent: "color-accent-purple",
  },
  {
    step: "03",
    title: "Share with your team",
    desc: "Invite team members, set permissions, and start collaborating. Designers build, devs extend, marketers use.",
    accent: "color-accent-orange",
  },
  {
    step: "04",
    title: "Publish updates",
    desc: "Push changes live with a single click. Version history means you can always roll back if you need to.",
    accent: "color-accent-green",
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
              Shared libraries for teams that build together. Design systems,
              components, and assets in one place.
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
export default function LibrariesPage() {
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
              background: `color-mix(in srgb, ${V("color-accent-purple")} 8%, transparent)`,
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
            Shared Libraries for your team
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
            Build and share component libraries, style guides, and assets across
            your entire organization. Design once, use everywhere.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#features"
              className="font-medium transition-colors inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: V("color-accent-purple"),
                color: "#fff",
              }}
            >
              Explore features <Arrow />
            </a>
            <a
              href="#how-it-works"
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
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
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
          <div className="text-center mb-16">
            <h2
              className="font-heading tracking-tight mb-4"
              style={{
                fontSize: "56px",
                fontWeight: 600,
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Everything your team needs
            </h2>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-body"),
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >
              Libraries bring together the tools your team needs to design and
              build faster, together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-xl p-8 transition-all duration-300"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                  boxShadow: V("shadow-card"),
                }}
              >
                <div className="text-3xl mb-4">{feat.icon}</div>
                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  className="mb-5"
                  style={{
                    fontSize: "16px",
                    lineHeight: "25.6px",
                    color: V("color-body-mid"),
                  }}
                >
                  {feat.desc}
                </p>
                <ul className="space-y-2">
                  {feat.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2"
                      style={{
                        fontSize: "14px",
                        lineHeight: "22.4px",
                        color: V("color-body-mid"),
                      }}
                    >
                      <span
                        style={{
                          color: V(feat.accent),
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        &check;
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1000px" }}
        >
          <div className="text-center mb-16">
            <h2
              className="font-heading tracking-tight mb-4"
              style={{
                fontSize: "56px",
                fontWeight: 600,
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              How libraries work
            </h2>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-body"),
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >
              From first component to team-wide adoption in four simple steps.
            </p>
          </div>

          <div className="space-y-0">
            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={step.step}
                className="flex flex-col sm:flex-row items-start gap-6 py-10"
                style={{
                  borderBottom:
                    i < HOW_IT_WORKS.length - 1
                      ? `1px solid ${V("color-hairline")}`
                      : "none",
                }}
              >
                <div
                  className="shrink-0 flex items-center justify-center rounded-xl"
                  style={{
                    width: "72px",
                    height: "72px",
                    background: `color-mix(in srgb, ${V(step.accent)} 10%, transparent)`,
                    color: V(step.accent),
                    fontSize: "24px",
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3
                    className="font-heading mb-2"
                    style={{
                      fontSize: "32px",
                      fontWeight: 500,
                      lineHeight: "41.6px",
                      color: V("color-ink"),
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "25.6px",
                      color: V("color-body-mid"),
                      maxWidth: "560px",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)`,
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
            Start building together
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
            }}
          >
            Create your first library and give your team the building blocks
            they need to ship faster.
          </p>
          <a
            href="#"
            className="font-medium transition-colors inline-flex items-center"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              padding: "16px 24px",
              borderRadius: "4px",
              background: V("color-accent-purple"),
              color: "#fff",
            }}
          >
            Start building <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
