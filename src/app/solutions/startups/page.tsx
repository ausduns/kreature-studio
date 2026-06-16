"use client";

import { useState } from "react";

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const ICONS_CDN = "https://dhygzobemt712.cloudfront.net/Icons/Light/64px";
const ICONS_32_CDN = "https://dhygzobemt712.cloudfront.net/Icons/Light/32px";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY ─── */
const T = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px", letterSpacing: "normal" } as React.CSSProperties,
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

/* ─── ICON IMAGE ─── */
function IconImg({ name, size }: { name: string; size?: 32 | 64 }) {
  const base = size === 32 ? ICONS_32_CDN : ICONS_CDN;
  return <img src={`${base}/${name}.svg`} alt="" className="w-8 h-8" loading="lazy" />;
}

/* ─── DATA ─── */

const TRUSTED_LOGOS = [
  "mural", "copy-ai", "jasper", "vanta", "lattice", "spekit",
  "glean", "momentic-ai", "attentive", "crusoe", "elise-ai",
  "otter-ai", "chain-gpt", "bland-ai", "aleph", "observe-ai",
  "tonic-ai", "recall-ai",
];

const ICON_CARDS = [
  {
    icon: "PublishMarketing",
    title: "Launch beautifully",
    desc: "Get live with a high-performance site built on proven startup patterns. Pre-built templates, AI-assisted design, and a visual CMS that anyone on your team can use.",
  },
  {
    icon: "Ship",
    title: "Ship faster",
    desc: "Go from idea to published in hours, not weeks. Our visual builder and component library mean you ship marketing pages, landing pages, and campaigns without engineering.",
  },
  {
    icon: "OptimizeUser",
    title: "Test & iterate",
    desc: "Run A/B tests, analyze performance, and optimize conversion rates without rebuilding. Built-in analytics and experimentation tools help you find what works.",
  },
  {
    icon: "SiteScale",
    title: "Scale without rebuilding",
    desc: "Grow from your first landing page to a global web presence on the same platform. Enterprise-grade hosting, localization, and security scale with your startup.",
  },
];

const QUALIFICATION_CRITERIA = [
  "Building and selling your own software, SaaS, AI, or technology product",
  "Pre-seed to Series A, with less than $15M raised",
  "A team of fewer than 50 people",
  "New to Kreature",
  "Referred by or affiliated with one of our startup partners",
];

const TESTIMONIALS = [
  {
    name: "Seif Salama",
    role: "Product Marketing, AngelList Venture",
    img: `${CDN}/68921e4909b77d03a08fc81c_60183721e8a9e11604afee6e_1598640759506.jpeg`,
    quote: "Kreature gave us the flexibility to build and iterate on our web presence without waiting on engineering resources. We launched in days, not months.",
  },
  {
    name: "Megan Blake",
    role: "COO, Wondersauce",
    img: `${CDN}/68921d606345ea6ba8b63795_6477624697de084490b79a25_-DcKqhPO_400x400.png`,
    quote: "The speed at which we can build and ship marketing pages on Kreature is unmatched. It's become our secret weapon for growth experiments.",
  },
  {
    name: "Josh Kaplan",
    role: "Director of Design, Petal",
    img: `${CDN}/68921d3b1b743fff4e96b3f0_5de81db4154e7e7cb66a9605_josh-kaplan.jpeg`,
    quote: "We needed a platform that designers and marketers could use without bottlenecks. Kreature delivered -- our team ships updates daily.",
  },
  {
    name: "David Chin",
    role: "Design Strategist, Mural",
    img: `${CDN}/68921d62586fc00e9c9f591e_6577a2cf9c0133596600124e_David-20Chin-20(1).jpeg`,
    quote: "Kreature helped us unify our web presence across product, marketing, and brand. One platform, one team, zero rebuilds.",
  },
  {
    name: "Elyssa Albert",
    role: "VP of Design, Attentive",
    img: `${CDN}/68921df8b7ed02975aa81f12_609b198fb3c3ab3989d51db6_elyssa-albert.jpeg`,
    quote: "We evaluated every platform on the market. Kreature was the only one that gave us enterprise power with startup-speed iteration.",
  },
];

