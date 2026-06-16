"use client";

import { useState } from "react";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── STYLES ─── */
const S = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  bodyLg: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  eyebrow: { fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  navLink: { fontSize: "14px", fontWeight: 500 } as React.CSSProperties,
};

/* ─── DATA ─── */
const ACCESSIBILITY_FEATURES = [
  {
    title: "Keyboard Navigation",
    description:
      "Every interactive element, navigation menu, form control, and modal dialog is fully operable using only the keyboard. We maintain logical focus order and visible focus indicators so you always know where you are on the page.",
    icon: "⌨",
  },
  {
    title: "Screen Reader Support",
    description:
      "We provide ARIA labels, roles, and live regions throughout the Kreature platform. Our components follow established patterns from the WAI-ARIA Authoring Practices so assistive technology can interpret and convey content accurately.",
    icon: "🎧",
  },
  {
    title: "Color Contrast Compliance",
    description:
      "All text, icons, and interactive elements meet or exceed WCAG 2.1 AA contrast ratios. We use a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Our design system enforces compliant color pairs by default.",
    icon: "🎨",
  },
  {
    title: "WCAG 2.1 AA Target",
    description:
      "Kreature is designed and tested against Web Content Accessibility Guidelines 2.1 Level AA. We conduct regular audits using automated tools and manual testing with assistive technologies to maintain compliance across all releases.",
    icon: "✓",
  },
  {
    title: "Semantic HTML",
    description:
      "We use proper HTML landmarks, heading hierarchies, and semantic elements so that the document structure is meaningful and navigable. Our components render clean, standards-compliant markup that assistive technology understands natively.",
    icon: "🏗",
  },
  {
    title: "ARIA Labels & Descriptions",
    description:
      "Custom interactive components include descriptive ARIA attributes like aria-label, aria-describedby, and aria-expanded. We annotate complex widgets so screen readers can announce their state, role, and behavior clearly.",
    icon: "🏷",
  },
];

