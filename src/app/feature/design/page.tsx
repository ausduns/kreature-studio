/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── STYLES ─── */
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

/* ─── DATA ─── */
const DESIGN_FEATURES = [
  {
    title: "Visual canvas",
    desc: "Design with pixel-perfect precision on a canvas that gives you complete control. Drag, drop, resize, and arrange every element exactly where you want it — no coding required.",
    icon: "🎨",
    cta: "Explore visual canvas",
  },
  {
    title: "Design systems",
    desc: "Build once, reuse everywhere. Create shared component libraries, typography scales, and color tokens that keep every page on-brand — with one-click updates that cascade across your entire site.",
    icon: "🧩",
    cta: "Build design systems",
  },
  {
    title: "Responsive design",
    desc: "Design for every screen size in one view. Preview and adjust layouts for desktop, tablet, and mobile breakpoints simultaneously — with fluid sizing and breakpoint-specific overrides.",
    icon: "📱",
    cta: "Design responsively",
  },
  {
    title: "CSS Grid & Flexbox",
    desc: "Harness the full power of modern CSS layout. Visually build with CSS Grid and Flexbox through an intuitive interface that generates clean, production-ready code behind the scenes.",
    icon: "⊞",
    cta: "Learn CSS layout",
  },
  {
    title: "Animations & Interactions",
    desc: "Bring your designs to life with scroll-triggered animations, hover effects, page transitions, and complex timeline-based interactions — all built on GSAP for buttery-smooth performance.",
    icon: "✨",
    cta: "Create animations",
  },
  {
    title: "Figma integration",
    desc: "Sync your Figma designs directly into Kreature. Import components, maintain design tokens, and keep your design system in sync between design and development — in both directions.",
    icon: "🔄",
    cta: "Connect Figma",
  },
];

const SHOWCASE = [
  { name: "Jasper AI", category: "SaaS", color: "#7a3dff" },
  { name: "Aether", category: "Agency", color: "#ed52cb" },
  { name: "Cula", category: "Ecommerce", color: "#ff6b00" },
  { name: "Palmer Dinnerware", category: "Brand", color: "#00d722" },
  { name: "Siena Film Festival", category: "Events", color: "#146ef5" },
  { name: "Normal Computing", category: "Tech", color: "#7a3dff" },
  { name: "Giulia Gartner", category: "Portfolio", color: "#ed52cb" },
  { name: "Discord Redesign", category: "Concept", color: "#146ef5" },
];

const FIGMA_HIGHLIGHTS = [
  {
    title: "Design in Figma, build in Kreature",
    desc: "Import your Figma designs with a single click. Components, auto layout, and text styles map directly to Kreature's visual canvas — preserving your design intent without manual translation.",
  },
  {
    title: "Keep design tokens in sync",
    desc: "Connect your Figma variables to Kreature's design system tokens. Change a color or typography scale in either tool, and it updates everywhere — no more design drift between design and production.",
  },
  {
    title: "Extend with code",
    desc: "When you need to go beyond what visual tools provide, add custom React components directly in Kreature. Your Figma designs become the foundation, and code extends them — all in one platform.",
  },
];

const BENEFITS = [
  {
    title: "Creative freedom",
    stat: "100%",
    label: "design fidelity",
    desc: "Build exactly what you imagine without compromise. No templates, no limitations — just a powerful visual canvas that respects your creative vision down to the pixel.",
    accent: "pink",
  },
  {
    title: "Team velocity",
    stat: "5x",
    label: "faster iteration",
    desc: "Design, prototype, and ship in one platform. Skip the handoff meetings, redline documents, and dev back-and-forth. Changes go live in hours, not weeks.",
    accent: "pink",
  },
  {
    title: "Production quality",
    stat: "99.99%",
    label: "uptime, zero ops",
    desc: "Your designs run on enterprise-grade infrastructure with a global CDN, automatic SSL, and 24/7 security monitoring. Focus on craft — we handle the rest.",
    accent: "pink",
  },
];

