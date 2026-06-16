"use client";

import { useState, useCallback } from "react";

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
  },
  h2: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "clamp(32px, 4.5vw, 56px)",
    lineHeight: 1.06,
    letterSpacing: "-0.4px",
  },
  h3: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "clamp(22px, 2.5vw, 28px)",
    lineHeight: 1.2,
  },
  heroSub: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    lineHeight: 1.4,
  },
  bodyLg: {
    fontSize: 18,
    lineHeight: 1.7,
  },
  body: {
    fontSize: 15,
    lineHeight: 1.7,
  },
  bodySm: {
    fontSize: 13,
    lineHeight: 1.6,
  },
  caption: {
    fontSize: 11,
    lineHeight: 1.5,
  },
  btn: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 1,
  },
  quote: {
    fontSize: 16,
    lineHeight: 1.65,
    fontStyle: "italic" as const,
  },
};

/* ──────────────── Shared Sub-Components ──────────────── */

function Wordmark() {
  return (
    <span
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 800,
        fontSize: 18,
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center text-[15px] font-medium px-7 py-3.5 rounded-lg transition-all duration-200 border"
      style={{
        borderColor: V("color-hairline"),
        color: V("color-ink"),
      }}
    >
      {children}
    </a>
  );
}

/* ──────────────── Data ──────────────── */

const TRUSTED_LOGOS = [
  { name: "IDEO", src: `${LOGOS_CDN}/IDEO_logo.svg` },
  { name: "Monday.com", src: `${LOGOS_CDN}/Monday_logo.svg` },
  { name: "BBDO", src: `${LOGOS_CDN}/BBDO_logo.svg` },
  { name: "New York Times", src: `${LOGOS_CDN}/NYT_logo.svg` },
  { name: "TED", src: `${LOGOS_CDN}/TED_logo.svg` },
  { name: "DocuSign", src: `${LOGOS_CDN}/DocuSign_logo.svg` },
];

interface FeatureRow {
  title: string;
  body: string;
  image: string;
}

const STICKY_FEATURES: FeatureRow[] = [
  {
    title: "Launch exceptional, fully custom web experiences faster",
    body: "Start every project from a blank canvas or use an existing template as a starting point. Kreature's visual-first, code-capable Designer gives you pixel-perfect control over every element. Build at the speed of AI without sacrificing creative control or code quality.",
    image: `${CDN}/689f328cf64d1090a5f4d8a9_stikcy%201.avif`,
  },
  {
    title: "Prove ROI to keep your clients coming back",
    body: "Show measurable impact with built-in analytics, A/B testing infrastructure, and AI-powered conversion insights. Every site you deliver becomes a growth engine for your clients — and a recurring revenue stream for your agency.",
    image: `${CDN}/689f328c2d0082005f682440_sticky%202.avif`,
  },
  {
    title: "Manage clients securely with built-in guardrails",
    body: "Set role-based permissions, create staging environments, and control exactly what clients can edit. Keep your projects secure and your clients confident. Built-in version history and rollback means you can experiment fearlessly.",
    image: `${CDN}/698630a0601bd97aad9f53d2_client-management-freelancers-solutions.avif`,
  },
  {
    title: "Launch with enterprise-grade managed hosting, security, and performance",
    body: "Every site gets automatic SSL, global CDN, DDoS protection, and 99.99% uptime SLA. Focus on building great work — Kreature handles the infrastructure. SOC 2 Type II certified with GDPR compliance built in.",
    image: `${CDN}/69863181befa1c407f081783_sticky-img-enterprise.avif`,
  },
];

interface EcosystemCard {
  icon: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}

const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    icon: `${ICONS_CDN}/CertifiedStamp.svg`,
    title: "Become a Partner",
    body: "Join the Kreature Partner Program and unlock exclusive resources, revenue sharing, and co-marketing opportunities designed to grow your agency.",
    cta: "Learn more",
    href: "/certified-partners/apply",
  },
  {
    icon: `${ICONS_CDN}/LayoutTemplate.svg`,
    title: "Build faster with Templates",
    body: "Browse hundreds of professionally designed, fully customizable templates. Start every project with a production-ready foundation.",
    cta: "Browse Templates",
    href: "/templates",
  },
  {
    icon: `${ICONS_CDN}/Apps.svg`,
    title: "Extend with Integrations",
    body: "Connect Kreature to your existing stack with a robust library of apps and integrations. Build custom workflows that scale with your agency.",
    cta: "Browse Apps",
    href: "/apps",
  },
  {
    icon: `${ICONS_CDN}/Libraries.svg`,
    title: "Design smarter with Libraries",
    body: "Create and share reusable component libraries, style guides, and brand assets across your team and all client projects for unmatched consistency.",
    cta: "Browse libraries",
    href: "/apps",
  },
];

