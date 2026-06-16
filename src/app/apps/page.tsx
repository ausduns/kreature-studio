"use client";

import { useState } from "react";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Shared ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Data ─── */
const CATEGORIES = [
  "All",
  "AI",
  "Analytics",
  "Asset Management",
  "Automation",
  "Compliance",
  "Content Management",
  "Customer Support",
  "Data Sync",
  "Design",
  "Development and Coding",
  "Ecommerce",
  "Enterprise",
  "Forms and Surveys",
  "Localization",
  "Marketing",
  "Scheduling",
  "SEO",
  "User Management",
  "Utilities",
];

interface AppData {
  name: string;
  slug: string;
  icon: string;
  pricing: string | null;
  installs: string | null;
  badge: string | null;
  desc: string;
}

const NEW_AND_NOTEWORTHY: AppData[] = [
  {
    name: "PayPal Payment Links",
    slug: "paypal",
    icon: "https://cdn.prod.website-files.com/695d2d1724936c45b505c0ac/6984ccea08b3230386c81d23_paypal-rzIc9iIEZxMS8KnldgpwZmXLaSuAhm.png",
    pricing: "Free",
    installs: "100+",
    badge: null,
    desc: "Embed Payment Links & QR for instant checkout, accept PayPal, Venmo, Pay Later, Apple Pay & cards.",
  },
  {
    name: "Google Ads for Webflow",
    slug: "google-ads",
    icon: "https://cdn.prod.website-files.com/63e421146216743f3c52476a/6920acc2fdb98836d5838218_GoogleAdsLogoWhite900x900.png",
    pricing: null,
    installs: "1k+",
    badge: null,
    desc: "Create and manage Google Ads campaigns directly inside Kreature.",
  },
  {
    name: "Adobe Marketo Engage",
    slug: "marketo",
    icon: "https://cdn.prod.website-files.com/6618638b81a66aac6fe84812/69a33cee758aedb7defe1738_Group1%25283%2529.png",
    pricing: null,
    installs: "100+",
    badge: null,
    desc: "Visually style Marketo Engage form embeds directly in Kreature.",
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    icon: "https://uploads-ssl.webflow.com/646d501cb7f050a4493c7b6b/64d66098262013033018505e_HubSpot-sprocket-color.jpg",
    pricing: "Free plan available",
    installs: "5k+",
    badge: null,
    desc: "Designed for seamless integration with HubSpot's new Form Editor, iframes, or Kreature forms.",
  },
  {
    name: "TurboTag",
    slug: "turbotag",
    icon: "https://cdn.prod.website-files.com/63c82fe9a42f4ef7d76ffc52/69e25a6505243db06f9c57b5_TurboTag%252520App%252520icon-ZU76Tlpqsyh0JPhWjR32eejIvxqYeB.png",
    pricing: "Free plan available",
    installs: null,
    badge: "New",
    desc: "Edit Meta Title and Meta Description in bulk, plus slugs, OG links, and SEO issue checks.",
  },
  {
    name: "OneTrust Consent Management",
    slug: "onetrust",
    icon: "https://cdn.prod.website-files.com/686e3dd21b5e5d1e1f2d79e0/699dc2e29324feffe12f7bf7_OT-monogram-900x900full-yh7fSiyDSHX8tJZJ962LtTPIMIW4WQ.png",
    pricing: "Free plan available",
    installs: "100+",
    badge: null,
    desc: "Deploy and manage privacy consent via OneTrust's official Kreature integration.",
  },
  {
    name: "Bynder",
    slug: "bynder",
    icon: "https://uploads-ssl.webflow.com/633b3aa70148ed01998dd742/66b4e48d852e2dcad2d5c2fa_4edbe1a6-ebab-4e52-93a1-b5cdc382acc7.png",
    pricing: null,
    installs: "100+",
    badge: null,
    desc: "Best-in-class enterprise-grade digital asset management tool, now available for Kreature.",
  },
  {
    name: "Relume Site Builder Import",
    slug: "relume-site-builder",
    icon: "https://uploads-ssl.webflow.com/63cb6c771df46cfa36ab9087/65fb3d3fda8553fa4667465f_80d364ec-ce96-46fe-acfe-030fc7dd31d2%2B%25281%2529.png",
    pricing: null,
    installs: "5k+",
    badge: "Trending",
    desc: "Create websites using the Relume Site Builder and import them into Kreature.",
  },
];

