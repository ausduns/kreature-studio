"use client";

// ─── Design token accessor ───
const V = (n: string) => `var(--${n})`;

// ─── Figma-to-Kreature feature cards ───
const FIGMA_FEATURES = [
  {
    icon: "⇄",
    title: "One-click sync",
    description:
      "Connect your Figma account and import entire projects with a single click. Frames become pages, components become reusable blocks, and auto-layout becomes responsive CSS — instantly.",
    accent: "color-accent-blue",
  },
  {
    icon: "⊞",
    title: "Auto-layout support",
    description:
      "Figma auto-layout translates directly to CSS Flexbox and Grid. Spacing, padding, gaps, alignment, and wrapping all carry over with pixel precision. No hand-coding layout from screenshots.",
    accent: "color-accent-purple",
  },
  {
    icon: "⬡",
    title: "Component mapping",
    description:
      "Figma components map to Kreature symbols or reusable blocks. Change a component in Figma and push the update — every instance across your site updates in one click.",
    accent: "color-accent-green",
  },
  {
    icon: "◆",
    title: "Style token sync",
    description:
      "Colors, typography, spacing, shadows, and border radii sync as design tokens. Figma becomes your single source of truth — update a brand color once and cascade everywhere.",
    accent: "color-accent-orange",
  },
  {
    icon: "▦",
    title: "Design system import",
    description:
      "Import your entire Figma design system — including variables, components, and styles — and Kreature generates a matching component library with full documentation.",
    accent: "color-accent-pink",
  },
  {
    icon: "↻",
    title: "Real-time updates",
    description:
      "Push changes from Figma and see them reflected on your staging site in seconds. Iterate on design without the back-and-forth of screenshots, Slack messages, and manual rebuilds.",
    accent: "color-accent-blue",
  },
];

// ─── How it works steps ───
const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Design in Figma",
    description:
      "Use Figma the way you always do. Design your pages, components, and design system with auto-layout, variables, and styles. No special plugins or naming conventions required — just your normal workflow.",
    accent: "color-accent-purple",
  },
  {
    step: "02",
    title: "Sync to Kreature",
    description:
      "Connect your Figma account, select the frames you want to import, and hit sync. Frames become responsive pages, components become reusable blocks, and styles become design tokens — all in under a minute.",
    accent: "color-accent-blue",
  },
  {
    step: "03",
    title: "Polish and publish",
    description:
      "Fine-tune interactions, add CMS content, connect forms, and set SEO metadata — all in Kreature's visual editor. When you're ready, publish to our global edge network with one click.",
    accent: "color-accent-green",
  },
];

// ─── Benefits ───
const BENEFITS = [
  {
    title: "Designer-developer handoff",
    description:
      "Eliminate the handoff dance. Designers work in Figma, the design syncs to Kreature, and developers pick up where the design leaves off — with accurate, pixel-perfect output that matches the source file.",
    icon: "◈",
    accent: "color-accent-blue",
  },
  {
    title: "Faster iteration",
    description:
      "Push a design update from Figma and see it live on staging in seconds. No more waiting for a developer to translate screenshots into code — design changes go straight to the site.",
    icon: "↗",
    accent: "color-accent-green",
  },
  {
    title: "Brand consistency",
    description:
      "Figma variables and styles sync as the single source of truth for your brand. Colors, fonts, spacing, and component variants stay in sync across every page — no drift, no outdated style guides.",
    icon: "◎",
    accent: "color-accent-purple",
  },
];

