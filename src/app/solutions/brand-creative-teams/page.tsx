"use client";

import { useState } from "react";

/* ──────────────── Helpers ──────────────── */

const V = (n: string) => `var(--${n})`;

/* ──────────────── Shared Components ──────────────── */

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
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

/* ──────────────── Section Data ──────────────── */

const FEATURES = [
  {
    icon: "🎨",
    title: "Design Systems",
    accent: "color-accent-pink",
    body: "Define tokens, components, and patterns in one source of truth. Changes propagate everywhere they're used. No more chasing down inconsistent buttons across 40 pages.",
  },
  {
    icon: "🛡",
    title: "Brand Controls",
    accent: "color-accent-blue",
    body: "Lock brand colors, fonts, and spacing at the workspace level. Designers explore freely within guardrails. Developers pull approved tokens directly into code.",
  },
  {
    icon: "👥",
    title: "Real-Time Collaboration",
    accent: "color-accent-purple",
    body: "Multiple designers and developers working in the same project simultaneously. See cursors, leave comments, and review changes live -- like Figma for production sites.",
  },
  {
    icon: "✅",
    title: "Approval Workflows",
    accent: "color-accent-green",
    body: "Stage changes, request reviews, and publish with confidence. Custom approval chains, required reviewers, and automatic regression checks before anything goes live.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Design",
    accent: "color-accent-pink",
    body: "Designers work in the visual canvas with full creative freedom. Pull from your existing Figma library. Components stay synced with the design system.",
    details: [
      "Visual drag-and-drop editor",
      "Figma plugin for design import",
      "Component variants and props",
      "Responsive preview across devices",
    ],
  },
  {
    step: "02",
    title: "Review",
    accent: "color-accent-blue",
    body: "Stakeholders review staged changes on shareable preview links. Leave contextual comments. Automated checks flag regressions and accessibility issues.",
    details: [
      "Shareable staging URLs",
      "Threaded comments on elements",
      "Automated visual regression tests",
      "WCAG accessibility scanning",
    ],
  },
  {
    step: "03",
    title: "Publish",
    accent: "color-accent-green",
    body: "Approved changes deploy to the edge in seconds. Roll back any release with one click. Scheduled publishing for campaigns and product launches.",
    details: [
      "One-click global deployment",
      "Instant rollbacks",
      "Scheduled publishing",
      "Multivariate A/B testing",
    ],
  },
];

const SECURITY_FEATURES = [
  {
    title: "SSO & SAML",
    body: "Authenticate with Okta, Azure AD, Google Workspace, or any SAML 2.0 identity provider. Enforce MFA for all team members.",
  },
  {
    title: "Role-Based Access",
    body: "Granular permissions at the workspace, project, and page level. Define custom roles for designers, developers, content editors, and reviewers.",
  },
  {
    title: "Audit Logs",
    body: "Every publish, permission change, and content edit is logged with timestamp, actor, and diff. Export to your SIEM for compliance reporting.",
  },
  {
    title: "SOC 2 Type II",
    body: "Kreature is audited annually. Infrastructure runs on AWS with encryption at rest and in transit. Data residency options for EU and APAC teams.",
  },
  {
    title: "Content Security Policies",
    body: "Automatic CSP headers, subresource integrity, and XSS protection on every deployed site. Security is not optional -- it's built into the platform.",
  },
  {
    title: "DDoS Protection",
    body: "Every site is protected by Cloudflare's global network. Layer 3/4 and Layer 7 protection included. 99.99% uptime SLA for enterprise plans.",
  },
];

const LOGOS = [
  "Acme Corp",
  "Globex Inc",
  "Initech",
  "Umbrella",
  "Stark Industries",
  "Wayne Enterprises",
];

/* ──────────────── Page Component ──────────────── */

