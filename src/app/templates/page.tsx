"use client";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Shared Components ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Data ─── */
const TEMPLATE_CATEGORIES = [
  {
    name: "Business",
    icon: "\u{1F3E2}",
    desc: "Professional sites for companies, consultants, and B2B services.",
    count: 124,
    accent: "color-accent-blue",
  },
  {
    name: "Portfolio",
    icon: "\u{1F4BC}",
    desc: "Showcase your work with stunning layouts for creatives and freelancers.",
    count: 87,
    accent: "color-accent-purple",
  },
  {
    name: "Ecommerce",
    icon: "\u{1F6CD}",
    desc: "Beautiful storefronts optimized for conversion and product discovery.",
    count: 96,
    accent: "color-accent-orange",
  },
  {
    name: "Blog",
    icon: "\u{270D}",
    desc: "Content-first templates designed for writers, publishers, and storytellers.",
    count: 53,
    accent: "color-accent-green",
  },
  {
    name: "Agency",
    icon: "\u{1F3EC}",
    desc: "Bold, creative templates for design agencies, studios, and consultancies.",
    count: 68,
    accent: "color-accent-pink",
  },
  {
    name: "Startup",
    icon: "\u{1F680}",
    desc: "Modern SaaS and tech startup templates built for conversion and growth.",
    count: 71,
    accent: "color-accent-blue",
  },
  {
    name: "SaaS",
    icon: "\u{2601}",
    desc: "Product-focused templates with pricing tables, feature grids, and demo flows.",
    count: 59,
    accent: "color-accent-purple",
  },
];

