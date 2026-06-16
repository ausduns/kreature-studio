"use client";

import { useState } from "react";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Data ─── */
interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  color: string;
  emoji: string;
  comingSoon: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "tshirt-black",
    name: "Kreature Logo Tee",
    price: "$35",
    description:
      "Premium heavyweight cotton t-shirt with embroidered Kreature wordmark. Pre-shrunk, relaxed fit.",
    color: "Black",
    emoji: "👕",
    comingSoon: false,
  },
  {
    id: "hoodie-black",
    name: "Ship Fast Hoodie",
    price: "$75",
    description:
      "Plush fleece hoodie with tonal Kreature logo on chest and 'Ship Fast' tagline on back. Kangaroo pocket.",
    color: "Black",
    emoji: "🧥",
    comingSoon: false,
  },
  {
    id: "stickers",
    name: "Creature Sticker Pack",
    price: "$12",
    description:
      "Set of 8 premium vinyl stickers featuring Kreature creature mascots. Weatherproof and UV-resistant.",
    color: "Assorted",
    emoji: "🎨",
    comingSoon: false,
  },
  {
    id: "notebook",
    name: "Ideas Notebook",
    price: "$22",
    description:
      "Lay-flat dotted notebook with kraft cover and Kreature branding. 192 pages of 100gsm paper.",
    color: "Kraft",
    emoji: "📓",
    comingSoon: false,
  },
  {
    id: "hat",
    name: "Kreature Cap",
    price: "$30",
    description:
      "Low-profile dad cap with embroidered blue period. Adjustable strap, pre-curved brim.",
    color: "Navy",
    emoji: "🧢",
    comingSoon: true,
  },
  {
    id: "mug",
    name: "Build Mode Mug",
    price: "$18",
    description:
      "12oz ceramic mug with 'Build Mode' status indicator. Dishwasher and microwave safe.",
    color: "White",
    emoji: "☕",
    comingSoon: true,
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

/* ─── Shared Components ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

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
              Official Kreature merchandise for builders, shippers, and
              creatives. Rep the brand.
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
export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "available" | "coming-soon"
  >("all");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "available") return !p.comingSoon;
    if (activeFilter === "coming-soon") return p.comingSoon;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "120px",
          background: V("color-ink"),
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,137,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25"
          style={{
            background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
            transform: "translate(30%, -30%)",
          }}
        />

        <div
          className="relative z-10 mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <div style={{ maxWidth: "800px" }}>
            <p
              className="mb-4"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: V("color-accent-blue"),
              }}
            >
              Kreature Shop
            </p>
            <h1
              className="font-heading tracking-tight mb-6"
              style={{
                fontSize: "80px",
                fontWeight: 600,
                lineHeight: "83.2px",
                letterSpacing: "-0.8px",
                color: V("color-canvas"),
              }}
            >
              Rep the brand
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-mute-soft"),
                maxWidth: "650px",
              }}
            >
              Official Kreature merchandise for builders, shippers, and
              creatives. Premium quality goods designed for the people who make
              the web. New drops every season.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <h2
              className="font-heading"
              style={{
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "40px",
                color: V("color-ink"),
              }}
            >
              All products
            </h2>
            <div className="flex gap-2">
              {[
                { label: "All", value: "all" as const },
                { label: "Available now", value: "available" as const },
                { label: "Coming soon", value: "coming-soon" as const },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className="transition-all"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "6px 16px",
                    borderRadius: "100px",
                    border: `1px solid ${
                      activeFilter === filter.value
                        ? V("color-accent-blue")
                        : V("color-hairline")
                    }`,
                    background:
                      activeFilter === filter.value
                        ? V("color-accent-blue")
                        : "transparent",
                    color:
                      activeFilter === filter.value
                        ? "#fff"
                        : V("color-body-mid"),
                    cursor: "pointer",
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-xl overflow-hidden group transition-all hover:shadow-lg relative"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                {product.comingSoon && (
                  <div
                    className="absolute inset-0 z-10 flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                  >
                    <span
                      className="font-semibold px-4 py-2 rounded-full text-sm"
                      style={{
                        background: V("color-ink"),
                        color: V("color-canvas"),
                      }}
                    >
                      Coming soon
                    </span>
                  </div>
                )}

                <div
                  className="h-64 flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{ background: V("color-canvas-mid") }}
                >
                  <span className="relative z-10">{product.emoji}</span>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${V("color-accent-blue")} 0%, transparent 60%)`,
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="font-heading"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        color: V("color-ink"),
                      }}
                    >
                      {product.name}
                    </h3>
                    <div
                      className="font-semibold shrink-0"
                      style={{
                        fontSize: "18px",
                        color: V("color-accent-blue"),
                      }}
                    >
                      {product.price}
                    </div>
                  </div>
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "14px",
                      lineHeight: "22.4px",
                      color: V("color-body-mid"),
                    }}
                  >
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: V("color-canvas-mid"),
                        color: V("color-body-mid"),
                      }}
                    >
                      {product.color}
                    </span>
                    {!product.comingSoon ? (
                      <button
                        className="transition-colors inline-flex items-center"
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: V("color-accent-blue"),
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Add to cart <Arrow />
                      </button>
                    ) : (
                      <button
                        className="transition-colors inline-flex items-center"
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: V("color-mute"),
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Notify me <Arrow />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.5,
                  color: V("color-mute"),
                }}
              >
                No products match this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon Highlights */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "1440px" }}
        >
          <div className="mb-14">
            <p
              className="mb-4"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: V("color-accent-blue"),
              }}
            >
              Teaser
            </p>
            <h2
              className="font-heading tracking-tight mb-4"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "52px",
                color: V("color-ink"),
              }}
            >
              Dropping soon
            </h2>
            <p
              className="mx-auto"
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                color: V("color-body-mid"),
                maxWidth: "600px",
              }}
            >
              We&apos;re working on expanding the shop with new designs, limited
              editions, and seasonal collections. Here&apos;s a preview of
              what&apos;s in the pipeline.
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-6 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            {[
              {
                name: "Limited Edition",
                desc: "Collaboration drops with independent designers. Each run is numbered and never reprinted.",
                emoji: "✨",
              },
              {
                name: "Desk Collection",
                desc: "Premium desk mats, cable organizers, and workspace accessories for your build station.",
                emoji: "🖥",
              },
              {
                name: "Seasonal Capsule",
                desc: "Quarterly themed collections with exclusive colorways and designs. First drop: Summer 2026.",
                emoji: "🌊",
              },
            ].map((drop) => (
              <div
                key={drop.name}
                className="rounded-xl p-6 text-center"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div className="text-3xl mb-4">{drop.emoji}</div>
                <h4
                  className="font-heading mb-2"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {drop.name}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "22.4px",
                    color: V("color-body-mid"),
                  }}
                >
                  {drop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "600px" }}
        >
          <h2
            className="font-heading tracking-tight mb-4"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "52px",
              color: V("color-ink"),
            }}
          >
            Stay in the loop
          </h2>
          <p
            className="mb-8"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: V("color-body-mid"),
            }}
          >
            Be the first to know about new merch drops, restocks, and exclusive
            shop offers. No spam — just product updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 py-3.5 px-5 rounded-lg text-base outline-none transition-colors"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
                color: V("color-ink"),
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center transition-colors shrink-0 font-medium"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: V("color-accent-blue"),
                color: "#fff",
              }}
            >
              Subscribe <Arrow />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
