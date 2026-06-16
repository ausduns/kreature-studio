// ─── Design token accessor ───
const V = (n: string) => `var(--${n})`;

// ─── Interaction type cards ───
const INTERACTION_TYPES = [
  {
    icon: "↓",
    title: "Scroll triggers",
    description:
      "Trigger animations as elements enter the viewport. Parallax, fade-in, slide-up, scale-in, and custom keyframe sequences. Set start and end scroll positions, scrub behavior, and easing curves.",
    accent: "color-accent-blue",
    badge: "Most used",
  },
  {
    icon: "◎",
    title: "Hover states",
    description:
      "Build micro-interactions that respond to mouse position. Tilt effects, magnetic buttons, color shifts, scale transforms, and card lift. Every property tweenable with custom easing.",
    accent: "color-accent-purple",
  },
  {
    icon: "↗",
    title: "Page transitions",
    description:
      "Seamless transitions between pages with no flash of white. Crossfades, slides, zooms, and custom masking. Persistent elements that animate across route changes without losing state.",
    accent: "color-accent-green",
  },
  {
    icon: "◈",
    title: "Lottie animations",
    description:
      "Import Lottie JSON files directly into the canvas. Control playback on scroll, hover, or click. Set loop counts, reverse on exit, and combine with native animations for hybrid sequences.",
    accent: "color-accent-pink",
  },
  {
    icon: "⎔",
    title: "GSAP integration",
    description:
      "Full GreenSock Animation Platform support. Write GSAP timelines in the code panel for complex choreographed sequences. ScrollTrigger, MotionPath, and Flip plugin support included.",
    accent: "color-accent-orange",
  },
  {
    icon: "▥",
    title: "3D transforms",
    description:
      "Rotate, scale, and translate elements in 3D space. Perspective controls, CSS 3D transforms, and WebGL-powered effects for product showcases, hero sections, and interactive storytelling.",
    accent: "color-accent-blue",
  },
];

// ─── Visual builder steps ───
const BUILDER_STEPS = [
  {
    step: "01",
    title: "Select an element",
    description:
      "Click any element on the canvas — text, image, button, section — to open the interactions panel. Everything is a potential animation target.",
  },
  {
    step: "02",
    title: "Choose a trigger",
    description:
      "Scroll into view, hover, click, page load, or custom event. Set offset, repeat count, and debounce timing. Chain triggers to build sequences.",
  },
  {
    step: "03",
    title: "Define the animation",
    description:
      "Pick from 40+ preset animations or build custom keyframes. Adjust duration, delay, easing, and stagger. Preview in real time on the canvas.",
  },
  {
    step: "04",
    title: "Publish",
    description:
      "Animations compile to optimized CSS and minimal JS. No runtime library bloat — unused animations are automatically tree-shaken from the production build.",
  },
];

// ─── Showcase examples ───
const SHOWCASE_EXAMPLES = [
  {
    name: "Product reveal",
    description:
      "A luxury watch brand's hero section where the product assembles from floating components as you scroll, with parallax depth and metallic sheen shader.",
    tags: ["Scroll trigger", "3D Transform", "Parallax"],
    accent: "color-accent-purple",
  },
  {
    name: "Data dashboard",
    description:
      "An analytics dashboard where charts draw themselves on scroll, counters animate to final values, and cards cascade into view with staggered delays.",
    tags: ["Scroll trigger", "Counter", "Stagger"],
    accent: "color-accent-blue",
  },
  {
    name: "Portfolio transition",
    description:
      "An architect's portfolio with page transitions that morph the previous project's shape into the next — zero flash, zero jarring cuts.",
    tags: ["Page transition", "Morph", "Mask"],
    accent: "color-accent-green",
  },
  {
    name: "Interactive story",
    description:
      "A long-form article where illustrations come alive on scroll — characters move, environments shift parallax, and data visualizations build themselves.",
    tags: ["Lottie", "Scroll trigger", "GSAP"],
    accent: "color-accent-orange",
  },
];

