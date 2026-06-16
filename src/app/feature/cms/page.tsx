"use client";

import { useState } from "react";

// ─── Design token accessor ───
const V = (n: string) => `var(--${n})`;

// ─── Typography styles ───
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

// ─── CDN prefix for Webflow-hosted images ───
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/";

// ─── Hero partner logos ───
const HERO_LOGOS = [
  { name: "IDEO", src: `${CDN}68c9a39c128261b2128439dc_ideo-logo.svg` },
  { name: "Monday.com", src: `${CDN}68c9a39c128261b2128439c8_monday.com.svg` },
  { name: "BBDO", src: `${CDN}68c9a39c128261b2128439db_bbdo-logo.svg` },
  { name: "The New York Times", src: `${CDN}68c9a39c128261b2128439d9_nytimes.svg` },
  { name: "TED", src: `${CDN}68c9a39c128261b2128439d8_TED.svg` },
  { name: "DocuSign", src: `${CDN}68c9a39c128261b2128439c9_Docusign-dark.svg` },
];

// ─── Audience tab data ───
const AUDIENCE_TABS = ["Marketing teams", "Design teams", "Engineering teams", "Agencies"] as const;
type AudienceTab = (typeof AUDIENCE_TABS)[number];

interface AudienceCard {
  title: string;
  description: string;
  image: string;
}

const AUDIENCE_DATA: Record<AudienceTab, AudienceCard[]> = {
  "Marketing teams": [
    {
      title: "Launch content-driven experiences fast",
      description: "Quickly launch and continuously iterate on content in Kreature's visual canvas — so content is always fresh, on-brand, and ready to drive conversions.",
      image: `${CDN}68b758337504526811fa58f4_d28dcdc18fd970ad53eab8f327247218_cms_marketing_asset-1.webp`,
    },
    {
      title: "Stay on brand, always",
      description: "Create visually stunning designs that seamlessly integrate content — so every web experience feels rich, cohesive, and unmistakably yours.",
      image: `${CDN}68b75833b3c8e7bdcb93fb8f_4a2ecc39b4b05cb714b0040eb07f3ee6_cms_marketing_asset-2.webp`,
    },
    {
      title: "Optimize content for humans and AI",
      description: "Boost search rankings and maximize visibility with built-in, top-tier SEO and AEO features that ensure your content performs for both search engines and AI-powered discovery.",
      image: `${CDN}68b7583310ac7f248a7118fe_cms_marketing_asset-3.webp`,
    },
  ],
  "Design teams": [
    {
      title: "Design with real content",
      description: "Streamline your work by creating page layouts, adding the elements you want, and pulling in content directly from the CMS — no lorem ipsum, no surprises at launch.",
      image: `${CDN}68b758333ed4e27a1bda0b0c_982179a1a5900d5849aacf4d76fb7974_cms_creative_asset-1.png`,
    },
    {
      title: "Stay on brand, always",
      description: "Create reusable content templates. Design the layout once and any new content will automatically follow it — keeping every page pixel-perfect without extra effort.",
      image: `${CDN}68b75833b218d14ce6272e30_4cc41a52ee934e6265e90d4babc1f8f4_cms_creative_asset-2.png`,
    },
    {
      title: "Collaborate with marketers — and empower them",
      description: "Create together without anyone becoming a bottleneck thanks to commenting, on-canvas editing, and role-based permissions that let everyone contribute at their level.",
      image: `${CDN}68b75832a177f0f712d1ebb9_cms_creative_asset-3.webp`,
    },
  ],
  "Engineering teams": [
    {
      title: "Give your dev team time back",
      description: "Free up developer resources for more complex technical challenges by empowering marketers and designers to manage content and pages visually.",
      image: `${CDN}68b7583365a1169c2fc23878_40a4df25a026210223b5924310c1e278_cms_engineering_asset-1.png`,
    },
    {
      title: "Reduce maintenance and overhead",
      description: "Scale confidently knowing that Kreature generates clean, semantic code that can also be extended via APIs — no plugin updates, no security patches to track.",
      image: `${CDN}68b75833426ad71850f78770_c3f3bf5b05c7eb927b5a5479312df743_cms_engineering_asset-2.png`,
    },
    {
      title: "Create the content stack you want",
      description: "Programmatically serve content in and out of Kreature and connect with your best-of-breed tech stack through headless CMS APIs and the App Marketplace.",
      image: `${CDN}68b75833f0da869b1b6e311e_cms_engineering_asset-3.webp`,
    },
  ],
  Agencies: [
    {
      title: "Ship client work faster",
      description: "Deliver for clients faster — and take on more new business — by designing with dynamic content visually, building reusable templates, and launching without developer bottlenecks.",
      image: `${CDN}68b85fc5aefb1024a53671d9_1bbeb7a7f0c575e9e1a031775179a4f4_cms_agencies_asset-1.png`,
    },
    {
      title: "Streamline client handoffs and ongoing management",
      description: "Give clients the tools they need to update content themselves within Kreature's visual CMS — with role-based permissions that keep design integrity intact.",
      image: `${CDN}68b85fc5f9848b1ef479189b_b6c48110dc5dcde22344aaa2f70d2686_cms_agencies_asset-2.webp`,
    },
    {
      title: "Integrate with any client's tech stack",
      description: "Connect with your client's favorite best-of-breed tools through Kreature's headless CMS APIs and vetted App Marketplace integrations.",
      image: `${CDN}68b85fc5d28036ffc5f6b4c9_cms_agencies_asset-3.webp`,
    },
  ],
};