const WCAG_CRITERIA = [
  { principle: "Perceivable", items: ["Text alternatives for non-text content", "Captions and transcripts for multimedia", "Content adaptable without losing meaning", "Sufficient color contrast for readability"] },
  { principle: "Operable", items: ["All functionality available from keyboard", "Users have enough time to read and use content", "No content that causes seizures or physical reactions", "Clear navigation and ways to find content"] },
  { principle: "Understandable", items: ["Text is readable and understandable", "Content appears and operates in predictable ways", "Input assistance helps users avoid and correct mistakes"] },
  { principle: "Robust", items: ["Content compatible with current and future user tools", "Clean, standards-compliant HTML and ARIA markup", "Tested across browsers, devices, and assistive technologies"] },
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

/* ─── SHARED COMPONENTS ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Section({
  bg,
  children,
  className,
}: {
  bg?: "soft" | "dark";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)] ${className || ""}`}
      style={{
        background:
          bg === "soft"
            ? V("color-canvas-soft")
            : bg === "dark"
            ? V("color-ink")
            : V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

export default function AccessibilityPage() {
  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-ink") }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(59,137,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
              transform: "translate(30%, -30%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[800px]">
              <p
                className="mb-4"
                style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
              >
                Accessibility
              </p>
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Accessibility at Kreature
              </h1>
              <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                We&apos;re committed to making web building accessible to everyone. Our platform is designed
                and built so that creators of all abilities can design, publish, and manage digital
                experiences without barriers.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════ OUR COMMITMENT ═══════ */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-semibold leading-[1.04] mb-6" style={{ ...S.h2, color: V("color-ink") }}>
                Our commitment
              </h2>
              <div className="space-y-4" style={{ ...S.bodyLg, color: V("color-body") }}>
                <p>
                  Kreature is for everyone. We believe the web is fundamentally designed to work for all
                  people, regardless of their hardware, software, language, location, or ability. When the
                  web meets this goal, it is accessible to people with a diverse range of hearing,
                  movement, sight, and cognitive ability.
                </p>
                <p>
                  Accessibility is not an afterthought or a checklist item — it is a core design
                  principle that shapes every component we build, every pattern we document, and every
                  feature we ship. We integrate accessibility into our design, development, and quality
                  assurance processes from the very start.
                </p>
                <p>
                  We follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as our
                  baseline standard and continuously work toward exceeding these requirements across
                  the Kreature platform.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl p-[clamp(2rem,4vw,3rem)]"
              style={{ background: V("color-canvas-soft"), border: `1px solid ${V("color-hairline")}` }}
            >
              <h3 className="font-semibold mb-6" style={{ ...S.h3, color: V("color-ink") }}>
                Accessibility features
              </h3>
              <div className="space-y-5">
                {ACCESSIBILITY_FEATURES.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                      style={{ background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ ...S.h4, color: V("color-ink") }}>
                        {feature.title}
                      </h4>
                      <p style={{ ...S.bodySm, color: V("color-body-mid") }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ═══════ WCAG CONFORMANCE ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Conformance status
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              WCAG 2.1 Level AA
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              The Kreature platform is partially conformant with WCAG 2.1 Level AA. We are actively
              working toward full conformance through ongoing audits, remediation, and feature
              development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {WCAG_CRITERIA.map((group) => (
              <div
                key={group.principle}
                className="rounded-xl p-[clamp(1.5rem,3vw,2rem)]"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <h3 className="font-semibold mb-4" style={{ ...S.h4, color: V("color-ink") }}>
                  {group.principle}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{ ...S.bodySm, color: V("color-body-mid") }}
                    >
                      <span className="mt-1 shrink-0" style={{ color: V("color-accent-green") }}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ ONGOING EFFORTS ═══════ */}
        <Section>
          <div className="max-w-[800px]">
            <h2 className="font-semibold leading-[1.04] mb-6" style={{ ...S.h2, color: V("color-ink") }}>
              Ongoing efforts
            </h2>
            <div className="space-y-4" style={{ ...S.bodyLg, color: V("color-body") }}>
              <p>
                We integrate accessibility into every stage of our product development lifecycle:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  { title: "Design", desc: "Accessibility annotations in Figma, color contrast checks, and keyboard interaction specs before a single line of code is written." },
                  { title: "Development", desc: "Automated linting rules, component-level accessibility tests, and peer code reviews that include accessibility criteria." },
                  { title: "Testing", desc: "Automated audits with axe-core, manual screen reader testing with VoiceOver and NVDA, and keyboard-only walkthroughs of every feature." },
                  { title: "Monitoring", desc: "Continuous accessibility monitoring in our CI pipeline. We track conformance scores and regressions across every release." },
                ].map((effort) => (
                  <div
                    key={effort.title}
                    className="rounded-lg p-5"
                    style={{ background: V("color-canvas-soft"), border: `1px solid ${V("color-hairline")}` }}
                  >
                    <h4 className="font-semibold mb-2" style={{ ...S.h4, color: V("color-ink") }}>
                      {effort.title}
                    </h4>
                    <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{effort.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ═══════ CONTACT ═══════ */}
        <Section bg="soft">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Feedback & support
            </h2>
            <p className="mb-8" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              We welcome your feedback on the accessibility of Kreature. If you encounter any
              barriers or have suggestions for improvement, please let us know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:accessibility@kreature.com"
                className="inline-flex items-center transition-colors"
                style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
              >
                Email accessibility team <Arrow />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center transition-colors"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                Contact support
              </a>
            </div>
            <p className="mt-6" style={{ ...S.bodySm, color: V("color-mute") }}>
              We aim to respond to accessibility inquiries within 2 business days.
            </p>
          </div>
        </Section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        className="py-16 px-5 sm:px-8"
        style={{ borderTop: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(FOOTER).map(([heading, items]) => (
              <div key={heading}>
                <h4
                  className="font-semibold mb-6"
                  style={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px", color: V("color-ink") }}
                >
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item: string) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm hover:underline inline-flex items-center gap-1"
                        style={{ ...S.bodySm, color: V("color-body-mid") }}
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
                            We&apos;re hiring
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}
          >
            <p style={{ fontSize: "12px", color: V("color-mute") }}>
              &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: "12px", color: V("color-mute") }}>
              <a href="#" className="hover:underline">
                Made in Kreature
              </a>
              {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map((p) => (
                <a key={p} href="#" className="hover:underline">
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
