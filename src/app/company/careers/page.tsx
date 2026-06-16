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

const CULTURE_ITEMS = [
  {
    title: "Remote-first",
    body: "Work from wherever you do your best thinking. We have teammates across the US and Europe, and we optimize for async communication over synchronous meetings.",
  },
  {
    title: "Async by default",
    body: "We write things down, record loom videos, and keep meetings to a minimum. Deep work time is sacred — we protect it intentionally.",
  },
  {
    title: "Fast-paced",
    body: "We ship real products in weeks, not quarters. You'll see your work in production regularly and learn faster than anywhere else.",
  },
  {
    title: "Full ownership",
    body: "Everyone owns outcomes, not tickets. You'll talk directly to founders, make decisions that matter, and see the impact of your work immediately.",
  },
] as const;

const BENEFITS = [
  {
    title: "Competitive salary",
    body: "We benchmark against top-tier product companies and agencies. Compensation is transparent and tied to contribution, not negotiation.",
  },
  {
    title: "Remote work",
    body: "Work from anywhere — home office, co-working, or a cabin in the woods. As long as you have good internet and overlap with your team, you're set.",
  },
  {
    title: "Flexible hours",
    body: "We care about output, not when you clock in. Need to pick up kids, run errands, or work late because that's when you're sharp? Go for it.",
  },
  {
    title: "Equipment budget",
    body: "We'll kit you out with the tools you need — laptop, monitor, mechanical keyboard, standing desk contribution. Whatever helps you do your best work.",
  },
  {
    title: "Learning stipend",
    body: "$2,000 per year for courses, conferences, books, or whatever helps you grow. We invest in people who invest in themselves.",
  },
  {
    title: "Paid time off",
    body: "Four weeks of vacation plus local holidays. We also close the studio between Christmas and New Year's so everyone can actually unplug.",
  },
] as const;

const ROLES = {
  engineering: [
    {
      title: "Senior Full-Stack Engineer",
      location: "Remote (US/EU time zones)",
      type: "Full-time",
      description:
        "Own full features end-to-end across the stack. You'll build with Next.js, TypeScript, and Postgres, working directly with founders and designers.",
    },
    {
      title: "Frontend Engineer",
      location: "Remote (US/EU time zones)",
      type: "Full-time",
      description:
        "Craft pixel-perfect interfaces in React and TypeScript. You have strong opinions about interaction design, accessibility, and component architecture.",
    },
    {
      title: "Backend Engineer",
      location: "Remote (US/EU time zones)",
      type: "Full-time",
      description:
        "Design APIs, data models, and infrastructure that scale. Deep experience with Postgres, serverless architecture, and shipping reliable systems.",
    },
  ],
  design: [
    {
      title: "Product Designer",
      location: "Remote (US/EU time zones)",
      type: "Full-time",
      description:
        "Design end-to-end product experiences for founders and their users. You're comfortable in Figma, can prototype in code, and think in systems.",
    },
    {
      title: "Brand Designer (Contract)",
      location: "Remote (US/EU time zones)",
      type: "Contract",
      description:
        "Define visual identities for early-stage products. Brand strategy, logo systems, typography, color — you help products look like they belong.",
    },
  ],
  product: [
    {
      title: "Technical Product Manager",
      location: "Remote (US/EU time zones)",
      type: "Full-time",
      description:
        "Bridge the gap between founder vision and engineering execution. You scope features, manage client relationships, and keep projects on track.",
    },
  ],
} as const;

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
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
            <p
              className="text-sm leading-relaxed max-w-[280px]"
              style={{ color: V("color-body-mid") }}
            >
              A product studio for founders who want to ship without building an
              engineering team.
            </p>
          </div>

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

/* ── Divider ── */

function Divider() {
  return (
    <div
      className="w-full"
      style={{ borderTop: `1px solid ${V("color-hairline")}` }}
    />
  );
}

/* ── Careers Page ── */