const PARTNER_TYPES = ["Accelerators", "Incubators", "Angel networks", "Venture capital firms"];

const RESOURCES = [
  {
    img: `${CDN}/68c48ee8041613cfa35b030e_66db6e17232c1d68180b06a2_60_BlogHeader_2400x1260.jpeg`,
    title: "20 best startup websites to inspire your first launch",
    href: "/blog/best-startup-websites",
  },
  {
    img: `${CDN}/68c48d9c5674fe619d3dded2_68b87393efb0dd5483d9c9a0_Blog%2520Header%2520(1).png`,
    title: "Introducing The Kreature Way: a blueprint for startup growth",
    href: "/blog/kreature-way",
  },
  {
    img: `${CDN}/68c487315674fe619d3b6ae2_676374208e655f7011715b64_15_MARKETING_4_blue_BlogHeader_2400x1260-1.jpeg`,
    title: "Homepage optimization strategies that convert visitors into users",
    href: "/blog/homepage-optimization-strategies",
  },
  {
    img: `${CDN}/69373111d0a4b9e5701cd65b_69091ccb79d89d6954b20854_eBook_The-AEO-Playbook_web_thumbnail_1000x1500.jpeg`,
    title: "The AEO playbook: how startups win with AI-engine optimization",
    href: "/resources/aeo-playbook",
  },
  {
    img: `${CDN}/69691ec3bc5c10c3c4d5d6d5_69691e1a632c6eaf0c8b55a2_CODE_DesignBlogHeader_2400x1260.jpeg`,
    title: "How developers are building marketing sites without leaving their stack",
    href: "/blog/developers-marketing-sites",
  },
  {
    img: `${CDN}/6983a2119fe2fd642ac4e494_6983a041dc64cfa72bba0f65_blog_article-hero.jpeg`,
    title: "Build sites that scale with your startup -- without rebuilding every round",
    href: "/blog/build-sites-that-scale",
  },
  {
    img: `${CDN}/68c487315674fe619d3b6ae2_676374208e655f7011715b64_15_MARKETING_4_blue_BlogHeader_2400x1260-1.jpeg`,
    title: "Turn traffic into revenue: conversion strategies for early-stage startups",
    href: "/blog/turn-traffic-into-revenue",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is the Kreature for Startups offer?",
    a: "Kreature for Startups provides qualifying early-stage companies with up to a full year of a Kreature CMS Site plan for free. You get access to the full visual builder, CMS, hosting, and all core features needed to launch and grow your web presence.",
  },
  {
    q: "Who qualifies for the startup program?",
    a: "Startups that are building and selling their own software, SaaS, AI, or technology product, are pre-seed to Series A with less than $15M raised, have fewer than 50 team members, are new to Kreature, and are referred by or affiliated with one of our startup partners.",
  },
  {
    q: "What happens after the free year ends?",
    a: "After your free year, you can continue on a paid plan that matches your needs. Many startups start on our CMS Site plan and upgrade as they grow. There is no obligation, and you can cancel anytime.",
  },
  {
    q: "Can I use Kreature for my product itself, or just marketing?",
    a: "Kreature is a web marketing platform designed for building high-performance marketing sites, landing pages, and content experiences. For building your actual product, you would use your own development stack alongside Kreature for your web presence.",
  },
  {
    q: "How do I apply for the startup offer?",
    a: "Fill out the application form on our startup application page. We review applications within 5-7 business days and notify you by email once approved. You can start building on the free plan immediately while your application is reviewed.",
  },
];

const STATS = [
  { value: "85K+", label: "Sites launched last year" },
  { value: "500+", label: "Startup ecosystem partners" },
  { value: "$20B+", label: "Raised by startups on Kreature" },
  { value: "99.99%", label: "Uptime SLA" },
];

