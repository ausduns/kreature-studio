"use client";

import Footer from "@/components/Footer";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── STYLES ─── */
const S = {
  h1: {
    fontSize: "clamp(48px, 6vw, 80px)",
    fontWeight: 600,
    lineHeight: "1.04",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,
  h2: {
    fontSize: "clamp(36px, 4.5vw, 56px)",
    fontWeight: 600,
    lineHeight: "1.04",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,
  h3: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "1.3",
  } as React.CSSProperties,
  h4: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "1.4",
  } as React.CSSProperties,
  body: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "1.6",
  } as React.CSSProperties,
  bodyLg: {
    fontSize: "clamp(16px, 1.5vw, 20px)",
    fontWeight: 400,
    lineHeight: "1.5",
  } as React.CSSProperties,
  bodySm: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "1.6",
  } as React.CSSProperties,
  caption: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "1.4",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  } as React.CSSProperties,
  btn: {
    fontSize: "16px",
    fontWeight: 500,
    padding: "14px 28px",
    borderRadius: "6px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "background 0.2s ease",
  } as React.CSSProperties,
  pill: {
    fontSize: "14px",
    fontWeight: 500,
    padding: "10px 20px",
    borderRadius: "100px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.2s ease, border-color 0.2s ease",
  } as React.CSSProperties,
};

/* ─── SHARED COMPONENTS ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  if (variant === "secondary") {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-2 transition-colors hover:bg-white/5"
        style={{
          ...S.btn,
          background: "transparent",
          color: "#ffffff",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 transition-colors hover:opacity-90"
      style={{
        ...S.btn,
        background: "#146ef5",
        color: "#fff",
      }}
    >
      {children}
    </a>
  );
}

/* ─── DATA ─── */

const TRUSTED_BY = [
  {
    name: "Ideo",
    src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439dc_ideo-logo.svg",
  },
  {
    name: "Monday.com",
    src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439c8_monday.com.svg",
  },
  {
    name: "BBDO",
    src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439db_bbdo-logo.svg",
  },
  {
    name: "The New York Times",
    src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439d9_nytimes.svg",
  },
  {
    name: "TED",
    src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439d8_TED.svg",
  },
  {
    name: "DocuSign",
    src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439c9_Docusign-dark.svg",
  },
];

const PROMPT_CHIPS = ["Fintech Enterprise", "AI startup", "Design agency"];

const BUILD_CARDS = [
  {
    title: "Build a site",
    description:
      "Bring your creative vision to life with Kreature's AI site builder — no design or technical expertise needed.",
    cta: "Try AI site builder",
    href: "/signup",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8abb1e8603c3e989a1866_09a4c0a77f0f78f4e3d59949760399b1_ai_design-assistant_build.avif",
  },
  {
    title: "Improve SEO and AEO",
    description:
      "Grow your reach and relevance through sitewide audits and AI-generated, actionable suggestions to improve both SEO and AEO.",
    cta: "Learn more",
    href: "/feature/seo",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/690216a62f7f3a2766e1eacb_2119a583ddaeafec69bca8b6f685eb93_ai_design-assistant_seo.webp",
  },
  {
    title: "Generate code components",
    description:
      "Build, customize, and reuse React components natively in Kreature with AI.",
    cta: "Learn more",
    href: "/signup",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/69f346baa52681322b2db085_ai-tab__ai-code-components.avif",
  },
  {
    title: "Generate copy",
    description:
      "Deliver content that converts by generating first drafts, developing content variants, and publishing — right within Kreature.",
    cta: "Explore documentation",
    href: "/signup",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8abb15cf9b445e132bf3d_ea046c3c4788df295d1750d70f6f24d2_ai_design-assistant_write.webp",
  },
  {
    title: "Generate CMS Collection items",
    description:
      "Focus on creative direction, not repetitive tasks, by delegating CMS item creation and page structuring to Kreature AI.",
    cta: "Explore documentation",
    href: "/signup",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8abb14effacd0537311b6_a671e2811bfc69dde5f3d8b9d540c031_ai_design-assistant_content.webp",
  },
  {
    title: "Design sections",
    description:
      "Build even faster by generating new page sections using your site's existing design system.",
    cta: "Explore documentation",
    href: "/signup",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8abb13d5c5f0ce0565466_89780b9d9a466996500e9664f21ef8c6_ai_design-assistant_design.webp",
    beta: true,
  },
  {
    title: "Get help",
    description:
      "Get the answers you need from the Kreature Help Center — delivered to you right where you are.",
    cta: "Explore documentation",
    href: "/signup",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8abb113f6e82f69aacdf2_5319ba81561939bc4632956528c86595_ai_design-assistant_learn.webp",
    beta: true,
  },
];

