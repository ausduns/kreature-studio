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
const INTEGRATION_CATEGORIES = [
  {
    name: "Analytics",
    icon: "\u{1F4CA}",
    desc: "Track performance, understand user behavior, and make data-driven decisions.",
    count: 18,
    accent: "color-accent-blue",
  },
  {
    name: "Marketing",
    icon: "\u{1F4E3}",
    desc: "Grow your audience with email campaigns, automation, and conversion tools.",
    count: 24,
    accent: "color-accent-purple",
  },
  {
    name: "CRM",
    icon: "\u{1F465}",
    desc: "Manage customer relationships, track leads, and automate your sales pipeline.",
    count: 15,
    accent: "color-accent-orange",
  },
  {
    name: "Forms & Surveys",
    icon: "\u{1F4DD}",
    desc: "Capture leads, gather feedback, and build powerful forms.",
    count: 12,
    accent: "color-accent-green",
  },
  {
    name: "Payments",
    icon: "\u{1F4B3}",
    desc: "Accept payments, manage subscriptions, and handle billing securely.",
    count: 10,
    accent: "color-accent-pink",
  },
  {
    name: "Automation",
    icon: "\u{1F916}",
    desc: "Connect apps, automate workflows, and eliminate manual work.",
    count: 16,
    accent: "color-accent-blue",
  },
  {
    name: "AI & Machine Learning",
    icon: "\u{1F9E0}",
    desc: "Add AI-powered features like chatbots, personalization, and content generation.",
    count: 9,
    accent: "color-accent-purple",
  },
  {
    name: "Social Media",
    icon: "\u{1F4F1}",
    desc: "Embed feeds, schedule posts, and integrate with every social platform.",
    count: 11,
    accent: "color-accent-orange",
  },
  {
    name: "Scheduling",
    icon: "\u{1F4C5}",
    desc: "Add booking, appointment scheduling, and calendar integration.",
    count: 8,
    accent: "color-accent-green",
  },
];

