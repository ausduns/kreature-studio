"use client";

import { useState } from "react";

/* ─── CSS VAR HELPER ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY STYLES (from extraction) ─── */
const T = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2Major: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h2Section: { fontSize: "24px", fontWeight: 500, lineHeight: "31.2px" } as React.CSSProperties,
  h3Card: { fontSize: "24px", fontWeight: 500, lineHeight: "31.2px" } as React.CSSProperties,
  h3Section: { fontSize: "40px", fontWeight: 600, lineHeight: "48px" } as React.CSSProperties,
  h4Table: { fontSize: "32px", fontWeight: 600, lineHeight: "38.4px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  badge: { fontSize: "14px", fontWeight: 600, lineHeight: "22.4px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", letterSpacing: "-0.16px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  footerH: { fontSize: "20px", fontWeight: 500, lineHeight: "28px" } as React.CSSProperties,
  footerA: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
};

/* ─── HELPER COMPONENTS ─── */

function BlueBtn({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center transition-opacity hover:opacity-90 ${className || ""}`}
      style={{ ...T.btn, background: V("color-accent-blue"), color: "#fff", display: "inline-flex" }}
    >
      {children}
    </a>
  );
}

function OutlineBtn({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center transition-colors hover:bg-[rgba(20,110,245,0.06)] ${className || ""}`}
      style={{
        ...T.btn,
        background: "transparent",
        color: V("color-ink"),
        border: `1px solid ${V("color-hairline")}`,
      }}
    >
      {children}
    </a>
  );
}

