"use client";

import { useState } from "react";

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";

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
  quote: { fontSize: "32px", fontWeight: 400, lineHeight: "44.8px" } as React.CSSProperties,
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

const CUSTOMIZE_TABS = [
  {
    title: "Design and build localized sites, visually",
    desc: "Build with localized content directly in Kreature. As you add locales, you can easily switch between them and preview how each site looks for each before publishing.",
    img: `${CDN}/689513ca515e84e080594ba3_Design-visually.avif`,
  },
  {
    title: "Localize static pages and CMS items",
    desc: "As you switch between locales, you can customize static pages and CMS content directly.",
    img: `${CDN}/689513cae8d111ad04d58a6f_Localize-static-and-CMS.avif`,
  },
  {
    title: "Localize images and alt text",
    desc: "Customize images and update alt text across locales to ensure more accessible localized experiences.",
    img: `${CDN}/689513caa23f2e5a9496de94_Localize-images-and-text.avif`,
  },
  {
    title: "Control element visibility",
    desc: "Show or hide certain elements across locales to deliver the most relevant site experience based on the visitor's region.",
    img: `${CDN}/689513ca5b461e6a42edc73a_customize-control-element-vis.avif`,
  },
  {
    title: "Customize styles",
    desc: "Adjust typography and styles per-locale to accommodate for different length headlines, fonts, and more as each region or language requires.",
    img: `${CDN}/689513cadef696398a5f4def_customize-customize-styles.avif`,
  },
];

const TRANSLATE_FEATURES = [
  {
    title: "Machine-powered and manual translation",
    desc: "Streamline your first pass at total site or individual element localization with machine-powered translation — then go manual for more granular control.",
    img: `${CDN}/68950116bf9069c973fb8646_Translation.avif`,
  },
  {
    title: "Partner Apps and flexible APIs",
    desc: "Leverage direct integrations with translation management systems through our vetted Kreature Apps, or use our flexible APIs to connect a TMS of your choice.",
    img: `${CDN}/68950116e5e323310a9799a7_translate-partner-apps.avif`,
    link: { label: "Learn more about Localization APIs", href: "#" },
  },
];

const SEO_TABS = [
  {
    title: "Localized URLs and subdirectories",
    desc: "Customize your locale slug and maintain domain authority by serving your localized pages in a subdirectory (like .com/es/).",
    img: `${CDN}/689512dd4e343b65a4cace28_Localized-URLs.avif`,
  },
  {
    title: "Localized metadata",
    desc: "Easily translate meta titles and descriptions across pages for each supported locale you add.",
    img: `${CDN}/689512ddc43bdda238fdee42_Localized-metadata.avif`,
  },
  {
    title: "Localized sitemap",
    desc: "Ensure search engines understand how your localized pages are related to one another with an auto-generated sitemap that includes hreflang tags.",
    img: `${CDN}/689512dd6def4e25fd5fc459_drive-traffic-sitemap.avif`,
  },
  {
    title: "Site visitor routing",
    desc: "Let visitors choose their preferred language with a fully customizable locale selector element — or leverage automatic routing.",
    img: `${CDN}/689512dda90e64ee6337c920_Site-visitor-routing.avif`,
  },
];

const FAQS = [
  {
    q: "How does Kreature Localization work for businesses expanding globally?",
    a: "Kreature Localization provides an end-to-end solution that lets you design, build, and customize localized sites directly in the design canvas. You can switch between locales to preview and edit each version, customize both static pages and CMS content, and localize images with region-specific alt text. The platform offers machine-powered translation for quick initial localization, then allows manual refinement for accuracy. With features like localized URLs in subdirectories, auto-generated sitemaps with hreflang tags, and customizable locale selectors, you maintain strong SEO while delivering personalized experiences to each market.",
  },
  {
    q: "What translation tools does Kreature Localization integrate with?",
    a: "Kreature provides native localization tools alongside flexible integration options for your preferred workflow. You can use built-in machine translation for rapid content localization, create custom translation glossaries for consistent terminology, and manually edit translations for precision. Kreature also connects with the top translation management systems like Smartling, Lokalise, Phrase, Transperfect, and more through vetted Apps along with flexible APIs to connect to others.",
  },
  {
    q: "How does Kreature handle SEO for localized websites?",
    a: "Kreature automatically implements SEO best practices for your localized sites without additional configuration. The platform generates HTML lang tags, page-level hreflang tags, and includes hreflang tags in auto-generated sitemaps to help search engines understand your locale relationships. Each locale gets customizable subdirectories to maintain domain authority, and you can localize meta titles, descriptions, and Open Graph settings for each page.",
  },
  {
    q: "Can I customize images and visual elements for different locales in Kreature?",
    a: "Kreature Localization allows you to customize every visual aspect of your site for each locale, including styles, images, alt text, and element visibility. You can replace images entirely for specific locales (useful when images contain text), localize alt text for accessibility, or show/hide specific elements based on regional relevance.",
  },
  {
    q: "How is Kreature Localization different?",
    a: "With Kreature Localization, you can fully customize your site for global audiences — everything from styles and imagery to dynamic CMS content — in a visual-first way, with or without code. This makes it radically faster to ship truly localized sites compared to custom engineering solutions. Kreature natively hosts and manages all your localized sites, meaning increased reliability, easier scaling, reduced security risks, and a single escalation path for support.",
  },
];

