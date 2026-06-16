"use client";

const V = (n: string) => `var(--${n})`;

// ─── Three pillar cards ───
const PILLAR_CARDS = [
  { icon: "◆", title: "Experiment", description: "Run A/B tests and other experiments quickly -- so you can identify what works and scale it across your site.", accent: "color-accent-blue" },
  { icon: "◇", title: "Personalize", description: "Turn more visitors into customers with personalized site experiences.", accent: "color-accent-purple" },
  { icon: "⟐", title: "Optimize with AI", description: "Use AI to test multiple variables at once, automate testing, and personalize the on-page experience for each unique visitor.", accent: "color-accent-green" },
];

// ─── Experiment tabs ───
const EXPERIMENT_TABS = [
  { label: "Learn as you go", title: "Learn as you go", description: "Learn how different content formats, headlines, images, and CTAs perform to optimize engagement and boost conversion rates based on performance results.", accent: "color-accent-blue" },
  { label: "Scale", title: "Scale your experiments", description: "Set up tests for something as small as a copy change or as large as a sitewide navigation element with just a few clicks.", accent: "color-accent-purple" },
  { label: "No roadblocks", title: "Test without roadblocks", description: "Set up multiple tests -- or use AI for a head start -- and get results quickly and easily, without getting stuck in a developer backlog.", accent: "color-accent-green" },
];

// ─── Personalize tabs ───
const PERSONALIZE_TABS = [
  { label: "Custom experience", title: "Give visitors a custom experience", description: "Target different customer segments and improve conversion rates with personalized messaging, content, offers, CTAs, and more.", accent: "color-accent-purple" },
  { label: "ABM campaigns", title: "Enhance your ABM campaigns", description: "Deliver a hyper-personalized experience to your target accounts and use firmographic data like industry and company size to personalize for broader audiences.", accent: "color-accent-green" },
  { label: "Track performance", title: "Track your performance", description: "Monitor your results and expedite your learnings with native audience insights directly in Kreature.", accent: "color-accent-orange" },
];

// ─── AI Optimize tabs ───
const AI_OPTIMIZE_TABS = [
  { label: "Every impression", title: "Make every impression count", description: "Create your own variants, then let AI Optimize make real-time decisions about which audiences see what content in order to maximize conversions.", accent: "color-accent-green" },
  { label: "Multiple variables", title: "Test multiple variables at once", description: "Try out variants with multiple changed page elements to see which combinations convert best.", accent: "color-accent-orange" },
  { label: "Deliver fast", title: "Deliver winning ideas quickly", description: "Deliver optimized pages to visitors faster than typical testing methods with AI-powered automated delivery.", accent: "color-accent-pink" },
];

