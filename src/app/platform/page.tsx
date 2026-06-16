"use client";

import { useState } from "react";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY (extracted from webflow.com at 1440px) ─── */
const T = {
  h1: {
    fontSize: "80px",
    fontWeight: 600,
    lineHeight: "83.2px",
    letterSpacing: "-0.8px",
  } as React.CSSProperties,
  h2: {
    fontSize: "56px",
    fontWeight: 600,
    lineHeight: "58.24px",
  } as React.CSSProperties,
  h3: {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "41.6px",
  } as React.CSSProperties,
  eyebrow: {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "28px",
    color: V("color-mute"),
  } as React.CSSProperties,
  body: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "25.6px",
  } as React.CSSProperties,
  bodySm: {
    fontSize: "14px",
    lineHeight: "22.4px",
  } as React.CSSProperties,
  btn: {
    fontSize: "16px",
    fontWeight: 500,
    padding: "16px 24px",
    borderRadius: "4px",
  } as React.CSSProperties,
};

/* ─── PLATFORM FEATURE COLUMNS ─── */
type FeatureItem = { name: string; href: string; badge?: string };

const PLATFORM_COLUMNS: { label: string; items: FeatureItem[] }[] = [
  {
    label: "Build",
    items: [
      { name: "Design", href: "/design" },
      { name: "Edit content", href: "/edit-content" },
      { name: "Interactions", href: "/interactions" },
      { name: "Collaboration", href: "/collaboration" },
      { name: "Page building", href: "/page-building" },
      { name: "GSAP", href: "/gsap" },
    ],
  },
  {
    label: "Manage",
    items: [
      { name: "CMS", href: "/cms" },
      { name: "Hosting", href: "/hosting" },
      { name: "Localization", href: "/localization" },
      { name: "Security", href: "/security" },
      { name: "Shared Libraries", href: "/shared-libraries" },
    ],
  },
  {
    label: "Optimize",
    items: [
      { name: "Analyze", href: "/analyze" },
      { name: "Optimize", href: "/optimize" },
      { name: "SEO", href: "/seo" },
      { name: "AEO", href: "/feature/aeo", badge: "NEW" },
    ],
  },
  {
    label: "Extend",
    items: [
      { name: "Apps", href: "/apps" },
      { name: "Figma to Webflow", href: "/figma-to-webflow" },
      { name: "Webflow Cloud", href: "/webflow-cloud" },
      { name: "DevLink", href: "/devlink" },
    ],
  },
];

/* ─── SOLUTIONS DATA ─── */
type Role = "Marketer" | "Designer" | "Developer" | "Agency";

const SOLUTIONS_DATA: Record<
  Role,
  { label: string; desc: string; items: string[] }[]
> = {
  Marketer: [
    {
      label: "Agility",
      desc: "Launch campaigns and pages without waiting for developer resources.",
      items: [
        "Build and launch web experiences without filing a ticket",
        "Manage content in a visual, composable CMS",
        "Empower every marketer with templates and page building",
        "Generate production-ready apps and reusable components",
        "Cut production time with help from Kreature's AI assistant",
      ],
    },
    {
      label: "Impact",
      desc: "Turn every page into a revenue driver with native analytics and AI-powered optimization.",
      items: [
        "Understand what's working with native analytics",
        "Optimize for conversion with AI-powered personalization",
        "Reach a global audience with AI-powered localization",
        "Drive traffic from traditional search and LLMs with built-in tools for SEO and AEO",
      ],
    },
    {
      label: "Scale",
      desc: "Give everyone on the team room to build, with guardrails that keep things on brand.",
      items: [
        "Collaborate in a shared workspace with marketing, design, dev, and AI agents",
        "Manage changes with comments, approvals, version control, and rollback",
        "Stay on-brand with design systems and shared libraries",
      ],
    },
  ],
  Designer: [
    {
      label: "Creative freedom",
      desc: "Build exactly what you imagine, without compromises or workarounds.",
      items: [
        "Build with pixel-perfect precision",
        "Create rich interactions and animations powered by GSAP",
        "Own your content structure in a visual, composable CMS",
        "Design in Figma, build in Kreature, extend with React",
        "Focus on craft while AI handles the repetitive work",
        "Generate production-ready apps from your designs",
      ],
    },
    {
      label: "Consistency",
      desc: "Scale your creative vision across every page, every launch, and every team.",
      items: [
        "Stay on brand with design systems and shared libraries",
        "Set access levels that protect the work without slowing the team",
        "Manage edits with branching, staging, approvals, and publishing workflows",
      ],
    },
    {
      label: "Impact",
      desc: "Test, iterate, and make informed creative decisions that drive performance.",
      items: [
        "Understand what works with native analytics",
        "Optimize for conversion with AI-powered personalization",
        "Reach a global audience with AI-powered localization",
      ],
    },
  ],
  Developer: [
    {
      label: "Efficiency",
      desc: "Spend more time building software that matters and less time on marketing tickets.",
      items: [
        "Build visually with the power of HTML, JS, and CSS",
        "Hand over content management to the teams that own it",
        "Generate production-ready apps and reusable components",
        "Extend the UI with custom code components",
        "Control releases with branching, staging, approvals, and publishing workflows",
      ],
    },
    {
      label: "Integration",
      desc: "Build on a flexible platform your organization won't outgrow.",
      items: [
        "Save time tool-switching: Replace your Frankenstack with one platform",
        "Sync with Figma and import or export from React",
        "Deploy web apps alongside your site with Kreature Cloud",
        "Integrate anything with custom code and MACH-certified APIs",
      ],
    },
    {
      label: "Scale",
      desc: "Secure, reliable, enterprise-grade hosting means there's nothing to slow you down.",
      items: [
        "Grow uninterrupted with 99.99% uptime, a global CDN, and edge routing",
        "Stay safe with 24/7 managed security, audit logs, and site backups",
        "Save time with zero-maintenance hosting, security, and platform updates",
      ],
    },
  ],
  Agency: [
    {
      label: "Creative control",
      desc: "Launch high-performing, distinctive client sites fast, without compromise.",
      items: [
        "Create fully custom web experiences that integrate with your clients' tech stack",
        "Create scroll-stopping interactions and animations",
        "Give clients a CMS they can actually use",
        "Generate production-ready web apps and reusable components",
        "Help clients stay on brand with design systems and shared libraries",
      ],
    },
    {
      label: "Client management",
      desc: "Streamline client management and handoffs.",
      items: [
        "See every engagement at a glance",
        "Delegate billing to clients directly from Kreature",
        "Hand off client projects without downtime",
        "Collaborate flexibly and securely with clients on your terms",
      ],
    },
    {
      label: "Impact",
      desc: "Turn every project into a long-term engagement.",
      items: [
        "Add high-margin services without adding tools",
        "Prove ROI with native analytics to keep your clients coming back",
        "Deliver enterprise-grade hosting without owning the infrastructure",
      ],
    },
  ],
};