export default function CareersPage() {
  return (
    <>
      <main style={{ marginTop: 68 }}>
        {/* ── Hero ── */}
        <Section>
          <Caption className="block mb-4">Careers at Kreature</Caption>
          <H1>
            Build the future
            <br />
            of product creation
          </H1>
          <BodyLarge className="mt-6 max-w-[640px]">
            Join a small, senior team building real products for ambitious
            founders. No politics, no endless meetings, no &quot;we&apos;ll
            circle back&quot; — just high-craft work that ships fast and
            teaches you something every cycle.
          </BodyLarge>
          <div className="mt-10">
            <a
              href="#open-roles"
              className="inline-flex items-center text-sm font-medium rounded text-white no-underline transition-colors duration-200"
              style={{
                background: V("color-accent-blue"),
                padding: "16px 24px",
              }}
            >
              See open roles
              <Arrow />
            </a>
          </div>
        </Section>

        <Divider />

        {/* ── Culture ── */}
        <Section>
          <H2>How we work</H2>
          <BodyLarge className="mt-4 max-w-[640px]">
            We&apos;ve built a culture that trusts smart people to do great
            work — without the overhead that slows most companies down.
          </BodyLarge>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {CULTURE_ITEMS.map((c) => (
              <div
                key={c.title}
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
                  {c.title}
                </h4>
                <Body>{c.body}</Body>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Testimonial ── */}
        <Section>
          <div
            className="rounded-2xl p-10 md:p-16"
            style={{
              background: V("color-canvas-soft"),
              border: `1px solid ${V("color-hairline")}`,
            }}
          >
            <blockquote className="m-0">
              <p
                className="m-0 mb-6"
                style={{
                  fontSize: "clamp(20px, 2vw, 24px)",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  fontStyle: "italic",
                  color: V("color-ink"),
                }}
              >
                &ldquo;Kreature is the first place I&apos;ve worked where
                &apos;move fast&apos; and &apos;do great work&apos; aren&apos;t
                in conflict. We ship real products on tight timelines, but
                nobody cuts corners. The constraints actually make us better
                designers and engineers.&rdquo;
              </p>
              <footer>
                <div
                  className="font-semibold mb-1"
                  style={{ fontSize: 16, color: V("color-ink") }}
                >
                  Alex Chen
                </div>
                <div className="text-sm" style={{ color: V("color-body-mid") }}>
                  Senior Product Designer, 2 years at Kreature
                </div>
              </footer>
            </blockquote>
          </div>
        </Section>

        <Divider />

        {/* ── Benefits ── */}
        <Section>
          <H2>What you get</H2>
          <BodyLarge className="mt-4 max-w-[640px]">
            We compete on quality of life, not just compensation. Here&apos;s
            what&apos;s included.
          </BodyLarge>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-xl p-6"
                style={{
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <h4
                  className="m-0 mb-2"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: V("color-ink"),
                  }}
                >
                  {b.title}
                </h4>
                <Body>{b.body}</Body>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Open Roles ── */}
        <Section id="open-roles">
          <H2>Open roles</H2>
          <BodyLarge className="mt-4 max-w-[640px]">
            We&apos;re always looking for exceptional people. If you see
            yourself here, reach out — even if there&apos;s no perfect fit
            listed.
          </BodyLarge>

          {/* Engineering */}
          <div className="mt-14">
            <Caption className="block mb-6">Engineering</Caption>
            <div className="space-y-4">
              {ROLES.engineering.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-colors duration-200 hover:border-[var(--color-body-mid)]"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <div className="flex-1">
                    <h4
                      className="m-0 mb-1"
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: V("color-ink"),
                      }}
                    >
                      {role.title}
                    </h4>
                    <div
                      className="flex flex-wrap gap-x-5 gap-y-1 text-sm"
                      style={{ color: V("color-body-mid") }}
                    >
                      <span>{role.location}</span>
                      <span>{role.type}</span>
                    </div>
                    <Body className="mt-3">{role.description}</Body>
                  </div>
                  <a
                    href="#apply"
                    className="shrink-0 inline-flex items-center text-sm font-medium rounded text-white no-underline transition-colors duration-200 self-start"
                    style={{
                      background: V("color-accent-blue"),
                      padding: "10px 20px",
                    }}
                  >
                    Apply
                    <Arrow />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Design */}
          <div className="mt-12">
            <Caption className="block mb-6">Design</Caption>
            <div className="space-y-4">
              {ROLES.design.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-colors duration-200 hover:border-[var(--color-body-mid)]"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <div className="flex-1">
                    <h4
                      className="m-0 mb-1"
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: V("color-ink"),
                      }}
                    >
                      {role.title}
                    </h4>
                    <div
                      className="flex flex-wrap gap-x-5 gap-y-1 text-sm"
                      style={{ color: V("color-body-mid") }}
                    >
                      <span>{role.location}</span>
                      <span>{role.type}</span>
                    </div>
                    <Body className="mt-3">{role.description}</Body>
                  </div>
                  <a
                    href="#apply"
                    className="shrink-0 inline-flex items-center text-sm font-medium rounded text-white no-underline transition-colors duration-200 self-start"
                    style={{
                      background: V("color-accent-blue"),
                      padding: "10px 20px",
                    }}
                  >
                    Apply
                    <Arrow />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="mt-12">
            <Caption className="block mb-6">Product</Caption>
            <div className="space-y-4">
              {ROLES.product.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-colors duration-200 hover:border-[var(--color-body-mid)]"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <div className="flex-1">
                    <h4
                      className="m-0 mb-1"
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: V("color-ink"),
                      }}
                    >
                      {role.title}
                    </h4>
                    <div
                      className="flex flex-wrap gap-x-5 gap-y-1 text-sm"
                      style={{ color: V("color-body-mid") }}
                    >
                      <span>{role.location}</span>
                      <span>{role.type}</span>
                    </div>
                    <Body className="mt-3">{role.description}</Body>
                  </div>
                  <a
                    href="#apply"
                    className="shrink-0 inline-flex items-center text-sm font-medium rounded text-white no-underline transition-colors duration-200 self-start"
                    style={{
                      background: V("color-accent-blue"),
                      padding: "10px 20px",
                    }}
                  >
                    Apply
                    <Arrow />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── General application CTA ── */}
        <Section id="apply">
          <div
            className="rounded-2xl p-10 md:p-16 text-center"
            style={{
              background: V("color-canvas-soft"),
              border: `1px solid ${V("color-hairline")}`,
            }}
          >
            <H2>Don&apos;t see your role?</H2>
            <BodyLarge className="mt-4 max-w-[560px] mx-auto">
              We&apos;re always looking for great people. If you think
              you&apos;d make Kreature better but none of the open roles fit,
              send us a note anyway. We read every application.
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
                Apply generally
                <Arrow />
              </a>
              <a
                href="/company/about"
                className="inline-flex items-center text-sm font-medium rounded no-underline transition-colors duration-200"
                style={{
                  border: `1px solid ${V("color-hairline")}`,
                  color: V("color-ink"),
                  padding: "16px 24px",
                }}
              >
                Learn about us
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