const POPULAR_APPS: AppData[] = [
  {
    name: "Figma to Webflow",
    slug: "figma-to-webflow",
    icon: "https://cdn.prod.website-files.com/63d85698e0557a811f5a9841/66f2dacc7a99e1f727ca9548_Figmalogo.png",
    pricing: "Free",
    installs: "5k+",
    badge: "Trending",
    desc: "Sync your design system from Figma to Kreature.",
  },
  {
    name: "Relume Site Builder Import",
    slug: "relume-site-builder",
    icon: "https://uploads-ssl.webflow.com/63cb6c771df46cfa36ab9087/65fb3d3fda8553fa4667465f_80d364ec-ce96-46fe-acfe-030fc7dd31d2%2B%25281%2529.png",
    pricing: null,
    installs: "5k+",
    badge: "Trending",
    desc: "Create websites using the Relume Site Builder and import them into Kreature.",
  },
  {
    name: "SVG Import",
    slug: "svg-import",
    icon: "https://uploads-ssl.webflow.com/6306c9ffb4579f598fdcbcb3/65ba627988c68e48a7503a06_SVGIcon.png",
    pricing: "Free",
    installs: "5k+",
    badge: "Trending",
    desc: "Paste SVG code, import to Kreature as native, editable SVG DOM elements.",
  },
  {
    name: "Zapier",
    slug: "zapier",
    icon: "https://cdn.prod.website-files.com/66df8e0356852f1be10484e6/670ea911244fae7c3b24ad4e_150%2540x2.png",
    pricing: null,
    installs: "5k+",
    badge: "Trending",
    desc: "Zapier empowers teams with no-code automation tools to streamline workflows effortlessly.",
  },
  {
    name: "Finsweet Components",
    slug: "finsweet-components",
    icon: "https://uploads-ssl.webflow.com/638f7017f8f3b49d78e071a0/669ffd86124b2502bf25ee86_3739dc7b-249f-44f1-9228-db244b4e4784.png",
    pricing: "Free plan available",
    installs: "5k+",
    badge: null,
    desc: "Build components that require JS in less time.",
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    icon: "https://uploads-ssl.webflow.com/646d501cb7f050a4493c7b6b/64d66098262013033018505e_HubSpot-sprocket-color.jpg",
    pricing: "Free plan available",
    installs: "5k+",
    badge: null,
    desc: "Designed for seamless integration with HubSpot's new Form Editor, iframes, or Kreature forms.",
  },
  {
    name: "Unsplash",
    slug: "unsplash",
    icon: "https://uploads-ssl.webflow.com/648f9fc0259a699a36b3c256/64cae3839ff94cbabafb8ec7_5c0be4bc-5d72-4b14-a06a-9a480a9f0365.png",
    pricing: "Free",
    installs: "5k+",
    badge: null,
    desc: "Insert beautiful images from Unsplash into your designs.",
  },
  {
    name: "Google site tools for Webflow",
    slug: "google-site-tools",
    icon: "https://uploads-ssl.webflow.com/6618638b81a66aac6fe84812/66bb7d4acc01961f08b144dd_Google%2Bsite%2Btools%2Bfor%2BWebflow%2BLogo%2B1060x1060.png",
    pricing: null,
    installs: "5k+",
    badge: "Trending",
    desc: "Get insights from Google Analytics and Google Search Console directly in Kreature.",
  },
  {
    name: "Slater",
    slug: "slater",
    icon: "https://uploads-ssl.webflow.com/6328b5c7302aa13380f83211/64c6fafebc36807fdc6e9ada_0bfc9f9a-87fc-446a-be2b-4a7548ff6920.png",
    pricing: "Free plan available",
    installs: "5k+",
    badge: null,
    desc: "Slater is the code environment designed for Kreature, powered by AI.",
  },
  {
    name: "LottieFiles for Webflow",
    slug: "lottiefiles",
    icon: "https://uploads-ssl.webflow.com/637825ca02acf00f685ade9c/65d80c0f3ded0d57976c80b2_ae801c17-2505-4c13-bbcf-db20a74e6a52.png",
    pricing: "Free",
    installs: "5k+",
    badge: null,
    desc: "Over 100,000+ free, highly customizable Lottie animations. Hundreds of new animations added daily.",
  },
  {
    name: "Flow Guys Toolkit",
    slug: "flow-guys-toolkit",
    icon: "https://uploads-ssl.webflow.com/631b0fc7483469e1c00877d7/63be0f8cac4c2aacfdecfe80_toolkit-512.png",
    pricing: "Free",
    installs: "5k+",
    badge: null,
    desc: "A suite of finely-tuned tools to supercharge your workflow.",
  },
  {
    name: "Microsoft Clarity",
    slug: "microsoft-clarity",
    icon: "https://cdn.prod.website-files.com/652bdf2abf55b01d9650a200/67350be1e6e3c2f5e7717bcd_MicrosoftClarityLogo.png",
    pricing: "Free",
    installs: "5k+",
    badge: null,
    desc: "Better your site with free behavioral analytics insights, heatmaps, & session replays with Clarity.",
  },
  {
    name: "Ikonik",
    slug: "ikonik",
    icon: "https://uploads-ssl.webflow.com/63876222d52e0522be01178b/6536d355995b1f269c4e7ab4_04034384-7e1e-47e0-bf60-28bee1dc23d2.jpg",
    pricing: "Free",
    installs: "5k+",
    badge: null,
    desc: "Ikonik - 50k+ icons, 45 packages, outlined and filled format, Kreature-friendly, copyright-protected.",
  },
  {
    name: "Make",
    slug: "make",
    icon: "https://uploads-ssl.webflow.com/625734b73e5c610181ab5372/64e790868f98d40fb1a6208c_bd36f5c9-92b3-4e5f-8edd-8d0785c7e242.png",
    pricing: "Free plan available",
    installs: "5k+",
    badge: null,
    desc: "Connect Kreature with other data sources to help you transfer and transform data.",
  },
  {
    name: "Boosters",
    slug: "boosters",
    icon: "https://uploads-ssl.webflow.com/636924a5dcaf93e673e6a2b7/65b872339e0bef0332b073f6_Webflow%2BApps%2BLogo.png",
    pricing: "Free",
    installs: "5k+",
    badge: null,
    desc: "Advanced code solutions added directly inside of Kreature. 100% Free.",
  },
  {
    name: "Better Shadows",
    slug: "better-shadows",
    icon: "https://uploads-ssl.webflow.com/630695800280c7574df4820d/651af73e5dabad3c7033ae32_0ff19827-8760-4456-9901-4eac0101e787.png",
    pricing: "Free",
    installs: "5k+",
    badge: null,
    desc: "Effortlessly create realistic shadows for your elements.",
  },
  {
    name: "Memberstack",
    slug: "memberstack",
    icon: "https://uploads-ssl.webflow.com/633217793e84c50140df3212/6566141e39ff95d578993b13_square-blue%254088.png",
    pricing: null,
    installs: "5k+",
    badge: null,
    desc: "Design & build custom SaaS products and membership sites directly in Kreature.",
  },
  {
    name: "Semflow SEO",
    slug: "semflow",
    icon: "https://cdn.prod.website-files.com/63d05ddc63592bbd40a2be61/67603ba49fd6c5ea04662920_a1bcc81e-cbc1-43cb-a7b1-b8d4abbdcad4.png",
    pricing: null,
    installs: "5k+",
    badge: null,
    desc: "An AI SEO assistant right in Kreature. Do your own SEO and get found on search engines and AI chats.",
  },
];

