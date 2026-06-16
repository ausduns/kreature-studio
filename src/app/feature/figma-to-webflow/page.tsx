"use client";

import { useState } from "react";

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";
const ICONS_CDN = "https://dhygzobemt712.cloudfront.net/Icons/Light/64px";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY ─── */
const T = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  heroSub: { fontSize: "20px", fontWeight: 400, lineHeight: "1.5" } as React.CSSProperties,
  bodyLg: { fontSize: "18px", fontWeight: 400, lineHeight: "28.8px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", fontWeight: 400, lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", letterSpacing: "-0.16px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── WORDMARK ─── */
function Wordmark({ large }: { large?: boolean }) {
  return (
    <span className="font-semibold tracking-[-0.02em]" style={{ color: V("color-ink"), fontSize: large ? "24px" : "20px", lineHeight: large ? "31.2px" : "28px" }}>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
}

/* ─── HELPERS ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none" aria-hidden="true">&rarr;</span>;
}

/* ─── BUTTONS ─── */
function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center rounded-sm text-white transition-opacity hover:opacity-90 no-underline"
      style={{ ...T.btn, background: V("color-accent-blue") }}>
      {children}
    </a>
  );
}

function OutlineBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center rounded-sm transition-colors no-underline"
      style={{ ...T.btn, background: "transparent", color: V("color-ink"), border: `1px solid ${V("color-hairline")}` }}>
      {children}
    </a>
  );
}

/* ─── DATA ─── */

const TRUSTED_LOGOS = [
  { name: "IDEO", src: `${CDN}/68c9a39c128261b2128439dc_ideo-logo.svg` },
  { name: "Monday.com", src: `${CDN}/68c9a39c128261b2128439c8_monday.com.svg` },
  { name: "BBDO", src: `${CDN}/68c9a39c128261b2128439db_bbdo-logo.svg` },
  { name: "The New York Times", src: `${CDN}/68c9a39c128261b2128439d9_nytimes.svg` },
  { name: "TED", src: `${CDN}/68c9a39c128261b2128439d8_TED.svg` },
  { name: "Docusign", src: `${CDN}/68c9a39c128261b2128439c9_Docusign-dark.svg` },
];

const HERO_FEATURES = [
  {
    icon: `${ICONS_CDN}/FigmaToWebflow.svg`,
    title: "Go from Figma to Kreature, faster",
    desc: "Convert your static designs in Figma to clean HTML and CSS in Kreature with just a few clicks.",
  },
  {
    icon: `${ICONS_CDN}/Code.svg`,
    title: "Use templates or go completely custom",
    desc: "Whether you start with responsive prebuilt layouts and structures within the plugin or create custom components, your designs smoothly convert to Kreature.",
  },
  {
    icon: `${ICONS_CDN}/DesignSystems.svg`,
    title: "Sync your design system",
    desc: "Send your styling, layouts, colors, text, and images to Kreature and transfer them seamlessly.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Install and connect",
    desc: "Install the Figma to Kreature plugin, then authorize access to the Kreature sites or workspaces you'll be using to transfer designs from Figma to Kreature.",
    img: `${CDN}/689a0b89417a92557851221a_sticky-scroll-1.webp`,
  },
  {
    step: "02",
    title: "Click to sync",
    desc: "Create components and style with variables using auto layout in Figma, then easily translate your designs to Kreature as responsive flexbox structures — plus adjust HTML tags within Figma to get your site live faster.",
    img: `${CDN}/689a0b89d20b20685b73b36b_sticky-scroll-2.avif`,
  },
  {
    step: "03",
    title: "Polish + publish",
    desc: "Bring your static designs to life with Interactions, wire up content using our powerful CMS, and one-click publish onto the fastest hosting infrastructure.",
    img: `${CDN}/689a0b8912eb7fa1df2d113a_sticky-scroll-3.avif`,
  },
];

const CREATIVE_POWER = [
  {
    title: "Build with Kreature",
    desc: "Build powerful websites without writing code.",
    links: [
      { label: "CMS", href: "/feature/cms" },
      { label: "Ecommerce", href: "/feature/ecommerce" },
      { label: "Interactions", href: "/feature/interactions-animations" },
    ],
  },
  {
    title: "Launch with Kreature",
    desc: "Go live in just a few clicks.",
    links: [
      { label: "Robust SEO", href: "/feature/seo" },
      { label: "Reliable hosting", href: "/feature/hosting" },
      { label: "Flexible pricing", href: "/pricing" },
    ],
  },
];