const IDEA_BENEFITS = [
  {
    title: "Accelerate creativity",
    description:
      "Accelerate creativity and remove blockers so you can move faster, explore more ideas, and unlock better outcomes with less friction.",
    icon: "https://dhygzobemt712.cloudfront.net/Icons/Light/64px/PublishDesigner.svg",
  },
  {
    title: "Optimize SEO, AEO, GEO",
    description:
      "Optimize SEO, AEO, GEO, site performance, and engagement with AI-powered insights and action so your site performs better for both humans and machines.",
    icon: "https://dhygzobemt712.cloudfront.net/Icons/Light/64px/ChartLineIncrease.svg",
  },
  {
    title: "Scale AI safely",
    description:
      "Scale how your team uses AI safely with collaborative workflows, guardrails, and easy entry points to shape, guide, and approve AI-generated work.",
    icon: "https://dhygzobemt712.cloudfront.net/Icons/Light/64px/SiteScale.svg",
  },
];

const OPTIMIZE_CARDS = [
  {
    title: "Deliver personalized experiences at scale",
    description:
      "Serve the right experience to the right audience — at scale — using intelligent generation and structure.",
    cta: "Explore Optimize",
    href: "/feature/optimize",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b89bef1bd67abb79c12c8b_ai_ww-2-card-section_left.webp",
  },
  {
    title: "Customize your site for a global audience",
    description:
      "Streamline total site or individual element localization with machine learning powered translation.",
    cta: "Explore Localization",
    href: "/feature/localization",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b89beea70a697317847896_ai_ww-2-card-section_right.webp",
  },
];

const EXTEND_CARDS = [
  {
    title: "AI-powered apps",
    description:
      "Connect your site to the AI-powered apps you already use — or find new ones in our Marketplace.",
    cta: "Explore apps",
    href: "/apps",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b89beeb19af83f52d421e5_75acd606cfe3b07f0bed3a30d8810f4b_ai_streamlined-2-card-section_left.webp",
  },
  {
    title: "Kreature MCP server",
    description:
      "Securely connect Kreature to your IDE or agent platform of choice — such as Cursor, Claude, Windsurf, or Postman — and streamline CMS management, SEO, site maintenance, and more.",
    cta: "Explore the MCP server",
    href: "/signup",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b89bef23f6caf64c2ed881_eb2ce2830175bea492086d7adb5dd208_ai_streamlined-2-card-section_right.webp",
  },
];

const PARTNER_LOGOS = [
  {
    name: "Anthropic",
    src: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/anthropic.svg",
  },
  {
    name: "Atlassian",
    src: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/atlassian.svg",
  },
  {
    name: "OpenAI",
    src: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/open-ai.svg",
  },
  {
    name: "Cursor",
    src: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/cursor.svg",
  },
  {
    name: "Postman",
    src: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/postman.svg",
  },
  {
    name: "Windsurf",
    src: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/windsurf.svg",
  },
];

