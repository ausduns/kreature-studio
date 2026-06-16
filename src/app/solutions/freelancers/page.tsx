"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";
const ICONS_CDN = "https://dhygzobemt712.cloudfront.net/Icons/Light/64px";

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

/* ─── DATA ─── */

const HERO_LOGOS = [
  { name: "IDEO", src: `${CDN}/68c9a39c128261b2128439dc_ideo-logo.svg` },
  { name: "Monday.com", src: `${CDN}/68c9a39c128261b2128439c8_monday.com.svg` },
  { name: "BBDO", src: `${CDN}/68c9a39c128261b2128439db_bbdo-logo.svg` },
  { name: "The New York Times", src: `${CDN}/68c9a39c128261b2128439d9_nytimes.svg` },
  { name: "TED", src: `${CDN}/68c9a39c128261b2128439d8_TED.svg` },
  { name: "Docusign", src: `${CDN}/68c9a39c128261b2128439c9_Docusign-dark.svg` },
];

const ICON_CARDS = [
  { icon: `${ICONS_CDN}/TimeWatch.svg`, title: "Ship fast without cutting corners", desc: "Build custom, high-performing websites visually — no coding bottlenecks. Launch in days, not weeks, with a platform designed for speed and precision." },
  { icon: `${ICONS_CDN}/RewardsStar.svg`, title: "When clients grow, you grow", desc: "Native analytics and AI-powered optimization tools help you prove ROI, retain clients longer, and turn one-off projects into ongoing partnerships." },
  { icon: `${ICONS_CDN}/Interactions.svg`, title: "One platform. Endless potential", desc: "From simple landing pages to complex, content-driven sites — Kreature scales with your ambitions. Add interactions, animations, and custom code when you need it." },
];

const STICKY_ROWS = [
  {
    title: "Launch stunning designs faster than ever",
    desc: "Build pixel-perfect, responsive websites visually — no code required. Start from a blank canvas or customize a template, then add scroll-based animations and interactions that wow clients. Kreature handles the CSS, breakpoints, and browser compatibility so you can focus on craft.",
    img: `${CDN}/689f328cf64d1090a5f4d8a9_stikcy%201.avif`,
  },
  {
    title: "Turn insights into ROI",
    desc: "Built-in analytics show you exactly what's working — and what's not — across every client site. Run A/B tests, personalize experiences by audience segment, and optimize for both traditional search and AI-powered discovery. Prove your value with data your clients can see.",
    img: `${CDN}/689f328c2d0082005f682440_sticky%202.avif`,
  },
  {
    title: "Manage clients securely with built-in guardrails",
    desc: "Give clients access to update content without breaking the design. Set granular permissions for editors, manage content approvals with staging and publishing workflows, and hand off projects with confidence. Every site includes version history and one-click rollback.",
    img: `${CDN}/6978ce57b1d72c4c57d266cc_Client%20management%20_%20Clients%20-%20UPDATED%20(1).png`,
  },
  {
    title: "Launch with built-in managed hosting and security",
    desc: "Every site gets enterprise-grade hosting with automatic SSL, a global CDN, DDoS protection, and 99.99% uptime — with zero configuration. No more managing servers, running updates, or fielding late-night outage calls from clients.",
    img: `${CDN}/68b87db9ab811d813f823b25_enterprise_hosting_card-1.webp`,
  },
];

const TESTIMONIALS = [
  {
    quote: "Kreature gave us the ability to build exactly what we imagined — without compromise. The design freedom combined with a CMS our clients can actually use has been a game changer for our studio.",
    name: "Amelie Guider & Daphne Heraiz-Bekkis",
    role: "Co-Owners, Bolk Studio",
    img: `${CDN}/69128bdb0d0c2abe2b997617_daphne-amelie%20-%20Daphne%CC%81%20He%CC%81rai%CC%88z-Bekkis.jpg`,
  },
  {
    quote: "As a solo freelancer, I need a platform that lets me move fast without cutting corners. Kreature handles the heavy lifting — hosting, security, SEO — so I can focus on what I do best: design.",
    name: "Bjorn Encutescu",
    role: "Owner, Bjornflow",
    img: `${CDN}/690ab48292266bd43bade3fa_freelancer_bjorn_encutescu.png`,
  },
  {
    quote: "Kreature transformed how I work with clients. I can now deliver high-end web experiences that previously required a full dev team. My clients are happier, and my project volume has grown significantly.",
    name: "Elena Gillis",
    role: "Freelancer",
    img: `${CDN}/69128440bb7346aac991b5b0_headshot-color-small%20-%20Elena%20Gillis.png`,
  },
  {
    quote: "We've tried every platform out there. Kreature is the only one that gives us the creative control of hand-coded sites with the speed and client-friendliness of a visual platform. It's not even close.",
    name: "Matt Connelly",
    role: "Founder, Paddle Creative",
    img: `${CDN}/697a7d20a7806e8c267e072a_Mattv2%20-%20Matt%20Connelly.jpg`,
  },
  {
    quote: "The ability to hand off projects with confidence — knowing clients can update content without breaking anything — has completely changed our studio's economics. We deliver better work in less time.",
    name: "Zhiliang Chen",
    role: "Founder, Underscore",
    img: `${CDN}/6912856274dbb256a38e8739_Screenshot%202025-11-10%20at%206.37.47%E2%80%AFPM.png`,
  },
];

