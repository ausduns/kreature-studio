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
    icon: "🧬",
    title: "Custom Code Components",
    accent: "color-accent-purple",
    body: "Build React components directly in the visual editor or write them in VS Code. Kreature syncs bi-directionally. Use your own packages, state management, and logic.",
  },
  {
    icon: "🔌",
    title: "REST & GraphQL APIs",
    accent: "color-accent-orange",
    body: "Connect to any external API, database, or microservice. Define endpoints, set authentication, and map responses to UI components with a visual data binder.",
  },
  {
    icon: "⚡",
    title: "Webhooks & Automation",
    accent: "color-accent-green",
    body: "Trigger external workflows on any site event. Connect to Zapier, Make, GitHub, or your own servers. Incoming webhooks can rebuild or redeploy your site.",
  },
  {
    icon: "🧠",
    title: "Visual Logic Builder",
    accent: "color-accent-blue",
    body: "Define conditional rendering, computed properties, and user flows without writing boilerplate. Logic compiles to clean, tree-shakeable JavaScript.",
  },
  {
    icon: "☁",
    title: "Cloud Hosting & Edge",
    accent: "color-accent-pink",
    body: "Deploy to a global edge network with a single command. Automatic CI/CD, preview branches, rollbacks, and real-time logs included out of the box.",
  },
];

const HEADLESS_CMS_FEATURES = [
  {
    title: "Content API",
    body: "REST and GraphQL endpoints for every content type you define. Fully typed, auto-documented, and available at your-domain.com/api.",
  },
  {
    title: "Custom Content Models",
    body: "Define your own content types with custom fields, validation rules, and relationships. Use the visual builder or write JSON schema directly.",
  },
  {
    title: "Webhooks",
    body: "Trigger builds, invalidate caches, and sync content to external systems whenever content changes. Granular event filtering per content type.",
  },
  {
    title: "SDKs & Starter Kits",
    body: "First-party SDKs for Next.js, Nuxt, SvelteKit, and Astro. Clone a starter kit and have a working headless site in under five minutes.",
  },
  {
    title: "Preview & Drafts",
    body: "Live preview URLs for draft content. Share preview links with stakeholders before publishing. Branch-based previews for larger changes.",
  },
  {
    title: "Media CDN",
    body: "Automatic image optimization, format conversion (WebP/AVIF), and responsive srcset generation. Serve assets from the edge with zero configuration.",
  },
];

const DEV_TOOLS = [
  {
    name: "Kreature CLI",
    desc: "Scaffold projects, sync components, and manage deployments from your terminal.",
  },
  {
    name: "VS Code Extension",
    desc: "Edit code with full IntelliSense while previewing the visual canvas side-by-side.",
  },
  {
    name: "Git Integration",
    desc: "Every project is a git repo. Push, pull, branch, and merge. We handle the CI/CD.",
  },
  {
    name: "Component Registry",
    desc: "Publish and install components across projects. Private registry for your org.",
  },
  {
    name: "Environment Variables",
    desc: "Manage secrets per environment. Inject at build time or runtime. Encrypted at rest.",
  },
  {
    name: "Testing Framework",
    desc: "Built-in visual regression, accessibility, and performance testing. Run in CI or locally.",
  },
];

/* ──────────────── Page Component ──────────────── */

export default function DevelopersPage() {
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
              style={{ color: V("color-accent-orange") }}
            >
              For developers
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
              Build beyond the visual canvas
            </h1>
            <p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: V("color-body"),
              }}
            >
              Kreature gives you a visual editor your team can use, and a
              code-first development environment you can love. Custom code, APIs,
              headless CMS, and edge hosting -- all in one platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-orange"),
                  color: "#fff",
                }}
              >
                Start building <Arrow />
              </a>
              <a
                href="#headless"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                Explore the CMS
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
              style={{ color: V("color-accent-orange") }}
            >
              Developer features
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Code meets canvas
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
                  <div
                    className="inline-block text-xs font-semibold uppercase tracking-wider mb-3 px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: V("color-canvas-soft"),
                      color: V(f.accent),
                    }}
                  >
                    {f.title === "Custom Code Components" && "Core"}
                    {f.title === "REST & GraphQL APIs" && "Integration"}
                    {f.title === "Webhooks & Automation" && "Automation"}
                    {f.title === "Visual Logic Builder" && "Logic"}
                    {f.title === "Cloud Hosting & Edge" && "Infrastructure"}
                  </div>
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

        {/* ── HEADLESS CMS ── */}
        <section
          id="headless"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p
                  className="text-sm uppercase tracking-widest mb-3"
                  style={{ color: V("color-accent-blue") }}
                >
                  Headless CMS
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
                  Content infrastructure for developers
                </h2>
                <p
                  className="leading-relaxed mb-8"
                  style={{ color: V("color-body"), lineHeight: 1.7 }}
                >
                  Kreature&apos;s headless CMS is built API-first. Define content
                  models, query via REST or GraphQL, and render in any frontend
                  framework. The visual editor is just one of many consumers.
                </p>
                <div
                  className="p-6 rounded-lg border"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas-soft"),
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-wider font-semibold mb-3"
                    style={{ color: V("color-mute") }}
                  >
                    Get started in seconds
                  </p>
                  <pre
                    className="text-sm p-4 rounded overflow-x-auto"
                    style={{
                      backgroundColor: V("color-canvas"),
                      color: V("color-ink"),
                      border: `1px solid ${V("color-hairline")}`,
                      lineHeight: 1.6,
                    }}
                  >
{`npx create-kreature-app my-site
cd my-site
npm run dev`}
                  </pre>
                </div>
              </div>
              <div className="grid gap-4">
                {HEADLESS_CMS_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="p-5 rounded-lg border"
                    style={{
                      borderColor: V("color-hairline"),
                      backgroundColor: V("color-canvas-soft"),
                    }}
                  >
                    <h4
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: V("color-ink") }}
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: V("color-body-mid") }}
                    >
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DEV TOOLS ── */}
        <section
          id="tools"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-purple") }}
            >
              Developer tools
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
              Your workflow, supercharged
            </h2>
            <p
              className="max-w-xl mb-14"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              Kreature integrates with the tools you already use so you can build
              without changing how you work.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEV_TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="p-6 rounded-xl border text-center"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <h4
                    className="text-base font-semibold mb-2"
                    style={{ color: V("color-ink") }}
                  >
                    {tool.name}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {tool.desc}
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
              Start building
            </h2>
            <p
              className="mb-10 max-w-xl mx-auto"
              style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
            >
              Get the power of a visual builder with the flexibility of a
              code-first platform. Build your first project free -- no credit
              card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/signup"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-orange"),
                  color: "#fff",
                }}
              >
                Start building <Arrow />
              </a>
              <a
                href="/platform"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                Read the docs
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
