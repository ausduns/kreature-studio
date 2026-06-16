"use client";

import { useState } from "react";

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const TESTIMONIAL_CDN = "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7";
const LOGOS_LIGHT = "https://dhygzobemt712.cloudfront.net/Web/logos/light";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY ─── */
const T = {
  h1:      { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2Lg:    { fontSize: "48px", fontWeight: 600, lineHeight: "52.8px", letterSpacing: "-0.48px" } as React.CSSProperties,
  h2:      { fontSize: "32px", fontWeight: 600, lineHeight: "41.6px", letterSpacing: "-0.32px" } as React.CSSProperties,
  h2Sm:    { fontSize: "24px", fontWeight: 600, lineHeight: "31.2px" } as React.CSSProperties,
  h3:      { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  bodyLg:  { fontSize: "20px", fontWeight: 400, lineHeight: "32px" } as React.CSSProperties,
  body:    { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm:  { fontSize: "14px", fontWeight: 400, lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12px", fontWeight: 550, lineHeight: "15.6px", letterSpacing: "0.05em" } as React.CSSProperties,
  btn:     { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", letterSpacing: "-0.16px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  statNum: { fontSize: "56px", fontWeight: 600, lineHeight: "61.6px", letterSpacing: "-0.56px" } as React.CSSProperties,
  quote:   { fontSize: "24px", fontWeight: 400, lineHeight: "36px" } as React.CSSProperties,
  attrName:{ fontSize: "16px", fontWeight: 500, lineHeight: "24px" } as React.CSSProperties,
  attrRole:{ fontSize: "14px", fontWeight: 400, lineHeight: "22.4px" } as React.CSSProperties,
};

/* ─── WORDMARK ─── */
function Wordmark({ size }: { size?: "sm" | "md" }) {
  return (
    <span
      className="font-semibold tracking-[-0.02em]"
      style={{
        color: V("color-ink"),
        fontSize: size === "sm" ? "20px" : "24px",
        lineHeight: size === "sm" ? "28px" : "31.2px",
      }}
    >
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
}

/* ─── HELPERS ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none" aria-hidden="true">
      &rarr;
    </span>
  );
}

function SectionWrap({
  bg,
  children,
  pt,
  pb,
}: {
  bg?: "white" | "soft" | "ink";
  children: React.ReactNode;
  pt?: string;
  pb?: string;
}) {
  return (
    <section
      className="px-5 sm:px-8"
      style={{
        background:
          bg === "soft"
            ? V("color-canvas-soft")
            : bg === "ink"
            ? V("color-ink")
            : V("color-canvas"),
        paddingTop: pt || "80px",
        paddingBottom: pb || "80px",
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-sm text-white transition-opacity hover:opacity-90"
      style={{ ...T.btn, background: V("color-accent-blue") }}
    >
      {children}
    </a>
  );
}

function OutlineBtn({
  href,
  children,
  dark,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-sm transition-colors hover:bg-black/5"
      style={{
        ...T.btn,
        background: "transparent",
        color: dark ? "#fff" : V("color-ink"),
        border: `1px solid ${dark ? "rgba(255,255,255,0.2)" : V("color-hairline")}`,
      }}
    >
      {children}
    </a>
  );
}

function TextLink({
  href,
  children,
  dark,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center text-sm font-medium hover:underline transition-colors"
      style={{ color: dark ? "rgba(255,255,255,0.85)" : V("color-ink") }}
    >
      {children}
    </a>
  );
}

/* ─── DATA ─── */

// Trusted-by logos from the source hero
const TRUSTED_LOGOS = [
  { name: "Ideo", src: `${CDN}/68c9a39c128261b2128439dc_ideo-logo.svg` },
  { name: "Monday.com", src: `${CDN}/68c9a39c128261b2128439c8_monday.com.svg` },
  { name: "BBDO", src: `${CDN}/68c9a39c128261b2128439db_bbdo-logo.svg` },
  { name: "The New York Times", src: `${CDN}/68c9a39c128261b2128439d9_nytimes.svg` },
  { name: "TED", src: `${CDN}/68c9a39c128261b2128439d8_TED.svg` },
  { name: "Docusign", src: `${CDN}/68c9a39c128261b2128439c9_Docusign-dark.svg` },
];

// Anchor nav items
const ANCHOR_NAV = [
  { label: "Site builder", href: "#builder" },
  { label: "Composable CMS", href: "#cms" },
  { label: "Optimization tools", href: "#tool" },
  { label: "Management at scale", href: "#management" },
  { label: "Ecosystems and API", href: "#api" },
];

// Section 2: Site builder tabs
const SITE_BUILDER_TABS = [
  {
    label: "Visual development",
    title: "Visual development",
    desc: "You design, we generate the code — from fully custom layouts to complex animations.",
    cta: "Discover the visual canvas",
    href: "/feature/design",
    img: `${CDN}/68b89b40686e527d9b1e6118_platform_site_builder_tab-1.webp`,
  },
  {
    label: "Custom code",
    title: "Custom code",
    desc: "Expand the power of Kreature beyond the visual canvas by adding custom code to your build.",
    cta: "",
    href: "",
    img: `${CDN}/68b89b405f0e9f32f52b833c_platform_site_builder_tab-2.webp`,
  },
];

// Section 3: CMS tabs
const CMS_TABS = [
  {
    label: "Visual content management",
    title: "Visual content management",
    desc: "Empower non-technical users to create and publish content quickly — and without engineering burden — that drives marketing results.",
    cta: "",
    href: "",
    img: `${CDN}/68b89b40fb27a218947cb8de_platform_cms_tab-1.webp`,
  },
  {
    label: "Headless APIs",
    title: "Headless APIs",
    desc: "Our headless CMS APIs support multichannel and composability — allowing you to programmatically serve content in and out of Kreature, and connect to best-in-breed tools.",
    cta: "",
    href: "",
    img: `${CDN}/68b89b4001b657ad5aabb317_platform_cms_tab-2.webp`,
  },
];

// Section 4: Optimization tabs
const OPTIMIZATION_TABS = [
  {
    label: "Analyze",
    title: "Analyze",
    desc: "Kreature Analyze puts a native, unified view of visitor behavior into the hands of designers and content marketers — so you can make data-backed decisions that improve site performance.",
    cta: "Discover Analyze",
    href: "/feature/analyze",
    img: `${CDN}/68b89b40fa32b27f451f8b19_platform_optimization_tab-1.webp`,
  },
  {
    label: "Optimize",
    title: "Optimize",
    desc: "Kreature Optimize gives marketers the tools to increase conversions, including native A/B testing and AI-powered personalization.",
    cta: "Discover Optimize",
    href: "/feature/optimize",
    img: `${CDN}/68b89b415518d3495b2293a8_7624faf63e921275d549d08994546fed_platform_optimization_tab-2.webp`,
  },
  {
    label: "Localization",
    title: "Localization",
    desc: "Create fully localized experiences for site visitors around the world — from design and content to translation and more.",
    cta: "Discover Localization",
    href: "/feature/localization",
    img: `${CDN}/68b89b4151d990a0ebab3e53_platform_optimization_tab-3.webp`,
  },
  {
    label: "SEO",
    title: "SEO",
    desc: "Improve your SEO and discoverability with fine-tuned controls, high-performance hosting, and flexible content management tools.",
    cta: "Discover SEO",
    href: "/feature/seo",
    img: `${CDN}/68b89b41f98dd81280d9dbaf_platform_optimization_tab-4.webp`,
  },
];

// Section 5: Management tabs
const MANAGEMENT_TABS = [
  {
    label: "Collaboration and control",
    title: "Collaboration and control",
    desc: "Work better together and avoid unauthorized changes with advanced roles and permissions, publishing workflows, design approvals, and more.",
    cta: "",
    href: "",
    img: `${CDN}/68b89b4123f6caf64c2eaa55_platform_collaboration_tab-1.webp`,
  },
  {
    label: "Hosting",
    title: "Hosting",
    desc: "Scale securely with reliable, fast hosting — managed for you. Plus, select Enterprise customers are covered with a 99.99% uptime SLA.",
    cta: "",
    href: "",
    img: `${CDN}/68b89b41024fdc6933314293_platform_collaboration_tab-2.webp`,
  },
  {
    label: "Security and compliance",
    title: "Security and compliance",
    desc: "Launch with peace of mind thanks to Kreature's robust security and compliance features, so you can grow with uninterrupted momentum.",
    cta: "",
    href: "",
    img: `${CDN}/68b89b41e3ae634d5aa53cc3_platform_collaboration_tab-3.webp`,
  },
  {
    label: "Page building",
    title: "Page building",
    desc: "Empower your teams to create on-brand pages faster than ever with drag-and-drop page building.",
    cta: "Discover page building",
    href: "/feature/page-building",
    img: `${CDN}/68b8a372e2a3821c04e6b7e1_platform_collaboration_tab-4.webp`,
  },
];

// Section 6: Ecosystem tabs
const ECOSYSTEM_TABS = [
  {
    label: "Kreature Apps",
    title: "Kreature Apps",
    desc: "Seamlessly connect your sites to your existing tech stack (including business-critical apps like HubSpot), find powerful new apps, or build an app yourself using Kreature's APIs.",
    cta: "Browse apps",
    href: "/apps",
    img: `${CDN}/68b89b405b372ba04382d9c4_platform_apis_tab-1.webp`,
  },
  {
    label: "Marketplace",
    title: "Marketplace",
    desc: "From templates to Experts, discover everything you need to create an amazing site with Kreature.",
    cta: "Explore Marketplace",
    href: "/marketplace",
    img: `${CDN}/68b89beeb19af83f52d421e5_75acd606cfe3b07f0bed3a30d8810f4b_ai_streamlined-2-card-section_left.webp`,
  },
  {
    label: "Figma plugin",
    title: "Figma plugin",
    desc: "Turn static designs into clean, production-ready code with the Figma to Kreature plugin.",
    cta: "Get the plugin",
    href: "/feature/figma-to-webflow",
    img: `${CDN}/68b89b40f98dd81280d9db1a_platform_apis_tab-3.webp`,
  },
  {
    label: "DevLink",
    title: "DevLink",
    desc: "Streamline the design to development process by creating production-ready React components visually, with DevLink.",
    cta: "Explore DevLink",
    href: "/feature/devlink",
    img: `${CDN}/68b89b41c03110a1047fad2d_platform_apis_tab-4.webp`,
  },
];

// Section 7: Testimonials
const TESTIMONIALS = [
  {
    stat: "20%",
    label: "Increase in site-wide conversion",
    quote: "With Kreature, we've significantly improved organic traffic, SEO, and conversions. From my perspective as CMO, that's a huge win because our brand is reaching more people.",
    name: "Elizabeth Walton Egan",
    role: "CMO",
    company: "Lattice",
    logo: `${LOGOS_LIGHT}/lattice.svg`,
    img: `${TESTIMONIAL_CDN}/68b065e3cee20f75820054b6_feature-image-lattice.webp`,
  },
  {
    stat: "$6M",
    label: "in cost savings annually",
    quote: "We're saving upwards of $6 million a year with Kreature, and we've reinvested those savings in other areas like website optimization and localization… that's been really powerful.",
    name: "Malcolm Greene",
    role: "Chief Information Officer",
    company: "Orangetheory Fitness",
    logo: `${LOGOS_LIGHT}/orangetheory.svg`,
    img: `${TESTIMONIAL_CDN}/68b9969033c7fa0eb2c29c2f_feature-image-orangetheory.webp`,
  },
  {
    stat: "98%",
    label: "Increase in speed to market",
    quote: "With Kreature Enterprise, we're able to move with trust and confidence that things will get done quickly without compromising our brand or draining resources.",
    name: "Cat Origitano",
    role: "VP of Product & Portfolio Marketing",
    company: "Fivetran",
    logo: `${LOGOS_LIGHT}/fivetran.svg`,
    img: `${TESTIMONIAL_CDN}/68b065e3cee20f75820054a0_feature-image-fivetran.webp`,
  },
  {
    stat: "56%",
    label: "Increase in form fills",
    quote: "Kreature empowers us to do what we do best as marketers, designers, and content creators: It strips away the technical complexity and unleashes us to be creative, try new things, and iterate quickly.",
    name: "Kokko Tso",
    role: "VP Digital Marketing",
    company: "Walker & Dunlop",
    logo: `${LOGOS_LIGHT}/walker-dunlop.svg`,
    img: `${TESTIMONIAL_CDN}/68b065e3cee20f75820054b9_feature-image-walkerdunlop.webp`,
  },
  {
    stat: "10x",
    label: "cost savings in agency fees",
    quote: "Kreature eliminates the traditionally gated processes of web development. Building for the web is no longer rigid — it's a more fluid, collaborative process that allows for faster, better output.",
    name: "Dan Dawson",
    role: "Sr. Manager of Digital Properties",
    company: "NCR",
    logo: `${LOGOS_LIGHT}/ncr.svg`,
    img: `${TESTIMONIAL_CDN}/68c03e9869a6a5a0803845db_NCR-optimized.webp`,
  },
  {
    stat: "1,170%",
    label: "increase in traffic YoY",
    quote: "Kreature doesn't just allow you to work faster and easier, but differently. Speed is huge, but once you get engineers, designers, and copywriters to really enjoy working together, that's something different.",
    name: "Carla Weis",
    role: "VP, Brand & Creative",
    company: "Docusign",
    logo: `${LOGOS_LIGHT}/docusign.svg`,
    img: `${TESTIMONIAL_CDN}/68bf1a67e66e34b3ddf5712e_author_carla-weis.webp`,
  },
];

// Section 8: Made in Kreature gallery
const SITE_GALLERY = [
  {
    name: "Jasper AI",
    src: `${CDN}/68b89b6b950c3a56ec73d48f_interactions_miw-slider_cloneable-asset_07.webp`,
  },
  { name: "Aether 1", src: `${CDN}/68b9ee931c01ec299dc30d84_main_miw_sites_05.avif` },
  { name: "Cula", src: `${CDN}/68b9ee9239be3633ac100f58_main_miw_sites_03.avif` },
  {
    name: "Palmer Dinnerware",
    src: `${CDN}/68b85448e80f2aef9f59b6fb_158d56d074b6096d5f6e86ac7094e6cb_interactions-hero-04.avif`,
  },
  {
    name: "Siena Film Festival",
    src: `${CDN}/68b9ee93b378e00e7af22358_main_miw_sites_02.avif`,
  },
  {
    name: "Normal Computing",
    src: `${CDN}/68b9ee9339be3633ac100f6f_main_miw_sites_01.avif`,
  },
  {
    name: "Giulia Gartner",
    src: `${CDN}/68b9ee92efe24074c75ffed0_main_miw_sites_04.avif`,
  },
];

/* ─── COMPONENTS ─── */

// Generic tab switcher used by sections 2-6
function TabSwitcher<T extends { label: string; title: string; desc: string; cta: string; href: string; img: string }>({
  tabs,
  activeIdx,
  onSelect,
}: {
  tabs: T[];
  activeIdx: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      className="flex items-center gap-1 mb-10 overflow-x-auto"
      style={{ borderBottom: `1px solid ${V("color-hairline")}` }}
    >
      {tabs.map((tab, i) => (
        <button
          key={tab.label}
          onClick={() => onSelect(i)}
          className="px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative"
          style={{
            ...T.bodySm,
            fontWeight: 500,
            color: i === activeIdx ? V("color-ink") : V("color-body-mid"),
            borderBottom:
              i === activeIdx
                ? `2px solid ${V("color-ink")}`
                : "2px solid transparent",
            marginBottom: "-1px",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function TabContent({
  title,
  desc,
  cta,
  href,
  img,
}: {
  title: string;
  desc: string;
  cta: string;
  href: string;
  img: string;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="mb-4" style={{ ...T.h3, color: V("color-ink") }}>
          {title}
        </h3>
        <p className="mb-6 max-w-[500px]" style={{ ...T.body, color: V("color-body") }}>
          {desc}
        </p>
        {cta && (
          <TextLink href={href}>
            {cta} <Arrow />
          </TextLink>
        )}
      </div>
      <div className="rounded-lg overflow-hidden" style={{ borderRadius: "12px" }}>
        <img src={img} alt={title} className="w-full h-auto" loading="lazy" />
      </div>
    </div>
  );
}

/* ─── SECTIONS ─── */

// 1. Hero
function HeroSection() {
  return (
    <section
      className="px-5 sm:px-8 relative"
      style={{ background: V("color-canvas"), paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Eyebrow */}
        <p
          className="mb-4 font-medium"
          style={{ ...T.bodySm, fontWeight: 500, color: V("color-body-mid") }}
        >
          Platform
        </p>

        {/* H1 */}
        <h1 className="mb-6 max-w-[900px]" style={{ ...T.h1, color: V("color-ink") }}>
          More than a website builder
        </h1>

        {/* Body */}
        <p className="mb-8 max-w-[750px]" style={{ ...T.bodyLg, color: V("color-body") }}>
          Your website is your most visible marketing channel. Kreature&rsquo;s agentic
          web marketing platform gives every team the tools to build, manage, and grow
          a website that drives real revenue &mdash; including agentic visual
          development, content management, analytics, and optimization.
        </p>

        {/* CTA */}
        <div className="mb-12">
          <OutlineBtn href="/enterprise/contact-sales">
            Contact sales <Arrow />
          </OutlineBtn>
        </div>

        {/* Device mockups */}
        <div className="relative mb-12">
          <img
            src={`${CDN}/68c9a39c128261b2128439d0_webflow-desktop.webp`}
            alt="Kreature platform on desktop"
            className="w-full h-auto rounded-lg"
            style={{ borderRadius: "12px" }}
            loading="lazy"
          />
        </div>

        {/* Trusted by */}
        <p
          className="mb-6 text-center uppercase tracking-wider"
          style={{ ...T.caption, color: V("color-mute") }}
        >
          Trusted by teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
          {TRUSTED_LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-5 w-auto"
              loading="lazy"
            />
          ))}
        </div>

        {/* Anchor nav */}
        <div
          className="flex items-center gap-6 mt-14 overflow-x-auto"
          style={{ borderTop: `1px solid ${V("color-hairline")}`, paddingTop: "24px" }}
        >
          {ANCHOR_NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium whitespace-nowrap hover:underline transition-colors"
              style={{ ...T.bodySm, fontWeight: 500, color: V("color-body-mid") }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Site builder
function SiteBuilderSection() {
  const [active, setActive] = useState(0);
  const tab = SITE_BUILDER_TABS[active];

  return (
    <SectionWrap bg="soft" pt="80px" pb="80px">
      <div id="builder">
        <h2 className="mb-4" style={{ ...T.h2, color: V("color-ink") }}>
          Site builder
        </h2>
        <p className="mb-10 max-w-[650px]" style={{ ...T.bodyLg, color: V("color-body") }}>
          Kreature puts the power of code into a visual canvas so every team can
          create stunning websites quickly &mdash; and extend the power of their work
          with custom code.
        </p>

        <TabSwitcher tabs={SITE_BUILDER_TABS} activeIdx={active} onSelect={setActive} />
        <TabContent {...tab} />

        {/* Ebook card */}
        <div
          className="mt-12 p-6 rounded-lg"
          style={{
            borderRadius: "12px",
            border: `1px solid ${V("color-hairline")}`,
            background: V("color-canvas"),
          }}
        >
          <p className="mb-1" style={{ ...T.caption, color: V("color-mute") }}>
            Ebook
          </p>
          <h3 className="mb-2" style={{ ...T.h3, color: V("color-ink") }}>
            The power of building websites in a Website Experience Platform
          </h3>
          <TextLink href="/resources/ebooks/build-websites-wxp">
            View ebook <Arrow />
          </TextLink>
        </div>
      </div>
    </SectionWrap>
  );
}

// 3. Composable CMS
function CMSSection() {
  const [active, setActive] = useState(0);
  const tab = CMS_TABS[active];

  return (
    <SectionWrap pt="80px" pb="80px">
      <div id="cms">
        <h2 className="mb-4" style={{ ...T.h2, color: V("color-ink") }}>
          Composable CMS
        </h2>
        <p className="mb-10 max-w-[650px]" style={{ ...T.bodyLg, color: V("color-body") }}>
          Kreature&rsquo;s visual-first, composable CMS is made for everyone who has
          a hand in crafting digital experiences &mdash; so you can ship high-impact
          content, faster.
        </p>

        <div className="mb-6">
          <TextLink href="/feature/cms">
            Discover the CMS <Arrow />
          </TextLink>
        </div>

        <TabSwitcher tabs={CMS_TABS} activeIdx={active} onSelect={setActive} />
        <TabContent {...tab} />

        {/* Ebook card */}
        <div
          className="mt-12 p-6 rounded-lg"
          style={{
            borderRadius: "12px",
            border: `1px solid ${V("color-hairline")}`,
            background: V("color-canvas-soft"),
          }}
        >
          <p className="mb-1" style={{ ...T.caption, color: V("color-mute") }}>
            Ebook
          </p>
          <h3 className="mb-2" style={{ ...T.h3, color: V("color-ink") }}>
            How to manage your site content for scale
          </h3>
          <TextLink href="/resources/ebooks/manage-websites-wxp">
            View ebook <Arrow />
          </TextLink>
        </div>
      </div>
    </SectionWrap>
  );
}

// 4. Optimization tools
function OptimizationSection() {
  const [active, setActive] = useState(0);
  const tab = OPTIMIZATION_TABS[active];

  return (
    <SectionWrap bg="soft" pt="80px" pb="80px">
      <div id="tool">
        <h2 className="mb-4" style={{ ...T.h2, color: V("color-ink") }}>
          Optimization tools
        </h2>
        <p className="mb-10 max-w-[650px]" style={{ ...T.bodyLg, color: V("color-body") }}>
          Make your website a growth engine with built-in tools for analytics, A/B
          testing, AI-driven personalization, and SEO.
        </p>

        <TabSwitcher tabs={OPTIMIZATION_TABS} activeIdx={active} onSelect={setActive} />
        <TabContent {...tab} />

        {/* Ebook card */}
        <div
          className="mt-12 p-6 rounded-lg"
          style={{
            borderRadius: "12px",
            border: `1px solid ${V("color-hairline")}`,
            background: V("color-canvas"),
          }}
        >
          <p className="mb-1" style={{ ...T.caption, color: V("color-mute") }}>
            Ebook
          </p>
          <h3 className="mb-2" style={{ ...T.h3, color: V("color-ink") }}>
            Continuously improve your website with AI-powered optimization
          </h3>
          <TextLink href="/resources/ebooks/optimize-websites-wxp">
            View ebook <Arrow />
          </TextLink>
        </div>
      </div>
    </SectionWrap>
  );
}

// 5. Management & collaboration
function ManagementSection() {
  const [active, setActive] = useState(0);
  const tab = MANAGEMENT_TABS[active];

  return (
    <SectionWrap pt="80px" pb="80px">
      <div id="management">
        <h2 className="mb-4" style={{ ...T.h2, color: V("color-ink") }}>
          Management &amp; collaboration
        </h2>
        <p className="mb-6 max-w-[650px]" style={{ ...T.bodyLg, color: V("color-body") }}>
          You deserve a tool that grows with your site and your team. Manage both at
          scale with tools for collaboration, hosting, and more.
        </p>

        <div className="mb-10">
          <TextLink href="/enterprise">
            Explore Enterprise <Arrow />
          </TextLink>
        </div>

        <TabSwitcher tabs={MANAGEMENT_TABS} activeIdx={active} onSelect={setActive} />
        <TabContent {...tab} />
      </div>
    </SectionWrap>
  );
}

// 6. Ecosystem and APIs
function EcosystemSection() {
  const [active, setActive] = useState(0);
  const tab = ECOSYSTEM_TABS[active];

  return (
    <SectionWrap bg="soft" pt="80px" pb="80px">
      <div id="api">
        <h2 className="mb-4" style={{ ...T.h2, color: V("color-ink") }}>
          Ecosystem and APIs
        </h2>
        <p className="mb-10 max-w-[650px]" style={{ ...T.bodyLg, color: V("color-body") }}>
          Apps and plugins that help Kreature fit right into your existing tech stack.
        </p>

        <TabSwitcher tabs={ECOSYSTEM_TABS} activeIdx={active} onSelect={setActive} />
        <TabContent {...tab} />
      </div>
    </SectionWrap>
  );
}

// 7. Testimonials
function TestimonialsSection() {
  return (
    <SectionWrap pt="80px" pb="80px">
      <h2 className="mb-14 text-center" style={{ ...T.h2Lg, color: V("color-ink") }}>
        300,000+ brands move{" "}
        <span className="block sm:inline">the needle with Kreature</span>
      </h2>

      {/* Testimonial cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="rounded-lg p-6 flex flex-col"
            style={{
              borderRadius: "12px",
              border: `1px solid ${V("color-hairline")}`,
              background: V("color-canvas"),
            }}
          >
            {/* Company logo */}
            <div className="mb-6">
              <img src={t.logo} alt={t.company} className="h-6 w-auto" loading="lazy" />
            </div>

            {/* Stat */}
            <div className="mb-2" style={{ ...T.statNum, color: V("color-ink") }}>
              {t.stat}
            </div>
            <p className="mb-6" style={{ ...T.body, color: V("color-body") }}>
              {t.label}
            </p>

            {/* Quote */}
            <p className="mb-6 flex-1" style={{ ...T.quote, color: V("color-body") }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Attribution */}
            <div>
              <p style={{ ...T.attrName, color: V("color-ink") }}>{t.name}</p>
              <p style={{ ...T.attrRole, color: V("color-body-mid") }}>{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA line */}
      <div className="mt-10 text-center">
        <TextLink href="/enterprise/contact-sales">
          Talk to us about how Kreature can unlock impact for your team{" "}
          <Arrow />
        </TextLink>
      </div>
    </SectionWrap>
  );
}

// 8. Made in Kreature showcase
function ShowcaseSection() {
  return (
    <SectionWrap bg="soft" pt="80px" pb="80px">
      <div className="overflow-hidden">
        <div className="flex gap-4 mb-6 overflow-x-auto pb-4">
          {SITE_GALLERY.map((site, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-lg overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              <img
                src={site.src}
                alt={`Screenshot of the homepage for ${site.name}`}
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="p-4" style={{ background: V("color-canvas") }}>
                <p className="mb-2" style={{ ...T.h3, color: V("color-ink") }}>
                  {site.name}
                </p>
                <TextLink href="#">View website &nearr;</TextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
}

// 9. Bottom CTA
function BottomCTA() {
  return (
    <section
      className="px-5 sm:px-8 text-center relative overflow-hidden"
      style={{ background: V("color-ink"), paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(59,137,255,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(59,137,255,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <h2
          className="mb-4 max-w-[800px] mx-auto"
          style={{ ...T.h2Lg, color: "#fff" }}
        >
          Make creativity your{" "}
          <span className="block sm:inline">competitive edge</span>
        </h2>
        <p
          className="mb-10 max-w-[550px] mx-auto"
          style={{ ...T.bodyLg, color: "rgba(255,255,255,0.7)" }}
        >
          Bring your boldest ideas to life with Kreature.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryBtn href="/signup">
            Get started &mdash; it&rsquo;s free <Arrow />
          </PrimaryBtn>
          <OutlineBtn href="/enterprise/contact-sales" dark>
            Talk to sales <Arrow />
          </OutlineBtn>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
const FOOTER: Record<string, string[]> = {
  Product: [
    "Platform", "Design", "Edit content", "Interactions", "GSAP",
    "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting",
    "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO",
    "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature",
    "Accessibility", "AI",
  ],
  Solutions: [
    "Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers",
  ],
  Resources: [
    "University", "Blog", "Customer stories", "Webinars & ebooks", "Apps",
    "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary",
    "Livestreams", "The Kreature Way",
  ],
  Company: [
    "About", "Careers", "Press", "Kreature Ventures", "Kreature Shop",
    "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement",
  ],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: [
    "Discover the community", "Partner with Kreature", "Certified Partners",
    "Become a template designer", "Become an affiliate",
    "Become a Global Leader", "Find a meetup near you",
  ],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

function Footer() {
  return (
    <footer
      className="py-16 px-5 sm:px-8"
      style={{
        borderTop: `1px solid ${V("color-hairline")}`,
        background: V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
          {Object.entries(FOOTER).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="font-semibold mb-6"
                style={{ ...T.h3, color: V("color-ink") }}
              >
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:underline inline-flex items-center gap-1"
                      style={{ ...T.bodySm, color: V("color-body-mid") }}
                    >
                      {item}
                      {item === "AEO" && (
                        <span
                          className="text-[0.6rem] font-semibold uppercase px-1 py-0.5 rounded-sm"
                          style={{
                            background: V("color-accent-blue"),
                            color: "#fff",
                          }}
                        >
                          New
                        </span>
                      )}
                      {item === "Careers" && (
                        <span
                          className="text-[0.6rem] font-semibold uppercase"
                          style={{ color: V("color-accent-green") }}
                        >
                          We&rsquo;re hiring
                        </span>
                      )}
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
          style={{
            borderTop: `1px solid ${V("color-hairline")}`,
            fontSize: "12px",
            color: V("color-mute"),
          }}
        >
          <p>&copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Made in Kreature
            </a>
            {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map(
              (platform) => (
                <a key={platform} href="#" className="hover:underline">
                  {platform}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function PlatformPage() {
  return (
    <div
      className="page-wrapper"
      style={{ background: V("color-canvas"), color: V("color-body") }}
    >
      <main>
        <HeroSection />
        <SiteBuilderSection />
        <CMSSection />
        <OptimizationSection />
        <ManagementSection />
        <EcosystemSection />
        <TestimonialsSection />
        <ShowcaseSection />
        <BottomCTA />
      </main>

      <Footer />
    </div>
  );
}