// ─── Manage content tabs ───
const MANAGE_TABS = [
  {
    label: "Control what goes live (and when)",
    title: "Control what goes live (and when)",
    description: "Only launch polished content with draft previews and granular publishing. Set publish dates, save drafts, and review changes before they go live — so your site is always production-ready.",
    image: `${CDN}68b7583318956198d9f6327b_276dbd2b05f3f768b9c273b9f48686c7_cms_manage-content_tab-1.png`,
  },
  {
    label: "Collaborate efficiently",
    title: "Collaborate efficiently",
    description: "Collaborate using edit mode, comment threads, and more. Leave feedback directly on the canvas, assign tasks, and keep everyone aligned without switching between tools.",
    image: `${CDN}68b75833be6e1a5be424bcd3_741a0acd675e2d7618aeff83781fc1b8_cms_manage-content_tab-2.png`,
    bgImage: `${CDN}68b75833ba2dc9b2e11d4858_cms_manage-content_tab-2-bg.webp`,
  },
  {
    label: "Easily manage SEO elements",
    title: "Easily manage SEO elements",
    description: "Control elements like metadata and alt text — while structured content and clean code provide the perfect foundation for search engines and AI crawlers to understand your site.",
    image: `${CDN}68b75833f99f7f052f1c644e_a7d1608b54ad093eeb3e81977c4f748c_cms_manage-content_tab-3.png`,
  },
];

// ─── AI feature cards ───
const AI_CARDS = [
  {
    title: "Build a site",
    description: "Bring your creative vision to life with Kreature's AI site builder. Describe what you want and get a complete, customizable site structure — pages, CMS collections, and content — in minutes.",
    image: `${CDN}68b8abb1e8603c3e989a1866_09a4c0a77f0f78f4e3d59949760399b1_ai_design-assistant_build.avif`,
    cta: "Try AI site builder",
    href: "/ai-site-builder",
  },
  {
    title: "Improve SEO and AEO",
    description: "Grow your reach and relevance through sitewide audits and AI-generated, actionable suggestions that boost your visibility on search engines and AI-powered platforms.",
    image: `${CDN}690216a62f7f3a2766e1eacb_2119a583ddaeafec69bca8b6f685eb93_ai_design-assistant_seo.webp`,
    cta: "Learn more",
    href: "/feature/seo",
  },
  {
    title: "Generate code components",
    description: "Build, customize, and reuse React components natively in Kreature with AI. Describe what you need and get production-ready components that fit your design system.",
    image: `${CDN}69f346baa52681322b2db085_ai-tab__ai-code-components.avif`,
    cta: "Learn more",
    href: "/feature/code-components",
  },
  {
    title: "Generate copy",
    description: "Deliver content that converts by generating first drafts, developing content variants, and publishing — all without leaving Kreature's visual canvas.",
    image: `${CDN}68b8abb15cf9b445e132bf3d_ea046c3c4788df295d1750d70f6f24d2_ai_design-assistant_write.webp`,
    cta: "Explore documentation",
    href: "/docs",
  },
  {
    title: "Generate CMS Collection items",
    description: "Focus on creative direction, not repetitive tasks, by delegating CMS item creation to AI. Generate dozens of blog posts, product listings, or team profiles in seconds.",
    image: `${CDN}68b8abb14effacd0537311b6_a671e2811bfc69dde5f3d8b9d540c031_ai_design-assistant_content.webp`,
    cta: "Explore documentation",
    href: "/docs",
  },
  {
    title: "Design sections",
    description: "Build even faster by generating new page sections using your site's existing design system. AI creates layouts that match your brand — ready to customize.",
    image: `${CDN}68b8abb13d5c5f0ce0565466_89780b9d9a466996500e9664f21ef8c6_ai_design-assistant_design.webp`,
    cta: "Explore documentation",
    href: "/docs",
    beta: true,
  },
  {
    title: "Get help",
    description: "Get the answers you need from the Kreature Help Center — delivered to you right where you are. Ask questions and get instant, contextual guidance inside the platform.",
    image: `${CDN}68b8abb113f6e82f69aacdf2_5319ba81561939bc4632956528c86595_ai_design-assistant_learn.webp`,
    cta: "Explore documentation",
    href: "/docs",
    beta: true,
  },
];

