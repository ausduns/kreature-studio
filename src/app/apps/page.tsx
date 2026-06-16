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
const APP_CATEGORIES = [
  {
    name: "Marketing",
    icon: "\u{1F4E3}",
    desc: "Grow your audience with email, SEO, automation, and analytics apps.",
    count: 42,
    accent: "color-accent-blue",
  },
  {
    name: "Analytics",
    icon: "\u{1F4CA}",
    desc: "Track performance, understand users, and make data-driven decisions.",
    count: 28,
    accent: "color-accent-purple",
  },
  {
    name: "Ecommerce",
    icon: "\u{1F6CD}",
    desc: "Sell products, manage inventory, and process payments seamlessly.",
    count: 35,
    accent: "color-accent-orange",
  },
  {
    name: "Social Media",
    icon: "\u{1F4F1}",
    desc: "Embed feeds, schedule posts, and integrate with every social platform.",
    count: 19,
    accent: "color-accent-pink",
  },
  {
    name: "Forms & Surveys",
    icon: "\u{1F4DD}",
    desc: "Capture leads, collect feedback, and build powerful forms without code.",
    count: 24,
    accent: "color-accent-green",
  },
  {
    name: "Support & Chat",
    icon: "\u{1F4AC}",
    desc: "Add live chat, chatbots, help desks, and customer support tools.",
    count: 16,
    accent: "color-accent-blue",
  },
  {
    name: "Memberships",
    icon: "\u{1F512}",
    desc: "Create gated content, member areas, and subscription experiences.",
    count: 11,
    accent: "color-accent-purple",
  },
  {
    name: "Media & Video",
    icon: "\u{1F3AC}",
    desc: "Embed video, host podcasts, and manage rich media on your site.",
    count: 13,
    accent: "color-accent-orange",
  },
  {
    name: "AI & Automation",
    icon: "\u{1F916}",
    desc: "Integrate AI agents, automate workflows, and personalize experiences.",
    count: 21,
    accent: "color-accent-pink",
  },
];

const FEATURED_APPS = [
  {
    name: "Google Analytics",
    category: "Analytics",
    desc: "Track your site traffic, user behavior, and conversion metrics with the world's most popular analytics platform.",
    icon: "GA",
    color: "color-accent-orange",
  },
  {
    name: "HubSpot",
    category: "Marketing",
    desc: "All-in-one CRM with email marketing, lead capture, and marketing automation built in.",
    icon: "HS",
    color: "color-accent-orange",
  },
  {
    name: "Stripe",
    category: "Ecommerce",
    desc: "Accept payments, manage subscriptions, and handle billing directly from your site.",
    icon: "ST",
    color: "color-accent-purple",
  },
  {
    name: "Typeform",
    category: "Forms & Surveys",
    desc: "Create beautiful, conversational forms and surveys that people actually want to fill out.",
    icon: "TF",
    color: "color-accent-blue",
  },
  {
    name: "Intercom",
    category: "Support & Chat",
    desc: "Engage visitors with live chat, automated messages, and a powerful customer support platform.",
    icon: "IC",
    color: "color-accent-green",
  },
  {
    name: "Zapier",
    category: "AI & Automation",
    desc: "Connect Kreature to 5,000+ apps and automate workflows without writing a single line of code.",
    icon: "ZP",
    color: "color-accent-pink",
  },
  {
    name: "Mailchimp",
    category: "Marketing",
    desc: "Build email campaigns, automate newsletters, and grow your audience with powerful marketing tools.",
    icon: "MC",
    color: "color-accent-blue",
  },
  {
    name: "Shopify",
    category: "Ecommerce",
    desc: "Embed products, sync inventory, and power your storefront with the leading commerce platform.",
    icon: "SH",
    color: "color-accent-green",
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
          {/* Brand column - spans 2 on larger grids */}
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
              Extend your site with powerful apps, integrations, and tools from
              the Kreature ecosystem.
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
export default function AppsPage() {
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
            style={{ background: `color-mix(in srgb, ${V("color-accent-blue")} 8%, transparent)` }}
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
            Extend your site with Apps
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
            Discover powerful apps and integrations to add new capabilities to
            your site. From analytics to ecommerce, there&apos;s an app for
            everything.
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
                background: V("color-accent-blue"),
                color: "#fff",
              }}
            >
              Browse apps <Arrow />
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
              App categories
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
              Everything you need to power your site, organized by what you want
              to do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_CATEGORIES.map((cat) => (
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
                    {cat.count} apps
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

      {/* Featured Apps */}
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
              Featured apps
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
              The most popular apps our users are adding to their sites right
              now.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_APPS.map((app) => (
              <a
                key={app.name}
                href="#"
                className="group rounded-xl p-6 transition-all duration-300 flex flex-col"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                  boxShadow: V("shadow-card"),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = V(app.color);
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = V("color-hairline");
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `color-mix(in srgb, ${V(app.color)} 12%, transparent)`,
                      color: V(app.color),
                    }}
                  >
                    {app.icon}
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: V("color-canvas-soft"),
                      color: V("color-body-mid"),
                    }}
                  >
                    {app.category}
                  </span>
                </div>
                <h3
                  className="font-heading mb-2"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {app.name}
                </h3>
                <p
                  className="flex-1 mb-4"
                  style={{
                    fontSize: "14px",
                    lineHeight: "22.4px",
                    color: V("color-body-mid"),
                  }}
                >
                  {app.desc}
                </p>
                <span
                  className="text-sm font-medium inline-flex items-center group-hover:underline"
                  style={{ color: V(app.color) }}
                >
                  Learn more <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "700px" }}
        >
          <div
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-purple")} 12%, transparent)`,
              color: V("color-accent-purple"),
            }}
          >
            Coming soon
          </div>
          <h2
            className="font-heading tracking-tight mb-4"
            style={{
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: "58.24px",
              color: V("color-ink"),
            }}
          >
            Build your own app
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
              maxWidth: "540px",
            }}
          >
            We&apos;re building a platform app marketplace where developers can
            publish custom apps and integrations for the Kreature ecosystem.
            Join the waitlist to be first in line.
          </p>
          <a
            href="#"
            className="font-medium transition-colors inline-flex items-center"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              padding: "16px 24px",
              borderRadius: "4px",
              background: V("color-accent-purple"),
              color: "#fff",
            }}
          >
            Join the waitlist <Arrow />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none" />
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
            Ready to get started?
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
            }}
          >
            Browse the full app directory and find the tools you need to build
            something extraordinary.
          </p>
          <a
            href="#categories"
            className="font-medium transition-colors inline-flex items-center"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              padding: "16px 24px",
              borderRadius: "4px",
              background: V("color-accent-blue"),
              color: "#fff",
            }}
          >
            Browse apps <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
