"use client";

import { useState } from "react";

/* ──────────────── CDN & Helpers ──────────────── */

const V = (n: string) => `var(--${n})`;
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";
const ICONS_CDN = "https://dhygzobemt712.cloudfront.net/Icons/Light/64px";

/* ──────────────── Typography ──────────────── */

const T = {
  h1: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "clamp(44px, 6vw, 80px)",
    lineHeight: 1.04,
    letterSpacing: "-0.8px",
  } as React.CSSProperties,
  h2: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "clamp(32px, 4.5vw, 56px)",
    lineHeight: 1.06,
    letterSpacing: "-0.4px",
  } as React.CSSProperties,
  h3: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "clamp(22px, 2.5vw, 28px)",
    lineHeight: 1.2,
  } as React.CSSProperties,
  heroSub: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    lineHeight: 1.4,
  } as React.CSSProperties,
  bodyLg: {
    fontSize: 18,
    lineHeight: 1.7,
  } as React.CSSProperties,
  body: {
    fontSize: 15,
    lineHeight: 1.7,
  } as React.CSSProperties,
  bodySm: {
    fontSize: 13,
    lineHeight: 1.6,
  } as React.CSSProperties,
  caption: {
    fontSize: 11,
    lineHeight: 1.5,
  } as React.CSSProperties,
  btn: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 1,
  } as React.CSSProperties,
  quote: {
    fontSize: 16,
    lineHeight: 1.65,
    fontStyle: "italic" as const,
  } as React.CSSProperties,
};

/* ──────────────── Shared Sub-Components ──────────────── */

function Wordmark({ large }: { large?: boolean }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 800,
        fontSize: large ? 22 : 18,
        letterSpacing: "-0.3px",
        color: V("color-ink"),
      }}
    >
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
}

function Arrow() {
  return (
    <span className="ml-1.5 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        ...T.heroSub,
        color: V("color-accent-blue"),
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

function Section({
  children,
  soft,
  id,
  className,
}: {
  children: React.ReactNode;
  soft?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`px-5 sm:px-8 py-20 sm:py-28 lg:py-36 ${className ?? ""}`}
      style={{
        backgroundColor: soft ? V("color-canvas-soft") : V("color-canvas"),
        borderTop: `1px solid ${V("color-hairline")}`,
      }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function PrimaryBtn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center text-[15px] font-medium px-7 py-3.5 rounded-lg transition-all duration-200"
      style={{
        backgroundColor: V("color-accent-blue"),
        color: "#ffffff",
      }}
    >
      {children}
      <Arrow />
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
      className="inline-flex items-center text-[15px] font-medium px-7 py-3.5 rounded-lg transition-all duration-200 border"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.2)" : V("color-hairline"),
        color: dark ? "#fff" : V("color-ink"),
      }}
    >
      {children}
    </a>
  );
}

/* ──────────────── Data ──────────────── */

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

const TABS = [
  {
    label: "Build visually with clean code",
    body: "Kreature's visual canvas generates production-ready HTML, CSS, and JavaScript. Developers get full access to the underlying code, can add custom components, and ship without wrestling a CMS.",
    image: `${CDN}/69178a0ed0acdaeb58690174_0820643ae5edbc64eb9651cc035b1075_eng-code-editor.jpg`,
  },
  {
    label: "Consistent components",
    body: "Define design tokens, create reusable components, and enforce brand consistency across every page. Components sync with your design system so nothing drifts out of spec.",
    image: `${CDN}/694ab6eeb7183ee695cde5ee_developers_component.avif`,
  },
  {
    label: "Integrated platform",
    body: "Connect your existing stack through REST APIs, webhooks, and native integrations. Kreature plugs into your CI/CD pipeline, version control, and monitoring tools.",
    image: `${CDN}/69178a0e43a9e1012b11bc08_85f8aff7f50c1fb3c65826fab8f3d33b_eng_cms-api.png`,
  },
  {
    label: "Serverless deployment",
    body: "Push to deploy. Kreature handles builds, CDN distribution, and scaling automatically. Preview branches, rollbacks, and zero-downtime deploys come standard.",
    image: `${CDN}/694abdcde2a1d8936f921721_developers-step-4.avif`,
  },
];

