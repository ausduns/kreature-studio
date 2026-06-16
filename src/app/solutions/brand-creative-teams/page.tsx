"use client";

import { useState, useCallback, useRef, useEffect } from "react";

/* ──────────────── CDN & Helpers ──────────────── */

const V = (n: string) => `var(--${n})`;
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const ICONS_CDN = "https://dhygzobemt712.cloudfront.net/Icons/Light/64px";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";

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

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-sm text-white transition-opacity hover:opacity-90"
      style={{
        ...T.btn,
        padding: "14px 28px",
        background: V("color-accent-blue"),
      }}
    >
      {children}
    </a>
  );
}

function OutlineBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-sm transition-colors"
      style={{
        ...T.btn,
        padding: "14px 28px",
        background: "transparent",
        color: V("color-ink"),
        border: `1px solid ${V("color-hairline")}`,
      }}
    >
      {children}
    </a>
  );
}

/* ──────────────── Footer Data ──────────────── */

const FOOTER_DATA = [
  {
    heading: "Solutions",
    links: [
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Freelancers", href: "/solutions/freelancers" },
      { label: "Developers", href: "/solutions/developers" },
      { label: "Creative Teams", href: "/solutions/brand-creative-teams" },
      { label: "Performance Marketers", href: "/solutions/performance-marketers" },
      { label: "Startups", href: "/solutions/startups" },
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
      { label: "University", href: "/resources" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Contact", href: "/enterprise/contact-sales" },
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

/* ──────────────── Logo Marquee Data ──────────────── */

const MARQUEE_LOGOS = [
  { name: "Docusign", src: `${LOGOS_CDN}/docusign.svg`, stat: "1,170%", sub: "increase in traffic YoY" },
  { name: "Dropbox", src: `${LOGOS_CDN}/dropbox.svg`, stat: "67%", sub: "decrease in dev ticketing" },
  { name: "OrangeTheory", src: `${LOGOS_CDN}/orangetheory.svg`, stat: "$6M", sub: "in cost savings annually" },
  { name: "Reddit", src: `${LOGOS_CDN}/reddit.svg`, stat: "", sub: "" },
  { name: "Spotify", src: `${LOGOS_CDN}/spotify.svg`, stat: "", sub: "" },
  { name: "TED", src: `${LOGOS_CDN}/ted.svg`, stat: "", sub: "" },
  { name: "NCR", src: `${LOGOS_CDN}/ncr.svg`, stat: "10x", sub: "In cost savings annually" },
  { name: "SoundCloud", src: `${LOGOS_CDN}/soundcloud.svg`, stat: "", sub: "" },
  { name: "Walker & Dunlop", src: `${LOGOS_CDN}/walker-dunlop.svg`, stat: "56%", sub: "increase in form fills" },
  { name: "Lattice", src: `${LOGOS_CDN}/lattice.svg`, stat: "+20%", sub: "increase in site-wide conversion" },
];

/* ──────────────── Section Data ──────────────── */

const ICON_CARDS = [
  {
    icon: `${ICONS_CDN}/Interactions.svg`,
    title: "Speed and quality — without compromise",
    desc: "Launch beautiful, on-brand experiences fast. Kreature's visual canvas and design systems let your team build at the speed of creativity — not at the speed of your engineering backlog.",
  },
  {
    icon: `${ICONS_CDN}/PublishMarketing.svg`,
    title: "On-brand experiences that perform",
    desc: "Protect your brand at scale with shared libraries, component-level permissions, and built-in brand controls. Every page stays consistent while your team stays creative.",
  },
  {
    icon: `${ICONS_CDN}/DollarDecrease.svg`,
    title: "Reduced costs through smarter execution",
    desc: "Consolidate your tool stack. Cut down on dev ticketing. Kreature gives your creative team the autonomy to ship pages directly — so engineering stays focused on product.",
  },
];

const STICKY_ROWS = [
  {
    title: "Design and build",
    desc: "Start with a blank canvas or pull from your existing design system. Kreature's visual editor gives designers pixel-level control, while built-in components keep everything on brand. No coding required — but full CSS and custom code when you need it.",
    img: `${CDN}/689f24bcfcf65f46db4a0587_sticky%201-c.avif`,
  },
  {
    title: "Collaborate and publish",
    desc: "Designers, content editors, and marketing leads work in the same workspace. Comment, review, and approve changes directly on staging previews. When it's ready, publish to the edge with one click — no DevOps tickets, no deployment drama.",
    img: `${CDN}/689f24bc1be9aa26755b4848_sticky%202-c.avif`,
  },
  {
    title: "Scale and streamline",
    desc: "As your brand grows, Kreature scales with you. Shared libraries keep everyone aligned. Role-based permissions give the right people the right access. And enterprise-grade hosting means your sites stay fast, secure, and online — always.",
    img: `${CDN}/689f24bc8ba8094b1ebc4a71_sticky%203-c.avif`,
  },
];

const TESTIMONIALS = [
  {
    quote: "Kreature doesn't just allow you to work faster and easier, but differently. Speed is huge, but once you get engineers, designers, and copywriters to really enjoy working together, that's something different.",
    name: "Carla Weis",
    role: "VP Brand & Creative",
    co: "Docusign",
    img: `${CDN}/68921e4b3449836a88c3ee64_67be2e46ebdb3675d3d318bb_1711164617484.jpeg`,
  },
  {
    quote: "The creative velocity we've gained is incredible. Our team can go from concept to live in hours instead of weeks, and the brand stays perfectly intact because the system enforces our guidelines automatically.",
    name: "Callum Griffith",
    role: "Founder",
    co: "Composite",
    img: `${CDN}/68921e53e21a87ead9b33753_Callum.jpeg`,
  },
  {
    quote: "Kreature gave us the ability to move at the pace our global marketing demands. What used to take months now takes days, and our brand consistency has actually improved because everything is governed in one place.",
    name: "Jose Juan 'JJ' Lopez",
    role: "Global Lead Digital Marketing",
    co: "Dormakaba",
    img: `${CDN}/69aeeb3c91785a5a3601a05b_IMG_2954.jpeg`,
  },
  {
    quote: "We evaluated every platform out there. Kreature was the only one that gave our design team the creative control they demanded, while giving marketing the agility to move fast. It's the best of both worlds.",
    name: "Meghan Keaney Anderson",
    role: "Head of Marketing",
    co: "Jasper",
    img: `${CDN}/68921e39586fc00e9ca01dd7_65b6cedef1cf40f972a6afeb_1665633596711.jpeg`,
  },
  {
    quote: "As a creative studio, our website is our portfolio. Kreature lets us ship our best work without compromise — and our clients notice the difference. The platform gets out of the way and lets the craft shine.",
    name: "Stuart Ross",
    role: "Co-Founder",
    co: "OFFBRAND",
    img: `${CDN}/68921d4325a16ed1eae3cafa_stuart-ross.jpeg`,
  },
];

const SCALE_CARDS = [
  {
    icon: `${ICONS_CDN}/Scalability.svg`,
    title: "Enterprise scalability",
    desc: "Handle millions of visitors without breaking a sweat. Global CDN, edge caching, and auto-scaling infrastructure keep your sites fast everywhere.",
  },
  {
    icon: `${ICONS_CDN}/UserCollaborate.svg`,
    title: "Team collaboration",
    desc: "Unlimited seats, custom roles, and approval workflows. Your entire creative org — designers, writers, strategists — working together in one platform.",
  },
  {
    icon: `${ICONS_CDN}/CloudHosting.svg`,
    title: "Reliable cloud hosting",
    desc: "99.99% uptime SLA, automatic backups, and 24/7 monitoring. Enterprise-grade hosting you never have to think about.",
  },
  {
    icon: `${ICONS_CDN}/HandHug.svg`,
    title: "Dedicated support",
    desc: "Onboarding, training, and a dedicated success manager for enterprise plans. We're invested in your team's success from day one.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How does Kreature help creative teams move faster than traditional CMS platforms?",
    a: "Kreature eliminates the bottleneck between design and development. Unlike traditional CMS platforms where designers hand off mockups to developers who then build them, Kreature's visual canvas lets designers build production-ready pages directly. Design systems and shared libraries ensure brand consistency without slowing anyone down. Content editors can make updates without filing tickets. The entire pipeline — from concept to live — happens in days, not weeks or months.",
  },
  {
    q: "How does Kreature protect brand integrity at scale?",
    a: "Kreature's design system architecture gives you centralized control over your brand's core elements — colors, typography, spacing, components, and interaction patterns. Changes to a design token propagate everywhere it's used. Role-based permissions let designers explore freely within guardrails while preventing accidental brand drift. Approval workflows ensure every publish meets brand standards before going live.",
  },
  {
    q: "Can Kreature integrate with our existing creative tools?",
    a: "Yes. Kreature integrates directly with Figma for design import, supports custom code for developers, and connects with your marketing stack through APIs, webhooks, and a growing library of native integrations. Your team can keep using the tools they love while Kreature becomes the publishing layer that brings everything together.",
  },
  {
    q: "What kind of support and onboarding does Kreature offer for creative teams?",
    a: "Enterprise plans include a dedicated success manager, tailored onboarding sessions, and ongoing training for your team. We work with your creative leadership to configure your design system, set up approval workflows, and establish the permissions structure that fits your org. Our support team is available 24/7, and our community of 300,000+ creators shares templates, components, and best practices.",
  },
];

/* ──────────────── Page Component ──────────────── */

export default function BrandCreativeTeamsPage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [activeSticky, setActiveSticky] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);

  const prevTestimonial = useCallback(
    () => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [],
  );
  const nextTestimonial = useCallback(
    () => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length),
    [],
  );

  // Sticky scroll observer
  useEffect(() => {
    const section = stickyRef.current;
    if (!section) return;

    const rows = section.querySelectorAll("[data-sticky-row]");
    if (rows.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.stickyRow);
            if (!isNaN(idx)) setActiveSticky(idx);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 },
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  const t = TESTIMONIALS[testimonialIdx];
  const tt = TESTIMONIALS.length;

  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
            ═══════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Subheading */}
            <p
              className="text-center mb-6"
              style={{ ...T.heroSub, color: V("color-accent-blue") }}
            >
              Brand and Creative
            </p>

            {/* H1 */}
            <h1
              className="text-center max-w-4xl mx-auto mb-8"
              style={{ ...T.h1, color: V("color-ink") }}
            >
              Deliver high-impact brand experiences
            </h1>

            {/* Subtext */}
            <p
              className="text-center max-w-3xl mx-auto mb-12"
              style={{ ...T.bodyLg, color: V("color-body-mid") }}
            >
              Create brand-forward web experiences that wow. Kreature gives your team the control
              to execute bold ideas, protect brand integrity at scale, and move at the speed your
              story demands.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <PrimaryBtn href="/enterprise/contact-sales">
                Contact sales <Arrow />
              </PrimaryBtn>
            </div>

            {/* Hero images stack */}
            <div className="relative max-w-5xl mx-auto">
              {/* Main hero image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={`${CDN}/689f24602205aceddd0f87af_hero.avif`}
                  alt="Kreature brand creative platform"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>

              {/* Floating image 1 */}
              <img
                src={`${CDN}/689f245ff8635b6b230bd838_floating%201.webp`}
                alt=""
                className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-64 h-auto hidden lg:block pointer-events-none"
                loading="lazy"
              />

              {/* Floating image 2 */}
              <img
                src={`${CDN}/689f24604a6e5d7717e5e5ea_floating%202.webp`}
                alt=""
                className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-56 h-auto hidden lg:block pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Logo marquee with stats */}
        <section
          className="py-12 overflow-hidden border-y"
          style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}
        >
          <div className="flex gap-8 animate-[marquee_40s_linear_infinite] w-max">
            {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((l, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <img src={l.src} alt={l.name} className="h-6 w-auto opacity-40" loading="lazy" />
                {l.stat && (
                  <div className="flex flex-col">
                    <span style={{ fontSize: "14px", fontWeight: 600, color: V("color-ink") }}>
                      {l.stat}
                    </span>
                    <span style={{ fontSize: "12px", color: V("color-mute") }}>{l.sub}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — PROBLEM STATEMENT
            ═══════════════════════════════════════════ */}
        <Section soft>
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={{ ...T.h2, color: V("color-ink"), marginBottom: "24px" }}>
              Is your CMS the bottleneck for your brand?
            </h2>
            <p style={{ ...T.bodyLg, color: V("color-body-mid") }}>
              Traditional content management systems force creative teams into a slow,
              developer-dependent workflow. Designers hand off mockups. Developers build them.
              Content editors wait. Weeks pass between concept and publish. By the time a campaign
              goes live, the momentum is gone. Your brand deserves a platform that keeps pace with
              your creative ambition — not one that holds it back.
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — THREE ICON CARDS
            ═══════════════════════════════════════════ */}
        <Section>
          <h2
            className="text-center max-w-3xl mx-auto mb-16"
            style={{ ...T.h2, color: V("color-ink") }}
          >
            Scale your brand story with Kreature
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {ICON_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-8 border transition-shadow hover:shadow-md"
                style={{
                  borderColor: V("color-hairline"),
                  backgroundColor: V("color-canvas"),
                }}
              >
                <div className="mb-6">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-12 h-12"
                    style={{ filter: "invert(0)" }}
                    loading="lazy"
                  />
                </div>
                <h3 className="mb-4" style={{ ...T.h3, color: V("color-ink") }}>
                  {card.title}
                </h3>
                <p style={{ ...T.body, color: V("color-body-mid") }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — STICKY SCROLL FEATURES
            ═══════════════════════════════════════════ */}
        <Section soft>
          <h2
            className="text-center max-w-3xl mx-auto mb-4"
            style={{ ...T.h2, color: V("color-ink") }}
          >
            How Kreature&apos;s platform works
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mb-16"
            style={{ ...T.bodyLg, color: V("color-body-mid") }}
          >
            A streamlined pipeline built for creative teams that demand both speed and quality.
          </p>

          <div ref={stickyRef}>
            {STICKY_ROWS.map((row, i) => (
              <div
                key={row.title}
                data-sticky-row={i}
                className="grid md:grid-cols-2 gap-12 items-center mb-24 last:mb-0"
              >
                {/* Text column */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  {/* Step indicator */}
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-6 text-sm font-semibold"
                    style={{
                      backgroundColor:
                        activeSticky === i ? V("color-accent-blue") : V("color-canvas-mid"),
                      color: activeSticky === i ? "#fff" : V("color-mute"),
                      transition: "all 0.3s ease",
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="mb-4" style={{ ...T.h3, color: V("color-ink") }}>
                    {row.title}
                  </h3>
                  <p style={{ ...T.body, color: V("color-body-mid"), lineHeight: 1.8 }}>
                    {row.desc}
                  </p>
                </div>

                {/* Image column */}
                <div
                  className={`rounded-xl overflow-hidden shadow-lg ${i % 2 === 1 ? "md:order-1" : ""}`}
                  style={{
                    border: `1px solid ${V("color-hairline")}`,
                    opacity: activeSticky === i ? 1 : 0.6,
                    transform: activeSticky === i ? "scale(1)" : "scale(0.97)",
                    transition: "all 0.4s ease",
                  }}
                >
                  <img
                    src={row.img}
                    alt={row.title}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — WORDPRESS COMPARISON
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4" style={{ ...T.h2, color: V("color-ink") }}>
                Considering a switch from WordPress?
              </h2>
              <p className="mb-8" style={{ ...T.bodyLg, color: V("color-body-mid") }}>
                More brands are moving from WordPress to Kreature every day. Why? Visual design
                without plugin chaos. Built-in hosting without maintenance headaches. And a creative
                workflow that matches the pace of modern brand teams.
              </p>
              <a
                href="/made-in-webflow"
                className="inline-flex items-center rounded-sm transition-colors"
                style={{
                  ...T.btn,
                  padding: "14px 28px",
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                See how Kreature compares <Arrow />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ border: `1px solid ${V("color-hairline")}` }}>
              <img
                src={`${CDN}/689f1e506a1639209b05455a_wordpress%20vs%20webflow%20.avif`}
                alt="Kreature vs WordPress comparison"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — TESTIMONIALS
            ═══════════════════════════════════════════ */}
        <Section soft>
          <h2
            className="text-center max-w-3xl mx-auto mb-16"
            style={{ ...T.h2, color: V("color-ink") }}
          >
            Leading creatives choose Kreature
          </h2>

          {/* Testimonial carousel */}
          <div className="max-w-4xl mx-auto relative">
            {/* Active testimonial card */}
            <div
              className="rounded-xl p-8 sm:p-12 border text-center relative"
              style={{
                borderColor: V("color-hairline"),
                backgroundColor: V("color-canvas"),
              }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-2" style={{ borderColor: V("color-hairline") }}>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Quote */}
              <blockquote
                className="mb-8 max-w-2xl mx-auto"
                style={{ ...T.quote, fontSize: 18, color: V("color-body") }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div>
                <div style={{ ...T.body, fontWeight: 600, color: V("color-ink") }}>
                  {t.name}
                </div>
                <div style={{ ...T.bodySm, color: V("color-mute") }}>
                  {t.role}, {t.co}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full border flex items-center justify-center transition-colors hover:bg-neutral-50"
              style={{ borderColor: V("color-hairline"), color: V("color-mute"), backgroundColor: V("color-canvas") }}
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full border flex items-center justify-center transition-colors hover:bg-neutral-50"
              style={{ borderColor: V("color-hairline"), color: V("color-mute"), backgroundColor: V("color-canvas") }}
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === testimonialIdx ? 24 : 8,
                  height: 8,
                  background: i === testimonialIdx ? V("color-ink") : V("color-hairline"),
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail row */}
          <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
            {TESTIMONIALS.map((tm, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className="w-14 h-14 rounded-full overflow-hidden border-2 transition-all"
                style={{
                  borderColor:
                    i === testimonialIdx ? V("color-accent-blue") : "transparent",
                  opacity: i === testimonialIdx ? 1 : 0.4,
                }}
                aria-label={`View ${tm.name}'s testimonial`}
              >
                <img
                  src={tm.img}
                  alt={tm.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 7 — PLATFORM BUILT FOR SCALE
            ═══════════════════════════════════════════ */}
        <Section>
          <h2
            className="text-center max-w-3xl mx-auto mb-4"
            style={{ ...T.h2, color: V("color-ink") }}
          >
            A platform built for scale
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mb-16"
            style={{ ...T.bodyLg, color: V("color-body-mid") }}
          >
            Everything your creative team needs to grow from managing a few pages to running a
            global brand presence.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCALE_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-6 border text-center transition-shadow hover:shadow-md"
                style={{
                  borderColor: V("color-hairline"),
                  backgroundColor: V("color-canvas"),
                }}
              >
                <div className="mb-5 flex justify-center">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-10 h-10"
                    loading="lazy"
                  />
                </div>
                <h3
                  className="mb-3"
                  style={{ ...T.body, fontWeight: 600, color: V("color-ink") }}
                >
                  {card.title}
                </h3>
                <p style={{ ...T.bodySm, color: V("color-body-mid") }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 8 — FAQ
            ═══════════════════════════════════════════ */}
        <Section>
          <h2
            className="text-center max-w-2xl mx-auto mb-16"
            style={{ ...T.h2, color: V("color-ink") }}
          >
            Frequently asked questions
          </h2>

          <div className="max-w-3xl mx-auto divide-y" style={{ borderColor: V("color-hairline") }}>
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group py-6 cursor-pointer">
                <summary className="flex items-center justify-between gap-4 list-none">
                  <span style={{ ...T.body, fontWeight: 600, color: V("color-ink") }}>
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 text-lg transition-transform group-open:rotate-45"
                    style={{ color: V("color-mute") }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-4 pr-8"
                  style={{ ...T.body, color: V("color-body-mid"), lineHeight: 1.8 }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 9 — LOGO MARQUEE WITH STATS
            ═══════════════════════════════════════════ */}
        <section
          className="py-12 overflow-hidden border-y"
          style={{ borderColor: V("color-hairline"), background: V("color-canvas-soft") }}
        >
          <p
            className="text-center mb-8 uppercase tracking-wider"
            style={{ ...T.heroSub, color: V("color-mute") }}
          >
            Trusted by creative teams worldwide
          </p>
          <div className="flex gap-8 animate-[marquee_40s_linear_infinite] w-max">
            {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((l, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <img src={l.src} alt={l.name} className="h-6 w-auto opacity-40" loading="lazy" />
                {l.stat && (
                  <div className="flex flex-col">
                    <span style={{ fontSize: "14px", fontWeight: 600, color: V("color-ink") }}>
                      {l.stat}
                    </span>
                    <span style={{ fontSize: "12px", color: V("color-mute") }}>{l.sub}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 10 — BOTTOM CTA
            ═══════════════════════════════════════════ */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 lg:py-36 text-center"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6" style={{ ...T.h2, color: V("color-ink") }}>
              Schedule a demo
            </h2>
            <p
              className="mb-10 max-w-xl mx-auto"
              style={{ ...T.bodyLg, color: V("color-body-mid") }}
            >
              See how Kreature empowers your creative team to ship high-impact brand
              experiences — faster, together, and on brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryBtn href="/enterprise/contact-sales">
                Contact sales <Arrow />
              </PrimaryBtn>
              <OutlineBtn href="/platform">
                Explore the platform
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
            {/* Brand column */}
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

            {/* Link columns */}
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

          {/* Bottom bar */}
          <div
            className="mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderColor: V("color-hairline") }}
          >
            <p className="text-xs" style={{ color: V("color-mute-soft") }}>
              &copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
