"use client";

import { useState } from "react";

/* ─── CSS VAR HELPER ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY STYLES ─── */
const S = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  heroSub: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
};

/* ─── DATA ─── */

interface PricingPlan {
  name: string;
  tagline?: string;
  price: string;
  period: string;
  desc: string;
  cta: string;
  ctaHref: string;
  popular?: boolean;
  features: string[];
  featureLabel: string;
}

const SITE_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "For getting started",
    price: "Free",
    period: "",
    desc: "Build a basic website for your business or brand with up to 2 pages.",
    cta: "Get started for free",
    ctaHref: "/signup",
    features: [
      "Up to 2 pages",
      "1 GB bandwidth",
      "50 CMS items",
      "1,000 monthly visits",
      "50 form submissions per month",
      "Kreature.io staging domain",
      "SSL certificate",
      "Kreature branding on footer",
    ],
    featureLabel: "Starter includes",
  },
  {
    name: "CMS",
    price: "$29",
    period: "/mo",
    desc: "Build a content-driven site with a powerful visual CMS and up to 150 pages.",
    cta: "Get started",
    ctaHref: "/signup?plan=cms",
    popular: true,
    features: [
      "Up to 150 pages",
      "400 GB bandwidth",
      "2,000 CMS items",
      "50 static pages",
      "3 content editors",
      "Custom domain",
      "SSL certificate",
      "Site search",
      "Monthly backups",
    ],
    featureLabel: "Everything in Starter, plus",
  },
  {
    name: "Business",
    price: "$49",
    period: "/mo",
    desc: "Scale your site with advanced CMS, custom logic, and up to 300 pages.",
    cta: "Get started",
    ctaHref: "/signup?plan=business",
    features: [
      "Up to 300 pages",
      "800 GB bandwidth",
      "10,000 CMS items",
      "150 static pages",
      "10 content editors",
      "Custom domain",
      "SSL certificate",
      "Site search",
      "Form file uploads",
      "Custom code",
      "Daily backups",
    ],
    featureLabel: "Everything in CMS, plus",
  },
];

const ECOMMERCE_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    price: "$42",
    period: "/mo",
    desc: "Launch a store with up to 500 items, custom checkout, and email marketing.",
    cta: "Get started",
    ctaHref: "/signup?plan=ecommerce-standard",
    features: [
      "Up to 500 items",
      "2% transaction fee",
      "Custom checkout",
      "Custom shopping cart",
      "Email marketing",
      "Up to 3 staff accounts",
      "Branded gift cards",
      "Multi-currency",
    ],
    featureLabel: "Standard includes",
  },
  {
    name: "Plus",
    price: "$84",
    period: "/mo",
    desc: "Grow your store with 1,000 items, 0% transaction fees, and advanced features.",
    cta: "Get started",
    ctaHref: "/signup?plan=ecommerce-plus",
    popular: true,
    features: [
      "Up to 1,000 items",
      "0% transaction fee",
      "Everything in Standard",
      "Unbranded emails",
      "Automated sales tax",
      "Up to 10 staff accounts",
      "Advanced shipping rules",
      "CMS included",
      "Site search",
    ],
    featureLabel: "Everything in Standard, plus",
  },
  {
    name: "Advanced",
    price: "$235",
    period: "/mo",
    desc: "Power your high-volume business with 3,000 items, unlimited staff, and enterprise-grade tools.",
    cta: "Get started",
    ctaHref: "/signup?plan=ecommerce-advanced",
    features: [
      "Up to 3,000 items",
      "0% transaction fee",
      "Everything in Plus",
      "Unlimited staff accounts",
      "Third-party shipping rates",
      "Custom reports",
      "Abandoned cart recovery",
      "Dropshipping integrations",
      "Subscription billing",
    ],
    featureLabel: "Everything in Plus, plus",
  },
];