const FOOTER = {
  Product: ["Designer", "CMS", "Hosting", "Integrations", "Security", "AEO"],
  Solutions: ["Agencies", "Freelancers", "Performance Marketers", "Startups", "Developers", "Brand & Creative Teams"],
  Resources: ["Templates", "Libraries", "Blog", "Glossary", "Webflow Way", "Made in Kreature"],
  Company: ["About", "Customers", "Partners", "Careers", "Contact sales", "Brand guidelines"],
  Compare: ["vs Webflow", "vs Framer", "vs WordPress", "vs Squarespace", "vs Wix"],
  Community: ["Forum", "Events", "Discord", "YouTube", "X", "LinkedIn"],
  "Get help": ["Support", "Docs", "Status", "Privacy policy", "Terms of service"],
};

/* ─── PAGE ─── */

export default function StartupsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="page-wrapper">
      <main>
        {/* ═══════════════════════════════════════════
            SECTION 1 - HERO
            ═══════════════════════════════════════════ */}
        <Section className="text-center">
          <p className="mb-5 font-semibold uppercase tracking-[0.2em]" style={{ ...T.caption, color: V("color-accent-blue") }}>
            Kreature for Startups
          </p>
          <h1 className="max-w-[900px] mx-auto" style={T.h1}>
            Build a site that scales with you
          </h1>
          <p className="mt-6 max-w-[720px] mx-auto" style={{ ...T.bodyLg, color: V("color-body") }}>
            Kreature is the web marketing platform that helps startups launch high-quality sites, drive performance, and grow without rebuilding.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryBtn href="/solutions/startups/startups-application">
              Apply for the startup offer <Arrow />
            </PrimaryBtn>
            <OutlineBtn href="/solutions/startups/partner-application">
              Become a startup partner
            </OutlineBtn>
          </div>

          {/* Hero image */}
          <div className="mt-16 max-w-[1100px] mx-auto">
            <img
              src={`${CDN}/689b55363c5f31dc404877bb_startup-her.webp`}
              alt="Kreature for Startups dashboard"
              className="w-full rounded-lg"
              loading="eager"
            />
          </div>
        </Section>

        {/* Trusted by logos bar */}
        <section className="px-5 sm:px-8 py-12" style={{ background: V("color-canvas") }}>
          <div className="max-w-[1440px] mx-auto">
            <p className="text-center mb-8" style={{ ...T.bodySm, color: V("color-mute") }}>
              Trusted by startups from seed to IPO
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 grayscale opacity-60">
              {TRUSTED_LOGOS.map((logo) => (
                <img
                  key={logo}
                  src={`${LOGOS_CDN}/${logo}.svg`}
                  alt={logo}
                  className="h-6 sm:h-7 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 - OFFER HIGHLIGHT
            ═══════════════════════════════════════════ */}
        <Section bg="soft" className="text-center">
          <h2 className="max-w-[800px] mx-auto" style={T.h2}>
            Qualifying startups can get up to a full year of a Kreature CMS Site plan for free
          </h2>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 3 - FOUR ICON CARDS
            ═══════════════════════════════════════════ */}
        <Section>
          <h2 className="max-w-[800px] mx-auto text-center mb-16" style={T.h2}>
            From first launch to global growth engine
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ICON_CARDS.map((card) => (
              <div key={card.title} className="text-center sm:text-left">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg" style={{ background: V("color-canvas-soft") }}>
                  <IconImg name={card.icon} size={64} />
                </div>
                <h3 className="mb-3" style={{ ...T.h3, color: V("color-ink") }}>{card.title}</h3>
                <p style={{ ...T.bodySm, color: V("color-body-mid") }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 4 - QUALIFICATION CRITERIA
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <h2 className="max-w-[800px] mx-auto text-center mb-16" style={T.h2}>
            Who qualifies
          </h2>
          <div className="max-w-[680px] mx-auto space-y-5">
            {QUALIFICATION_CRITERIA.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <img
                  src={`${ICONS_CDN}/CircleCheckYes.svg`}
                  alt=""
                  className="w-6 h-6 shrink-0 mt-0.5"
                  loading="lazy"
                />
                <p style={{ ...T.bodyLg, color: V("color-ink") }}>{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 5 - CTA
            ═══════════════════════════════════════════ */}
        <Section className="text-center">
          <h2 className="mb-6" style={T.h2}>Launch your growth engine</h2>
          <PrimaryBtn href="/solutions/startups/startups-application">
            Apply for the startup offer <Arrow />
          </PrimaryBtn>
          <p className="mt-6 max-w-[520px] mx-auto" style={{ ...T.bodySm, color: V("color-mute") }}>
            Available to qualifying startups. See criteria above for eligibility details.
            Offer subject to review and approval.
          </p>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 6 - TESTIMONIALS
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <h2 className="text-center mb-16" style={T.h2}>
            Trusted by startups at every stage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-xl border"
                style={{ background: V("color-canvas"), borderColor: V("color-hairline") }}
              >
                <p className="mb-8" style={{ ...T.body, color: V("color-ink"), fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: V("color-hairline") }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold" style={{ ...T.bodySm, color: V("color-ink") }}>{t.name}</p>
                    <p style={{ ...T.caption, color: V("color-mute") }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 7 - PARTNER CTA
            ═══════════════════════════════════════════ */}
        <Section className="text-center">
          <h2 className="mb-6" style={T.h2}>Partner with Kreature for Startups</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
            {PARTNER_TYPES.map((type, i) => (
              <span key={type} className="flex items-center gap-3">
                <span style={{ ...T.bodyLg, color: V("color-ink") }}>{type}</span>
                {i < PARTNER_TYPES.length - 1 && (
                  <span className="w-1 h-1 rounded-full" style={{ background: V("color-hairline") }} />
                )}
              </span>
            ))}
          </div>
          <PrimaryBtn href="/solutions/startups/partner-application">
            Become a Kreature partner <Arrow />
          </PrimaryBtn>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 8 - RESOURCES GRID
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <h2 className="text-center mb-16" style={T.h2}>Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCES.map((r) => (
              <a
                key={r.title}
                href={r.href}
                className="group block rounded-xl overflow-hidden border transition-shadow hover:shadow-lg"
                style={{ background: V("color-canvas"), borderColor: V("color-hairline") }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="font-semibold transition-colors group-hover:text-[var(--color-accent-blue)]" style={{ ...T.body, color: V("color-ink") }}>
                    {r.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 9 - FAQ
            ═══════════════════════════════════════════ */}
        <Section>
          <h2 className="text-center mb-16" style={T.h2}>Frequently asked questions</h2>
          <div className="max-w-[768px] mx-auto divide-y" style={{ borderColor: V("color-hairline") }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold" style={{ ...T.h3, color: V("color-ink") }}>{item.q}</span>
                  <span
                    className="shrink-0 text-2xl transition-transform duration-200"
                    style={{
                      color: V("color-mute"),
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="mt-4" style={{ ...T.body, color: V("color-body-mid") }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 10 - LOGO MARQUEE WITH STATS
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-semibold mb-2" style={{ color: V("color-ink") }}>
                  {s.value}
                </div>
                <div style={{ ...T.bodySm, color: V("color-mute") }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Logo marquee */}
          <div className="overflow-hidden py-8">
            <div
              className="flex items-center gap-12 animate-[marquee_30s_linear_infinite]"
              style={{ width: "max-content" }}
            >
              {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((logo, i) => (
                <img
                  key={`${logo}-${i}`}
                  src={`${LOGOS_CDN}/${logo}.svg`}
                  alt={logo}
                  className="h-6 sm:h-7 w-auto grayscale opacity-50"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 11 - BOTTOM CTA
            ═══════════════════════════════════════════ */}
        <Section className="text-center">
          <h2 className="mb-6" style={T.h2}>Get started for free</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryBtn href="/signup">
              Get started -- it&apos;s free <Arrow />
            </PrimaryBtn>
            <OutlineBtn href="/product-tour">
              Watch demo
            </OutlineBtn>
          </div>
        </Section>
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
