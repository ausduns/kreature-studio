"use client";

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const ICONS_CDN = "https://dhygzobemt712.cloudfront.net/Icons/Light/64px";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY ─── */
const T = {
  h1:    { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2:    { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3:    { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  heroSub: { fontSize: "20px", fontWeight: 400, lineHeight: "1.5" } as React.CSSProperties,
  bodyLg: { fontSize: "18px", fontWeight: 400, lineHeight: "28.8px" } as React.CSSProperties,
  body:   { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", fontWeight: 400, lineHeight: "22.4px" } as React.CSSProperties,
  caption:{ fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn:    { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", letterSpacing: "-0.16px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  quote:  { fontSize: "32px", fontWeight: 400, lineHeight: "44.8px" } as React.CSSProperties,
};

/* ─── WORDMARK ─── */
function Wordmark({ large }: { large?: boolean }) {
  return (
    <span className="font-semibold tracking-[-0.02em]" style={{ color: V("color-ink"), fontSize: large ? "24px" : "20px", lineHeight: large ? "31.2px" : "28px" }}>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
}

/* ─── HELPERS ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none" aria-hidden="true">&rarr;</span>;
}

/* ─── BADGE ─── */
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[0.65rem] font-semibold uppercase px-1.5 py-0.5 rounded-sm ${className || ""}`}
      style={{ background: V("color-accent-blue"), color: "#fff" }}>
      {children}
    </span>
  );
}

/* ─── SECTION CONTAINER ─── */
function Section({ bg, children, className }: { bg?: "soft" | "dark"; children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-5 sm:px-8 ${className || ""}`}
      style={{
        background: bg === "soft" ? V("color-canvas-soft") : bg === "dark" ? V("color-ink") : V("color-canvas"),
        paddingTop: "112px",
        paddingBottom: "112px",
      }}>
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── CTAs ─── */
function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center rounded-sm text-white transition-opacity hover:opacity-90"
      style={{ ...T.btn, background: V("color-accent-blue") }}>
      {children}
    </a>
  );
}

function OutlineBtn({ href, children, dark }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a href={href} className="inline-flex items-center rounded-sm transition-colors"
      style={{
        ...T.btn,
        background: "transparent",
        color: dark ? "#fff" : V("color-ink"),
        border: `1px solid ${dark ? "rgba(255,255,255,0.2)" : V("color-hairline")}`,
      }}>
      {children}
    </a>
  );
}

/* ─── DATA ─── */

const HERO_LOGOS = [
  { name: "NCR", src: `${LOGOS_CDN}/ncr.svg`, stat: "10x", sub: "In cost savings annually" },
  { name: "Dropbox", src: `${LOGOS_CDN}/dropbox.svg`, stat: "67%", sub: "decrease in dev ticketing" },
  { name: "OrangeTheory", src: `${LOGOS_CDN}/orangetheory.svg`, stat: "$6M", sub: "in cost savings annually" },
  { name: "Walker & Dunlop", src: `${LOGOS_CDN}/walker-dunlop.svg`, stat: "56%", sub: "increase in form fills" },
  { name: "Docusign", src: `${LOGOS_CDN}/docusign.svg`, stat: "1,170%", sub: "increase in traffic YoY" },
  { name: "ABM", src: `${LOGOS_CDN}/abm.svg`, stat: "$200M", sub: "in new pipeline generated" },
  { name: "Lattice", src: `${LOGOS_CDN}/lattice.svg`, stat: "+20%", sub: "increase in site-wide conversion" },
];

const MARQUEE_LOGOS = [
  { name: "Verifone", src: `${LOGOS_CDN}/verifone.svg` },
  { name: "NCR", src: `${LOGOS_CDN}/ncr.svg` },
  { name: "monday.com", src: `${LOGOS_CDN}/monday.svg` },
  { name: "Spotify", src: `${LOGOS_CDN}/spotify.svg` },
  { name: "TED", src: `${LOGOS_CDN}/ted.svg` },
  { name: "Dropbox", src: `${LOGOS_CDN}/dropbox.svg` },
  { name: "Greenhouse", src: `${LOGOS_CDN}/greenhouse.svg` },
  { name: "Clear", src: `${LOGOS_CDN}/clear.svg` },
  { name: "OrangeTheory", src: `${LOGOS_CDN}/orangetheory.svg` },
  { name: "Checkout.com", src: `${LOGOS_CDN}/checkout.svg` },
  { name: "SoundCloud", src: `${LOGOS_CDN}/soundcloud.svg` },
  { name: "Walker & Dunlop", src: `${LOGOS_CDN}/walker-dunlop.svg` },
  { name: "Reddit", src: `${LOGOS_CDN}/reddit.svg` },
  { name: "Docusign", src: `${LOGOS_CDN}/docusign.svg` },
  { name: "ABM", src: `${LOGOS_CDN}/abm.svg` },
  { name: "NYT", src: `${LOGOS_CDN}/the-new-york-times.svg` },
  { name: "IDEO", src: `${LOGOS_CDN}/ideo.svg` },
  { name: "Upwork", src: `${LOGOS_CDN}/upwork.svg` },
  { name: "Discord", src: `${LOGOS_CDN}/discord.svg` },
  { name: "Lattice", src: `${LOGOS_CDN}/lattice.svg` },
];

const ICON_CARDS = [
  {
    icon: `${ICONS_CDN}/Interactions.svg`,
    title: "Speed and quality — without compromise",
    desc: "Launch high-performing campaigns on your timeline. Kreature’s visual development platform empowers your team to build, test, and deploy without relying on engineering resources — so you can move at the speed of opportunity.",
  },
  {
    icon: `${ICONS_CDN}/ChartLineIncrease.svg`,
    title: "Content that converts",
    desc: "Create and optimize landing pages, microsites, and full campaign experiences with built-in A/B testing, personalization, and analytics. Every element is designed to drive conversions and measurable ROI.",
  },
  {
    icon: `${ICONS_CDN}/DollarDecrease.svg`,
    title: "Reduced total cost of ownership",
    desc: "Consolidate your marketing tech stack. Kreature replaces your CMS, landing page builder, A/B testing tool, and hosting — eliminating redundant costs while giving your team more capabilities than ever before.",
  },
];

const STICKY_ROWS = [
  {
    title: "Build and launch",
    desc: "Create campaign pages, landing experiences, and full microsites visually — without writing code. Use pre-built components, AI-powered page generation, and your brand’s design system to go from idea to live in hours, not weeks. Every page is responsive, accessible, and optimized for performance out of the box.",
    img: `${CDN}/689f328cf64d1090a5f4d8a9_stikcy%201.avif`,
  },
  {
    title: "Measure and iterate",
    desc: "Run A/B tests, track conversions, and optimize performance with native analytics built directly into the platform. Identify what’s working, double down on winners, and continuously improve your campaign performance — all without jumping between tools or waiting for data pipelines.",
    img: `${CDN}/689f328c2d0082005f682440_sticky%202.avif`,
  },
  {
    title: "Integrate and extend",
    desc: "Connect Kreature to your entire marketing stack with native integrations for CRM, email, analytics, and ad platforms. Extend functionality with custom code when you need it, and leverage MACH-certified APIs to build exactly the workflow your team needs.",
    img: `${CDN}/689f328c112e7953b97d68eb_sticky%203.avif`,
  },
];

const TESTIMONIALS = [
  {
    quote: "Kreature has given us the ability to move at the speed of our business. We can launch campaigns, test new ideas, and iterate on what's working without the bottlenecks we used to face with traditional development cycles.",
    name: "Elizabeth Walton Egan",
    role: "CMO",
    co: "Lattice",
    img: `${CDN}/68921d7f25a16ed1eae3e911_66952004d3d1489d86a9e1d7_1662084310247.jpeg`,
    logo: `${LOGOS_CDN}/lattice.svg`,
  },
  {
    quote: "The speed at which our team can now execute is remarkable. What used to take weeks of back-and-forth between marketing and engineering now happens in days, and the quality of the output has only improved.",
    name: "Sarah Scharf",
    role: "VP Product & Corporate Marketing",
    co: "Vanta",
    img: `${CDN}/68921cf78f85bc3f28819f2b_5e975f711a44620807bbec39_sarah-smith.jpeg`,
    logo: `${LOGOS_CDN}/vanta.svg`,
  },
  {
    quote: "Kreature has transformed how our global marketing teams operate. We've consolidated multiple tools into one platform, reduced our total cost of ownership, and empowered our regional teams to launch localized campaigns independently.",
    name: "Jose Juan 'JJ' Lopez",
    role: "Global Lead Digital Marketing",
    co: "Dormakaba",
    img: `${CDN}/69aeeb3c91785a5a3601a05b_IMG_2954.jpeg`,
    logo: `${LOGOS_CDN}/dormakaba.svg`,
  },
  {
    quote: "As a marketing director, I need a platform that lets my team move fast without sacrificing quality or brand consistency. Kreature gives us that balance — creative freedom with the guardrails that keep everything on brand.",
    name: "Annette Read",
    role: "Marketing Director",
    co: "LandC Mortgage",
    img: `${CDN}/68921e6345cbc87ea502575d_annette-read.jpeg`,
    logo: `${LOGOS_CDN}/landc.svg`,
  },
  {
    quote: "Kreature doesn't just make us faster — it makes us better. Our brand team can now own the entire web experience end to end, from concept to conversion, and the results speak for themselves.",
    name: "Josh Jacobs",
    role: "Staff Brand Designer",
    co: "Jasper",
    img: `${CDN}/68921e0825a16ed1eae41bb0_681b8fc22cf401f043cd167a_Asset-3DSpeaker-1-Headshot.jpeg`,
    logo: `${LOGOS_CDN}/jasper.svg`,
  },
];

const SCALE_CARDS = [
  {
    icon: `${ICONS_CDN}/Scalability.svg`,
    title: "Enterprise scalability",
    desc: "Grow from your first campaign to thousands without ever hitting a platform ceiling. Kreature’s infrastructure scales automatically with your traffic and content volume.",
  },
  {
    icon: `${ICONS_CDN}/UserCollaborate.svg`,
    title: "Team collaboration",
    desc: "Give every marketer, designer, and stakeholder a seat at the table. Role-based permissions, approval workflows, and version control keep everyone aligned without slowing anyone down.",
  },
  {
    icon: `${ICONS_CDN}/CloudHosting.svg`,
    title: "Reliable cloud hosting",
    desc: "Rest easy with 99.99% uptime, global CDN, automatic backups, and enterprise-grade security. No server management, no maintenance windows, no surprises.",
  },
  {
    icon: `${ICONS_CDN}/HandHug.svg`,
    title: "Dedicated support",
    desc: "Get the help you need when you need it. Enterprise customers get a dedicated customer success manager, priority support, and access to Kreature’s partner ecosystem for specialized needs.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How does Kreature help performance marketers move faster?",
    a: "Kreature eliminates the traditional bottleneck between marketing and engineering. Our visual development platform lets marketers build, test, and deploy campaign pages without writing code. AI-powered tools accelerate copy generation, design iteration, and content management. With built-in analytics and A/B testing, you can measure results and optimize in real time — all from a single platform.",
  },
  {
    q: "Can Kreature replace my current landing page builder and CMS?",
    a: "Yes. Kreature combines the flexibility of a professional-grade CMS with the speed of a landing page builder, plus built-in A/B testing, personalization, analytics, and hosting. Instead of stitching together multiple tools and dealing with integration headaches, your team gets one unified platform that covers the entire campaign lifecycle.",
  },
  {
    q: "What kind of ROI can performance marketers expect from Kreature?",
    a: "Our customers consistently report significant ROI across multiple dimensions: reduced time-to-launch (from weeks to hours), decreased reliance on engineering resources (67% fewer dev tickets on average), lower total cost of ownership by consolidating tools, and improved conversion rates through built-in optimization capabilities. Many customers measure ROI in millions of dollars annually.",
  },
  {
    q: "Does Kreature integrate with our existing marketing stack?",
    a: "Absolutely. Kreature offers native integrations with leading CRM, analytics, email marketing, and advertising platforms. Our MACH-certified APIs and webhook infrastructure make it easy to build custom integrations when needed. Your data flows seamlessly between Kreature and the tools your team already relies on.",
  },
  {
    q: "How does Kreature handle localization for global campaigns?",
    a: "Kreature’s localization features let you manage multi-language and multi-region campaigns from a single instance. Translate content, adapt imagery, and customize experiences for different markets without duplicating your entire site. Regional teams can operate independently while staying within brand guardrails set by your global team.",
  },
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

/* ─── PAGE ─── */

export default function PerformanceMarketersPage() {
  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>

      <main>

        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
            ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: V("color-canvas"), paddingTop: "clamp(40px, 5vw, 96px)", paddingBottom: "clamp(40px, 5vw, 96px)" }}>
          <div className="relative z-10 px-5 sm:px-8">
            <div className="max-w-[1440px] mx-auto">

              {/* Subheading */}
              <p className="text-sm uppercase tracking-wider mb-6" style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.08em", color: V("color-accent-blue") }}>
                Performance marketers
              </p>

              {/* H1 + subtext */}
              <div className="mb-12">
                <h1 className="font-heading font-semibold tracking-[-0.01em] mb-6 max-w-[900px]" style={{ ...T.h1, color: V("color-ink") }}>
                  The agentic web marketing platform that drives growth
                </h1>
                <p className="max-w-[650px]" style={{ ...T.heroSub, color: V("color-body-mid") }}>
                  Bring campaigns to life without bottlenecks or dependencies — so your team can launch, iterate, and scale your performance marketing initiatives at the speed your growth demands.
                </p>
              </div>

              {/* CTA */}
              <div className="mb-12">
                <PrimaryBtn href="/enterprise/contact-sales">Contact sales <Arrow /></PrimaryBtn>
              </div>

              {/* Hero images */}
              <div className="relative w-full mb-14 rounded-lg overflow-hidden" style={{ borderRadius: "12px", minHeight: "400px" }}>
                <img
                  src={`${CDN}/689f328c98fe684bb6739dbe_hero.avif`}
                  alt="Kreature platform dashboard"
                  className="w-full h-auto"
                  loading="eager"
                />
                <img
                  src={`${CDN}/689f328ca951685640a383ab_floating%201.avif`}
                  alt=""
                  className="absolute top-8 -right-4 w-64 h-auto pointer-events-none hidden lg:block"
                  loading="lazy"
                />
                <img
                  src={`${CDN}/689f328c10f2dddafd36a382_floating%202.jpg`}
                  alt=""
                  className="absolute bottom-8 -left-4 w-56 h-auto pointer-events-none hidden lg:block"
                  loading="lazy"
                />
              </div>

              {/* Logo marquee with stats */}
              <div className="flex flex-wrap gap-x-10 gap-y-6 items-center justify-center opacity-50">
                {HERO_LOGOS.map((l) => (
                  <div key={l.name} className="flex items-center gap-3">
                    <img src={l.src} alt={l.name} className="h-5 w-auto" loading="lazy" />
                    {l.stat && (
                      <div className="flex flex-col">
                        <span style={{ fontSize: "14px", fontWeight: 600, color: V("color-ink") }}>{l.stat}</span>
                        <span style={{ fontSize: "11px", color: V("color-mute") }}>{l.sub}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — PROBLEM STATEMENT
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading font-semibold leading-[1.04] mb-6" style={{ ...T.h2, color: V("color-ink") }}>
              Can your CMS keep up with your growth goals?
            </h2>
            <p style={{ ...T.bodyLg, color: V("color-body") }}>
              Traditional content management systems were built for a different era. They force marketing teams to choose between speed and quality, between creative control and technical constraints. When every day of delay costs you conversions, you can&apos;t afford a platform that slows you down. Kreature is purpose-built for the way modern performance marketing teams work: fast, iterative, and relentlessly focused on results.
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — THREE ICON CARDS
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold leading-[1.04]" style={{ ...T.h2, color: V("color-ink") }}>
              Unlock growth at scale with Kreature
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ICON_CARDS.map((card) => (
              <div key={card.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center"
                  style={{ background: V("color-accent-blue-soft") }}>
                  <img src={card.icon} alt="" className="w-8 h-8" loading="lazy" />
                </div>
                <h3 className="mb-4" style={{ ...T.h3, color: V("color-ink") }}>{card.title}</h3>
                <p style={{ ...T.body, color: V("color-body-mid") }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — STICKY SCROLL FEATURES
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="mb-16">
            <h2 className="font-heading font-semibold leading-[1.04]" style={{ ...T.h2, color: V("color-ink") }}>
              How Kreature&apos;s platform works
            </h2>
          </div>

          <div className="space-y-24">
            {STICKY_ROWS.map((row, i) => (
              <div key={row.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-sm uppercase tracking-wider mb-4" style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.08em", color: V("color-accent-blue") }}>
                    Step {i + 1}
                  </p>
                  <h3 className="mb-6" style={{ fontSize: "40px", fontWeight: 600, lineHeight: "44px", color: V("color-ink") }}>
                    {row.title}
                  </h3>
                  <p style={{ ...T.bodyLg, color: V("color-body-mid") }}>{row.desc}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={row.img}
                    alt={row.title}
                    className="w-full h-auto rounded-lg"
                    style={{ borderRadius: "12px" }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — WORDPRESS COMPARISON
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading font-semibold leading-[1.04] mb-6" style={{ ...T.h2, color: V("color-ink") }}>
                Considering a switch from WordPress?
              </h2>
              <p className="mb-8" style={{ ...T.bodyLg, color: V("color-body-mid") }}>
                WordPress was built for blogging, not for the demands of modern performance marketing. Plugin bloat slows down your site, security vulnerabilities put your data at risk, and the endless maintenance distracts from what actually matters: driving growth. Kreature gives you a visual, composable platform with enterprise-grade hosting, built-in security, and zero maintenance — so your team can focus on campaigns, not keeping the lights on.
              </p>
              <OutlineBtn href="/enterprise/contact-sales">See how Kreature compares <Arrow /></OutlineBtn>
            </div>
            <div>
              <img
                src={`${CDN}/689f1e506a1639209b05455a_wordpress%20vs%20webflow%20.avif`}
                alt="WordPress vs Kreature comparison"
                className="w-full h-auto rounded-lg"
                style={{ borderRadius: "12px" }}
                loading="lazy"
              />
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — TESTIMONIALS
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="mb-14">
            <h2 className="font-heading font-semibold leading-[1.04]" style={{ ...T.h2, color: V("color-ink") }}>
              Leading marketing teams choose Kreature
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name}
                className="rounded-lg p-8 flex flex-col"
                style={{
                  borderRadius: "12px",
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}>
                <blockquote className="mb-8 flex-1" style={{ ...T.body, color: V("color-body"), fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-auto pt-6" style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-medium" style={{ ...T.bodySm, fontWeight: 500, color: V("color-ink") }}>
                      {t.name}
                    </div>
                    <div style={{ ...T.caption, color: V("color-mute") }}>
                      {t.role}, {t.co}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 7 — PLATFORM BUILT FOR SCALE
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold leading-[1.04]" style={{ ...T.h2, color: V("color-ink") }}>
              A platform built for scale
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SCALE_CARDS.map((card) => (
              <div key={card.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-lg flex items-center justify-center"
                  style={{ background: V("color-canvas-soft") }}>
                  <img src={card.icon} alt="" className="w-7 h-7" loading="lazy" />
                </div>
                <h3 className="mb-3" style={{ ...T.h3, color: V("color-ink") }}>{card.title}</h3>
                <p style={{ ...T.bodySm, color: V("color-body-mid") }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 8 — FAQ
            ═══════════════════════════════════════════ */}
        <Section>
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading font-semibold leading-[1.04]" style={{ ...T.h2, color: V("color-ink") }}>
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-1">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="group py-6" style={{ borderBottom: `1px solid ${V("color-hairline")}` }}>
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span style={{ ...T.h3, color: V("color-ink") }}>{item.q}</span>
                    <span className="text-2xl transition-transform group-open:rotate-45" style={{ color: V("color-mute") }}>+</span>
                  </summary>
                  <p className="mt-4 pr-8" style={{ ...T.body, color: V("color-body-mid") }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 9 — BUSINESS VALUE CALCULATOR CTA
            ═══════════════════════════════════════════ */}
        <Section bg="soft">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading font-semibold leading-[1.04] mb-6" style={{ ...T.h2, color: V("color-ink") }}>
                See the business impact of moving to Kreature
              </h2>
              <p className="mb-8" style={{ ...T.bodyLg, color: V("color-body-mid") }}>
                Calculate your potential savings and revenue gains with our ROI calculator. See how much your team could save by consolidating tools, reducing development dependencies, and accelerating campaign velocity.
              </p>
              <PrimaryBtn href="/enterprise/contact-sales">Get your ROI estimate <Arrow /></PrimaryBtn>
            </div>
            <div>
              <img
                src={`${CDN}/695e887fc945b678052de100_verifone.avif`}
                alt="Business value calculator preview"
                className="w-full h-auto rounded-lg"
                style={{ borderRadius: "12px" }}
                loading="lazy"
              />
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════
            SECTION 10 — LOGO MARQUEE
            ═══════════════════════════════════════════ */}
        <section className="py-12 overflow-hidden border-y" style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}>
          <div className="flex gap-8 animate-[marquee_40s_linear_infinite] w-max">
            {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((l, i) => (
              <div key={i} className="flex items-center shrink-0">
                <img src={l.src} alt={l.name} className="h-6 w-auto opacity-30" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 11 — BOTTOM CTA
            ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: V("color-ink"), paddingTop: "clamp(3rem,8vw,7rem)", paddingBottom: "clamp(3rem,8vw,7rem)" }}>
          <div className="max-w-[1440px] mx-auto relative z-10 px-5 sm:px-8">
            <div className="max-w-[700px] mx-auto text-center">
              <h2 className="font-heading font-semibold leading-[1.04] mb-6" style={{ ...T.h2, color: V("color-canvas") }}>
                Schedule a demo
              </h2>
              <p className="mb-8" style={{ ...T.heroSub, color: V("color-mute-soft") }}>
                See how Kreature empowers performance marketing teams to launch faster, test smarter, and scale further. Let us show you what the platform can do for your growth goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryBtn href="/enterprise/contact-sales">Talk to us <Arrow /></PrimaryBtn>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="py-16 px-5 sm:px-8" style={{ borderTop: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}>
        <div className="max-w-[1440px] mx-auto">

          {/* Wordmark + tagline */}
          <div className="mb-12">
            <Wordmark large />
            <p className="mt-2" style={{ ...T.bodySm, color: V("color-body-mid") }}>
              The all-in-one platform for building, launching, and growing websites.
            </p>
          </div>

          {/* 7-column nav */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(FOOTER).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="font-semibold mb-6" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px", color: V("color-ink") }}>
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item: string) => (
                    <li key={item}>
                      <a href="#" className="text-sm hover:underline inline-flex items-center gap-1" style={{ ...T.bodySm, color: V("color-body-mid") }}>
                        {item}
                        {item === "AEO" && <Badge>New</Badge>}
                        {item === "Careers" && <span className="text-[0.6rem] font-semibold uppercase" style={{ color: V("color-accent-green") }}>We&apos;re hiring</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
            <p style={{ fontSize: "12px", color: V("color-mute") }}>
              &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: "12px", color: V("color-mute") }}>
              <a href="#" className="hover:underline">Made in Kreature</a>
              {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map(p => (
                <a key={p} href="#" className="hover:underline">{p}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Marquee animation keyframe */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
