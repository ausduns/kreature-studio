"use client";

import { useState } from "react";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Data ─── */

const TRUSTED_BY_LOGOS = [
  "IDEO",
  "Monday.com",
  "BBDO",
  "The New York Times",
  "TED",
  "Docusign",
];

interface CustomerStory {
  kind: "customer";
  name: string;
  tags: string[];
  summary: string;
  metric: string;
  industry: string;
  segment: string;
}

interface AgencyStory {
  kind: "agency";
  name: string;
  summary: string;
  metric: string;
}

type Story = CustomerStory | AgencyStory;

const CUSTOMER_STORIES: CustomerStory[] = [
  {
    kind: "customer",
    name: "Encompass",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Consolidated three acquired brand sites into Kreature, gaining publishing autonomy across the organization.",
    metric: "5 months to consolidate 3 websites",
    industry: "Food & beverage",
    segment: "Mid-market",
  },
  {
    kind: "customer",
    name: "Greenhouse",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Migrated from a custom CMS; team gained autonomy and doubled execution speed with Kreature Optimize.",
    metric: "40% conversion improvement on demo request pages",
    industry: "Software",
    segment: "Enterprise",
  },
  {
    kind: "customer",
    name: "Maven",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Rebuilt for multiple audiences with a modular system on Kreature Enterprise.",
    metric: "18% increase in engagement",
    industry: "Healthcare",
    segment: "Mid-market",
  },
  {
    kind: "customer",
    name: "Olympia",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Digital home for a reimagined London destination, built for scale and performance.",
    metric: "10M annual footfall once fully operational",
    industry: "Media & entertainment",
    segment: "Small business",
  },
  {
    kind: "customer",
    name: "Veo",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Took back control from developer-heavy workflows with an Enterprise Partner.",
    metric: "170% increase in demo bookings",
    industry: "Software",
    segment: "Mid-market",
  },
  {
    kind: "customer",
    name: "Verifone",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Rebuilt digital presence in 10 days amid a global rebrand, launching across 32 markets.",
    metric: "32 global sites launched in 10 days",
    industry: "Finance",
    segment: "Enterprise",
  },
  {
    kind: "customer",
    name: "Samsara",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Took control of experimentation with Kreature Optimize, driving measurable conversion gains.",
    metric: "50% lift in conversion rate from on-page form experiment",
    industry: "Software",
    segment: "Enterprise",
  },
  {
    kind: "customer",
    name: "Talkspace",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Unified digital presence and brand identity across all touchpoints.",
    metric: "7x faster landing page publishing",
    industry: "Healthcare",
    segment: "Mid-market",
  },
  {
    kind: "customer",
    name: "Dermalogica",
    tags: ["Analyze", "Localization", "Optimize"],
    summary:
      "Runs hundreds of experiments across six global sites to optimize conversions.",
    metric: "450+ variations tested",
    industry: "Consumer goods",
    segment: "Enterprise",
  },
];

const AGENCY_STORIES: AgencyStory[] = [
  {
    kind: "agency",
    name: "Iron Horse",
    summary:
      "A 26-year-old agency went all-in on Kreature, launching a dedicated studio practice.",
    metric: "30-50% more efficient on work effort",
  },
  {
    kind: "agency",
    name: "N4",
    summary:
      "Evolved into a specialized Kreature Enterprise partner, tackling complex migrations from legacy CMS platforms.",
    metric: "#1 Kreature Enterprise partner globally",
  },
  {
    kind: "agency",
    name: "Edgar Allan",
    summary:
      "Adopted Kreature over a decade ago and built an innovative, scalable agency model.",
    metric: "800+ Kreature projects delivered",
  },
  {
    kind: "agency",
    name: "Composite",
    summary:
      "Delivers higher-performing sites in weeks instead of months for enterprise clients.",
    metric: "3x Enterprise portfolio growth",
  },
  {
    kind: "agency",
    name: "Flow Ninja",
    summary:
      "Helps enterprise teams move faster and cut costs across global deployments.",
    metric: "$10M generated pipeline in the last 12 months",
  },
  {
    kind: "agency",
    name: "Verndale",
    summary:
      "Turned to Kreature for a visual-first, composable CMS without technical overhead.",
    metric: "44% faster project timelines",
  },
];

const LOGO_CAROUSEL = [
  { name: "NCR", metric: "10x in cost savings annually" },
  { name: "Dropbox", metric: "67% decrease in dev ticketing" },
  { name: "Orangetheory Fitness", metric: "$6M in cost savings annually" },
  { name: "Walker & Dunlop", metric: "56% increase in form fills" },
  { name: "DocuSign", metric: "1,170% increase in traffic YoY" },
  { name: "ABM", metric: "$200M in new pipeline generated post-site launch" },
  { name: "Lattice", metric: "+20% increase in site-wide conversion" },
];

