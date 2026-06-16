"use client";

import { useState, type ReactNode } from "react";

/* ─── CSS Var helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Arrow ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Inline SVG icons for Core Values Behaviors ─── */
function IconUserExpert() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconCertificationRibbon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconHeartHandshake() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7Z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 1l5 5 5-5" />
    </svg>
  );
}

/* ─── Data ─── */

const CORE_BEHAVIORS = [
  {
    icon: <IconUserExpert />,
    title: "Build lasting customer trust",
    body: "We build trust by taking action that puts customer trust first.",
  },
  {
    icon: <IconCertificationRibbon />,
    title: "Win together",
    body: "We play to win, and we win as one team. Success at Kreature isn't a solo act.",
  },
  {
    icon: <IconHeartHandshake />,
    title: "Reinvent ourselves",
    body: "We don't just improve what exists, we imagine what's possible.",
  },
  {
    icon: <IconStar />,
    title: "Deliver with speed, quality, and craft",
    body: "We move fast because the moment demands it, and we do so without lowering the bar.",
  },
] as const;

const FEATURED_ROLES = [
  {
    department: "Sales",
    title: "Senior Forward Deployed Engineer",
    link: "https://boards.greenhouse.io/kreature/jobs/7728896",
  },
  {
    department: "Engineering",
    title: "Senior Software Engineer, Delivery Loop",
    link: "https://boards.greenhouse.io/kreature/jobs/7866296",
  },
  {
    department: "Engineering",
    title: "Senior Software Engineer, Developer Productivity",
    link: "https://boards.greenhouse.io/kreature/jobs/7802966",
  },
] as const;

const BENEFITS_ITEMS = [
  {
    title: "Pay & equity",
    body: "Competitive base salary, RSUs, and bonus or commission eligibility depending on your role. We benchmark against top-tier companies so you're compensated fairly for your impact.",
  },
  {
    title: "Health & wellness",
    body: "Medical, dental, and vision coverage for full-time employees and their dependents. We cover most premiums. Coverage includes gender-affirming care, menopause care, and support for a wide range of family needs.",
  },
  {
    title: "Remote-first flexibility",
    body: "Work from wherever you do your best thinking. We provide localized monthly stipends for Wi-Fi and mobile, plus a one-time home office setup bonus. Any location or hybrid requirements are always called out in job descriptions.",
  },
  {
    title: "Flexible time off",
    body: "No-accrual flexible vacation policy so you can rest when you need it. Plus separate paid sick leave, local public holidays, company-wide refresh days, and a sabbatical after five years.",
  },
  {
    title: "Financial wellness & retirement",
    body: "Region-tailored plans including 401(k) with 100% employer match on the first 5% of salary (up to $6,000/year) in the U.S., and retirement support internationally.",
  },
  {
    title: "Family & parental support",
    body: "12 weeks paid leave for all parents; birthing parents get at least 6 additional weeks. Our Caregivers community provides support, plus modern family planning and new parent support for all paths to parenthood.",
  },
  {
    title: "Mental wellness",
    body: "Free access to a global mental wellness platform with up to 20 one-on-one sessions per year with licensed therapists and certified coaches, plus unlimited group sessions.",
  },
  {
    title: "Kreature subscription discount",
    body: "99% off any Kreature plan for you, plus a 50% off code to share with friends and family.",
  },
] as const;

const AFFINITY_GROUPS = [
  { name: "Asians @ Kreature", href: "/company/affinity-group/asians-kreature", color: "#146ef5" },
  { name: "Blackflow", href: "/company/affinity-group/blackflow", color: "#7a3dff" },
  { name: "Caregivers @ Kreature", href: "/company/affinity-group/caregivers-kreature", color: "#ed52cb" },
  { name: "Disability @ Kreature", href: "/company/affinity-group/disability-kreature", color: "#ff6b00" },
  { name: "Queerflow", href: "/company/affinity-group/queerflow", color: "#00d722" },
  { name: "Women @ Kreature", href: "/company/affinity-group/women-kreature", color: "#146ef5" },
  { name: "Latino Flow", href: "/company/affinity-group/latino-flow", color: "#ffae13" },
  { name: "Vets @ Kreature", href: "/company/affinity-group/vets-kreature", color: "#006acc" },
] as const;

