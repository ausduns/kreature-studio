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
  bodyLg: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  eyebrow: { fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── Shared components ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-heading font-[800] text-xl tracking-tight ${className}`} style={{ color: V("color-ink") }}>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
}

/* ─── CDN image bases ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const CDN_LOGOS = "https://dhygzobemt712.cloudfront.net";

/* ─── POWER FEATURES (All the power you need, without plugins) ─── */
const POWER_FEATURES = [
  {
    title: "Simple schema markup management",
    desc: "Generate schema markup with the help of Kreature AI, add it on your own, and easily edit it, so your content is clear, structured, and discoverable across search and AI-powered experiences.",
    cta: "Schema markup",
    img: `${CDN}/6900e3d2f4e8eb5cce80bd0d_seo_schema.webp`,
  },
  {
    title: "Automated SEO metadata",
    desc: "Automatically define meta titles and descriptions from CMS fields, or use Kreature AI to fill in missing metadata instantly.",
    cta: "SEO settings",
    img: `${CDN}/6900e3d2e9c2e8c2aa936edd_seo_metadata.webp`,
  },
  {
    title: "Easy sitemap controls",
    desc: "Auto generate an XML sitemap so search engines and AI systems can easily find and crawl your pages.",
    cta: "Create your sitemap",
    img: `${CDN}/6900e3d2975facac9a1abb63_seo_sitemap.webp`,
  },
  {
    title: "Robust 301 redirects management",
    desc: "Migrate or relink your site URLs easily by creating and publishing 301 redirects — no engineering help required.",
    cta: "Creating 301 redirects",
    img: `${CDN}/6900e3d2a2637ce72fc19e21_seo_301-redirects.webp`,
  },
  {
    title: "Effortless alt tag editing",
    desc: "Generate missing alt text one-off or en mass with Kreature AI or use built-in controls to manage your preferences. Ensure your images are accessible and optimized for search and AI-powered discovery.",
    cta: "Setting alt attributes",
    img: `${CDN}/6900e3d20ac6ddfeedcd4a5d_seo_alt-text.webp`,
  },
];

/* ─── AEO PRIORITIES ─── */
const AEO_PRIORITIES = [
  {
    label: "Priority 1",
    title: "Implement schema markup",
    desc: "Add structured data to help AI systems understand your content and surface it in AI-generated responses.",
    progress: 3,
  },
  {
    label: "Priority 2",
    title: "Create topic clusters",
    desc: "Organize content into comprehensive topic clusters with clear information architecture that AI systems prefer.",
    progress: 2,
  },
  {
    label: "Priority 3",
    title: "Optimize for question-based queries",
    desc: "Structure content to answer specific questions directly, increasing chances of appearing in featured snippets and AI responses.",
    progress: 1,
  },
];

/* ─── ALL FEATURES GROUPS ─── */
const FEATURE_GROUPS = [
  {
    name: "Build and Design",
    items: ["Design", "Edit content", "Interactions", "Page Building", "Collaboration", "Shared Libraries"],
  },
  {
    name: "Manage",
    items: ["CMS", "Hosting", "Security", "Localization"],
  },
  {
    name: "Optimize",
    items: ["Analyze", "Optimize", "SEO", "AEO"],
  },
  {
    name: "Extend",
    items: ["Apps", "Figma to Kreature", "DevLink", "Code Generation", "Ecommerce", "Headless CMS APIs"],
  },
];

/* ─── FAQ ─── */
const FAQS = [
  {
    q: "Can Kreature scale for enterprise SEO needs?",
    a: "Kreature excels at enterprise-scale SEO and AEO, with features like automated SEO settings for unlimited CMS items, bulk 301 redirect management, and localization tools that automatically handle hreflang tags for international SEO. AI-powered SEO tools further streamline how teams generate, optimize, and manage content at scale — helping maintain consistency and discoverability across thousands of pages. The platform's visual, composable CMS allows you to create custom content structures with built-in SEO fields, while edit mode empowers content teams to optimize pages at scale without touching code.",
  },
  {
    q: "How does Kreature's CMS support content marketing and SEO?",
    a: "Kreature's visual, composable CMS enables teams to create and optimize content at scale, without relying on traditional code or bottlenecks. Build custom content types with SEO-specific fields, automatically generate meta titles and descriptions from CMS data, and set character limits to ensure optimal display in search results. The edit mode interface lets content teams update SEO settings, preview changes, and publish directly, keeping your content fresh and SEO-optimized. This flexibility helps you maintain consistent publishing schedules and implement content strategies that drive organic traffic growth.",
  },
  {
    q: "How does Kreature handle technical SEO requirements?",
    a: "In Kreature, you can control page URLs, set up robots.txt rules, and manage XML sitemaps without touching code. The platform automatically generates clean, semantic HTML markup and provides SSL certificates for all sites. For dynamic content, Kreature's CMS lets you define patterns for meta titles and descriptions that automatically populate across collection pages, ensuring consistency while saving time. These features work together to create search engine-friendly sites that meet modern technical standards.",
  },
  {
    q: "Is Kreature good for Answer Engine Optimization (AEO)?",
    a: "Yes, Kreature supports effective AEO through structured content capabilities and semantic markup controls that help AI systems understand and surface your content. Kreature's CMS allows you to create well-organized, topic-focused content that answers specific questions. Plus, schema markup tools help you provide clear context that AI-powered search engines can interpret. This structured approach ensures your content appears in AI-generated responses and featured snippets, where users increasingly find answers. Kreature's flexibility in content organization lets you build comprehensive topic clusters and implement a clear information architecture that AI systems prefer. With our Localization feature, you can also optimize content for different regions and languages, expanding your visibility across various AI-powered search experiences. Kreature AI enhances this further by helping you generate and refine question-based content, optimize metadata, and identify opportunities for improved visibility in AI-driven search. The AI-powered audit panel surfaces gaps in both technical and on-page SEO — offering clear, real-time guidance to strengthen your site's structure, accessibility, and discoverability. Together, these capabilities help ensure your content remains optimized as answer engines and generative search continue to evolve. By combining clean code output, fast-loading pages, and structured content management, Kreature positions your site to thrive in both traditional search results and emerging AI-powered discovery channels.",
  },
  {
    q: "Is Kreature good for SEO?",
    a: "Yes, Kreature provides comprehensive SEO capabilities that help improve your website's search rankings through built-in controls and high-performance infrastructure. Kreature provides a user interface to edit and optimize essential SEO elements, like meta titles, descriptions, schema markup, and 301 redirects, without requiring plugins or developer assistance. With AI-enhanced SEO capabilities built directly into the platform, you can generate, refine, and optimize key content and metadata more efficiently — helping you adapt to an ever-evolving search landscape. This means you can optimize your content, manage technical SEO requirements, and instantly push changes live — all within the same visual interface where you build your site. Kreature also proactively guides you with real-time tips and clear audit logs as you design — helping you build pages that are well-structured and accessible right from the start. This ensures that Kreature users who aren't SEO experts can incorporate best practices as part of their workflows. Plus, you'll always have visibility into potential SEO pitfalls before your pages go live. All this is paired with Kreature's broader value of enabling marketers, designers, and developers to build, manage, and optimize visually stunning, engaging web content quickly and safely — personalized, localized, authoritative, and technically sound content at scale. Kreature's globally distributed hosting on AWS ensures fast page load speeds across 100+ data centers worldwide, which search engines prioritize when determining rankings. The platform automatically generates clean, semantic HTML code and includes built-in SSL security for all sites, both critical factors for SEO performance.",
  },
];

/* ─── CUSTOMER STORIES ─── */
const CUSTOMER_STORIES = [
  {
    stat: "10x",
    label: "In cost savings annually",
    logo: `${CDN_LOGOS}/ncr-logo.svg`,
    href: "/customers",
  },
  {
    stat: "67%",
    label: "decrease in dev ticketing",
    logo: `${CDN_LOGOS}/dropbox-logo.svg`,
    href: "/customers",
  },
  {
    stat: "$6M",
    label: "in cost savings annually",
    logo: `${CDN_LOGOS}/orangetheory-logo.svg`,
    href: "/customers",
  },
  {
    stat: "56%",
    label: "increase in form fills",
    logo: `${CDN_LOGOS}/walker-dunlop-logo.svg`,
    href: "/customers",
  },
  {
    stat: "1,170%",
    label: "increase in traffic YoY",
    logo: `${CDN_LOGOS}/docusign-logo.svg`,
    href: "/customers",
  },
  {
    stat: "$200M",
    label: "in new pipeline generated post-site launch",
    logo: `${CDN_LOGOS}/abm-logo.svg`,
    href: "/customers",
  },
  {
    stat: "+20%",
    label: "increase in site-wide conversion",
    logo: `${CDN_LOGOS}/lattice-logo.svg`,
    href: "/customers",
  },
];

/* ─── FOOTER DATA ─── */
const FOOTER_COLS = [
  {
    heading: "Product",
    links: [
      { label: "Design", href: "/feature/design" },
      { label: "CMS", href: "/feature/cms" },
      { label: "Hosting", href: "/feature/hosting" },
      { label: "SEO", href: "/feature/seo" },
      { label: "AI", href: "/feature/ai" },
      { label: "Interactions", href: "/feature/interactions-animations" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Ecommerce", href: "/feature/ecommerce" },
      { label: "Startups", href: "/solutions/startups" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Templates", href: "/templates" },
      { label: "Customer stories", href: "/customers" },
      { label: "Glossary", href: "/glossary" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/company/careers" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Contact", href: "/contact-sales" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs Contentful", href: "/compare/contentful" },
      { label: "vs Framer", href: "/compare/framer" },
      { label: "vs WordPress", href: "/compare/wordpress" },
      { label: "vs Wix", href: "/compare/wix" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Forum", href: "/community" },
      { label: "Events", href: "/community" },
      { label: "Discord", href: "/community" },
    ],
  },
  {
    heading: "Get Help",
    links: [
      { label: "Support", href: "/contact-sales" },
      { label: "Pricing", href: "/pricing" },
      { label: "Status", href: "/status" },
      { label: "Login", href: "/login" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   SEO FEATURE PAGE
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function SEOFeaturePage() {
  return (
    <>
      <main>
        {/* ═══ HERO ═══ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-canvas") }}
        >
          {/* Subtle gradient glow at top */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute top-0 right-1/4 w-[700px] h-[500px] rounded-full opacity-[0.06]"
              style={{
                background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
                transform: "translate(20%, -40%)",
              }}
            />
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[900px] mx-auto text-center">
              {/* Eyebrow */}
              <p
                className="mb-4"
                style={{
                  ...S.eyebrow,
                  color: V("color-accent-blue"),
                  textTransform: "uppercase" as const,
                }}
              >
                SEO
              </p>

              {/* H1 */}
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-ink") }}
              >
                SEO built for today &mdash; and what&apos;s next
              </h1>

              {/* Subtext */}
              <p
                className="max-w-[700px] mx-auto mb-10"
                style={{ ...S.bodyLg, color: V("color-body-mid") }}
              >
                From precision controls to AI-powered audits and optimizations, Kreature helps
                you manage every aspect of how your site gets discovered &mdash; across search,
                AI-driven results, and beyond.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = V("color-accent-blue-hover"))}
                  onMouseLeave={(e) => (e.currentTarget.style.background = V("color-accent-blue"))}
                >
                  Get started &mdash; it&apos;s free <Arrow />
                </a>
                <a
                  href="#power-features"
                  className="inline-flex items-center transition-colors"
                  style={{
                    ...S.btn,
                    background: "transparent",
                    color: V("color-ink"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  Learn more about SEO
                </a>
              </div>

              {/* Hero image */}
              <div
                className="mt-16 rounded-xl overflow-hidden"
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${V("color-hairline")}`,
                  boxShadow: V("shadow-card"),
                  background: V("color-canvas-soft"),
                }}
              >
                <img
                  src={`${CDN}/6894bfc8f1cbd54b66a3790c_PageSettings-min.avif`}
                  alt="Kreature SEO page settings interface"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ALL THE POWER YOU NEED ═══ */}
        <section
          id="power-features"
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)]"
          style={{ background: V("color-canvas-soft") }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-16">
              <h2
                className="font-semibold leading-[1.04] mb-4"
                style={{ ...S.h2, color: V("color-ink") }}
              >
                All the power you need, without plugins
              </h2>
              <p
                className="max-w-[700px] mx-auto"
                style={{ ...S.bodyLg, color: V("color-body-mid") }}
              >
                Kreature gives you fine-tuned control over SEO metadata, indexing rules,
                redirects, and more, so you can publish changes fast without relying on engineers.
              </p>
            </div>

            {/* Feature cards with images */}
            <div className="space-y-6">
              {POWER_FEATURES.map((feat, i) => (
                <div
                  key={feat.title}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-xl p-[clamp(1.5rem,3vw,3rem)] transition-all hover:shadow-lg"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <h3
                      className="font-semibold mb-3"
                      style={{ ...S.h3, color: V("color-ink"), fontSize: "28px", lineHeight: "36px" }}
                    >
                      {feat.title}
                    </h3>
                    <p className="mb-6" style={{ ...S.body, color: V("color-body-mid") }}>
                      {feat.desc}
                    </p>
                    <a
                      href="/signup"
                      className="inline-flex items-center font-medium transition-colors hover:gap-2"
                      style={{ ...S.body, color: V("color-accent-blue") }}
                    >
                      {feat.cta} <Arrow />
                    </a>
                  </div>

                  {/* Image */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div
                      className="rounded-lg overflow-hidden"
                      style={{
                        borderRadius: "8px",
                        border: `1px solid ${V("color-hairline")}`,
                        background: V("color-canvas-soft"),
                      }}
                    >
                      <img
                        src={feat.img}
                        alt={feat.title}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ AEO SECTION ═══ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)]"
          style={{ background: V("color-canvas") }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left column: AEO info */}
              <div>
                <p
                  className="mb-4"
                  style={{
                    ...S.eyebrow,
                    color: V("color-accent-blue"),
                    textTransform: "uppercase" as const,
                  }}
                >
                  From search engines to answer engines &mdash; stay ahead of what&apos;s next.
                </p>

                <p className="mb-4" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
                  AI is transforming how people find and interact with information. Learn how
                  Answer Engine Optimization (AEO) helps your content stay visible and relevant
                  as search evolves.
                </p>

                <a
                  href="#"
                  className="inline-flex items-center font-medium mb-10 transition-colors"
                  style={{ ...S.body, color: V("color-accent-blue") }}
                >
                  Get your free AEO assessment <Arrow />
                </a>

                {/* AEO Maturity Score card */}
                <div
                  className="rounded-xl p-8"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold" style={{ ...S.h4, color: V("color-ink") }}>
                      Share
                    </h4>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={V("color-mute")}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </div>

                  <p className="mb-4 font-semibold" style={{ ...S.bodyLg, color: V("color-ink") }}>
                    Overall AEO Maturity score:
                  </p>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-semibold" style={{ color: V("color-ink") }}>
                      3
                    </span>
                    <span style={{ ...S.body, color: V("color-body-mid") }}>out of 5</span>
                  </div>

                  {/* Progress bar */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className="h-2 flex-1 rounded-full"
                        style={{
                          background: n <= 3 ? V("color-accent-blue") : V("color-canvas-mid"),
                        }}
                      />
                    ))}
                  </div>

                  <h5 className="font-semibold mb-4" style={{ color: V("color-ink") }}>
                    Your top 3 priorities
                  </h5>

                  <div className="space-y-4">
                    {AEO_PRIORITIES.map((p) => (
                      <div
                        key={p.label}
                        className="rounded-lg p-4"
                        style={{
                          borderRadius: "8px",
                          border: `1px solid ${V("color-hairline")}`,
                          background: V("color-canvas"),
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{
                              background: V("color-accent-blue"),
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {p.progress}
                          </div>
                          <div>
                            <p
                              className="text-xs font-semibold uppercase tracking-wider mb-1"
                              style={{ color: V("color-mute") }}
                            >
                              {p.label}
                            </p>
                            <p className="text-sm font-medium mb-1" style={{ color: V("color-ink") }}>
                              {p.title}
                            </p>
                            <p className="text-sm" style={{ color: V("color-body-mid") }}>
                              {p.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: AEO visual / UI mock + decorative badges */}
              <div className="flex flex-col gap-6">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                    boxShadow: V("shadow-card"),
                  }}
                >
                  <img
                    src={`${CDN}/69d70ea1d24589fb1271cc10_5bdcf6c700c06a2d15393eb7d6ae76d4_aeo_measure_ai-answers.avif`}
                    alt="AEO measurement dashboard showing AI answer visibility"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                {/* Decorative: AI audit panel badge */}
                <div
                  className="rounded-xl p-5 flex items-center gap-4"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${V("color-accent-blue")}15`, color: V("color-accent-blue") }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>
                    AI-powered audit panel surfaces SEO gaps &mdash; real-time guidance to strengthen your discoverability
                  </p>
                </div>
                {/* Decorative: Topic cluster badge */}
                <div
                  className="rounded-xl p-5 flex items-center gap-4"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${V("color-accent-blue")}15`, color: V("color-accent-blue") }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>
                    Build comprehensive topic clusters with clear architecture that AI systems prefer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ALL FEATURES ═══ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)]"
          style={{ background: V("color-canvas-soft") }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-14">
              <h2
                className="font-semibold leading-[1.04] mb-4"
                style={{ ...S.h2, color: V("color-ink") }}
              >
                All features
              </h2>
              <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
                Every tool you need to build, manage, optimize, and extend your site &mdash; all in one platform.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURE_GROUPS.map((group) => (
                <div key={group.name}>
                  <h4
                    className="font-semibold mb-5"
                    style={{ ...S.h4, color: V("color-ink") }}
                  >
                    {group.name}
                  </h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 transition-colors"
                          style={{ ...S.bodySm, color: V("color-body-mid") }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = V("color-ink"))}
                          onMouseLeave={(e) => (e.currentTarget.style.color = V("color-body-mid"))}
                        >
                          {item}
                          {item === "AEO" && (
                            <span
                              className="text-[0.6rem] font-semibold uppercase ml-1"
                              style={{ color: V("color-accent-blue") }}
                            >
                              New
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)]"
          style={{ background: V("color-canvas") }}
        >
          <div className="max-w-[800px] mx-auto">
            <h2
              className="font-semibold leading-[1.04] mb-12 text-center"
              style={{ ...S.h2, color: V("color-ink") }}
            >
              Frequently asked questions
            </h2>

            <div className="space-y-6">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <summary className="px-6 py-5 cursor-pointer flex items-center justify-between gap-4 list-none">
                    <span
                      className="font-semibold pr-8"
                      style={{ ...S.body, fontWeight: 600, color: V("color-ink") }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 text-lg transition-transform duration-200 group-open:rotate-45"
                      style={{ color: V("color-mute") }}
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p style={{ ...S.body, color: V("color-body-mid") }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CUSTOMER STORIES ═══ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)]"
          style={{ background: V("color-canvas-soft") }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12">
              <h2
                className="font-semibold leading-[1.04] mb-4"
                style={{ ...S.h2, color: V("color-ink") }}
              >
                Trusted by teams everywhere
              </h2>
              <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
                See how teams use Kreature to drive measurable results across their organizations.
              </p>
            </div>

            {/* Stat cards with logos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {CUSTOMER_STORIES.map((story) => (
                <a
                  key={story.label}
                  href={story.href}
                  className="rounded-xl p-6 flex flex-col justify-between transition-all hover:shadow-lg no-underline"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <div>
                    {/* Logo */}
                    <div className="h-8 mb-4 flex items-center">
                      <img
                        src={story.logo}
                        alt={story.label}
                        className="max-h-full max-w-[120px] object-contain"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    {/* Stat */}
                    <div
                      className="font-semibold leading-none mb-2"
                      style={{
                        fontSize: "clamp(2rem,3vw,2.5rem)",
                        color: V("color-accent-blue"),
                      }}
                    >
                      {story.stat}
                    </div>
                    <p className="text-sm" style={{ color: V("color-body-mid") }}>
                      {story.label}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center mt-4 text-sm font-medium transition-colors"
                    style={{ color: V("color-accent-blue") }}
                  >
                    Read story <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA SECTION ═══ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)]"
          style={{ background: V("color-canvas") }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[400px] rounded-full pointer-events-none z-0 opacity-[0.07]"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="max-w-[700px] mx-auto relative z-10 text-center">
            <h2
              className="font-semibold leading-[1.04] mb-5"
              style={{ ...S.h2, color: V("color-ink") }}
            >
              Get started for free
            </h2>
            <p
              className="max-w-[550px] mx-auto mb-10"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              Try Kreature for as long as you like with our free Starter plan. Purchase a paid
              Site plan to publish, host, and unlock additional features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center transition-colors"
                style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = V("color-accent-blue-hover"))}
                onMouseLeave={(e) => (e.currentTarget.style.background = V("color-accent-blue"))}
              >
                Get started &mdash; it&apos;s free <Arrow />
              </a>
              <a
                href="/contact-sales"
                className="inline-flex items-center transition-colors"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                Watch demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer
        className="px-5 sm:px-8 py-16"
        style={{
          borderTop: `1px solid ${V("color-hairline")}`,
          background: V("color-canvas"),
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {/* Brand column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <a href="/" className="flex items-center gap-2.5 mb-3 no-underline">
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
                <Wordmark />
              </a>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>
                The all-in-one platform for building, launching, and growing websites &mdash; with
                SEO built in, not bolted on.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <div
                  className="mb-4"
                  style={{
                    ...S.caption,
                    color: V("color-mute"),
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
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
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
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
    </>
  );
}
