"use client";

const V = (n: string) => `var(--${n})`;

// ─── Showcase screenshot cards (hero grid) ───
const SHOWCASE_SCREENSHOTS = [
  { label: "Dropbox Brand", color: "color-accent-blue" },
  { label: "Walbi", color: "color-accent-purple" },
  { label: "Streamtime", color: "color-accent-green" },
  { label: "TED Conferences", color: "color-accent-orange" },
  { label: "Palmer Dinnerware", color: "color-accent-pink" },
  { label: "Ledger", color: "color-accent-blue" },
  { label: "Lattice", color: "color-accent-purple" },
  { label: "Ese Agency", color: "color-accent-green" },
  { label: "Jasper AI", color: "color-accent-orange" },
  { label: "Sonar", color: "color-accent-pink" },
  { label: "Ross Dugas", color: "color-accent-blue" },
  { label: "Aether", color: "color-accent-purple" },
];

// ─── 3-card section ───
const ANIMATION_CARDS = [
  {
    title: "Design with precision",
    description: "Fine-tune the details of every interaction in a horizontal timeline to bring your exact vision to life.",
    accent: "color-accent-blue",
  },
  {
    title: "Animate faster",
    description: "Do more in less time with a visual workflow that keeps things moving.",
    accent: "color-accent-purple",
  },
  {
    title: "Deliver seamless results",
    description: "Animate, launch, and scale confidently with smooth, consistent performance thanks to GSAP.",
    accent: "color-accent-green",
  },
];

// ─── Made in Kreature slider cards ───
const MIW_CARDS = [
  { name: "GSAP Field", author: "BYQ Studio", type: "Template", tag: "Interactions w/ GSAP", accent: "color-accent-blue" },
  { name: "Noura", author: "Template Supply", type: "Template", tag: "Interactions w/ GSAP", accent: "color-accent-purple" },
  { name: "Kaleo", author: "Lucas Gusso", type: "Template", tag: "Interactions w/ GSAP", accent: "color-accent-green" },
  { name: "Woodland Architects", author: "Zoya Aqib", type: "Template", tag: "Interactions w/ GSAP", accent: "color-accent-orange" },
  { name: "Willem", author: "Osmo", type: "Cloneable", tag: "Interactions w/ GSAP", accent: "color-accent-pink" },
  { name: "Sonar Music", author: "Niccolo Miranda & Ilja van Eck", type: "Customer", tag: "GSAP", accent: "color-accent-blue" },
  { name: "Jasper AI", author: "OFF+BRAND & Josh Jacobs", type: "Customer", tag: "GSAP", accent: "color-accent-purple" },
  { name: "Docusign", author: "BASIC/DEPT", type: "Customer", tag: "GSAP", accent: "color-accent-green" },
  { name: "Sage East", author: "The Blackpepper Studio", type: "Customer", tag: "GSAP", accent: "color-accent-orange" },
  { name: "HF-11", author: "Joseph Berry", type: "Customer", tag: "GSAP", accent: "color-accent-pink" },
];

// ─── Set in motion tabs ───
const MOTION_TABS = [
  {
    label: "Select",
    title: "Select",
    description: "Target any element and define how it responds with flexible triggers like scroll, hover, and click.",
    accent: "color-accent-blue",
  },
  {
    label: "Animate",
    title: "Animate",
    description: "Bring your vision to life with a wide array of features, including GSAP favorites like SplitText, Staggers, and ScrollTrigger.",
    accent: "color-accent-purple",
  },
  {
    label: "Perfect",
    title: "Perfect",
    description: "Fine-tune every detail on a horizontal timeline where you can scroll, scrub, zoom, and pan with precision.",
    accent: "color-accent-green",
  },
  {
    label: "Reuse",
    title: "Reuse",
    description: "Save time and stay consistent by reusing custom presets anywhere across your site.",
    accent: "color-accent-orange",
  },
];

// ─── Detail-obsessed features ───
const DETAIL_FEATURES = [
  { icon: "◈", title: "Target precisely", description: "Choose precisely what to animate by targeting ids, classes, custom attributes, and custom query selectors.", accent: "color-accent-blue" },
  { icon: "◇", title: "Build custom actions", description: "Build custom actions with total control over duration, ease, and CSS property changes.", accent: "color-accent-purple" },
  { icon: "⟐", title: "Custom trigger events", description: "Trigger actions with custom events using custom code.", accent: "color-accent-green" },
  { icon: "▣", title: "Responsive interactions", description: "Tailor interactions to breakpoints to ensure they look good on every device.", accent: "color-accent-orange" },
  { icon: "◉", title: "Reduced motion support", description: "Adapt designs for reduced motion so sites are accessible to all users.", accent: "color-accent-pink" },
];