export default function BrandCreativeTeamsPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <main>
        {/* ── HERO ── */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 lg:py-36 text-center"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-4xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-5"
              style={{ color: V("color-accent-purple") }}
            >
              For brand & creative teams
            </p>
            <h1
              className="max-w-3xl mx-auto"
              style={{
                fontSize: "clamp(44px, 6vw, 80px)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.8px",
                color: V("color-ink"),
              }}
            >
              Where creativity meets scale
            </h1>
            <p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: V("color-body"),
              }}
            >
              Give your creative team a platform that respects design integrity
              while scaling to hundreds of pages. Design systems, brand
              guardrails, real-time collaboration, and enterprise security --
              all in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-purple"),
                  color: "#fff",
                }}
              >
                Start creating <Arrow />
              </a>
              <a
                href="#workflow"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST LOGOS ── */}
        <section
          className="px-5 sm:px-8 py-10 border-y"
          style={{
            backgroundColor: V("color-canvas-soft"),
            borderColor: V("color-hairline"),
          }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-xs uppercase tracking-wider text-center mb-6"
              style={{ color: V("color-mute") }}
            >
              Trusted by creative teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {LOGOS.map((name) => (
                <span
                  key={name}
                  className="text-sm font-semibold tracking-wide opacity-40"
                  style={{ color: V("color-ink") }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section
          id="features"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-purple") }}
            >
              Core capabilities
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Design at scale, ship with confidence
            </h2>
            <div className="mt-14 grid sm:grid-cols-2 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-8 rounded-xl border transition-colors"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas"),
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5"
                    style={{ backgroundColor: V(f.accent) }}
                  >
                    <span className="text-xl">{f.icon}</span>
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      color: V("color-ink"),
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section
          id="workflow"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-pink") }}
            >
              Workflow
            </p>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Design &rarr; Review &rarr; Publish
            </h2>
            <p
              className="max-w-xl mb-14"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              A streamlined pipeline that keeps your team moving fast without
              sacrificing quality or brand consistency.
            </p>

            {/* Step tabs */}
            <div className="flex gap-3 mb-10">
              {WORKFLOW_STEPS.map((s, i) => (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(i)}
                  className="flex-1 text-left p-5 rounded-lg border transition-colors"
                  style={{
                    borderColor:
                      activeStep === i
                        ? V(s.accent)
                        : V("color-hairline"),
                    backgroundColor:
                      activeStep === i
                        ? V("color-canvas")
                        : "transparent",
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{
                      color:
                        activeStep === i
                          ? V(s.accent)
                          : V("color-mute"),
                    }}
                  >
                    {s.step}
                  </span>
                  <span
                    className="block text-sm font-semibold mt-1"
                    style={{ color: V("color-ink") }}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active step content */}
            <div
              className="p-8 rounded-xl border"
              style={{
                borderColor: V("color-hairline"),
                backgroundColor: V("color-canvas"),
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div
                    className="text-5xl font-bold mb-4"
                    style={{
                      color: V(WORKFLOW_STEPS[activeStep].accent),
                    }}
                  >
                    {WORKFLOW_STEPS[activeStep].step}
                  </div>
                  <h3
                    className="text-2xl font-semibold mb-3"
                    style={{ color: V("color-ink") }}
                  >
                    {WORKFLOW_STEPS[activeStep].title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: V("color-body") }}
                  >
                    {WORKFLOW_STEPS[activeStep].body}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider font-semibold mb-3"
                    style={{ color: V("color-mute") }}
                  >
                    Includes
                  </p>
                  <ul className="space-y-3">
                    {WORKFLOW_STEPS[activeStep].details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: V("color-body") }}
                      >
                        <span
                          className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: V(
                              WORKFLOW_STEPS[activeStep].accent
                            ),
                            color: "#fff",
                          }}
                        >
                          &check;
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECURITY ── */}
        <section
          id="security"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas") }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: V("color-accent-blue") }}
            >
              Enterprise security
            </p>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Security that scales with your brand
            </h2>
            <p
              className="max-w-xl mb-14"
              style={{ color: V("color-body"), lineHeight: 1.7 }}
            >
              Built for organizations that take security seriously. SOC 2
              compliance, SSO, granular permissions, and audit logging out of
              the box.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECURITY_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-xl border"
                  style={{
                    borderColor: V("color-hairline"),
                    backgroundColor: V("color-canvas-soft"),
                  }}
                >
                  <h4
                    className="text-sm font-semibold mb-2"
                    style={{ color: V("color-ink") }}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          id="cta"
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{ backgroundColor: V("color-canvas-soft") }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: V("color-ink"),
              }}
            >
              Start creating
            </h2>
            <p
              className="mb-10 max-w-xl mx-auto"
              style={{ color: V("color-body"), lineHeight: 1.7, fontSize: 18 }}
            >
              Bring your creative team to Kreature and see how design systems,
              real-time collaboration, and enterprise security can transform the
              way you ship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact-sales"
                className="text-base font-medium px-8 py-4 rounded transition-colors inline-flex items-center"
                style={{
                  backgroundColor: V("color-accent-purple"),
                  color: "#fff",
                }}
              >
                Talk to sales <Arrow />
              </a>
              <a
                href="/platform"
                className="text-base font-medium px-8 py-4 rounded transition-colors border inline-flex items-center"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-ink"),
                }}
              >
                Explore the platform
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════ FOOTER ════════════════ */}
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
                        className="text-xs transition-colors"
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
    </>
  );
}