/* ─── App Card ─── */
function AppCard({ app }: { app: AppData }) {
  return (
    <a
      href={`/apps/detail/${app.slug}`}
      className="group flex flex-col rounded-xl transition-all duration-200"
      style={{
        background: V("color-canvas"),
        border: `1px solid ${V("color-hairline")}`,
        padding: "24px",
        boxShadow: V("shadow-card"),
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = V("color-mute-soft");
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = V("shadow-card-strong");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = V("color-hairline");
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = V("shadow-card");
      }}
    >
      {/* Top row: icon + badges */}
      <div className="flex items-start justify-between mb-3">
        <div
          className="rounded-lg flex-shrink-0 overflow-hidden"
          style={{ width: "48px", height: "48px" }}
        >
          <img
            src={app.icon}
            alt={app.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {app.badge && (
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "18px",
                background:
                  app.badge === "Trending"
                    ? `color-mix(in srgb, ${V("color-accent-purple")} 12%, transparent)`
                    : `color-mix(in srgb, ${V("color-accent-green")} 12%, transparent)`,
                color:
                  app.badge === "Trending"
                    ? V("color-accent-purple")
                    : V("color-accent-green"),
              }}
            >
              {app.badge}
            </span>
          )}
          {app.pricing && (
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "18px",
                background: V("color-canvas-soft"),
                color: V("color-body-mid"),
              }}
            >
              {app.pricing}
            </span>
          )}
        </div>
      </div>

      {/* Name */}
      <h3
        className="mb-1"
        style={{
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "28px",
          color: V("color-ink"),
        }}
      >
        {app.name}
      </h3>

      {/* Installs */}
      {app.installs && (
        <p
          className="mb-2"
          style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "22.4px",
            color: V("color-mute"),
          }}
        >
          {app.installs} installs
        </p>
      )}

      {/* Description */}
      <p
        className="flex-1"
        style={{
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "22.4px",
          color: V("color-body-mid"),
        }}
      >
        {app.desc}
      </p>
    </a>
  );
}

