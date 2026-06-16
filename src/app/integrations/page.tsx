"use client";

import { useState, useMemo } from "react";

/* ─── CSS Var Helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── CDNs ─── */
const CDN_LOGO = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const CDN_INTEGRATION =
  "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7";
const PLACEHOLDER_IMG = `${CDN_LOGO}/686294e363eb7e215bd2337f_63da7b29ef9e6444889d95cf_hassaan-qaiser-bKfkhVRAJTQ-unsplash.jpg`;

/* ─── Typography (EXACT) ─── */
const T = {
  h1: {
    fontSize: "72px",
    fontWeight: 600,
    lineHeight: "74.88px",
    letterSpacing: "-0.72px",
  } as React.CSSProperties,
  h2: {
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "49.92px",
  } as React.CSSProperties,
  h3: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "31.2px",
  } as React.CSSProperties,
  bodyLg: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28.8px",
  } as React.CSSProperties,
  body: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "25.6px",
  } as React.CSSProperties,
  bodySm: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22.4px",
  } as React.CSSProperties,
  categoryTag: {
    fontSize: "12.8px",
    fontWeight: 550,
    lineHeight: "15.36px",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
  } as React.CSSProperties,
  btn: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "19.2px",
    padding: "16px 24px",
    borderRadius: "4px",
  } as React.CSSProperties,
};

/* ─── Arrow Helper ─── */
function Arrow() {
  return (
    <span
      className="ml-1 text-[1.1em] leading-none select-none"
      aria-hidden="true"
    >
      &rarr;
    </span>
  );
}

/* ─── Filter Categories ─── */
const FILTER_CATEGORIES = [
  "Accessibility tools",
  "Analytics and targeting tools",
  "Anti-spam",
  "App integration and task automation",
  "Assets",
  "Authentication tools",
  "Calendars and scheduling",
  "Cloneable resources",
  "Content Marketing",
  "CRM",
  "Customer engagement",
  "Domains",
  "Ecommerce",
  "Email hosting",
  "Email marketing",
  "Event Management",
  "Faceted navigation",
  "Forms & surveys",
  "Job board",
  "Localization",
  "Maps",
  "Memberships and user login",
  "Migration tools",
  "Music streaming",
  "Office suites",
  "Payment processing",
  "Plugins and integrations library",
  "Quizzes",
  "Search",
  "Social media",
  "Templates",
];

/* ─── Integration Cards Data ─── */
interface Integration {
  name: string;
  logo: string;
  desc: string;
  category: string;
}