type AllFeaturesTab = "build" | "manage" | "optimize" | "extend";

const ALL_FEATURES: Record<AllFeaturesTab, { label: string; href: string; img: string; groupImg: string }[]> = {
  build: [
    { label: "Design", href: "/feature/design", img: `${CDN}/68b738dcb5c5d00e4917392c_all-features_design-tab.webp`, groupImg: "" },
    { label: "Edit content", href: "/feature/edit-content", img: `${CDN}/68b738dbb954520bce1cfe3d_all-features_edit-tab.webp`, groupImg: "" },
    { label: "Interactions", href: "/feature/interactions-animations", img: `${CDN}/68b738dc137dd021d829e4a5_all-features_interactions-tab.webp`, groupImg: "" },
    { label: "Page Building", href: "/feature/page-building", img: `${CDN}/68b738dc848746a6c0ab7a4e_all-features_page-building-tab.webp`, groupImg: "" },
    { label: "Collaboration", href: "/feature/collaboration", img: `${CDN}/68b738dc8f14db8f24fea698_all-features_collaboration-tab.webp`, groupImg: "" },
    { label: "Shared Libraries", href: "/feature/shared-libraries", img: `${CDN}/68b738dcea6e8cc60b06a43a_4a2196a639c11556c79b0de71e126231_all-features_shared-libraries-tab.webp`, groupImg: "" },
  ],
  manage: [
    { label: "CMS", href: "/feature/cms", img: `${CDN}/68b738dc95a0a608b9c680fe_all-features_cms-tab.webp`, groupImg: "" },
    { label: "Hosting", href: "/feature/hosting", img: `${CDN}/68b738dc0bcaffbfd33fd7ef_all-features_hosting-tab.webp`, groupImg: "" },
    { label: "Security", href: "#", img: `${CDN}/68b738dce5b834733c5ae15d_all-features_security-tab.webp`, groupImg: "" },
    { label: "Localization", href: "/feature/localization", img: `${CDN}/68b738dcd9ca44fb52f3e4c2_all-features_localization-tab.webp`, groupImg: "" },
  ],
  optimize: [
    { label: "Analyze", href: "/feature/analyze", img: `${CDN}/68b738dc00553d5568868592_fc66ece8f4dc5bd699e4f338631b764d_all-features_analyze-tab.png`, groupImg: "" },
    { label: "Optimize", href: "/feature/optimize", img: `${CDN}/68b738dcace05dc6b3718bdf_all-features_optimize-tab.webp`, groupImg: "" },
    { label: "SEO", href: "/feature/seo", img: `${CDN}/68b738dc4d827395e8af78e9_all-features_seo-tab.webp`, groupImg: "" },
    { label: "AEO", href: "/feature/aeo", img: `${CDN}/69d70ea1d24589fb1271cc10_5bdcf6c700c06a2d15393eb7d6ae76d4_aeo_measure_ai-answers.avif`, groupImg: "" },
  ],
  extend: [
    { label: "Apps", href: "/apps", img: `${CDN}/68b738dcea25402878b81c26_all-features_apps-tab.webp`, groupImg: "" },
    { label: "Figma to Kreature", href: "/feature/figma-to-webflow", img: `${CDN}/68b738dccfa8023d89b1c32d_all-features_figma-to-webflow-tab.webp`, groupImg: "" },
    { label: "DevLink", href: "/feature/devlink", img: `${CDN}/68b738dc3a92d399dfa4609b_43f85050d26a957155f5eb57b1888338_all-features_devlink-tab.webp`, groupImg: "" },
    { label: "Code Generation", href: "/feature/code-gen", img: `${CDN}/68c1e968b90dab7e81427568_31bd325628c90624724886db05dc1070_code-generation_apps.webp`, groupImg: "" },
    { label: "Ecommerce", href: "/feature/ecommerce", img: `${CDN}/68b738dccb38d12024557eca_all-features_ecommerce-tab.webp`, groupImg: "" },
    { label: "Headless CMS APIs", href: "#", img: `${CDN}/6914bf1a6736050f546c9e55_093ac5246f3827239ddf5b5efe2bd6b0_all-features_cms-api.avif`, groupImg: "" },
  ],
};