const METRICS = [
  { stat: "10x", label: "In cost savings annually", co: "NCR", logos: ["verifone", "ncr"] },
  { stat: "67%", label: "decrease in dev ticketing", co: "Dropbox", logos: ["monday", "spotify", "ted"] },
  { stat: "$6M", label: "in cost savings annually", co: "Orangetheory Fitness", logos: ["greenhouse", "clear"] },
  { stat: "56%", label: "increase in form fills", co: "Walker & Dunlop", logos: ["checkout", "soundcloud"] },
  { stat: "1,170%", label: "increase in traffic YoY", co: "Docusign", logos: ["reddit"] },
  { stat: "$200M", label: "in new pipeline generated", co: "ABM", logos: [] },
  { stat: "+20%", label: "increase in site-wide conversion", co: "Lattice", logos: ["the-new-york-times", "ideo", "upwork", "discord"] },
];

const FOOTER_COLS: Record<string, string[]> = {
  Product: ["Platform", "Design", "Edit content", "Interactions", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Figma to Kreature", "AI"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "The Kreature Way"],
  Company: ["About", "Careers", "Press", "Kreature Ventures", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ══════════════════════════════════════════════════════════════════════
   LOCALIZATION FEATURE PAGE
   ══════════════════════════════════════════════════════════════════════ */
export default function LocalizationPage() {
  const [customizeTab, setCustomizeTab] = useState(0);
  const [seoTab, setSeoTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden" style={{ background: V("color-canvas"), paddingTop: "clamp(24px, 3vw, 48px)", paddingBottom: "80px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl"
                style={{ background: `color-mix(in srgb, ${V("color-accent-green")} 10%, transparent)` }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={V("color-accent-green")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>

              <h1 className="font-heading font-semibold mb-6" style={{ ...T.h1, color: V("color-ink") }}>
                Customize your site for visitors around the world
              </h1>
              <p className="max-w-[640px] mx-auto" style={{ ...T.heroSub, color: V("color-body-mid") }}>
                From design to translation to best-in-class SEO, Kreature Localization is an end-to-end solution for customizing your site for a worldwide audience.
              </p>

              <div className="flex items-center justify-center gap-4 mt-8">
                <PrimaryBtn href="/pricing#add-ons">Compare plans<Arrow /></PrimaryBtn>
                <OutlineBtn href="#customize-your-locales">Learn more about localization</OutlineBtn>
              </div>
            </div>

            {/* Trusted by */}
            <p className="text-center mb-6 uppercase tracking-wider" style={{ fontSize: "16px", fontWeight: 400, letterSpacing: "0.05em", color: V("color-ink") }}>
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center mb-10 opacity-40">
              {TRUSTED_LOGOS.map((l) => (
                <img key={l.name} src={l.src} alt={l.name} className="h-5 w-auto" loading="lazy" />
              ))}
            </div>

            {/* Hero images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1100px] mx-auto">
              <img src={`${CDN}/6894fab73425fd9ff5d2d23f_localization%20hero%20-%20top%20left.png`} alt="Localization hero" className="rounded-lg w-full h-auto" loading="lazy" />
              <div className="grid grid-cols-2 gap-4">
                <img src={`${CDN}/6894fab73425fd9ff5d2d23b_localize%20content%20-%20translate.avif`} alt="Translate" className="rounded-lg w-full h-auto" loading="lazy" />
                <img src={`${CDN}/6894fab73425fd9ff5d2d248_localize%20content%20-%20publishing.png`} alt="Publishing" className="rounded-lg w-full h-auto" loading="lazy" />
                <img src={`${CDN}/6894fab73425fd9ff5d2d251_localize%20content%20-%20sandbox.avif`} alt="Sandbox" className="rounded-lg w-full h-auto col-span-2" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CUSTOMIZE YOUR LOCALES ═══ */}
        <section id="customize-your-locales" style={{ background: V("color-canvas-soft"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "16px" }}>Customize your locales</h2>
              <p style={{ ...T.heroSub, color: V("color-body-mid"), maxWidth: "640px", margin: "0 auto" }}>
                Design, build, and customize localized sites directly in Kreature — visually, without writing code.
              </p>
            </div>

            {/* Tabs */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
              <div>
                <div className="flex flex-col gap-1 mb-6">
                  {CUSTOMIZE_TABS.map((tab, i) => (
                    <button
                      key={tab.title}
                      onClick={() => setCustomizeTab(i)}
                      className="text-left px-4 py-3 rounded-lg transition-colors border cursor-pointer"
                      style={{
                        background: customizeTab === i ? V("color-canvas") : "transparent",
                        borderColor: customizeTab === i ? V("color-hairline") : "transparent",
                      }}
                    >
                      <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: "4px" }}>{tab.title}</h3>
                      <p style={{ ...T.bodySm, color: V("color-body-mid") }}>{tab.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={CUSTOMIZE_TABS[customizeTab].img}
                  alt={CUSTOMIZE_TABS[customizeTab].title}
                  className="rounded-xl w-full h-auto shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Testimonial - Moloco */}
            <div className="mt-20 max-w-[900px] mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-xl"
                style={{ background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}>
                <img src={`${LOGOS_CDN}/moloco.svg`} alt="Moloco" className="h-8 w-auto opacity-60" />
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={`${CDN}/6894fa35a79a0c923f327292_legrand%20woolley.avif`}
                    alt="LeGrand Woolley"
                    className="w-12 h-12 rounded-full shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p style={{ ...T.body, color: V("color-ink"), marginBottom: "12px", fontStyle: "italic" }}>
                      &ldquo;Localization allows us to ship localized sites 4X faster, save on dev costs, and create custom experiences that will significantly boost engagement in our target markets.&rdquo;
                    </p>
                    <p style={{ ...T.bodySm, color: V("color-ink"), fontWeight: 600 }}>LeGrand Woolley</p>
                    <p style={{ ...T.bodySm, color: V("color-mute") }}>Marketing Operations, Moloco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRANSLATE YOUR WAY ═══ */}
        <section style={{ background: V("color-canvas"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "16px" }}>Translate your way</h2>
              <p style={{ ...T.heroSub, color: V("color-body-mid"), maxWidth: "640px", margin: "0 auto" }}>
                Translate the text on your site natively, or connect to a third-party translation tool of your choice.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
              {TRANSLATE_FEATURES.map((feat) => (
                <div key={feat.title}>
                  <img src={feat.img} alt={feat.title} className="rounded-xl w-full h-auto mb-6 shadow-lg" loading="lazy" />
                  <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: "8px" }}>{feat.title}</h3>
                  <p style={{ ...T.body, color: V("color-body-mid"), marginBottom: feat.link ? "12px" : "0" }}>{feat.desc}</p>
                  {feat.link && (
                    <a href={feat.link.href} className="inline-flex items-center text-sm font-medium no-underline"
                      style={{ color: V("color-accent-blue") }}>
                      {feat.link.label}<Arrow />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Testimonial - FlowPros */}
            <div className="mt-20 max-w-[900px] mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-xl"
                style={{ background: V("color-canvas-soft"), border: `1px solid ${V("color-hairline")}` }}>
                <img src={`${LOGOS_CDN}/flowpros.svg`} alt="FlowPros" className="h-8 w-auto opacity-60" />
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={`${CDN}/6894ff7d1e615de3267621ea_Jason%20Tinnin%20flowpros.jpg`}
                    alt="Jason Tinnin"
                    className="w-12 h-12 rounded-full shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p style={{ ...T.body, color: V("color-ink"), marginBottom: "12px", fontStyle: "italic" }}>
                      &ldquo;Localization is an absolute game changer. We were able to expand an enterprise client&apos;s global footprint by localizing 40 mission-critical webpages in the blink of an eye.&rdquo;
                    </p>
                    <p style={{ ...T.bodySm, color: V("color-ink"), fontWeight: 600 }}>Jason Tinnin</p>
                    <p style={{ ...T.bodySm, color: V("color-mute") }}>Founder, FlowPros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ DRIVE GLOBAL TRAFFIC ═══ */}
        <section style={{ background: V("color-canvas-soft"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "16px" }}>Drive global traffic</h2>
              <p style={{ ...T.heroSub, color: V("color-body-mid"), maxWidth: "640px", margin: "0 auto" }}>
                Maximize organic traffic in your target locales with Kreature&apos;s fully localized, best-in-class native SEO.
              </p>
            </div>

            {/* SEO Tabs */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
              <div>
                <div className="flex flex-col gap-1 mb-6">
                  {SEO_TABS.map((tab, i) => (
                    <button
                      key={tab.title}
                      onClick={() => setSeoTab(i)}
                      className="text-left px-4 py-3 rounded-lg transition-colors border cursor-pointer"
                      style={{
                        background: seoTab === i ? V("color-canvas") : "transparent",
                        borderColor: seoTab === i ? V("color-hairline") : "transparent",
                      }}
                    >
                      <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: "4px" }}>{tab.title}</h3>
                      <p style={{ ...T.bodySm, color: V("color-body-mid") }}>{tab.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={SEO_TABS[seoTab].img}
                  alt={SEO_TABS[seoTab].title}
                  className="rounded-xl w-full h-auto shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Testimonial - Sojern */}
            <div className="mt-20 max-w-[900px] mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-xl"
                style={{ background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}>
                <img src={`${LOGOS_CDN}/sojern.svg`} alt="Sojern" className="h-8 w-auto opacity-60" />
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={`${CDN}/689511734431f87cc65c1c13_laura-barker-sojern.avif`}
                    alt="Laura Barker"
                    className="w-12 h-12 rounded-full shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p style={{ ...T.body, color: V("color-ink"), marginBottom: "12px", fontStyle: "italic" }}>
                      &ldquo;Localization has already drastically improved our workflows — and we&apos;re so excited to see the SEO benefits across regions.&rdquo;
                    </p>
                    <p style={{ ...T.bodySm, color: V("color-ink"), fontWeight: 600 }}>Laura Barker</p>
                    <p style={{ ...T.bodySm, color: V("color-mute") }}>Senior Creative Manager, Sojern</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRY LOCALIZATION FOR FREE ═══ */}
        <section style={{ background: V("color-canvas"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
              <div>
                <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "16px" }}>Try Localization for free</h2>
                <p style={{ ...T.heroSub, color: V("color-body-mid"), marginBottom: "24px" }}>
                  Take Localization functionality for a spin to customize your site for visitors worldwide. Pay only when you&apos;re ready to publish.
                </p>
                <PrimaryBtn href="/pricing#add-ons">View pricing<Arrow /></PrimaryBtn>
              </div>
              <div>
                <img
                  src={`${CDN}/689501a6547d9112d286581b_dbb80d5f9ee92f419814061779d39fbb_canvas-preview__spendswift.avif`}
                  alt="Localization preview"
                  className="rounded-xl w-full h-auto shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section style={{ background: V("color-canvas-soft"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[900px] mx-auto px-5 sm:px-8">
            <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "48px", textAlign: "center" }}>
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <h3 style={{ ...T.h3, color: V("color-ink"), margin: 0 }}>{faq.q}</h3>
                    <span style={{
                      fontSize: "20px",
                      color: V("color-mute"),
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      lineHeight: 1,
                    }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p style={{ ...T.body, color: V("color-body-mid") }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CUSTOMER METRICS ═══ */}
        <section style={{ background: V("color-canvas"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            {/* Logo grid - showed as a horizontal scroll of metric cards */}
            <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
              {METRICS.map((m) => (
                <div
                  key={m.co}
                  className="shrink-0 rounded-xl p-8 flex flex-col items-center text-center"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                    minWidth: "280px",
                    scrollSnapAlign: "start",
                  }}
                >
                  <div className="flex gap-3 mb-4">
                    {m.logos.map((l) => (
                      <img key={l} src={`${LOGOS_CDN}/${l}.svg`} alt={l} className="h-6 w-auto opacity-50" loading="lazy" />
                    ))}
                  </div>
                  <p style={{ ...T.h1, fontSize: "48px", color: V("color-ink"), marginBottom: "4px", lineHeight: "56px" }}>
                    {m.stat}
                  </p>
                  <p style={{ ...T.bodySm, color: V("color-body-mid"), marginBottom: "8px" }}>{m.label}</p>
                  <p style={{ ...T.caption, color: V("color-mute") }}>{m.co}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BOTTOM CTA ═══ */}
        <section style={{ background: V("color-canvas-soft"), paddingTop: "112px", paddingBottom: "112px" }}>
          <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
            <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "16px" }}>Get started for free</h2>
            <p style={{ ...T.heroSub, color: V("color-body-mid"), marginBottom: "32px" }}>
              Try Kreature for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <PrimaryBtn href="/signup">Get started &mdash; it&apos;s free<Arrow /></PrimaryBtn>
              <OutlineBtn href="/product-tour">Watch demo</OutlineBtn>
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
                AI Product Studio for founders who ship fast.
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