const FOOTER: Record<string, string[]> = {
  Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility", "AI"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way"],
  Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ─── SHARED COMPONENTS ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Section({
  bg,
  children,
  className,
}: {
  bg?: "soft" | "dark" | "pink";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)] ${className || ""}`}
      style={{
        background:
          bg === "soft"
            ? V("color-canvas-soft")
            : bg === "dark"
            ? V("color-ink")
            : bg === "pink"
            ? V("color-accent-pink")
            : V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

export default function DesignFeaturePage() {
  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-ink") }}
        >
          {/* Pink grid texture */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(237,82,203,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Pink glow orbs */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-pink")} 0%, transparent 70%)`,
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-15"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-pink")} 0%, transparent 70%)`,
              transform: "translate(-20%, 40%)",
            }}
          />

          {/* Abstract geometric shapes (decorative) */}
          <div
            className="absolute top-20 left-[60%] w-24 h-24 rounded-lg rotate-12 pointer-events-none z-0 opacity-10"
            style={{ border: `2px solid ${V("color-accent-pink")}` }}
          />
          <div
            className="absolute bottom-32 right-[15%] w-16 h-16 rounded-full pointer-events-none z-0 opacity-10"
            style={{ border: `2px solid ${V("color-accent-pink")}` }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[800px]">
              {/* Eyebrow */}
              <p
                className="mb-4"
                style={{
                  ...S.eyebrow,
                  color: V("color-accent-pink"),
                  textTransform: "uppercase" as const,
                }}
              >
                Design
              </p>

              {/* H1 */}
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Design without limits
              </h1>

              {/* Subtext */}
              <p className="max-w-[650px] mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                A visual development platform built for designers who care about craft. Pixel-perfect
                control, production-ready code, and the creative freedom to build anything you can
                imagine — without writing a line of CSS.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-pink"), color: "#fff" }}
                >
                  Start designing free <Arrow />
                </a>
                <a
                  href="/enterprise/contact-sales"
                  className="inline-flex items-center transition-colors"
                  style={{
                    ...S.btn,
                    background: "transparent",
                    color: V("color-canvas"),
                    border: `1px solid rgba(255,255,255,0.2)`,
                  }}
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ DESIGN FEATURES ═══════ */}
        <Section>
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-pink"), textTransform: "uppercase" as const }}
            >
              Features
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Everything designers need, built right in
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              From first concept to published site, every tool you need lives inside Kreature.
              No plugins, no workarounds, no switching tools mid-flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESIGN_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)] transition-all hover:shadow-lg group"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5"
                  style={{ background: V("color-canvas-soft") }}
                >
                  {feat.icon}
                </div>

                {/* Title */}
                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="mb-6" style={{ ...S.body, color: V("color-body-mid") }}>
                  {feat.desc}
                </p>

                {/* CTA */}
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors hover:gap-2"
                  style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-pink") }}
                >
                  {feat.cta} <Arrow />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ FIGMA INTEGRATION HIGHLIGHT ═══════ */}
        <Section bg="soft">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Figma illustration */}
            <div className="relative">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                  aspectRatio: "4/3",
                }}
              >
                {/* Mock Figma integration visual */}
                <div className="h-full flex flex-col">
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ borderBottom: `1px solid ${V("color-hairline")}` }}
                  >
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ background: "#ee1d36" }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: "#ffae13" }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: "#00d722" }} />
                    </div>
                    <span className="text-xs ml-3" style={{ color: V("color-mute") }}>
                      Figma &rarr; Kreature
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-center p-8">
                    <div className="flex flex-col items-center gap-4">
                      {/* Figma logo placeholder */}
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
                        style={{ background: V("color-accent-pink"), opacity: 0.15 }}
                      >
                        🔄
                      </div>
                      <p className="text-sm font-medium" style={{ color: V("color-ink") }}>
                        Figma Designs
                      </p>
                      <div
                        className="w-8 h-[2px] rounded-full"
                        style={{ background: V("color-accent-pink"), opacity: 0.5 }}
                      />
                      <p className="text-sm font-medium" style={{ color: V("color-ink") }}>
                        Kreature Canvas
                      </p>
                      <p className="text-xs text-center max-w-[250px]" style={{ color: V("color-body-mid") }}>
                        Components, auto layout, text styles, and design tokens sync automatically
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl rotate-12 opacity-30"
                style={{ background: V("color-accent-pink") }}
              />
            </div>

            {/* Right: Figma highlights */}
            <div>
              <p
                className="mb-4"
                style={{ ...S.eyebrow, color: V("color-accent-pink"), textTransform: "uppercase" as const }}
              >
                Figma integration
              </p>
              <h2
                className="font-semibold leading-[1.04] mb-8"
                style={{ ...S.h2, color: V("color-ink") }}
              >
                From design tool to production
              </h2>

              <div className="space-y-8">
                {FIGMA_HIGHLIGHTS.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}
                    >
                      <span className="text-sm font-semibold" style={{ color: V("color-accent-pink") }}>
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ ...S.h4, color: V("color-ink") }}>
                        {h.title}
                      </h3>
                      <p style={{ ...S.body, color: V("color-body-mid") }}>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/feature/figma-to-webflow"
                className="inline-flex items-center mt-8"
                style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-pink") }}
              >
                Learn more about Figma to Kreature <Arrow />
              </a>
            </div>
          </div>
        </Section>

        {/* ═══════ BENEFITS ═══════ */}
        <Section>
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-pink"), textTransform: "uppercase" as const }}
            >
              Why designers choose Kreature
            </p>
            <h2 className="font-semibold leading-[1.04]" style={{ ...S.h2, color: V("color-ink") }}>
              Design that ships
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {BENEFITS.map((b) => (
              <div key={b.title}>
                {/* Stat */}
                <div
                  className="font-semibold leading-none mb-2"
                  style={{ fontSize: "clamp(3rem,6vw,4.5rem)", color: V("color-accent-pink") }}
                >
                  {b.stat}
                </div>

                {/* Label */}
                <p className="mb-4" style={{ ...S.bodyLg, fontWeight: 500, color: V("color-ink") }}>
                  {b.label}
                </p>

                {/* Description */}
                <p style={{ ...S.body, color: V("color-body-mid") }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ SHOWCASE ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-pink"), textTransform: "uppercase" as const }}
            >
              Showcase
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              See what designers build with Kreature
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              From SaaS landing pages to immersive brand experiences — these sites were designed,
              built, and launched entirely in Kreature.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SHOWCASE.map((item) => (
              <div
                key={item.name}
                className="rounded-lg overflow-hidden group cursor-pointer transition-all hover:shadow-lg"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                {/* Thumbnail placeholder */}
                <div
                  className="w-full aspect-[4/3] relative overflow-hidden"
                  style={{ background: V("color-canvas-mid") }}
                >
                  {/* Abstract geometric design placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-2xl rotate-12 opacity-20"
                      style={{ background: item.color }}
                    />
                    <div
                      className="w-16 h-16 rounded-full absolute top-4 right-4 opacity-10"
                      style={{ background: item.color }}
                    />
                    <div
                      className="w-20 h-3 rounded-full absolute bottom-8 left-6 opacity-15"
                      style={{ background: item.color }}
                    />
                    <div
                      className="w-32 h-3 rounded-full absolute bottom-4 left-6 opacity-10"
                      style={{ background: item.color }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="text-sm font-medium mb-1" style={{ ...S.bodySm, fontWeight: 500, color: V("color-ink") }}>
                    {item.name}
                  </div>
                  <div className="text-xs" style={{ fontSize: "12px", color: V("color-mute") }}>
                    {item.category} &middot; View site &nearr;
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/made-in-webflow"
              className="inline-flex items-center"
              style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-pink") }}
            >
              Browse all showcase sites <Arrow />
            </a>
          </div>
        </Section>

        {/* ═══════ CTA SECTION ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)]"
          style={{ background: V("color-ink") }}
        >
          {/* Pink glow */}
          <div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-pink")} 0%, transparent 70%)`,
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10 text-center">
            <div className="max-w-[700px] mx-auto">
              <h2
                className="font-semibold leading-[1.04] mb-6"
                style={{ ...S.h2, color: V("color-canvas") }}
              >
                Ready to design without limits?
              </h2>
              <p className="mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Join the designers and teams who have made the switch to Kreature. Start building
                for free and see why designers love our visual development platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-pink"), color: "#fff" }}
                >
                  Start designing free <Arrow />
                </a>
                <a
                  href="/enterprise/contact-sales"
                  className="inline-flex items-center transition-colors"
                  style={{
                    ...S.btn,
                    background: "transparent",
                    color: V("color-canvas"),
                    border: `1px solid rgba(255,255,255,0.2)`,
                  }}
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        className="py-16 px-5 sm:px-8"
        style={{ borderTop: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(FOOTER).map(([heading, items]) => (
              <div key={heading}>
                <h4
                  className="font-semibold mb-6"
                  style={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px", color: V("color-ink") }}
                >
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item: string) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm hover:underline inline-flex items-center gap-1"
                        style={{ ...S.bodySm, color: V("color-body-mid") }}
                      >
                        {item}
                        {item === "AEO" && (
                          <span
                            className="text-[0.6rem] font-semibold uppercase"
                            style={{ color: V("color-accent-blue") }}
                          >
                            New
                          </span>
                        )}
                        {item === "Careers" && (
                          <span
                            className="text-[0.6rem] font-semibold uppercase"
                            style={{ color: V("color-accent-green") }}
                          >
                            We&apos;re hiring
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}
          >
            <p style={{ fontSize: "12px", color: V("color-mute") }}>
              &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: "12px", color: V("color-mute") }}>
              <a href="#" className="hover:underline">
                Made in Kreature
              </a>
              {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map((p) => (
                <a key={p} href="#" className="hover:underline">
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