// ─── Scale tabs ───
const SCALE_TABS = [
  {
    label: "Reliable traffic management",
    title: "Reliable traffic management",
    description: "Kreature's enterprise-grade stack and global hosting network can handle large traffic surges with ease — so your content stays fast and available no matter how many visitors arrive.",
    image: `${CDN}68b758336334618a250d976b_cms_scale_tab-1.webp`,
    bgImage: `${CDN}68b75833860d7ce1d698f145_cms_scale_tab-1-bg.webp`,
  },
  {
    label: "Scalable content",
    title: "Scalable content",
    description: "Kreature Enterprise supports custom CMS item scale and schema flexibility — from hundreds to hundreds of thousands of items — so your content infrastructure grows with your business.",
    image: `${CDN}68b75833cb066f572d2246d1_cms_scale_tab-2.webp`,
  },
  {
    label: "World-class performance",
    title: "World-class performance",
    description: "Fast page loads powered by Fastly CDN and enterprise-level uptime SLAs make for seamless hosting. Your content delivers at the speed your visitors expect.",
    image: `${CDN}68b758331f9bb2e746f285aa_c8c03f850015677ccf61736ed8fb0043_cms_scale_tab-3.png`,
    bgImage: `${CDN}68b75833876e2e88f5645cfe_cms_scale_tab-3-bg.webp`,
  },
  {
    label: "End-to-end localization",
    title: "End-to-end localization",
    description: "Create fully localized site experiences for audiences around the world. Manage translations, regional content variations, and localized SEO — all from one CMS.",
    image: `${CDN}68b75833e49e173f396eefb4_c2c9b544f4db157064a4bb9deaf6b903_cms_scale_tab-4.webp`,
  },
];

// ─── FAQ ───
const FAQ_ITEMS = [
  {
    q: "Can I manage large-scale content, like blogs or product catalogs, efficiently with Kreature's CMS?",
    a: "Absolutely. Kreature's CMS is built to handle content at scale, supporting extensive Collections for blogs, product catalogs, and other content-heavy applications. Enterprise plans accommodate hundreds of thousands of items with dynamic templating, CSV bulk import, powerful filtering and sorting, conditional visibility rules, reference fields for related content, and programmatic API access — all backed by Fastly's global CDN for fast delivery anywhere.",
  },
  {
    q: "Does Kreature's CMS integrate with other tools?",
    a: "Yes. Kreature offers MACH-certified headless CMS APIs and dedicated content delivery APIs that let you connect content to any frontend or third-party service. The curated App Marketplace includes integrations with tools like HubSpot, Adobe Express, and more. A native Figma connection keeps design and content in sync, and you can embed custom code directly within CMS Collections for advanced use cases.",
  },
  {
    q: "How does Kreature's CMS compare to traditional content management systems?",
    a: "Kreature is a unique hybrid CMS that combines the best of visual site building, headless CMS extensibility, and digital experience platform tooling. Key differentiators include: an integrated visual site builder, flexible headless and visual CMS approaches, built-in design system tooling, collaboration workflows with commenting, one-click publishing, SEO and AEO tools, built-in conversion rate optimization, and an integrated AI suite — all in one platform without plugins or maintenance overhead.",
  },
  {
    q: "What are the different types of CMS platforms?",
    a: "There are four main types: visual site builders (like Kreature), open-source CMS (like WordPress), headless CMS (like Contentful), and digital experience platforms. While each serves different needs, Kreature is uniquely positioned as a visual-first, composable CMS that scales from marketing sites to enterprise content operations — with headless APIs, visual editing, and AI-powered features all built in.",
  },
  {
    q: "What is a content management system (CMS)?",
    a: "A CMS is a platform for storing, managing, and publishing dynamic content. It creates a single source of truth where content lives, structured consistently, and can be reused and displayed across your site. Kreature's CMS takes this further with a visual-first, composable approach: you design the content structure and the presentation layer together, while headless APIs let you deliver that content anywhere — websites, apps, or third-party platforms.",
  },
];