interface TestimonialCard {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    quote:
      "Historically, agencies won sites at cost to earn the retainer. With Kreature, we build high-performance sites profitably from day one and maintain them at a margin that actually makes sense.",
    name: "Mason Poe",
    role: "Managing Member",
    company: "Edgar Allan",
    image: `${CDN}/689f328ce74a9f28b0886ddd_testimonial-1.avif`,
  },
  {
    quote:
      "We're able to work with brands we never thought possible because Kreature gives us the same output quality as custom-coded builds — at a fraction of the timeline. It's our competitive advantage.",
    name: "Marc Debiak",
    role: "CEO",
    company: "Paper Tiger",
    image: `${CDN}/689f328ce74a9f28b0886ddf_testimonial-2.avif`,
  },
  {
    quote:
      "Kreature is the ideal intersection of creative flexibility and technical robustness. I can push the boundaries of what a site can do without worrying about breaking things or compromising performance.",
    name: "Michael Lam",
    role: "Developer",
    company: "Hubilo",
    image: `${CDN}/689f328ce74a9f28b0886de1_testimonial-3.avif`,
  },
  {
    quote:
      "Kreature has the power of custom coded web development combined with the speed and ease of use that allows our entire team — designers, PMs, and developers — to collaborate in one place.",
    name: "Marcus Jones",
    role: "COO",
    company: "Outliant",
    image: `${CDN}/689f328ce74a9f28b0886de3_testimonial-4.avif`,
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What makes Kreature different for agencies compared to other platforms?",
    answer:
      "Kreature combines visual design freedom with developer-grade code output, giving agencies pixel-perfect control without sacrificing performance. Unlike traditional website builders, Kreature generates clean, semantic code that performs exceptionally on Core Web Vitals. Plus, built-in client management tools, role-based permissions, and white-label capabilities are purpose-built for agencies managing multiple clients.",
  },
  {
    question: "How does the agency partner program work?",
    answer:
      "The Kreature Partner Program is designed to help agencies grow their business. Partners earn revenue share on client hosting subscriptions, get access to priority support, co-marketing opportunities, and exclusive resources. There are three tiers — Certified, Premier, and Global — each with increasing benefits based on the number of active client sites you manage.",
  },
  {
    question: "Can I white-label Kreature for my clients?",
    answer:
      "Yes. Premier and Global tier partners get full white-label capabilities, including a branded client dashboard with your agency's logo and colors, custom domain support, and white-labeled exports. Your clients experience your brand, not Kreature's.",
  },
  {
    question: "What kind of support do agency partners receive?",
    answer:
      "All partners get access to our partner Slack community and standard support with a 24-hour SLA. Premier partners receive priority support with a 4-hour SLA and a dedicated partner manager. Global partners get VIP support with a 1-hour SLA, custom feature development, and an annual on-site visit.",
  },
  {
    question: "How does client management work within Kreature?",
    answer:
      "Kreature's Workspace system lets you organize clients into separate environments, each with its own team members, billing, and permissions. You can invite clients to preview staging environments, control what they can edit with granular role-based permissions, and transfer site ownership seamlessly when projects end.",
  },
];

const STATS_LOGOS = [
  { name: "IDEO", src: `${LOGOS_CDN}/IDEO_logo.svg` },
  { name: "Monday", src: `${LOGOS_CDN}/Monday_logo.svg` },
  { name: "BBDO", src: `${LOGOS_CDN}/BBDO_logo.svg` },
  { name: "NYT", src: `${LOGOS_CDN}/NYT_logo.svg` },
  { name: "TED", src: `${LOGOS_CDN}/TED_logo.svg` },
  { name: "DocuSign", src: `${LOGOS_CDN}/DocuSign_logo.svg` },
  { name: "Edgar Allan", src: `${LOGOS_CDN}/EdgarAllan_logo.svg` },
  { name: "Paper Tiger", src: `${LOGOS_CDN}/PaperTiger_logo.svg` },
  { name: "Outliant", src: `${LOGOS_CDN}/Outliant_logo.svg` },
  { name: "Hubilo", src: `${LOGOS_CDN}/Hubilo_logo.svg` },
];