const WORKSPACE_PLANS: PricingPlan[] = [
  {
    name: "Core",
    price: "Free",
    period: "",
    desc: "Collaborate with your team in a shared workspace with basic role-based access.",
    cta: "Get started for free",
    ctaHref: "/signup?plan=workspace-core",
    features: [
      "Up to 3 seats",
      "Shared dashboard",
      "Basic roles",
      "Commenting",
      "1 shared library",
      "30-day version history",
    ],
    featureLabel: "Core includes",
  },
  {
    name: "Growth",
    price: "$22",
    period: "/mo per seat",
    desc: "Scale collaboration with advanced permissions, unlimited libraries, and extensive version history.",
    cta: "Get started",
    ctaHref: "/signup?plan=workspace-growth",
    popular: true,
    features: [
      "Unlimited seats",
      "Everything in Core",
      "Advanced roles & permissions",
      "Unlimited shared libraries",
      "1-year version history",
      "Branching & approvals",
      "Cross-workspace publishing",
      "Priority support",
    ],
    featureLabel: "Everything in Core, plus",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Enterprise-grade collaboration with SSO, dedicated infrastructure, and advanced security controls.",
    cta: "Contact sales",
    ctaHref: "/enterprise/contact-sales",
    features: [
      "Everything in Growth",
      "SSO & SAML",
      "Dedicated infrastructure",
      "Custom IP allowlisting",
      "Audit logs",
      "Dedicated account manager",
      "99.99% uptime SLA",
      "Custom contracts",
    ],
    featureLabel: "Everything in Growth, plus",
  },
];

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the end of your billing cycle. We prorate upgrades and credits are applied for any unused time.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and wire transfers for annual Enterprise plans. For annual plans, we also support invoicing with net-30 payment terms.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Absolutely. You can cancel your subscription at any time from your billing settings. Your site will remain active until the end of your current billing period. We don't lock you into long-term contracts unless you choose an annual plan for the discount.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, the Starter plan is free with no time limit. For paid plans, we offer a 14-day free trial so you can explore all features before committing. No credit card is required to start the trial.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes, all paid plans offer a 20% discount when billed annually. Annual plans are billed upfront for the full year. You can switch from monthly to annual billing at any time from your billing settings.",
  },
  {
    q: "How does the CMS item limit work?",
    a: "CMS items include any structured content you manage in the CMS — blog posts, team members, projects, etc. The limit is based on the total number of items across all collections. If you exceed your plan's limit, you'll need to upgrade or archive unused items.",
  },
  {
    q: "What happens if I exceed my plan's limits?",
    a: "We'll notify you when you're approaching your plan limits. If you exceed bandwidth or visit limits, we may temporarily throttle traffic rather than cut you off. For CMS and item limits, you'll need to upgrade to add more. We never charge surprise overage fees.",
  },
  {
    q: "Is my data secure?",
    a: "Security is built into every layer of Kreature. We offer SSL certificates for all sites by default, SOC 2 Type II compliance, encrypted data at rest and in transit, 24/7 monitoring, and automated daily backups. Enterprise plans include additional security features like SSO and audit logs.",
  },
  {
    q: "Can I use a custom domain?",
    a: "All paid plans (CMS and above) support custom domains. You can connect any domain you own and we'll automatically provision an SSL certificate. Starter plan sites use a kreature.io subdomain. You can add multiple domains to Business and Enterprise plans.",
  },
  {
    q: "Do you offer nonprofit or educational discounts?",
    a: "Yes, we offer special pricing for qualified nonprofits, educational institutions, and open-source projects. Contact our sales team to learn more and apply for discounted pricing.",
  },
];

const FOOTER_DATA: Record<string, string[]> = {
  Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility", "AI"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way"],
  Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ─── SHARED COMPONENTS ─── */

function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">→</span>;
}

function InkBtn({
  href,
  children,
  blue,
  white,
}: {
  href: string;
  children: React.ReactNode;
  blue?: boolean;
  white?: boolean;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-sm transition-colors"
      style={{
        ...S.btn,
        background: blue ? V("color-accent-blue") : "transparent",
        color: blue || white ? "#fff" : V("color-ink"),
        border: blue
          ? "none"
          : `1px solid ${white ? "rgba(255,255,255,0.2)" : V("color-hairline")}`,
      }}
    >
      {children}
    </a>
  );
}