const MARKETPLACE_CARDS = [
  { icon: `${ICONS_CDN}/CertifiedStamp.svg`, title: "Certified Partners", desc: "Connect with experts who can help you scale, or become a partner yourself and grow your freelance practice.", href: "/certified-partners" },
  { icon: `${ICONS_CDN}/LayoutTemplate.svg`, title: "Templates", desc: "Jump-start any project with hundreds of professionally-designed, fully customizable templates.", href: "/templates" },
  { icon: `${ICONS_CDN}/Apps.svg`, title: "Apps", desc: "Extend your sites with powerful integrations — analytics, marketing, ecommerce, and more.", href: "/apps" },
  { icon: `${ICONS_CDN}/Libraries.svg`, title: "Libraries", desc: "Save time with community-built components, layouts, and design systems you can drop into any project.", href: "/libraries" },
];

const FAQ_ITEMS = [
  {
    q: "Is Kreature good for freelancers?",
    a: "Yes. Kreature is built for freelancers who need to move fast and deliver high-quality work. The visual designer lets you build custom sites without writing code, the CMS is client-friendly, and managed hosting eliminates the need for server maintenance. Thousands of freelancers use Kreature to run their entire web design and development business.",
  },
  {
    q: "Can I give my clients access to edit content?",
    a: "Absolutely. Kreature's Editor role lets you give clients granular access to update text, images, and content without touching the design or structure of the site. You control what they can and cannot change. Every edit is tracked in version history, so you can always roll back if needed.",
  },
  {
    q: "Does Kreature offer white-label options for freelancers?",
    a: "Kreature's Workspace plans allow you to white-label the platform experience for your clients — including custom domains, branded client dashboards, and client billing. Your clients experience a seamless, professional workflow that feels like your own agency platform.",
  },
  {
    q: "What kind of support does Kreature provide?",
    a: "All plans include access to Kreature's help center, community forums, and email support. Pro and higher plans include priority support with faster response times. Kreature University offers free courses, tutorials, and certifications to help you master the platform and grow your freelance business.",
  },
];

const MARQUEE_LOGOS = [
  { name: "IDEO", src: `${LOGOS_CDN}/ideo.svg`, stat: "10x", sub: "Faster project delivery" },
  { name: "Monday.com", src: `${LOGOS_CDN}/monday.svg`, stat: "" },
  { name: "BBDO", src: `${LOGOS_CDN}/bbdo.svg`, stat: "" },
  { name: "NYT", src: `${LOGOS_CDN}/the-new-york-times.svg`, stat: "" },
  { name: "TED", src: `${LOGOS_CDN}/ted.svg`, stat: "85%", sub: "Less time on revisions" },
  { name: "Docusign", src: `${LOGOS_CDN}/docusign.svg`, stat: "3x", sub: "More clients annually" },
  { name: "Spotify", src: `${LOGOS_CDN}/spotify.svg`, stat: "" },
  { name: "Dropbox", src: `${LOGOS_CDN}/dropbox.svg`, stat: "67%", sub: "Higher client retention" },
  { name: "Upwork", src: `${LOGOS_CDN}/upwork.svg`, stat: "" },
  { name: "Reddit", src: `${LOGOS_CDN}/reddit.svg`, stat: "+45%", sub: "Revenue per client" },
];

const FOOTER: Record<string, string[]> = {
  Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility", "AI"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way"],
  Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ─── COMPONENT ─── */