// ─── Customer story stats ───
const CUSTOMER_STATS = [
  { company: "NCR", stat: "10x", detail: "In cost savings annually" },
  { company: "Dropbox", stat: "67%", detail: "decrease in dev ticketing" },
  { company: "Orangetheory Fitness", stat: "$6M", detail: "in cost savings annually" },
  { company: "Walker & Dunlop", stat: "56%", detail: "increase in form fills" },
  { company: "DocuSign", stat: "1,170%", detail: "increase in traffic YoY" },
  { company: "ABM", stat: "$200M", detail: "in new pipeline generated post-site launch" },
  { company: "Lattice", stat: "+20%", detail: "increase in site-wide conversion" },
];

// ─── Footer columns ───
const FOOTER_COLUMNS = [
  { heading: "Platform", links: [{ label: "Design", href: "/feature/design" }, { label: "CMS", href: "/feature/cms" }, { label: "Hosting", href: "/feature/hosting" }, { label: "SEO", href: "/feature/seo" }, { label: "Ecommerce", href: "/feature/ecommerce" }, { label: "Analytics", href: "/feature/analyze" }] },
  { heading: "Solutions", links: [{ label: "Startups", href: "/solutions/startups" }, { label: "Agencies", href: "/solutions/agencies" }, { label: "Enterprise", href: "/enterprise" }, { label: "Ecommerce", href: "/solutions/ecommerce" }, { label: "SaaS", href: "/solutions/saas" }] },
  { heading: "Resources", links: [{ label: "Blog", href: "/blog" }, { label: "Templates", href: "/templates" }, { label: "Integrations", href: "/integrations" }, { label: "Glossary", href: "/glossary" }, { label: "Documentation", href: "/docs" }] },
  { heading: "Company", links: [{ label: "About", href: "/company" }, { label: "Customers", href: "/customers" }, { label: "Partners", href: "/certified-partners" }, { label: "Careers", href: "/company/careers" }, { label: "Contact", href: "/contact-sales" }] },
  { heading: "Compare", links: [{ label: "vs Webflow", href: "/webflow-clone" }, { label: "vs WordPress", href: "/webflow-way" }, { label: "vs Framer", href: "/made-in-webflow" }, { label: "vs Shopify", href: "/feature/ecommerce" }] },
  { heading: "Legal", links: [{ label: "Privacy Policy", href: "/legal/privacy" }, { label: "Terms of Service", href: "/legal/terms" }, { label: "Cookie Policy", href: "/legal/cookies" }, { label: "GDPR", href: "/legal/gdpr" }] },
  { heading: "Social", links: [{ label: "Twitter / X", href: "https://twitter.com" }, { label: "LinkedIn", href: "https://linkedin.com" }, { label: "YouTube", href: "https://youtube.com" }, { label: "Discord", href: "https://discord.com" }] },
];

// ─── Shared components ───

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