const INTEGRATIONS: Integration[] = [
  {
    name: "OpenStreetMap",
    logo: `${CDN_INTEGRATION}/68dd0c50ae37def572b6d1b8_openstreetmap-logo.png`,
    desc: "Connect OpenStreetMap’s collaborative mapping platform to your Kreature site for cost-effective, customizable maps. Display store locations, visualize service areas, and create interactive location-based experiences without Google Maps fees or restrictions.",
    category: "Maps",
  },
  {
    name: "Zapier",
    logo: `${CDN_INTEGRATION}/69f6ef5fb0cc5688eb1cf384_icon.jpeg`,
    desc: "Connect Zapier with Kreature to automate form routing, CMS updates, and ecommerce order processing across 7,000+ apps.",
    category: "App integration and task automation",
  },
  {
    name: "Google Docs",
    logo: `${CDN_INTEGRATION}/69e9fc154461b269300e6b81_icon.jpeg`,
    desc: "Connect Google Docs with Kreature to embed live documents, sync content to CMS Collections, or build custom API publishing pipelines.",
    category: "App integration and task automation",
  },
  {
    name: "Formly",
    logo: `${CDN_INTEGRATION}/6a1ea786f6532e79d6bad9b8_icon.jpeg`,
    desc: "Connect Formly, an attribute-driven multistep form library by VI Designs, with Kreature to add multistep flows, conditional logic, and progress indicators to native form blocks without custom JavaScript.",
    category: "Forms & surveys",
  },
  {
    name: "Consent Pro by Finsweet",
    logo: `${CDN_INTEGRATION}/69f339d23b4a686eef349bbf_icon.jpeg`,
    desc: "Connect Consent Pro with Kreature to manage cookie consent and privacy compliance directly inside your Kreature project.",
    category: "Legal compliance solutions",
  },
  {
    name: "Smartarget Contact Us",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Smartarget Contact Us with Kreature to add a floating multi-channel contact widget that lets visitors reach you on WhatsApp, Telegram, email, and 12+ messaging platforms.",
    category: "App integration and task automation",
  },
  {
    name: "CMS Bridge",
    logo: PLACEHOLDER_IMG,
    desc: "Connect CMS Bridge with Kreature to sync Airtable records to your CMS collections with record-level control over content states and publishing.",
    category: "App integration and task automation",
  },
  {
    name: "Osmo SVG Import",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Osmo SVG Import with Kreature to add fully editable SVG elements to your site without character limits or manual code editing.",
    category: "App integration and task automation",
  },
  {
    name: "Telegram Chat - Contact Us",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Telegram Chat - Contact Us to your Kreature site to add a floating Telegram chat widget that lets visitors message you directly from any page.",
    category: "App integration and task automation",
  },
  {
    name: "Form Fields Pro",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Form Fields Pro with Kreature to add advanced input types, including searchable selects, date pickers, number range pickers, and file uploaders, to native Kreature forms.",
    category: "App integration and task automation",
  },
  {
    name: "Countdown Bar Timer",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Countdown Bar Timer with Kreature to add urgency-driven countdown timers to landing pages, product pages, and sitewide promotions.",
    category: "Analytics and targeting tools",
  },
  {
    name: "Vault Vision User Authentication",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Vault Vision with Kreature to add passwordless login, social sign-in, and per-page access control to any Kreature site without backend code.",
    category: "App integration and task automation",
  },
  {
    name: "Letterdrop",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Letterdrop to Kreature to publish, manage, and track B2B blog content directly from a collaborative content platform.",
    category: "Email marketing",
  },
  {
    name: "Smartarget Reviews",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Smartarget Reviews with Kreature to display curated customer testimonials and star ratings on your site without building a review system from scratch.",
    category: "Analytics and targeting tools",
  },
  {
    name: "TripleChecker",
    logo: PLACEHOLDER_IMG,
    desc: "Connect TripleChecker, an automated proofreading tool, with Kreature to scan your published site for spelling errors, grammar mistakes, and broken links on a recurring schedule.",
    category: "Analytics and targeting tools",
  },
  {
    name: "Integrately",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Integrately with Kreature to automate form submissions, CMS updates, and e-commerce orders across 1,500+ apps without writing code.",
    category: "App integration and task automation",
  },
  {
    name: "Flowstar: Contact Form Builder",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Flowstar: Contact Form Builder with Kreature to add multi-step booking, order, registration, and pre-order forms with embedded, popup, and targeted widget display modes.",
    category: "Forms & surveys",
  },
  {
    name: "Cookie Consent",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Cookie Consent, a GDPR and CCPA compliance app, with Kreature to add configurable cookie banners that block third-party scripts until visitors make a consent choice.",
    category: "Analytics and targeting tools",
  },
  {
    name: "ScheduleFlow",
    logo: PLACEHOLDER_IMG,
    desc: "Connect ScheduleFlow to Kreature to schedule site and CMS publishes at specific dates and times.",
    category: "App integration and task automation",
  },
  {
    name: "Twise",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Twise, an AI chat assistant, with Kreature to answer visitor questions, capture leads, and respond in 92 languages using a chat widget that learns from your site content.",
    category: "Customer engagement",
  },
  {
    name: "Postblaster",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Postblaster, a LinkedIn automation tool, with Kreature to automatically generate and publish LinkedIn posts when you add new content to your CMS collections.",
    category: "Social media",
  },
  {
    name: "Visual Sitemap",
    logo: PLACEHOLDER_IMG,
    desc: "Add Visual Sitemap to Kreature to generate styled HTML sitemap pages directly on your canvas — no code required.",
    category: "Templates",
  },
  {
    name: "Flowstar: Banners",
    logo: PLACEHOLDER_IMG,
    desc: "Connect Flowstar: Banners with Kreature to display promotional pop-ups and announcement banners without writing code.",
    category: "Customer engagement",
  },
  {
    name: "Remove Background",
    logo: `${CDN_INTEGRATION}/6a2f5b361372de816be7d658_icon.png`,
    desc: "Connect Remove Background with Kreature to remove image backgrounds on the canvas without uploading files to external servers.",
    category: "Assets",
  },
];

