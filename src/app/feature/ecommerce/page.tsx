"use client";

/* ─── Design token helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Styles ─── */
const S = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodyLg: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  eyebrow: { fontSize: "15px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── Shared components ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-heading font-[800] text-xl tracking-tight ${className}`} style={{ color: V("color-ink") }}>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
}

function Section({
  bg,
  children,
  className,
  id,
}: {
  bg?: "soft" | "dark" | "blue";
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)] ${className || ""}`}
      style={{
        background:
          bg === "soft"
            ? V("color-canvas-soft")
            : bg === "dark"
              ? V("color-ink")
              : bg === "blue"
                ? V("color-accent-blue")
                : V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── Testimonial card ─── */
function Testimonial({
  quote,
  name,
  role,
  img,
}: {
  quote: string;
  name: string;
  role: string;
  img?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="italic text-lg leading-relaxed" style={{ color: V("color-body-mid") }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {img && (
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0" style={{ background: V("color-canvas-mid") }}>
            <img src={img} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <div className="font-semibold" style={{ ...S.bodySm, color: V("color-ink") }}>{name}</div>
          <div style={{ ...S.caption, color: V("color-mute") }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── DESIGN SECTION DATA ─── */
const DESIGN_FEATURES = [
  {
    title: "Create end-to-end customer experiences",
    desc: "Create pixel-perfect, branded purchase flows for your customers.",
    testimonial: {
      quote: "We are a design-led brand, and we strive to deliver an ecommerce experience that reflects that. Webflow allows us to do that.",
      name: "Jameel Mohammed",
      role: "Founder, Khiry",
    },
  },
  {
    title: "Design around your unique products",
    desc: "Feature the product details that matter most. Highlight specific product features, images, and other information with customizable product fields.",
  },
  {
    title: "Customize your cart and checkout",
    desc: "Make the sale with cart and checkout experiences that match the rest of your store.",
  },
  {
    title: "Complete layout control — without coding",
    desc: "Customize the layout of your homepage and gallery pages to make an impression on visitors.",
    testimonial: {
      quote: "As a designer, Webflow allows me to create a stunning and unique Ecommerce site with almost anything: animations, effects and a full responsive layout without having to dive deep into the code.",
      name: "Maximilian Muesgens",
      role: "Designer, Format.otf",
    },
  },
  {
    title: "Customize transactional emails",
    desc: "Upload your own logo and tweak colors to keep your receipt and order notification emails on brand.",
    cta: { label: "Learn more about ecommerce email", href: "#" },
  },
  {
    title: "Craft custom interactions and animations",
    desc: "Take your store beyond the typical with completely customizable interactions and animations.",
    cta: { label: "Learn more about interactions", href: "/feature/interactions-animations" },
  },
];

/* ─── SELL SECTION DATA ─── */
const SELL_FEATURES = [
  {
    title: "Sell physical or digital goods",
    desc: "T-shirts, prints, classes, stock photos — sell any physical product, digital good or service.",
    bullets: [
      "Add custom fields to display the right product information",
      "Easily add unique product variants",
      "Create a checkout flow that's tailored to your product types",
    ],
    testimonial: {
      quote: "As someone who's experienced selling physical products, it's just so much easier creating digital ones. It's just nice to see orders coming through for this font and know that the system's all doing it for me.",
      name: "Charli Marie",
      role: "Designer, vlogger, and podcaster",
    },
  },
  {
    title: "Offer custom delivery options",
    desc: "Ship it. Offer takeout. Email deliver it. Tailor your delivery methods to your products.",
    bullets: [
      "Simplify checkout for orders that don't require shipping",
      "Add download links to order confirmation pages and emails",
    ],
  },
  {
    title: "Streamline your shipping process",
    desc: "Effortlessly manage shipping settings and fulfillment.",
    bullets: [
      "Customize shipping regions and rules",
      "Keep your orders synced with shipping software to create shipping labels, and automate order tracking",
    ],
  },
  {
    title: "Let your customers pay — their way",
    desc: "Secure payments powered by Stripe, Apple Pay, Google Pay, and PayPal.",
    testimonial: {
      quote: "Setting up a Stripe integration with our marketplace is something that has been on our roadmap for years, but Webflow allowed us to quickly (and beautifully) put together an online store selling a few of our newest virtual games in just a few days!",
      name: "Lee Rubin",
      role: "Founder, Confetti",
    },
  },
  {
    title: "Stay on top of orders",
    desc: "View order details, update order status, and issue refunds.",
    bullets: [
      "Client-friendly order management dashboard",
      "Customer accounts and order history",
    ],
    note: "(Coming soon)",
  },
  {
    title: "Put taxes on autopilot",
    desc: "Automatically calculate sales tax and VAT for customers in the United States, Canada, the European Union, and Australia.",
  },
  {
    title: "Extend your store with integrations",
    desc: "Connect your store with native integrations or hundreds of apps on Zapier to automate shipping processes, accounting, notifications, and other operational chores.",
    bullets: [
      "Dropship products with Printful",
      "Manage fulfillment with Shippo",
      "Send order details to QuickBooks",
      "Get a text when new orders come in",
      "Collect customer emails in MailChimp",
      "Plus thousands of other possibilities",
    ],
    testimonial: {
      quote: "My Ecommerce clients can manage their customer base with ease thanks to a wealth of third-party integrations through Zapier.",
      name: "George Kerridge",
      role: "Freelance designer and developer",
    },
  },
];

/* ─── GROW SECTION DATA ─── */
const GROW_FEATURES = [
  {
    title: "Build a complete website",
    desc: "Create a full experience around your store.",
    subItems: [
      { title: "Blog smarter", desc: "Build a lifestyle blog around your brand — then feature products directly within posts to drive sales on your store." },
      { title: "Convert with custom landing pages", desc: "Create immersive pages for product launches, seasonal campaigns, coming soon previews, or advertisements." },
    ],
  },
  {
    title: "Automate your on-page SEO",
    desc: "With dynamic embeds, you can automatically generate search-friendly meta titles and descriptions from product page names, blog post titles, case studies, and more.",
  },
  {
    title: "Run impactful campaigns",
    desc: "Use discounts and listed sale prices to run promotions for your customers.",
  },
  {
    title: "Integrate any analytics and optimization tools",
    desc: "Connect your site to Google Analytics with our built-in integration, or easily add code to connect marketing tools for pulling insights or running experiments.",
    testimonial: {
      quote: "Webflow made it really easy to connect our shop with marketing tools like Facebook, Google Analytics, Hotjar and Autopilot so we have a complete end-to-end view of how our customers browse and buy from us.",
      name: "Kane Baker",
      role: "Owner, Self-Made",
    },
  },
  {
    title: "Build and nurture your lead list",
    desc: "Connect your forms to your favorite email platform to build an audience and promote new products, sales, and other promotions.",
  },
  {
    title: "Connect your products to social",
    desc: "Built-in integrations let you connect your product catalog to Facebook, Instagram, and Google, and to run smarter ad campaigns and create more interactive, shoppable social posts.",
  },
];

/* ─── COMPARISONS ─── */
const COMPARISONS = [
  {
    name: "Shopify",
    desc: "A robust platform — but with limited options for site customization, beyond custom development.",
    href: "#",
  },
  {
    name: "WordPress",
    desc: "Open-source, but needs extensive customization, plugins, custom development work, and ongoing maintenance.",
    href: "#",
  },
];

/* ─── CUSTOMER STORIES ─── */
const STORIES = [
  { metric: "10x", label: "In cost savings annually", logo: "Verifone" },
  { metric: "67%", label: "decrease in dev ticketing", logo: "Dropbox" },
  { metric: "$6M", label: "in cost savings annually", logo: "Orangetheory Fitness" },
  { metric: "56%", label: "increase in form fills", logo: "Walker & Dunlop" },
  { metric: "1,170%", label: "increase in traffic YoY", logo: "DocuSign" },
  { metric: "$200M", label: "in new pipeline generated post-site launch", logo: "ABM" },
  { metric: "+20%", label: "increase in site-wide conversion", logo: "Lattice" },
];

/* ─── ALL FEATURES NAV ─── */
const ALL_FEATURES = [
  { group: "Build and Design", items: ["Design", "Edit content", "Interactions", "Page Building", "Collaboration", "Shared Libraries"] },
  { group: "Manage", items: ["CMS", "Hosting", "Security", "Localization"] },
  { group: "Optimize", items: ["Analyze", "Optimize", "SEO", "AEO"] },
  { group: "Extend", items: ["Apps", "Figma to Kreature", "DevLink", "Code Generation", "Ecommerce", "Headless CMS APIs"] },
];

/* ─── PAGE ─── */
export default function EcommerceFeaturePage() {
  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-ink") }}
        >
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[800px]">
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Your products are unique. Your store should be too.
              </h1>

              <p className="max-w-[650px] mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Push the limits of web design and create unique commerce experiences for your
                customers — all while building a business, creating a new revenue stream, and
                strengthening your brand.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
                >
                  Get started — it&apos;s free
                </a>
                <a
                  href="#intro"
                  className="inline-flex items-center transition-colors"
                  style={{
                    ...S.btn,
                    background: "transparent",
                    color: V("color-canvas"),
                    border: `1px solid rgba(255,255,255,0.2)`,
                  }}
                >
                  Learn more about ecommerce
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ DESIGN YOUR STORE ═══════ */}
        <Section id="intro">
          <div className="mb-14 max-w-[750px]">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Design your store, your way — without coding
            </h2>
          </div>

          <div className="space-y-16">
            {DESIGN_FEATURES.map((feat, i) => (
              <div key={feat.title} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div className="order-2 lg:order-1">
                  <h3 className="font-semibold mb-3" style={{ ...S.h3, color: V("color-ink") }}>
                    {feat.title}
                  </h3>
                  <p className="mb-6" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
                    {feat.desc}
                  </p>
                  {feat.testimonial && (
                    <Testimonial
                      quote={feat.testimonial.quote}
                      name={feat.testimonial.name}
                      role={feat.testimonial.role}
                    />
                  )}
                  {feat.cta && (
                    <a
                      href={feat.cta.href}
                      className="inline-flex items-center transition-colors mt-4"
                      style={{ ...S.body, fontWeight: 500, color: V("color-accent-blue") }}
                    >
                      {feat.cta.label} <Arrow />
                    </a>
                  )}
                </div>
                <div className="order-1 lg:order-2">
                  <div
                    className="rounded-xl w-full aspect-[4/3]"
                    style={{
                      background: `linear-gradient(135deg, ${V("color-canvas-soft")}, ${V("color-canvas-mid")})`,
                      border: `1px solid ${V("color-hairline")}`,
                    }}
                  >
                    {/* Placeholder for source images — decorative product UI */}
                    <div className="w-full h-full flex items-center justify-center" style={{ color: V("color-mute-soft") }}>
                      <span className="text-sm">Product UI preview</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ SELL ALL TYPES ═══════ */}
        <Section bg="soft">
          <div className="mb-14 max-w-[750px]">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Sell all types of products
            </h2>
          </div>

          <div className="space-y-16">
            {SELL_FEATURES.map((feat) => (
              <div key={feat.title} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div>
                  <h3 className="font-semibold mb-3" style={{ ...S.h3, color: V("color-ink") }}>
                    {feat.title}
                  </h3>
                  <p className="mb-4" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
                    {feat.desc}
                  </p>
                  {feat.bullets && (
                    <ul className="space-y-2 mb-6">
                      {feat.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2" style={{ ...S.body, color: V("color-body-mid") }}>
                          <span style={{ color: V("color-accent-blue") }}>&#x2022;</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {feat.note && (
                    <p className="italic" style={{ ...S.bodySm, color: V("color-mute") }}>
                      {feat.note}
                    </p>
                  )}
                  {feat.testimonial && (
                    <div className="mt-6">
                      <Testimonial
                        quote={feat.testimonial.quote}
                        name={feat.testimonial.name}
                        role={feat.testimonial.role}
                      />
                    </div>
                  )}
                </div>
                <div>
                  <div
                    className="rounded-xl w-full aspect-[4/3]"
                    style={{
                      background: `linear-gradient(135deg, ${V("color-canvas-soft")}, ${V("color-canvas-mid")})`,
                      border: `1px solid ${V("color-hairline")}`,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center" style={{ color: V("color-mute-soft") }}>
                      <span className="text-sm">Feature UI preview</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ GROW YOUR BUSINESS ═══════ */}
        <Section>
          <div className="mb-14 max-w-[750px]">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Grow your business
            </h2>
          </div>

          <div className="space-y-16">
            {GROW_FEATURES.map((feat) => (
              <div key={feat.title} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div>
                  <h3 className="font-semibold mb-3" style={{ ...S.h3, color: V("color-ink") }}>
                    {feat.title}
                  </h3>
                  <p className="mb-6" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
                    {feat.desc}
                  </p>

                  {feat.subItems && (
                    <div className="space-y-4 mb-6">
                      {feat.subItems.map((sub) => (
                        <div key={sub.title}>
                          <h4 className="font-semibold mb-2" style={{ ...S.h4, color: V("color-ink") }}>
                            {sub.title}
                          </h4>
                          <p style={{ ...S.body, color: V("color-body-mid") }}>{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {feat.testimonial && (
                    <Testimonial
                      quote={feat.testimonial.quote}
                      name={feat.testimonial.name}
                      role={feat.testimonial.role}
                    />
                  )}
                </div>
                <div>
                  <div
                    className="rounded-xl w-full aspect-[4/3]"
                    style={{
                      background: `linear-gradient(135deg, ${V("color-canvas-soft")}, ${V("color-canvas-mid")})`,
                      border: `1px solid ${V("color-hairline")}`,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center" style={{ color: V("color-mute-soft") }}>
                      <span className="text-sm">Feature UI preview</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ COMPARE WITH ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Compare Kreature with
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {COMPARISONS.map((comp) => (
              <div
                key={comp.name}
                className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)]"
                style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
              >
                <h3 className="font-semibold mb-3" style={{ ...S.h3, color: V("color-ink") }}>
                  {comp.name}
                </h3>
                <p className="mb-6" style={{ ...S.body, color: V("color-body-mid") }}>
                  {comp.desc}
                </p>
                <a
                  href={comp.href}
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-blue") }}
                >
                  Learn more <Arrow />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ SUPPORT + HOSTING CARDS ═══════ */}
        <Section>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)]"
              style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
            >
              <div className="text-5xl mb-5" style={{ color: V("color-accent-blue") }}>{"♥"}</div>
              <h3 className="font-semibold mb-3" style={{ ...S.h3, color: V("color-ink") }}>
                Support from real (nice) people
              </h3>
              <p style={{ ...S.body, color: V("color-body-mid") }}>
                Webflow&apos;s customer support team is all around the globe, so we&apos;re always
                available to point you in the right direction and answer questions. And we&apos;ve
                all been using Webflow for years.
              </p>
            </div>
            <div
              className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)]"
              style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
            >
              <div className="text-5xl mb-5" style={{ color: V("color-accent-blue") }}>{"☁"}</div>
              <h3 className="font-semibold mb-3" style={{ ...S.h3, color: V("color-ink") }}>
                Host on a world-class platform
              </h3>
              <ul className="space-y-2" style={{ ...S.body, color: V("color-body-mid") }}>
                <li>&#x2022; Super-fast page loads</li>
                <li>&#x2022; Enhanced security &amp; 99.99% uptime</li>
                <li>&#x2022; Immediate scaling</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ═══════ ALL FEATURES ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <h2 className="font-semibold leading-[1.04]" style={{ ...S.h2, color: V("color-ink") }}>
              All features
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ALL_FEATURES.map((group) => (
              <div key={group.group}>
                <h3 className="font-semibold mb-4 uppercase tracking-wider" style={{ ...S.eyebrow, color: V("color-mute") }}>
                  {group.group}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a
                        href={`/feature/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center transition-colors"
                        style={{ ...S.body, color: V("color-body-mid") }}
                      >
                        {item} <Arrow />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ CUSTOMER STORIES ═══════ */}
        <Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STORIES.slice(0, 4).map((story) => (
              <div
                key={story.logo}
                className="rounded-lg p-6 flex flex-col"
                style={{ borderRadius: "8px", background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}
              >
                <div className="text-xs uppercase tracking-wider mb-3" style={{ color: V("color-mute") }}>
                  {story.logo}
                </div>
                <div className="text-4xl font-bold mb-2 leading-none" style={{ color: V("color-ink") }}>
                  {story.metric}
                </div>
                <p className="mb-4" style={{ ...S.bodySm, color: V("color-body-mid") }}>{story.label}</p>
                <a
                  href="/customers"
                  className="inline-flex items-center mt-auto transition-colors"
                  style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-blue") }}
                >
                  Read story <Arrow />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ GET STARTED CTA ═══════ */}
        <Section bg="dark">
          <div className="text-center max-w-[700px] mx-auto">
            <h2 className="font-semibold leading-[1.04] mb-6" style={{ ...S.h2, color: V("color-canvas") }}>
              Get started for free
            </h2>
            <p className="mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
              Try Webflow for as long as you like with our free Starter plan. Purchase a paid Site
              plan to publish, host, and unlock additional features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center transition-colors"
                style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
              >
                Get started — it&apos;s free
              </a>
              <a
                href="/product-tour"
                className="inline-flex items-center transition-colors"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-canvas"),
                  border: `1px solid rgba(255,255,255,0.2)`,
                }}
              >
                Watch demo
              </a>
            </div>
          </div>
        </Section>

        {/* ═══════ FOOTER ═══════ */}
        <FooterSection />
      </main>
    </div>
  );
}

/* ─── FOOTER ─── */
function FooterSection() {
  const columns: Record<string, string[]> = {
    Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility", "AI"],
    Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
    Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way"],
    Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
    Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
    Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
    "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
  };

  return (
    <footer
      className="border-t px-5 sm:px-8 py-16"
      style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 mb-16">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="logo-dark h-[32px] w-auto" />
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="logo-light h-[32px] w-auto" />
              <Wordmark />
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>
              Push the limits of web design and create unique commerce experiences.
            </p>
          </div>
          {Object.entries(columns).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: V("color-mute-soft") }}>
                {heading}
              </div>
              <ul className="space-y-2.5">
                {links.map((label) => (
                  <li key={label}>
                    <a href="#" className="text-sm transition-colors hover:underline" style={{ color: V("color-body-mid") }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: V("color-hairline") }}>
          <p style={{ ...S.caption, color: V("color-mute") }}>
            &copy; 2026 Kreature, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map((s) => (
              <a key={s} href="#" className="text-sm transition-colors" style={{ color: V("color-mute") }}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