const FEATURED_TEMPLATES = [
  {
    name: "Horizon",
    category: "Startup",
    badge: "Premium",
    badgeColor: "color-accent-purple",
    desc: "A sleek, modern startup template with integrated pricing, testimonials, and blog.",
    image: "\u{1F304}",
    accent: "color-accent-blue",
  },
  {
    name: "Lumen",
    category: "Portfolio",
    badge: "Free",
    badgeColor: "color-accent-green",
    desc: "Minimal portfolio template for designers and photographers. Dark mode built in.",
    image: "\u{1F4F7}",
    accent: "color-accent-purple",
  },
  {
    name: "Apex",
    category: "Agency",
    badge: "Premium",
    badgeColor: "color-accent-purple",
    desc: "Bold agency template with case study layouts, team pages, and animated hero.",
    image: "\u{1F3AC}",
    accent: "color-accent-orange",
  },
  {
    name: "Meridian",
    category: "Ecommerce",
    badge: "Premium",
    badgeColor: "color-accent-purple",
    desc: "Conversion-optimized ecommerce template with product galleries and cart flow.",
    image: "\u{1F6D2}",
    accent: "color-accent-green",
  },
  {
    name: "Vantage",
    category: "SaaS",
    badge: "Premium",
    badgeColor: "color-accent-purple",
    desc: "Product-led SaaS template with feature pages, changelog, and integration hub.",
    image: "\u{1F4BB}",
    accent: "color-accent-blue",
  },
  {
    name: "Foundry",
    category: "Business",
    badge: "Free",
    badgeColor: "color-accent-green",
    desc: "Clean corporate template for professional services, consulting, and B2B.",
    image: "\u{1F3E2}",
    accent: "color-accent-pink",
  },
  {
    name: "Drift",
    category: "Blog",
    badge: "Free",
    badgeColor: "color-accent-green",
    desc: "Content-focused blog template with newsletter signup and author profiles.",
    image: "\u{1F4DD}",
    accent: "color-accent-orange",
  },
  {
    name: "Catalyst",
    category: "Startup",
    badge: "Premium",
    badgeColor: "color-accent-purple",
    desc: "High-conversion startup landing page with waitlist, social proof, and pricing.",
    image: "\u{1F525}",
    accent: "color-accent-purple",
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
              Start with a professionally designed template and customize
              everything to make it your own.
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
export default function TemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "120px",
          background: V("color-canvas"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-green")} 8%, transparent)`,
            }}
          />
        </div>
        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "800px" }}
        >
          <h1
            className="font-heading tracking-tight mb-6"
            style={{
              fontSize: "80px",
              fontWeight: 600,
              lineHeight: "83.2px",
              letterSpacing: "-0.8px",
              color: V("color-ink"),
            }}
          >
            Start with a template
          </h1>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
              maxWidth: "600px",
            }}
          >
            Browse hundreds of professionally designed templates. From startup
            landing pages to full-featured ecommerce stores, find the perfect
            starting point for your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#categories"
              className="font-medium transition-colors inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: V("color-accent-green"),
                color: "#fff",
              }}
            >
              Browse templates <Arrow />
            </a>
            <a
              href="#featured"
              className="font-medium transition-colors inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                border: `1px solid ${V("color-hairline")}`,
                color: V("color-ink"),
              }}
            >
              View featured
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="text-center mb-16">
            <h2
              className="font-heading tracking-tight mb-4"
              style={{
                fontSize: "56px",
                fontWeight: 600,
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Template categories
            </h2>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-body"),
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >
              Every template is fully customizable with Kreature&apos;s visual
              designer. Find the right starting point for your project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEMPLATE_CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="group rounded-xl p-8 transition-all duration-300"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                  boxShadow: V("shadow-card"),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = V(cat.accent);
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = V("color-hairline");
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      color: V("color-ink"),
                    }}
                  >
                    {cat.name}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: `color-mix(in srgb, ${V(cat.accent)} 12%, transparent)`,
                      color: V(cat.accent),
                    }}
                  >
                    {cat.count} templates
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "25.6px",
                    color: V("color-body-mid"),
                  }}
                >
                  {cat.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section
        id="featured"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="text-center mb-16">
            <h2
              className="font-heading tracking-tight mb-4"
              style={{
                fontSize: "56px",
                fontWeight: 600,
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Featured templates
            </h2>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-body"),
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >
              The most popular templates our community is using right now.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_TEMPLATES.map((tmpl) => (
              <a
                key={tmpl.name}
                href="#"
                className="group rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                  boxShadow: V("shadow-card"),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="h-40 flex items-center justify-center text-5xl"
                  style={{
                    background: `color-mix(in srgb, ${V(tmpl.accent)} 8%, transparent)`,
                  }}
                >
                  {tmpl.image}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="font-heading"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        color: V("color-ink"),
                      }}
                    >
                      {tmpl.name}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: `color-mix(in srgb, ${V(tmpl.badgeColor)} 12%, transparent)`,
                        color: V(tmpl.badgeColor),
                      }}
                    >
                      {tmpl.badge}
                    </span>
                  </div>
                  <span
                    className="text-xs mb-3"
                    style={{ color: V("color-mute") }}
                  >
                    {tmpl.category}
                  </span>
                  <p
                    className="flex-1 mb-4"
                    style={{
                      fontSize: "14px",
                      lineHeight: "22.4px",
                      color: V("color-body-mid"),
                    }}
                  >
                    {tmpl.desc}
                  </p>
                  <span
                    className="text-sm font-medium inline-flex items-center group-hover:underline"
                    style={{ color: V(tmpl.accent) }}
                  >
                    Preview template <Arrow />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-green")} 10%, transparent)`,
            }}
          />
        </div>
        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "600px" }}
        >
          <h2
            className="font-heading tracking-tight mb-4"
            style={{
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: "58.24px",
              color: V("color-ink"),
            }}
          >
            Find your perfect template
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
            }}
          >
            Browse the full marketplace of free and premium templates. Every
            template is fully responsive and ready to customize.
          </p>
          <a
            href="#categories"
            className="font-medium transition-colors inline-flex items-center"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              padding: "16px 24px",
              borderRadius: "4px",
              background: V("color-accent-green"),
              color: "#fff",
            }}
          >
            Browse templates <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
