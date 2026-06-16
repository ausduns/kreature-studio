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
const AI_CAPABILITIES = [
  {
    title: "AI Site Builder",
    desc: "Generate a complete, custom website from a single prompt. Describe your brand, audience, and goals — Kreature's AI builds a fully responsive, on-brand site with copy, images, and structure in minutes.",
    icon: "🏗",
    cta: "Try AI Site Builder",
  },
  {
    title: "AI Copy Generator",
    desc: "Create compelling, SEO-optimized copy that converts. Generate headlines, body copy, meta descriptions, and CTAs tuned to your brand voice — with the ability to iterate and refine instantly.",
    icon: "✍",
    cta: "Generate copy",
  },
  {
    title: "AI Image Generation",
    desc: "Generate custom, on-brand imagery directly in your canvas. From hero backgrounds to product shots, create unique visuals that match your design system without leaving the editor.",
    icon: "🖼",
    cta: "Create images",
  },
  {
    title: "AI SEO Optimization",
    desc: "Automatically optimize every page for both traditional search engines and AI-powered answer engines. Get real-time suggestions for metadata, structure, schema, and content quality.",
    icon: "🔍",
    cta: "Optimize SEO",
  },
  {
    title: "AI Personalization",
    desc: "Deliver tailored experiences to every visitor. AI analyzes behavior patterns and dynamically adjusts content, CTAs, and layouts to maximize engagement and conversion for each audience segment.",
    icon: "🎯",
    cta: "Personalize",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Describe",
    desc: "Tell Kreature's AI what you need — a landing page, a full site, a blog post, or product imagery. Define your brand, audience, and goals in plain language.",
    highlight: "No technical skills required. Just describe your vision in natural language.",
  },
  {
    step: "02",
    title: "Generate",
    desc: "Watch as AI builds your site, writes your copy, and creates your images — all on-brand and production-ready. Review multiple variations and pick the one that fits.",
    highlight: "Generation happens in seconds, not days. Iterate as many times as you need.",
  },
  {
    step: "03",
    title: "Customize",
    desc: "Fine-tune every detail in the visual canvas. Adjust layouts, swap copy, refine images, and add interactions — with AI assisting at every step to keep things on brand.",
    highlight: "Full creative control with AI as your co-pilot, not your replacement.",
  },
];

const BENEFITS = [
  {
    title: "Speed",
    stat: "10x",
    label: "faster to launch",
    desc: "Go from idea to published site in hours, not weeks. AI handles the heavy lifting — copy, design, code — so your team can focus on strategy and refinement.",
    accent: "purple",
  },
  {
    title: "Quality",
    stat: "98%",
    label: "brand consistency",
    desc: "AI learns your brand guidelines and design system, ensuring every generated asset, page, and piece of copy stays on-brand — at any scale.",
    accent: "purple",
  },
  {
    title: "Scale",
    stat: "100s",
    label: "of pages at once",
    desc: "Generate entire content programs, localization variants, and personalization campaigns simultaneously. What used to take months now takes minutes.",
    accent: "purple",
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
  bg?: "soft" | "dark" | "purple";
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
            : bg === "purple"
            ? V("color-accent-purple")
            : V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

export default function AIFeaturePage() {
  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-ink") }}
        >
          {/* Background subtle grid texture */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(122,61,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Purple glow orbs */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-30"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-purple")} 0%, transparent 70%)`,
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-20"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-purple")} 0%, transparent 70%)`,
              transform: "translate(-20%, 30%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[800px]">
              {/* Eyebrow */}
              <p
                className="mb-4"
                style={{
                  ...S.eyebrow,
                  color: V("color-accent-purple"),
                  textTransform: "uppercase" as const,
                }}
              >
                Kreature AI
              </p>

              {/* H1 */}
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Build with AI
              </h1>

              {/* Subtext */}
              <p className="max-w-[650px] mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                From your first prompt to a fully published site — Kreature&apos;s AI works alongside your
                team to generate copy, design pages, create images, and optimize for search. Ship faster
                without compromising quality or brand.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-purple"), color: "#fff" }}
                >
                  Start building with AI <Arrow />
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

        {/* ═══════ AI CAPABILITIES ═══════ */}
        <Section>
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-purple"), textTransform: "uppercase" as const }}
            >
              Capabilities
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              AI that works the way you do
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Every AI capability is built directly into the Kreature platform — no plugins, no
              integrations, no switching tools. Just describe what you need and watch it happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
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
                  {cap.icon}
                </div>

                {/* Title */}
                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="mb-6" style={{ ...S.body, color: V("color-body-mid") }}>
                  {cap.desc}
                </p>

                {/* CTA link */}
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors hover:gap-2"
                  style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-purple") }}
                >
                  {cap.cta} <Arrow />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ HOW IT WORKS ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-purple"), textTransform: "uppercase" as const }}
            >
              How it works
            </p>
            <h2 className="font-semibold leading-[1.04]" style={{ ...S.h2, color: V("color-ink") }}>
              From idea to published in three steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="relative">
                {/* Step number */}
                <div
                  className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-none mb-4"
                  style={{ color: V("color-accent-purple"), opacity: 0.3 }}
                >
                  {step.step}
                </div>

                {/* Title */}
                <h3 className="font-semibold mb-3" style={{ ...S.h3, color: V("color-ink") }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-4" style={{ ...S.body, color: V("color-body") }}>
                  {step.desc}
                </p>

                {/* Highlight */}
                <div
                  className="rounded-lg p-4"
                  style={{
                    borderRadius: "6px",
                    background: V("color-canvas"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <p style={{ ...S.bodySm, color: V("color-accent-purple"), fontWeight: 500 }}>
                    {step.highlight}
                  </p>
                </div>

                {/* Connector line (not on last item) */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-[clamp(3rem,6vw,5rem)] right-0 w-8 h-[2px]"
                    style={{ background: V("color-hairline"), transform: "translateX(100%)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ BENEFITS ═══════ */}
        <Section>
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-purple"), textTransform: "uppercase" as const }}
            >
              Benefits
            </p>
            <h2 className="font-semibold leading-[1.04]" style={{ ...S.h2, color: V("color-ink") }}>
              Build faster. Build better. Build more.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {BENEFITS.map((b) => (
              <div key={b.title}>
                {/* Stat */}
                <div
                  className="font-semibold leading-none mb-2"
                  style={{ fontSize: "clamp(3rem,6vw,4.5rem)", color: V("color-accent-purple") }}
                >
                  {b.stat}
                </div>

                {/* Label */}
                <p
                  className="mb-4"
                  style={{ ...S.bodyLg, fontWeight: 500, color: V("color-ink") }}
                >
                  {b.label}
                </p>

                {/* Description */}
                <p style={{ ...S.body, color: V("color-body-mid") }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ CTA SECTION ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)]"
          style={{ background: V("color-ink") }}
        >
          {/* Purple glow */}
          <div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-purple")} 0%, transparent 70%)`,
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10 text-center">
            <div className="max-w-[700px] mx-auto">
              <h2
                className="font-semibold leading-[1.04] mb-6"
                style={{ ...S.h2, color: V("color-canvas") }}
              >
                Start building with AI
              </h2>
              <p className="mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Join 300,000+ teams using Kreature AI to build, manage, and optimize their web presence.
                Start for free — no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-purple"), color: "#fff" }}
                >
                  Get started free <Arrow />
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