function Badge({ children, color = "color-accent-blue" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
      style={{
        color: V(color),
        backgroundColor: `color-mix(in srgb, ${V(color)} 10%, transparent)`,
        border: `1px solid ${V(color)}20`,
      }}
    >
      {children}
    </span>
  );
}

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas") }}>
      <div className="mx-auto px-5 sm:px-8 py-16" style={{ maxWidth: "1440px" }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="logo-dark h-[32px] w-auto" />
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="logo-light h-[32px] w-auto" />
              <span className="font-heading font-[800] text-lg tracking-tight" style={{ color: V("color-ink") }}>Kreature<span style={{ color: V("color-accent-blue") }}>.</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>The all-in-one platform for building, launching, and growing websites — with a visual-first CMS, built in.</p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: V("color-mute-soft") }}>{col.heading}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}><a href={link.href} className="text-sm transition-colors hover:opacity-80" style={{ color: V("color-body-mid") }}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t" style={{ borderColor: V("color-hairline") }}>
          <p className="text-xs" style={{ color: V("color-mute") }}>&copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:opacity-80" style={{ color: V("color-mute") }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:opacity-80" style={{ color: V("color-mute") }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ───

export default function CMSFeaturePage() {
  const [audienceTab, setAudienceTab] = useState<AudienceTab>("Marketing teams");
  const [manageTab, setManageTab] = useState(0);
  const [scaleTab, setScaleTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ background: V("color-canvas"), color: V("color-body") }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: V("color-canvas"),
          paddingTop: "clamp(4rem,10vw,7rem)",
          paddingBottom: "clamp(3rem,6vw,5rem)",
        }}
      >
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "900px" }}>
          {/* H1 */}
          <h1
            className="font-semibold tracking-tight mb-6"
            style={{ ...S.h1, color: V("color-ink") }}
          >
            Your content. Your canvas.
          </h1>

          {/* Description */}
          <p
            className="text-lg mx-auto mb-10"
            style={{
              color: V("color-body-mid"),
              maxWidth: "700px",
              fontSize: "18px",
              lineHeight: "28.8px",
            }}
          >
            Design, manage, and publish site content optimized for AI search, SEO, and conversion with Kreature&apos;s visual-first, composable CMS.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="/signup"
              className="inline-flex items-center text-white transition-opacity hover:opacity-90"
              style={{ ...S.btn, backgroundColor: V("color-accent-blue") }}
            >
              Get started — it&apos;s free <Arrow />
            </a>
            <a
              href="/enterprise/contact-sales"
              className="inline-flex items-center transition-colors"
              style={{
                ...S.btn,
                color: V("color-ink"),
                border: `1px solid ${V("color-hairline")}`,
                background: "transparent",
              }}
            >
              Contact sales
            </a>
          </div>

          {/* Device mockups */}
          <div className="relative max-w-[900px] mx-auto">
            {/* Desktop mockup */}
            <img
              src={`${CDN}68c9a39c128261b2128439d0_webflow-desktop.webp`}
              alt="Kreature CMS on desktop"
              className="w-full h-auto rounded-lg"
              style={{ boxShadow: V("shadow-card-strong"), border: `1px solid ${V("color-hairline")}` }}
            />
            {/* Tablet mockup */}
            <img
              src={`${CDN}68c9a39c128261b2128439e5_webflow-tablet.webp`}
              alt="Kreature CMS on tablet"
              className="absolute bottom-0 right-0 w-[35%] h-auto rounded-lg translate-x-[15%] translate-y-[10%] hidden md:block"
              style={{ boxShadow: V("shadow-card"), border: `1px solid ${V("color-hairline")}` }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TRUSTED BY LOGOS ═══════════════════════ */}
      <section className="px-5 sm:px-8 py-10" style={{ backgroundColor: V("color-canvas-soft") }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-center mb-8 text-sm font-medium uppercase tracking-wider" style={{ color: V("color-mute") }}>
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {HERO_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-6 sm:h-7 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ AUDIENCE TABS ═══════════════════════ */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-semibold tracking-tight mb-4" style={{ ...S.h2, color: V("color-ink") }}>
            How marketing teams unlock the true power of content
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {AUDIENCE_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setAudienceTab(tab)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                color: audienceTab === tab ? "#fff" : V("color-body-mid"),
                backgroundColor: audienceTab === tab ? V("color-accent-blue") : V("color-canvas-soft"),
                border: audienceTab === tab ? `1px solid ${V("color-accent-blue")}` : `1px solid ${V("color-hairline")}`,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {AUDIENCE_DATA[audienceTab].map((card) => (
            <div
              key={card.title}
              className="rounded-xl overflow-hidden group transition-all hover:-translate-y-1 border"
              style={{
                backgroundColor: V("color-canvas"),
                borderColor: V("color-hairline"),
                boxShadow: V("shadow-card"),
              }}
            >
              <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: V("color-canvas-soft") }}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {card.title}
                </h4>
                <p style={{ ...S.body, color: V("color-body-mid") }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════ AI AGE SECTION ═══════════════════════ */}
      <Section bg="soft">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-semibold tracking-tight mb-6" style={{ ...S.h2, color: V("color-ink") }}>
            A CMS designed for the AI age
          </h2>
          <p className="text-lg" style={{ color: V("color-body-mid"), fontSize: "18px", lineHeight: "28.8px" }}>
            Today, your content needs to both bring your branded experiences to life and be optimized for bots.
            Kreature&apos;s CMS gives you the tools to create content that captivates human audiences while providing
            the structured data, semantic markup, and performance that AI search engines and crawlers demand.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════ MANAGE CONTENT VISUALLY ═══════════════════════ */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="font-semibold tracking-tight mb-4" style={{ ...S.h2, color: V("color-ink") }}>
            Manage content visually
          </h2>
          <p className="text-lg mx-auto" style={{ color: V("color-body-mid"), maxWidth: "650px", fontSize: "16px", lineHeight: "25.6px" }}>
            With Kreature&apos;s visual canvas, teams can build and edit site content in context —
            seeing exactly how every change will look before it goes live.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {MANAGE_TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setManageTab(i)}
              className="text-sm font-medium pb-2 transition-all"
              style={{
                color: manageTab === i ? V("color-accent-blue") : V("color-body-mid"),
                borderBottom: manageTab === i ? `2px solid ${V("color-accent-blue")}` : "2px solid transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: V("color-hairline") }}>
            {/* Background image if present */}
            {MANAGE_TABS[manageTab].bgImage && (
              <img
                src={MANAGE_TABS[manageTab].bgImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                loading="lazy"
              />
            )}
            <img
              src={MANAGE_TABS[manageTab].image}
              alt={MANAGE_TABS[manageTab].title}
              className="w-full h-auto relative z-10"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ ...S.h3, color: V("color-ink") }}>
              {MANAGE_TABS[manageTab].title}
            </h3>
            <p style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              {MANAGE_TABS[manageTab].description}
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ AI FEATURE CARDS ═══════════════════════ */}
      <Section bg="soft">
        <div className="text-center mb-12">
          <Badge color="color-accent-purple">Visionaries, write this way</Badge>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {AI_CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-xl overflow-hidden border transition-all hover:-translate-y-1 flex flex-col"
              style={{
                backgroundColor: V("color-canvas"),
                borderColor: V("color-hairline"),
                boxShadow: V("shadow-card"),
              }}
            >
              <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: V("color-canvas-soft") }}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold" style={{ fontSize: "18px", lineHeight: "26px", color: V("color-ink") }}>
                    {card.title}
                  </h4>
                  {card.beta && (
                    <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded" style={{ color: V("color-accent-purple"), backgroundColor: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)` }}>
                      Beta
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: V("color-body-mid") }}>
                  {card.description}
                </p>
                <span className="text-sm font-medium inline-flex items-center group-hover:gap-1.5 transition-all" style={{ color: V("color-accent-blue") }}>
                  {card.cta} <Arrow />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════ DYNAMIC EXPERIENCES ═══════════════════════ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: V("color-hairline"), boxShadow: V("shadow-card") }}>
            <img
              src={`${CDN}68b758336334618a250d9782_6d5929aa59a934a52954bafe3d2e3c9d_cms_dynamic-experiences.png`}
              alt="Design dynamic experiences with Kreature CMS"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-semibold tracking-tight mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Design dynamic experiences
            </h2>
            <p className="text-lg mb-8" style={{ color: V("color-body-mid"), fontSize: "18px", lineHeight: "28.8px" }}>
              Control how content from your CMS is displayed and linked to keep every site organized and easy to search.
              Reference fields, conditional visibility, and dynamic templating give you complete control over how content
              appears across your site.
            </p>
            <a
              href="/enterprise/contact-sales"
              className="inline-flex items-center transition-colors"
              style={{
                ...S.btn,
                color: V("color-ink"),
                border: `1px solid ${V("color-hairline")}`,
                background: "transparent",
              }}
            >
              Contact sales
            </a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ TESTIMONIAL ═══════════════════════ */}
      <Section bg="soft">
        <div className="max-w-[900px] mx-auto">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center">
            {/* Headshot */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 mx-auto lg:mx-0 border-2" style={{ borderColor: V("color-hairline") }}>
              <img
                src="https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68bef1cd512862cbd46ba1bb_author_kokko-tso.webp"
                alt="Kokko Tso"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <blockquote className="text-lg sm:text-xl italic mb-4" style={{ color: V("color-ink") }}>
                &ldquo;Kreature empowers us to do what we do best as marketers, designers, and content creators.
                The CMS gives our team the flexibility to move fast without sacrificing brand consistency or
                performance.&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div>
                  <p className="font-semibold" style={{ color: V("color-ink") }}>Kokko Tso</p>
                  <p className="text-sm" style={{ color: V("color-body-mid") }}>VP Digital Marketing, Walker &amp; Dunlop</p>
                </div>
                <a
                  href="/customers/walker-dunlop"
                  className="text-sm font-medium inline-flex items-center"
                  style={{ color: V("color-accent-blue") }}
                >
                  Customer story <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ COMPOSABLE CONTENT AT SCALE ═══════════════════════ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-semibold tracking-tight mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Composable content at scale
            </h2>
            <p className="text-lg mb-8" style={{ color: V("color-body-mid"), fontSize: "18px", lineHeight: "28.8px" }}>
              Create performant and scalable connections between Kreature and your best-of-breed tech stack.
              With MACH-certified headless APIs, a vetted App Marketplace, and flexible content delivery options,
              Kreature&apos;s CMS fits into your ecosystem — not the other way around.
            </p>
            <a
              href="/enterprise/contact-sales"
              className="inline-flex items-center transition-colors"
              style={{
                ...S.btn,
                color: V("color-ink"),
                border: `1px solid ${V("color-hairline")}`,
                background: "transparent",
              }}
            >
              Contact sales
            </a>
          </div>
          {/* Video poster */}
          <div className="relative rounded-xl overflow-hidden border group cursor-pointer" style={{ borderColor: V("color-hairline"), boxShadow: V("shadow-card") }}>
            <img
              src={`${CDN}68b88e5a1d6c97b3d22bcfcf_02f44753a28c9f330dc7751ae433afec_cms_poster.webp`}
              alt="Composable content at scale"
              className="w-full h-auto"
              loading="lazy"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: V("color-accent-blue"), boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
              >
                <svg width="24" height="28" viewBox="0 0 24 28" fill="white">
                  <path d="M0 0v28l24-14z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ SCALE SECTION ═══════════════════════ */}
      <Section bg="soft">
        <div className="text-center mb-10">
          <h2 className="font-semibold tracking-tight mb-4" style={{ ...S.h2, color: V("color-ink") }}>
            Content that scales with your brand
          </h2>
          <p className="text-lg mx-auto mb-8" style={{ color: V("color-body-mid"), maxWidth: "700px", fontSize: "16px", lineHeight: "25.6px" }}>
            Everything you need to launch and maintain fast, reliable web experiences that grow with your business.
          </p>
          <a
            href="/enterprise/contact-sales"
            className="inline-flex items-center transition-colors"
            style={{
              ...S.btn,
              color: V("color-ink"),
              border: `1px solid ${V("color-hairline")}`,
              background: "transparent",
            }}
          >
            Contact sales
          </a>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 mt-12">
          {SCALE_TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setScaleTab(i)}
              className="text-sm font-medium pb-2 transition-all"
              style={{
                color: scaleTab === i ? V("color-accent-blue") : V("color-body-mid"),
                borderBottom: scaleTab === i ? `2px solid ${V("color-accent-blue")}` : "2px solid transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: V("color-hairline") }}>
            {SCALE_TABS[scaleTab].bgImage && (
              <img
                src={SCALE_TABS[scaleTab].bgImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                loading="lazy"
              />
            )}
            <img
              src={SCALE_TABS[scaleTab].image}
              alt={SCALE_TABS[scaleTab].title}
              className="w-full h-auto relative z-10"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ ...S.h3, color: V("color-ink") }}>
              {SCALE_TABS[scaleTab].title}
            </h3>
            <p style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              {SCALE_TABS[scaleTab].description}
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ ALL FEATURES ═══════════════════════ */}
      <Section>
        <div className="text-center mb-14">
          <h2 className="font-semibold tracking-tight" style={{ ...S.h2, color: V("color-ink") }}>
            All Features
          </h2>
        </div>

        <div className="space-y-16">
          {/* Build and Design */}
          <div>
            <h3 className="font-semibold mb-8 pb-3" style={{ fontSize: "24px", color: V("color-ink"), borderBottom: `1px solid ${V("color-hairline")}` }}>Build and Design</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {["Design", "Edit content", "Interactions", "Page Building", "Collaboration", "Shared Libraries"].map((f) => (
                <div key={f} className="text-center p-4 rounded-lg border transition-all hover:-translate-y-0.5" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas") }}>
                  <p className="text-sm font-medium" style={{ color: V("color-ink") }}>{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Manage */}
          <div>
            <h3 className="font-semibold mb-8 pb-3" style={{ fontSize: "24px", color: V("color-ink"), borderBottom: `1px solid ${V("color-hairline")}` }}>Manage</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["CMS", "Hosting", "Security", "Localization"].map((f) => (
                <div key={f} className="text-center p-4 rounded-lg border transition-all hover:-translate-y-0.5" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas") }}>
                  <p className="text-sm font-medium" style={{ color: V("color-ink") }}>{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Optimize */}
          <div>
            <h3 className="font-semibold mb-8 pb-3" style={{ fontSize: "24px", color: V("color-ink"), borderBottom: `1px solid ${V("color-hairline")}` }}>Optimize</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Analyze", "Optimize", "SEO", "AEO"].map((f) => (
                <div key={f} className="text-center p-4 rounded-lg border transition-all hover:-translate-y-0.5" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas") }}>
                  <p className="text-sm font-medium" style={{ color: V("color-ink") }}>{f}{f === "AEO" && <span className="text-[10px] font-semibold uppercase ml-1.5" style={{ color: V("color-accent-blue") }}>New</span>}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extend */}
          <div>
            <h3 className="font-semibold mb-8 pb-3" style={{ fontSize: "24px", color: V("color-ink"), borderBottom: `1px solid ${V("color-hairline")}` }}>Extend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {["Apps", "Figma to Kreature", "DevLink", "Code Generation", "Ecommerce", "Headless CMS APIs"].map((f) => (
                <div key={f} className="text-center p-4 rounded-lg border transition-all hover:-translate-y-0.5" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas") }}>
                  <p className="text-sm font-medium" style={{ color: V("color-ink") }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <Section bg="soft">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-semibold tracking-tight mb-10 text-center" style={{ ...S.h2, color: V("color-ink") }}>
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border overflow-hidden"
                style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas") }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium pr-4" style={{ color: V("color-ink") }}>{item.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 transition-transform"
                    style={{ color: V("color-mute"), transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <path d="M8 1v14M1 8h14" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ CUSTOMER STORIES ═══════════════════════ */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-semibold tracking-tight" style={{ ...S.h2, color: V("color-ink") }}>
            Customer results
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CUSTOMER_STATS.map((item) => (
            <div
              key={item.company}
              className="rounded-xl p-6 border text-center"
              style={{
                backgroundColor: V("color-canvas"),
                borderColor: V("color-hairline"),
                boxShadow: V("shadow-card"),
              }}
            >
              <p className="font-semibold mb-1" style={{ fontSize: "14px", color: V("color-ink") }}>
                {item.company}
              </p>
              <p className="font-bold mb-1" style={{ fontSize: "clamp(2rem,4vw,2.5rem)", color: V("color-accent-blue"), lineHeight: 1.1 }}>
                {item.stat}
              </p>
              <p className="text-sm" style={{ color: V("color-body-mid") }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section
        className="relative overflow-hidden px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)]"
        style={{ backgroundColor: V("color-canvas-soft") }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15"
            style={{ backgroundColor: V("color-accent-blue") }}
          />
        </div>
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "700px" }}>
          <h2 className="font-semibold tracking-tight mb-6" style={{ ...S.h2, color: V("color-ink") }}>
            Make creativity your competitive edge
          </h2>
          <p className="text-lg mb-8" style={{ color: V("color-body-mid"), fontSize: "18px", lineHeight: "28.8px" }}>
            Bring your boldest ideas to life with Kreature&apos;s visual-first CMS. Design, manage, and scale content
            that stands out — without compromise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="inline-flex items-center text-white transition-opacity hover:opacity-90"
              style={{ ...S.btn, backgroundColor: V("color-accent-blue") }}
            >
              Get started — it&apos;s free <Arrow />
            </a>
            <a
              href="/enterprise/contact-sales"
              className="inline-flex items-center transition-colors"
              style={{
                ...S.btn,
                color: V("color-ink"),
                border: `1px solid ${V("color-hairline")}`,
                background: "transparent",
              }}
            >
              Contact sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