function DarkBtn({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center transition-opacity hover:opacity-90 ${className || ""}`}
      style={{
        ...T.btn,
        background: "#fff",
        color: V("color-ink"),
      }}
    >
      {children}
    </a>
  );
}

function Arrow() {
  return <span className="ml-1.5 text-[1.1em] leading-none select-none">&rarr;</span>;
}

/* ─── SECTION WRAPPER ─── */
function Sec({ bg, py, pt, pb, children }: { bg?: string; py?: number; pt?: number; pb?: number; children: React.ReactNode }) {
  return (
    <section
      className="px-5 sm:px-8"
      style={{
        background: bg || V("color-canvas"),
        paddingTop: pt !== undefined ? `${pt}px` : py !== undefined ? `${py}px` : "80px",
        paddingBottom: pb !== undefined ? `${pb}px` : py !== undefined ? `${py}px` : "80px",
      }}
    >
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── TOGGLE ─── */

function BillingToggle({ yearly, setYearly }: { yearly: boolean; setYearly: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="cursor-pointer select-none"
        style={{ ...T.body, fontWeight: 500, color: yearly ? V("color-body-mid") : V("color-ink") }}
        onClick={() => setYearly(false)}
      >
        Monthly
      </span>
      <button
        className="relative w-12 h-6 rounded-full cursor-pointer border-none transition-colors"
        style={{ background: yearly ? V("color-accent-blue") : V("color-hairline"), padding: 0 }}
        onClick={() => setYearly(!yearly)}
        aria-label="Toggle between yearly and monthly pricing"
      >
        <div
          className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform"
          style={{ left: yearly ? "28px" : "4px", transition: "left 0.2s ease" }}
        />
      </button>
      <span
        className="cursor-pointer select-none flex items-center gap-2"
        style={{ ...T.body, fontWeight: 500, color: yearly ? V("color-ink") : V("color-body-mid") }}
        onClick={() => setYearly(true)}
      >
        Yearly
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ background: "#e6f4ea", color: "#137333" }}
        >
          Save up to 40%
        </span>
      </span>
    </div>
  );
}

/* ─── PRICING CARD ─── */

interface PlanData {
  name: string;
  tagline?: string;
  badge?: string;
  price: string;
  period?: string;
  periodNote?: string;
  cta: string;
  ctaHref: string;
  featuresLabel?: string;
  features: string[];
  variant?: "default" | "dark" | "highlight";
}

function PlanCard({ plan }: { plan: PlanData }) {
  const isDark = plan.variant === "dark";
  const ink = isDark ? "#fff" : V("color-ink");
  const body = isDark ? "rgba(255,255,255,0.85)" : V("color-body-mid");

  return (
    <div
      className="flex flex-col"
      style={{
        borderRadius: "8px",
        border: isDark ? "none" : `1px solid ${V("color-hairline")}`,
        background: isDark ? V("color-ink") : V("color-canvas"),
        padding: "24px",
        position: "relative",
      }}
    >
      {plan.badge && (
        <span
          className="absolute -top-3 left-4 text-xs font-semibold px-3 py-0.5 rounded-full"
          style={{ background: isDark ? V("color-accent-blue") : V("color-accent-blue"), color: "#fff" }}
        >
          {plan.badge}
        </span>
      )}

      {/* Plan name */}
      {plan.tagline && (
        <div className="mb-1" style={{ ...T.body, color: isDark ? "rgba(255,255,255,0.7)" : V("color-body-mid") }}>
          {plan.tagline}
        </div>
      )}
      <h3 style={{ ...T.h3Card, fontWeight: 500, color: ink, marginBottom: "4px" }}>
        {plan.name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mt-1 mb-1">
        {plan.price === "Free" || plan.price === "Talk to us" || plan.price === "Contact us" ? (
          <span style={{ fontSize: "48px", fontWeight: 600, lineHeight: "56px", color: ink }}>
            {plan.price}
          </span>
        ) : (
          <>
            <span style={{ fontSize: "16px", fontWeight: 500, color: ink, alignSelf: "flex-start", marginTop: "8px" }}>
              $
            </span>
            <span style={{ fontSize: "48px", fontWeight: 600, lineHeight: "56px", color: ink }}>
              {plan.price}
            </span>
          </>
        )}
        {plan.period && (
          <span style={{ ...T.body, color: isDark ? "rgba(255,255,255,0.7)" : V("color-body-mid") }}>
            {plan.period}
          </span>
        )}
      </div>
      {plan.periodNote && (
        <div style={{ ...T.bodySm, color: isDark ? "rgba(255,255,255,0.55)" : V("color-mute"), marginTop: "2px" }}>
          {plan.periodNote}
        </div>
      )}

      {/* CTA */}
      <div className="mt-5 mb-6">
        {plan.variant === "dark" ? (
          <DarkBtn href={plan.ctaHref}>{plan.cta}</DarkBtn>
        ) : plan.cta.startsWith("Talk") ? (
          <OutlineBtn href={plan.ctaHref}>{plan.cta}</OutlineBtn>
        ) : (
          <BlueBtn href={plan.ctaHref}>{plan.cta}</BlueBtn>
        )}
      </div>

      {/* Features label */}
      {plan.featuresLabel && (
        <div
          className="inline-flex items-center gap-1.5 mb-4 px-2.5 py-1 rounded"
          style={{
            ...T.badge,
            background: isDark ? "rgba(255,255,255,0.1)" : "rgba(8,8,8,0.07)",
            color: ink,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {plan.featuresLabel}
        </div>
      )}

      {/* Features */}
      <ul className="space-y-3">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5" style={{ ...T.bodySm, color: body }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0 mt-0.5"
              style={{ color: isDark ? "#fff" : V("color-accent-blue") }}
            >
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── FAQ ACCORDION ─── */

interface FAQ {
  q: string;
  a: string;
}

function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="max-w-[800px] mx-auto">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} style={{ borderBottom: `1px solid ${V("color-hairline")}` }}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-6 text-left"
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
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {isOpen && (
              <div className="pb-6 pr-8" style={{ ...T.body, color: V("color-body-mid") }}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── COMPARISON TABLE ─── */

function ComparisonTable({
  plans,
  rows,
}: {
  plans: string[];
  rows: { label: string; values: string[] }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left" style={{ minWidth: "700px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${V("color-hairline")}` }}>
            <th className="py-4 pr-6" style={{ ...T.bodySm, fontWeight: 600, color: V("color-ink") }}>
              Features
            </th>
            {plans.map((p) => (
              <th key={p} className="py-4 px-4 text-center" style={{ ...T.bodySm, fontWeight: 600, color: V("color-ink") }}>
                {p}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              style={{
                borderBottom: `1px solid ${V("color-hairline")}`,
                background: i % 2 === 0 ? "transparent" : "rgba(8,8,8,0.02)",
              }}
            >
              <td className="py-3 pr-6" style={{ ...T.bodySm, color: V("color-ink"), fontWeight: 500 }}>
                {row.label}
              </td>
              {row.values.map((v, j) => (
                <td
                  key={j}
                  className="py-3 px-4 text-center"
                  style={{
                    ...T.bodySm,
                    color: v === "—" ? V("color-mute") : V("color-body"),
                    fontWeight: v === "✓" ? 600 : 400,
                  }}
                >
                  {v === "✓" ? (
                    <span style={{ color: V("color-accent-green") }}>&#x2713;</span>
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
  );
}

/* ─── COMPARISON CATEGORY (expandable) ─── */

function ComparisonCategory({
  title,
  plans,
  rows,
  defaultOpen,
}: {
  title: string;
  plans: string[];
  rows: { label: string; values: string[]; tooltip?: string }[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div style={{ borderBottom: `1px solid ${V("color-hairline")}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        style={{ color: V("color-ink") }}
      >
        <h4 style={{ ...T.h4Table, color: V("color-ink") }}>{title}</h4>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`shrink-0 ml-4 transition-transform ${open ? "rotate-45" : ""}`}
        >
          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="pb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ minWidth: "600px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${V("color-hairline")}` }}>
                  <th className="py-3 pr-4" style={{ ...T.bodySm, fontWeight: 600, color: V("color-body-mid") }}></th>
                  {plans.map((p) => (
                    <th key={p} className="py-3 px-4 text-center" style={{ ...T.bodySm, fontWeight: 600, color: V("color-body-mid") }}>
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < rows.length - 1 ? `1px solid ${V("color-hairline")}` : "none" }}>
                    <td className="py-3 pr-4" style={{ ...T.bodySm, color: V("color-ink") }}>
                      {row.label}
                      {row.tooltip && (
                        <span style={{ color: V("color-mute"), marginLeft: "4px", fontSize: "12px" }}>
                          {" "}&#x24D8;
                        </span>
                      )}
                    </td>
                    {row.values.map((v, j) => (
                      <td key={j} className="py-3 px-4 text-center" style={{ ...T.bodySm, color: V("color-body") }}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── LOGO + WORDMARK ─── */

function BrandWordmark({ dark }: { dark?: boolean }) {
  const logoSrc = dark ? "/logo/kreature-logo-light.png" : "/logo/kreature-logo-dark.png";
  return (
    <a href="/" className="inline-flex items-center gap-2.5 no-underline" style={{ color: dark ? "#fff" : V("color-ink") }}>
      <img src={logoSrc} alt="Kreature" style={{ height: "28px", width: "auto" }} />
      <span style={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px" }}>
        Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
      </span>
    </a>
  );
}

/* ─── THEME TOGGLE ─── */

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };
  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-md border cursor-pointer"
      style={{
        background: V("color-canvas"),
        border: `1px solid ${V("color-hairline")}`,
      }}
      aria-label="Toggle theme"
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 1.5V3M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 10.4A6 6 0 1 1 5.6 2.5 5 5 0 0 0 13.5 10.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
      )}
    </button>
  );
}

/* ─── TRUST LOGOS ─── */

const trustLogos = [
  { src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439dc_ideo-logo.svg", alt: "Ideo" },
  { src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439c8_monday.com.svg", alt: "Monday.com" },
  { src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439db_bbdo-logo.svg", alt: "BBDO" },
  { src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439d9_nytimes.svg", alt: "The New York Times" },
  { src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439d8_TED.svg", alt: "Ted" },
  { src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439c9_Docusign-dark.svg", alt: "Docusign" },
];

/* ─── SITE PLANS DATA ─── */

const sitePlans: PlanData[] = [
  {
    name: "Starter",
    tagline: "For exploring and experimenting with Kreature.",
    price: "Free",
    cta: "Start for free",
    ctaHref: "/signup",
    featuresLabel: "",
    features: [
      "Kreature.io domain",
      "Limited Kreature CMS",
      "2 static pages",
      "1 GB bandwidth",
      "50 form submissions",
      "Kreature AI",
      "MCP server",
      "Kreature Cloud app hosting",
      "Free Starter Workspace",
    ],
  },
  {
    name: "Basic",
    tagline: "For simple sites that don’t need a CMS.",
    price: "15",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Add plan",
    ctaHref: "/signup?plan=basic",
    featuresLabel: "",
    features: [
      "Custom domain",
      "300 static pages",
      "10 GB bandwidth",
      "Unlimited form submissions",
      "Password protection",
      "Kreature AI",
      "MCP server",
      "Kreature Cloud app hosting",
      "Free Starter Workspace",
    ],
  },
  {
    name: "Premium",
    tagline: "For content-rich sites with robust CMS and traffic needs.",
    badge: "New",
    price: "25",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Add plan",
    ctaHref: "/signup?plan=premium",
    featuresLabel: "Everything in Basic, plus:",
    features: [
      "Kreature CMS",
      "50 GB to 2.5 TB bandwidth",
      "Code components",
      "Site search",
      "Form file upload",
      "Well-known files",
    ],
  },
];

/* ─── PLATFORM PLANS ─── */

const platformPlans: PlanData[] = [
  {
    name: "Team",
    tagline: "For growing teams that need more control without complexity.",
    badge: "New",
    price: "2,500",
    period: "/mo",
    periodNote: "Annual contract required",
    cta: "Talk to us",
    ctaHref: "/enterprise/contact-sales",
    featuresLabel: "Everything in Premium, plus:",
    features: [
      "Site & Workspace",
      "Kreature Localization",
      "AEO agents",
      "Publishing workflows",
      "Single-page publishing",
      "Site activity log & API",
      "Foundational governance",
      "Enhanced security & compliance",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For organizations that need a flexible, fully customizable solution.",
    price: "Talk to us",
    cta: "Talk to us",
    ctaHref: "/enterprise/contact-sales",
    featuresLabel: "Everything in Team, plus:",
    features: [
      "Enterprise-ready scale",
      "Granular permissions",
      "Custom roles",
      "Advanced governance",
      "Secure integrations",
      "Dedicated account manager",
      "Enhanced SLAs",
      "Custom configurations",
    ],
    variant: "dark",
  },
];

/* ─── ADD-ONS DATA ─── */

const addonPlans: PlanData[] = [
  {
    name: "Optimize",
    tagline: "Maximize conversions from your site.",
    price: "299",
    period: "/mo",
    periodNote: "based on # of page views",
    cta: "Add Optimize",
    ctaHref: "/dashboard?addon=optimize",
    featuresLabel: "",
    features: [
      "Up to 5 concurrent optimizations",
      "A/B testing",
      "Personalization",
      "AI Optimize",
      "Audience insights",
      "Audience targeting",
    ],
  },
  {
    name: "Analyze",
    tagline: "Get actionable insights on your site performance.",
    price: "9",
    period: "/mo",
    periodNote: "based on # of sessions",
    cta: "Add Analyze",
    ctaHref: "/dashboard?addon=analyze",
    featuresLabel: "",
    features: [
      "Auto-captured page views, sessions, visitors",
      "Auto-captured click data",
      "Site analytics overview",
      "Page-level insights",
      "Share insights",
      "Integrations with consent management",
    ],
  },
  {
    name: "Localization Essential",
    tagline: "Localize your site for audiences around the world.",
    price: "9",
    period: "/mo",
    periodNote: "based on # of locales",
    cta: "Add Localization",
    ctaHref: "/dashboard?addon=localization",
    featuresLabel: "",
    features: [
      "Machine-powered translation",
      "CMS localization",
      "Static page localization",
      "Localized SEO",
      "Style localization",
    ],
  },
  {
    name: "Localization Advanced",
    tagline: "Extend to more locales and content capabilities.",
    price: "29",
    period: "/mo",
    periodNote: "based on # of locales",
    cta: "Add Localization",
    ctaHref: "/dashboard?addon=localization",
    featuresLabel: "",
    features: [
      "Machine-powered translation",
      "CMS localization",
      "Static page localization",
      "Localized SEO",
      "Style localization",
      "Asset localization",
      "Localize URLs",
      "Automatic visitor routing",
    ],
  },
];

/* ─── ECOMMERCE PLANS ─── */

const ecommercePlans: PlanData[] = [
  {
    name: "Standard",
    tagline: "Perfect for businesses getting off the ground.",
    price: "29",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Add ecommerce plan",
    ctaHref: "/dashboard?plan=standard",
    featuresLabel: "",
    features: [
      "500 ecommerce items",
      "2% transaction fee",
      "Custom shopping cart and checkout",
    ],
  },
  {
    name: "Plus",
    tagline: "Best for higher volume businesses.",
    price: "74",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Add ecommerce plan",
    ctaHref: "/dashboard?plan=plus",
    featuresLabel: "",
    features: [
      "5,000 ecommerce items",
      "0% transaction fee",
      "Custom shopping cart and checkout",
      "Unbranded emails",
    ],
  },
  {
    name: "Advanced",
    tagline: "Scale your online business to new heights.",
    price: "212",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Add ecommerce plan",
    ctaHref: "/dashboard?plan=advanced",
    featuresLabel: "",
    features: [
      "15,000 ecommerce items",
      "0% transaction fee",
      "Custom shopping cart and checkout",
      "Unbranded emails",
    ],
  },
];

/* ─── WORKSPACE PLANS - TEAMS ─── */

const workspaceTeamPlans: PlanData[] = [
  {
    name: "Starter",
    tagline: "For just getting started with Kreature.",
    price: "Free",
    cta: "Start for free",
    ctaHref: "/dashboard/login",
    featuresLabel: "",
    features: [
      "Unlimited paid hosted sites",
      "2 staging sites",
      "2 pages per staged site",
      "50 CMS items per staged site",
      "200 AI credits",
      "1 full seat",
      "Agency/freelancer guests",
    ],
  },
  {
    name: "Core",
    tagline: "For more staging needs.",
    price: "19",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Upgrade Workspace plan",
    ctaHref: "/dashboard?plan=core",
    featuresLabel: "Everything in Starter, plus:",
    features: [
      "10 staging sites",
      "300 pages per staged site",
      "300 AI credits",
      "Custom code",
      "Code export",
      "Shared Libraries",
    ],
  },
  {
    name: "Growth",
    tagline: "For unlimited staging and advanced collaboration tools.",
    price: "49",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Upgrade Workspace plan",
    ctaHref: "/dashboard?plan=growth",
    featuresLabel: "Everything in Core, plus:",
    features: [
      "Unlimited staging sites",
      "400 AI credits",
      "Site password protection",
      "301 redirects",
      "Site-specific access",
      "Site-level roles",
      "Publishing permissions",
    ],
  },
];

const workspaceFreelancerPlans: PlanData[] = [
  {
    name: "Starter",
    tagline: "For freelancers and agencies new to Kreature.",
    price: "Free",
    cta: "Start for free",
    ctaHref: "/dashboard/login",
    featuresLabel: "",
    features: [
      "2 staging sites",
      "Agency/freelancer guests",
      "1 full seat",
      "1 free client seat per paid site",
      "200 AI credits",
    ],
  },
  {
    name: "Freelancer",
    tagline: "For freelancers with a small client roster.",
    price: "16",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Upgrade Workspace plan",
    ctaHref: "/dashboard?plan=freelancer",
    featuresLabel: "Everything in Starter, plus:",
    features: [
      "10 staging sites",
      "Free guest access in client Workspaces",
      "1 free client seat per site",
      "Full CMS access on staging sites",
      "Client payments",
      "Shared Libraries",
      "300 AI credits",
    ],
  },
  {
    name: "Agency",
    tagline: "For agencies with a large client roster.",
    price: "35",
    period: "/mo",
    periodNote: "billed yearly",
    cta: "Upgrade Workspace plan",
    ctaHref: "/dashboard?plan=agency",
    featuresLabel: "Everything in Freelancer, plus:",
    features: [
      "Unlimited staging sites",
      "3 free client seats per site",
      "Unlimited Shared Libraries",
      "Site-level roles",
      "Publishing permissions",
      "Site password protection",
      "301 redirects",
      "400 AI credits",
    ],
  },
];

/* ─── FAQ DATA ─── */

const faqData: FAQ[] = [
  {
    q: "What’s the difference between a Workspace and a Site plan?",
    a: "Every site built in Kreature automatically lives inside of a Workspace. When you sign up for Kreature, you get a free Workspace plan by default. A Workspace is a space where you stage sites — and where you can invite teammates and clients to work on sites together. Upgrading your Workspace plan gives you access to enhanced staging capabilities and advanced collaboration features. Site plans give you the tools to build your site. When you sign up for Kreature, you automatically get a free Starter Site plan. When you need to publish, host, or unlock additional site-building features, you can upgrade that specific site to a paid Site plan.",
  },
  {
    q: "How many Workspaces can I have?",
    a: "Workspaces are designed to be a space for you to organize and build your sites, and invite people to build with you. You may have different needs for different Workspaces, so you can create as many as you need, but each Kreature customer is limited to one free Workspace.",
  },
  {
    q: "How many paid Site plans can I have in my Workspace?",
    a: "Any Workspace tier can support an unlimited number of paid Site plans. The main difference in site limits on Workspace tiers is the number of Starter sites each tier supports (Free = 2; Core = 10; Growth = Unlimited). As soon as you upgrade a Starter site to a paid Site plan, it no longer counts against your free Starter site limit.",
  },
  {
    q: "Can I cancel my Site and/or Workspace at any time?",
    a: "Yes, but you’ll still pay the remainder of the term for the plan you signed up for.",
  },
  {
    q: "What is a Platform plan?",
    a: "A Platform plan bundles a site, Workspace, add-ons, and more to help growing teams and enterprise organizations get started faster with Kreature.",
  },
  {
    q: "What kind of support does Kreature offer?",
    a: "We provide customer support via email and aim to reply to all requests within 48 hours. You can also find guides and solutions in the Kreature Help Center, courses and tutorials on Kreature University, and a host of helpful Kreature customers in the Kreature Community.",
  },
  {
    q: "Can I host my website somewhere else?",
    a: "You can export your site and host it anywhere you like with any of our paid Workspace plans, no attribution required. Note: Dynamic content must be exported on a collection-by-collection basis and forms will stop working.",
  },
  {
    q: "How much traffic can Kreature hosting handle?",
    a: "Kreature hosting scales automatically to handle millions of simultaneous visits and uses Amazon's Cloudfront CDN and Fastly to load websites in milliseconds.",
  },
  {
    q: "Are Kreature websites SEO-friendly?",
    a: "Yes, Kreature sites are SEO-friendly. Our blazing-fast hosting, standards-based code, free SSL, and mobile-friendliness all help Kreature sites rank in search.",
  },
  {
    q: "Does Kreature have an API?",
    a: "Kreature’s REST API allows you to add, update, and remove items from your CMS. Read the documentation to learn more.",
  },
];

/* ─── FOOTER DATA ─── */

const footerCols: Record<string, string[]> = {
  Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility", "AI"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way", "Business Value Calculator"],
  Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ══════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ══════════════════════════════════════════════════ */

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [workspaceTab, setWorkspaceTab] = useState<"teams" | "freelancers">("teams");

  return (
    <div style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <Sec>
          <div className="text-center mb-6">
            <h1
              className="font-semibold mb-6"
              style={{ ...T.h1, color: V("color-ink") }}
            >
              Our pricing
            </h1>
            <BillingToggle yearly={yearly} setYearly={setYearly} />
          </div>

          {/* Trust logos */}
          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap opacity-50">
            {trustLogos.map((l) => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                style={{ height: "24px", width: "auto" }}
                className="dark:invert dark:opacity-70"
              />
            ))}
          </div>
        </Sec>

        {/* ═══════ SITE PLANS ═══════ */}
        <Sec bg={V("color-canvas-soft")}>
          <div className="text-center mb-10">
            <h2 style={{ ...T.h2Section, color: V("color-ink") }}>
              Site plans
            </h2>
            <p className="mt-3 max-w-[640px] mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Start building with Kreature&apos;s AI-native platform for free. Upgrade any time to unlock advanced features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sitePlans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          <div className="text-center mt-6">
            <p style={{ ...T.bodySm, color: V("color-body-mid") }}>
              All prices in USD, per site, plus applicable taxes added at checkout.
            </p>
          </div>
        </Sec>

        {/* ═══════ PLATFORM PLANS ═══════ */}
        <Sec>
          <div className="text-center mb-10">
            <h2 style={{ ...T.h2Section, color: V("color-ink") }}>
              Platform plans
            </h2>
            <p className="mt-3 max-w-[640px] mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Curated essentials for growing organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-[820px] mx-auto">
            {platformPlans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </Sec>

        {/* ═══════ COMPARISON TABLES ═══════ */}
        <Sec bg={V("color-canvas-soft")}>
          <div className="text-center mb-10">
            <h2 style={{ ...T.h2Section, color: V("color-ink") }}>
              Compare all Site plans
            </h2>
          </div>
          <div className="max-w-[900px] mx-auto space-y-0">
            <ComparisonCategory
              title="Publishing"
              plans={["Starter", "Basic", "Premium"]}
              rows={[
                { label: "Publish to kreature.io", values: ["✓", "✓", "✓"] },
                { label: "Publish to a custom domain", values: ["✓", "✓", "✓"] },
                { label: "Remove Kreature badge", values: ["—", "✓", "✓"] },
              ]}
            />
            <ComparisonCategory
              title="Site features"
              plans={["Starter", "Basic", "Premium"]}
              rows={[
                { label: "Static site pages", values: ["2", "300", "300"] },
                { label: "Form submissions", values: ["50/site", "Unlimited", "Unlimited"] },
                { label: "Form file upload", values: ["—", "—", "✓"] },
                { label: "Site password protection", values: ["—", "✓", "✓"] },
                { label: "Page password protection", values: ["—", "✓", "✓"] },
                { label: "Custom code", values: ["—", "✓", "✓"] },
                { label: "Code components", values: ["—", "—", "✓"] },
                { label: "Site search", values: ["—", "—", "✓"] },
                { label: "Well-known files", values: ["—", "—", "✓"] },
                { label: "Backups", values: ["Unlimited", "Unlimited", "Unlimited"] },
              ]}
            />
            <ComparisonCategory
              title="CMS"
              plans={["Starter", "Basic", "Premium"]}
              rows={[
                { label: "CMS items", values: ["50", "—", "20,000"] },
                { label: "CMS Collections", values: ["20", "—", "40"] },
                { label: "Content management APIs", values: ["60 RPM", "—", "120 RPM"] },
                { label: "Content delivery APIs", values: ["—", "—", "✓"] },
                { label: "Per-item publishing", values: ["—", "—", "✓"] },
                { label: "Multi-item publishing", values: ["—", "—", "✓"] },
                { label: "Scheduled publishing", values: ["—", "—", "✓"] },
                { label: "Dynamic custom code", values: ["—", "—", "✓"] },
                { label: "RSS feeds", values: ["—", "—", "✓"] },
              ]}
            />
            <ComparisonCategory
              title="Usage"
              plans={["Starter", "Basic", "Premium"]}
              rows={[
                { label: "Bandwidth", values: ["1 GB/mo", "10 GB/mo", "Up to 2.5 TB/mo"] },
                { label: "Surge protection", values: ["✓", "✓", "✓"] },
                { label: "CDN", values: ["Global", "Global", "Global"] },
                { label: "Uptime", values: ["—", "Standard", "Standard"] },
              ]}
            />
            <ComparisonCategory
              title="SEO & AEO"
              plans={["Starter", "Basic", "Premium"]}
              rows={[
                { label: "Kreature AI for SEO & AEO", values: ["✓", "✓", "✓"] },
                { label: "On-page SEO", values: ["✓", "✓", "✓"] },
                { label: "SEO metadata control", values: ["✓", "✓", "✓"] },
                { label: "Alt text control", values: ["✓", "✓", "✓"] },
                { label: "Open Graph settings", values: ["✓", "✓", "✓"] },
                { label: "301 redirects", values: ["—", "✓", "✓"] },
              ]}
            />
          </div>
        </Sec>

        {/* ═══════ COMPARE PLATFORM PLANS ═══════ */}
        <Sec>
          <div className="text-center mb-10">
            <h2 style={{ ...T.h2Section, color: V("color-ink") }}>
              Compare all Platform plans
            </h2>
          </div>
          <div className="max-w-[900px] mx-auto space-y-0">
            <ComparisonCategory
              title="Core capabilities"
              plans={["Team", "Enterprise"]}
              rows={[
                { label: "Site & Workspace", values: ["✓", "✓"] },
                { label: "Localization", values: ["2 locales included", "Custom"] },
                { label: "Kreature Optimize", values: ["Optional add-on", "Custom"] },
                { label: "Kreature Analyze", values: ["Optional add-on", "Custom"] },
              ]}
            />
            <ComparisonCategory
              title="Seats & roles"
              plans={["Team", "Enterprise"]}
              rows={[
                { label: "Full seats", values: ["5 included", "Custom"] },
                { label: "Limited seats", values: ["5 included", "Custom"] },
                { label: "Free seats", values: ["Up to 100", "Custom"] },
              ]}
            />
            <ComparisonCategory
              title="Publishing & staging"
              plans={["Team", "Enterprise"]}
              rows={[
                { label: "Single-page publishing", values: ["✓", "✓"] },
                { label: "Publishing workflows", values: ["✓", "✓"] },
                { label: "Private staging", values: ["—", "✓"] },
                { label: "Custom staging domain", values: ["—", "✓"] },
              ]}
            />
            <ComparisonCategory
              title="Governance"
              plans={["Team", "Enterprise"]}
              rows={[
                { label: "Page branching", values: ["✓", "✓"] },
                { label: "Site activity log & API", values: ["✓", "✓"] },
                { label: "Custom roles", values: ["—", "✓"] },
                { label: "Granular access controls", values: ["—", "✓"] },
                { label: "Design approvals", values: ["—", "✓"] },
              ]}
            />
            <ComparisonCategory
              title="Support & partnership"
              plans={["Team", "Enterprise"]}
              rows={[
                { label: "24/7 priority support", values: ["✓", "✓"] },
                { label: "Guided onboarding", values: ["✓", "✓"] },
                { label: "Dedicated customer success manager", values: ["—", "Available with Premium SLA"] },
                { label: "Phone support", values: ["—", "Available with Premium SLA"] },
              ]}
            />
            <ComparisonCategory
              title="SLAs"
              plans={["Team", "Enterprise"]}
              rows={[
                { label: "Application uptime", values: ["99.90%", "99.90%"] },
                { label: "Hosting uptime", values: ["99.00%", "99.99%"] },
                { label: "Support incident response", values: ["Major: 12h, Minor: 24h", "Major: 1h, Minor: 4h"] },
              ]}
            />
          </div>
        </Sec>

        {/* ═══════ ADD-ONS ═══════ */}
        <Sec bg={V("color-canvas-soft")}>
          <div className="text-center mb-8">
            <h3 style={{ ...T.h3Section, color: V("color-ink") }}>Add-ons</h3>
            <p className="mt-3 max-w-[640px] mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Add-ons help you do more with your site.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addonPlans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="#add-ons-compare" className="inline-flex items-center gap-1" style={{ ...T.body, color: V("color-accent-blue"), fontWeight: 500 }}>
              View all add-on features <Arrow />
            </a>
          </div>
        </Sec>

        {/* ═══════ ECOMMERCE PLANS ═══════ */}
        <Sec>
          <div className="text-center mb-10">
            <h2 style={{ ...T.h2Major, color: V("color-ink") }}>
              Ecommerce plans
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Purchase an ecommerce site plan to unlock features designed especially for online retailers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ecommercePlans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          <div className="text-center mt-6">
            <p style={{ ...T.bodySm, color: V("color-body-mid") }}>
              All prices in USD, per site, per month, plus applicable taxes at checkout.
            </p>
          </div>
        </Sec>

        {/* ═══════ ECOMMERCE COMPARISON ═══════ */}
        <Sec bg={V("color-canvas-soft")}>
          <div className="text-center mb-10">
            <h2 style={{ ...T.h2Section, color: V("color-ink") }}>
              View all plan features
            </h2>
          </div>
          <div className="max-w-[900px] mx-auto space-y-0">
            <ComparisonCategory
              title="Publishing"
              plans={["Standard", "Plus", "Advanced"]}
              rows={[
                { label: "Ecommerce items", values: ["500", "5,000", "15,000"] },
                { label: "Publish to kreature.io", values: ["✓", "✓", "✓"] },
                { label: "Publish to a custom domain", values: ["✓", "✓", "✓"] },
                { label: "Remove Kreature badge", values: ["✓", "✓", "✓"] },
              ]}
            />
            <ComparisonCategory
              title="Design"
              plans={["Standard", "Plus", "Advanced"]}
              rows={[
                { label: "Custom checkout", values: ["✓", "✓", "✓"] },
                { label: "Custom shopping cart", values: ["✓", "✓", "✓"] },
                { label: "Unbranded emails", values: ["—", "✓", "✓"] },
              ]}
            />
            <ComparisonCategory
              title="Payments"
              plans={["Standard", "Plus", "Advanced"]}
              rows={[
                { label: "Transaction fee", values: ["2%", "0%", "0%"] },
                { label: "Stripe", values: ["✓", "✓", "✓"] },
                { label: "PayPal", values: ["✓", "✓", "✓"] },
                { label: "Apple Pay", values: ["✓", "✓", "✓"] },
              ]}
            />
          </div>
        </Sec>

        {/* ═══════ WORKSPACE PLANS ═══════ */}
        <Sec>
          <div className="text-center mb-8">
            <h2 style={{ ...T.h2Major, color: V("color-ink") }}>
              Workspace plans
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Every Kreature account includes a free Workspace plan. Upgrade yours at any time for enhanced staging and more collaboration tools.
            </p>
          </div>

          {/* Workspace tabs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setWorkspaceTab("teams")}
              className="px-5 py-2.5 rounded transition-colors"
              style={{
                ...T.body,
                fontWeight: 500,
                background: workspaceTab === "teams" ? V("color-ink") : "transparent",
                color: workspaceTab === "teams" ? "#fff" : V("color-ink"),
                border: workspaceTab === "teams" ? "none" : `1px solid ${V("color-hairline")}`,
              }}
            >
              For teams
            </button>
            <button
              onClick={() => setWorkspaceTab("freelancers")}
              className="px-5 py-2.5 rounded transition-colors"
              style={{
                ...T.body,
                fontWeight: 500,
                background: workspaceTab === "freelancers" ? V("color-ink") : "transparent",
                color: workspaceTab === "freelancers" ? "#fff" : V("color-ink"),
                border: workspaceTab === "freelancers" ? "none" : `1px solid ${V("color-hairline")}`,
              }}
            >
              For freelancers & agencies
            </button>
          </div>

          {/* Workspace cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {(workspaceTab === "teams" ? workspaceTeamPlans : workspaceFreelancerPlans).map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          <div className="text-center mt-6">
            <p style={{ ...T.bodySm, color: V("color-body-mid") }}>
              All prices in USD, plus applicable taxes at checkout.
            </p>
          </div>
        </Sec>

        {/* ═══════ ADD SEATS + AI CREDITS ═══════ */}
        <Sec bg={V("color-canvas-soft")}>
          <div className="text-center mb-10">
            <h2 style={{ ...T.h2Section, color: V("color-ink") }}>
              Add seats
            </h2>
            <p className="mt-3 max-w-[640px] mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Add unlimited team members to your Workspace.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            <PlanCard
              plan={{
                name: "Full",
                tagline: "Design full sites or manage admin settings.",
                price: "39",
                period: "/mo",
                periodNote: "per seat, billed yearly",
                cta: "Buy seats",
                ctaHref: "/dashboard",
                featuresLabel: "",
                features: [],
              }}
            />
            <PlanCard
              plan={{
                name: "Limited",
                tagline: "Edit content or build pages with components.",
                price: "15",
                period: "/mo",
                periodNote: "per seat, billed yearly",
                cta: "Buy seats",
                ctaHref: "/dashboard",
                featuresLabel: "",
                features: [],
              }}
            />
            <PlanCard
              plan={{
                name: "Free",
                tagline: "Invite reviewers and commenters from the team page.",
                price: "0",
                period: "/mo",
                cta: "Buy seats",
                ctaHref: "/dashboard",
                featuresLabel: "",
                features: [],
              }}
            />
          </div>

          {/* Add AI credits */}
          <div className="text-center mt-16 mb-6">
            <h2 style={{ ...T.h2Major, color: V("color-ink") }}>
              Add AI credits
            </h2>
            <p className="mt-4 max-w-[480px] mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Power Kreature AI feature usage across your Workspace.
            </p>
          </div>
          <div className="max-w-[400px] mx-auto">
            <PlanCard
              plan={{
                name: "2,000 credits/mo",
                price: "20",
                period: "/mo",
                periodNote: "billed yearly",
                cta: "Buy credits",
                ctaHref: "/dashboard",
                featuresLabel: "",
                features: [],
              }}
            />
          </div>
        </Sec>

        {/* ═══════ BUSINESS IMPACT CALCULATOR ═══════ */}
        <Sec>
          <div
            className="rounded-lg p-12 text-center relative overflow-hidden"
            style={{ background: V("color-ink"), borderRadius: "8px" }}
          >
            <h2 style={{ ...T.h2Major, color: "#fff" }}>
              See the business impact of moving to Kreature
            </h2>
            <p className="mt-4 max-w-[560px] mx-auto" style={{ ...T.body, color: "rgba(255,255,255,0.7)" }}>
              Use this calculator to estimate the impact of Kreature&apos;s platform on your goals &mdash; backed by real-world results.
            </p>
            <div className="mt-8">
              <a
                href="/migrate/business-value-calculator"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{
                  ...T.btn,
                  background: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Use the calculator <Arrow />
              </a>
            </div>
          </div>
        </Sec>

        {/* ═══════ ENTERPRISE CTA ═══════ */}
        <Sec bg={V("color-canvas-soft")}>
          <div className="max-w-[800px]">
            <p style={{ ...T.bodySm, fontWeight: 600, color: V("color-body-mid"), textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
              Need more?
            </p>
            <h3 style={{ ...T.h3Section, color: V("color-ink"), marginBottom: "12px" }}>
              Kreature<span style={{ color: V("color-accent-blue") }}>.</span> for Enterprise
            </h3>
            <p className="mb-8" style={{ ...T.body, color: V("color-body-mid"), maxWidth: "560px" }}>
              Need enterprise-grade scalability, security, and support &mdash; plus a unified dashboard for your design team?
            </p>
            <BlueBtn href="/enterprise/contact-sales">Talk to us <Arrow /></BlueBtn>
            <ul className="mt-8 space-y-4">
              {[
                { label: "Custom billing and invoicing", desc: "Can’t pay with a credit card? We’ll set up custom billing for your accounting team’s requirements." },
                { label: "Enterprise traffic scaling", desc: "Expecting lots of traffic? We can set up custom hosting clusters to ensure Kreature handles your scale." },
                { label: "Security audits and questionnaires", desc: "We’ll work with your team to answer security questionnaires and meet your procurement requirements." },
                { label: "MSAs and SLAs", desc: "We provide enterprise customers with master service agreements (MSA) and service level agreements (SLA) to guarantee compliance and uptime." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1" style={{ color: V("color-accent-blue") }}>
                    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <span style={{ ...T.body, fontWeight: 600, color: V("color-ink") }}>{item.label}</span>
                    <p style={{ ...T.bodySm, color: V("color-body-mid"), marginTop: "4px" }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Sec>

        {/* ═══════ CUSTOMER STORIES ═══════ */}
        <Sec pt={0} pb={144}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/verifone.svg", name: "Verifone", stat: "10x", label: "In cost savings annually" },
              { logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/dropbox.svg", name: "Dropbox", stat: "67%", label: "decrease in dev ticketing" },
              { logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/orangetheory.svg", name: "Orangetheory", stat: "$6M", label: "in cost savings annually" },
              { logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/walker-dunlop.svg", name: "Walker & Dunlop", stat: "56%", label: "increase in form fills" },
              { logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/docusign.svg", name: "Docusign", stat: "1,170%", label: "increase in traffic YoY" },
              { logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/lattice.svg", name: "Lattice", stat: "+20%", label: "increase in site-wide conversion" },
            ].map((story, i) => (
              <div
                key={i}
                className="rounded-lg p-6"
                style={{
                  background: V("color-canvas-soft"),
                  borderRadius: "8px",
                }}
              >
                <img src={story.logo} alt={story.name} style={{ height: "20px", width: "auto", marginBottom: "16px" }} />
                <div style={{ fontSize: "40px", fontWeight: 600, lineHeight: "48px", color: V("color-ink"), marginBottom: "4px" }}>
                  {story.stat}
                </div>
                <p style={{ ...T.body, color: V("color-body-mid"), marginBottom: "12px" }}>
                  {story.label}
                </p>
                <a href="#" style={{ ...T.body, color: V("color-accent-blue"), fontWeight: 500 }}>
                  Read story &rarr;
                </a>
              </div>
            ))}
          </div>
        </Sec>

        {/* ═══════ FAQ ═══════ */}
        <Sec>
          <div className="text-center mb-12">
            <h2 style={{ ...T.h2Major, color: V("color-ink") }}>
              Frequently asked questions
            </h2>
          </div>
          <div className="mb-6">
            <h3 style={{ ...T.h2Section, color: V("color-ink"), marginBottom: "24px" }}>
              Workspace and Site plans
            </h3>
            <FAQAccordion items={faqData.slice(0, 5)} />
          </div>
          <div className="mt-12">
            <h3 style={{ ...T.h2Section, color: V("color-ink"), marginBottom: "24px" }}>
              Capabilities and support
            </h3>
            <FAQAccordion items={faqData.slice(5)} />
          </div>
        </Sec>

        {/* ═══════ HELP LINKS ═══════ */}
        <Sec bg={V("color-canvas-soft")}>
          <div className="text-center mb-6">
            <h2 style={{ ...T.h2Section, color: V("color-ink") }}>
              Need help?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div
              className="p-6 rounded-lg flex flex-col items-start gap-3"
              style={{ borderRadius: "8px", background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}
            >
              <h4 style={{ ...T.h2Section, color: V("color-ink") }}>
                Site vs. Workspace plans
              </h4>
              <p style={{ ...T.body, color: V("color-body-mid") }}>
                Check out this article explaining the different types of Kreature plans.
              </p>
              <a href="/university/lesson/plans" style={{ ...T.body, color: V("color-accent-blue"), fontWeight: 500 }}>
                Read article &rarr;
              </a>
            </div>
            <div
              className="p-6 rounded-lg flex flex-col items-start gap-3"
              style={{ borderRadius: "8px", background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}
            >
              <h4 style={{ ...T.h2Section, color: V("color-ink") }}>
                Looking for support?
              </h4>
              <p style={{ ...T.body, color: V("color-body-mid") }}>
                Visit our support portal for product or account help.
              </p>
              <a href="/university/support" style={{ ...T.body, color: V("color-accent-blue"), fontWeight: 500 }}>
                Go to support portal &rarr;
              </a>
            </div>
          </div>
        </Sec>

        {/* ═══════ CTA SECTION ═══════ */}
        <section
          className="px-5 sm:px-8 py-20 text-center"
          style={{ background: V("color-canvas-soft") }}
        >
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="font-semibold mb-6"
              style={{ ...T.h1, color: V("color-ink") }}
            >
              Get started for free
            </h2>
            <p
              className="max-w-[560px] mx-auto mb-8"
              style={{ ...T.body, color: V("color-body-mid") }}
            >
              Try Kreature for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <BlueBtn href="/signup">Get started &mdash; it&apos;s free <Arrow /></BlueBtn>
              <OutlineBtn href="/product-tour">Watch demo</OutlineBtn>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        className="py-16 px-5 sm:px-8"
        style={{ borderTop: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(footerCols).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="mb-5" style={{ ...T.footerH, color: V("color-ink") }}>
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item: string) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                        style={{ ...T.footerA, color: V("color-body-mid"), textDecoration: "none" }}
                      >
                        {item}
                        {item === "AEO" && (
                          <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded" style={{ background: V("color-accent-blue"), color: "#fff" }}>
                            New
                          </span>
                        )}
                        {item === "Careers" && (
                          <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded" style={{ background: "#e6f4ea", color: "#137333" }}>
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
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}
          >
            <div className="flex items-center gap-4">
              <BrandWordmark />
              <span style={{ fontSize: "12px", color: V("color-mute") }}>
                &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
              </span>
            </div>
            <div className="flex items-center gap-4 flex-wrap" style={{ fontSize: "12px", color: V("color-mute") }}>
              <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: V("color-mute"), textDecoration: "none" }}>
                Made in Kreature
              </a>
              {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map((p) => (
                <a key={p} href="#" className="hover:opacity-70 transition-opacity" style={{ color: V("color-mute"), textDecoration: "none" }}>
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Theme toggle */}
      <ThemeToggle />
    </div>
  );
}