const PAY_ZONES = {
  us: {
    title: "United States",
    zones: [
      { name: "Zone A", cities: "New York City, San Francisco, San Jose, Seattle, Jersey City", description: "" },
      { name: "Zone B", cities: "Boston, Washington DC, San Diego, Chicago, Los Angeles, Sacramento, Portland, Denver, Austin", description: "" },
      { name: "Zone C", cities: "All other U.S. cities", description: "" },
    ],
    note: "If you live within a 75-mile/120-km radius of a major city, that city's zone applies. Within radius of two cities? The closer one counts.",
  },
  uk: {
    title: "United Kingdom",
    zones: [
      { name: "Zone A", cities: "London", description: "" },
      { name: "Zone B", cities: "All other U.K. cities", description: "" },
    ],
    note: "75-mile/120-km radius applies for London Zone A.",
  },
  ca: {
    title: "Canada",
    zones: [
      { name: "Zone A", cities: "Vancouver, Toronto", description: "" },
      { name: "Zone B", cities: "All other Canadian cities", description: "" },
    ],
    note: "75-mile/120-km radius applies for Zone A cities.",
  },
} as const;

const AWARDS = [
  { year: "2026", source: "BuiltIn", title: "Best Places to Work in Chicago" },
  { year: "2026", source: "BuiltIn", title: "Best Places to Work in San Francisco" },
  { year: "2026", source: "BuiltIn", title: "Best Remote Companies to Work for" },
  { year: "2025", source: "Fortune", title: "Best Workplaces for Parents" },
  { year: "2025", source: "Fortune", title: "Best Workplaces for Women" },
  { year: "2025", source: "Fortune", title: "Best Workplaces in Technology" },
  { year: "2025", source: "BuiltIn", title: "100 Best Places to Work in San Francisco" },
  { year: "2025", source: "BuiltIn", title: "100 Best Remote Companies to Work For" },
  { year: "2024", source: "Reppy Awards (RepVue)", title: "A Top 20 Sales Org For Mid-size Companies" },
] as const;

/* ─── Footer ─── */

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Docs", "Guides", "API", "Community"],
  Legal: ["Privacy", "Terms", "Security", "DPA"],
  Compare: ["vs Agencies", "vs Freelance", "vs In-house", "vs No-code"],
  Partners: ["Certified", "Agencies", "Affiliates", "Integrations"],
} as const;

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
                className="logo-dark h-[36px] w-auto"
              />
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="logo-light h-[36px] w-auto"
              />
              <span className="font-heading font-[800] text-xl tracking-tight">
                Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
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

/* ─── Shared primitives ─── */

function GradientImagePlaceholder({
  gradient,
  className = "",
  aspectRatio,
}: {
  gradient: string;
  className?: string;
  aspectRatio?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{
        background: gradient,
        aspectRatio: aspectRatio || "4/3",
      }}
    >
      <div
        className="w-full h-full opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  heading,
  body,
  center = false,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <span
          className="inline-block mb-4 font-medium tracking-wide uppercase"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "1.4px",
            color: V("color-accent-blue"),
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="tracking-tight m-0"
        style={{
          fontSize: "clamp(36px, 4vw, 56px)",
          fontWeight: 600,
          lineHeight: 1.04,
          letterSpacing: "-0.36px",
          color: V("color-ink"),
        }}
      >
        {heading}
      </h2>
      {body && (
        <p
          className="mt-5 m-0 mx-auto"
          style={{
            fontSize: "clamp(18px, 1.6vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: V("color-body"),
            maxWidth: center ? "680px" : "640px",
          }}
        >
          {body}
        </p>
      )}
    </div>
  );
}

function PillLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center text-sm font-medium rounded no-underline transition-all duration-200"
      style={{
        background: primary ? V("color-accent-blue") : "transparent",
        color: primary ? "#ffffff" : V("color-ink"),
        padding: "14px 24px",
        fontSize: "15px",
        fontWeight: 500,
        lineHeight: "18px",
        border: primary ? "none" : `1px solid ${V("color-hairline")}`,
        borderRadius: "4px",
      }}
      onMouseEnter={(e) => {
        if (!primary) {
          e.currentTarget.style.borderColor = `var(--color-ink)`;
        } else {
          e.currentTarget.style.opacity = "0.9";
        }
      }}
      onMouseLeave={(e) => {
        if (!primary) {
          e.currentTarget.style.borderColor = `var(--color-hairline)`;
        } else {
          e.currentTarget.style.opacity = "1";
        }
      }}
    >
      {children}
      <Arrow />
    </a>
  );
}

/* ─── Accordion (for benefits on mobile) ─── */

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      style={{
        borderBottom: `1px solid ${V("color-hairline")}`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer"
        style={{ color: V("color-ink") }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "25.2px",
          }}
        >
          {title}
        </span>
        <span
          className="transition-transform duration-200"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: V("color-mute"),
          }}
        >
          <ChevronDown />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-200"
        style={{
          maxHeight: open ? "400px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <div
          className="pb-5"
          style={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "25.6px",
            color: V("color-body"),
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function CareersPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "120px",
          background: V("color-canvas-soft"),
        }}
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-blue")} 5%, transparent)`,
            }}
          />
        </div>

        <div
          className="relative z-10 mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          {/* Hero content + images grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <span
                className="inline-block mb-6 font-medium tracking-wide uppercase"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1.4px",
                  color: V("color-accent-blue"),
                }}
              >
                Careers at Kreature
              </span>

              <h1
                className="font-heading tracking-tight m-0"
                style={{
                  fontSize: "clamp(48px, 5.5vw, 80px)",
                  fontWeight: 600,
                  lineHeight: 1.04,
                  letterSpacing: "-0.48px",
                  color: V("color-ink"),
                }}
              >
                Remote Together
              </h1>

              <p
                className="mt-6 m-0"
                style={{
                  fontSize: "clamp(18px, 1.6vw, 20px)",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: V("color-body"),
                  maxWidth: "560px",
                }}
              >
                At Kreature, the only limit to what you can build is your
                imagination. Join us on our mission to bring development
                superpowers to everyone.
              </p>

              <div className="mt-10">
                <a
                  href="/company/careers/roles"
                  className="inline-flex items-center text-sm font-medium rounded no-underline transition-all duration-200"
                  style={{
                    background: V("color-accent-blue"),
                    color: "#ffffff",
                    padding: "16px 28px",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "19.2px",
                    borderRadius: "4px",
                  }}
                >
                  Explore open roles
                  <Arrow />
                </a>
              </div>
            </div>

            {/* Right: Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #146ef5 0%, #7a3dff 100%)"
                aspectRatio="4/5"
                className="row-span-2"
              />
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #ed52cb 0%, #ff6b00 100%)"
                aspectRatio="16/9"
              />
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #00d722 0%, #146ef5 100%)"
                aspectRatio="16/9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — FEATURED OPEN ROLES
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <SectionHeading
              heading="Featured open roles"
              body="A few of the roles we're most excited about right now."
            />
            <a
              href="/company/careers/roles"
              className="inline-flex items-center shrink-0 text-sm font-medium no-underline transition-all duration-200"
              style={{
                color: V("color-accent-blue"),
                fontSize: "16px",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              View all open roles
              <Arrow />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_ROLES.map((role, i) => (
              <a
                key={i}
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl p-8 no-underline transition-all duration-300 flex flex-col"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)";
                  e.currentTarget.style.borderColor = `var(--color-mute-soft)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = `var(--color-hairline)`;
                }}
              >
                <span
                  className="inline-block mb-3 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: V("color-accent-blue") }}
                >
                  {role.department}
                </span>
                <h3
                  className="m-0 mb-12 flex-1"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {role.title}
                </h3>
                <span
                  className="inline-flex items-center text-sm font-medium transition-opacity group-hover:opacity-80"
                  style={{ color: V("color-accent-blue") }}
                >
                  Learn more
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — WHAT MAKES KREATURE DIFFERENT
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <SectionHeading
            heading="What makes Kreature different"
            center
          />

          {/* How it started */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="grid grid-cols-3 gap-4">
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #146ef5 0%, #006acc 100%)"
                aspectRatio="9/16"
                className="row-span-2"
              />
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #7a3dff 0%, #ed52cb 100%)"
                aspectRatio="1/1"
              />
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #ff6b00 0%, #ffae13 100%)"
                aspectRatio="1/1"
              />
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #00d722 0%, #146ef5 100%)"
                aspectRatio="16/9"
                className="col-span-2"
              />
            </div>

            <div>
              <h3
                className="m-0 mb-4"
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  lineHeight: "38.4px",
                  color: V("color-ink"),
                }}
              >
                How it started
              </h3>
              <p
                className="m-0"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25.6px",
                  color: V("color-body"),
                }}
              >
                Kreature started in 2012 with the idea that everyone should be
                able to create for the web without knowing how to write code.
                After one rejection from Y Combinator, Kreature officially took
                off in 2013 — and we&apos;ve been reimagining what&apos;s
                possible on the web ever since.
              </p>
              <div className="mt-8">
                <PillLink href="/company/about">Learn more about us</PillLink>
              </div>
            </div>
          </div>

          {/* How it's going */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">
            <div className="order-2 lg:order-1">
              <h3
                className="m-0 mb-4"
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  lineHeight: "38.4px",
                  color: V("color-ink"),
                }}
              >
                How it&apos;s going
              </h3>
              <p
                className="m-0"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25.6px",
                  color: V("color-body"),
                }}
              >
                Now we have the Kreature product and a thriving worldwide
                community. Freelancers, agencies, and businesses of all sizes
                use Kreature to build powerful, stunning web experiences on a
                visual-first canvas — and our team keeps growing to meet the
                moment.
              </p>
              <div className="mt-8">
                <PillLink href="/webflow-clone">
                  Learn about the Kreature platform
                </PillLink>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 order-1 lg:order-2">
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #ed52cb 0%, #7a3dff 100%)"
                aspectRatio="16/9"
                className="col-span-2"
              />
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #146ef5 0%, #ed52cb 100%)"
                aspectRatio="1/1"
                className="col-span-1 row-span-2"
              />
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #ffae13 0%, #ff6b00 100%)"
                aspectRatio="1/1"
              />
              <GradientImagePlaceholder
                gradient="linear-gradient(135deg, #00d722 0%, #006acc 100%)"
                aspectRatio="1/1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — AI HIRING NOTICE
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <div
            className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{
              background: V("color-canvas-soft"),
              border: `1px solid ${V("color-hairline")}`,
            }}
          >
            <div>
              <h3
                className="m-0 mb-3"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "31.2px",
                  color: V("color-ink"),
                }}
              >
                Every hiring decision at Kreature is made by a human
              </h3>
              <p
                className="m-0"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25.6px",
                  color: V("color-body"),
                }}
              >
                We use AI thoughtfully in our hiring process, but real people
                make every decision. Learn about our principles.
              </p>
            </div>
            <div className="shrink-0">
              <PillLink href="/company/careers/ai-hiring-principles">
                Learn more
              </PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — EMPLOYEE TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <SectionHeading
            heading="Hear from the team"
            body="Real Kreatures on what it's like to work here."
            center
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Testimonial 1 */}
            <div
              className="rounded-2xl p-10 md:p-12 flex flex-col"
              style={{
                background: V("color-canvas"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <blockquote className="m-0 flex-1">
                <p
                  className="m-0 mb-8"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "28.8px",
                    fontStyle: "italic",
                    color: V("color-body"),
                  }}
                >
                  &ldquo;Being remote-first gives me more time for the things
                  that matter. I can take my kids to school in the morning and
                  still crush my day. The flexibility means I can be present in
                  the ways I want to be — both for my family and for work that
                  I genuinely love.&rdquo;
                </p>
                <footer>
                  <div
                    className="font-semibold mb-1"
                    style={{
                      fontSize: "16px",
                      color: V("color-ink"),
                    }}
                  >
                    Lauren Samuel
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: V("color-body-mid") }}
                  >
                    Business Recruiting
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div
              className="rounded-2xl p-10 md:p-12 flex flex-col"
              style={{
                background: V("color-canvas"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <blockquote className="m-0 flex-1">
                <p
                  className="m-0 mb-8"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "28.8px",
                    fontStyle: "italic",
                    color: V("color-body"),
                  }}
                >
                  &ldquo;The business is strong and growing in an exciting
                  direction. But the thing that stands out most to me is the
                  culture — it&apos;s almost uniquely friendly among the
                  industry. Leadership decisions are centered on compassion,
                  and I have total confidence in the product we&apos;re
                  building.&rdquo;
                </p>
                <footer>
                  <div
                    className="font-semibold mb-1"
                    style={{
                      fontSize: "16px",
                      color: V("color-ink"),
                    }}
                  >
                    Henry Lee
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: V("color-body-mid") }}
                  >
                    Technical Support Specialist
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CORE VALUES BEHAVIORS
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <SectionHeading
            heading="Our core values behaviors"
            body="These aren't just words on a wall. They're how we hire, how we
            promote, and how we build."
            center
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {CORE_BEHAVIORS.map((b, i) => (
              <div
                key={i}
                className="rounded-xl p-8 flex flex-col items-start text-left"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="mb-5"
                  style={{ color: V("color-accent-blue") }}
                >
                  {b.icon}
                </div>
                <h4
                  className="m-0 mb-5"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    lineHeight: "23.4px",
                    color: V("color-ink"),
                  }}
                >
                  {b.title}
                </h4>
                <p
                  className="m-0"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: V("color-body"),
                  }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — TOTAL REWARDS / BENEFITS
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <SectionHeading
            heading="Total rewards"
            body="We invest in Kreatures at every stage. Our rewards are designed to support your whole self — at work and beyond."
            center
          />

          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {BENEFITS_ITEMS.map((b) => (
              <div
                key={b.title}
                className="rounded-xl p-7 flex flex-col"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="mb-3"
                  style={{ color: V("color-accent-blue") }}
                >
                  <CheckIcon />
                </div>
                <h4
                  className="m-0 mb-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "23.4px",
                    color: V("color-ink"),
                  }}
                >
                  {b.title}
                </h4>
                <p
                  className="m-0"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: V("color-body"),
                  }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: accordion */}
          <div className="md:hidden mt-12 rounded-xl overflow-hidden" style={{ border: `1px solid ${V("color-hairline")}` }}>
            <div style={{ background: V("color-canvas") }}>
              {BENEFITS_ITEMS.map((b, i) => (
                <AccordionItem key={b.title} title={b.title} defaultOpen={i === 0}>
                  {b.body}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — DIVERSITY, EQUITY & INCLUSION
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                heading="Diversity, Equity, and Inclusion"
                body="Kreature exists so anyone can bring ideas to life on the web. Diverse perspectives drive our innovation. The web is for everyone, and so is the team building it."
              />
              <div className="mt-8">
                <PillLink href="/company/diversity-equity-inclusion">
                  Explore DEI at Kreature
                </PillLink>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {AFFINITY_GROUPS.map((g) => (
                <a
                  key={g.name}
                  href={g.href}
                  className="rounded-xl p-4 no-underline transition-all duration-200 flex flex-col items-center justify-center text-center gap-2"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                    minHeight: "100px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = g.color;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `var(--color-hairline)`;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ background: g.color }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      lineHeight: "16.9px",
                      color: V("color-ink"),
                    }}
                  >
                    {g.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 — REMOTE, TOGETHER
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <SectionHeading
            heading="Remote, together"
            center
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* We're remote-first */}
            <div
              className="rounded-2xl p-10 md:p-14 flex flex-col"
              style={{
                background: V("color-canvas"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `color-mix(in srgb, ${V("color-accent-blue")} 10%, transparent)`,
                  color: V("color-accent-blue"),
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3
                className="m-0 mb-4"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "31.2px",
                  color: V("color-ink"),
                }}
              >
                We&apos;re remote-first
              </h3>
              <p
                className="m-0"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25.6px",
                  color: V("color-body"),
                }}
              >
                Kreature is remote-first with flexible location and relocation
                options. Work from anywhere — we&apos;ll never issue a
                return-to-office mandate. We optimize for async communication
                and give you the autonomy to structure your day around what
                matters most.
              </p>
            </div>

            {/* But not remote-only */}
            <div
              className="rounded-2xl p-10 md:p-14 flex flex-col"
              style={{
                background: V("color-canvas"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)`,
                  color: V("color-accent-purple"),
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3
                className="m-0 mb-4"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "31.2px",
                  color: V("color-ink"),
                }}
              >
                But not remote-only
              </h3>
              <p
                className="m-0"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25.6px",
                  color: V("color-body"),
                }}
              >
                We believe in the power of in-person connection too. Our global
                mobility policy supports flexibility while offering in-person
                opportunities at our San Francisco office and paid offsites
                with your team, your department, and the whole company
                throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10 — PAY ZONES
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <SectionHeading
            heading="Pay zones"
            body="We're transparent about how compensation works across regions.
            Salary ranges are based on your location relative to major metro areas."
            center
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* US */}
            <div
              className="rounded-xl p-8"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <h3
                className="m-0 mb-6 pb-4"
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "26px",
                  color: V("color-ink"),
                  borderBottom: `1px solid ${V("color-hairline")}`,
                }}
              >
                {PAY_ZONES.us.title}
              </h3>
              {PAY_ZONES.us.zones.map((z) => (
                <div key={z.name} className="mb-5 last:mb-0">
                  <span
                    className="inline-block mb-1.5 text-xs font-bold uppercase tracking-wider"
                    style={{ color: V("color-accent-blue") }}
                  >
                    {z.name}
                  </span>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      color: V("color-body"),
                    }}
                  >
                    {z.cities}
                  </p>
                </div>
              ))}
              <p
                className="mt-5 pt-4 m-0"
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  color: V("color-mute"),
                  borderTop: `1px solid ${V("color-hairline")}`,
                }}
              >
                {PAY_ZONES.us.note}
              </p>
            </div>

            {/* UK */}
            <div
              className="rounded-xl p-8"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <h3
                className="m-0 mb-6 pb-4"
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "26px",
                  color: V("color-ink"),
                  borderBottom: `1px solid ${V("color-hairline")}`,
                }}
              >
                {PAY_ZONES.uk.title}
              </h3>
              {PAY_ZONES.uk.zones.map((z) => (
                <div key={z.name} className="mb-5 last:mb-0">
                  <span
                    className="inline-block mb-1.5 text-xs font-bold uppercase tracking-wider"
                    style={{ color: V("color-accent-blue") }}
                  >
                    {z.name}
                  </span>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      color: V("color-body"),
                    }}
                  >
                    {z.cities}
                  </p>
                </div>
              ))}
              <p
                className="mt-5 pt-4 m-0"
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  color: V("color-mute"),
                  borderTop: `1px solid ${V("color-hairline")}`,
                }}
              >
                {PAY_ZONES.uk.note}
              </p>
            </div>

            {/* Canada */}
            <div
              className="rounded-xl p-8"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <h3
                className="m-0 mb-6 pb-4"
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "26px",
                  color: V("color-ink"),
                  borderBottom: `1px solid ${V("color-hairline")}`,
                }}
              >
                {PAY_ZONES.ca.title}
              </h3>
              {PAY_ZONES.ca.zones.map((z) => (
                <div key={z.name} className="mb-5 last:mb-0">
                  <span
                    className="inline-block mb-1.5 text-xs font-bold uppercase tracking-wider"
                    style={{ color: V("color-accent-blue") }}
                  >
                    {z.name}
                  </span>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      color: V("color-body"),
                    }}
                  >
                    {z.cities}
                  </p>
                </div>
              ))}
              <p
                className="mt-5 pt-4 m-0"
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  color: V("color-mute"),
                  borderTop: `1px solid ${V("color-hairline")}`,
                }}
              >
                {PAY_ZONES.ca.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 11 — RECENT RECOGNITION
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <SectionHeading
            heading="Recent recognition"
            body="We're honored to be recognized for the culture we've built
            together."
            center
          />

          <div className="mt-16 overflow-hidden rounded-xl" style={{ border: `1px solid ${V("color-hairline")}` }}>
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5"
                style={{
                  background: i % 2 === 0 ? V("color-canvas") : V("color-canvas-soft"),
                  borderBottom: i < AWARDS.length - 1 ? `1px solid ${V("color-hairline")}` : "none",
                }}
              >
                <span
                  className="shrink-0 text-xs font-bold uppercase tracking-wider"
                  style={{ color: V("color-accent-blue") }}
                >
                  {award.year}
                </span>
                <span
                  className="shrink-0 text-sm font-semibold"
                  style={{ color: V("color-body-mid") }}
                >
                  {award.source}
                </span>
                <span
                  className="text-sm flex-1"
                  style={{ color: V("color-ink"), fontWeight: 500 }}
                >
                  {award.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12 — CLOSING CTA "WE'D LOVE TO HAVE YOU"
          ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: V("color-canvas"),
        }}
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-blue")} 6%, transparent)`,
            }}
          />
        </div>

        <div
          className="relative z-10 mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <div className="max-w-[720px] mx-auto text-center">
            <h2
              className="m-0 mb-6 tracking-tight"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.36px",
                color: V("color-ink"),
              }}
            >
              We&apos;d love to have you
            </h2>
            <p
              className="m-0 mb-10 mx-auto"
              style={{
                fontSize: "clamp(18px, 1.6vw, 20px)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: V("color-body"),
                maxWidth: "600px",
              }}
            >
              Aligned with our mission and excited about the possibilities?
              Explore our open roles to see where your superpowers can shine.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/company/careers/roles"
                className="inline-flex items-center text-sm font-medium rounded no-underline transition-all duration-200"
                style={{
                  background: V("color-accent-blue"),
                  color: "#ffffff",
                  padding: "16px 28px",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "19.2px",
                  borderRadius: "4px",
                }}
              >
                Explore open roles
                <Arrow />
              </a>
              <a
                href="/company/about"
                className="inline-flex items-center text-sm font-medium rounded no-underline transition-all duration-200"
                style={{
                  background: "transparent",
                  color: V("color-ink"),
                  padding: "16px 28px",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "19.2px",
                  borderRadius: "4px",
                  border: `1px solid ${V("color-hairline")}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `var(--color-ink)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `var(--color-hairline)`;
                }}
              >
                Learn about us
              </a>
            </div>
          </div>

          {/* Community image grid below CTA */}
          <div className="grid grid-cols-5 gap-4 mt-20">
            <GradientImagePlaceholder
              gradient="linear-gradient(135deg, #146ef5 0%, #006acc 100%)"
              aspectRatio="3/4"
            />
            <GradientImagePlaceholder
              gradient="linear-gradient(135deg, #7a3dff 0%, #ed52cb 100%)"
              aspectRatio="3/4"
            />
            <GradientImagePlaceholder
              gradient="linear-gradient(135deg, #ff6b00 0%, #ffae13 100%)"
              aspectRatio="3/4"
            />
            <GradientImagePlaceholder
              gradient="linear-gradient(135deg, #00d722 0%, #146ef5 100%)"
              aspectRatio="3/4"
            />
            <GradientImagePlaceholder
              gradient="linear-gradient(135deg, #ed52cb 0%, #7a3dff 100%)"
              aspectRatio="3/4"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