// ─── Getting started steps ───
const GETTING_STARTED_STEPS = [
  {
    step: "1",
    title: "Connect your Figma account",
    description:
      "Authenticate with Figma OAuth. Kreature reads your project structure — files, pages, and frames — and presents them in a familiar tree view. No export, no plugins, no manual file uploads.",
  },
  {
    step: "2",
    title: "Select and configure",
    description:
      "Choose which frames to import. Map Figma pages to Kreature pages, set responsive breakpoints, and configure how components translate. Kreature intelligently maps auto-layout to responsive CSS out of the box.",
  },
  {
    step: "3",
    title: "Publish and iterate",
    description:
      "Hit publish. Your site is live on our global edge network. Push design updates from Figma anytime — Kreature handles the diff, applies changes, and keeps your content safe across syncs.",
  },
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
              Design in Figma, build in Kreature. The first platform that turns
              your Figma designs into live, production-ready sites — without
              writing code.
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

export default function FigmaToKreatureFeaturePage() {
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
            style={{ backgroundColor: V("color-accent-purple") }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full blur-[120px] opacity-10"
            style={{ backgroundColor: V("color-accent-blue") }}
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
              color: V("color-accent-purple"),
              backgroundColor: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)`,
              border: `1px solid ${V("color-accent-purple")}20`,
            }}
          >
            Figma to Kreature
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
            Design in Figma, build in Kreature
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
            Import your Figma designs directly into Kreature and publish
            production-ready sites in minutes. Auto-layout becomes responsive
            CSS, components become reusable blocks, and design tokens stay
            synced — no hand-coding, no handoff friction.
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
              Connect Figma
              <Arrow />
            </a>
            <a
              href="/feature/figma-to-webflow#how-it-works"
              className="text-base font-medium px-8 py-4 rounded transition-colors border"
              style={{
                color: V("color-ink"),
                borderColor: V("color-hairline"),
                borderRadius: "4px",
              }}
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ─── Feature Grid ─── */}
      <section
        id="features"
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
              style={{ color: V("color-accent-purple") }}
            >
              Features
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              From Figma to Kreature in seconds
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
              Every feature below is designed to eliminate the gap between
              design and production. No export plugins, no manual translation,
              no compromises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FIGMA_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 border"
                style={{
                  backgroundColor: V("color-canvas"),
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

      {/* ─── How It Works ─── */}
      <section
        id="how-it-works"
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
              style={{ color: V("color-accent-blue") }}
            >
              How it works
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Design in Figma, build in Kreature
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
              Three steps from your design file to a live, production-ready
              site. No code required — and developers get clean, semantic
              output they can extend.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-xl p-8 border relative group"
                style={{
                  backgroundColor: V("color-canvas-soft"),
                  borderColor: V("color-hairline"),
                  boxShadow: `0 1px 2px ${V("color-hairline")}`,
                }}
              >
                {/* Step number */}
                <div
                  className="text-6xl font-semibold tracking-tighter mb-6 opacity-15"
                  style={{ color: V(item.accent) }}
                >
                  {item.step}
                </div>
                <div
                  className="w-10 h-1 rounded-full mb-6"
                  style={{ backgroundColor: V(item.accent) }}
                />
                <h4
                  className="font-semibold mb-3"
                  style={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: V("color-body-mid") }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual flow arrow between steps on desktop */}
          <div className="hidden lg:flex items-center justify-center mt-10">
            <div
              className="flex items-center gap-3 text-sm font-medium"
              style={{ color: V("color-mute") }}
            >
              <span className="flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas-soft") }}>
                <span style={{ color: V("color-accent-purple") }}>Figma</span>
              </span>
              <span style={{ color: V("color-hairline") }}>&#8594;</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas-soft") }}>
                <span style={{ color: V("color-accent-blue") }}>Kreature Sync</span>
              </span>
              <span style={{ color: V("color-hairline") }}>&#8594;</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas-soft") }}>
                <span style={{ color: V("color-accent-green") }}>Live Site</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
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
              style={{ color: V("color-accent-green") }}
            >
              Benefits
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Better together. From design to production.
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
              The Figma-to-Kreature workflow isn&apos;t just faster — it
              changes how teams collaborate on web projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl p-8 border text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: V("color-canvas"),
                  borderColor: V("color-hairline"),
                  boxShadow: `0 1px 2px ${V("color-hairline")}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${V(benefit.accent)} 12%, transparent)`,
                    color: V(benefit.accent),
                  }}
                >
                  {benefit.icon}
                </div>
                <h4
                  className="font-semibold mb-3"
                  style={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {benefit.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: V("color-body-mid") }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Getting Started ─── */}
      <section
        style={{
          backgroundColor: V("color-canvas"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "900px" }}
        >
          <div className="text-center mb-16">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-orange") }}
            >
              Getting started
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Up and running in under 5 minutes
            </h2>
            <p
              className="text-base mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "540px",
                fontSize: "16px",
                lineHeight: "25.6px",
              }}
            >
              No plugins to install. No exports to manage. Just connect your
              Figma account and start building.
            </p>
          </div>

          <div className="space-y-6">
            {GETTING_STARTED_STEPS.map((item) => (
              <div
                key={item.title}
                className="flex gap-6 p-6 rounded-xl border"
                style={{
                  backgroundColor: V("color-canvas-soft"),
                  borderColor: V("color-hairline"),
                }}
              >
                {/* Step number */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold shrink-0"
                  style={{
                    backgroundColor: V("color-accent-blue"),
                    color: "#fff",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h4
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: V("color-ink"),
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div
            className="mt-12 rounded-2xl border relative overflow-hidden flex items-center justify-center"
            style={{
              backgroundColor: V("color-canvas-soft"),
              borderColor: V("color-hairline"),
              minHeight: "400px",
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full blur-[80px] opacity-10"
                style={{ backgroundColor: V("color-accent-blue") }}
              />
            </div>
            <div className="text-center relative z-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 cursor-pointer transition-all hover:scale-105"
                style={{
                  borderColor: V("color-accent-blue"),
                  backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} 10%, transparent)`,
                }}
              >
                <svg
                  width="28"
                  height="32"
                  viewBox="0 0 28 32"
                  fill="none"
                >
                  <path
                    d="M26 16L1 31.5V0.5L26 16Z"
                    fill={V("color-accent-blue")}
                  />
                </svg>
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: V("color-ink") }}
              >
                Watch how it works
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: V("color-mute") }}
              >
                2:34 &middot; Figma to live site walkthrough
              </div>
            </div>
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
            style={{ backgroundColor: V("color-accent-purple") }}
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
            Start building from Figma today
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
            Connect your Figma account and turn your designs into live,
            production-ready sites — without writing a single line of code.
            Your first site is free.
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
              Connect Figma
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
            No credit card required. Free plan includes unlimited Figma syncs
            for one project.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