// ─── FAQ ───
const FAQ_ITEMS = [
  {
    q: "Do I need a Kreature CMS to use Optimize?",
    a: "No! Optimize works with any CMS. If your site is built in Kreature, Optimize can be added natively. Non-Kreature sites can deploy Optimize using a lightweight JavaScript snippet.",
  },
  {
    q: "What is website personalization?",
    a: "Website personalization is the practice of creating customized experiences for visitors based on their characteristics, behaviors, or preferences. It involves dynamically adjusting content, messaging, offers, and CTAs to match different audience segments, such as returning customers, visitors from specific regions, or people arriving through particular marketing campaigns.",
  },
  {
    q: "How does Kreature Optimize compare to other personalization and A/B testing tools?",
    a: "Kreature Optimize combines three powerful approaches in one platform: traditional A/B testing, rules-based personalization, and AI-powered optimization that learns what content works best for each visitor and dynamically serves up personalized experience down to a 1:1 level.",
  },
  {
    q: "Can Kreature Optimize segment users by actions or profiles?",
    a: "Yes, Kreature Optimize offers comprehensive segmentation through both behavioral tracking and profile-based targeting. You can segment visitors based on actions like pages viewed, repeat visits, and engagement patterns (for instance, showing more aggressive sales messaging to visitors who've viewed your pricing page multiple times).",
  },
  {
    q: "How does Kreature Optimize handle user segmentation?",
    a: "Kreature Optimize uses rules-based personalization to create targeted visitor segments without collecting personally identifiable information or using cookies. The system automatically detects visitor attributes, including device type, geographic location, traffic source, UTM parameters, and behavioral patterns like page views and session frequency.",
  },
  {
    q: "What third-party sources can I integrate with Kreature Optimize?",
    a: "Kreature Enterprise plans support powerful integrations with major marketing and sales platforms, including Salesforce, Marketo, HubSpot, 6sense, and Demandbase. These integrations enable you to leverage existing customer data for advanced personalization, targeting visitors by industry, company name, funnel stage, or account status.",
  },
  {
    q: "Does Kreature Optimize support AI-driven personalization at scale?",
    a: "Kreature Optimize's AI-driven personalization enables sophisticated personalization that scales automatically without manual rule management. The AI continuously learns which variations perform best for different visitor segments, automatically allocating traffic to maximize conversions while testing multiple variables simultaneously.",
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
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>The all-in-one platform for building, launching, and growing websites -- with optimization and personalization built in.</p>
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
export default function OptimizeFeaturePage() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas"), paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: V("color-accent-blue") }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full blur-[120px] opacity-10" style={{ backgroundColor: V("color-accent-purple") }} />
        </div>
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "900px" }}>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ color: V("color-accent-blue"), backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} 10%, transparent)`, border: `1px solid ${V("color-accent-blue")}20` }}>
            Optimize
          </div>
          <h1 className="font-heading font-semibold tracking-tight mb-6" style={{ fontSize: "80px", lineHeight: "83.2px", letterSpacing: "-0.8px", color: V("color-ink") }}>
            Learn what performs. Deliver it at scale.
          </h1>
          <p className="text-lg mx-auto mb-10" style={{ color: V("color-body-mid"), maxWidth: "640px", fontSize: "18px", lineHeight: "28.8px" }}>
            Run experiments, personalize for every visitor, and let AI deliver the winning experience -- whether your site is built on Kreature or not.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/signup" className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90" style={{ backgroundColor: V("color-accent-blue"), borderRadius: "4px" }}>
              Get started -- it's free<Arrow />
            </a>
          </div>
        </div>
        {/* Video poster placeholder */}
        <div className="mx-auto px-5 sm:px-8 mt-16 relative z-10" style={{ maxWidth: "1000px" }}>
          <div className="rounded-xl border overflow-hidden relative" style={{ backgroundColor: V("color-canvas-soft"), borderColor: V("color-hairline"), aspectRatio: "16/9" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: V("color-accent-blue") }}>
                <span className="text-white text-xl">&#9654;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Three pillar cards ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLAR_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl p-8 border transition-all duration-300 hover:-translate-y-1 text-center" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl mx-auto mb-5" style={{ backgroundColor: `color-mix(in srgb, ${V(card.accent)} 12%, transparent)`, color: V(card.accent) }}>{card.icon}</div>
                <h3 className="font-semibold mb-3" style={{ fontSize: "24px", lineHeight: "32px", color: V("color-ink") }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{card.description}</p>
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

      {/* ─── Experiment ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: V("color-accent-blue") }}>Experiment</div>
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>Run experiments quickly and easily</h2>
            <p className="text-base mx-auto" style={{ color: V("color-body-mid"), maxWidth: "560px", fontSize: "16px", lineHeight: "25.6px" }}>Test and compare different variants to learn what performs best.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {EXPERIMENT_TABS.map((tab) => (
              <div key={tab.label} className="rounded-xl p-8 border transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: V(tab.accent), backgroundColor: `color-mix(in srgb, ${V(tab.accent)} 10%, transparent)` }}>{tab.label}</div>
                <div className="h-40 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${V(tab.accent)} 6%, transparent)` }}>
                  <span className="text-3xl" style={{ color: V(tab.accent) }}>&#9670;</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ fontSize: "20px", lineHeight: "28px", color: V("color-ink") }}>{tab.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{tab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Personalize ─── */}
      <section style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: V("color-accent-purple") }}>Personalize</div>
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>Increase conversion with personalization</h2>
            <p className="text-base mx-auto" style={{ color: V("color-body-mid"), maxWidth: "560px", fontSize: "16px", lineHeight: "25.6px" }}>Tailor every experience to every visitor -- no matter who they are.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PERSONALIZE_TABS.map((tab) => (
              <div key={tab.label} className="rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="h-40 flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${V(tab.accent)} 6%, transparent)` }}>
                  <span className="text-3xl" style={{ color: V(tab.accent) }}>&#9671;</span>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: V(tab.accent), backgroundColor: `color-mix(in srgb, ${V(tab.accent)} 10%, transparent)` }}>{tab.label}</div>
                  <h3 className="font-semibold mb-2" style={{ fontSize: "20px", lineHeight: "28px", color: V("color-ink") }}>{tab.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{tab.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Optimize with AI ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: V("color-accent-green") }}>Optimize with AI</div>
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>Boost performance and deliver results faster than ever</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {AI_OPTIMIZE_TABS.map((tab) => (
              <div key={tab.label} className="rounded-xl p-8 border transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="h-40 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${V(tab.accent)} 6%, transparent)` }}>
                  <span className="text-3xl" style={{ color: V(tab.accent) }}>&#9670;</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ fontSize: "20px", lineHeight: "28px", color: V("color-ink") }}>{tab.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{tab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Talk to us CTA ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15" style={{ backgroundColor: V("color-accent-blue") }} />
        </div>
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "700px" }}>
          <h2 className="font-heading font-semibold tracking-tight mb-5" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>Talk to us</h2>
          <p className="text-lg mb-8 mx-auto" style={{ color: V("color-body-mid"), maxWidth: "540px", fontSize: "18px", lineHeight: "28.8px" }}>Get a demo to learn more about Kreature Optimize.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact-sales" className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90" style={{ backgroundColor: V("color-accent-blue"), borderRadius: "4px" }}>
              Contact sales<Arrow />
            </a>
            <a href="/product-tour" className="text-base font-medium px-8 py-4 rounded transition-colors border" style={{ color: V("color-ink"), borderColor: V("color-hairline"), borderRadius: "4px" }}>Watch demo</a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "900px" }}>
          <div className="text-center mb-14">
            <h2 className="font-heading font-semibold tracking-tight" style={{ fontSize: "48px", lineHeight: "52px", color: V("color-ink") }}>Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="rounded-xl border group" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <span className="font-semibold text-base pr-8" style={{ color: V("color-ink") }}>{item.q}</span>
                  <span className="text-lg transition-transform group-open:rotate-45" style={{ color: V("color-mute") }}>+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer CTA ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15" style={{ backgroundColor: V("color-accent-blue") }} />
        </div>
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "700px" }}>
          <h2 className="font-heading font-semibold tracking-tight mb-5" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>Get a demo</h2>
          <p className="text-lg mb-8 mx-auto" style={{ color: V("color-body-mid"), maxWidth: "540px", fontSize: "18px", lineHeight: "28.8px" }}>Learn more about Kreature Optimize.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact-sales" className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90" style={{ backgroundColor: V("color-accent-blue"), borderRadius: "4px" }}>
              Contact sales<Arrow />
            </a>
            <a href="/product-tour" className="text-base font-medium px-8 py-4 rounded transition-colors border" style={{ color: V("color-ink"), borderColor: V("color-hairline"), borderRadius: "4px" }}>Watch demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
