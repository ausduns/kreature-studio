"use client";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Data ─── */
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
  {
    principle: "Perceivable",
    items: [
      "Text alternatives for non-text content",
      "Captions and transcripts for multimedia",
      "Content adaptable without losing meaning",
      "Sufficient color contrast for readability",
    ],
  },
  {
    principle: "Operable",
    items: [
      "All functionality available from keyboard",
      "Users have enough time to read and use content",
      "No content that causes seizures or physical reactions",
      "Clear navigation and ways to find content",
    ],
  },
  {
    principle: "Understandable",
    items: [
      "Text is readable and understandable",
      "Content appears and operates in predictable ways",
      "Input assistance helps users avoid and correct mistakes",
    ],
  },
  {
    principle: "Robust",
    items: [
      "Content compatible with current and future user tools",
      "Clean, standards-compliant HTML and ARIA markup",
      "Tested across browsers, devices, and assistive technologies",
    ],
  },
];

const FOOTER_COLS = [
  {
    heading: "Product",
    links: [
      { label: "Overview", href: "/webflow-clone" },
      { label: "Designer", href: "#" },
      { label: "CMS", href: "#" },
      { label: "Hosting", href: "#" },
      { label: "AI Features", href: "#" },
    ],
  },
  {
    heading: "Ecosystem",
    links: [
      { label: "Apps", href: "/apps" },
      { label: "Libraries", href: "/libraries" },
      { label: "Templates", href: "/templates" },
      { label: "Integrations", href: "/integrations" },
      { label: "Showcase", href: "/made-in-webflow" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Marketing Teams", href: "#" },
      { label: "Agencies", href: "#" },
      { label: "Startups", href: "#" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Freelancers", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Community", href: "/community" },
      { label: "Documentation", href: "#" },
      { label: "Webflow Way", href: "/webflow-way" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact-sales" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs WordPress", href: "#" },
      { label: "vs Framer", href: "#" },
      { label: "vs Wix", href: "#" },
      { label: "vs Squarespace", href: "#" },
      { label: "vs Bubble", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Discord", href: "https://discord.com" },
    ],
  },
];

/* ─── Shared Components ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}
    >
      <div
        className="mx-auto px-5 sm:px-8 py-14 sm:py-16"
        style={{ maxWidth: "1440px" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
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
              <span
                className="font-heading font-[800] text-xl tracking-tight"
                style={{ color: V("color-ink") }}
              >
                Kreature
                <span style={{ color: V("color-accent-blue") }}>.</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: V("color-mute") }}
            >
              Making web building accessible to everyone. Our platform is
              designed so creators of all abilities can build without barriers.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div
                className="text-xs uppercase tracking-wider mb-4"
                style={{ color: V("color-mute-soft"), fontWeight: 550 }}
              >
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: V("color-body-mid") }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = V("color-ink"))
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = V("color-body-mid"))
                      }
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
          <p className="text-xs" style={{ color: V("color-mute") }}>
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
  );
}

/* ─── Page ─── */
export default function AccessibilityPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "120px",
          background: V("color-ink"),
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,137,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25"
          style={{
            background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
            transform: "translate(30%, -30%)",
          }}
        />

        <div
          className="relative z-10 mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <div style={{ maxWidth: "800px" }}>
            <p
              className="mb-4"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: V("color-accent-blue"),
              }}
            >
              Accessibility
            </p>
            <h1
              className="font-heading tracking-tight mb-6"
              style={{
                fontSize: "80px",
                fontWeight: 600,
                lineHeight: "83.2px",
                letterSpacing: "-0.8px",
                color: V("color-canvas"),
              }}
            >
              Accessibility at Kreature
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-mute-soft"),
                maxWidth: "650px",
              }}
            >
              We&apos;re committed to making web building accessible to everyone.
              Our platform is designed and built so that creators of all
              abilities can design, publish, and manage digital experiences
              without barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment + Features */}
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="font-heading tracking-tight mb-6"
                style={{
                  fontSize: "48px",
                  fontWeight: 600,
                  lineHeight: "52px",
                  color: V("color-ink"),
                }}
              >
                Our commitment
              </h2>
              <div
                className="space-y-4"
                style={{
                  fontSize: "18px",
                  lineHeight: 1.5,
                  color: V("color-body"),
                }}
              >
                <p>
                  Kreature is for everyone. We believe the web is fundamentally
                  designed to work for all people, regardless of their hardware,
                  software, language, location, or ability. When the web meets
                  this goal, it is accessible to people with a diverse range of
                  hearing, movement, sight, and cognitive ability.
                </p>
                <p>
                  Accessibility is not an afterthought or a checklist item — it
                  is a core design principle that shapes every component we
                  build, every pattern we document, and every feature we ship.
                  We integrate accessibility into our design, development, and
                  quality assurance processes from the very start.
                </p>
                <p>
                  We follow the Web Content Accessibility Guidelines (WCAG) 2.1
                  Level AA as our baseline standard and continuously work toward
                  exceeding these requirements across the Kreature platform.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl p-10"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <h3
                className="font-heading mb-6"
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  lineHeight: "36px",
                  color: V("color-ink"),
                }}
              >
                Accessibility features
              </h3>
              <div className="space-y-5">
                {ACCESSIBILITY_FEATURES.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                      style={{
                        background: V("color-canvas"),
                        border: `1px solid ${V("color-hairline")}`,
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4
                        className="font-heading mb-1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                          color: V("color-ink"),
                        }}
                      >
                        {feature.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "22.4px",
                          color: V("color-body-mid"),
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WCAG Conformance */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <div className="mb-14">
            <p
              className="mb-4"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: V("color-accent-blue"),
              }}
            >
              Conformance status
            </p>
            <h2
              className="font-heading tracking-tight mb-4"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "52px",
                color: V("color-ink"),
              }}
            >
              WCAG 2.1 Level AA
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                color: V("color-body-mid"),
                maxWidth: "650px",
              }}
            >
              The Kreature platform is partially conformant with WCAG 2.1 Level
              AA. We are actively working toward full conformance through ongoing
              audits, remediation, and feature development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {WCAG_CRITERIA.map((group) => (
              <div
                key={group.principle}
                className="rounded-xl p-8"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <h3
                  className="font-heading mb-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {group.principle}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{
                        fontSize: "14px",
                        lineHeight: "22.4px",
                        color: V("color-body-mid"),
                      }}
                    >
                      <span
                        className="mt-1 shrink-0"
                        style={{ color: V("color-accent-green") }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Efforts */}
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
          <div style={{ maxWidth: "800px" }}>
            <h2
              className="font-heading tracking-tight mb-6"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "52px",
                color: V("color-ink"),
              }}
            >
              Ongoing efforts
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                color: V("color-body"),
              }}
            >
              We integrate accessibility into every stage of our product
              development lifecycle:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Design",
                  desc: "Accessibility annotations in Figma, color contrast checks, and keyboard interaction specs before a single line of code is written.",
                },
                {
                  title: "Development",
                  desc: "Automated linting rules, component-level accessibility tests, and peer code reviews that include accessibility criteria.",
                },
                {
                  title: "Testing",
                  desc: "Automated audits with axe-core, manual screen reader testing with VoiceOver and NVDA, and keyboard-only walkthroughs of every feature.",
                },
                {
                  title: "Monitoring",
                  desc: "Continuous accessibility monitoring in our CI pipeline. We track conformance scores and regressions across every release.",
                },
              ].map((effort) => (
                <div
                  key={effort.title}
                  className="rounded-lg p-5"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <h4
                    className="font-heading mb-2"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      color: V("color-ink"),
                    }}
                  >
                    {effort.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "22.4px",
                      color: V("color-body-mid"),
                    }}
                  >
                    {effort.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback & Support */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "700px" }}
        >
          <h2
            className="font-heading tracking-tight mb-4"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "52px",
              color: V("color-ink"),
            }}
          >
            Feedback & support
          </h2>
          <p
            className="mb-8"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: V("color-body-mid"),
            }}
          >
            We welcome your feedback on the accessibility of Kreature. If you
            encounter any barriers or have suggestions for improvement, please
            let us know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:accessibility@kreature.com"
              className="inline-flex items-center transition-colors font-medium"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: V("color-accent-blue"),
                color: "#fff",
              }}
            >
              Email accessibility team <Arrow />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center transition-colors font-medium"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: "transparent",
                color: V("color-ink"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              Contact support
            </a>
          </div>
          <p
            className="mt-6"
            style={{
              fontSize: "14px",
              lineHeight: "22.4px",
              color: V("color-mute"),
            }}
          >
            We aim to respond to accessibility inquiries within 2 business days.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
