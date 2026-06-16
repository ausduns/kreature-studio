"use client";

// ─── Design token accessor ───
const V = (n: string) => `var(--${n})`;

// ─── SEO feature cards ───
const SEO_FEATURES = [
  {
    icon: "◎",
    title: "Auto-generated sitemaps",
    description:
      "Every site ships with a dynamically generated XML sitemap that updates automatically as you add pages, products, or posts. Search engines always see your freshest structure without you lifting a finger.",
    accent: "color-accent-blue",
  },
  {
    icon: "⌃",
    title: "Full meta tag control",
    description:
      "Set title tags, meta descriptions, and social previews for every page — globally via templates or per-page overrides. No plugin required. Preview how your pages look in SERPs before publishing.",
    accent: "color-accent-purple",
  },
  {
    icon: "▣",
    title: "Schema markup",
    description:
      "Structured data out of the box — Article, Product, FAQ, BreadcrumbList, Organization, LocalBusiness, and more. Rich results eligibility without hand-writing JSON-LD or installing a plugin.",
    accent: "color-accent-green",
  },
  {
    icon: "◉",
    title: "Alt text management",
    description:
      "Every image upload prompts for alt text. The media library flags images missing descriptions. Bulk-editing tools let you audit and fix alt text across hundreds of assets in minutes.",
    accent: "color-accent-orange",
  },
  {
    icon: "↗",
    title: "301 redirects",
    description:
      "Change a URL slug and Kreature automatically creates the redirect. Import redirect rules in bulk from a CSV. Wildcard and regex pattern matching supported for migrations and restructures.",
    accent: "color-accent-pink",
  },
  {
    icon: "◎",
    title: "Canonical URLs",
    description:
      "Set canonicals per page, with sensible auto-generation for paginated and filtered views. Prevents duplicate content penalties without manual configuration across every variant URL.",
    accent: "color-accent-blue",
  },
  {
    icon: "⎔",
    title: "Robots.txt",
    description:
      "Auto-generated and editable robots.txt. Choose which paths to allow or disallow per environment — keep staging hidden from crawlers while production stays fully indexed.",
    accent: "color-accent-purple",
  },
  {
    icon: "◇",
    title: "Open Graph & Twitter Cards",
    description:
      "Auto-generated OG images from your page hero, or upload custom social share images. Title, description, and image tags for Facebook, Twitter, LinkedIn, and Slack unfurls — all set per page.",
    accent: "color-accent-green",
  },
];

// ─── Core Web Vitals data ───
const WEB_VITALS = [
  {
    metric: "LCP",
    label: "Largest Contentful Paint",
    baseline: "2.5s",
    kreature: "1.2s",
    impact:
      "Auto-optimized image loading, critical CSS inlining, and edge caching cut LCP below Google's threshold.",
  },
  {
    metric: "INP",
    label: "Interaction to Next Paint",
    baseline: "200ms",
    kreature: "72ms",
    impact:
      "Minimal JavaScript shipped per page. No render-blocking scripts. Hydration is partial — only interactive islands load JS.",
  },
  {
    metric: "CLS",
    label: "Cumulative Layout Shift",
    baseline: "0.1",
    kreature: "0.02",
    impact:
      "Explicit width/height on every image, system font stack with zero flash, and reserved space for dynamic content eliminate layout jumps.",
  },
  {
    metric: "TTFB",
    label: "Time to First Byte",
    baseline: "800ms",
    kreature: "180ms",
    impact:
      "Global edge network with static generation. HTML is pre-built at deploy time — no server render wait on every request.",
  },
];

// ─── AEO features ───
const AEO_FEATURES = [
  {
    title: "Structured content blocks",
    description:
      "FAQ, How-to, and Q&A blocks that LLMs can parse directly. Your content surfaces in AI-generated answers because it's already in the format they expect.",
  },
  {
    title: "Entity optimization",
    description:
      "Define entities and relationships inline. When an AI model asks 'who is this about' and 'what do they offer,' your pages answer unambiguously.",
  },
  {
    title: "Citation-ready markup",
    description:
      "Claim markers, date stamps, and authorship signals embedded in every piece of content. AI models trained to cite sources prefer pages that make attribution clear.",
  },
  {
    title: "LLMs.txt generation",
    description:
      "Auto-generated llms.txt file that tells AI crawlers which pages to read and how to interpret your site structure — like a sitemap purpose-built for language models.",
  },
];