// ─── Performance cards ───
const PERF_POINTS = [
  {
    title: "CSS-first rendering",
    description:
      "Wherever possible, animations compile to CSS transforms and opacity changes — the two properties browsers can animate on the compositor thread without triggering layout or paint.",
    metric: "GPU accelerated",
  },
  {
    title: "Tree-shaken JS",
    description:
      "Only the animation primitives your site actually uses ship to production. If you don't use GSAP, Lottie, or 3D transforms, that code is never downloaded.",
    metric: "Zero unused KB",
  },
  {
    title: "will-change hints",
    description:
      "The platform automatically adds and removes will-change hints so the browser pre-optimizes elements about to animate, then releases memory when the animation completes.",
    metric: "Jank-free at 60fps",
  },
  {
    title: "Reduced motion respect",
    description:
      "When a visitor has prefers-reduced-motion enabled, animations gracefully degrade to instant transitions. No flashing, no vestibular triggers. Accessibility is not optional.",
    metric: "A11y compliant",
  },
];

// ─── Footer data ───
const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Design", href: "/feature/design" },
      { label: "CMS", href: "/feature/cms" },
      { label: "Hosting", href: "/feature/hosting" },
      { label: "SEO", href: "/feature/seo" },
      { label: "Ecommerce", href: "/feature/ecommerce" },
      { label: "Analytics", href: "/feature/analyze" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Startups", href: "/solutions/startups" },
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Ecommerce", href: "/solutions/ecommerce" },
      { label: "SaaS", href: "/solutions/saas" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Templates", href: "/templates" },
      { label: "Integrations", href: "/integrations" },
      { label: "Glossary", href: "/glossary" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact-sales" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs Webflow", href: "/webflow-clone" },
      { label: "vs WordPress", href: "/webflow-way" },
      { label: "vs Framer", href: "/made-in-webflow" },
      { label: "vs Squarespace", href: "/webflow-clone" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "GDPR", href: "/legal/gdpr" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "Twitter / X", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Discord", href: "https://discord.com" },
    ],
  },
];

// ─── Sub-components ───

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

// ─── Footer ───

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: V("color-hairline"),
        backgroundColor: V("color-canvas"),
      }}
    >
      <div
        className="mx-auto px-5 sm:px-8 py-16"
        style={{ maxWidth: "1440px" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/logo/kreature-logo-dark.png"
                alt="Kreature"
                className="logo-dark h-[32px] w-auto"
              />
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="logo-light h-[32px] w-auto"
              />
              <span
                className="font-heading font-[800] text-lg tracking-tight"
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
              Bring your site to life with interactions and animations that feel
              native — no code required.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div
                className="text-xs uppercase tracking-wider mb-4 font-medium"
                style={{ color: V("color-mute-soft") }}
              >
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: V("color-body-mid") }}
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
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
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
              className="transition-colors hover:opacity-80"
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
              className="transition-colors hover:opacity-80"
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

// ─── Page ───