const FEATURED_INTEGRATIONS = [
  { name: "Google Analytics", category: "Analytics", desc: "The world's most popular web analytics platform. Track traffic, conversions, and user behavior.", icon: "GA", color: "color-accent-orange" },
  { name: "HubSpot", category: "CRM", desc: "All-in-one CRM platform with marketing, sales, and customer service tools.", icon: "HS", color: "color-accent-orange" },
  { name: "Mailchimp", category: "Marketing", desc: "Email marketing and automation platform for growing your audience.", icon: "MC", color: "color-accent-blue" },
  { name: "Stripe", category: "Payments", desc: "Payment processing platform for online businesses. Accept payments globally.", icon: "ST", color: "color-accent-purple" },
  { name: "Zapier", category: "Automation", desc: "Connect Kreature to 5,000+ apps and automate workflows without code.", icon: "ZP", color: "color-accent-pink" },
  { name: "Slack", category: "Automation", desc: "Team communication platform. Get notifications, share updates, and collaborate.", icon: "SL", color: "color-accent-green" },
  { name: "Salesforce", category: "CRM", desc: "Enterprise CRM platform for managing customer relationships at scale.", icon: "SF", color: "color-accent-blue" },
  { name: "Hotjar", category: "Analytics", desc: "Behavior analytics and user feedback tools. Heatmaps, recordings, and surveys.", icon: "HJ", color: "color-accent-purple" },
  { name: "Typeform", category: "Forms & Surveys", desc: "Create beautiful, conversational forms that people actually want to fill out.", icon: "TF", color: "color-accent-blue" },
  { name: "Intercom", category: "CRM", desc: "Customer messaging platform with live chat, bots, and product tours.", icon: "IC", color: "color-accent-green" },
  { name: "Shopify", category: "Ecommerce", desc: "Ecommerce platform for selling products online and in-person.", icon: "SH", color: "color-accent-green" },
  { name: "Mixpanel", category: "Analytics", desc: "Product analytics for understanding user behavior and driving growth.", icon: "MP", color: "color-accent-pink" },
  { name: "Segment", category: "Analytics", desc: "Customer data platform that collects, cleans, and routes your data.", icon: "SG", color: "color-accent-orange" },
  { name: "Airtable", category: "Automation", desc: "Spreadsheet-database hybrid for organizing anything, with your team.", icon: "AT", color: "color-accent-purple" },
  { name: "Calendly", category: "Scheduling", desc: "Scheduling automation platform for booking meetings without the back-and-forth.", icon: "CL", color: "color-accent-blue" },
  { name: "Notion", category: "Automation", desc: "All-in-one workspace for notes, docs, wikis, and project management.", icon: "NT", color: "color-accent-green" },
  { name: "ConvertKit", category: "Marketing", desc: "Email marketing built for creators. Newsletters, automations, and landing pages.", icon: "CK", color: "color-accent-pink" },
  { name: "Klaviyo", category: "Marketing", desc: "Email and SMS marketing platform built for ecommerce.", icon: "KV", color: "color-accent-orange" },
  { name: "OpenAI", category: "AI & Machine Learning", desc: "Integrate GPT models for content generation, chatbots, and AI-powered features.", icon: "AI", color: "color-accent-purple" },
  { name: "Anthropic", category: "AI & Machine Learning", desc: "Claude AI integration for safe, helpful, and honest AI assistants.", icon: "AN", color: "color-accent-blue" },
  { name: "Snowflake", category: "Analytics", desc: "Cloud data platform for storage, processing, and analytics at scale.", icon: "SN", color: "color-accent-green" },
  { name: "Datadog", category: "Analytics", desc: "Monitoring and security platform for cloud applications.", icon: "DD", color: "color-accent-purple" },
  { name: "Webhooks by Zapier", category: "Automation", desc: "Connect Kreature to any app with custom webhooks and HTTP requests.", icon: "WH", color: "color-accent-pink" },
  { name: "Memberstack", category: "Memberships", desc: "Add user authentication, memberships, and gated content to your site.", icon: "MS", color: "color-accent-orange" },
  { name: "Finsweet Attributes", category: "Automation", desc: "Powerful no-code tools for filtering, sorting, and dynamic content.", icon: "FS", color: "color-accent-blue" },
  { name: "Make (Integromat)", category: "Automation", desc: "Visual automation platform for connecting apps and building workflows.", icon: "MK", color: "color-accent-green" },
  { name: "Brevo (Sendinblue)", category: "Marketing", desc: "Email marketing, SMS, chat, and CRM platform for growing businesses.", icon: "BR", color: "color-accent-purple" },
  { name: "Amplitude", category: "Analytics", desc: "Digital analytics platform for product-led growth.", icon: "AM", color: "color-accent-pink" },
  { name: "Google Ads", category: "Marketing", desc: "Track conversions, retarget visitors, and manage campaigns directly.", icon: "GA", color: "color-accent-orange" },
  { name: "Meta Pixel", category: "Marketing", desc: "Facebook and Instagram conversion tracking and audience retargeting.", icon: "MP", color: "color-accent-blue" },
  { name: "LinkedIn Insight Tag", category: "Marketing", desc: "LinkedIn conversion tracking and professional audience targeting.", icon: "LI", color: "color-accent-purple" },
  { name: "Plaid", category: "Payments", desc: "Financial data platform for connecting bank accounts and verifying users.", icon: "PL", color: "color-accent-green" },
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
              Connect Kreature to the tools your team already uses. Hundreds of
              integrations ready to go.
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
export default function IntegrationsPage() {
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
              background: `color-mix(in srgb, ${V("color-accent-orange")} 8%, transparent)`,
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
            Connect your stack
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
            Kreature integrates with hundreds of tools your team already uses.
            From analytics to CRM, connect your entire workflow in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#featured"
              className="font-medium transition-colors inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: V("color-accent-orange"),
                color: "#fff",
              }}
            >
              Explore integrations <Arrow />
            </a>
            <a
              href="#categories"
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
              Browse by category
            </a>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
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
              Integration categories
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
              Find the right tools to extend your site, organized by what you
              want to accomplish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATION_CATEGORIES.map((cat) => (
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
                    {cat.count} integrations
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

      {/* Featured Integrations */}
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
              Popular integrations
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
              The most popular tools our users connect to their Kreature sites.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_INTEGRATIONS.map((integration) => (
              <a
                key={integration.name}
                href="#"
                className="group rounded-xl p-5 transition-all duration-300 flex flex-col"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                  boxShadow: V("shadow-card"),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = V(integration.color);
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = V("color-hairline");
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${V(integration.color)} 12%, transparent)`,
                      color: V(integration.color),
                    }}
                  >
                    {integration.icon}
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="font-heading truncate"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "22px",
                        color: V("color-ink"),
                      }}
                    >
                      {integration.name}
                    </h3>
                    <span
                      className="text-xs"
                      style={{ color: V("color-mute") }}
                    >
                      {integration.category}
                    </span>
                  </div>
                </div>
                <p
                  className="flex-1 mb-3"
                  style={{
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: V("color-body-mid"),
                  }}
                >
                  {integration.desc}
                </p>
                <span
                  className="text-xs font-medium inline-flex items-center group-hover:underline"
                  style={{ color: V(integration.color) }}
                >
                  Connect <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* API Access */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1000px" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider"
                style={{
                  background: `color-mix(in srgb, ${V("color-accent-orange")} 12%, transparent)`,
                  color: V("color-accent-orange"),
                }}
              >
                Developer tools
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
                Build your own
              </h2>
              <p
                className="mb-6"
                style={{
                  fontSize: "16px",
                  lineHeight: "25.6px",
                  color: V("color-body-mid"),
                }}
              >
                Can&apos;t find the integration you need? Use our MACH-certified
                APIs and webhooks to build custom integrations for any service.
                Connect anything to Kreature with a few lines of code.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "REST and GraphQL APIs with full documentation",
                  "Custom webhooks for real-time event triggers",
                  "OAuth 2.0 and API key authentication",
                  "MACH Alliance certified for composable architectures",
                  "Logic flows for visual workflow automation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                    style={{
                      fontSize: "14px",
                      lineHeight: "22.4px",
                      color: V("color-body-mid"),
                    }}
                  >
                    <span
                      style={{
                        color: V("color-accent-orange"),
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      &check;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="font-medium transition-colors inline-flex items-center"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "16px 24px",
                  borderRadius: "4px",
                  background: V("color-accent-orange"),
                  color: "#fff",
                }}
              >
                View API docs <Arrow />
              </a>
            </div>
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: `color-mix(in srgb, ${V("color-accent-orange")} 6%, transparent)`,
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <div
                className="text-5xl mb-6"
                style={{ color: V("color-accent-orange") }}
              >
                {"{ }"}
              </div>
              <p
                className="text-sm mb-4"
                style={{
                  color: V("color-body-mid"),
                  fontFamily: "var(--font-mono)",
                  lineHeight: "22.4px",
                }}
              >
                {"fetch(\"https://api.kreature.com/v1/sites\", {\n  headers: {\n    \"Authorization\": \"Bearer \" + API_KEY\n  }\n})"}
              </p>
              <p
                className="text-xs"
                style={{ color: V("color-mute") }}
              >
                Connect any service with a single API call
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-orange")} 10%, transparent)`,
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
            Ready to connect?
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
            }}
          >
            Explore the full directory of integrations and connect your favorite
            tools to Kreature in minutes.
          </p>
          <a
            href="#featured"
            className="font-medium transition-colors inline-flex items-center"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              padding: "16px 24px",
              borderRadius: "4px",
              background: V("color-accent-orange"),
              color: "#fff",
            }}
          >
            Explore integrations <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
