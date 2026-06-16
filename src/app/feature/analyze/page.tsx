"use client";

const V = (n: string) => `var(--${n})`;

// ─── Hero 3-card features ───
const HERO_FEATURES = [
  { title: "Unlock native insights", description: "Get easy-to-digest visual insights right within Kreature, no additional setup or third-party tools needed.", accent: "color-accent-blue" },
  { title: "Make data-driven decisions", description: "Measure impact across content, layouts, and pages -- so you can back up strategy decisions with data.", accent: "color-accent-purple" },
  { title: "Iterate faster than ever", description: "Give your entire team -- designers, growth marketers, and more -- the data they need to take action without tool-hopping or waiting for access.", accent: "color-accent-green" },
];

// ─── See what's working insights ───
const VISITOR_INSIGHTS = [
  { title: "Review trends at a glance", description: "See your site's traffic, top pages, and performance trends right in Kreature -- including how much traffic LLMs send to your site.", accent: "color-accent-blue" },
  { title: "Visualize what's working", description: "Learn how visitors engage with page elements like buttons and navs through interactive clickmaps and scrollmaps.", accent: "color-accent-purple" },
  { title: "Define, set, and track goals visually", description: "Define goals for actions like \"Get pricing\" or \"Request a demo\" -- no code required.", accent: "color-accent-green" },
  { title: "Analyze while you build", description: "See scroll, click, and conversion insights right on the page you're editing for faster testing and iteration.", accent: "color-accent-orange" },
];

// ─── FAQ data ───
const FAQ_ITEMS = [
  {
    q: "What are the advantages of Kreature's native analytics tools?",
    a: "Kreature Analyze eliminates the friction of traditional analytics by providing insights right where you work, with no switching between tools or decoding complex dashboards. You get visual analytics like clickmaps overlaid on your actual designs, showing exactly which buttons and elements visitors engage with most. The tool also offers privacy-compliant tracking without cookies, automatic bot filtering for accurate data, and goal tracking with no code required.",
  },
  {
    q: "How does Kreature Analyze compare to other analytics tools?",
    a: "While other tools offer comprehensive tracking capabilities, Kreature Analyze provides a more accessible, integrated solution designed specifically for web professionals who prioritize visual design and user experience. Everything you need is built directly into Kreature -- no complex setup, manual code implementation, or navigating between separate platforms.",
  },
  {
    q: "What metrics can I track in Kreature Analyze?",
    a: "Kreature Analyze captures comprehensive engagement data, including sessions, unique visitors, page views, bounce rates, and click events on specific elements. You can track visitor behavior by device type, language, location, and referrer source, plus see detailed page-level insights like traffic flow between pages and conversion rates for custom goals.",
  },
  {
    q: "Does Kreature offer built-in analytics?",
    a: "Yes, Kreature Analyze is a native analytics tool built directly into the platform that gives you a unified view of visitor behavior without the complexity of third-party tools -- tracking everything from page views and unique visitors to detailed clickmaps and conversion goals. With one-click setup and automatic event capture, you can start gathering insights within 30 minutes of publishing your site.",
  },
];

// ─── Footer data ───
const FOOTER_COLUMNS = [
  { heading: "Platform", links: [{ label: "Design", href: "/feature/design" }, { label: "CMS", href: "/feature/cms" }, { label: "Hosting", href: "/feature/hosting" }, { label: "SEO", href: "/feature/seo" }, { label: "Ecommerce", href: "/feature/ecommerce" }, { label: "Analytics", href: "/feature/analyze" }] },
  { heading: "Solutions", links: [{ label: "Startups", href: "/solutions/startups" }, { label: "Agencies", href: "/solutions/agencies" }, { label: "Enterprise", href: "/enterprise" }, { label: "Ecommerce", href: "/solutions/ecommerce" }, { label: "SaaS", href: "/solutions/saas" }] },
  { heading: "Resources", links: [{ label: "Blog", href: "/blog" }, { label: "Templates", href: "/templates" }, { label: "Integrations", href: "/integrations" }, { label: "Glossary", href: "/glossary" }, { label: "Documentation", href: "/docs" }] },
  { heading: "Company", links: [{ label: "About", href: "/company" }, { label: "Customers", href: "/customers" }, { label: "Partners", href: "/certified-partners" }, { label: "Careers", href: "/company/careers" }, { label: "Contact", href: "/contact-sales" }] },
  { heading: "Compare", links: [{ label: "vs Webflow", href: "/webflow-clone" }, { label: "vs WordPress", href: "/webflow-way" }, { label: "vs Framer", href: "/made-in-webflow" }, { label: "vs Shopify", href: "/feature/ecommerce" }] },
  { heading: "Legal", links: [{ label: "Privacy Policy", href: "/legal/privacy" }, { label: "Terms of Service", href: "/legal/terms" }, { label: "Cookie Policy", href: "/legal/cookies" }, { label: "GDPR", href: "/legal/gdpr" }] },
  { heading: "Social", links: [{ label: "Twitter / X", href: "https://twitter.com" }, { label: "LinkedIn", href: "https://linkedin.com" }, { label: "YouTube", href: "https://youtube.com" }, { label: "Discord", href: "https://discord.com" }] },
];