const CAROUSEL_LOGOS = [
  "Verifone",
  "Monday.com",
  "Spotify",
  "TED",
  "Greenhouse",
  "Clear",
  "Checkout.com",
  "SoundCloud",
  "Reddit",
  "The New York Times",
  "IDEO",
  "Upwork",
  "Discord",
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
      { label: "Kreature Way", href: "/webflow-way" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Careers", href: "/company/careers" },
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
              See how the world&apos;s best teams build with Kreature. Customer
              stories from startups to the enterprise.
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
export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState<"customers" | "agencies">(
    "customers"
  );

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[130px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-blue")} 6%, transparent)`,
            }}
          />
        </div>

        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "900px" }}
        >
          <h1
            className="font-heading tracking-tight mb-6"
            style={{
              fontSize: "72px",
              fontWeight: 600,
              lineHeight: "76px",
              letterSpacing: "-0.8px",
              color: V("color-ink"),
            }}
          >
            Customer stories
          </h1>
          <p
            className="mx-auto mb-12"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
              maxWidth: "650px",
            }}
          >
            Kreature powers websites for enterprises, agencies, and businesses
            large and small. See how the world&apos;s best teams build with
            Kreature.
          </p>

          {/* Trusted by bar */}
          <div className="mb-4">
            <p
              className="text-sm mb-5"
              style={{
                color: V("color-mute"),
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {TRUSTED_BY_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="text-base font-semibold whitespace-nowrap"
                  style={{ color: V("color-mute-soft") }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>

          {/* Product hero mockups placeholder */}
          <div
            className="mt-14 rounded-xl overflow-hidden"
            style={{
              background: V("color-canvas-soft"),
              border: `1px solid ${V("color-hairline")}`,
              height: "360px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: V("color-mute") }}>
              Kreature platform preview
            </p>
          </div>
        </div>
      </section>

      {/* Tabs: Customer Stories | Agency Stories */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "20px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="flex items-center gap-2 mb-10">
            <button
              onClick={() => setActiveTab("customers")}
              className="font-medium transition-all px-6 py-2.5 rounded-full text-sm"
              style={{
                background:
                  activeTab === "customers"
                    ? V("color-ink")
                    : V("color-canvas-soft"),
                color:
                  activeTab === "customers"
                    ? V("color-canvas")
                    : V("color-body"),
                border:
                  activeTab === "customers"
                    ? `1px solid ${V("color-ink")}`
                    : `1px solid ${V("color-hairline")}`,
              }}
            >
              Customer stories
            </button>
            <button
              onClick={() => setActiveTab("agencies")}
              className="font-medium transition-all px-6 py-2.5 rounded-full text-sm"
              style={{
                background:
                  activeTab === "agencies"
                    ? V("color-ink")
                    : V("color-canvas-soft"),
                color:
                  activeTab === "agencies"
                    ? V("color-canvas")
                    : V("color-body"),
                border:
                  activeTab === "agencies"
                    ? `1px solid ${V("color-ink")}`
                    : `1px solid ${V("color-hairline")}`,
              }}
            >
              Agency partner stories
            </button>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section
        style={{
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === "customers" ? CUSTOMER_STORIES : AGENCY_STORIES).map(
              (story) => (
                <a
                  key={story.name}
                  href="#"
                  className="group rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
                  style={{
                    background: V("color-canvas"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 8px 30px rgba(0,0,0,0.08)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Card top: logo area */}
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{
                      background: V("color-canvas-soft"),
                    }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{ color: V("color-ink") }}
                    >
                      {story.name}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Tags - only for customer stories */}
                    {story.kind === "customer" && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {story.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: V("color-canvas-soft"),
                              color: V("color-body-mid"),
                              fontWeight: 500,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <p
                      className="mb-4 flex-1"
                      style={{
                        fontSize: "14px",
                        lineHeight: "22.4px",
                        color: V("color-body"),
                      }}
                    >
                      {story.summary}
                    </p>

                    {/* Metric */}
                    <div
                      className="mb-3"
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "26px",
                        color: V("color-ink"),
                      }}
                    >
                      {story.metric}
                    </div>

                    {/* Meta info - only for customer stories */}
                    {story.kind === "customer" && (
                      <div
                        className="text-xs mb-4"
                        style={{ color: V("color-mute") }}
                      >
                        {story.segment}  |  {story.industry}
                      </div>
                    )}

                    <span
                      className="text-sm font-medium inline-flex items-center group-hover:underline"
                      style={{ color: V("color-accent-blue") }}
                    >
                      Read story <Arrow />
                    </span>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* G2 Awards */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "900px" }}
        >
          <h2
            className="font-heading tracking-tight mb-4"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "44px",
              color: V("color-ink"),
            }}
          >
            Customers love us
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: V("color-body"),
              maxWidth: "550px",
            }}
          >
            But don&apos;t just take our word for it -- check out our latest G2
            awards.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "Enterprise Leader Winter 2026",
              "Overall Leader Winter 2026",
              "Regional Leader EMEA Winter 2026",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 px-6 py-4 rounded-lg"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: V("color-accent-blue") }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: V("color-ink") }}
                >
                  G2 {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Carousel with Metrics */}
      <section
        className="overflow-hidden"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <h2
            className="font-heading tracking-tight mb-12 text-center"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "44px",
              color: V("color-ink"),
            }}
          >
            Trusted by leading brands
          </h2>

          {/* Logo strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mb-14">
            {CAROUSEL_LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: V("color-mute-soft") }}
              >
                {logo}
              </span>
            ))}
          </div>

          {/* Highlighted metric cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOGO_CAROUSEL.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group rounded-xl p-5 transition-all duration-300"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  className="block text-sm font-semibold mb-3"
                  style={{ color: V("color-ink") }}
                >
                  {item.name}
                </span>
                <div
                  className="mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "30px",
                    color: V("color-ink"),
                  }}
                >
                  {item.metric}
                </div>
                <span
                  className="text-sm font-medium inline-flex items-center group-hover:underline"
                  style={{ color: V("color-accent-blue") }}
                >
                  Read story <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
              background: `color-mix(in srgb, ${V("color-accent-blue")} 10%, transparent)`,
            }}
          />
        </div>
        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "650px" }}
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
            Get started for free
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
            }}
          >
            Try Kreature for as long as you like with our free Starter plan.
            Purchase a paid Site plan to publish, host, and unlock additional
            features.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
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
              Get started -- it&apos;s free <Arrow />
            </a>
            <a
              href="#"
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
              Watch demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
