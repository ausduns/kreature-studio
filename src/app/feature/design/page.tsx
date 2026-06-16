"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── STYLES ─── */
const S = {
  h1: { fontSize: "clamp(3rem,6vw,80px)", fontWeight: 600, lineHeight: "1.04", letterSpacing: "-0.01em" } as React.CSSProperties,
  h2: { fontSize: "clamp(2rem,4.5vw,56px)", fontWeight: 600, lineHeight: "1.04", letterSpacing: "-0.01em" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  bodyLg: { fontSize: "20px", lineHeight: 1.5, fontWeight: 400 } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  eyebrow: { fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, padding: "14px 24px", borderRadius: "6px" } as React.CSSProperties,
  label: { fontSize: "13px", fontWeight: 500, letterSpacing: "0.02em" } as React.CSSProperties,
};

/* ─── DATA ─── */

const HERO_CARDS = [
  {
    title: "Build exactly what you want",
    desc: "Turn bold ideas into high-impact web experiences that reflect your creative vision without compromise.",
    img: "https://cdn.prod.website-files.com/5e4b18f08b44e3e6e4e4e4e4/680fb9c709dd63aab7a33448_hero-design-1.jpg",
  },
  {
    title: "Stay consistent and on-brand",
    desc: "With Kreature, every web experience — from the biggest campaign to the smallest button — reflects your brand.",
    img: "https://cdn.prod.website-files.com/5e4b18f08b44e3e6e4e4e4e4/680fb9c709dd63aab7a33448_hero-design-2.jpg",
  },
  {
    title: "Find more room for creativity with AI",
    desc: "Streamline busywork with Kreature’s platform-wide AI capabilities so you can focus on shaping trends and crafting brand experiences.",
    img: "https://cdn.prod.website-files.com/5e4b18f08b44e3e6e4e4e4e4/680fb9c709dd63aab7a33448_hero-design-3.jpg",
  },
];

const SHOWCASE_SITES = [
  { name: "Muse", creator: "Leanne Macaspac", tags: ["Customer", "Interactions w/ GSAP"] },
  { name: "Cyphr Studio", creator: "Ilja van Eck", tags: ["Customer", "Interactions w/ GSAP"] },
  { name: "Dropbox Dash", creator: "", tags: ["Customer", "Interactions w/ GSAP"] },
  { name: "Sculpt", creator: "Clay", tags: ["Customer", "CMS"] },
  { name: "Infinite Machine", creator: "DivBlockers", tags: ["Customer"] },
  { name: "Graintouch", creator: "Iorama Studio", tags: ["Customer"] },
  { name: "Bindery", creator: "RNR Creative Studio", tags: ["Customer", "Interactions"] },
  { name: "Nite Riot", creator: "BL/S® Studio", tags: ["Customer", "Interactions w/ GSAP"] },
];

const STRUCTURE_TABS = [
  {
    title: "Add page elements",
    desc: "Drag in unstyled HTML elements to build your site from the ground up. Use the Quick Stack element to rapidly create structured layouts, or drop in pre-built elements like sliders, tabs, and background videos to accelerate your workflow.",
  },
  {
    title: "Keep elements organized",
    desc: "View and organize your element structure in the Navigator panel. Keep your document hierarchy clean, semantic, and accessible — ensuring screen readers and search engines understand your content.",
  },
  {
    title: "Design with real content",
    desc: "Work directly with CMS data and ecommerce products to build your site with real content — not placeholder data. Design around actual copy, images, and product information from day one.",
    cta: "Discover Kreature’s CMS",
  },
  {
    title: "Extend with code components",
    desc: "Add advanced UI elements like dynamic ROI calculators, store locators, and data integrations using code. Import React components directly into Kreature for use on the canvas.",
    cta: "Learn about code components",
  },
];

const STYLE_TABS = [
  {
    title: "Control the layout",
    desc: "From flexbox and CSS grid to inline block or absolute positioning, you have complete control over layout. Visually build complex, responsive layouts that generate clean, production-ready code.",
  },
  {
    title: "Fine-tune typography",
    desc: "Use any font, and adjust everything from tracking to line height. Create type scales, set responsive font sizes, and ensure your typography looks perfect on every screen.",
  },
  {
    title: "Build advanced animations visually",
    desc: "Create interactive site experiences that differentiate, delight, and convert — no code required. Build scroll-triggered animations, hover effects, and complex timeline-based interactions powered by GSAP.",
    cta: "Discover interactions",
  },
  {
    title: "Design responsively — and accessibly",
    desc: "Preview and adjust your layouts for every screen size in one view. Build sites that meet accessibility standards with semantic HTML, ARIA labels, and built-in contrast checking.",
  },
];

const AI_FEATURES = [
  {
    title: "Build a site",
    desc: "Generate a complete, custom website from a single prompt using Kreature’s AI site builder — no design or technical expertise needed.",
    cta: "Try AI site builder",
  },
  {
    title: "Improve SEO and AEO",
    desc: "Run sitewide audits and get AI-generated actionable suggestions to improve your visibility across both traditional search engines and AI-powered answer engines.",
    cta: "Learn more",
  },
  {
    title: "Generate code components",
    desc: "Build, customize, and reuse React components natively in Kreature with AI. Generate production-ready components from plain language descriptions.",
    cta: "Learn more",
  },
  {
    title: "Generate copy",
    desc: "Deliver content that converts by generating first drafts, developing content variants, and publishing — right within Kreature.",
    cta: "Explore documentation",
  },
  {
    title: "Generate CMS Collection items",
    desc: "Focus on creative direction, not repetitive tasks, by delegating CMS item creation and page structuring to Kreature AI.",
    cta: "Explore documentation",
  },
  {
    title: "Design sections",
    desc: "Build even faster by generating new page sections using your site’s existing design system. AI creates on-brand sections that match your visual language.",
    cta: "Explore documentation",
    beta: true,
  },
  {
    title: "Get help",
    desc: "Get the answers you need from the Kreature Help Center — delivered to you right where you are, without leaving the canvas.",
    cta: "Explore documentation",
    beta: true,
  },
];

const COLLABORATION_TABS = [
  {
    title: "Edit content in a visual canvas",
    desc: "Empower clients and colleagues to update content directly from the canvas — without breaking the design. Content editors can change text, swap images, and manage CMS items in a controlled environment.",
  },
  {
    title: "Equip marketers with drag-and-drop templates",
    desc: "Give teams the power to create on-brand pages faster than ever with drag-and-drop page building. Marketers can assemble landing pages from approved components without touching the underlying design.",
  },
  {
    title: "Empower devs to use their favorite tools",
    desc: "Import React components from an external code base into Kreature for use directly on the canvas. Developers work in their preferred environment while designers use those components visually.",
  },
];

const DESIGN_SYSTEM_CARDS = [
  {
    title: "Create reusable components",
    desc: "Turn nav bars, footers, signup forms, and more into components that you can reuse, maintain, and modify across your entire organization.",
    cta: "Discover shared libraries",
  },
  {
    title: "Create reusable classes",
    desc: "Work with a CSS-based class system to make style changes across multiple elements at the same time. Update once, cascade everywhere.",
    cta: "Learn about classes",
  },
  {
    title: "Manage component variants in one spot",
    desc: "View and edit component variants on a dedicated canvas for instant visibility into cascading changes across every instance.",
  },
  {
    title: "Extend your existing design system",
    desc: "Import code components, use variables to connect external design systems, and cascade changes with classes — keeping everything in sync.",
  },
];

const ALL_FEATURES = [
  {
    group: "Build and Design",
    items: ["Design", "Edit content", "Interactions", "Page Building", "Collaboration", "Shared Libraries"],
  },
  {
    group: "Manage",
    items: ["CMS", "Hosting", "Security", "Localization"],
  },
  {
    group: "Optimize",
    items: ["Analyze", "Optimize", "SEO", "AEO"],
  },
  {
    group: "Extend",
    items: ["Apps", "Figma to Kreature", "DevLink", "Code Generation", "Ecommerce", "Headless CMS APIs"],
  },
];

const FAQ_ITEMS = [
  {
    q: "How can I integrate Figma designs into Kreature to streamline my website creation process?",
    a: "The Figma to Kreature plugin converts your static Figma designs into clean, production-ready code while preserving your design system integrity. Components, auto layout, and text styles map directly to Kreature’s visual canvas, so your design intent carries through without manual translation.",
  },
  {
    q: "How do I maintain brand consistency across multiple website pages?",
    a: "Kreature’s class-based styling system, design tokens, and reusable components make brand consistency effortless. Create CSS classes, variables, and components once — then reuse them across your entire site. Update a class or component in one place, and changes cascade everywhere that element appears.",
  },
  {
    q: "What makes Kreature different from other website design tools?",
    a: "Kreature generates production-ready HTML, CSS, and JavaScript as you design — not bloated, proprietary code. You get the full power of CSS Grid, Flexbox, custom animations, and semantic HTML in a visual canvas. Plus, you can publish directly to enterprise-grade hosting or export clean code to use anywhere.",
  },
  {
    q: "What website design features does Kreature offer?",
    a: "Kreature includes a visual design canvas, CMS, Flexbox and CSS Grid layout, custom animations powered by GSAP, reusable components and Shared Libraries, enterprise-grade hosting with SSL, SEO and AEO tools, dynamic content management, and team collaboration with roles and permissions — all in one platform.",
  },
  {
    q: "How can I design my own website without coding experience?",
    a: "Kreature’s drag-and-drop interface lets you add and arrange HTML elements visually, then style them with intuitive controls — no coding required. The platform generates clean, semantic code behind the scenes. You can also manage dynamic content through the CMS and create animations visually, all without writing a single line of code.",
  },
];

const CUSTOMER_STATS = [
  { stat: "10x", label: "In cost savings annually", company: "NCR" },
  { stat: "67%", label: "decrease in dev ticketing", company: "Dropbox" },
  { stat: "$6M", label: "in cost savings annually", company: "Orangetheory Fitness" },
  { stat: "56%", label: "increase in form fills", company: "Walker & Dunlop" },
  { stat: "1,170%", label: "increase in traffic YoY", company: "DocuSign" },
  { stat: "$200M", label: "in new pipeline generated post-site launch", company: "ABM" },
  { stat: "+20%", label: "increase in site-wide conversion", company: "Lattice" },
];

/* ─── SHARED COMPONENTS ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Section({
  bg,
  children,
  className,
}: {
  bg?: "soft" | "dark";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)] ${className || ""}`}
      style={{
        background: bg === "soft" ? V("color-canvas-soft") : bg === "dark" ? V("color-ink") : V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-[0.7rem] font-semibold uppercase ml-1.5 align-middle"
      style={{ background: V("color-accent-blue"), color: "#fff" }}
    >
      {children}
    </span>
  );
}

function CardWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl p-[clamp(1.5rem,2.5vw,2rem)] transition-all group ${className || ""}`}
      style={{
        borderRadius: "12px",
        border: `1px solid ${V("color-hairline")}`,
        background: V("color-canvas"),
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {children}
    </div>
  );
}

/* ─── PAGE ─── */
export default function DesignFeaturePage() {
  const [structureTab, setStructureTab] = useState<"structure" | "style">("structure");

  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(4rem,8vw,6rem)]"
          style={{ background: V("color-canvas") }}
        >
          <div className="max-w-[1440px] mx-auto">
            {/* Heading area */}
            <div className="max-w-[850px] mx-auto text-center mb-16">
              <h1
                className="font-semibold mb-6 tracking-tight"
                style={{ ...S.h1, color: V("color-ink") }}
              >
                Creativity without constraints
              </h1>
              <p className="max-w-[650px] mx-auto mb-10" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
                Build brand-forward web experiences with complete creative freedom. Design pixel-perfect
                layouts, craft custom animations, and bring your boldest ideas to life &mdash; all in a
                visual canvas that generates clean, production-ready code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors hover:opacity-90"
                  style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
                >
                  Get started &mdash; it&apos;s free
                </a>
                <a
                  href="#"
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

            {/* Three hero cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {HERO_CARDS.map((card) => (
                <CardWrapper key={card.title}>
                  {/* Image placeholder */}
                  <div
                    className="w-full rounded-lg mb-6 overflow-hidden"
                    style={{
                      borderRadius: "8px",
                      background: V("color-canvas-soft"),
                      aspectRatio: "16/10",
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center" style={{ background: V("color-canvas-mid") }}>
                      <span className="text-4xl opacity-20" style={{ color: V("color-accent-blue") }}>
                        {card.title.includes("Build") ? "■" : card.title.includes("consistent") ? "◆" : "✦"}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                    {card.title}
                  </h3>
                  <p style={{ ...S.body, color: V("color-body-mid") }}>{card.desc}</p>
                </CardWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ MADE IN KREATURE SHOWCASE ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p className="mb-4" style={{ ...S.eyebrow, color: V("color-accent-blue") }}>
              #MadeinKreature
            </p>
            <h2 className="font-semibold" style={{ ...S.h2, color: V("color-ink") }}>
              Bold ideas brought to life
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SHOWCASE_SITES.map((site) => (
              <div
                key={site.name}
                className="rounded-lg overflow-hidden group cursor-pointer transition-all hover:shadow-md"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                {/* Thumbnail placeholder */}
                <div
                  className="w-full overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${V("color-canvas-mid")} 0%, ${V("color-canvas-soft")} 100%)`,
                    aspectRatio: "16/10",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className="text-5xl font-bold opacity-10 select-none"
                      style={{ color: V("color-accent-blue") }}
                    >
                      {site.name.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="text-sm font-semibold mb-0.5" style={{ color: V("color-ink") }}>
                    {site.name}
                  </div>
                  {site.creator && (
                    <div className="text-xs mb-1.5" style={{ color: V("color-mute") }}>
                      By {site.creator}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] px-1.5 py-0.5 rounded font-medium"
                        style={{
                          background: V("color-canvas-soft"),
                          color: V("color-body-mid"),
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center mt-3 text-xs font-medium hover:underline"
                    style={{ color: V("color-accent-blue") }}
                  >
                    Visit website <Arrow />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/made-in-webflow"
              className="inline-flex items-center text-sm font-medium hover:underline"
              style={{ color: V("color-accent-blue") }}
            >
              Browse all showcase sites <Arrow />
            </a>
          </div>
        </Section>

        {/* ═══════ STRUCTURE AND STYLE ═══════ */}
        <Section>
          <div className="mb-14">
            <p className="mb-4" style={{ ...S.eyebrow, color: V("color-accent-blue") }}>
              Structure and style
            </p>
            <h2 className="font-semibold" style={{ ...S.h2, color: V("color-ink") }}>
              Turn design vision into reality
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-10 p-1 rounded-lg w-fit" style={{ background: V("color-canvas-soft"), borderRadius: "10px" }}>
            {(["structure", "style"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setStructureTab(tab)}
                className="px-6 py-2.5 rounded-md text-sm font-medium transition-all capitalize"
                style={{
                  borderRadius: "7px",
                  background: structureTab === tab ? V("color-canvas") : "transparent",
                  color: structureTab === tab ? V("color-ink") : V("color-body-mid"),
                  boxShadow: structureTab === tab ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Structure tab content */}
          {structureTab === "structure" && (
            <div className="grid md:grid-cols-2 gap-6">
              {STRUCTURE_TABS.map((item) => (
                <CardWrapper key={item.title}>
                  <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                    {item.title}
                  </h3>
                  <p className="mb-4" style={{ ...S.body, color: V("color-body-mid") }}>
                    {item.desc}
                  </p>
                  {item.cta && (
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      style={{ color: V("color-accent-blue") }}
                    >
                      {item.cta} <Arrow />
                    </a>
                  )}
                </CardWrapper>
              ))}
            </div>
          )}

          {/* Style tab content */}
          {structureTab === "style" && (
            <div className="grid md:grid-cols-2 gap-6">
              {STYLE_TABS.map((item) => (
                <CardWrapper key={item.title}>
                  <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                    {item.title}
                  </h3>
                  <p className="mb-4" style={{ ...S.body, color: V("color-body-mid") }}>
                    {item.desc}
                  </p>
                  {item.cta && (
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      style={{ color: V("color-accent-blue") }}
                    >
                      {item.cta} <Arrow />
                    </a>
                  )}
                </CardWrapper>
              ))}
            </div>
          )}
        </Section>

        {/* ═══════ LESS BUSYWORK (AI FEATURES) ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <h2 className="font-semibold mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Less busywork, more brand-building
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Kreature&apos;s AI capabilities handle the repetitive tasks so you can focus on what matters
              &mdash; crafting exceptional brand experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_FEATURES.map((feat) => (
              <CardWrapper key={feat.title}>
                <h3 className="font-semibold mb-2 flex items-center" style={{ ...S.h4, color: V("color-ink") }}>
                  {feat.title}
                  {feat.beta && <Badge>Beta</Badge>}
                </h3>
                <p className="mb-5" style={{ ...S.body, color: V("color-body-mid") }}>
                  {feat.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                  style={{ color: V("color-accent-blue") }}
                >
                  {feat.cta} <Arrow />
                </a>
              </CardWrapper>
            ))}
          </div>
        </Section>

        {/* ═══════ COLLABORATION ═══════ */}
        <Section>
          <div className="mb-14">
            <p className="mb-4" style={{ ...S.eyebrow, color: V("color-accent-blue") }}>
              Collaboration
            </p>
            <h2 className="font-semibold mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Real empowerment &mdash; without the brand risk
            </h2>
            <p className="max-w-[650px] mb-6" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Equip your whole team with everything they need to build faster &mdash; while staying
              consistently on-brand.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium hover:underline"
              style={{ color: V("color-accent-blue") }}
            >
              Learn about collaborating in Kreature <Arrow />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {COLLABORATION_TABS.map((item) => (
              <CardWrapper key={item.title}>
                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {item.title}
                </h3>
                <p style={{ ...S.body, color: V("color-body-mid") }}>{item.desc}</p>
              </CardWrapper>
            ))}
          </div>
        </Section>

        {/* ═══════ DESIGN SYSTEMS ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p className="mb-4" style={{ ...S.eyebrow, color: V("color-accent-blue") }}>
              Design systems
            </p>
            <h2 className="font-semibold mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Stay on brand as you scale
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Make sure every experience stays on-brand and consistent with built-in design system features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {DESIGN_SYSTEM_CARDS.map((card) => (
              <CardWrapper key={card.title}>
                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {card.title}
                </h3>
                <p className="mb-4" style={{ ...S.body, color: V("color-body-mid") }}>
                  {card.desc}
                </p>
                {card.cta && (
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium hover:underline"
                    style={{ color: V("color-accent-blue") }}
                  >
                    {card.cta} <Arrow />
                  </a>
                )}
              </CardWrapper>
            ))}
          </div>
        </Section>

        {/* ═══════ LAUNCH ═══════ */}
        <Section>
          <div className="mb-14">
            <h2 className="font-semibold mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              One platform, two ways to launch
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Just hit Publish to launch your site to a world-class hosting stack &mdash; or export all
              your HTML, CSS, JavaScript, images, and other assets on our paid plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CardWrapper>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: V("color-canvas-soft") }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#146ef5" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2" style={{ ...S.h4, color: V("color-ink") }}>
                Publish to hosting
              </h3>
              <p style={{ ...S.body, color: V("color-body-mid") }}>
                Launch your site to Kreature&apos;s enterprise-grade hosting with a global CDN, automatic
                SSL, and 99.99% uptime. Push updates instantly with one click.
              </p>
            </CardWrapper>

            <CardWrapper>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: V("color-canvas-soft") }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#146ef5" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2" style={{ ...S.h4, color: V("color-ink") }}>
                Export code
              </h3>
              <p style={{ ...S.body, color: V("color-body-mid") }}>
                Export clean, semantic HTML, CSS, JavaScript, images, and assets. Use your code anywhere
                &mdash; host it yourself, hand it to developers, or integrate with any stack.
              </p>
            </CardWrapper>
          </div>
        </Section>

        {/* ═══════ TESTIMONIAL ═══════ */}
        <Section bg="soft">
          <div className="max-w-[800px] mx-auto text-center">
            <blockquote
              className="mb-8 mx-auto"
              style={{
                fontSize: "clamp(1.5rem,3vw,32px)",
                fontWeight: 500,
                lineHeight: "1.3",
                color: V("color-ink"),
              }}
            >
              &ldquo;Kreature has changed everything. Now we can actually build what my team designs,
              pixel for pixel.&rdquo;
            </blockquote>
            <div className="mb-8">
              <div className="font-semibold mb-1" style={{ color: V("color-ink") }}>
                Alice Bybee
              </div>
              <div className="text-sm" style={{ color: V("color-mute") }}>
                Director of Brand Design, Lattice
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium hover:underline"
              style={{ color: V("color-accent-blue") }}
            >
              Customer story <Arrow />
            </a>
          </div>
        </Section>

        {/* ═══════ ALL FEATURES ═══════ */}
        <Section>
          <div className="mb-14">
            <h2 className="font-semibold mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              All Kreature features
            </h2>
            <p style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Everything you need to build, manage, optimize, and extend your web presence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ALL_FEATURES.map((group) => (
              <div key={group.group}>
                <h3
                  className="font-semibold mb-4 pb-3"
                  style={{
                    ...S.label,
                    color: V("color-ink"),
                    borderBottom: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  {group.group}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm hover:underline inline-flex items-center gap-1.5"
                        style={{ color: V("color-body-mid") }}
                      >
                        {item}
                        {item === "AEO" && <Badge>New</Badge>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ FAQ ═══════ */}
        <Section bg="soft">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-semibold mb-12 text-center" style={{ ...S.h2, color: V("color-ink") }}>
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl p-[clamp(1.25rem,2vw,1.75rem)] cursor-pointer transition-colors"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <summary className="flex items-center justify-between font-semibold list-none" style={{ color: V("color-ink") }}>
                    <span className="pr-4" style={{ fontSize: "18px", lineHeight: "1.4" }}>
                      {item.q}
                    </span>
                    <span
                      className="text-xl shrink-0 transition-transform group-open:rotate-45"
                      style={{ color: V("color-mute") }}
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
                    <p style={{ ...S.body, color: V("color-body-mid") }}>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════ CUSTOMER STATS ═══════ */}
        <Section>
          <div className="mb-14">
            <h2 className="font-semibold mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Customer results
            </h2>
            <p style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              See how teams are achieving more with Kreature.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CUSTOMER_STATS.map((item) => (
              <CardWrapper key={item.company}>
                <div
                  className="font-semibold leading-none mb-3"
                  style={{
                    fontSize: "clamp(2rem,3.5vw,3rem)",
                    color: V("color-accent-blue"),
                  }}
                >
                  {item.stat}
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: V("color-ink") }}>
                  {item.label}
                </p>
                <p className="text-xs font-medium" style={{ color: V("color-mute") }}>
                  {item.company}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-medium mt-3 hover:underline"
                  style={{ color: V("color-accent-blue") }}
                >
                  Read story <Arrow />
                </a>
              </CardWrapper>
            ))}
          </div>
        </Section>

        {/* ═══════ CTA SECTION ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)] text-center"
          style={{ background: V("color-accent-blue") }}
        >
          {/* Decorative pattern */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[650px] mx-auto">
              <h2
                className="font-semibold mb-6"
                style={{ ...S.h2, color: "#ffffff" }}
              >
                Start building for free
              </h2>
              <p className="mb-10 text-white/80" style={{ ...S.bodyLg }}>
                Try Kreature for as long as you like with our free Starter plan. Purchase a paid Site
                plan to publish, host, and unlock additional features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{
                    ...S.btn,
                    background: "#ffffff",
                    color: V("color-accent-blue"),
                    fontWeight: 600,
                  }}
                >
                  Get started &mdash; it&apos;s free
                </a>
                <a
                  href="#"
                  className="inline-flex items-center transition-colors"
                  style={{
                    ...S.btn,
                    background: "transparent",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  Watch demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <Footer />
    </div>
  );
}