export default function FreelancersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSticky, setActiveSticky] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);

  const toggleFaq = useCallback((i: number) => {
    setOpenFaq(prev => prev === i ? null : i);
  }, []);

  // Intersection observer for sticky scroll rows
  useEffect(() => {
    const container = stickyRef.current;
    if (!container) return;

    const rows = container.querySelectorAll("[data-sticky-row]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.stickyRow);
            if (!isNaN(idx)) setActiveSticky(idx);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-20% 0px -20% 0px" }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>

      <main>

        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO (white bg)
            ═══════════════════════════════════════════ */}
        <section className="px-5 sm:px-8" style={{ background: V("color-canvas"), paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "clamp(3rem,6vw,5rem)" }}>
          <div className="max-w-[1440px] mx-auto">

            {/* Subheading */}
            <p className="text-sm font-medium uppercase tracking-widest mb-5" style={{ color: V("color-accent-blue") }}>
              Freelancers
            </p>

            {/* H1 + subtext */}
            <div className="mb-[clamp(2rem,4vw,3rem)] max-w-[800px]">
              <h1 className="font-heading font-semibold tracking-[-0.01em] mb-6" style={{ ...T.h1, color: V("color-ink") }}>
                Do your best work — and more of it
              </h1>
              <p className="max-w-[650px]" style={{ ...T.heroSub, color: V("color-body-mid") }}>
                Kreature helps you move faster, take on more clients, and deliver higher-value work — so your creativity becomes the engine of your growth.
              </p>
            </div>

            {/* CTA */}
            <div className="mb-10">
              <PrimaryBtn href="/signup">Start building <Arrow /></PrimaryBtn>
            </div>

            {/* Hero image */}
            <div className="relative rounded-lg overflow-hidden mb-10" style={{ borderRadius: "8px" }}>
              <img
                src={`${CDN}/6978cd17ce490afa10e859ad_Hero.png`}
                alt="Kreature platform for freelancers"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Trusted by logos */}
            <div className="flex flex-wrap gap-6 items-center opacity-40">
              {HERO_LOGOS.map((logo) => (
                <img key={logo.name} src={logo.src} alt={logo.name} className="h-5 w-auto" loading="lazy" />
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — Problem statement (soft bg)
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="max-w-[800px]">
            <h2 className="font-heading font-semibold leading-[1.04] mb-6" style={{ ...T.h2, color: V("color-ink") }}>
              Can your current tools keep up with your clients&apos; needs?
            </h2>
            <p className="mb-6" style={{ ...T.bodyLg, color: V("color-body") }}>
              Freelancers are expected to deliver agency-quality work — pixel-perfect designs, fast-loading sites, SEO, analytics, client handoff — all while managing multiple projects and wearing every hat. Most tools force you to choose between creative control and speed. Either you code everything by hand and move slowly, or you use a template builder and compromise on quality.
            </p>
            <p style={{ ...T.bodyLg, color: V("color-body") }}>
              Kreature changes that equation. It is the only platform that gives you full visual design freedom, a CMS clients can actually use, built-in SEO and analytics, and enterprise-grade hosting — all in one place. So you can spend less time on tooling and more time on the work that grows your business.
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — Three icon cards (white bg)
            ═══════════════════════════════════════════ */}
        <Section>
          <h2 className="font-heading font-semibold leading-[1.04] mb-12 max-w-[700px]" style={{ ...T.h2, color: V("color-ink") }}>
            Create high-impact web experiences your way
          </h2>

          <div className="grid md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)]">
            {ICON_CARDS.map((card) => (
              <div key={card.title} className="rounded-lg p-[clamp(1.5rem,3vw,2rem)]"
                style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}>
                <img src={card.icon} alt="" className="w-8 h-8 mb-6 opacity-70" loading="lazy" />
                <h3 className="font-semibold mb-3" style={{ ...T.h3, color: V("color-ink") }}>{card.title}</h3>
                <p style={{ ...T.body, color: V("color-body-mid") }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — Sticky scroll feature rows (alternating)
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="max-w-[800px] mb-16">
            <h2 className="font-heading font-semibold leading-[1.04]" style={{ ...T.h2, color: V("color-ink") }}>
              How Kreature&apos;s platform helps you work smarter, not harder
            </h2>
          </div>

          <div ref={stickyRef}>
            {/* Sticky indicator dots */}
            <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-2 z-20">
              {STICKY_ROWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const el = document.querySelector(`[data-sticky-row="${i}"]`);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="rounded-full transition-all"
                  style={{
                    width: activeSticky === i ? 12 : 8,
                    height: activeSticky === i ? 12 : 8,
                    background: activeSticky === i ? V("color-accent-blue") : V("color-hairline"),
                  }}
                  aria-label={`Scroll to section ${i + 1}`}
                />
              ))}
            </div>

            {STICKY_ROWS.map((row, i) => (
              <div
                key={row.title}
                data-sticky-row={i}
                className={`grid lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center ${i > 0 ? "mt-[clamp(4rem,8vw,6rem)]" : ""}`}
              >
                <div className={i % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <img
                    src={row.img}
                    alt={row.title}
                    className="w-full h-auto rounded-lg"
                    style={{ borderRadius: "8px" }}
                    loading="lazy"
                  />
                </div>
                <div className={i % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <h3 className="font-semibold mb-4" style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 600, lineHeight: 1.15, color: V("color-ink") }}>
                    {row.title}
                  </h3>
                  <p style={{ ...T.bodyLg, color: V("color-body-mid") }}>{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — Testimonials (soft bg)
            ═══════════════════════════════════════════ */}
        <Section>
          <h2 className="font-heading font-semibold leading-[1.04] mb-12" style={{ ...T.h2, color: V("color-ink") }}>
            Leading freelancers choose Kreature
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,1.5vw,1.5rem)]">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-lg p-[clamp(1.5rem,2vw,2rem)] flex flex-col"
                style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas-soft") }}>
                <blockquote className="mb-6 flex-1" style={{ ...T.body, color: V("color-body") }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-medium" style={{ color: V("color-ink") }}>{t.name}</div>
                    <div className="text-xs" style={{ color: V("color-mute") }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — Marketplace cards (white bg)
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="max-w-[700px] mb-12">
            <h2 className="font-heading font-semibold leading-[1.04] mb-4" style={{ ...T.h2, color: V("color-ink") }}>
              Everything you need to deliver great work
            </h2>
            <p style={{ ...T.bodyLg, color: V("color-body-mid") }}>
              From templates and apps to expert partners and community-built libraries — Kreature&apos;s ecosystem has everything you need to deliver exceptional client work, faster.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,1.5vw,1.5rem)]">
            {MARKETPLACE_CARDS.map((card) => (
              <a key={card.title} href={card.href}
                className="block rounded-lg p-[clamp(1.5rem,2vw,2rem)] transition-all hover:shadow-md group"
                style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}>
                <img src={card.icon} alt="" className="w-8 h-8 mb-5 opacity-60" loading="lazy" />
                <h3 className="font-semibold mb-2" style={{ fontSize: "18px", fontWeight: 600, lineHeight: "25.2px", color: V("color-ink") }}>
                  {card.title}
                </h3>
                <p className="mb-4" style={{ ...T.bodySm, color: V("color-body-mid") }}>{card.desc}</p>
                <span className="inline-flex items-center text-sm font-medium transition-colors group-hover:underline"
                  style={{ color: V("color-ink") }}>
                  Learn more <Arrow />
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 7 — FAQ (white bg)
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="max-w-[800px]">
            <h2 className="font-heading font-semibold leading-[1.04] mb-12" style={{ ...T.h2, color: V("color-ink") }}>
              Frequently asked questions
            </h2>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i}
                  className="rounded-lg overflow-hidden"
                  style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}>
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-[clamp(1.25rem,2vw,1.5rem)] text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-medium pr-4" style={{ fontSize: "18px", fontWeight: 500, color: V("color-ink") }}>
                      {item.q}
                    </span>
                    <span
                      className="text-xl shrink-0 transition-transform duration-200"
                      style={{
                        color: V("color-mute"),
                        transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-[clamp(1.25rem,2vw,1.5rem)] pb-[clamp(1.25rem,2vw,1.5rem)]">
                      <p style={{ ...T.body, color: V("color-body-mid") }}>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 8 — Logo marquee with stats
            ═══════════════════════════════════════════ */}
        <section className="py-12 overflow-hidden border-y" style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}>
          <div className="flex gap-10 animate-[marquee_50s_linear_infinite] w-max">
            {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((l, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                {l.src ? (
                  <img src={l.src} alt={l.name} className="h-6 w-auto opacity-40" loading="lazy" />
                ) : (
                  <span className="text-sm font-semibold opacity-40" style={{ color: V("color-ink") }}>{l.name}</span>
                )}
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
            SECTION 9 — Bottom CTA (soft bg)
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="max-w-[700px] text-center mx-auto">
            <h2 className="font-heading font-semibold leading-[1.04] mb-6" style={{ ...T.h2, color: V("color-ink") }}>
              Ready to try it for yourself?
            </h2>
            <p className="mb-8" style={{ ...T.heroSub, color: V("color-body-mid") }}>
              Join thousands of freelancers who use Kreature to build stunning websites, manage clients effortlessly, and grow their business — all from one platform.
            </p>
            <PrimaryBtn href="/signup">Start building <Arrow /></PrimaryBtn>
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
