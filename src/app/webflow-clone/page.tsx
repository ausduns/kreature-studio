"use client";

import { useState, useCallback } from "react";

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY ─── */
const T = {
  h1:    { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h1Col: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2:    { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px", letterSpacing: "normal" } as React.CSSProperties,
  h3:    { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  heroSub: { fontSize: "20px", fontWeight: 400, lineHeight: "1.5" } as React.CSSProperties,
  bodyLg: { fontSize: "18px", fontWeight: 400, lineHeight: "28.8px" } as React.CSSProperties,
  body:   { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", fontWeight: 400, lineHeight: "22.4px" } as React.CSSProperties,
  caption:{ fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn:    { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", letterSpacing: "-0.16px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  quote:  { fontSize: "32px", fontWeight: 400, lineHeight: "44.8px" } as React.CSSProperties,
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

function ArrowUpRight() {
  return <span className="ml-1 text-[1em] leading-none select-none" aria-hidden="true">&nearr;</span>;
}

function PlayIcon() {
  return (
    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white" style={{ background: "rgba(0,0,0,0.6)" }}>
      <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor"><path d="M1 1l14 8-14 8V1z"/></svg>
    </div>
  );
}

/* ─── BADGE ─── */
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[0.65rem] font-semibold uppercase px-1.5 py-0.5 rounded-sm ${className || ""}`}
      style={{ background: V("color-accent-blue"), color: "#fff" }}>
      {children}
    </span>
  );
}

/* ─── SECTION CONTAINER ─── */
function Section({ bg, children, className }: { bg?: "soft" | "dark"; children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-5 sm:px-8 ${className || ""}`}
      style={{
        background: bg === "soft" ? V("color-canvas-soft") : bg === "dark" ? V("color-ink") : V("color-canvas"),
        paddingTop: bg === "dark" ? undefined : "112px",
        paddingBottom: bg === "dark" ? undefined : "112px",
      }}>
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── SECTION WRAPPER ─── */
function SectionWrap({ bg, children, pt, pb }: { bg?: string; children: React.ReactNode; pt?: string; pb?: string }) {
  return (
    <section
      style={{
        background: bg || V("color-canvas"),
        paddingTop: pt || "112px",
        paddingBottom: pb || "112px",
      }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">{children}</div>
    </section>
  );
}

/* ─── CTAs ─── */
function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center rounded-sm text-white transition-opacity hover:opacity-90"
      style={{ ...T.btn, background: V("color-accent-blue") }}>
      {children}
    </a>
  );
}

function OutlineBtn({ href, children, dark }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a href={href} className="inline-flex items-center rounded-sm transition-colors"
      style={{
        ...T.btn,
        background: "transparent",
        color: dark ? "#fff" : V("color-ink"),
        border: `1px solid ${dark ? "rgba(255,255,255,0.2)" : V("color-hairline")}`,
      }}>
      {children}
    </a>
  );
}

function TextLink({ href, children, dark }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a href={href} className="inline-flex items-center text-sm font-medium hover:underline transition-colors"
      style={{ color: dark ? "rgba(255,255,255,0.85)" : V("color-ink") }}>
      {children}
    </a>
  );
}

/* ─── DATA ─── */

type Team = "Marketing" | "Design" | "Engineering" | "Agency";

const LOGOS = [
  { name: "Verifone", src: `${LOGOS_CDN}/verifone.svg`, stat: "", sub: "" },
  { name: "NCR", src: `${LOGOS_CDN}/ncr.svg`, stat: "10x", sub: "In cost savings annually" },
  { name: "monday.com", src: `${LOGOS_CDN}/monday.svg`, stat: "", sub: "" },
  { name: "Spotify", src: `${LOGOS_CDN}/spotify.svg`, stat: "", sub: "" },
  { name: "TED", src: `${LOGOS_CDN}/ted.svg`, stat: "", sub: "" },
  { name: "Dropbox", src: `${LOGOS_CDN}/dropbox.svg`, stat: "67%", sub: "decrease in dev ticketing" },
  { name: "Greenhouse", src: `${LOGOS_CDN}/greenhouse.svg`, stat: "", sub: "" },
  { name: "Clear", src: `${LOGOS_CDN}/clear.svg`, stat: "", sub: "" },
  { name: "OrangeTheory", src: `${LOGOS_CDN}/orangetheory.svg`, stat: "$6M", sub: "in cost savings annually" },
  { name: "Checkout.com", src: `${LOGOS_CDN}/checkout.svg`, stat: "", sub: "" },
  { name: "SoundCloud", src: `${LOGOS_CDN}/soundcloud.svg`, stat: "", sub: "" },
  { name: "Walker & Dunlop", src: `${LOGOS_CDN}/walker-dunlop.svg`, stat: "56%", sub: "increase in form fills" },
  { name: "Reddit", src: `${LOGOS_CDN}/reddit.svg`, stat: "", sub: "" },
  { name: "Docusign", src: `${LOGOS_CDN}/docusign.svg`, stat: "1,170%", sub: "increase in traffic YoY" },
  { name: "ABM", src: `${LOGOS_CDN}/abm.svg`, stat: "$200M", sub: "in new pipeline generated" },
  { name: "NYT", src: `${LOGOS_CDN}/the-new-york-times.svg`, stat: "", sub: "" },
  { name: "IDEO", src: `${LOGOS_CDN}/ideo.svg`, stat: "", sub: "" },
  { name: "Upwork", src: `${LOGOS_CDN}/upwork.svg`, stat: "", sub: "" },
  { name: "Discord", src: `${LOGOS_CDN}/discord.svg`, stat: "", sub: "" },
  { name: "Lattice", src: `${LOGOS_CDN}/lattice.svg`, stat: "+20%", sub: "increase in site-wide conversion" },
];

const BUILD_CARDS = [
  { label: "AI site builder", desc: "Quickly generate a custom website.", cta: "Build with AI Site Builder", badge: "New", img: `${CDN}/6904db1c61b3c12d43405059_creation-thumbnail_aisb.avif`, href: "/signup" },
  { label: "Template", desc: "Start with a design that fits your needs.", cta: "Build with a template", img: `${CDN}/6904db1cdf3e06f9fe7c5377_creation-thumbnail_maeve-template.avif`, href: "/signup" },
  { label: "From scratch", desc: "Build your way on a blank canvas.", cta: "Start with a blank site", img: `${CDN}/6904db1cabdf76211061ba36_creation-thumbnail_blank.svg`, href: "/signup" },
  { label: "Enterprise", desc: "Building with a team at scale?", cta: "Talk to sales", img: `${CDN}/69f3b3ffe1fae88ba6e4a705_creation-thumbnail__enterprise.avif`, href: "/enterprise/contact-sales" },
];

const BOTTOM_CARDS = [
  { label: "Enterprise", desc: "Advanced collaboration, security, and scale for teams.", cta: "Learn about Kreature Enterprise", href: "/enterprise", accent: true },
  { label: "Kreature AEO", desc: "Own your site's visibility in AI search, right within Kreature.", cta: "Explore Kreature AEO", href: "/feature/aeo", badge: "New" },
  { label: "The Future of Search", desc: "Get tips and tricks from AEO experts in our free webinar.", cta: "View webinar series", href: "/resources/series/the-answer-engine" },
];

const PLATFORM = [
  { title: "Build together", desc: "Bring team members and AI agents into one shared workspace, with design systems to keep everything on brand.", cta: "Start building", img: `${CDN}/68b84cae6b5dd841d1e9fc49_home_platform_card-1.webp`, href: "/signup" },
  { title: "Publish at scale", desc: "Create and manage content in a visual, composable CMS — with built-in SEO and AEO to reach humans and machines alike.", cta: "Start publishing", img: `${CDN}/68b84e1aa441592c04ada2ed_home_platform_card-2.webp`, href: "/signup" },
  { title: "Optimize for growth", desc: "Turn every page into a revenue driver with native analytics and AI that show you what's working and help you scale it.", cta: "Start optimizing", img: `${CDN}/68c632d3ac920cf61b28450c_home_platform_card-3.webp`, href: "/signup" },
];

const AI_FEATURES = [
  { title: "Build", desc: "Create a site and design system from the ground up, modify it easily, and generate clean code to power dynamic experiences.", img: `${CDN}/68c633811e147b0ee1eb6e8a_e89f192c37050ced888b8c808ac27d4f_home_ai-module_build.webp` },
  { title: "Manage", desc: "Generate copy and CMS collection items individually or in bulk to keep your site fresh, drive traffic, and strengthen your brand.", img: `${CDN}/68c63381f6811a2b551391f0_e3cc7a1e5ff8216b9b9f990cdbea2567_home_ai-module_manage.webp` },
  { title: "Optimize", desc: "Turn traffic into revenue. Native tools run experiments, personalize by audience, and optimize for traditional search and LLMs.", img: `${CDN}/68c633817929cdfb716827d7_4bf237a8f14e32657fa1d915ccc2d9ba_home_ai-module_optimize.webp` },
];

const TESTIMONIALS = [
  { stat: "32", label: "global sites launched in 10 days", quote: "With Kreature, we're not just keeping up, we're setting the pace. It's the speedboat that's helping us move faster than ever before.", name: "Rob Alfano", role: "VP of Digital Marketing", co: "Verifone", logo: `${LOGOS_CDN}/verifone.svg`, img: `${CDN}/696fe69ed48d51a111c2baa2_customer-stories_verifone.avif` },
  { stat: "20%", label: "Increase in site-wide conversion", quote: "With Kreature, we've significantly improved organic traffic, SEO, and conversions. From my perspective as CMO, that's a huge win because our brand is reaching more people.", name: "Elizabeth Walton Egan", role: "CMO", co: "Lattice", logo: `${LOGOS_CDN}/lattice.svg`, img: `${CDN}/687e8d1b96312cc631cafec7/68b065e3cee20f75820054b6_feature-image-lattice.webp` },
  { stat: "$6M", label: "in cost savings annually", quote: "We're saving upwards of $6 million a year with Kreature, and we've reinvested those savings in other areas like website optimization and localization… that's been really powerful.", name: "Malcolm Greene", role: "Chief Information Officer", co: "Orangetheory Fitness", logo: `${LOGOS_CDN}/orangetheory.svg`, img: `${CDN}/687e8d1b96312cc631cafec7/68b9969033c7fa0eb2c29c2f_feature-image-orangetheory.webp` },
  { stat: "98%", label: "Increase in speed to market", quote: "With Kreature Enterprise, we're able to move with trust and confidence that things will get done quickly without compromising our brand or draining resources.", name: "Cat Origitano", role: "VP of Product & Portfolio Marketing", co: "Fivetran", logo: `${LOGOS_CDN}/fivetran.svg`, img: `${CDN}/687e8d1b96312cc631cafec7/68b065e3cee20f75820054a0_feature-image-fivetran.webp` },
  { stat: "56%", label: "Increase in form fills", quote: "Kreature empowers us to do what we do best as marketers, designers, and content creators: It strips away the technical complexity and unleashes us to be creative, try new things, and iterate quickly.", name: "Kokko Tso", role: "VP Digital Marketing", co: "Walker & Dunlop", logo: `${LOGOS_CDN}/walker-dunlop.svg`, img: `${CDN}/687e8d1b96312cc631cafec7/68b065e3cee20f75820054b9_feature-image-walkerdunlop.webp` },
  { stat: "1,170%", label: "increase in traffic YoY", quote: "Kreature doesn't just allow you to work faster and easier, but differently. Speed is huge, but once you get engineers, designers, and copywriters to really enjoy working together, that's something different.", name: "Carla Weis", role: "VP, Brand & Creative", co: "Docusign", logo: `${LOGOS_CDN}/docusign.svg`, img: `${CDN}/687e8d1b96312cc631cafec7/68bf1a67e66e34b3ddf5712e_author_carla-weis.webp` },
];

const SITE_GALLERY = [
  { name: "Jasper AI", src: `${CDN}/68b89b6b950c3a56ec73d48f_interactions_miw-slider_cloneable-asset_07.webp` },
  { name: "Aether 1", src: `${CDN}/68b9ee931c01ec299dc30d84_main_miw_sites_05.avif` },
  { name: "Cula", src: `${CDN}/68b9ee9239be3633ac100f58_main_miw_sites_03.avif` },
  { name: "Palmer Dinnerware", src: `${CDN}/68b85448e80f2aef9f59b6fb_158d56d074b6096d5f6e86ac7094e6cb_interactions-hero-04.avif` },
  { name: "Siena Film Festival", src: `${CDN}/68b9ee93b378e00e7af22358_main_miw_sites_02.avif` },
  { name: "Normal Computing", src: `${CDN}/68b9ee9339be3633ac100f6f_main_miw_sites_01.avif` },
  { name: "Giulia Gartner", src: `${CDN}/68b9ee92efe24074c75ffed0_main_miw_sites_04.avif` },
];

const TEAM_DATA: Record<Team, { cols: { label: string; desc: string; links: string[] }[] }> = {
  Marketing: { cols: [
    { label: "Agility", desc: "Create and launch new sites and pages on your timeline — no waiting for dev resources.", links: ["Build and launch web experiences without filing a ticket", "Manage content in a visual, composable CMS", "Empower every marketer with templates and page building", "Generate production-ready apps and reusable components", "Cut production time with help from Kreature's AI assistant"] },
    { label: "Impact", desc: "Every tool you need to grow traffic, convert audiences, and prove site ROI.", links: ["Understand what's working with native analytics", "Optimize for conversion with AI-powered personalization", "Reach a global audience with AI-powered localization", "Drive traffic from traditional search and LLMs with built-in tools for SEO and AEO"] },
    { label: "Scale", desc: "Give everyone on the team room to build, with guardrails that keep things on brand.", links: ["Collaborate in a shared workspace with marketing, design, dev, and AI agents", "Manage changes with comments, approvals, version control, and rollback", "Stay on-brand with design systems and shared libraries"] },
  ]},
  Design: { cols: [
    { label: "Creative freedom", desc: "Build exactly what you imagine, without compromises or workarounds.", links: ["Build with pixel-perfect precision", "Create rich interactions and animations powered by GSAP", "Own your content structure in a visual, composable CMS", "Design in Figma, build in Kreature, extend with React", "Focus on craft while AI handles the repetitive work", "Generate production-ready apps from your designs"] },
    { label: "Consistency", desc: "Scale your creative vision across every page, every launch, and every team.", links: ["Stay on brand with design systems and shared libraries", "Set access levels that protect the work without slowing the team", "Manage edits with branching, staging, approvals, and publishing workflows"] },
    { label: "Impact", desc: "Test, iterate, and make informed creative decisions that drive performance.", links: ["Understand what works with native analytics", "Optimize for conversion with AI-powered personalization", "Reach a global audience with AI-powered localization"] },
  ]},
  Engineering: { cols: [
    { label: "Efficiency", desc: "Spend more time building software that matters and less time on marketing tickets.", links: ["Build visually with the power of HTML, JS, and CSS", "Hand over content management to the teams that own it", "Generate production-ready apps and reusable components", "Extend the UI with custom code components", "Control releases with branching, staging, approvals, and publishing workflows"] },
    { label: "Integration", desc: "Build on a flexible platform your organization won't outgrow.", links: ["Save time tool-switching: Replace your Frankenstack with one platform", "Sync with Figma and import or export from React", "Deploy web apps alongside your site with Kreature Cloud", "Integrate anything with custom code and MACH-certified APIs"] },
    { label: "Scale", desc: "Secure, reliable, enterprise-grade hosting means there's nothing to slow you down.", links: ["Grow uninterrupted with 99.99% uptime, a global CDN, and edge routing", "Stay safe with 24/7 managed security, audit logs, and site backups", "Save time with zero-maintenance hosting, security, and platform updates"] },
  ]},
  Agency: { cols: [
    { label: "Creative control", desc: "Launch high-performing, distinctive client sites fast, without compromise.", links: ["Create fully custom web experiences that integrate with your clients' tech stack", "Create scroll-stopping interactions and animations", "Give clients a CMS they can actually use", "Generate production-ready web apps and reusable components", "Help clients stay on brand with design systems and shared libraries"] },
    { label: "Client management", desc: "Streamline client management and handoffs.", links: ["See every engagement at a glance", "Delegate billing to clients directly from Kreature", "Hand off client projects without downtime", "Collaborate flexibly and securely with clients on your terms"] },
    { label: "Impact", desc: "Turn every project into a long-term engagement.", links: ["Add high-margin services without adding tools", "Prove ROI with native analytics to keep your clients coming back", "Deliver enterprise-grade hosting without owning the infrastructure"] },
  ]},
};

const FOOTER: Record<string, string[]> = {
  Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility", "AI"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way"],
  Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

export default function WebflowClone() {
  const [tIdx, setTIdx] = useState(0);
  const t = TESTIMONIALS[tIdx];
  const tt = TESTIMONIALS.length;
  const [team, setTeam] = useState<Team>("Marketing");
  const prev = useCallback(() => setTIdx(i => (i - 1 + tt) % tt), [tt]);
  const next = useCallback(() => setTIdx(i => (i + 1) % tt), [tt]);
  const tl = (k: Team) => k === "Marketing" ? "Marketing teams" : k === "Design" ? "Design teams" : k === "Engineering" ? "Engineering teams" : "Agencies";

  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>

      <main>

        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
            ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: V("color-canvas"), paddingTop: "clamp(24px, 3vw, 80px)", paddingBottom: "clamp(24px, 3vw, 80px)" }}>
          {/* Background gradient */}
          <div className="absolute inset-0 pointer-events-none z-0" style={{
            background: `linear-gradient(to bottom, ${V("color-canvas")} 0%, color-mix(in srgb, ${V("color-canvas")} 85%, transparent 15%) 30%, color-mix(in srgb, ${V("color-canvas")} 40%, transparent 60%) 65%, transparent 100%)`,
          }} />
          <div className="relative z-10 px-5 sm:px-8">
            <div className="max-w-[1440px] mx-auto">

              {/* H1 + subtext */}
              <div className="mb-[clamp(2rem,4vw,3rem)]">
                <h1 className="font-heading font-semibold tracking-[-0.01em] mb-6" style={{ ...T.h1, color: V("color-ink") }}>
                  Make your website a growth&nbsp;engine
                </h1>
                <p className="max-w-[700px]" style={{ ...T.heroSub, color: V("color-body-mid") }}>
                  Build your brand. Rank in AI search. Drive real revenue. All with Kreature.
                </p>
              </div>

              {/* Video poster */}
              <div className="relative mb-10 rounded-lg overflow-hidden" style={{ borderRadius: "8px" }}>
                <img
                  src={`${CDN}/68c9a39c128261b2128439d0_webflow-desktop.webp`}
                  alt="Kreature platform preview"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <button className="absolute inset-0 flex items-center justify-center" aria-label="Play video">
                  <PlayIcon />
                </button>
              </div>

              {/* Trusted by + logos */}
              <p className="mb-6 uppercase tracking-wider" style={{ fontSize: "16px", fontWeight: 400, letterSpacing: "0.05em", color: V("color-ink") }}>
                Trusted by teams at
              </p>
              <div className="flex flex-wrap gap-6 items-center mb-8 opacity-40">
                <img src={`${CDN}/68c9a39c128261b2128439dc_ideo-logo.svg`} alt="IDEO" className="h-5 w-auto" loading="lazy" />
                <img src={`${CDN}/68c9a39c128261b2128439c8_monday.com.svg`} alt="Monday.com" className="h-5 w-auto" loading="lazy" />
                <img src={`${CDN}/68c9a39c128261b2128439db_bbdo-logo.svg`} alt="BBDO" className="h-5 w-auto" loading="lazy" />
                <img src={`${CDN}/68c9a39c128261b2128439d9_nytimes.svg`} alt="The New York Times" className="h-5 w-auto" loading="lazy" />
                <img src={`${CDN}/68c9a39c128261b2128439d8_TED.svg`} alt="TED" className="h-5 w-auto" loading="lazy" />
                <img src={`${CDN}/68c9a39c128261b2128439c9_Docusign-dark.svg`} alt="Docusign" className="h-5 w-auto" loading="lazy" />
              </div>

              {/* Build method cards — 4-col grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {BUILD_CARDS.map(c => (
                  <a key={c.label} href={c.href}
                    className="block rounded-lg overflow-hidden transition-all hover:shadow-lg"
                    style={{
                      borderRadius: "8px",
                      border: `1px solid ${V("color-hairline")}`,
                      background: V("color-canvas"),
                    }}>
                    <img src={c.img} alt={c.label} className="w-full h-40 object-cover" loading="lazy" />
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span style={{ ...T.bodySm, fontWeight: 500, color: V("color-ink") }}>{c.label}</span>
                        {c.badge && <Badge>{c.badge}</Badge>}
                      </div>
                      <p className="mb-4" style={{ ...T.bodySm, color: V("color-body-mid") }}>{c.desc}</p>
                      <span className="inline-flex items-center" style={{ ...T.bodySm, fontWeight: 500, color: V("color-ink") }}>
                        {c.cta} <Arrow />
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6" style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
                <span style={{ fontSize: "16px", color: V("color-ink") }}>Start building for free. Upgrade any time.</span>
                <PrimaryBtn href="/signup">Get started <Arrow /></PrimaryBtn>
              </div>

              {/* Bottom hero cards — 3-col */}
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                {BOTTOM_CARDS.map(c => (
                  <a key={c.label} href={c.href}
                    className="block rounded-lg p-[clamp(1rem,2vw,1.5rem)] transition-all hover:shadow-lg"
                    style={{
                      borderRadius: "8px",
                      background: c.accent ? V("color-accent-blue") : V("color-canvas"),
                      border: c.accent ? "none" : `1px solid ${V("color-hairline")}`,
                    }}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium uppercase tracking-wider" style={{ ...T.caption, color: c.accent ? "rgba(255,255,255,0.7)" : V("color-body-mid") }}>
                        {c.label}
                      </span>
                      {c.badge && <Badge>{c.badge}</Badge>}
                    </div>
                    <p className="mb-6" style={{ ...T.body, color: c.accent ? "rgba(255,255,255,0.85)" : V("color-body") }}>
                      {c.desc}
                    </p>
                    <span className="inline-flex items-center" style={{ fontSize: "16px", fontWeight: 500, color: c.accent ? "#fff" : V("color-ink") }}>
                      {c.cta} <Arrow />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — PLATFORM
            ═══════════════════════════════════════════ */}
        <Section>
          <h2 className="font-heading font-semibold leading-[1.04] mb-12" style={{ ...T.h2, color: V("color-ink") }}>
            Kreature is the agentic web marketing platform for high-performing brands
          </h2>

          <div className="grid md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] mt-[clamp(2rem,4vw,3rem)] mb-20">
            {PLATFORM.map(p => (
              <div key={p.title} className="rounded-lg overflow-hidden transition-all hover:shadow-lg"
                style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}` }}>
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-[clamp(1rem,2vw,1.5rem)]" style={{ background: V("color-canvas") }}>
                  <h3 className="font-semibold mb-3" style={{ ...T.h3, color: V("color-ink") }}>{p.title}</h3>
                  <p className="mb-6" style={{ ...T.body, color: V("color-body-mid") }}>{p.desc}</p>
                  <a href={p.href} className="inline-flex items-center"
                    style={{ fontSize: "16px", fontWeight: 500, color: V("color-ink") }}>
                    {p.cta} <Arrow />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Machine Mode blockquote */}
          <div className="pt-16 max-w-[800px]" style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
            <blockquote className="mb-6" style={{ ...T.quote, color: V("color-ink") }}>
              &ldquo;AI has raised the stakes: Now brand websites need to resonate with humans, rank in AI search, and drive measurable revenue. Kreature is the platform modern teams choose to build sites that do it all.&rdquo;
            </blockquote>
            <a href="/ai" className="inline-flex items-center" style={{ fontSize: "16px", fontWeight: 500, color: V("color-ink") }}>
              Discover Kreature AI <ArrowUpRight />
            </a>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — LOGO MARQUEE
            ═══════════════════════════════════════════ */}
        <section className="py-12 overflow-hidden border-y" style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}>
          <div className="flex gap-8 animate-[marquee_40s_linear_infinite] w-max">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <img src={l.src} alt={l.name} className="h-6 w-auto opacity-40" loading="lazy" />
                {l.stat && (
                  <div className="flex flex-col">
                    <span style={{ fontSize: "14px", fontWeight: 600, color: V("color-ink") }}>{l.stat}</span>
                    <span style={{ fontSize: "12px", color: V("color-mute") }}>{l.sub}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — CUSTOMER STORIES
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <h2 className="font-heading font-semibold leading-[1.04] mb-12" style={{ ...T.h2, color: V("color-ink") }}>
            300,000+ brands move the needle with Kreature
          </h2>

          <div className="flex items-start justify-between mb-8 gap-8 mt-6">
            <div className="hidden sm:flex items-center gap-2 shrink-0 ml-auto">
              <button onClick={prev} className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
                style={{ borderColor: V("color-hairline"), color: V("color-mute") }} aria-label="Previous">
                &larr;
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
                style={{ borderColor: V("color-hairline"), color: V("color-mute") }} aria-label="Next">
                &rarr;
              </button>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden max-w-[900px]" style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}>
            <img src={t.img} alt={`${t.co} case study`} className="w-full h-64 object-cover" loading="lazy" />
            <div className="p-[clamp(1.5rem,3vw,2.5rem)]">
              <img src={t.logo} alt={t.co} className="h-6 w-auto mb-6 opacity-60" />
              <div className="mb-6">
                <div className="font-heading font-semibold leading-none mb-2" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: V("color-ink") }}>
                  {t.stat}
                </div>
                <div className="font-medium" style={{ fontSize: "clamp(1rem,1.3vw,1.25rem)", color: V("color-body-mid") }}>
                  {t.label}
                </div>
              </div>
              <blockquote className="mb-6" style={{ ...T.quote, color: V("color-body") }}>&ldquo;{t.quote}&rdquo;</blockquote>
              <div style={{ ...T.bodySm, fontWeight: 500, color: V("color-ink") }}>{t.name}</div>
              <div style={{ ...T.bodySm, color: V("color-mute") }}>{t.role}, {t.co}</div>
              <a href={`/customers/${t.co.toLowerCase().replace(/\s+/g, "-")}`} className="inline-flex items-center mt-4"
                style={{ fontSize: "16px", fontWeight: 500, color: V("color-ink") }}>
                Read customer story <Arrow />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)} className="rounded-full transition-all"
                style={{ width: i === tIdx ? 24 : 8, height: 8, background: i === tIdx ? V("color-ink") : V("color-hairline") }}
                aria-label={`Testimonial ${i + 1}`} />
            ))}
            <span className="text-xs ml-2" style={{ color: V("color-mute") }}>{tIdx + 1} / {tt}</span>
          </div>

          <p className="mt-6" style={{ ...T.bodySm, color: V("color-body-mid") }}>
            Let&apos;s talk about what your website could be doing for your business.{" "}
            <a href="/enterprise/contact-sales" className="font-medium hover:underline" style={{ color: V("color-ink") }}>
              Talk to sales &rarr;
            </a>
          </p>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — AI FEATURES
            ═══════════════════════════════════════════ */}
        <Section>
          <h2 className="font-heading font-semibold leading-[1.04] mb-6" style={{ ...T.h2, color: V("color-ink") }}>
            From idea to impact, faster
          </h2>
          <p className="mb-4 max-w-[700px]" style={{ ...T.bodyLg, color: V("color-ink") }}>
            Kreature&apos;s agentic AI works alongside your team — drafting copy, generating pages, running experiments — with the guardrails enterprise teams need.
          </p>
          <a href="/ai" className="inline-flex items-center mb-6" style={{ fontSize: "16px", fontWeight: 500, color: V("color-ink") }}>
            Discover Kreature AI <Arrow />
          </a>

          <div className="grid md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] mt-[clamp(2rem,4vw,3rem)]">
            {AI_FEATURES.map(f => (
              <div key={f.title} className="rounded-lg overflow-hidden"
                style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}` }}>
                <img src={f.img} alt={f.title} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-[clamp(1rem,2vw,1.5rem)]" style={{ background: V("color-canvas") }}>
                  <h3 className="font-semibold mb-3" style={{ fontSize: "24px", fontWeight: 600, lineHeight: "31.2px", color: V("color-ink") }}>
                    {f.title}
                  </h3>
                  <p style={{ ...T.body, color: V("color-body-mid") }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — TEAM FEATURES
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <h2 className="font-heading font-semibold leading-[1.04] mb-12" style={{ ...T.h2, color: V("color-ink") }}>
            Everything {team === "Agency" ? "agencies" : team.toLowerCase() + " teams"} love about Kreature
          </h2>

          {/* Team tabs */}
          <div className="flex items-center gap-1 mb-10 border-b pb-1 overflow-x-auto" style={{ borderColor: V("color-hairline") }}>
            {(Object.keys(TEAM_DATA) as Team[]).map(k => (
              <button key={k} onClick={() => setTeam(k)}
                className="px-4 py-3 text-sm font-medium rounded-sm transition-colors whitespace-nowrap"
                style={{
                  ...T.bodySm,
                  fontWeight: 500,
                  background: team === k ? V("color-canvas") : "transparent",
                  color: V("color-ink"),
                  border: team === k ? `1px solid ${V("color-hairline")}` : "1px solid transparent",
                  borderBottom: team === k ? `2px solid ${V("color-ink")}` : "2px solid transparent",
                  borderRadius: "4px",
                }}>
                {tl(k)}
              </button>
            ))}
          </div>

          {/* Team columns */}
          <div className="grid md:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)]">
            {TEAM_DATA[team].cols.map(c => (
              <div key={c.label}>
                <div className="text-sm font-medium uppercase tracking-wider mb-4" style={{ ...T.bodySm, fontWeight: 500, color: V("color-body-mid") }}>
                  {c.label}
                </div>
                <p className="mb-6" style={{ ...T.body, color: V("color-body") }}>{c.desc}</p>
                <ul className="space-y-3">
                  {c.links.map(l => (
                    <li key={l}>
                      <a href="#" className="inline-flex items-center text-sm hover:underline"
                        style={{ ...T.bodySm, color: V("color-ink") }}>
                        {l} <span className="ml-1" style={{ color: V("color-mute") }}>&rarr;</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 7 — BOTTOM CTA (dark)
            ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: V("color-ink"), paddingTop: "clamp(3rem,8vw,9rem)", paddingBottom: "clamp(3rem,8vw,9rem)" }}>
          {/* Ambient UI images */}
          <img src={`${CDN}/68b5842b43dac8478419c2f1_home-ui-bot-left.webp`} alt="" className="absolute bottom-0 left-0 w-48 opacity-30 pointer-events-none z-0" loading="lazy" />
          <img src={`${CDN}/68b5842baa20ebd68da24e91_home-ui-right.webp`} alt="" className="absolute top-0 right-0 w-48 opacity-30 pointer-events-none z-0" loading="lazy" />

          <div className="max-w-[1440px] mx-auto relative z-10 px-5 sm:px-8">
            {/* CTA content */}
            <div className="max-w-[700px] mb-16">
              <h2 className="font-heading font-semibold leading-[1.04] mb-6" style={{ ...T.h2, color: V("color-canvas") }}>
                Make your website your competitive edge
              </h2>
              <p className="mb-8" style={{ ...T.heroSub, color: V("color-mute-soft") }}>
                Build a brand people trust and pipeline you can measure, all with one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryBtn href="/signup">Get started — it&apos;s free</PrimaryBtn>
                <OutlineBtn href="/enterprise/contact-sales" dark>Talk to sales</OutlineBtn>
              </div>
            </div>

            {/* Made in Kreature gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {SITE_GALLERY.map(s => (
                <div key={s.name} className="rounded-lg overflow-hidden cursor-pointer"
                  style={{ borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                  <img src={s.src} alt={s.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  <div className="p-3">
                    <div className="text-sm font-medium" style={{ ...T.bodySm, fontWeight: 500, color: V("color-canvas") }}>
                      {s.name}
                    </div>
                    <div className="text-xs mt-1" style={{ fontSize: "12px", color: V("color-mute") }}>
                      View website &#x2197;
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="py-16 px-5 sm:px-8" style={{ borderTop: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}>
        <div className="max-w-[1440px] mx-auto">

          {/* Wordmark + tagline */}
          <div className="mb-12">
            <Wordmark large />
            <p className="mt-2" style={{ ...T.bodySm, color: V("color-body-mid") }}>
              The all-in-one platform for building, launching, and growing websites.
            </p>
          </div>

          {/* 7-column nav */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(FOOTER).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="font-semibold mb-6" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px", color: V("color-ink") }}>
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item: string) => (
                    <li key={item}>
                      <a href="#" className="text-sm hover:underline inline-flex items-center gap-1" style={{ ...T.bodySm, color: V("color-body-mid") }}>
                        {item}
                        {item === "AEO" && <Badge>New</Badge>}
                        {item === "Careers" && <span className="text-[0.6rem] font-semibold uppercase" style={{ color: V("color-accent-green") }}>We&apos;re hiring</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
            <p style={{ fontSize: "12px", color: V("color-mute") }}>
              &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: "12px", color: V("color-mute") }}>
              <a href="#" className="hover:underline">Made in Kreature</a>
              {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map(p => (
                <a key={p} href="#" className="hover:underline">{p}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Marquee animation keyframe */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
