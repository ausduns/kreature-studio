"use client";

import { type ReactNode } from "react";

/* ─── CSS Var helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Helper ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

function ArrowUpRight() {
  return (
    <span className="ml-1 text-[1em] leading-none select-none" aria-hidden="true">
      &nearr;
    </span>
  );
}

/* ─── Data ─── */

const TRUSTED_LOGOS = [
  { name: "Ideo", src: "/logo/trusted/ideo.svg" },
  { name: "Monday.com", src: "/logo/trusted/monday.svg" },
  { name: "BBDO", src: "/logo/trusted/bbdo.svg" },
  { name: "The New York Times", src: "/logo/trusted/nytimes.svg" },
  { name: "Ted", src: "/logo/trusted/ted.svg" },
  { name: "Docusign", src: "/logo/trusted/docusign.svg" },
] as const;

const CORE_BEHAVIORS = [
  {
    title: "Build lasting customer trust",
    body: "Every interaction, every feature, every decision starts with one question: does this earn and deepen trust with the people who rely on our platform?",
  },
  {
    title: "Win together",
    body: "We succeed when our customers, partners, and teammates succeed. Collaboration is not a buzzword — it is how we compound our impact.",
  },
  {
    title: "Reinvent ourselves",
    body: "Comfort is the enemy of progress. We challenge our own assumptions, embrace new technologies, and stay hungry to learn what is next.",
  },
  {
    title: "Deliver with speed, quality, and craft",
    body: "Speed without quality is reckless. Quality without speed is irrelevant. We hold ourselves to all three — because our customers deserve nothing less.",
  },
] as const;

const INVESTORS = [
  { name: "Accel", src: "/logo/investors/accel.svg" },
  { name: "Capital G", src: "/logo/investors/capitalg.svg" },
  { name: "Y Combinator", src: "/logo/investors/yc.svg" },
  { name: "Silver Lake", src: "/logo/investors/silverlake.svg" },
  { name: "Rainfall", src: "/logo/investors/rainfall.svg" },
  { name: "Draper", src: "/logo/investors/draper.svg" },
  { name: "Funders Club", src: "/logo/investors/fundersclub.svg" },
] as const;

const STATS = [
  { value: "900+", label: "Team members in 25 countries" },
  { value: "2013", label: "Year Founded" },
  { value: "3.5M", label: "Users" },
  { value: "$335M", label: "In total funding" },
] as const;

const PRESS_ARTICLES = [
  {
    publication: "Digiday",
    headline: "WTF is Markdown for AI Agents?",
    href: "#",
  },
  {
    publication: "How I AI",
    headline:
      "How Kreature's CPO built an AI chief of staff to manage her calendar and drive internal AI adoption",
    href: "#",
  },
  {
    publication: "CNBC",
    headline: "Kreature CEO Linda Tong on Optimizing for AI Search Future",
    href: "#",
  },
  {
    publication: "Bloomberg Businessweek Podcast",
    headline: "Web Surfing in the Artificial Intelligence Era",
    href: "#",
  },
  {
    publication: "Diginomica",
    headline:
      "AI is reshaping developer workflows — Kreature's CTO explains how",
    href: "#",
  },
  {
    publication: "Forbes",
    headline:
      "Kreature CEO On Building AI-Optimized Websites In A Post-SEO World",
    href: "#",
  },
  {
    publication: "Reuters",
    headline: "More AI bots, less human visits on the internet",
    href: "#",
  },
  {
    publication: "Axios Pro",
    headline: "Kreature acquires JavaScript library GSAP",
    href: "#",
  },
  {
    publication: "PRWeb",
    headline: "Craig Mestel joins Kreature as first Chief Financial Officer",
    href: "#",
  },
] as const;

const LEADERSHIP = [
  {
    name: "Adrian Rosenkranz",
    title: "Chief Revenue Officer",
    img: "/team/adrian-rosenkranz.jpg",
  },
  {
    name: "Craig Mestel",
    title: "Chief Financial Officer",
    img: "/team/craig-mestel.jpg",
  },
  {
    name: "Dave Steer",
    title: "Chief Marketing Officer",
    img: "/team/dave-steer.jpg",
  },
  {
    name: "George Karamanos",
    title: "Chief Legal Officer",
    img: "/team/george-karamanos.jpg",
  },
  {
    name: "Katie Chisam",
    title: "Chief of Staff",
    img: "/team/katie-chisam.jpg",
  },
  {
    name: "Linda Tong",
    title: "Chief Executive Officer",
    img: "/team/linda-tong.jpg",
  },
  {
    name: "Mike Podobnik",
    title: "SVP of People",
    img: "/team/mike-podobnik.jpg",
  },
  {
    name: "Rachel Wolan",
    title: "Chief Product Officer",
    img: "/team/rachel-wolan.jpg",
  },
] as const;

