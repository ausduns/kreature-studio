"use client";

// ─── Design token accessor ───
const V = (n: string) => `var(--${n})`;

// ─── Ecommerce feature cards ───
const ECOM_FEATURES = [
  {
    icon: "▤",
    title: "Product pages",
    description:
      "Build rich product pages with variants, image galleries, size guides, and custom fields. Drag-and-drop product blocks let you lay out specs, reviews, and recommendations exactly how you want.",
    accent: "color-accent-blue",
  },
  {
    icon: "◈",
    title: "Shopping cart",
    description:
      "Slide-out cart, cart page, or embedded checkout — your choice. Persistent carts across sessions, abandoned cart recovery emails, and real-time stock validation before checkout.",
    accent: "color-accent-purple",
  },
  {
    icon: "◎",
    title: "Checkout",
    description:
      "Stripe and PayPal integrated natively. One-page checkout with address autocomplete, saved payment methods, Apple Pay, and Google Pay. No redirects, no extra steps.",
    accent: "color-accent-green",
  },
  {
    icon: "▥",
    title: "Inventory management",
    description:
      "Track stock across variants and locations. Set low-stock alerts, auto-hide out-of-stock products, and sync inventory in real time. CSV import/export for bulk operations.",
    accent: "color-accent-orange",
  },
  {
    icon: "☰",
    title: "Order management",
    description:
      "Dashboard with order status flow: pending, confirmed, shipped, delivered, refunded. Print packing slips, send tracking numbers, and manage returns from a single view.",
    accent: "color-accent-pink",
  },
  {
    icon: "⇅",
    title: "Tax calculation",
    description:
      "Automatic sales tax by address with TaxJar integration. VAT support for EU, GST for AU/NZ. Tax-exempt customers and B2B invoicing with manual override when needed.",
    accent: "color-accent-red",
  },
  {
    icon: "↗",
    title: "Shipping",
    description:
      "Real-time carrier rates from USPS, UPS, FedEx, and DHL. Flat rate, free shipping thresholds, and weight-based rules. Print labels directly from the order dashboard.",
    accent: "color-accent-yellow",
  },
  {
    icon: "⬡",
    title: "Coupons & discounts",
    description:
      "Percentage, fixed amount, free shipping, and BOGO discounts. Usage limits, minimum purchase rules, date scheduling, and per-product or per-collection targeting built in.",
    accent: "color-accent-blue",
  },
];

// ─── Storefront examples ───
const STOREFRONTS = [
  {
    name: "Minimal Fashion",
    description: "Clean product grids, editorial lookbooks, and a slide-out cart for a luxury apparel brand.",
    tags: ["Fashion", "Grid layout", "Lookbooks"],
    accent: "color-accent-purple",
  },
  {
    name: "Tech Gadgets",
    description: "Comparison tables, spec sheets, and bundle builder for a DTC electronics startup.",
    tags: ["Electronics", "Compare", "Bundles"],
    accent: "color-accent-blue",
  },
  {
    name: "Home Goods",
    description: "Room-by-room shopping, AR preview, and subscription refill flow for sustainable home products.",
    tags: ["Home", "Subscription", "AR"],
    accent: "color-accent-green",
  },
];

// ─── Payment integrations ───
const PAYMENTS = [
  {
    name: "Stripe",
    features: "Cards, Apple Pay, Google Pay, SEPA, iDEAL, Affirm, Klarna, Afterpay",
    description:
      "Full Stripe Elements integration. Accept 135+ currencies with automatic payment method detection by region.",
    accent: "color-accent-blue",
  },
  {
    name: "PayPal",
    features: "PayPal Checkout, Venmo, Pay Later, credit/debit cards",
    description:
      "Native PayPal Smart Buttons with dynamic funding source selection. Venmo support for US merchants.",
    accent: "color-accent-purple",
  },
  {
    name: "Manual Payments",
    features: "Bank transfer, COD, invoice, purchase order",
    description:
      "Custom payment methods for B2B, wholesale, and international orders. Manual review and approval workflows.",
    accent: "color-accent-green",
  },
];

