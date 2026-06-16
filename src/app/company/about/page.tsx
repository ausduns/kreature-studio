"use client";

import { type ReactNode } from "react";

/* ── Design token helper ── */
const V = (n: string) => `var(--${n})`;

/* ── Shared micro-components ── */

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ── Data constants ── */

const VALUES = [
  {
    title: "Speed without shortcuts",
    body: "We move fast because we've done this before — not because we skip steps. Every project benefits from patterns refined across dozens of launches.",
  },
  {
    title: "Product thinking",
    body: "We don't just build what you ask for. We push back, simplify, and make sure every feature earns its place in the scope.",
  },
  {
    title: "Founder-first",
    body: "Your constraints are our constraints. We optimize for your timeline, your budget, and your ability to iterate after we hand off.",
  },
  {
    title: "Craft matters",
    body: "Pixel precision, clean code, thoughtful interactions — the details compound. Users feel the difference, even when they can't name it.",
  },
  {
    title: "Fixed scope, fixed price",
    body: "No hourly billing. No scope creep invoices. We agree on what gets built, what it costs, and when you'll have it — before we write a single line of code.",
  },
] as const;

const STATS = [
  { value: "40+", label: "Products shipped" },
  { value: "30+", label: "Founders served" },
  { value: "6-8", label: "Weeks to launch" },
  { value: "98%", label: "On-time delivery" },
] as const;

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Docs", "Guides", "API", "Community"],
  Legal: ["Privacy", "Terms", "Security", "DPA"],
  Compare: ["vs Agencies", "vs Freelance", "vs In-house", "vs No-code"],
  Partners: ["Certified", "Agencies", "Affiliates", "Integrations"],
} as const;

/* ── Footer ── */

function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: V("color-canvas-soft"),
        borderTop: `1px solid ${V("color-hairline")}`,
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        {/* 7-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2 no-underline mb-4"
              style={{ color: V("color-ink") }}
            >
              <img
                src="/logo/kreature-logo-dark.png"
                alt="Kreature"
                className="logo-dark h-7 w-auto"
              />
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="logo-light h-7 w-auto"
              />
              <span className="text-base font-semibold tracking-tight">
                Kreature
                <span style={{ color: V("color-accent-blue") }}>.</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: V("color-body-mid") }}>
              A product studio for founders who want to ship without building an
              engineering team.
            </p>
          </div>

          {/* Link columns */}
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

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${V("color-hairline")}` }}
        >
          <span className="text-xs" style={{ color: V("color-mute") }}>
            &copy; {new Date().getFullYear()} Kreature Studio. All rights
            reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs no-underline transition-colors duration-200 hover:opacity-70"
              style={{ color: V("color-mute") }}
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-xs no-underline transition-colors duration-200 hover:opacity-70"
              style={{ color: V("color-mute") }}
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-xs no-underline transition-colors duration-200 hover:opacity-70"
              style={{ color: V("color-mute") }}
            >
              Dribbble
            </a>
            <a
              href="#"
              className="text-xs no-underline transition-colors duration-200 hover:opacity-70"
              style={{ color: V("color-mute") }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Typography primitives ── */

function H1({ children }: { children: ReactNode }) {
  return (
    <h1
      className="tracking-[-0.8px] m-0"
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
      className="m-0"
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
      className="m-0"
      style={{
        fontSize: 32,
        fontWeight: 500,
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

/* ── Section primitives ── */

function Section({
  children,
  className = "",
  tight = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  tight?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full ${className}`}
      style={{ paddingTop: tight ? 64 : 120, paddingBottom: tight ? 64 : 120 }}
    >
      <div className="mx-auto max-w-[960px] px-6">{children}</div>
    </section>
  );
}

function SectionWide({
  children,
  className = "",
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section
      className={`w-full ${className}`}
      style={{ paddingTop: tight ? 64 : 120, paddingBottom: tight ? 64 : 120 }}
    >
      <div className="mx-auto max-w-[1280px] px-6">{children}</div>
    </section>
  );
}

/* ── Decorative divider ── */

function Divider() {
  return (
    <div className="w-full" style={{ borderTop: `1px solid ${V("color-hairline")}` }} />
  );
}

/* ── About Us Page ── */