/* ─── Brand Logo Data ─── */
const BRAND_LOGOS = [
  { name: "IDEO", src: `${CDN_LOGO}/68c9a39c128261b2128439dc_ideo-logo.svg` },
  {
    name: "Monday.com",
    src: `${CDN_LOGO}/68c9a39c128261b2128439c8_monday.com.svg`,
  },
  { name: "BBDO", src: `${CDN_LOGO}/68c9a39c128261b2128439db_bbdo-logo.svg` },
  {
    name: "The New York Times",
    src: `${CDN_LOGO}/68c9a39c128261b2128439d9_nytimes.svg`,
  },
  { name: "TED", src: `${CDN_LOGO}/68c9a39c128261b2128439d8_TED.svg` },
  {
    name: "Docusign",
    src: `${CDN_LOGO}/68c9a39c128261b2128439c9_Docusign-dark.svg`,
  },
];

/* ─── Constants ─── */
const TOTAL_PAGES = 29;
const CARDS_PER_PAGE = 24;

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */
export default function IntegrationsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredIntegrations = useMemo(() => {
    if (!activeFilter) return INTEGRATIONS;
    return INTEGRATIONS.filter(
      (i) => i.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter]);

  const paginatedIntegrations = useMemo(() => {
    return filteredIntegrations.slice(0, CARDS_PER_PAGE);
  }, [filteredIntegrations]);

  return (
    <div
      className="page-wrapper"
      style={{ background: V("color-canvas"), color: V("color-body") }}
    >
      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "0px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "800px" }}
        >
          <h1
            className="font-heading tracking-tight mb-6"
            style={{
              ...T.h1,
              color: V("color-ink"),
            }}
          >
            Kreature Integrations
          </h1>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: V("color-body"),
              maxWidth: "640px",
            }}
          >
            Power your website with a library of integrations for everything
            from analytics and A/B testing to ecommerce and sales.
          </p>
        </div>

        {/* Trusted by + logos */}
        <div
          className="mx-auto px-5 sm:px-8 text-center mb-10"
          style={{ maxWidth: "1200px" }}
        >
          <p
            className="mb-6 uppercase tracking-wider"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: V("color-mute"),
            }}
          >
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-40">
            {BRAND_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-5 w-auto"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
          <div
            className="rounded-lg overflow-hidden"
            style={{
              border: `1px solid ${V("color-hairline")}`,
              boxShadow: V("shadow-card-strong"),
              borderRadius: "8px",
            }}
          >
            <img
              src={`${CDN_LOGO}/68c9a39c128261b2128439d0_webflow-desktop.webp`}
              alt="Kreature platform preview"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FILTER SECTION
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "48px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <h2
            className="font-heading tracking-tight mb-10"
            style={{
              ...T.h2,
              color: V("color-ink"),
            }}
          >
            Integration types
          </h2>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            {FILTER_CATEGORIES.map((cat, idx) => (
              <span key={cat} className="flex items-center">
                {idx > 0 && (
                  <span
                    className="mx-2 select-none"
                    style={{ color: V("color-hairline") }}
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
                <button
                  type="button"
                  onClick={() =>
                    setActiveFilter(
                      activeFilter?.toLowerCase() === cat.toLowerCase()
                        ? null
                        : cat
                    )
                  }
                  className="transition-colors hover:underline whitespace-nowrap"
                  style={{
                    fontSize: "16px",
                    fontWeight:
                      activeFilter?.toLowerCase() === cat.toLowerCase()
                        ? 600
                        : 400,
                    lineHeight: "25.6px",
                    color:
                      activeFilter?.toLowerCase() === cat.toLowerCase()
                        ? V("color-ink")
                        : V("color-body-mid"),
                    textDecoration:
                      activeFilter?.toLowerCase() === cat.toLowerCase()
                        ? "underline"
                        : "none",
                    textUnderlineOffset: "4px",
                    textDecorationThickness: "2px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {cat}
                </button>
              </span>
            ))}
          </div>

          {activeFilter && (
            <button
              type="button"
              onClick={() => setActiveFilter(null)}
              className="mt-6 transition-colors hover:underline inline-flex items-center"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: V("color-accent-blue"),
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Clear filter
            </button>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTEGRATION CARDS GRID
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "32px",
          paddingBottom: "64px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          {paginatedIntegrations.length === 0 ? (
            <div
              className="text-center py-20"
              style={{ color: V("color-mute") }}
            >
              <p style={{ ...T.bodyLg }}>
                No results &mdash; Sorry, we couldn&apos;t find any matches to
                your search.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedIntegrations.map((integration) => (
                <a
                  key={integration.name}
                  href={`/integrations/${integration.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")}`}
                  className="group rounded-xl p-6 transition-all duration-300 flex flex-col"
                  style={{
                    background: V("color-canvas"),
                    border: `1px solid ${V("color-hairline")}`,
                    borderRadius: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = V("color-hairline");
                    e.currentTarget.style.boxShadow = V("shadow-card");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = V("color-hairline");
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Logo */}
                  <div className="w-12 h-12 rounded-lg mb-4 overflow-hidden flex items-center justify-center shrink-0">
                    <img
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading mb-2"
                    style={{
                      ...T.h3,
                      color: V("color-ink"),
                    }}
                  >
                    {integration.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-5 flex-1"
                    style={{
                      ...T.body,
                      color: V("color-body-mid"),
                    }}
                  >
                    {integration.desc}
                  </p>

                  {/* Category tag + Learn more */}
                  <div className="flex items-center justify-between mt-auto">
                    <span
                      className="tracking-wider"
                      style={{
                        ...T.categoryTag,
                        color: V("color-mute"),
                        textTransform: "uppercase",
                      }}
                    >
                      {integration.category}
                    </span>
                    <span
                      className="transition-colors inline-flex items-center"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: V("color-body-mid"),
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = V("color-ink");
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = V("color-body-mid");
                      }}
                    >
                      Learn more <Arrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div
            className="flex items-center justify-center gap-6 mt-14"
            style={{ color: V("color-body-mid") }}
          >
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="transition-colors hover:underline disabled:opacity-30 disabled:cursor-default disabled:no-underline inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: V("color-body-mid"),
                background: "none",
                border: "none",
                cursor: currentPage <= 1 ? "default" : "pointer",
                padding: 0,
              }}
            >
              Previous
            </button>

            <span
              style={{
                fontSize: "14px",
                color: V("color-mute"),
              }}
            >
              {currentPage} / {TOTAL_PAGES}
            </span>

            <button
              type="button"
              disabled={currentPage >= TOTAL_PAGES}
              onClick={() =>
                setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))
              }
              className="transition-colors hover:underline disabled:opacity-30 disabled:cursor-default disabled:no-underline inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: V("color-body-mid"),
                background: "none",
                border: "none",
                cursor: currentPage >= TOTAL_PAGES ? "default" : "pointer",
                padding: 0,
              }}
            >
              Load more
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
          ═══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-heading tracking-tight mb-4"
                style={{
                  ...T.h2,
                  color: V("color-ink"),
                }}
              >
                Get started for free
              </h2>
              <p
                className="mb-8"
                style={{
                  ...T.body,
                  color: V("color-body-mid"),
                  maxWidth: "480px",
                }}
              >
                Try Kreature for as long as you like with our free Starter plan.
                Purchase a paid Site plan to publish, host, and unlock additional
                features.
              </p>
              <a
                href="/signup"
                className="inline-flex items-center transition-opacity hover:opacity-90"
                style={{
                  ...T.btn,
                  background: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Get started &mdash; it&apos;s free
              </a>
            </div>

            <div className="flex justify-center">
              <img
                src={`${CDN_LOGO}/6894d7a5d9b174d9177a363c_pagebuilding-cta.avif`}
                alt="Kreature page building preview"
                className="max-w-full h-auto rounded-lg"
                style={{
                  borderRadius: "8px",
                  boxShadow: V("shadow-card-strong"),
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