// ─── Integrations ───
const INTEGRATIONS = [
  { name: "After Effects / Lottie", desc: "Import Lottie animations for complex motion graphics." },
  { name: "Spline", desc: "Embed 3D scenes for immersive experiences." },
  { name: "Rive", desc: "Incorporate interactive vector graphics." },
  { name: "GSAP", desc: "Extend interactions with full GSAP code and custom components." },
];

// ─── Testimonials ───
const TESTIMONIALS = [
  {
    quote: "Right out of the box, this latest version of Kreature Interactions is a total game-changer [...] allowing us to focus on delivering next-level animations for our clients faster and more creatively.",
    author: "Joseph Berry",
    role: "Founder, JB Studio",
    accent: "color-accent-blue",
  },
  {
    quote: "I love how you can preview your animations on a highly visual timeline, without having to publish your site first. This instant feedback means that [...] it's easier than ever to tweak animations to get them just right.",
    author: "Riziki Nielson",
    role: "Senior Digital Designer, Kvalifik",
    accent: "color-accent-purple",
  },
  {
    quote: "Integrating GSAP directly in Kreature is a cheat code: the GSAP ecosystem is just one click away, in a delightful visual and code-free interface. I can [...] spin up reusable interactions that power hundreds of pages in an instant.",
    author: "Thomas Bosc",
    role: "Lead Kreature Developer, Lattice",
    accent: "color-accent-green",
  },
];