const PRODUCTION_CARDS = [
  {
    title: "Built to perform",
    body: "Lighthouse scores in the high 90s out of the box. Automatic code splitting, lazy loading, image optimization, and edge caching keep every page fast.",
    image: `${CDN}/68b9db37fd0b2fa5a48b37ea_home_engineering-teams_scale-group.webp`,
  },
  {
    title: "Embedded AI",
    body: "AI-assisted code generation, content drafting, and design suggestions work alongside your team. Developers control what AI touches and review every change.",
    image: `${CDN}/6913adae0f3ea94179303311_code-generation_apps-optimized.webp`,
  },
  {
    title: "Hosting handled",
    body: "Global CDN, DDoS protection, SSL, and 99.99% uptime SLA included. No servers to patch, no config to manage. Focus on building, not infrastructure.",
    image: `${CDN}/68b9af7bc5fb5ea81e2a27e5_4162b5b3f0642fb94cc4f841a64e8057_home_engineering-teams_integration-asset-3.webp`,
  },
];

const EXTEND_CARDS = [
  {
    icon: `${ICONS_CDN}/Apps.svg`,
    title: "Apps",
    body: "Build and publish apps that extend Kreature's functionality. Connect third-party services, add custom UI panels, or automate workflows.",
  },
  {
    icon: `${ICONS_CDN}/Cloud.svg`,
    title: "Cloud",
    body: "Deploy serverless functions, manage databases, and run background jobs on Kreature Cloud. Scale from prototype to enterprise without changing platforms.",
  },
  {
    icon: `${ICONS_CDN}/Ai.svg`,
    title: "MCP",
    body: "Use the Model Context Protocol to connect AI agents directly to your site's data, content, and APIs. Build smarter, context-aware experiences.",
  },
];

const INTEGRATIONS = [
  {
    icon: `${CDN}/694971efcd465d7d54b18bbb_developers-logo-01.svg`,
    title: "GitHub",
    body: "Every Kreature project is a Git repository. Push, pull, branch, merge, and collaborate using the tools you already know.",
  },
  {
    icon: `${CDN}/694971efcd465d7d54b18bbb_developers-logo-02.svg`,
    title: "Figma",
    body: "Sync designs from Figma into Kreature with two-way updates. Design changes flow into production without manual handoff.",
  },
  {
    icon: `${CDN}/694971efcd465d7d54b18bbb_developers-logo-03.svg`,
    title: "VS Code",
    body: "Edit code in VS Code with full IntelliSense while previewing the visual canvas side-by-side using the Kreature extension.",
  },
  {
    icon: `${CDN}/694971efcd465d7d54b18bbb_developers-logo-04.svg`,
    title: "REST API",
    body: "Programmatically manage sites, content, and users through a fully-documented REST API with typed SDKs for major languages.",
  },
];

const FAQS = [
  {
    q: "Can I use my own code with Kreature?",
    a: "Absolutely. Kreature generates clean, standards-based HTML, CSS, and JavaScript that you can extend with custom code components. You can write React, use npm packages, and manage state your way — all while non-developers build visually on the same project.",
  },
  {
    q: "Does Kreature support Git and CI/CD workflows?",
    a: "Yes. Every Kreature project is a Git repository with full branching, merging, and pull request support. Webhooks and APIs integrate with GitHub Actions, GitLab CI, CircleCI, and any CI/CD pipeline. Preview branches are generated automatically on every push.",
  },
  {
    q: "How does hosting and deployment work?",
    a: "Kreature provides fully-managed hosting on a global edge network. Deploy with a single command from the CLI, via Git push, or directly from the visual editor. Every deployment includes automatic SSL, DDoS protection, and a 99.99% uptime SLA.",
  },
  {
    q: "Can I use Kreature as a headless CMS?",
    a: "Yes. Kreature's CMS is API-first with REST and GraphQL endpoints for every content type. You can build your frontend in any framework — Next.js, Nuxt, SvelteKit, Astro — and use Kreature purely for content management while your team edits visually.",
  },
];