const FOUNDERS = [
  {
    name: "Bryant Chou",
    title: "Co-founder",
    img: "/team/bryant-chou.jpg",
  },
  {
    name: "Sergie Magdalin",
    title: "Co-founder & Design Fellow",
    img: "/team/sergie-magdalin.jpg",
  },
  {
    name: "Vlad Magdalin",
    title: "Co-founder & Chief Innovation Officer",
    img: "/team/vlad-magdalin.jpg",
  },
] as const;

const FOOTER_LINKS: Record<string, string[]> = {
  Product: [
    "Platform",
    "Design",
    "CMS",
    "Interactions",
    "GSAP",
    "Hosting",
    "Localization",
    "Security",
    "Analyze",
    "Optimize",
    "SEO",
    "AEO",
    "AI",
  ],
  Solutions: [
    "Enterprise",
    "Startups",
    "Global Alliances",
    "Agencies",
    "Freelancers",
  ],
  Resources: [
    "University",
    "Blog",
    "Customer Stories",
    "Webinars & Ebooks",
    "Apps",
    "Libraries",
    "Templates",
    "Made in Kreature",
    "Glossary",
  ],
  Company: [
    "About",
    "Careers",
    "Press",
    "Kreature Shop",
    "Terms of Service",
    "Privacy Policy",
    "Accessibility Statement",
  ],
  Community: [
    "Discover the Community",
    "Partner with Kreature",
    "Certified Partners",
    "Find a Meetup",
  ],
  "Get Help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ─── Footer ─── */

function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: V("color-canvas"),
        borderTop: `1px solid ${V("color-hairline")}`,
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 py-20">
        {/* Brand column + links grid */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-16">
          {/* Brand column */}
          <div className="shrink-0 lg:w-[240px]">
            <a
              href="/"
              className="flex items-center gap-2 no-underline mb-3"
              style={{ color: V("color-ink") }}
            >
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
              <span className="font-heading font-[800] text-xl tracking-tight">
                Kreature
                <span style={{ color: V("color-accent-blue") }}>.</span>
              </span>
            </a>
            <p
              className="text-sm leading-relaxed max-w-[280px]"
              style={{ color: V("color-body-mid") }}
            >
              The all-in-one platform for building, launching, and growing
              websites.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 flex-1">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: V("color-mute") }}
                >
                  {heading}
                </h4>
                <ul className="list-none p-0 m-0 space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm no-underline transition-colors duration-200 hover:opacity-70"
                        style={{ color: V("color-body") }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${V("color-hairline")}` }}
        >
          <span className="text-xs" style={{ color: V("color-mute") }}>
            &copy; {new Date().getFullYear()} Kreature, Inc. All rights
            reserved.
          </span>
          <div className="flex items-center gap-4 text-xs">
            {[
              "Made in Kreature",
              "YouTube",
              "X",
              "Facebook",
              "LinkedIn",
              "Instagram",
              "TikTok",
            ].map((p) => (
              <a
                key={p}
                href="#"
                className="no-underline transition-colors duration-200 hover:opacity-70"
                style={{ color: V("color-mute") }}
              >
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Typography primitives ─── */

function H1({ children }: { children: ReactNode }) {
  return (
    <h1
      className="font-heading tracking-[-0.8px] m-0"
      style={{
        fontSize: "clamp(48px, 5.5vw, 80px)",
        fontWeight: 600,
        lineHeight: 1.04,
        color: V("color-ink"),
      }}
    >
      {children}
    </h1>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-heading m-0"
      style={{
        fontSize: "clamp(36px, 4vw, 56px)",
        fontWeight: 600,
        lineHeight: 1.04,
        color: V("color-ink"),
      }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3
      className="font-heading m-0"
      style={{
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 1.3,
        color: V("color-ink"),
      }}
    >
      {children}
    </h3>
  );
}

function Body({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`m-0 ${className}`}
      style={{
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.6,
        color: V("color-body"),
      }}
    >
      {children}
    </p>
  );
}

function BodyLarge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`m-0 ${className}`}
      style={{
        fontSize: "clamp(18px, 1.6vw, 20px)",
        fontWeight: 400,
        lineHeight: 1.6,
        color: V("color-body"),
      }}
    >
      {children}
    </p>
  );
}

function Caption({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        fontSize: "12.8px",
        fontWeight: 550,
        lineHeight: 1.2,
        color: V("color-mute"),
      }}
    >
      {children}
    </span>
  );
}

/* ─── Section primitives ─── */

function Section({
  children,
  className = "",
  bg,
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "soft" | "dark";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full ${className}`}
      style={{
        paddingTop: bg === "dark" ? undefined : 120,
        paddingBottom: bg === "dark" ? undefined : 120,
        background: bg === "soft"
          ? V("color-canvas-soft")
          : bg === "dark"
            ? V("color-ink")
            : V("color-canvas"),
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

function SectionNarrow({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full ${className}`}
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="mx-auto max-w-[960px] px-6">{children}</div>
    </section>
  );
}

function Divider() {
  return (
    <div
      className="w-full"
      style={{ borderTop: `1px solid ${V("color-hairline")}` }}
    />
  );
}

/* ─── Person Card ─── */

function PersonCard({
  name,
  title,
  img,
}: {
  name: string;
  title: string;
  img: string;
}) {
  return (
    <div className="text-center">
      <div
        className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-4"
        style={{ background: V("color-canvas-mid") }}
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h4
        className="m-0 mb-1"
        style={{
          fontSize: 20,
          fontWeight: 600,
          lineHeight: 1.3,
          color: V("color-ink"),
        }}
      >
        {name}
      </h4>
      <Caption>{title}</Caption>
    </div>
  );
}

/* ─── Press Card ─── */

function PressCard({
  publication,
  headline,
  href,
}: {
  publication: string;
  headline: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block no-underline rounded-xl p-6 transition-all duration-200 group"
      style={{
        background: V("color-canvas"),
        border: `1px solid ${V("color-hairline")}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `var(--color-ink)`;
        e.currentTarget.style.boxShadow = `var(--shadow-card-strong)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `var(--color-hairline)`;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Caption className="block mb-2">{publication}</Caption>
      <p
        className="m-0 font-medium group-hover:underline"
        style={{
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 1.5,
          color: V("color-ink"),
        }}
      >
        {headline}
      </p>
    </a>
  );
}

/* ─── About Page ─── */

export default function AboutPage() {
  return (
    <>
      <main style={{ marginTop: 68 }}>
        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
            ═══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden text-center"
          style={{
            paddingTop: 104,
            paddingBottom: 104,
            background: V("color-canvas"),
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px]"
              style={{
                background: `color-mix(in srgb, ${V("color-accent-blue")} 6%, transparent)`,
              }}
            />
          </div>

          <div
            className="relative z-10 mx-auto px-5 sm:px-8"
            style={{ maxWidth: "960px" }}
          >
            {/* Section label */}
            <Caption className="block mb-4 text-center">
              About Kreature
            </Caption>

            <H1>
              We&apos;re bringing development superpowers to everyone
            </H1>

            <BodyLarge
              className="mt-6 mx-auto text-center"
              style={{ maxWidth: "640px" }}
            >
              A visual development platform that empowers designers, marketers,
              and entrepreneurs to build professional websites without writing
              code — while giving developers the tools they need to extend and
              scale.
            </BodyLarge>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/company/careers"
                className="inline-flex items-center text-sm font-medium rounded text-white no-underline transition-opacity hover:opacity-90"
                style={{
                  background: V("color-accent-blue"),
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: "19.2px",
                  padding: "16px 24px",
                  borderRadius: "4px",
                }}
              >
                Careers
                <Arrow />
              </a>
              <a
                href="/company/media"
                className="inline-flex items-center text-sm font-medium rounded no-underline transition-colors duration-200"
                style={{
                  border: `1px solid ${V("color-hairline")}`,
                  color: V("color-ink"),
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: "19.2px",
                  padding: "16px 24px",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `var(--color-ink)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `var(--color-hairline)`;
                }}
              >
                Press
              </a>
            </div>

            {/* Trusted by logo bar */}
            <div
              className="mt-16 pt-12"
              style={{ borderTop: `1px solid ${V("color-hairline")}` }}
            >
              <Caption className="block mb-8 text-center">
                Trusted by teams at
              </Caption>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                {TRUSTED_LOGOS.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center h-8"
                    style={{ opacity: 0.6 }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-6 w-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 2 — VISION
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div
              className="rounded-xl overflow-hidden aspect-[4/3]"
              style={{ background: V("color-canvas-mid") }}
            >
              <img
                src="/about/vision.jpg"
                alt="Kreature vision"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div>
              <Caption className="block mb-4">Vision</Caption>
              <H2>
                Our vision is to build the world&apos;s most powerful agentic
                marketing platform.
              </H2>
              <BodyLarge className="mt-6 max-w-[560px]">
                We believe that when creative people have direct access to the
                power of code — without needing to become developers — the
                entire internet gets better. Our platform combines visual
                development with agentic AI to give everyone development
                superpowers.
              </BodyLarge>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 3 — CORE VALUES BEHAVIORS
            ═══════════════════════════════════════════ */}
        <SectionNarrow>
          <H2>Core values behaviors</H2>
          <BodyLarge className="mt-4 max-w-[640px]">
            We see every day as an opportunity to turn values into action through
            our 4 core behaviors.
          </BodyLarge>

          <div className="mt-14 space-y-10">
            {CORE_BEHAVIORS.map((b, i) => (
              <div
                key={b.title}
                className="flex flex-col sm:flex-row gap-6 sm:gap-12"
              >
                <div className="shrink-0">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold"
                    style={{
                      background: V("color-canvas-mid"),
                      color: V("color-accent-blue"),
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <H3>{b.title}</H3>
                  <Body className="mt-3">{b.body}</Body>
                </div>
              </div>
            ))}
          </div>
        </SectionNarrow>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 4 — BACKED BY
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="text-center">
            <H2>Backed by</H2>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
              {INVESTORS.map((inv) => (
                <div
                  key={inv.name}
                  className="flex items-center justify-center h-10"
                  style={{ opacity: 0.7 }}
                >
                  <img
                    src={inv.src}
                    alt={inv.name}
                    className="max-h-8 w-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 5 — BY THE NUMBERS
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="text-center">
            <H2>By the numbers</H2>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "clamp(40px, 5vw, 64px)",
                    fontWeight: 600,
                    lineHeight: 1,
                    color: V("color-accent-blue"),
                  }}
                >
                  {s.value}
                </div>
                <Body className="text-center">{s.label}</Body>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 6 — IN THE PRESS
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
            <div>
              <H2>In the press</H2>
            </div>
            <a
              href="/company/media"
              className="inline-flex items-center text-sm font-medium no-underline transition-colors hover:opacity-70 shrink-0"
              style={{
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "19.2px",
                color: V("color-ink"),
              }}
            >
              View all press
              <ArrowUpRight />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESS_ARTICLES.map((article) => (
              <PressCard
                key={article.headline}
                publication={article.publication}
                headline={article.headline}
                href={article.href}
              />
            ))}
          </div>
        </Section>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 7 — LEADERSHIP
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="text-center mb-14">
            <H2>Leadership</H2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((person) => (
              <PersonCard
                key={person.name}
                name={person.name}
                title={person.title}
                img={person.img}
              />
            ))}
          </div>
        </Section>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 8 — FOUNDERS
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="text-center mb-14">
            <H2>Founders</H2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            {FOUNDERS.map((person) => (
              <PersonCard
                key={person.name}
                name={person.name}
                title={person.title}
                img={person.img}
              />
            ))}
          </div>
        </Section>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 9 — REVIEWS
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="text-center mb-14">
            <H2>Reviews</H2>
            <BodyLarge className="mt-4 max-w-[560px] mx-auto text-center">
              See what our customers and employees think about Kreature.
            </BodyLarge>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-[720px] mx-auto">
            {/* G2 */}
            <div
              className="rounded-xl p-10 text-center"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 600,
                  lineHeight: 1,
                  color: V("color-accent-blue"),
                }}
              >
                4.4
              </div>
              <Caption className="block mb-1">G2 Rating</Caption>
              <Body className="text-center">As of January 2025</Body>
            </div>

            {/* Glassdoor */}
            <div
              className="rounded-xl p-10 text-center"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 600,
                  lineHeight: 1,
                  color: V("color-accent-blue"),
                }}
              >
                3.9
              </div>
              <Caption className="block mb-1">Glassdoor Rating</Caption>
              <Body className="text-center">As of January 2025</Body>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ═══════════════════════════════════════════
            SECTION 10 — CTA
            ═══════════════════════════════════════════ */}
        <Section bg="dark">
          <div className="text-center max-w-[840px] mx-auto">
            <h2
              className="font-heading m-0 mb-6"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-canvas"),
              }}
            >
              Join the team bringing development superpowers to everyone
            </h2>
            <BodyLarge
              className="mb-8 mx-auto text-center"
              style={{
                color: V("color-mute-soft"),
                maxWidth: "600px",
              }}
            >
              We are building the future of how websites get made — and we are
              looking for people who care deeply about craft, speed, and impact.
            </BodyLarge>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/company/careers"
                className="inline-flex items-center text-sm font-medium rounded text-white no-underline transition-opacity hover:opacity-90"
                style={{
                  background: V("color-accent-blue"),
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: "19.2px",
                  padding: "16px 24px",
                  borderRadius: "4px",
                }}
              >
                View open roles
                <Arrow />
              </a>
              <a
                href="/company/media"
                className="inline-flex items-center text-sm font-medium rounded no-underline transition-colors"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: "19.2px",
                  padding: "16px 24px",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.2)";
                }}
              >
                Press &amp; media
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
