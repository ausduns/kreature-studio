"use client";

import { useState } from "react";

/* ─── CSS Var helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Typography scale ─── */
const T = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── Helpers ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

/* ─── Footer ─── */
function Footer() {
  const FOOTER_COLS = [
    { heading: "Company", links: [{ label: "Services", href: "/#offers" }, { label: "Results", href: "/#case-studies" }, { label: "Process", href: "/#process" }, { label: "The Kreature Way", href: "/webflow-way" }] },
    { heading: "Resources", links: [{ label: "Blog", href: "/blog" }, { label: "Resources", href: "/resources" }, { label: "Community", href: "/community" }, { label: "FAQ", href: "/#faq" }] },
    { heading: "Connect", links: [{ label: "Contact", href: "/contact-sales" }, { label: "Book a Call", href: "https://cal.com" }] },
  ];

  return (
    <footer style={{ background: V("color-canvas"), borderTop: `1px solid ${V("color-hairline")}` }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-[36px] w-auto logo-dark" />
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-[36px] w-auto logo-light" />
              <span className="font-heading font-[800] text-xl tracking-tight" style={{ color: V("color-ink") }}>Kreature<span className="text-[#146ef5]">.</span></span>
            </div>
            <p style={{ ...T.bodySm, color: V("color-mute"), maxWidth: "280px" }}>AI Product Studio for founders who ship fast.</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div className="mb-4 uppercase tracking-wider" style={{ ...T.caption, color: V("color-mute") }}>{col.heading}</div>
              <ul className="space-y-3 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}><a href={link.href} className="no-underline transition-colors" style={{ ...T.bodySm, color: V("color-body-mid") }}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
          <p style={{ ...T.caption, color: V("color-mute") }}>&copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors" style={{ color: V("color-mute") }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors" style={{ color: V("color-mute") }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Data ─── */

const PILLARS = [
  {
    title: "Speed",
    accent: "color-accent-blue",
    icon: "⚡",
    description:
      "We ship fast because speed is the greatest advantage a startup has. Our fixed-scope model eliminates the incentive to drag things out. Every engagement is structured to get you from idea to working product in weeks, not months.",
  },
  {
    title: "Quality",
    accent: "color-accent-purple",
    icon: "◆",
    description:
      "Speed means nothing if the product breaks. We build with production-grade tools and practices — TypeScript, automated testing, design systems, and accessibility standards — so what you launch is ready for real users on day one.",
  },
  {
    title: "Partnership",
    accent: "color-accent-orange",
    icon: "🤝",
    description:
      "We don't just build and disappear. We embed in your process, learn your business, and treat your product like our own. Our clients stay with us because we care about outcomes, not deliverables.",
  },
  {
    title: "Transparency",
    accent: "color-accent-green",
    icon: "◈",
    description:
      "No black boxes. No surprise invoices. You get a fixed scope with a fixed price, weekly progress updates, access to the build environment, and a direct line to the team building your product.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Scope",
    accent: "color-accent-blue",
    description:
      "We start by getting crystal clear on what you're building. Who is it for? What problem does it solve? What's the smallest version that delivers value? We define the feature set, user flows, and technical requirements — together.",
    deliverables: [
      "Product requirements document",
      "User stories & flows",
      "Technical architecture",
      "Fixed scope & price",
    ],
  },
  {
    step: "02",
    title: "Design",
    accent: "color-accent-purple",
    description:
      "We translate requirements into a complete visual system — brand identity, component library, responsive layouts, and interaction patterns. Everything is built on a design system that scales.",
    deliverables: [
      "Brand direction & style guide",
      "Design system & component library",
      "Responsive page designs",
      "Interactive prototypes",
    ],
  },
  {
    step: "03",
    title: "Build",
    accent: "color-accent-orange",
    description:
      "This is where it comes together. We build the full product — frontend, backend, database, third-party integrations — using production-grade tools. You see progress weekly and can test as we go.",
    deliverables: [
      "Working product (staging)",
      "Weekly progress demos",
      "Integration with your tools",
      "Documentation & handoff materials",
    ],
  },
  {
    step: "04",
    title: "Ship",
    accent: "color-accent-green",
    description:
      "We launch to production. This includes QA, performance testing, security hardening, and deployment. We handle DNS, hosting, CI/CD, and monitoring setup so you can focus on users.",
    deliverables: [
      "Production deployment",
      "QA test report",
      "Performance audit",
      "Monitoring & analytics setup",
    ],
  },
  {
    step: "05",
    title: "Iterate",
    accent: "color-accent-pink",
    description:
      "Shipping isn't the end — it's the beginning. We monitor real user behavior, gather feedback, and run a structured iteration process to improve the product based on data, not guesses.",
    deliverables: [
      "30-day post-launch support",
      "Analytics review & recommendations",
      "Iteration roadmap",
      "Ongoing retainer available",
    ],
  },
];

const FIXED_SCOPE_REASONS = [
  {
    title: "Aligned incentives",
    description:
      "Hourly billing rewards slowness. Fixed scope rewards speed and quality. We're incentivized to ship fast and get it right the first time — just like you.",
  },
  {
    title: "Predictable budget",
    description:
      "You know what it costs before we start. No scope creep, no surprise invoices, no 'it took longer than expected.' If we underestimate, we eat the cost — not you.",
  },
  {
    title: "Clear scope, clear outcome",
    description:
      "We define exactly what's included before we write a line of code. Both sides know what success looks like. Changes are handled through a structured change request process.",
  },
  {
    title: "Faster delivery",
    description:
      "Without the incentive to pad hours, we optimize for speed. Our fixed-scope engagements typically deliver 2-3x faster than equivalent hourly-billed projects.",
  },
];

/* ══════════════════════════════════════════════════════════════════
   The Kreature Way Page
   ══════════════════════════════════════════════════════════════════ */
export default function KreatureWayPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <main style={{ background: V("color-canvas") }}>
        {/* ─── Hero ─── */}
        <section className="relative pt-[68px] overflow-hidden" style={{ background: V("color-canvas") }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px]" style={{ background: V("color-accent-blue"), opacity: 0.05 }} />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px]" style={{ background: V("color-accent-purple"), opacity: 0.04 }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center">
            <h1 className="font-heading mb-6" style={{ ...T.h1, color: V("color-ink") }}>
              The Kreature Way
            </h1>
            <p className="max-w-2xl mx-auto mb-0" style={{ ...T.h4, color: V("color-body-mid"), fontWeight: 400 }}>
              A methodology built on speed, quality, partnership, and transparency.
              This is how we take products from idea to market in weeks, not months.
            </p>
          </div>
        </section>

        {/* ─── Philosophy Pillars ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28" style={{ background: V("color-canvas-soft") }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading mb-4 text-center" style={{ ...T.h2, color: V("color-ink") }}>
              What we believe
            </h2>
            <p className="text-center mb-16 max-w-xl mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Four principles guide every engagement. They&apos;re not marketing copy
              — they&apos;re how we structure every project, every scope, every
              relationship.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {PILLARS.map((pillar) => (
                <article
                  key={pillar.title}
                  className="p-8 sm:p-10 transition-all"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5 text-xl"
                    style={{
                      borderRadius: "10px",
                      background: V("color-canvas-soft"),
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading mb-3" style={{ ...T.h4, color: V("color-ink") }}>
                    {pillar.title}
                  </h3>
                  <p style={{ ...T.body, color: V("color-body-mid") }}>
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Process Overview ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28" style={{ background: V("color-canvas") }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading mb-4 text-center" style={{ ...T.h2, color: V("color-ink") }}>
              How we work
            </h2>
            <p className="text-center mb-16 max-w-xl mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Every project moves through five phases. Each phase has a clear
              outcome, defined deliverables, and a fixed timeline.
            </p>

            {/* Desktop process — horizontal steps */}
            <div className="hidden lg:flex items-start gap-0 mb-16">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.step} className="flex-1 relative">
                  {/* Connector line */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      className="absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${V(step.accent)}, ${V(PROCESS_STEPS[i + 1].accent)})`,
                      }}
                    />
                  )}
                  <div className="text-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-bold"
                      style={{
                        background: V(step.accent),
                        color: "#fff",
                      }}
                    >
                      {step.step}
                    </div>
                    <h3 className="font-heading mb-2" style={{ ...T.h4, color: V("color-ink") }}>
                      {step.title}
                    </h3>
                    <p className="px-2" style={{ ...T.bodySm, color: V("color-body-mid") }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile/tablet process — interactive tabs */}
            <div className="lg:hidden">
              <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
                {PROCESS_STEPS.map((step, i) => (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(i)}
                    className="shrink-0 transition-all cursor-pointer"
                    style={{
                      ...T.bodySm,
                      fontWeight: 500,
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: activeStep === i ? `2px solid ${V(step.accent)}` : `2px solid ${V("color-hairline")}`,
                      background: activeStep === i ? V(step.accent) : "transparent",
                      color: activeStep === i ? "#fff" : V("color-body"),
                    }}
                  >
                    {step.step}. {step.title}
                  </button>
                ))}
              </div>

              {/* Active step detail */}
              {PROCESS_STEPS[activeStep] && (
                <div
                  className="p-6 sm:p-8"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: V(PROCESS_STEPS[activeStep].accent), color: "#fff" }}
                    >
                      {PROCESS_STEPS[activeStep].step}
                    </div>
                    <h3 className="font-heading" style={{ ...T.h4, color: V("color-ink") }}>
                      {PROCESS_STEPS[activeStep].title}
                    </h3>
                  </div>
                  <p className="mb-6" style={{ ...T.body, color: V("color-body-mid") }}>
                    {PROCESS_STEPS[activeStep].description}
                  </p>
                  <div>
                    <div className="mb-3" style={{ ...T.caption, color: V("color-mute"), textTransform: "uppercase" }}>
                      Deliverables
                    </div>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {PROCESS_STEPS[activeStep].deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2" style={{ ...T.bodySm, color: V("color-body-mid") }}>
                          <span style={{ color: V(PROCESS_STEPS[activeStep].accent) }}>✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop deliverables grid */}
            <div className="hidden lg:grid grid-cols-5 gap-4 mt-6">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-5"
                  style={{
                    borderRadius: "10px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                  }}
                >
                  <div className="mb-3" style={{ ...T.caption, color: V("color-mute"), textTransform: "uppercase" }}>
                    Deliverables
                  </div>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-1.5" style={{ ...T.caption, color: V("color-body-mid") }}>
                        <span style={{ color: V(step.accent) }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why Fixed Scope ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden" style={{ background: V("color-canvas-soft") }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px]" style={{ background: V("color-accent-orange"), opacity: 0.04 }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading mb-4" style={{ ...T.h2, color: V("color-ink") }}>
                Why fixed scope?
              </h2>
              <p style={{ ...T.body, color: V("color-body-mid"), fontSize: "20px", lineHeight: 1.6 }}>
                Most agencies bill by the hour. That model creates misaligned
                incentives — the slower they work, the more they make. We do the
                opposite.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {FIXED_SCOPE_REASONS.map((reason) => (
                <article
                  key={reason.title}
                  className="p-8 transition-all"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <h3 className="font-heading mb-3" style={{ ...T.h4, color: V("color-ink") }}>
                    {reason.title}
                  </h3>
                  <p style={{ ...T.body, color: V("color-body-mid") }}>
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden" style={{ background: V("color-canvas") }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]" style={{ background: V("color-accent-blue"), opacity: 0.06 }} />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-heading mb-4" style={{ ...T.h2, color: V("color-ink") }}>
              Ready to build?
            </h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              We take on a maximum of 2 active clients at a time. If there&apos;s a slot
              open, we can scope your project in 48 hours and start building.
            </p>
            <a
              href="/contact-sales"
              className="inline-flex items-center text-white no-underline transition-colors"
              style={{ ...T.btn, background: V("color-accent-blue") }}
            >
              Start a conversation <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