const FAQ_ITEMS = [
  {
    question: "How does Kreature use AI?",
    answer:
      "AI is woven throughout the Kreature platform, helping you design, build, and optimize faster. In-context actions speed up design, content creation, and optimization tasks. The AI Assistant provides a conversational experience for generating and iterating on everything from copy to page sections. Kreature Optimize uses AI for experimentation and personalization, while Localization leverages machine learning for translation. These AI capabilities help teams move from idea to impact faster.",
  },
  {
    question: "What can Kreature AI do?",
    answer:
      "Kreature AI is embedded directly into your workflow: generate entire sites from a prompt, create and refine copy, produce structured CMS content at scale, extend experiences with sections and code components, improve SEO and AEO, optimize site performance, localize content, and get in-context guidance when you need it — all without leaving the platform.",
  },
  {
    question: "Does Kreature have an AI website builder?",
    answer:
      "Yes. Kreature's AI site builder generates entire websites with scalable design systems from your prompts in minutes — complete with copy, structure, and styling. You can then customize every detail in the visual canvas. It's the fastest way to go from idea to a fully responsive, on-brand site.",
  },
  {
    question: "Can I integrate third-party AI tools with Kreature?",
    answer:
      "Absolutely. The Kreature Marketplace features AI-powered apps from partners like Adobe Express, Jasper, and Relume. Plus, the Kreature MCP server lets you securely connect Kreature to your IDE or AI agent platform of choice — including Cursor, Claude, Windsurf, and Postman — for streamlined CMS management, SEO, and site maintenance.",
  },
  {
    question:
      "What makes Kreature's approach to AI different from other website builders?",
    answer:
      "Kreature helps you build sites faster without locking you into rigid templates or preventing you from customizing code. Our AI extends beyond the initial build — you get A/B testing and personalization for ongoing optimization, plus content management tools that scale with your business. You're always in control, with guardrails that protect your brand and data.",
  },
  {
    question: "Are there any limitations to Kreature's AI features?",
    answer:
      "Access to certain AI capabilities varies by workspace plan and any applicable add-ons like Optimize and Localization. Some generative AI features have usage limits based on your plan's AI credit allocation. You can always track your usage via the AI usage dashboard and purchase additional credits if needed.",
  },
  {
    question: "How do I get started using Kreature's AI features?",
    answer:
      "Getting started is simple. Create a free Kreature account, and you'll have immediate access to core AI features. Generative AI capabilities are enabled by default, though workspaces can opt out. Just click the AI icon in the navigation to start building, generating copy, or optimizing your site with AI assistance.",
  },
  {
    question: "How do AI credits work?",
    answer:
      "Kreature uses a credit-based system across workspace plans. Each plan includes a monthly or yearly credit allotment based on your plan type. Self-serve plans reset monthly; Team and Enterprise plans reset yearly. Only a subset of advanced AI features consume credits — many everyday AI capabilities are included at no additional credit cost. Track your usage anytime via the AI usage dashboard.",
  },
];

const MADE_IN_KREATURE = [
  {
    name: "Jasper AI",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b9ee9339be3633ac100f6f_main_miw_sites_01.avif",
  },
  {
    name: "Aether 1",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b9ee93b378e00e7af22358_main_miw_sites_02.avif",
  },
  {
    name: "Cula",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b9ee9239be3633ac100f58_main_miw_sites_03.avif",
  },
  {
    name: "Palmer Dinnerware",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b9ee92efe24074c75ffed0_main_miw_sites_04.avif",
  },
  {
    name: "Siena Film Festival",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b9ee931c01ec299dc30d84_main_miw_sites_05.avif",
  },
  {
    name: "Normal Computing",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b85448e80f2aef9f59b6fb_158d56d074b6096d5f6e86ac7094e6cb_interactions-hero-04.avif",
  },
  {
    name: "Giulia Gartner",
    image:
      "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b89b6b950c3a56ec73d48f_interactions_miw-slider_cloneable-asset_07.webp",
  },
];

const CUSTOMER_STORIES = [
  {
    company: "NCR",
    stat: "10x",
    label: "In cost savings annually",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/ncr.svg",
    href: "#",
  },
  {
    company: "Dropbox Sign",
    stat: "67%",
    label: "decrease in dev ticketing",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/dropbox.svg",
    href: "#",
  },
  {
    company: "Orangetheory Fitness",
    stat: "$6M",
    label: "in cost savings annually",
    logo:
      "https://dhygzobemt712.cloudfront.net/Web/logos/dark/orangetheory.svg",
    href: "#",
  },
  {
    company: "Walker & Dunlop",
    stat: "56%",
    label: "increase in form fills",
    logo:
      "https://dhygzobemt712.cloudfront.net/Web/logos/dark/walker-dunlop.svg",
    href: "#",
  },
  {
    company: "DocuSign",
    stat: "1,170%",
    label: "increase in traffic YoY",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/docusign.svg",
    href: "#",
  },
  {
    company: "ABM",
    stat: "$200M",
    label: "in new pipeline generated",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/abm.svg",
    href: "#",
  },
  {
    company: "Lattice",
    stat: "+20%",
    label: "increase in site-wide conversion",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/lattice.svg",
    href: "#",
  },
];