const FEATURE_GROUP_IMAGES: Record<AllFeaturesTab, string> = {
  build: `${CDN}/68bb0f7993a0f4380aa586f7_all-features_design-build-group.webp`,
  manage: `${CDN}/68bb0f797778d884a10220ef_all-features_manage-group.webp`,
  optimize: `${CDN}/68bb0f78b85029bea903a9b1_7914ebb98ed4ff5d92dba538047ed0ca_all-features_optimize-group.png`,
  extend: `${CDN}/68bb0f79cbf2907a4ad8af1a_ecb87883597c4b253d4a71c2c27ede01_all-features_extend-group.webp`,
};

const FOOTER_COLS: Record<string, string[]> = {
  Platform: ["Design", "Edit content", "Interactions", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Figma to Kreature", "AI"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "The Kreature Way"],
  Company: ["About", "Careers", "Press", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ══════════════════════════════════════════════════════════════════════
   FIGMA TO KREATURE FEATURE PAGE
   ══════════════════════════════════════════════════════════════════════ */
export default function FigmaToKreaturePage() {
  const [featuresTab, setFeaturesTab] = useState<AllFeaturesTab>("build");

  return (
    <>
      <main>
        {/* ═══ HERO ═══ */}
        <section style={{ background: V("color-canvas"), paddingTop: "clamp(24px, 3vw, 48px)", paddingBottom: "80px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading font-semibold mb-6" style={{ ...T.h1, color: V("color-ink") }}>
                Figma to Kreature
              </h1>
              <p className="max-w-[700px] mx-auto" style={{ ...T.heroSub, color: V("color-body-mid") }}>
                Where design meets visual web development. Convert your static designs in Figma to clean, production-ready sites in Kreature with just a few clicks.
              </p>

              {/* Hero feature cards */}
              <div className="grid sm:grid-cols-3 gap-6 mt-12 max-w-[1000px] mx-auto">
                {HERO_FEATURES.map((feat) => (
                  <div key={feat.title} className="text-center p-6 rounded-xl"
                    style={{ background: V("color-canvas-soft"), border: `1px solid ${V("color-hairline")}` }}>
                    <img src={feat.icon} alt="" className="w-12 h-12 mx-auto mb-4" loading="lazy" />
                    <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: "8px" }}>{feat.title}</h3>
                    <p style={{ ...T.bodySm, color: V("color-body-mid") }}>{feat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Webflow Labs callout */}
              <div className="mt-8 max-w-[700px] mx-auto p-5 rounded-xl flex items-start gap-4"
                style={{ background: `color-mix(in srgb, ${V("color-accent-purple")} 8%, transparent)`, border: `1px solid ${V("color-accent-purple")}20` }}>
                <span className="text-xs font-semibold uppercase px-2 py-0.5 rounded shrink-0"
                  style={{ background: V("color-accent-purple"), color: "#fff" }}>Labs</span>
                <div>
                  <p style={{ ...T.bodySm, color: V("color-ink"), marginBottom: "8px" }}>
                    Try the Figma to Kreature App built by Kreature Labs. The new App connects to the plugin via the Designer APIs, so you can sync Figma variables and components to Kreature.
                  </p>
                  <a href="/apps/detail/figma-to-kreature" className="text-sm font-medium no-underline"
                    style={{ color: V("color-accent-blue") }}>
                    Try the app <Arrow />
                  </a>
                </div>
              </div>

              {/* Trusted by */}
              <p className="mt-12 mb-6 uppercase tracking-wider" style={{ fontSize: "16px", fontWeight: 400, letterSpacing: "0.05em", color: V("color-ink") }}>
                Trusted by teams at
              </p>
              <div className="flex flex-wrap justify-center gap-6 items-center opacity-40">
                {TRUSTED_LOGOS.map((l) => (
                  <img key={l.name} src={l.src} alt={l.name} className="h-5 w-auto" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section style={{ background: V("color-canvas-soft"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="text-center mb-16">
              <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "16px" }}>How it works</h2>
              <p style={{ ...T.heroSub, color: V("color-body-mid"), maxWidth: "700px", margin: "0 auto" }}>
                The Figma to Kreature plugin converts auto layout frames in Figma to clean code in Kreature, connects to the Kreature App, and syncs your design system within a few clicks.
              </p>
            </div>

            {/* Sticky scroll steps */}
            <div className="space-y-24 max-w-[1100px] mx-auto">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={step.step} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-6xl font-semibold tracking-tighter opacity-15"
                        style={{ color: V("color-accent-blue"), lineHeight: 1 }}>
                        {step.step}
                      </span>
                      <div className="w-10 h-1 rounded-full" style={{ background: V("color-accent-blue") }} />
                    </div>
                    <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: "8px" }}>{step.title}</h3>
                    <p style={{ ...T.body, color: V("color-body-mid") }}>{step.desc}</p>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <img src={step.img} alt={step.title} className="rounded-xl w-full h-auto shadow-lg" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ GAIN CREATIVE POWER ═══ */}
        <section style={{ background: V("color-canvas"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="text-center mb-16">
              <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "16px" }}>Gain creative power beyond static design</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              {CREATIVE_POWER.map((item) => (
                <div key={item.title} className="rounded-xl p-8"
                  style={{ background: V("color-canvas-soft"), border: `1px solid ${V("color-hairline")}` }}>
                  <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ ...T.body, color: V("color-body-mid"), marginBottom: "16px" }}>{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a key={link.label} href={link.href}
                        className="text-sm font-medium px-4 py-2 rounded-full no-underline transition-colors"
                        style={{ background: V("color-canvas"), color: V("color-ink"), border: `1px solid ${V("color-hairline")}` }}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ALL FEATURES ═══ */}
        <section style={{ background: V("color-ink"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <h2 style={{ ...T.h2, color: "#fff", marginBottom: "48px", textAlign: "center" }}>All features</h2>

            {/* Tabs */}
            <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
              {(Object.keys(ALL_FEATURES) as AllFeaturesTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFeaturesTab(tab)}
                  className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer capitalize"
                  style={{
                    background: featuresTab === tab ? "rgba(255,255,255,0.15)" : "transparent",
                    color: featuresTab === tab ? "#fff" : "rgba(255,255,255,0.55)",
                    border: featuresTab === tab ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
                  }}
                >
                  {tab === "build" ? "Build and Design" : tab === "manage" ? "Manage" : tab === "optimize" ? "Optimize" : "Extend"}
                </button>
              ))}
            </div>

            {/* Group image */}
            <div className="flex justify-center mb-8">
              <img
                src={FEATURE_GROUP_IMAGES[featuresTab]}
                alt={`${featuresTab} features`}
                className="max-w-full h-auto"
                style={{ maxHeight: "120px" }}
                loading="lazy"
              />
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
              {ALL_FEATURES[featuresTab].map((feat) => (
                <a key={feat.label} href={feat.href}
                  className="rounded-xl overflow-hidden no-underline transition-all hover:scale-[1.02] block group"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <img src={feat.img} alt={feat.label} className="w-full h-40 object-cover" loading="lazy" />
                  <div className="p-4 flex items-center justify-between">
                    <span style={{ ...T.h3, color: "#fff" }}>{feat.label}</span>
                    <span className="text-white opacity-40 group-hover:opacity-100 transition-opacity">&rarr;</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section style={{ background: V("color-canvas-soft"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">
              <div>
                <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "16px" }}>
                  Click to sync, polish, publish
                </h2>
                <p style={{ ...T.heroSub, color: V("color-body-mid"), marginBottom: "32px" }}>
                  Streamline your site build today with the Figma to Kreature plugin.
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <PrimaryBtn href="https://www.figma.com/community/plugin/1164923964214525039">
                    Install plugin<Arrow />
                  </PrimaryBtn>
                  <OutlineBtn href="#">Share feedback</OutlineBtn>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={`${CDN}/689a0b8d55a8c6055cca538c_cta-visual-c.avif`}
                  alt="CTA visual"
                  className="max-w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: V("color-canvas"), borderTop: `1px solid ${V("color-hairline")}` }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
            {/* Brand column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="logo-dark h-[32px] w-auto" />
                <img src="/logo/kreature-logo-light.png" alt="Kreature" className="logo-light h-[32px] w-auto" />
                <Wordmark />
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>
                Design in Figma, build in Kreature. Turn your Figma designs into live, production-ready sites without writing code.
              </p>
            </div>
            {Object.entries(FOOTER_COLS).map(([heading, links]) => (
              <div key={heading}>
                <div className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: V("color-mute") }}>
                  {heading}
                </div>
                <ul className="list-none p-0 m-0 space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm no-underline transition-colors hover:opacity-80"
                        style={{ color: V("color-body-mid") }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
            <p className="text-xs m-0" style={{ color: V("color-mute") }}>
              &copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="transition-colors hover:opacity-80" style={{ color: V("color-mute") }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="transition-colors hover:opacity-80" style={{ color: V("color-mute") }}>
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