/* ─── Category Pill Bar ─── */
function CategoryBar({ activeCategory }: { activeCategory: string }) {
  return (
    <div
      className="overflow-x-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex items-center gap-2 px-5 sm:px-8 min-w-max">
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              className="flex-shrink-0 rounded-full transition-colors whitespace-nowrap"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22.4px",
                padding: "8px 16px",
                border: `1px solid ${V("color-hairline")}`,
                background: isActive ? V("color-accent-blue") : "transparent",
                color: isActive ? "#ffffff" : V("color-body"),
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function AppsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="text-center"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "800px" }}
        >
          <h1
            className="mb-5"
            style={{
              fontSize: "72px",
              fontWeight: 600,
              lineHeight: "74.88px",
              letterSpacing: "-0.72px",
              color: V("color-ink"),
            }}
          >
            Supercharge your site with Apps
          </h1>
          <p
            className="mx-auto"
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "30px",
              color: V("color-body"),
              maxWidth: "560px",
            }}
          >
            Connect powerful tools to your{" "}
            Kreature
            <span style={{ color: V("color-accent-blue") }}>.</span>{" "}
            site
          </p>
        </div>
      </section>

      {/* ── Category Filter Bar (desktop) ── */}
      <section
        className="hidden md:block sticky top-[68px] z-20"
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
          background: V("color-canvas-soft"),
          borderBottom: `1px solid ${V("color-hairline")}`,
        }}
      >
        <CategoryBar activeCategory={activeCategory} />
      </section>

      {/* ── Category Filter Bar (mobile) ── */}
      <section
        className="md:hidden sticky top-[68px] z-20"
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
          background: V("color-canvas-soft"),
          borderBottom: `1px solid ${V("color-hairline")}`,
        }}
      >
        <CategoryBar activeCategory={activeCategory} />
      </section>

      {/* ── New & Noteworthy ── */}
      <section
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
          <h2
            className="mb-12"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "49.92px",
              color: V("color-ink"),
            }}
          >
            New &amp; Noteworthy
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NEW_AND_NOTEWORTHY.map((app) => (
              <AppCard key={`new-${app.slug}`} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Apps Main Listing ── */}
      <section
        style={{
          paddingTop: "64px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          {/* Section header row */}
          <div className="flex items-center justify-between mb-10">
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "49.92px",
                color: V("color-ink"),
              }}
            >
              Apps
            </h2>
            <div className="flex items-center gap-3">
              {/* Paid + Free dropdown */}
              <select
                className="appearance-none cursor-pointer rounded-md"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "22.4px",
                  padding: "8px 32px 8px 14px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                  color: V("color-ink"),
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23898989' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
              >
                <option>Paid + Free</option>
                <option>Free</option>
                <option>Paid</option>
              </select>

              {/* Popular sort */}
              <select
                className="appearance-none cursor-pointer rounded-md"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "22.4px",
                  padding: "8px 32px 8px 14px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                  color: V("color-ink"),
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23898989' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
              >
                <option>Popular</option>
                <option>Newest</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>

          {/* App grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {POPULAR_APPS.map((app) => (
              <AppCard key={`popular-${app.slug}`} app={app} />
            ))}
          </div>

          {/* Show more */}
          <div className="text-center">
            <button
              className="font-medium transition-colors inline-flex items-center"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.2px",
                padding: "16px 24px",
                borderRadius: "4px",
                border: `1px solid ${V("color-hairline")}`,
                background: V("color-canvas"),
                color: V("color-ink"),
              }}
            >
              Show more
            </button>
          </div>
        </div>
      </section>

      {/* ── Bottom CTAs ── */}
      <section
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
          <div
            className="rounded-2xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8"
            style={{
              background: V("color-canvas-soft"),
              border: `1px solid ${V("color-hairline")}`,
            }}
          >
            <div>
              <h3
                className="mb-2"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "31.2px",
                  color: V("color-ink"),
                }}
              >
                Ready to start building?
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25.6px",
                  color: V("color-body-mid"),
                }}
              >
                Explore the developer docs and learn how to build custom Apps for
                Kreature
                <span style={{ color: V("color-accent-blue") }}>.</span>
              </p>
            </div>
            <a
              href="#"
              className="font-medium transition-colors inline-flex items-center flex-shrink-0"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.2px",
                padding: "16px 24px",
                borderRadius: "4px",
                background: V("color-accent-blue"),
                color: "#ffffff",
              }}
            >
              Developer docs <Arrow />
            </a>
          </div>

          <div className="text-center mt-8">
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22.4px",
                color: V("color-body-mid"),
              }}
            >
              Can&apos;t find an App you&apos;d like?{" "}
              <a
                href="/contact-sales"
                className="underline underline-offset-2 transition-colors"
                style={{
                  color: V("color-accent-blue"),
                }}
              >
                Request an App
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