const FOOTER_DATA = [
  {
    heading: "Solutions",
    links: [
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Freelancers", href: "/solutions/freelancers" },
      { label: "Developers", href: "/solutions/developers" },
      { label: "Creative Teams", href: "/solutions/brand-creative-teams" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Designer", href: "/platform" },
      { label: "CMS", href: "/platform#cms" },
      { label: "Hosting", href: "/platform#hosting" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Libraries", href: "/libraries" },
      { label: "Glossary", href: "/glossary" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Contact", href: "/contact-sales" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs Webflow", href: "/webflow-clone" },
      { label: "vs Framer", href: "/webflow-way" },
      { label: "vs WordPress", href: "/made-in-webflow" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Community", href: "/community" },
    ],
  },
];

/* ──────────────── Page Component ──────────────── */

export default function DevelopersPage() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="page-wrapper">
      <main>
        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
            ═══════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 lg:py-36 text-center"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-4xl mx-auto">
            <p
              className="mb-5"
              style={{ ...T.heroSub, color: V("color-accent-blue") }}
            >
              Developers
            </p>
            <h1
              className="max-w-3xl mx-auto mb-6"
              style={{ ...T.h1, color: V("color-ink") }}
            >
              Build visually. Bring your code with you.
            </h1>
            <p
              className="max-w-2xl mx-auto mb-10"
              style={{ ...T.bodyLg, color: V("color-body") }}
            >
              Kreature lets teams build visually while developers control code
              quality, integrations, and deployments in one system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://developers.webflow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[15px] font-medium px-7 py-3.5 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: V("color-accent-blue"),
                  color: "#ffffff",
                }}
              >
                Explore developer tools
                <Arrow />
              </a>
              <OutlineBtn href="/signup">Try Kreature</OutlineBtn>
            </div>

            {/* Hero image */}
            <div className="mb-16 rounded-lg overflow-hidden" style={{ borderRadius: "8px" }}>
              <img
                src={`${CDN}/68fb8d15836afb59a523e121_component-canvas-updates-2560x1440.png`}
                alt="Kreature developer platform"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Logo marquee with stats */}
            <div
              className="py-12 overflow-hidden"
              style={{
                borderTop: `1px solid ${V("color-hairline")}`,
                borderBottom: `1px solid ${V("color-hairline")}`,
              }}
            >
              <div
                className="flex gap-8 w-max"
                style={{
                  animation: "marquee 40s linear infinite",
                }}
              >
                {[...LOGOS, ...LOGOS].map((l, i) => (
                  <div key={i} className="flex items-center gap-4 shrink-0">
                    <img
                      src={l.src}
                      alt={l.name}
                      className="h-6 w-auto opacity-40"
                      loading="lazy"
                    />
                    {l.stat && (
                      <div className="flex flex-col text-left">
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: V("color-ink"),
                          }}
                        >
                          {l.stat}
                        </span>
                        <span style={{ fontSize: "12px", color: V("color-mute") }}>
                          {l.sub}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — Problem Statement
            ═══════════════════════════════════════════ */}
        <Section soft>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-6" style={{ ...T.h3, color: V("color-ink") }}>
              Building for the web shouldn&apos;t feel like maintenance work
            </h3>
            <p className="mb-12" style={{ ...T.bodyLg, color: V("color-body") }}>
              Too often, developers spend more time managing content updates,
              chasing layout bugs, and integrating disconnected tools than
              actually building. Teams end up with a patchwork of platforms
              that slow everyone down and create friction between engineering,
              marketing, and design.
            </p>
            <h2 className="mb-6" style={{ ...T.h2, color: V("color-ink") }}>
              Go from design to production in one system
            </h2>
            <p style={{ ...T.bodyLg, color: V("color-body") }}>
              Kreature brings visual building and code-level control into a
              single platform. Designers work on a canvas that generates clean
              code. Developers extend it with custom components, connect
              external APIs, and deploy to a global edge network — all without
              switching tools or sacrificing quality.
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — Tabbed Features
            ═══════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 lg:py-36"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Tab nav */}
            <div
              className="flex flex-wrap gap-1 mb-12 border-b pb-1"
              style={{ borderColor: V("color-hairline") }}
            >
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setTabIndex(i)}
                  className="px-4 py-3 text-sm font-medium rounded-sm transition-colors whitespace-nowrap"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    background: tabIndex === i ? V("color-canvas-soft") : "transparent",
                    color: V("color-ink"),
                    border: tabIndex === i
                      ? `1px solid ${V("color-hairline")}`
                      : "1px solid transparent",
                    borderBottom:
                      tabIndex === i
                        ? `2px solid ${V("color-accent-blue")}`
                        : "2px solid transparent",
                    borderRadius: "4px",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="mb-4" style={{ ...T.h3, color: V("color-ink") }}>
                  {TABS[tabIndex].label}
                </h3>
                <p style={{ ...T.bodyLg, color: V("color-body") }}>
                  {TABS[tabIndex].body}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden" style={{ borderRadius: "8px" }}>
                <img
                  src={TABS[tabIndex].image}
                  alt={TABS[tabIndex].label}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — Production-Ready Cards
            ═══════════════════════════════════════════ */}
        <Section soft>
          <h2 className="mb-16 text-center" style={{ ...T.h2, color: V("color-ink") }}>
            Production-ready by default
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTION_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-lg overflow-hidden transition-all hover:shadow-lg"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  backgroundColor: V("color-canvas"),
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="mb-3" style={{ ...T.h3, color: V("color-ink") }}>
                    {card.title}
                  </h3>
                  <p style={{ ...T.body, color: V("color-body-mid") }}>
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — Extend Cards
            ═══════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 lg:py-36"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-16 text-center" style={{ ...T.h2, color: V("color-ink") }}>
              Extend what&apos;s possible with Kreature
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {EXTEND_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="p-8 rounded-lg text-center transition-all hover:shadow-lg"
                  style={{
                    borderRadius: "8px",
                    border: `1px solid ${V("color-hairline")}`,
                    backgroundColor: V("color-canvas-soft"),
                  }}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-12 h-12 mx-auto mb-5 opacity-80"
                    loading="lazy"
                  />
                  <h3 className="mb-3" style={{ ...T.h3, color: V("color-ink") }}>
                    {card.title}
                  </h3>
                  <p style={{ ...T.body, color: V("color-body-mid") }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — Integrations
            ═══════════════════════════════════════════ */}
        <Section soft>
          <h2 className="mb-16 text-center" style={{ ...T.h2, color: V("color-ink") }}>
            Top integrations for developers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTEGRATIONS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg text-center transition-all hover:shadow-lg"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  backgroundColor: V("color-canvas"),
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mx-auto mb-4"
                  loading="lazy"
                />
                <h4
                  className="mb-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: V("color-ink"),
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ ...T.bodySm, color: V("color-body-mid") }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 7 — CTA with Image
            ═══════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 lg:py-36"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6" style={{ ...T.h2, color: V("color-ink") }}>
                  Kreature for developers
                </h2>
                <p className="mb-8" style={{ ...T.bodyLg, color: V("color-body") }}>
                  From custom code components to API-first content management,
                  Kreature gives developers the tools to build faster without
                  sacrificing control. See how engineering teams ship better
                  web experiences on Kreature.
                </p>
                <a
                  href="https://developers.webflow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[15px] font-medium px-7 py-3.5 rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: V("color-accent-blue"),
                    color: "#ffffff",
                  }}
                >
                  Explore developer tools
                  <Arrow />
                </a>
              </div>
              <div className="rounded-lg overflow-hidden" style={{ borderRadius: "8px" }}>
                <img
                  src={`${CDN}/68e7e623172a7054393c807b_vs_vercel_developers.webp`}
                  alt="Kreature for developers"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 8 — Engineering Leads CTA
            ═══════════════════════════════════════════ */}
        <Section soft>
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-5" style={{ ...T.heroSub, color: V("color-accent-blue") }}>
              Engineering leads
            </p>
            <h2 className="mb-6" style={{ ...T.h2, color: V("color-ink") }}>
              How engineering leads use Kreature
            </h2>
            <p className="mb-10" style={{ ...T.bodyLg, color: V("color-body") }}>
              Stop being the bottleneck for marketing requests. Empower your
              team to build and publish without sacrificing code quality,
              security, or governance.
            </p>
            <div
              className="rounded-lg overflow-hidden mb-8"
              style={{ borderRadius: "8px" }}
            >
              <img
                src={`${CDN}/68f11eb1ec4203437859be3b_Eng_2400x1260-1-3.png`}
                alt="Engineering leads using Kreature"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryBtn href="/signup">Try Kreature</PrimaryBtn>
              <OutlineBtn href="/enterprise">Learn about Enterprise</OutlineBtn>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 9 — FAQ
            ═══════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 lg:py-36"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-16 text-center" style={{ ...T.h2, color: V("color-ink") }}>
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-lg"
                  style={{
                    borderRadius: "8px",
                    border: `1px solid ${V("color-hairline")}`,
                    backgroundColor: V("color-canvas-soft"),
                  }}
                >
                  <h4
                    className="mb-2"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: V("color-ink"),
                    }}
                  >
                    {faq.q}
                  </h4>
                  <p style={{ ...T.body, color: V("color-body-mid") }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 10 — Bottom CTA (dark bg)
            ═══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8"
          style={{
            backgroundColor: V("color-ink"),
            paddingTop: "clamp(3rem, 8vw, 7rem)",
            paddingBottom: "clamp(3rem, 8vw, 7rem)",
          }}
        >
          {/* Ambient decorative images */}
          <img
            src={`${CDN}/6894d7a5d9b174d9177a363c_pagebuilding-cta.avif`}
            alt=""
            className="absolute bottom-0 left-0 w-48 opacity-20 pointer-events-none z-0"
            loading="lazy"
          />
          <img
            src={`${CDN}/6894d7a5d9b174d9177a363c_pagebuilding-cta.avif`}
            alt=""
            className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none z-0 scale-x-[-1]"
            loading="lazy"
          />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2
              className="mb-6"
              style={{ ...T.h2, color: V("color-canvas") }}
            >
              Get started for free
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: V("color-mute-soft"),
              }}
            >
              Build your first project with full access to Kreature&apos;s
              developer tools. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/signup"
                className="inline-flex items-center text-[15px] font-medium px-7 py-3.5 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: V("color-accent-blue"),
                  color: "#ffffff",
                }}
              >
                Sign up
                <Arrow />
              </a>
              <OutlineBtn href="https://developers.webflow.com/" dark>
                Explore docs
              </OutlineBtn>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{
          borderColor: V("color-hairline"),
          backgroundColor: V("color-canvas"),
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="grid sm:grid-cols-3 lg:grid-cols-7 gap-8">
            <div className="sm:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/logo/kreature-logo-dark.png"
                  alt="Kreature"
                  className="logo-dark h-[30px] w-auto"
                />
                <img
                  src="/logo/kreature-logo-light.png"
                  alt="Kreature"
                  className="logo-light h-[30px] w-auto"
                />
                <span
                  className="font-[800] text-lg tracking-tight"
                  style={{ color: V("color-ink") }}
                >
                  Kreature
                  <span style={{ color: V("color-accent-blue") }}>.</span>
                </span>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: V("color-mute") }}
              >
                AI Product Studio for teams who ship fast.
              </p>
            </div>

            {FOOTER_DATA.map((col) => (
              <div key={col.heading}>
                <div
                  className="text-xs uppercase tracking-wider font-semibold mb-4"
                  style={{ color: V("color-body-mid") }}
                >
                  {col.heading}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs transition-colors hover:underline"
                        style={{ color: V("color-mute") }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderColor: V("color-hairline") }}
          >
            <p className="text-xs" style={{ color: V("color-mute-soft") }}>
              &copy; {new Date().getFullYear()} Kreature Studio. All rights
              reserved.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition-colors"
                style={{ color: V("color-mute") }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors"
                style={{ color: V("color-mute") }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Marquee animation keyframe */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