/* ─── FOOTER DATA ─── */
const FOOTER_DATA: Record<string, string[]> = {
  Product: [
    "Platform",
    "Design",
    "Edit content",
    "Interactions",
    "GSAP",
    "Page building",
    "Shared Libraries",
    "Collaboration",
    "CMS",
    "Hosting",
    "Localization",
    "Security",
    "Ecommerce",
    "Analyze",
    "Optimize",
    "SEO",
    "AEO",
    "Kreature Cloud",
    "DevLink",
    "Figma to Kreature",
    "Accessibility",
    "AI",
  ],
  Solutions: [
    "Enterprise",
    "Startups",
    "Global alliances",
    "Agencies",
    "Freelancers",
  ],
  Resources: [
    "University",
    "Blog",
    "Customer stories",
    "Webinars & ebooks",
    "Apps",
    "Libraries",
    "Templates",
    "Developers",
    "Made in Kreature",
    "Glossary",
    "Livestreams",
    "The Kreature Way",
  ],
  Company: [
    "About",
    "Careers",
    "Press",
    "Kreature Ventures",
    "Kreature Shop",
    "Terms of Service",
    "Privacy policy",
    "Cookie policy",
    "Accessibility statement",
  ],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: [
    "Discover the community",
    "Partner with Kreature",
    "Certified Partners",
    "Become a template designer",
    "Become an affiliate",
    "Become a Global Leader",
    "Find a meetup near you",
  ],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ─── HELPERS ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

function CTAButton({
  href,
  children,
  blue,
  white,
}: {
  href: string;
  children: React.ReactNode;
  blue?: boolean;
  white?: boolean;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-sm transition-colors"
      style={{
        ...T.btn,
        background: blue
          ? V("color-accent-blue")
          : "transparent",
        color: blue || white ? "#fff" : V("color-ink"),
        border: blue
          ? "none"
          : white
          ? "1px solid rgba(255,255,255,0.2)"
          : `1px solid ${V("color-hairline")}`,
      }}
    >
      {children}
    </a>
  );
}

/* ─── COMPONENTS ─── */

function Hero() {
  return (
    <section
      className="px-5 sm:px-8 pt-[clamp(3rem,6vw,6rem)] pb-[clamp(3rem,8vw,9rem)]"
      style={{ background: "rgb(8,8,8)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* H1 */}
        <h1
          className="font-semibold leading-[1.04] mb-6"
          style={{ ...T.h1, color: "#fff" }}
        >
          Make creativity your competitive edge
        </h1>
        <p
          className="max-w-[650px] mb-16"
          style={{ fontSize: "20px", lineHeight: 1.5, color: V("color-mute") }}
        >
          Kreature is the agentic web marketing platform that gives teams the
          power to build, manage, optimize, and extend their websites &mdash; all
          in one visual canvas.
        </p>

        {/* Feature column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLATFORM_COLUMNS.map((col) => (
            <div key={col.label}>
              <h4
                className="mb-6 pb-4"
                style={{
                  ...T.eyebrow,
                  color: V("color-mute"),
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {col.label}
              </h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm hover:opacity-70 transition-opacity"
                      style={{ color: "#fff", fontWeight: 400 }}
                    >
                      {item.name}
                      {item.badge && (
                        <span
                          className="text-[0.6rem] font-semibold uppercase px-1.5 py-0.5 rounded-sm"
                          style={{
                            background: V("color-accent-blue"),
                            color: "#fff",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const [role, setRole] = useState<Role>("Marketer");

  const roleLabels: Record<Role, string> = {
    Marketer: "Marketer",
    Designer: "Designer",
    Developer: "Developer",
    Agency: "Agency",
  };

  return (
    <section
      className="px-5 sm:px-8 py-[clamp(3rem,8vw,9rem)]"
      style={{ background: V("color-canvas") }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section heading */}
        <h2
          className="font-semibold leading-[1.04] mb-6"
          style={{ ...T.h2, color: V("color-ink") }}
        >
          I&rsquo;m a{" "}
          <span style={{ color: V("color-accent-blue") }}>{role}</span>.
        </h2>
        <p
          className="max-w-[650px] mb-12"
          style={{ ...T.body, color: V("color-body-mid") }}
        >
          Every role has different needs. Kreature brings everyone together on
          one platform, with purpose-built tools for each.
        </p>

        {/* Tab switcher */}
        <div
          className="flex items-center gap-1 mb-12 border-b pb-1 overflow-x-auto"
          style={{ borderColor: V("color-hairline") }}
        >
          {(Object.keys(roleLabels) as Role[]).map((k) => (
            <button
              key={k}
              onClick={() => setRole(k)}
              className="px-5 py-3 text-sm font-medium rounded-sm transition-colors whitespace-nowrap"
              style={{
                ...T.bodySm,
                fontWeight: 500,
                background:
                  role === k ? V("color-canvas-soft") : "transparent",
                color: V("color-ink"),
                border:
                  role === k
                    ? `1px solid ${V("color-hairline")}`
                    : "1px solid transparent",
                borderBottom:
                  role === k
                    ? `2px solid ${V("color-ink")}`
                    : "2px solid transparent",
                borderRadius: "4px",
              }}
            >
              {roleLabels[k]}
            </button>
          ))}
        </div>

        {/* Role columns */}
        <div className="grid md:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)]">
          {SOLUTIONS_DATA[role].map((col) => (
            <div key={col.label}>
              <div
                className="text-sm font-medium uppercase tracking-wider mb-4"
                style={{ ...T.bodySm, fontWeight: 500, color: V("color-body-mid") }}
              >
                {col.label}
              </div>
              <p className="mb-6" style={{ ...T.body, color: V("color-body") }}>
                {col.desc}
              </p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm hover:underline"
                      style={{ ...T.bodySm, color: V("color-ink") }}
                    >
                      {item}{" "}
                      <span className="ml-1" style={{ color: V("color-mute") }}>
                        &rarr;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="px-5 sm:px-8 py-[clamp(3rem,8vw,9rem)] relative overflow-hidden"
      style={{ background: V("color-accent-blue") }}
    >
      {/* Decorative blur circles */}
      <div
        className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: "#fff", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{ background: "#fff", filter: "blur(60px)" }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10 text-center">
        <h2
          className="font-semibold leading-[1.04] mb-6"
          style={{ ...T.h2, color: "#fff" }}
        >
          Start building for free
        </h2>
        <p
          className="max-w-[600px] mx-auto mb-10"
          style={{ fontSize: "20px", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}
        >
          Join millions of creators building on Kreature. Start free, upgrade
          when you&rsquo;re ready.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/signup" blue>
            Get started &mdash; it&rsquo;s free <Arrow />
          </CTAButton>
          <a
            href="/enterprise/contact-sales"
            className="inline-flex items-center text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: "#fff" }}
          >
            Talk to sales &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-16 px-5 sm:px-8"
      style={{
        borderTop: `1px solid ${V("color-hairline")}`,
        background: V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
          {Object.entries(FOOTER_DATA).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="font-semibold mb-6"
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "28px",
                  color: V("color-ink"),
                }}
              >
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:underline inline-flex items-center gap-1"
                      style={{ ...T.bodySm, color: V("color-body-mid") }}
                    >
                      {item}
                      {item === "AEO" && (
                        <span
                          className="text-[0.6rem] font-semibold uppercase"
                          style={{ color: V("color-accent-blue") }}
                        >
                          New
                        </span>
                      )}
                      {item === "Careers" && (
                        <span
                          className="text-[0.6rem] font-semibold uppercase"
                          style={{ color: V("color-accent-green") }}
                        >
                          We&rsquo;re hiring
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: `1px solid ${V("color-hairline")}` }}
        >
          <p style={{ fontSize: "12px", color: V("color-mute") }}>
            &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
          </p>
          <div
            className="flex items-center gap-4"
            style={{ fontSize: "12px", color: V("color-mute") }}
          >
            <a href="#" className="hover:underline">
              Made in Kreature
            </a>
            {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map(
              (p) => (
                <a key={p} href="#" className="hover:underline">
                  {p}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function PlatformPage() {
  return (
    <div
      className="page-wrapper"
      style={{ background: V("color-canvas"), color: V("color-body") }}
    >
      <main>
        <Hero />
        <SolutionsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