const STATS = [
  { value: "1,200+", label: "Agency partners" },
  { value: "45,000+", label: "Client sites built" },
  { value: "$320M+", label: "Partner revenue earned" },
  { value: "4.8/5", label: "Partner satisfaction score" },
];

/* ──────────────── FAQ Accordion ──────────────── */

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <div className="max-w-3xl mx-auto divide-y" style={{ borderColor: V("color-hairline") }}>
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 text-left"
            onClick={() => toggle(i)}
          >
            <span
              style={{
                ...T.h3,
                fontSize: "clamp(16px, 2vw, 20px)",
                color: V("color-ink"),
              }}
            >
              {faq.question}
            </span>
            <span
              className="flex-shrink-0 text-xl transition-transform duration-200"
              style={{
                transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                color: V("color-body-mid"),
              }}
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === i ? "400px" : "0px",
              opacity: openIndex === i ? 1 : 0,
              marginTop: openIndex === i ? "12px" : "0px",
            }}
          >
            <p style={{ ...T.body, color: V("color-body") }}>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────── Page Component ──────────────── */

export default function AgenciesPage() {
  return (
    <div className="page-wrapper">
      <main>
        {/* ════════════════ SECTION 1 — HERO ════════════════ */}
        <Section className="text-center" id="hero">
          <div className="max-w-4xl mx-auto">
            <p style={{ ...T.heroSub, color: V("color-accent-blue"), marginBottom: 20 }}>
              Agencies
            </p>
            <h1 style={{ ...T.h1, color: V("color-ink"), maxWidth: "850px", margin: "0 auto" }}>
              Deliver a seamless client experience every time
            </h1>
            <p
              style={{ ...T.bodyLg, color: V("color-body"), maxWidth: "680px", margin: "24px auto 0" }}
            >
              Bring every client&apos;s vision to life with pixel-perfect precision and
              developer-grade control. Optimize web experiences for conversion, AI
              readability, and what&apos;s next.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
              <PrimaryBtn href="/enterprise/contact-sales">
                Contact us about becoming an agency partner
              </PrimaryBtn>
            </div>

            {/* Hero images */}
            <div className="mt-16 grid grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img
                src={`${CDN}/689f328c98fe684bb6739dbe_hero.avif`}
                alt="Kreature agency dashboard"
                className="rounded-xl w-full h-auto col-span-3 md:col-span-2"
                loading="eager"
              />
              <img
                src={`${CDN}/689f328ca951685640a383ab_floating%201.avif`}
                alt="Agency client preview"
                className="rounded-xl w-full h-auto hidden md:block"
                loading="eager"
              />
              <img
                src={`${CDN}/689f328c10f2dddafd36a382_floating%202.jpg`}
                alt="Agency collaboration view"
                className="rounded-xl w-full h-auto hidden md:block md:col-span-1 md:col-start-2"
                loading="eager"
              />
            </div>

            {/* Trusted by logos */}
            <p
              className="mt-20 mb-6"
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: V("color-mute"),
              }}
            >
              Trusted by leading agencies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-70">
              {TRUSTED_LOGOS.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 sm:h-7 w-auto"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <p
              className="mt-12 mb-4"
              style={{ fontSize: 14, color: V("color-body-mid") }}
            >
              Start building for free. Upgrade any time.
            </p>
            <PrimaryBtn href="/signup">Get started</PrimaryBtn>
          </div>
        </Section>

        {/* ════════════════ SECTION 2 — Problem Statement ════════════════ */}
        <Section soft id="problem">
          <div className="max-w-4xl mx-auto text-center">
            <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: 24 }}>
              The way agencies build for the web is changing. Can your tools keep up?
            </h2>
            <p style={{ ...T.bodyLg, color: V("color-body"), marginBottom: 20 }}>
              Clients expect more than just a nice-looking site. They want measurable results —
              faster load times, higher conversion rates, and AI-optimized content that ranks.
              Traditional agency workflows that rely on handoffs between design and development
              are too slow, too expensive, and too rigid to keep up with the demands of modern
              digital experiences.
            </p>
            <p style={{ ...T.bodyLg, color: V("color-body") }}>
              Kreature gives agencies a single platform where designers and developers can build
              together — visually and in code — with AI-assisted workflows that eliminate
              bottlenecks. Deliver production-grade, high-performance sites faster than ever
              while keeping your margins healthy and your clients thrilled.
            </p>
          </div>
        </Section>

        {/* ════════════════ SECTION 3 — Icon Cards ════════════════ */}
        <Section id="cards">
          <h2 style={{ ...T.h2, color: V("color-ink"), textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }}>
            Build high-performing web experiences that drive results — and repeat business
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <img
                src={`${ICONS_CDN}/TimeWatch.svg`}
                alt=""
                className="w-14 h-14 mx-auto mb-6"
                loading="lazy"
              />
              <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: 12 }}>
                Make every billable hour more valuable
              </h3>
              <p style={{ ...T.body, color: V("color-body-mid") }}>
                AI-powered workflows handle the repetitive work — responsive layouts, semantic
                HTML structure, accessibility checks — so your team can focus on creative
                strategy and high-value problem solving that clients actually pay a premium for.
              </p>
            </div>

            <div className="text-center px-4">
              <img
                src={`${ICONS_CDN}/RewardsStar.svg`}
                alt=""
                className="w-14 h-14 mx-auto mb-6"
                loading="lazy"
              />
              <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: 12 }}>
                Evolve from design to growth partner
              </h3>
              <p style={{ ...T.body, color: V("color-body-mid") }}>
                Move beyond delivering static mockups. With built-in analytics, A/B testing,
                and AI-powered optimization insights, you can show clients measurable impact on
                their business metrics — turning project work into ongoing retainer relationships.
              </p>
            </div>

            <div className="text-center px-4">
              <img
                src={`${ICONS_CDN}/Interactions.svg`}
                alt=""
                className="w-14 h-14 mx-auto mb-6"
                loading="lazy"
              />
              <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: 12 }}>
                Deliver fast, reliable sites your clients can trust
              </h3>
              <p style={{ ...T.body, color: V("color-body-mid") }}>
                Every site ships with enterprise-grade performance out of the box — automatic
                image optimization, global CDN, lazy loading, and clean semantic code that
                scores 90+ on Core Web Vitals. Your clients&apos; sites load fast, stay secure,
                and rank higher.
              </p>
            </div>
          </div>
        </Section>

        {/* ════════════════ SECTION 4 — Sticky Scroll Feature Rows ════════════════ */}
        <Section soft id="features">
          <h2 style={{ ...T.h2, color: V("color-ink"), textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            How Kreature&apos;s platform helps you work smarter, not harder
          </h2>

          <div className="flex flex-col gap-28">
            {STICKY_FEATURES.map((row, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16`}
              >
                <div className="flex-1">
                  <h3 style={{ ...T.h3, color: V("color-ink"), marginBottom: 16 }}>
                    {row.title}
                  </h3>
                  <p style={{ ...T.body, color: V("color-body-mid") }}>{row.body}</p>
                </div>
                <div className="flex-1">
                  <img
                    src={row.image}
                    alt={row.title}
                    className="rounded-xl w-full h-auto shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ════════════════ SECTION 5 — Marketplace Ecosystem Cards ════════════════ */}
        <Section soft id="ecosystem">
          <div className="text-center mb-16">
            <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: 16 }}>
              Everything you need to make your business thrive
            </h2>
            <p style={{ ...T.bodyLg, color: V("color-body"), maxWidth: "600px", margin: "0 auto" }}>
              From partner resources to templates, integrations, and libraries — the Kreature
              ecosystem is built to accelerate your agency&apos;s growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ECOSYSTEM_CARDS.map((card) => (
              <div
                key={card.title}
                className="p-7 rounded-xl border transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: V("color-canvas"),
                  borderColor: V("color-hairline"),
                }}
              >
                <img
                  src={card.icon}
                  alt=""
                  className="w-12 h-12 mb-6"
                  loading="lazy"
                />
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: 17,
                    lineHeight: 1.3,
                    color: V("color-ink"),
                    marginBottom: 10,
                  }}
                >
                  {card.title}
                </h4>
                <p style={{ ...T.bodySm, color: V("color-body-mid"), flex: 1, marginBottom: 20 }}>
                  {card.body}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center text-sm font-medium transition-colors"
                  style={{ color: V("color-accent-blue") }}
                >
                  {card.cta}
                  <Arrow />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* ════════════════ SECTION 6 — Testimonials ════════════════ */}
        <Section soft id="testimonials">
          <h2 style={{ ...T.h2, color: V("color-ink"), textAlign: "center", marginBottom: 56 }}>
            Trusted by agencies worldwide
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-xl flex flex-col"
                style={{
                  backgroundColor: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <p style={{ ...T.quote, color: V("color-body"), flex: 1, marginBottom: 24 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: V("color-ink"),
                        lineHeight: 1.3,
                      }}
                    >
                      {t.name}
                    </p>
                    <p style={{ fontSize: 12, color: V("color-mute"), lineHeight: 1.4 }}>
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ════════════════ SECTION 7 — FAQ ════════════════ */}
        <Section id="faq">
          <h2 style={{ ...T.h2, color: V("color-ink"), textAlign: "center", marginBottom: 40 }}>
            Frequently asked questions
          </h2>
          <FAQAccordion faqs={FAQS} />
        </Section>

        {/* ════════════════ SECTION 8 — Logo Marquee with Stats ════════════════ */}
        <div
          className="border-y px-5 sm:px-8 py-16"
          style={{
            backgroundColor: V("color-canvas-soft"),
            borderColor: V("color-hairline"),
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-14">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: "clamp(28px, 4vw, 40px)",
                      fontWeight: 700,
                      color: V("color-ink"),
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {s.value}
                  </div>
                  <p style={{ fontSize: 13, color: V("color-mute"), marginTop: 6 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Logo marquee */}
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
              {STATS_LOGOS.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-5 sm:h-6 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════ SECTION 9 — Bottom CTA ════════════════ */}
        <Section soft id="cta" className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: 28 }}>
              Talk to us
            </h2>
            <div className="mb-6">
              <PrimaryBtn href="/enterprise/contact-sales">
                Contact partnerships
              </PrimaryBtn>
            </div>
            <p style={{ fontSize: 14, color: V("color-mute") }}>
              Learn more about how Kreature can help scale your digital experiences.
            </p>
          </div>
        </Section>
      </main>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer
        className="border-t px-5 sm:px-8 py-16"
        style={{
          borderColor: V("color-hairline"),
          backgroundColor: V("color-canvas"),
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Brand row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 mb-12 border-b" style={{ borderColor: V("color-hairline") }}>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo/kreature-logo-dark.png"
                alt="Kreature"
                className="logo-dark h-[28px] w-auto"
              />
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="logo-light h-[28px] w-auto"
              />
              <Wordmark />
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="transition-opacity opacity-60 hover:opacity-100"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: V("color-mute") }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-opacity opacity-60 hover:opacity-100"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: V("color-mute") }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer link columns */}
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-4" style={{ color: V("color-body-mid") }}>Solutions</p>
              <ul className="space-y-2.5">
                <li><a href="/solutions/agencies" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Agencies</a></li>
                <li><a href="/solutions/freelancers" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Freelancers</a></li>
                <li><a href="/solutions/developers" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Developers</a></li>
                <li><a href="/solutions/brand-creative-teams" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Creative Teams</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-4" style={{ color: V("color-body-mid") }}>Resources</p>
              <ul className="space-y-2.5">
                <li><a href="/templates" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Templates</a></li>
                <li><a href="/libraries" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Libraries</a></li>
                <li><a href="/apps" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Integrations</a></li>
                <li><a href="/blog" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-4" style={{ color: V("color-body-mid") }}>Company</p>
              <ul className="space-y-2.5">
                <li><a href="/company" className="text-sm transition-colors" style={{ color: V("color-mute") }}>About</a></li>
                <li><a href="/customers" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Customers</a></li>
                <li><a href="/certified-partners" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Partners</a></li>
                <li><a href="/enterprise/contact-sales" className="text-sm transition-colors" style={{ color: V("color-mute") }}>Contact</a></li>
              </ul>
            </div>
          </div>

          <div
            className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderColor: V("color-hairline") }}
          >
            <p className="text-xs" style={{ color: V("color-mute") }}>
              &copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="/legal/privacy" className="text-xs transition-colors" style={{ color: V("color-mute") }}>Privacy Policy</a>
              <a href="/legal/terms" className="text-xs transition-colors" style={{ color: V("color-mute") }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