function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: V("color-hairline"), backgroundColor: V("color-canvas") }}>
      <div className="mx-auto px-5 sm:px-8 py-16" style={{ maxWidth: "1440px" }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="logo-dark h-[32px] w-auto" />
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="logo-light h-[32px] w-auto" />
              <span className="font-heading font-[800] text-lg tracking-tight" style={{ color: V("color-ink") }}>Kreature<span style={{ color: V("color-accent-blue") }}>.</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>The all-in-one platform for building, launching, and growing websites -- with native analytics built in, not bolted on.</p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: V("color-mute-soft") }}>{col.heading}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}><a href={link.href} className="text-sm transition-colors hover:opacity-80" style={{ color: V("color-body-mid") }}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t" style={{ borderColor: V("color-hairline") }}>
          <p className="text-xs" style={{ color: V("color-mute") }}>&copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:opacity-80" style={{ color: V("color-mute") }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:opacity-80" style={{ color: V("color-mute") }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ───
export default function AnalyzeFeaturePage() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas"), paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: V("color-accent-blue") }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full blur-[120px] opacity-10" style={{ backgroundColor: V("color-accent-green") }} />
        </div>
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "900px" }}>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ color: V("color-accent-blue"), backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} 10%, transparent)`, border: `1px solid ${V("color-accent-blue")}20` }}>
            Analyze
          </div>
          <h1 className="font-heading font-semibold tracking-tight mb-6" style={{ fontSize: "80px", lineHeight: "83.2px", letterSpacing: "-0.8px", color: V("color-ink") }}>
            Guide creativity with data
          </h1>
          <p className="text-lg mx-auto mb-10" style={{ color: V("color-body-mid"), maxWidth: "640px", fontSize: "18px", lineHeight: "28.8px" }}>
            Make informed creative decisions with native, unified insights into how users interact with your site -- from the page level down to individual clicks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/pricing" className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90" style={{ backgroundColor: V("color-accent-blue"), borderRadius: "4px" }}>
              Explore Analyze pricing<Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ─── The analytics you need, built right in ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>The analytics you need, built right in</h2>
            <p className="text-base mx-auto" style={{ color: V("color-body-mid"), maxWidth: "640px", fontSize: "16px", lineHeight: "25.6px" }}>
              With Kreature Analyze, everyone who needs site data can get it right within Kreature -- and understand it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HERO_FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${V(feature.accent)} 8%, transparent)` }}>
                  <span className="text-3xl" style={{ color: V(feature.accent) }}>&#9670;</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-3" style={{ fontSize: "20px", lineHeight: "28px", color: V("color-ink") }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonial ─── */}
      <section style={{ backgroundColor: V("color-canvas"), paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "800px" }}>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: V("color-accent-purple") }}>
              <span className="text-white text-lg font-bold">&ldquo;</span>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4 italic" style={{ color: V("color-body-mid"), fontSize: "18px", lineHeight: "28.8px" }}>
                &ldquo;Combined with Kreature&apos;s visual-first platform, Optimize and Analyze empower our teams to evolve with our clients, experiment and pivot quickly, and, ultimately, create more personalized digital experiences.&rdquo;
              </p>
              <div>
                <div className="font-semibold text-sm" style={{ color: V("color-ink") }}>Kokko Tso</div>
                <div className="text-xs" style={{ color: V("color-mute") }}>VP Digital Marketing, Walker &amp; Dunlop</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── See what's working ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>
              See what&apos;s working. Change what&apos;s not.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {VISITOR_INSIGHTS.map((item) => (
              <div key={item.title} className="rounded-xl p-8 border transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4" style={{ backgroundColor: `color-mix(in srgb, ${V(item.accent)} 12%, transparent)`, color: V(item.accent) }}>&#9670;</div>
                <h3 className="font-semibold mb-3" style={{ fontSize: "24px", lineHeight: "32px", color: V("color-ink") }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Effortless code-free setup ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "80px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ color: V("color-accent-blue"), backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} 10%, transparent)`, border: `1px solid ${V("color-accent-blue")}20` }}>Setup</div>
              <h2 className="font-heading font-semibold tracking-tight mb-5" style={{ fontSize: "48px", lineHeight: "52px", color: V("color-ink") }}>Effortless, code-free setup</h2>
              <p className="text-base leading-relaxed" style={{ color: V("color-body-mid"), fontSize: "16px", lineHeight: "25.6px" }}>
                Set up in one click. Capture events automatically. With Kreature Analyze, manual configuration is a thing of the past.
              </p>
            </div>
            <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: V("color-canvas-soft"), borderColor: V("color-hairline"), minHeight: "350px" }}>
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl" style={{ color: V("color-accent-blue") }}>&#9670;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Concerned about privacy ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas"), paddingTop: "0px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl border overflow-hidden order-2 md:order-1" style={{ backgroundColor: V("color-canvas-soft"), borderColor: V("color-hairline"), minHeight: "350px" }}>
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl" style={{ color: V("color-accent-purple") }}>&#9671;</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ color: V("color-accent-purple"), backgroundColor: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)`, border: `1px solid ${V("color-accent-purple")}20` }}>Privacy</div>
              <h2 className="font-heading font-semibold tracking-tight mb-5" style={{ fontSize: "48px", lineHeight: "52px", color: V("color-ink") }}>Concerned about privacy? So are we.</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: V("color-body-mid"), fontSize: "16px", lineHeight: "25.6px" }}>
                Analyze is a native Kreature feature, so you don&apos;t need to worry about your data sprawling across third-party ecosystems.
              </p>
              <p className="text-base leading-relaxed" style={{ color: V("color-body-mid"), fontSize: "16px", lineHeight: "25.6px" }}>
                Need a specialized consent management platform (CMP)? Analyze integrates with leading solutions like DataGrail and Finsweet Components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-semibold tracking-tight mb-8" style={{ fontSize: "48px", lineHeight: "52px", color: V("color-ink") }}>Frequently asked questions</h2>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, i) => (
                  <details key={i} className="rounded-xl border group" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                    <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
                      <span className="font-semibold text-sm pr-8" style={{ color: V("color-ink") }}>{item.q}</span>
                      <span className="text-lg transition-transform group-open:rotate-45 shrink-0" style={{ color: V("color-mute") }}>+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline"), minHeight: "500px" }}>
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <span className="text-5xl mb-4" style={{ color: V("color-accent-purple") }}>&#9671;</span>
                <p className="text-sm" style={{ color: V("color-body-mid") }}>Privacy-first analytics -- no cookies, no session recordings, no invasive tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Try Analyze today CTA ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15" style={{ backgroundColor: V("color-accent-blue") }} />
        </div>
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "700px" }}>
          <h2 className="font-heading font-semibold tracking-tight mb-5" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>Try Analyze today</h2>
          <p className="text-lg mb-8 mx-auto" style={{ color: V("color-body-mid"), maxWidth: "540px", fontSize: "18px", lineHeight: "28.8px" }}>Understand and improve your site performance with Analyze.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/pricing" className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90" style={{ backgroundColor: V("color-accent-blue"), borderRadius: "4px" }}>
              View pricing<Arrow />
            </a>
            <a href="/product-tour" className="text-base font-medium px-8 py-4 rounded transition-colors border" style={{ color: V("color-ink"), borderColor: V("color-hairline"), borderRadius: "4px" }}>Watch demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