// ─── Comparison data ───
const COMPARISON_ROWS = [
  { feature: "XML Sitemaps", kreature: "Built-in", wordpress: "Plugin required" },
  { feature: "Meta Tags", kreature: "Per-page control", wordpress: "Yoast UI" },
  { feature: "Schema Markup", kreature: "Auto-generated", wordpress: "Manual or plugin" },
  { feature: "Alt Text", kreature: "Enforced at upload", wordpress: "Optional field" },
  { feature: "301 Redirects", kreature: "Automatic on slug change", wordpress: "Plugin or .htaccess" },
  { feature: "Canonical URLs", kreature: "Auto + per-page", wordpress: "Yoast setting" },
  { feature: "Core Web Vitals", kreature: "90+ out of the box", wordpress: "Depends on theme/plugins" },
  { feature: "llms.txt", kreature: "Auto-generated", wordpress: "Not available" },
  { feature: "Page Speed", kreature: "Static, edge-cached", wordpress: "Server-rendered, cache-dependent" },
  { feature: "Setup Time", kreature: "Zero config", wordpress: "Install + configure plugins" },
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
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "GDPR", href: "/legal/gdpr" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "Twitter / X", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Discord", href: "https://discord.com" },
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
              The all-in-one platform for building, launching, and growing
              websites — with SEO built in, not bolted on.
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

export default function SEOFeaturePage() {
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
            style={{ backgroundColor: V("color-accent-green") }}
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
            SEO Features
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
            Built-in SEO that actually works
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
            No plugins, no config files, no monthly audits. Kreature ships
            with everything search engines want — sitemaps, schema, Core Web
            Vitals, and AI-search optimization — all running from day one.
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
              Start optimizing
              <Arrow />
            </a>
            <a
              href="/feature/seo#features"
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
          {/* Section heading */}
          <div className="text-center mb-16">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-blue") }}
            >
              Everything you need
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              SEO that ships with your site
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
              Every feature below is live the moment you publish. No
              configuration required — sensible defaults with full control
              when you want it.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEO_FEATURES.map((feature) => (
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

      {/* ─── Core Web Vitals ─── */}
      <section
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
              Performance
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Core Web Vitals that crush the threshold
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
              Google uses Core Web Vitals as a ranking signal. Kreature sites
              score 90+ on PageSpeed Insights out of the box — here&apos;s
              how.
            </p>
          </div>

          {/* Vitals table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className="border-b"
                  style={{ borderColor: V("color-hairline") }}
                >
                  <th
                    className="pb-3 text-sm font-semibold uppercase tracking-wider"
                    style={{ color: V("color-body-mid") }}
                  >
                    Metric
                  </th>
                  <th
                    className="pb-3 text-sm font-semibold uppercase tracking-wider"
                    style={{ color: V("color-body-mid") }}
                  >
                    Google Threshold
                  </th>
                  <th
                    className="pb-3 text-sm font-semibold uppercase tracking-wider"
                    style={{ color: V("color-accent-blue") }}
                  >
                    Kreature Avg
                  </th>
                  <th
                    className="pb-3 text-sm font-semibold uppercase tracking-wider hidden md:table-cell"
                    style={{ color: V("color-body-mid") }}
                  >
                    How we achieve it
                  </th>
                </tr>
              </thead>
              <tbody>
                {WEB_VITALS.map((v, i) => (
                  <tr
                    key={v.metric}
                    className="border-b"
                    style={{
                      borderColor: V("color-hairline"),
                      backgroundColor:
                        i % 2 === 0
                          ? "transparent"
                          : `color-mix(in srgb, ${V("color-canvas-soft")} 50%, transparent)`,
                    }}
                  >
                    <td className="py-4 pr-6">
                      <div
                        className="font-semibold text-base"
                        style={{ color: V("color-ink") }}
                      >
                        {v.metric}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: V("color-mute") }}
                      >
                        {v.label}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <span
                        className="text-sm font-medium"
                        style={{ color: V("color-body-mid") }}
                      >
                        &lt; {v.baseline}
                      </span>
                    </td>
                    <td className="py-4 pr-6">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                        style={{
                          color: V("color-accent-green"),
                          backgroundColor: `color-mix(in srgb, ${V("color-accent-green")} 12%, transparent)`,
                        }}
                      >
                        {v.kreature}
                      </span>
                    </td>
                    <td
                      className="py-4 text-sm hidden md:table-cell"
                      style={{ color: V("color-body-mid") }}
                    >
                      {v.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile view for impact descriptions */}
          <div className="mt-8 space-y-4 md:hidden">
            {WEB_VITALS.map((v) => (
              <div key={v.metric}>
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: V("color-mute") }}
                >
                  {v.metric} — How:
                </span>
                <p
                  className="text-sm mt-1"
                  style={{ color: V("color-body-mid") }}
                >
                  {v.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AEO Section ─── */}
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
                  color: V("color-accent-purple"),
                  backgroundColor: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)`,
                  border: `1px solid ${V("color-accent-purple")}20`,
                }}
              >
                New — Answer Engine Optimization
              </div>
              <h2
                className="font-heading font-semibold tracking-tight mb-5"
                style={{
                  fontSize: "48px",
                  lineHeight: "52px",
                  color: V("color-ink"),
                }}
              >
                Optimized for AI search, not just Google
              </h2>
              <p
                className="text-base mb-8"
                style={{
                  color: V("color-body-mid"),
                  fontSize: "16px",
                  lineHeight: "25.6px",
                }}
              >
                ChatGPT, Perplexity, Google SGE, and Claude are rewriting how
                people find information. Kreature is the first platform with
                built-in AEO — making your content the source AI models cite.
              </p>

              <div className="space-y-4">
                {AEO_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-4 p-4 rounded-lg border"
                    style={{
                      backgroundColor: V("color-canvas"),
                      borderColor: V("color-hairline"),
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        backgroundColor: V("color-accent-purple"),
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
                        {f.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: V("color-body-mid") }}
                      >
                        {f.description}
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
                  style={{ backgroundColor: V("color-accent-purple") }}
                />
              </div>

              <div className="relative z-10 space-y-6">
                {/* Simulated AI search results */}
                <div
                  className="rounded-lg p-4 border"
                  style={{
                    backgroundColor: V("color-canvas-soft"),
                    borderColor: V("color-hairline"),
                  }}
                >
                  <div
                    className="text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{ color: V("color-mute") }}
                  >
                    AI Search Result Preview
                  </div>
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: V("color-ink") }}
                  >
                    Your Page Title Here
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    Cited from yoursite.com &middot; Structured data confirms
                    this is the authoritative source for this topic...
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        color: V("color-accent-green"),
                        backgroundColor: `color-mix(in srgb, ${V("color-accent-green")} 12%, transparent)`,
                      }}
                    >
                      Entity verified
                    </span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        color: V("color-accent-blue"),
                        backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} 12%, transparent)`,
                      }}
                    >
                      Schema matched
                    </span>
                  </div>
                </div>

                {/* Second result */}
                <div
                  className="rounded-lg p-4 border opacity-60"
                  style={{
                    backgroundColor: V("color-canvas-soft"),
                    borderColor: V("color-hairline"),
                  }}
                >
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: V("color-ink") }}
                  >
                    Competitor Page Title
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    Cited from competitor.com &middot; No structured data
                    markers found...
                  </p>
                </div>

                <div
                  className="text-xs text-center mt-4"
                  style={{ color: V("color-mute") }}
                >
                  Structured content wins citations. Unstructured pages get
                  passed over.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ─── */}
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
              Kreature SEO vs WordPress + Yoast
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
              SEO shouldn&apos;t require a plugin, a consultant, and a prayer.
              Here&apos;s how Kreature compares to the most popular SEO
              workflow.
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
                    Kreature
                  </th>
                  <th
                    className="py-4 px-6 text-left text-sm font-semibold"
                    style={{ color: V("color-body-mid") }}
                  >
                    WordPress + Yoast
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
                        {row.wordpress}
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
            Optimize your site
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
            Join thousands of sites that rank higher because SEO is built into
            the platform — not bolted on after launch.
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
            No credit card required. Free plan includes all SEO features.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