function Section({
  bg,
  children,
  className,
}: {
  bg?: "soft" | "dark";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`px-5 sm:px-8 py-[clamp(3rem,8vw,9rem)] ${className || ""}`}
      style={{
        background:
          bg === "soft"
            ? V("color-canvas-soft")
            : bg === "dark"
              ? V("color-ink")
              : V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── PRICING CARD COMPONENT ─── */

function PricingCard({
  plan,
  highlight,
}: {
  plan: PricingPlan;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-lg p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col relative transition-shadow hover:shadow-lg"
      style={{
        borderRadius: "8px",
        border: highlight ? "none" : `1px solid ${V("color-hairline")}`,
        background: highlight ? V("color-accent-blue") : V("color-canvas"),
        boxShadow: highlight ? V("shadow-card-strong") : V("shadow-card"),
      }}
    >
      {plan.popular && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase px-4 py-1 rounded-full"
          style={{
            background: highlight ? "rgba(255,255,255,0.2)" : V("color-accent-blue"),
            color: highlight ? "#fff" : "#fff",
          }}
        >
          Most popular
        </span>
      )}

      <div className="mb-2">
        {plan.tagline && (
          <div
            className="text-sm font-medium uppercase tracking-wider mb-1"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: highlight ? "rgba(255,255,255,0.7)" : V("color-body-mid"),
            }}
          >
            {plan.tagline}
          </div>
        )}
        <h3
          style={{
            ...S.h3,
            fontWeight: 600,
            color: highlight ? "#fff" : V("color-ink"),
          }}
        >
          {plan.name}
        </h3>
      </div>

      <div className="mb-1 flex items-baseline gap-1">
        <span
          className="font-semibold leading-none"
          style={{
            fontSize: "clamp(2.5rem,4vw,3.5rem)",
            color: highlight ? "#fff" : V("color-ink"),
          }}
        >
          {plan.price}
        </span>
        {plan.period && (
          <span
            style={{
              fontSize: "16px",
              color: highlight ? "rgba(255,255,255,0.7)" : V("color-body-mid"),
            }}
          >
            {plan.period}
          </span>
        )}
      </div>

      <p
        className="mb-6"
        style={{
          ...S.body,
          color: highlight ? "rgba(255,255,255,0.85)" : V("color-body-mid"),
        }}
      >
        {plan.desc}
      </p>

      <a
        href={plan.ctaHref}
        className="text-center inline-flex items-center justify-center rounded-sm transition-colors mb-8"
        style={{
          ...S.btn,
          background: highlight ? "#fff" : V("color-accent-blue"),
          color: highlight ? V("color-ink") : "#fff",
          border: "none",
        }}
      >
        {plan.cta}
      </a>

      <div
        className="pt-6"
        style={{
          borderTop: `1px solid ${highlight ? "rgba(255,255,255,0.15)" : V("color-hairline")}`,
        }}
      >
        <div
          className="text-sm font-semibold mb-4"
          style={{
            fontSize: "12.8px",
            fontWeight: 550,
            color: highlight ? "rgba(255,255,255,0.7)" : V("color-body-mid"),
            textTransform: "uppercase",
          }}
        >
          {plan.featureLabel}
        </div>
        <ul className="space-y-3">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5"
              style={{
                ...S.bodySm,
                color: highlight ? "rgba(255,255,255,0.9)" : V("color-body"),
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 mt-0.5"
                style={{ color: highlight ? "#fff" : V("color-accent-blue") }}
              >
                <path
                  d="M3 8.5l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── FAQ ACCORDION COMPONENT ─── */

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="max-w-[800px]">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: `1px solid ${V("color-hairline")}`,
            }}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              style={{ color: V("color-ink") }}
            >
              <span style={{ fontSize: "18px", fontWeight: 500, lineHeight: "28px" }}>
                {item.q}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`shrink-0 ml-4 transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                <path
                  d="M8 3v10M3 8h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                className="pb-5 pr-8"
                style={{ ...S.body, color: V("color-body-mid") }}
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── FEATURE COMPARISON ROW ─── */

function PlanTabs({
  plans,
  sectionTitle,
  sectionDesc,
}: {
  plans: PricingPlan[];
  sectionTitle: string;
  sectionDesc: string;
}) {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 style={{ ...S.h2, color: V("color-ink") }}>{sectionTitle}</h2>
        {sectionDesc && (
          <p
            className="mt-4 max-w-[600px] mx-auto"
            style={{ ...S.heroSub, color: V("color-body-mid") }}
          >
            {sectionDesc}
          </p>
        )}
      </div>
      <div
        className="grid md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)]"
      >
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            highlight={!!plan.popular}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════ MAIN PAGE COMPONENT ═══════ */

export default function PricingPage() {
  return (
    <div
      className="page-wrapper"
      style={{ background: V("color-canvas"), color: V("color-body") }}
    >
      <main>
        {/* ═══════ HERO ═══════ */}
        <Section>
          <div className="text-center mb-8">
            <h1
              className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
              style={{ ...S.h1, color: V("color-ink") }}
            >
              Grow with confidence
            </h1>
            <p
              className="max-w-[600px] mx-auto"
              style={{ ...S.heroSub, color: V("color-body-mid") }}
            >
              Plans built for every stage of your journey, from your first site to a
              full-scale enterprise operation. No hidden fees, no surprise charges.
            </p>
          </div>

          {/* Toggle placeholder — monthly/annual toggle design */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <span
              style={{
                ...S.bodySm,
                fontWeight: 500,
                color: V("color-ink"),
              }}
            >
              Monthly
            </span>
            <div
              className="w-12 h-6 rounded-full relative cursor-pointer"
              style={{ background: V("color-accent-blue") }}
            >
              <div
                className="w-4 h-4 rounded-full absolute top-1 left-1 transition-transform"
                style={{ background: "#fff" }}
              />
            </div>
            <span
              className="flex items-center gap-2"
              style={{ ...S.bodySm, fontWeight: 500, color: V("color-body-mid") }}
            >
              Yearly
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: V("color-accent-green"),
                  color: "#fff",
                }}
              >
                Save 20%
              </span>
            </span>
          </div>
        </Section>

        {/* ═══════ SITE PLANS ═══════ */}
        <Section bg="soft">
          <PlanTabs
            plans={SITE_PLANS}
            sectionTitle="Build a site that grows with you"
            sectionDesc="From a simple landing page to a content-rich marketing site, choose the plan that fits where you are."
          />
        </Section>

        {/* ═══════ ECOMMERCE PLANS ═══════ */}
        <Section>
          <PlanTabs
            plans={ECOMMERCE_PLANS}
            sectionTitle="Sell anything, anywhere"
            sectionDesc="Turn your site into a storefront. Powerful ecommerce tools from your first product to your millionth sale."
          />
        </Section>

        {/* ═══════ WORKSPACE PLANS ═══════ */}
        <Section bg="soft">
          <PlanTabs
            plans={WORKSPACE_PLANS}
            sectionTitle="Collaborate at scale"
            sectionDesc="Workspaces for teams of every size, with the tools and permissions you need to build together."
          />
        </Section>

        {/* ═══════ ENTERPRISE HIGHLIGHT ═══════ */}
        <Section>
          <div
            className="rounded-lg p-[clamp(2rem,4vw,4rem)] text-center relative overflow-hidden"
            style={{
              borderRadius: "8px",
              background: V("color-ink"),
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
              style={{
                background: V("color-accent-blue"),
                transform: "translate(30%, -30%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
              style={{
                background: V("color-accent-purple"),
                transform: "translate(-30%, 30%)",
              }}
            />
            <div className="relative z-10">
              <h2
                className="mb-4"
                style={{ ...S.h2, color: V("color-canvas") }}
              >
                Kreature
                <span style={{ color: V("color-accent-blue-soft") }}>.</span>{" "}
                Enterprise
              </h2>
              <p
                className="max-w-[600px] mx-auto mb-8"
                style={{ ...S.heroSub, color: V("color-mute-soft") }}
              >
                Advanced collaboration, security, and scale for teams building at
                the highest level. Dedicated infrastructure, custom SLAs, and
                enterprise-grade support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <InkBtn href="/enterprise/contact-sales" blue>
                  Contact sales
                </InkBtn>
                <InkBtn href="/enterprise" white>
                  Learn more about Enterprise
                </InkBtn>
              </div>
            </div>
          </div>
        </Section>

        {/* ═══════ COMPARISON TABLE ═══════ */}
        <Section bg="soft">
          <div className="text-center mb-12">
            <h2 style={{ ...S.h2, color: V("color-ink") }}>
              Compare plans side by side
            </h2>
            <p
              className="mt-4 max-w-[600px] mx-auto"
              style={{ ...S.heroSub, color: V("color-body-mid") }}
            >
              Not sure which plan is right for you? Here&apos;s how they stack up.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ minWidth: "700px" }}>
              <thead>
                <tr
                  style={{
                    borderBottom: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <th className="py-4 pr-4" style={{ color: V("color-ink"), fontWeight: 600 }}>
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center" style={{ color: V("color-ink"), fontWeight: 600 }}>
                    Starter
                  </th>
                  <th className="py-4 px-4 text-center" style={{ color: V("color-ink"), fontWeight: 600 }}>
                    CMS
                  </th>
                  <th className="py-4 px-4 text-center" style={{ color: V("color-ink"), fontWeight: 600 }}>
                    Business
                  </th>
                  <th className="py-4 px-4 text-center" style={{ color: V("color-ink"), fontWeight: 600 }}>
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Pages", values: ["2", "150", "300", "Unlimited"] },
                  { label: "Bandwidth", values: ["1 GB", "400 GB", "800 GB", "Custom"] },
                  { label: "CMS items", values: ["50", "2,000", "10,000", "Unlimited"] },
                  { label: "Content editors", values: ["1", "3", "10", "Unlimited"] },
                  { label: "Custom domain", values: ["—", "✓", "✓", "✓"] },
                  { label: "Site search", values: ["—", "✓", "✓", "✓"] },
                  { label: "Custom code", values: ["—", "—", "✓", "✓"] },
                  { label: "Form file uploads", values: ["—", "—", "✓", "✓"] },
                  { label: "Ecommerce", values: ["—", "—", "—", "Add-on"] },
                  { label: "SSO / SAML", values: ["—", "—", "—", "✓"] },
                  { label: "Audit logs", values: ["—", "—", "—", "✓"] },
                  { label: "Dedicated infrastructure", values: ["—", "—", "—", "✓"] },
                  { label: "99.99% uptime SLA", values: ["—", "—", "—", "✓"] },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    style={{
                      borderBottom: `1px solid ${V("color-hairline")}`,
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : V("color-canvas-soft"),
                    }}
                  >
                    <td
                      className="py-3 pr-4"
                      style={{ ...S.bodySm, color: V("color-ink"), fontWeight: 500 }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className="py-3 px-4 text-center"
                        style={{
                          ...S.bodySm,
                          color: v === "—" ? V("color-mute") : V("color-body"),
                          fontWeight: v === "✓" ? 600 : 400,
                        }}
                      >
                        {v === "✓" ? (
                          <span style={{ color: V("color-accent-green") }}>✓</span>
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p style={{ ...S.bodySm, color: V("color-body-mid") }}>
              Need a custom plan?{" "}
              <a
                href="/enterprise/contact-sales"
                className="font-medium hover:underline"
                style={{ color: V("color-ink") }}
              >
                Contact sales →
              </a>
            </p>
          </div>
        </Section>

        {/* ═══════ FAQ ═══════ */}
        <Section>
          <div className="text-center mb-12">
            <h2 style={{ ...S.h2, color: V("color-ink") }}>
              Frequently asked questions
            </h2>
            <p
              className="mt-4 max-w-[600px] mx-auto"
              style={{ ...S.heroSub, color: V("color-body-mid") }}
            >
              Everything you need to know about Kreature pricing and plans.
            </p>
          </div>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion items={FAQ_DATA} />
          </div>
          <div className="text-center mt-10">
            <p style={{ ...S.bodySm, color: V("color-body-mid") }}>
              Still have questions?{" "}
              <a
                href="/enterprise/contact-sales"
                className="font-medium hover:underline"
                style={{ color: V("color-ink") }}
              >
                Get in touch →
              </a>
            </p>
          </div>
        </Section>

        {/* ═══════ CTA SECTION ═══════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,9rem)] relative overflow-hidden"
          style={{ background: V("color-ink") }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{
              background: V("color-accent-blue"),
              transform: "translate(30%, -30%)",
            }}
          />
          <div className="max-w-[1440px] mx-auto relative z-10 text-center">
            <h2
              className="font-semibold leading-[1.04] mb-6"
              style={{ ...S.h2, color: V("color-canvas") }}
            >
              Get started for free
            </h2>
            <p
              className="max-w-[600px] mx-auto mb-8"
              style={{ ...S.heroSub, color: V("color-mute-soft") }}
            >
              Build your site, explore the CMS, and see what Kreature can do. No
              credit card required. Upgrade when you&apos;re ready to scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <InkBtn href="/signup" blue>
                Start building free <Arrow />
              </InkBtn>
              <InkBtn href="/enterprise/contact-sales" white>
                Talk to sales
              </InkBtn>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        className="py-16 px-5 sm:px-8"
        style={{
          borderTop: `1px solid ${V("color-hairline")}`,
          background: V("color-canvas"),
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(FOOTER_DATA).map(([heading, items]) => (
              <div key={heading}>
                <h4
                  className="font-semibold mb-6"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item: string) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm hover:underline inline-flex items-center gap-1"
                        style={{ ...S.bodySm, color: V("color-body-mid") }}
                      >
                        {item}
                        {item === "AEO" && (
                          <span
                            className="text-[0.6rem] font-semibold uppercase"
                            style={{ color: V("color-accent-blue") }}
                          >
                            New
                          </span>
                        )}
                        {item === "Careers" && (
                          <span
                            className="text-[0.6rem] font-semibold uppercase"
                            style={{ color: V("color-accent-green") }}
                          >
                            We&apos;re hiring
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}
          >
            <p style={{ fontSize: "12px", color: V("color-mute") }}>
              © {new Date().getFullYear()} Kreature, Inc. All rights reserved
            </p>
            <div
              className="flex items-center gap-4"
              style={{ fontSize: "12px", color: V("color-mute") }}
            >
              <a href="#" className="hover:underline">
                Made in Kreature
              </a>
              {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map(
                (p) => (
                  <a key={p} href="#" className="hover:underline">
                    {p}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