// ─── Plan tiers ───
const PLAN_TIERS = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For creators selling their first products.",
    features: [
      "Up to 100 products",
      "2% transaction fee",
      "Stripe + PayPal",
      "Basic inventory",
      "Standard shipping",
      "Email support",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Business",
    price: "$79",
    period: "/mo",
    description: "For growing brands scaling their store.",
    features: [
      "Up to 1,000 products",
      "0% transaction fee",
      "All payment methods",
      "Advanced inventory",
      "Real-time carrier rates",
      "Coupons & discounts",
      "Abandoned cart recovery",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume merchants with custom needs.",
    features: [
      "Unlimited products",
      "0% transaction fee",
      "Custom checkout flow",
      "Multi-warehouse inventory",
      "Custom shipping rules",
      "API access",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlight: false,
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
      { label: "vs Shopify", href: "/feature/ecommerce" },
      { label: "vs WooCommerce", href: "/webflow-way" },
      { label: "vs BigCommerce", href: "/made-in-webflow" },
      { label: "vs Squarespace", href: "/webflow-clone" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Refund Policy", href: "/legal/refunds" },
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
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

// ─── Footer ───

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: V("color-hairline"),
        backgroundColor: V("color-canvas"),
      }}
    >
      <div
        className="mx-auto px-5 sm:px-8 py-16"
        style={{ maxWidth: "1440px" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/logo/kreature-logo-dark.png"
                alt="Kreature"
                className="logo-dark h-[32px] w-auto"
              />
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="logo-light h-[32px] w-auto"
              />
              <span
                className="font-heading font-[800] text-lg tracking-tight"
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
              Sell anything, anywhere — with the only platform that gives you
              complete design control over your storefront.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div
                className="text-xs uppercase tracking-wider mb-4 font-medium"
                style={{ color: V("color-mute-soft") }}
              >
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: V("color-body-mid") }}
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
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
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
              className="transition-colors hover:opacity-80"
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
              className="transition-colors hover:opacity-80"
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

// ─── Page ───

export default function EcommerceFeaturePage() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: V("color-canvas"),
          paddingTop: "140px",
          paddingBottom: "80px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: V("color-accent-green") }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[500px] h-[350px] rounded-full blur-[120px] opacity-10"
            style={{ backgroundColor: V("color-accent-blue") }}
          />
        </div>

        <div
          className="mx-auto px-5 sm:px-8 text-center relative z-10"
          style={{ maxWidth: "900px" }}
        >
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              color: V("color-accent-green"),
              backgroundColor: `color-mix(in srgb, ${V("color-accent-green")} 10%, transparent)`,
              border: `1px solid ${V("color-accent-green")}20`,
            }}
          >
            Ecommerce Features
          </div>

          <h1
            className="font-heading font-semibold tracking-tight mb-6"
            style={{
              fontSize: "80px",
              lineHeight: "83.2px",
              letterSpacing: "-0.8px",
              color: V("color-ink"),
            }}
          >
            Sell anything, anywhere
          </h1>

          <p
            className="text-lg mx-auto mb-10"
            style={{
              color: V("color-body-mid"),
              maxWidth: "640px",
              fontSize: "18px",
              lineHeight: "28.8px",
            }}
          >
            A full ecommerce engine inside the platform you already use to
            design. Products, cart, checkout, inventory, shipping, and taxes
            — all native, all connected, no plugins.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: V("color-accent-blue"),
                borderRadius: "4px",
              }}
            >
              Start selling
              <Arrow />
            </a>
            <a
              href="/feature/ecommerce#features"
              className="text-base font-medium px-8 py-4 rounded transition-colors border"
              style={{
                color: V("color-ink"),
                borderColor: V("color-hairline"),
                borderRadius: "4px",
              }}
            >
              Explore features
            </a>
          </div>
        </div>
      </section>

      {/* ─── Feature Grid ─── */}
      <section
        id="features"
        style={{
          backgroundColor: V("color-canvas-soft"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-green") }}
            >
              Everything your store needs
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "56px",
                lineHeight: "58.24px",
                color: V("color-ink"),
              }}
            >
              Ecommerce without the duct tape
            </h2>
            <p
              className="text-base mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "560px",
                fontSize: "16px",
                lineHeight: "25.6px",
              }}
            >
              No stitching together plugins, themes, and third-party services.
              Every tool you need to sell online is native to the platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ECOM_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 border"
                style={{
                  backgroundColor: V("color-canvas"),
                  borderColor: V("color-hairline"),
                  boxShadow: `0 1px 2px ${V("color-hairline")}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${V(feature.accent)} 12%, transparent)`,
                    color: V(feature.accent),
                  }}
                >
                  {feature.icon}
                </div>
                <h4
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: V("color-body-mid") }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Storefront Gallery ─── */}
      <section
        style={{
          backgroundColor: V("color-canvas"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-purple") }}
            >
              Storefront examples
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "48px",
                lineHeight: "52px",
                color: V("color-ink"),
              }}
            >
              Stores that feel custom-built
            </h2>
            <p
              className="text-base mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "560px",
                fontSize: "16px",
                lineHeight: "25.6px",
              }}
            >
              Every storefront is designed in Kreature&apos;s visual editor — no
              templates, no same-as-everyone-else layouts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STOREFRONTS.map((s) => (
              <div
                key={s.name}
                className="group rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  backgroundColor: V("color-canvas-soft"),
                  borderColor: V("color-hairline"),
                }}
              >
                {/* Storefront preview placeholder */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${V(s.accent)} 8%, transparent)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${V(s.accent)} 18%, transparent)`,
                        color: V(s.accent),
                      }}
                    >
                      &#9733;
                    </div>
                  </div>
                  <div
                    className="absolute bottom-3 left-3 right-3 h-6 rounded flex items-center px-3"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${V("color-canvas")} 80%, transparent)`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="w-16 h-1 rounded-full"
                      style={{ backgroundColor: V(s.accent) }}
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h4
                    className="font-semibold mb-1.5"
                    style={{
                      fontSize: "18px",
                      color: V("color-ink"),
                    }}
                  >
                    {s.name}
                  </h4>
                  <p
                    className="text-sm mb-3"
                    style={{ color: V("color-body-mid") }}
                  >
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                        style={{
                          color: V("color-mute"),
                          backgroundColor: `color-mix(in srgb, ${V("color-canvas-mid")} 60%, transparent)`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/templates"
              className="inline-flex items-center text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: V("color-accent-blue") }}
            >
              Browse all storefront templates
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Payment Integrations ─── */}
      <section
        style={{
          backgroundColor: V("color-canvas-soft"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-blue") }}
            >
              Payments
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "48px",
                lineHeight: "52px",
                color: V("color-ink"),
              }}
            >
              Accept payments however your customers pay
            </h2>
            <p
              className="text-base mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "560px",
                fontSize: "16px",
                lineHeight: "25.6px",
              }}
            >
              Kreature connects directly to Stripe and PayPal with no
              additional fees beyond what the payment processors charge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAYMENTS.map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-7 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: V("color-canvas"),
                  borderColor: V("color-hairline"),
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold mb-4"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${V(p.accent)} 12%, transparent)`,
                    color: V(p.accent),
                  }}
                >
                  {p.name.charAt(0)}
                </div>
                <h4
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {p.name}
                </h4>
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: V("color-accent-blue") }}
                >
                  {p.features}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: V("color-body-mid") }}
                >
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div
            className="mt-16 pt-12 flex flex-wrap items-center justify-center gap-10 border-t"
            style={{ borderColor: V("color-hairline") }}
          >
            <div
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: V("color-mute") }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                style={{
                  backgroundColor: V("color-accent-green"),
                  color: "#fff",
                }}
              >
                &#10003;
              </span>
              PCI compliant
            </div>
            <div
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: V("color-mute") }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                style={{
                  backgroundColor: V("color-accent-green"),
                  color: "#fff",
                }}
              >
                &#10003;
              </span>
              SSL everywhere
            </div>
            <div
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: V("color-mute") }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                style={{
                  backgroundColor: V("color-accent-green"),
                  color: "#fff",
                }}
              >
                &#10003;
              </span>
              SOC 2 Type II
            </div>
            <div
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: V("color-mute") }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                style={{
                  backgroundColor: V("color-accent-green"),
                  color: "#fff",
                }}
              >
                &#10003;
              </span>
              3D Secure
            </div>
          </div>
        </div>
      </section>

      {/* ─── Plan Tiers ─── */}
      <section
        style={{
          backgroundColor: V("color-canvas"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-16">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: V("color-accent-orange") }}
            >
              Pricing
            </div>
            <h2
              className="font-heading font-semibold tracking-tight mb-4"
              style={{
                fontSize: "48px",
                lineHeight: "52px",
                color: V("color-ink"),
              }}
            >
              Plans for every stage of growth
            </h2>
            <p
              className="text-base mx-auto"
              style={{
                color: V("color-body-mid"),
                maxWidth: "500px",
                fontSize: "16px",
                lineHeight: "25.6px",
              }}
            >
              Start free, upgrade when you&apos;re ready. No transaction fees on
              Business and Enterprise plans.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {PLAN_TIERS.map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl p-7 border relative"
                style={{
                  backgroundColor: plan.highlight
                    ? `color-mix(in srgb, ${V("color-accent-blue")} 4%, ${V("color-canvas")})`
                    : V("color-canvas"),
                  borderColor: plan.highlight
                    ? V("color-accent-blue")
                    : V("color-hairline"),
                  borderWidth: plan.highlight ? "2px" : "1px",
                  boxShadow: plan.highlight
                    ? `0 8px 30px ${V("color-accent-blue")}15`
                    : "none",
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: V("color-accent-blue") }}
                  >
                    Most popular
                  </div>
                )}

                <h4
                  className="font-semibold mb-1"
                  style={{ fontSize: "20px", color: V("color-ink") }}
                >
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="font-heading font-semibold tracking-tight"
                    style={{
                      fontSize: "44px",
                      lineHeight: "1",
                      color: V("color-ink"),
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ color: V("color-mute"), fontSize: "16px" }}>
                    {plan.period}
                  </span>
                </div>
                <p
                  className="text-sm mb-6"
                  style={{ color: V("color-body-mid") }}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-7">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: V("color-body") }}
                    >
                      <span
                        className="shrink-0 mt-0.5"
                        style={{ color: V("color-accent-green") }}
                      >
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === "Enterprise" ? "/contact-sales" : "/signup"}
                  className="block w-full text-center text-sm font-medium py-3 rounded transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: plan.highlight
                      ? V("color-accent-blue")
                      : "transparent",
                    color: plan.highlight ? "#fff" : V("color-ink"),
                    border: plan.highlight
                      ? "none"
                      : `1px solid ${V("color-hairline")}`,
                    borderRadius: "4px",
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: V("color-canvas-soft"),
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15"
            style={{ backgroundColor: V("color-accent-green") }}
          />
        </div>

        <div
          className="mx-auto px-5 sm:px-8 text-center relative z-10"
          style={{ maxWidth: "700px" }}
        >
          <h2
            className="font-heading font-semibold tracking-tight mb-5"
            style={{
              fontSize: "56px",
              lineHeight: "58.24px",
              color: V("color-ink"),
            }}
          >
            Start selling
          </h2>
          <p
            className="text-lg mb-8 mx-auto"
            style={{
              color: V("color-body-mid"),
              maxWidth: "540px",
              fontSize: "18px",
              lineHeight: "28.8px",
            }}
          >
            The only ecommerce platform that gives you complete design freedom
            with zero transaction fees. Build your store today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="text-base font-medium px-8 py-4 rounded text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: V("color-accent-blue"),
                borderRadius: "4px",
              }}
            >
              Start free trial
              <Arrow />
            </a>
            <a
              href="/contact-sales"
              className="text-base font-medium px-8 py-4 rounded transition-colors border"
              style={{
                color: V("color-ink"),
                borderColor: V("color-hairline"),
                borderRadius: "4px",
              }}
            >
              Talk to sales
            </a>
          </div>
          <p className="text-xs mt-5" style={{ color: V("color-mute") }}>
            No credit card required. 14-day free trial on all plans.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