// ─── FAQ data ───
const FAQ_ITEMS = [
  {
    q: "What performance considerations should I know when adding interactions to my Kreature site?",
    a: "Kreature automatically optimizes interactions for performance, but you can enhance site speed by using interactions strategically where they add the most value to the user experience. Our GSAP integration ensures smooth, reliable animations across all browsers, while features like interaction presets help you reuse animations efficiently without duplicating code.",
  },
  {
    q: "What tools integrate with Kreature for advanced website animations?",
    a: "Kreature integrates with popular animation tools to expand your creative possibilities beyond built-in interactions. For example, you can import Lottie animations created in After Effects for complex motion graphics, embed 3D scenes from Spline for immersive experiences, and incorporate Rive animations for interactive vector graphics. These integrations work through Kreature Interactions, powered by GSAP, allowing you to combine different animation formats within a single project.",
  },
  {
    q: "How do interactive websites improve user experience?",
    a: "Interactive websites improve user experience by providing immediate feedback, creating intuitive navigation flows, and making content more engaging and memorable. When users hover over a button and see it respond, or when content elegantly fades in as they scroll, it creates a sense of polish and professionalism that builds trust. These interactions also help guide users through your site's content hierarchy, making complex information easier to digest and navigate.",
  },
  {
    q: "What interactive design examples can I build with Kreature?",
    a: "With Kreature, you can build interactive elements like hover effects that reveal hidden content, click-triggered dropdown menus, parallax scrolling sections, and animated page transitions. The platform supports advanced interactions, including staggered animations for multiple elements, mouse-movement tracking effects, and integration with animation formats from Lottie, Spline, and Rive.",
  },
  {
    q: "How do I create scroll-triggered animations in Kreature?",
    a: "Kreature's Interactions panel lets you create scroll animations by selecting any element and adding a scroll trigger, which activates when elements enter or leave the viewport. You can control animation timing with the horizontal timeline, or by adjusting properties like opacity, scale, rotation, and position as visitors scroll. The visual interface shows you exactly how animations will behave, and you can preview them in real-time before publishing.",
  },
  {
    q: "What are website interactions?",
    a: "Website interactions are actions that occur in response to user behaviors like click, hover, or scroll. Modern websites use interactions to guide user attention, provide feedback, and create memorable experiences that differentiate brands. Kreature's visual interaction builder, powered by GSAP, lets you create complex animations using an intuitive timeline interface -- no coding required.",
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
      { label: "vs Shopify", href: "/feature/ecommerce" },
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
              <span className="font-heading font-[800] text-lg tracking-tight" style={{ color: V("color-ink") }}>
                Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>
              The all-in-one platform for building, launching, and growing websites -- with powerful interactions and animations built in.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: V("color-mute-soft") }}>
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:opacity-80" style={{ color: V("color-body-mid") }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t" style={{ borderColor: V("color-hairline") }}>
          <p className="text-xs" style={{ color: V("color-mute") }}>
            &copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.
          </p>
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
export default function InteractionsAnimationsFeaturePage() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas"), paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: V("color-accent-blue") }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full blur-[120px] opacity-10" style={{ backgroundColor: V("color-accent-purple") }} />
        </div>
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "900px" }}>
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ color: V("color-accent-blue"), backgroundColor: `color-mix(in srgb, ${V("color-accent-blue")} 10%, transparent)`, border: `1px solid ${V("color-accent-blue")}20` }}
          >
            Interactions & Animations
          </div>
          <h1 className="font-heading font-semibold tracking-tight mb-6" style={{ fontSize: "80px", lineHeight: "83.2px", letterSpacing: "-0.8px", color: V("color-ink") }}>
            Motion that moves the needle
          </h1>
          <p className="text-lg mx-auto mb-10" style={{ color: V("color-body-mid"), maxWidth: "640px", fontSize: "18px", lineHeight: "28.8px" }}>
            Create interactive web experiences that differentiate, delight, and convert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/signup" className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90" style={{ backgroundColor: V("color-accent-blue"), borderRadius: "4px" }}>
              Get started -- it's free<Arrow />
            </a>
          </div>
        </div>
        {/* Showcase image grid */}
        <div className="mx-auto px-5 sm:px-8 mt-16 relative z-10" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {SHOWCASE_SCREENSHOTS.map((s, i) => (
              <div key={i} className="rounded-lg overflow-hidden border" style={{ backgroundColor: `color-mix(in srgb, ${V(s.color)} 8%, transparent)`, borderColor: V("color-hairline"), aspectRatio: "4/3" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xs font-medium" style={{ color: V(s.color) }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust bar ─── */}
      <section style={{ backgroundColor: V("color-canvas"), paddingTop: "0px", paddingBottom: "60px" }}>
        <div className="mx-auto px-5 sm:px-8 text-center" style={{ maxWidth: "1200px" }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-6" style={{ color: V("color-mute") }}>Trusted by teams at</div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["IDEO", "Monday.com", "BBDO", "The New York Times", "TED", "Docusign"].map((n) => (
              <span key={n} className="text-sm font-semibold" style={{ color: V("color-mute") }}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Advanced web animations ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>
              Advanced web animations are more achievable than ever
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ANIMATION_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl overflow-hidden border group transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${V(card.accent)} 10%, transparent)` }}>
                  <span className="text-3xl" style={{ color: V(card.accent) }}>&#9670;</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-3" style={{ fontSize: "24px", lineHeight: "32px", color: V("color-ink") }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── #MadeInKreature ─── */}
      <section style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: V("color-accent-purple") }}>#MadeInKreature</div>
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "48px", lineHeight: "52px", color: V("color-ink") }}>
              Motion isn't just flair. It's function.
            </h2>
            <p className="text-base mx-auto" style={{ color: V("color-body-mid"), maxWidth: "560px", fontSize: "16px", lineHeight: "25.6px" }}>
              It guides attention, tells stories, and drives results. Explore standout animations made by the Kreature community.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {MIW_CARDS.map((card) => (
              <div key={card.name} className="rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="h-32 flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${V(card.accent)} 8%, transparent)` }}>
                  <span className="text-xs font-medium" style={{ color: V(card.accent) }}>{card.name}</span>
                </div>
                <div className="p-3">
                  <div className="text-xs font-medium mb-1" style={{ color: V("color-ink") }}>{card.name}</div>
                  <div className="text-[11px] mb-1" style={{ color: V("color-mute") }}>{card.author}</div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ color: V("color-mute-soft"), backgroundColor: V("color-canvas-soft") }}>{card.type}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ color: V(card.accent), backgroundColor: `color-mix(in srgb, ${V(card.accent)} 10%, transparent)` }}>{card.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Set your site in motion ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-14">
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>
              Set your site in motion
            </h2>
            <p className="text-base mx-auto" style={{ color: V("color-body-mid"), maxWidth: "640px", fontSize: "16px", lineHeight: "25.6px" }}>
              Design unique, expressive interactions visually -- with the full power of GSAP -- right within Kreature.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {MOTION_TABS.map((tab) => (
              <div key={tab.label} className="rounded-xl p-8 border transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: V(tab.accent), backgroundColor: `color-mix(in srgb, ${V(tab.accent)} 10%, transparent)` }}>
                  {tab.label}
                </div>
                <h3 className="font-semibold mb-3" style={{ fontSize: "24px", lineHeight: "32px", color: V("color-ink") }}>{tab.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{tab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Designed for the detail-obsessed ─── */}
      <section style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>
              Designed for the detail-obsessed
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {DETAIL_FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl p-6 border text-center transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mx-auto mb-4" style={{ backgroundColor: `color-mix(in srgb, ${V(f.accent)} 12%, transparent)`, color: V(f.accent) }}>
                  {f.icon}
                </div>
                <h4 className="font-semibold mb-2" style={{ fontSize: "16px", color: V("color-ink") }}>{f.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: V("color-body-mid") }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Get started CTA ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15" style={{ backgroundColor: V("color-accent-blue") }} />
        </div>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "48px", lineHeight: "52px", color: V("color-ink") }}>Get started</h2>
              <p className="text-base mb-8" style={{ color: V("color-body-mid"), fontSize: "16px", lineHeight: "25.6px" }}>
                Build expressive animations that grab attention, bring your brand to life, and drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/signup" className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90" style={{ backgroundColor: V("color-accent-blue"), borderRadius: "4px" }}>
                  Try Kreature today<Arrow />
                </a>
                <a href="/product-tour" className="text-base font-medium px-8 py-4 rounded transition-colors border" style={{ color: V("color-ink"), borderColor: V("color-hairline"), borderRadius: "4px" }}>
                  Watch demo
                </a>
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline"), minHeight: "350px" }}>
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl" style={{ color: V("color-accent-blue") }}>&#9670;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Integrations ─── */}
      <section style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: V("color-accent-green") }}>Integrations and extensions</div>
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "48px", lineHeight: "52px", color: V("color-ink") }}>
              Easily add animations built with your favorite tools
            </h2>
            <p className="text-base mx-auto" style={{ color: V("color-body-mid"), maxWidth: "560px", fontSize: "16px", lineHeight: "25.6px" }}>
              Extend interactions with GSAP code and custom components.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INTEGRATIONS.map((item) => (
              <div key={item.name} className="rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <h4 className="font-semibold mb-2" style={{ fontSize: "18px", color: V("color-ink") }}>{item.name}</h4>
                <p className="text-sm leading-relaxed" style={{ color: V("color-body-mid") }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold tracking-tight mb-4" style={{ fontSize: "48px", lineHeight: "52px", color: V("color-ink") }}>
              See what top creators love about interactions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-xl p-8 border" style={{ backgroundColor: V("color-canvas"), borderColor: V("color-hairline") }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `color-mix(in srgb, ${V(t.accent)} 12%, transparent)`, color: V(t.accent) }}>
                  &ldquo;
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: V("color-body-mid") }}>&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm" style={{ color: V("color-ink") }}>{t.author}</div>
                  <div className="text-xs" style={{ color: V("color-mute") }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ backgroundColor: V("color-canvas"), paddingTop: "100px", paddingBottom: "100px" }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: V("color-canvas-soft"), paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15" style={{ backgroundColor: V("color-accent-blue") }} />
        </div>
        <div className="mx-auto px-5 sm:px-8 text-center relative z-10" style={{ maxWidth: "700px" }}>
          <h2 className="font-heading font-semibold tracking-tight mb-5" style={{ fontSize: "56px", lineHeight: "58.24px", color: V("color-ink") }}>
            Make creativity your competitive edge
          </h2>
          <p className="text-lg mb-8 mx-auto" style={{ color: V("color-body-mid"), maxWidth: "540px", fontSize: "18px", lineHeight: "28.8px" }}>
            Bring your boldest ideas to life with Kreature.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/signup" className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90" style={{ backgroundColor: V("color-accent-blue"), borderRadius: "4px" }}>
              Get started -- it's free<Arrow />
            </a>
            <a href="/product-tour" className="text-base font-medium px-8 py-4 rounded transition-colors border" style={{ color: V("color-ink"), borderColor: V("color-hairline"), borderRadius: "4px" }}>
              Watch demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