export default function AboutPage() {
  return (
    <>
      <main style={{ marginTop: 68 }}>
        {/* ── Hero ── */}
        <Section>
          <Caption className="block mb-4">About Kreature</Caption>
          <H1>
            We build products.
            <br />
            You ship fast.
          </H1>
          <BodyLarge className="mt-6 max-w-[640px]">
            Kreature is a product studio built for founders who want to launch
            real software — without hiring an engineering team, burning runway
            on freelancers, or waiting months for an agency to kick off.
          </BodyLarge>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact-sales"
              className="inline-flex items-center text-sm font-medium rounded text-white no-underline transition-colors duration-200"
              style={{
                background: V("color-accent-blue"),
                padding: "16px 24px",
              }}
            >
              Work with us
              <Arrow />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center text-sm font-medium rounded no-underline transition-colors duration-200"
              style={{
                border: `1px solid ${V("color-hairline")}`,
                color: V("color-ink"),
                padding: "16px 24px",
              }}
            >
              Our mission
            </a>
          </div>
        </Section>

        <Divider />

        {/* ── Mission ── */}
        <Section id="mission">
          <div
            className="rounded-2xl p-10 md:p-16"
            style={{
              background: V("color-canvas-soft"),
              border: `1px solid ${V("color-hairline")}`,
            }}
          >
            <Caption className="block mb-3">Our mission</Caption>
            <BodyLarge className="max-w-[720px]">
              Kreature exists because non-technical founders deserve to ship
              without the pain of building an engineering team. We&apos;re a
              product studio that delivers fixed-scope, fixed-timeline products
              — not hourly estimates or vague promises. You know exactly what
              you&apos;re getting, exactly what it costs, and exactly when
              it&apos;ll be in your users&apos; hands.
            </BodyLarge>
          </div>
        </Section>

        <Divider />

        {/* ── How we're different ── */}
        <Section>
          <H2>How we&apos;re different</H2>
          <BodyLarge className="mt-4 max-w-[640px]">
            Traditional agencies bill by the hour and win when projects drag
            on. Freelance marketplaces give you talent without process. We
            combine the quality of an elite team with the predictability of a
            product company.
          </BodyLarge>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fixed scope",
                body: "We spec every project in detail before we start. You approve the scope, and that's what gets built — no surprises, no scope creep.",
              },
              {
                title: "Fixed timeline",
                body: "Most products ship in 6-8 weeks. We work in focused cycles with clear milestones so you always know where things stand.",
              },
              {
                title: "Fixed price",
                body: "You know the cost before day one. No hourly billing, no retainer burn, no invoices you didn't see coming.",
              },
            ].map((d) => (
              <div key={d.title}>
                <H3>{d.title}</H3>
                <Body className="mt-3">{d.body}</Body>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Values ── */}
        <Section>
          <H2>What we believe</H2>
          <BodyLarge className="mt-4 max-w-[640px]">
            These are the principles that guide every product decision, every
            line of code, and every client conversation.
          </BodyLarge>

          <div className="mt-14 space-y-10">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
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
                  <h4
                    className="m-0 mb-2"
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: V("color-ink"),
                    }}
                  >
                    {v.title}
                  </h4>
                  <Body>{v.body}</Body>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── The team approach ── */}
        <Section>
          <H2>The people behind it</H2>
          <BodyLarge className="mt-4 max-w-[640px]">
            We&apos;re a small, senior team of product designers and engineers
            who&apos;ve built products at startups, scale-ups, and agencies. We
            don&apos;t have junior tiers to bill out — every person touching
            your product has shipped dozens of projects before.
          </BodyLarge>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Flat and focused",
                body: "No account managers, no layers between you and the people building your product. You talk directly to your designer and engineer.",
              },
              {
                title: "Scrappy by design",
                body: "We operate lean because we believe constraints produce better work. Every team member owns outcomes, not just tasks.",
              },
              {
                title: "Remote, always",
                body: "We work across time zones and hire for talent — not proximity to an office. Async communication keeps us productive and flexible.",
              },
              {
                title: "Founder empathy",
                body: "Several of us have been founders ourselves. We understand the pressure, the tradeoffs, and what it means to bet on a product.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="rounded-xl p-8"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <h4
                  className="m-0 mb-3"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: V("color-ink"),
                  }}
                >
                  {d.title}
                </h4>
                <Body>{d.body}</Body>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Stats ── */}
        <Section>
          <div className="text-center">
            <H2>By the numbers</H2>
            <BodyLarge className="mt-4 max-w-[560px] mx-auto">
              We measure ourselves by what we deliver — not by hours logged.
            </BodyLarge>
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

        {/* ── CTA ── */}
        <Section>
          <div
            className="rounded-2xl p-10 md:p-16 text-center"
            style={{
              background: V("color-canvas-soft"),
              border: `1px solid ${V("color-hairline")}`,
            }}
          >
            <H2>Work with us</H2>
            <BodyLarge className="mt-4 max-w-[560px] mx-auto">
              You bring the vision. We bring the team, the process, and the
              track record. In 6-8 weeks, your product is live.
            </BodyLarge>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/contact-sales"
                className="inline-flex items-center text-sm font-medium rounded text-white no-underline transition-colors duration-200"
                style={{
                  background: V("color-accent-blue"),
                  padding: "16px 24px",
                }}
              >
                Start a project
                <Arrow />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center text-sm font-medium rounded no-underline transition-colors duration-200"
                style={{
                  border: `1px solid ${V("color-hairline")}`,
                  color: V("color-ink"),
                  padding: "16px 24px",
                }}
              >
                See pricing
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