export default function InteractionsAnimationsFeaturePage() {
  return (
    <>
      <main>
        {/* ─── Hero ─── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: V("color-canvas"),
            paddingTop: "140px",
            paddingBottom: "80px",
          }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-0 right-1/3 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20"
              style={{ backgroundColor: V("color-accent-purple") }}
            />
            <div
              className="absolute bottom-0 left-1/3 w-[500px] h-[350px] rounded-full blur-[120px] opacity-10"
              style={{ backgroundColor: V("color-accent-pink") }}
            />
          </div>

          <div
            className="mx-auto px-5 sm:px-8 text-center relative z-10"
            style={{ maxWidth: "900px" }}
          >
            <div
              className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{
                color: V("color-accent-purple"),
                backgroundColor: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)`,
                border: `1px solid ${V("color-accent-purple")}20`,
              }}
            >
              Interactions &amp; Animations
            </div>

            <h1
              className="font-heading font-semibold tracking-tight mb-6"
              style={{
                fontSize: "80px",
                lineHeight: "83.2px",
                letterSpacing: "-0.8px",
                color: V("color-ink"),
              }}
            >
              Bring your site to life
            </h1>

            <p
              className="text-lg mx-auto mb-10"
              style={{
                color: V("color-body-mid"),
                maxWidth: "640px",
                fontSize: "18px",
                lineHeight: "28.8px",
              }}
            >
              Every element on your page can move, react, and respond.
              Scroll-triggered reveals, hover micro-interactions, page
              transitions, and full 3D — all built visually, all running at
              60fps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/signup"
                className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: V("color-accent-purple"),
                  borderRadius: "4px",
                }}
              >
                Start animating
                <Arrow />
              </a>
              <a
                href="/feature/interactions-animations#types"
                className="text-base font-medium px-8 py-4 rounded transition-colors border"
                style={{
                  color: V("color-ink"),
                  borderColor: V("color-hairline"),
                  borderRadius: "4px",
                }}
              >
                Explore interactions
              </a>
            </div>
          </div>
        </section>

        {/* ─── Interaction Types Grid ─── */}
        <section
          id="types"
          style={{
            backgroundColor: V("color-canvas-soft"),
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <div className="text-center mb-16">
              <div
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: V("color-accent-purple") }}
              >
                Interaction types
              </div>
              <h2
                className="font-heading font-semibold tracking-tight mb-4"
                style={{
                  fontSize: "56px",
                  lineHeight: "58.24px",
                  color: V("color-ink"),
                }}
              >
                Every kind of motion, built in
              </h2>
              <p
                className="text-base mx-auto"
                style={{
                  color: V("color-body-mid"),
                  maxWidth: "560px",
                  fontSize: "16px",
                  lineHeight: "25.6px",
                }}
              >
                From subtle hover states to full-page cinematic sequences.
                Choose from presets or build custom animations with the
                timeline editor.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INTERACTION_TYPES.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 border relative"
                  style={{
                    backgroundColor: V("color-canvas"),
                    borderColor: V("color-hairline"),
                    boxShadow: `0 1px 2px ${V("color-hairline")}`,
                  }}
                >
                  {item.badge && (
                    <div
                      className="absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                      style={{
                        color: V("color-accent-blue"),
                        backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} 12%, transparent)`,
                      }}
                    >
                      {item.badge}
                    </div>
                  )}

                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${V(item.accent)} 12%, transparent)`,
                      color: V(item.accent),
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: V("color-ink"),
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── No Code Required: Visual Builder ─── */}
        <section
          style={{
            backgroundColor: V("color-canvas"),
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left — visual builder preview */}
              <div
                className="rounded-2xl p-8 border relative overflow-hidden order-2 lg:order-1"
                style={{
                  backgroundColor: V("color-canvas-soft"),
                  borderColor: V("color-hairline"),
                  minHeight: "460px",
                }}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute bottom-10 right-10 w-[200px] h-[200px] rounded-full blur-[60px] opacity-15"
                    style={{ backgroundColor: V("color-accent-purple") }}
                  />
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Simulated interaction panel */}
                  <div
                    className="rounded-lg p-4 border"
                    style={{
                      backgroundColor: V("color-canvas"),
                      borderColor: V("color-hairline"),
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                        style={{
                          backgroundColor: V("color-accent-purple"),
                          color: "#fff",
                        }}
                      >
                        T
                      </div>
                      <div>
                        <div
                          className="text-xs font-semibold"
                          style={{ color: V("color-ink") }}
                        >
                          Trigger
                        </div>
                        <div
                          className="text-[11px]"
                          style={{ color: V("color-mute") }}
                        >
                          Scroll into view
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${V("color-canvas-mid")} 50%, transparent)`,
                          color: V("color-body-mid"),
                        }}
                      >
                        Offset: 120px
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${V("color-canvas-mid")} 50%, transparent)`,
                          color: V("color-body-mid"),
                        }}
                      >
                        Once
                      </span>
                    </div>
                  </div>

                  {/* Animation config */}
                  <div
                    className="rounded-lg p-4 border"
                    style={{
                      backgroundColor: V("color-canvas"),
                      borderColor: V("color-hairline"),
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                        style={{
                          backgroundColor: V("color-accent-pink"),
                          color: "#fff",
                        }}
                      >
                        A
                      </div>
                      <div>
                        <div
                          className="text-xs font-semibold"
                          style={{ color: V("color-ink") }}
                        >
                          Animation
                        </div>
                        <div
                          className="text-[11px]"
                          style={{ color: V("color-mute") }}
                        >
                          Fade in + slide up
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${V("color-canvas-mid")} 50%, transparent)`,
                          color: V("color-body-mid"),
                        }}
                      >
                        Duration: 600ms
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${V("color-canvas-mid")} 50%, transparent)`,
                          color: V("color-body-mid"),
                        }}
                      >
                        Ease: power2.out
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${V("color-canvas-mid")} 50%, transparent)`,
                          color: V("color-body-mid"),
                        }}
                      >
                        Stagger: 80ms
                      </span>
                    </div>
                  </div>

                  {/* Live preview indicator */}
                  <div className="flex items-center gap-2 px-1">
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: V("color-accent-green") }}
                    />
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: V("color-accent-green") }}
                    >
                      Live preview on canvas
                    </span>
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div className="order-1 lg:order-2">
                <div
                  className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: V("color-accent-purple"),
                    backgroundColor: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)`,
                    border: `1px solid ${V("color-accent-purple")}20`,
                  }}
                >
                  No code required
                </div>
                <h2
                  className="font-heading font-semibold tracking-tight mb-5"
                  style={{
                    fontSize: "48px",
                    lineHeight: "52px",
                    color: V("color-ink"),
                  }}
                >
                  Visual interaction builder
                </h2>
                <p
                  className="text-base mb-8"
                  style={{
                    color: V("color-body-mid"),
                    fontSize: "16px",
                    lineHeight: "25.6px",
                  }}
                >
                  Build sophisticated animations without touching a line of
                  code. The visual interaction panel gives you full control
                  over triggers, timing, easing, and sequencing — all while
                  seeing the result in real time on the canvas.
                </p>

                <div className="space-y-5">
                  {BUILDER_STEPS.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${V("color-accent-purple")} 12%, transparent)`,
                          color: V("color-accent-purple"),
                        }}
                      >
                        {step.step}
                      </div>
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{
                            fontSize: "16px",
                            color: V("color-ink"),
                          }}
                        >
                          {step.title}
                        </h4>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: V("color-body-mid") }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Showcase ─── */}
        <section
          style={{
            backgroundColor: V("color-canvas-soft"),
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <div className="text-center mb-16">
              <div
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: V("color-accent-pink") }}
              >
                Showcase
              </div>
              <h2
                className="font-heading font-semibold tracking-tight mb-4"
                style={{
                  fontSize: "48px",
                  lineHeight: "52px",
                  color: V("color-ink"),
                }}
              >
                See what&apos;s possible
              </h2>
              <p
                className="text-base mx-auto"
                style={{
                  color: V("color-body-mid"),
                  maxWidth: "560px",
                  fontSize: "16px",
                  lineHeight: "25.6px",
                }}
              >
                Real sites built with Kreature&apos;s animation tools. Every
                example below was created visually — no custom code.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {SHOWCASE_EXAMPLES.map((example, i) => (
                <div
                  key={example.name}
                  className="group rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    backgroundColor: V("color-canvas"),
                    borderColor: V("color-hairline"),
                  }}
                >
                  {/* Preview area */}
                  <div
                    className="h-56 flex items-center justify-center relative overflow-hidden"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${V(example.accent)} 6%, transparent)`,
                    }}
                  >
                    {/* Decorative animation hint shapes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-16 h-16 rounded-2xl border-2 animate-pulse"
                        style={{
                          borderColor: `color-mix(in srgb, ${V(example.accent)} 30%, transparent)`,
                          backgroundColor: `color-mix(in srgb, ${V(example.accent)} 10%, transparent)`,
                        }}
                      />
                      <div
                        className="absolute w-12 h-12 rounded-full translate-x-8 -translate-y-10"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${V(example.accent)} 20%, transparent)`,
                        }}
                      />
                      <div
                        className="absolute w-8 h-8 rounded-full -translate-x-10 translate-y-8"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${V(example.accent)} 25%, transparent)`,
                        }}
                      />
                    </div>

                    {/* Example number badge */}
                    <div
                      className="absolute top-3 left-3 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${V("color-canvas")} 90%, transparent)`,
                        backdropFilter: "blur(8px)",
                        color: V(example.accent),
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4
                      className="font-semibold mb-1.5"
                      style={{ fontSize: "18px", color: V("color-ink") }}
                    >
                      {example.name}
                    </h4>
                    <p
                      className="text-sm mb-3"
                      style={{ color: V("color-body-mid") }}
                    >
                      {example.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {example.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                          style={{
                            color: V("color-mute"),
                            backgroundColor: `color-mix(in srgb, ${V("color-canvas-mid")} 60%, transparent)`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/templates"
                className="inline-flex items-center text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: V("color-accent-purple") }}
              >
                View all examples
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* ─── Performance ─── */}
        <section
          style={{
            backgroundColor: V("color-canvas"),
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1000px" }}>
            <div className="text-center mb-16">
              <div
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: V("color-accent-green") }}
              >
                Performance
              </div>
              <h2
                className="font-heading font-semibold tracking-tight mb-4"
                style={{
                  fontSize: "48px",
                  lineHeight: "52px",
                  color: V("color-ink"),
                }}
              >
                Animations that stay fast
              </h2>
              <p
                className="text-base mx-auto"
                style={{
                  color: V("color-body-mid"),
                  maxWidth: "560px",
                  fontSize: "16px",
                  lineHeight: "25.6px",
                }}
              >
                Beautiful motion shouldn&apos;t cost performance. Kreature&apos;s
                animation engine is designed from the ground up to keep your
                site at 60fps — even with dozens of animated elements on screen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {PERF_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="rounded-xl p-6 border"
                  style={{
                    backgroundColor: V("color-canvas-soft"),
                    borderColor: V("color-hairline"),
                  }}
                >
                  <div
                    className="inline-block text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider mb-3"
                    style={{
                      color: V("color-accent-green"),
                      backgroundColor: `color-mix(in srgb, ${V("color-accent-green")} 10%, transparent)`,
                    }}
                  >
                    {point.metric}
                  </div>
                  <h4
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "18px",
                      color: V("color-ink"),
                    }}
                  >
                    {point.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: V("color-body-mid") }}
                  >
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: V("color-canvas-soft"),
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15"
              style={{ backgroundColor: V("color-accent-purple") }}
            />
          </div>

          <div
            className="mx-auto px-5 sm:px-8 text-center relative z-10"
            style={{ maxWidth: "700px" }}
          >
            <h2
              className="font-heading font-semibold tracking-tight mb-5"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Start animating
            </h2>
            <p
              className="text-lg mb-8 mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "540px",
                fontSize: "18px",
                lineHeight: "28.8px",
              }}
            >
              The web is more than static pages. Build sites that move, react,
              and delight — with the only visual builder that gives you
              cinematic control without the code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/signup"
                className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: V("color-accent-purple"),
                  borderRadius: "4px",
                }}
              >
                Start for free
                <Arrow />
              </a>
              <a
                href="/contact-sales"
                className="text-base font-medium px-8 py-4 rounded transition-colors border"
                style={{
                  color: V("color-ink"),
                  borderColor: V("color-hairline"),
                  borderRadius: "4px",
                }}
              >
                Request a demo
              </a>
            </div>
            <p className="text-xs mt-5" style={{ color: V("color-mute") }}>
              Free plan includes all animation features. No credit card
              required.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