/* ─── PAGE ─── */
export default function AIFeaturePage() {
  return (
    <div
      className="page-wrapper"
      style={{ background: "#080808", color: "rgba(255,255,255,0.7)" }}
    >
      <main>
        {/* ════════════════════════════════════════════════════════
            HERO SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(5rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: "#080808" }}
        >
          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* H1 */}
            <div className="max-w-[900px] mx-auto text-center">
              <h1
                className="mb-8"
                style={{ ...S.h1, color: "#ffffff" }}
              >
                AI that turns creativity into conversions
              </h1>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <CTAButton href="/signup">Get started — it&apos;s free</CTAButton>
                <CTAButton href="/contact-sales" variant="secondary">
                  Talk to sales
                </CTAButton>
              </div>
            </div>

            {/* Trusted by */}
            <div className="text-center mb-10">
              <p
                className="mb-8"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Trusted by teams at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {TRUSTED_BY.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Hero cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto mt-12">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c87deb91458a9a526c8979_dce175c0945c52cf7b25d67f06d26e5d_ai_hero_card-left-b.webp"
                  alt="AI site builder preview"
                  className="w-full h-auto"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b9e56224ebd85dba9b68fc_43f3204ba4558b7da233b3e42b7d869a_ai_hero_card-right.webp"
                  alt="AI design assistant preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Background subtle glow */}
          <div
            className="absolute top-0 left-1/2 w-[800px] h-[500px] rounded-full pointer-events-none z-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(20,110,245,0.3) 0%, transparent 70%)",
              transform: "translate(-50%, -40%)",
            }}
          />
        </section>

        {/* ════════════════════════════════════════════════════════
            PROMPT SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#0a0a0a" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center">
              <h2
                className="mb-6"
                style={{ ...S.h2, color: "#ffffff" }}
              >
                Jumpstart your next site with AI
              </h2>

              {/* Prompt input */}
              <div
                className="rounded-2xl p-1.5 mb-6"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0a0a0a]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Describe the site you want to build..."
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/30"
                    style={{ fontSize: "16px" }}
                  />
                  <button
                    className="px-5 py-2 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
                    style={{ background: "#146ef5", color: "#fff" }}
                  >
                    Generate
                  </button>
                </div>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {PROMPT_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    className="transition-colors hover:bg-white/10 hover:border-white/25"
                    style={S.pill}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            SMARTER WORKFLOWS SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#080808" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-14">
              <h2
                className="mb-6"
                style={{ ...S.h2, color: "#ffffff" }}
              >
                Smarter workflows, bigger impact
              </h2>
              <p
                className="max-w-[650px] mx-auto"
                style={{
                  ...S.bodyLg,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Kreature AI streamlines workflows, delivers personalized
                experiences at scale, and improves performance for both humans
                and machines — all with built-in guardrails that uphold your
                brand, protect your data, and keep you in control.
              </p>
            </div>

            {/* Decorative cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b89beeb19af83f52d421e5_75acd606cfe3b07f0bed3a30d8810f4b_ai_streamlined-2-card-section_left.webp"
                  alt="AI streamlined workflow preview"
                  className="w-full h-auto"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b89bef23f6caf64c2ed881_eb2ce2830175bea492086d7adb5dd208_ai_streamlined-2-card-section_right.webp"
                  alt="AI streamlined workflow preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            BUILD / MANAGE / OPTIMIZE SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#0a0a0a" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-14">
              <h2
                className="mb-6"
                style={{ ...S.h2, color: "#ffffff" }}
              >
                Build, manage, optimize — all with Kreature AI
              </h2>
              <p
                className="max-w-[650px] mx-auto"
                style={{
                  ...S.bodyLg,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Kreature AI can help you build a site, modify page designs,
                generate copy, generate code, and optimize for conversion faster
                than ever.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* First card (spans 2 columns on lg) */}
              <div
                key={BUILD_CARDS[0].title}
                className="lg:col-span-2 rounded-2xl overflow-hidden group"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="p-8 pb-0">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 style={{ ...S.h3, color: "#ffffff" }}>
                      {BUILD_CARDS[0].title}
                    </h3>
                  </div>
                  <p
                    className="mb-6 max-w-lg"
                    style={{
                      ...S.body,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {BUILD_CARDS[0].description}
                  </p>
                  <a
                    href={BUILD_CARDS[0].href}
                    className="inline-flex items-center gap-2 font-medium mb-6 transition-colors hover:opacity-80"
                    style={{ color: "#3b89ff", fontSize: "15px" }}
                  >
                    {BUILD_CARDS[0].cta} <Arrow />
                  </a>
                </div>
                <div className="px-4">
                  <img
                    src={BUILD_CARDS[0].image}
                    alt={BUILD_CARDS[0].title}
                    className="w-full h-auto rounded-t-xl"
                  />
                </div>
              </div>

              {/* Remaining cards */}
              {BUILD_CARDS.slice(1).map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="p-6 sm:p-8 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 style={{ ...S.h3, color: "#ffffff" }}>
                        {card.title}
                      </h3>
                      {card.beta && (
                        <span
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{
                            background: "rgba(20,110,245,0.15)",
                            color: "#3b89ff",
                          }}
                        >
                          Beta
                        </span>
                      )}
                    </div>
                    <p
                      className="mb-6"
                      style={{
                        ...S.body,
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {card.description}
                    </p>
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                      style={{ color: "#3b89ff", fontSize: "15px" }}
                    >
                      {card.cta} <Arrow />
                    </a>
                  </div>
                  <div className="px-4 pb-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            GO FROM IDEA SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#080808" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-14">
              <h2
                className="mb-6"
                style={{ ...S.h2, color: "#ffffff" }}
              >
                Go from idea to impact — the Kreature way
              </h2>
              <p
                className="max-w-[650px] mx-auto"
                style={{
                  ...S.bodyLg,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                With Kreature AI, you can:
              </p>
            </div>

            {/* 3 benefit cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {IDEA_BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl p-8"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src={benefit.icon}
                    alt=""
                    className="w-10 h-10 mb-6 opacity-80"
                  />
                  <h3 className="mb-4" style={{ ...S.h4, color: "#ffffff" }}>
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      ...S.body,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <CTAButton href="/webflow-way" variant="secondary">
                Explore the Kreature Way <Arrow />
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            OPTIMIZE AND LOCALIZE SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#0a0a0a" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-14">
              <h2
                className="mb-6"
                style={{ ...S.h2, color: "#ffffff" }}
              >
                Optimize and localize with AI
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {OPTIMIZE_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto"
                  />
                  <div className="p-8">
                    <h3 className="mb-3" style={{ ...S.h3, color: "#ffffff" }}>
                      {card.title}
                    </h3>
                    <p
                      className="mb-6"
                      style={{
                        ...S.body,
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {card.description}
                    </p>
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                      style={{ color: "#3b89ff", fontSize: "15px" }}
                    >
                      {card.cta} <Arrow />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            EXTEND SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#080808" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-14">
              <h2
                className="mb-6"
                style={{ ...S.h2, color: "#ffffff" }}
              >
                Extend Kreature with AI
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {EXTEND_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto"
                  />
                  <div className="p-8">
                    <h3 className="mb-3" style={{ ...S.h3, color: "#ffffff" }}>
                      {card.title}
                    </h3>
                    <p
                      className="mb-6"
                      style={{
                        ...S.body,
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {card.description}
                    </p>
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                      style={{ color: "#3b89ff", fontSize: "15px" }}
                    >
                      {card.cta} <Arrow />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            DATA CONTROL SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#0a0a0a" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-14">
              <h2
                className="mb-6"
                style={{ ...S.h2, color: "#ffffff" }}
              >
                Your data, your control. Always.
              </h2>
              <p
                className="max-w-[650px] mx-auto mb-10"
                style={{
                  ...S.bodyLg,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                AI should empower you to move faster and focus on work that
                needs a human touch, like strategy and creativity. At Kreature,
                we&apos;re committed to the responsible use of AI. We partner
                with leading AI vendors — including OpenAI and Anthropic — to
                power our AI offerings and we do not use customer data to train
                any generative AI models.
              </p>

              <a
                href="/trust"
                className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                style={{ color: "#3b89ff", fontSize: "15px" }}
              >
                Learn about our approach <Arrow />
              </a>
            </div>

            {/* Partner logos */}
            <div className="mt-16">
              <p
                className="text-center mb-8"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Our partners
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                {PARTNER_LOGOS.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="h-6 sm:h-7 w-auto opacity-50 hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            FAQ SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#080808" }}
        >
          <div className="max-w-[900px] mx-auto">
            <h2
              className="mb-14 text-center"
              style={{ ...S.h2, color: "#ffffff" }}
            >
              Your questions, answered
            </h2>

            <div
              className="divide-y"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {FAQ_ITEMS.map((faq) => (
                <details
                  key={faq.question}
                  className="group py-6 cursor-pointer"
                >
                  <summary className="flex items-center justify-between gap-4 list-none">
                    <h3
                      className="flex-1"
                      style={{
                        ...S.h4,
                        color: "#ffffff",
                        fontWeight: 500,
                      }}
                    >
                      {faq.question}
                    </h3>
                    <span
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-transform group-open:rotate-45"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p
                    className="mt-4 pr-10"
                    style={{
                      ...S.body,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            MADE IN KREATURE SHOWCASE
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#0a0a0a" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-14">
              <h2 className="mb-4" style={{ ...S.h2, color: "#ffffff" }}>
                Made in Kreature
              </h2>
              <p
                style={{
                  ...S.bodyLg,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                See what creators build with Kreature AI
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {MADE_IN_KREATURE.map((site) => (
                <div
                  key={site.name}
                  className="rounded-xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <p
                      className="font-medium"
                      style={{ color: "#ffffff", fontSize: "14px" }}
                    >
                      {site.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CUSTOMER STORIES
            ════════════════════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]"
          style={{ background: "#080808" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-14">
              <h2 className="mb-4" style={{ ...S.h2, color: "#ffffff" }}>
                Customer stories
              </h2>
              <p
                style={{
                  ...S.bodyLg,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Real results from teams building with Kreature
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {CUSTOMER_STORIES.map((story) => (
                <a
                  key={story.company}
                  href={story.href}
                  className="rounded-xl p-6 transition-colors hover:bg-white/[0.03]"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="h-5 w-auto mb-6 opacity-70"
                  />
                  <div
                    className="mb-2"
                    style={{
                      fontSize: "clamp(2rem, 3vw, 3rem)",
                      fontWeight: 600,
                      lineHeight: "1.1",
                      color: "#ffffff",
                    }}
                  >
                    {story.stat}
                  </div>
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {story.label}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 font-medium transition-colors hover:opacity-80"
                    style={{ color: "#3b89ff", fontSize: "13px" }}
                  >
                    Read story <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CTA SECTION
            ════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 py-[clamp(5rem,10vw,8rem)]"
          style={{ background: "#080808" }}
        >
          {/* Blue glow */}
          <div
            className="absolute top-1/2 left-1/2 w-[800px] h-[500px] rounded-full pointer-events-none z-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(20,110,245,0.3) 0%, transparent 70%)",
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10 text-center">
            <div className="max-w-[700px] mx-auto">
              <h2 className="mb-8" style={{ ...S.h2, color: "#ffffff" }}>
                Make creativity your competitive edge
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <CTAButton href="/signup">
                  Get started — it&apos;s free <Arrow />
                </CTAButton>
                <CTAButton href="/contact-sales" variant="secondary">
                  Talk to sales
                </CTAButton>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Try Kreature for as long as you like with our free Starter plan.
                Purchase a paid Site plan to publish, host, and unlock additional
                features.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
