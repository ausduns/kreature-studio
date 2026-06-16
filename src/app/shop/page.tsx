"use client";

import { useState } from "react";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── STYLES ─── */
const S = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  bodyLg: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  eyebrow: { fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  navLink: { fontSize: "14px", fontWeight: 500 } as React.CSSProperties,
};

/* ─── DATA ─── */
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
    description: "Premium heavyweight cotton t-shirt with embroidered Kreature wordmark. Pre-shrunk, relaxed fit.",
    color: "Black",
    emoji: "👕",
    comingSoon: false,
  },
  {
    id: "hoodie-black",
    name: "Ship Fast Hoodie",
    price: "$75",
    description: "Plush fleece hoodie with tonal Kreature logo on chest and 'Ship Fast' tagline on back. Kangaroo pocket.",
    color: "Black",
    emoji: "🧥",
    comingSoon: false,
  },
  {
    id: "stickers",
    name: "Creature Sticker Pack",
    price: "$12",
    description: "Set of 8 premium vinyl stickers featuring Kreature creature mascots. Weatherproof and UV-resistant.",
    color: "Assorted",
    emoji: "🎨",
    comingSoon: false,
  },
  {
    id: "notebook",
    name: "Ideas Notebook",
    price: "$22",
    description: "Lay-flat dotted notebook with kraft cover and Kreature branding. 192 pages of 100gsm paper.",
    color: "Kraft",
    emoji: "📓",
    comingSoon: false,
  },
  {
    id: "hat",
    name: "Kreature Cap",
    price: "$30",
    description: "Low-profile dad cap with embroidered blue period. Adjustable strap, pre-curved brim.",
    color: "Navy",
    emoji: "🧢",
    comingSoon: true,
  },
  {
    id: "mug",
    name: "Build Mode Mug",
    price: "$18",
    description: "12oz ceramic mug with 'Build Mode' status indicator. Dishwasher and microwave safe.",
    color: "White",
    emoji: "☕",
    comingSoon: true,
  },
];

const FOOTER: Record<string, string[]> = {
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
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
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
      className={`px-5 sm:px-8 py-[clamp(3rem,8vw,7rem)] ${className || ""}`}
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

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "available" | "coming-soon">("all");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "available") return !p.comingSoon;
    if (activeFilter === "coming-soon") return p.comingSoon;
    return true;
  });

  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-ink") }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(59,137,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
              transform: "translate(30%, -30%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[800px]">
              <p
                className="mb-4"
                style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
              >
                Kreature Shop
              </p>
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Rep the brand
              </h1>
              <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Official Kreature merchandise for builders, shippers, and creatives. Premium
                quality goods designed for the people who make the web. New drops every season.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════ TOP SELLING BANNER ═══════ */}
        <Section>
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <h2 className="font-semibold" style={{ ...S.h3, color: V("color-ink") }}>
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
                    ...S.bodySm,
                    fontWeight: 500,
                    padding: "6px 16px",
                    borderRadius: "100px",
                    border: `1px solid ${activeFilter === filter.value ? V("color-accent-blue") : V("color-hairline")}`,
                    background: activeFilter === filter.value ? V("color-accent-blue") : "transparent",
                    color: activeFilter === filter.value ? "#fff" : V("color-body-mid"),
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
                {/* Coming soon overlay */}
                {product.comingSoon && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.4)" }}>
                    <span
                      className="font-semibold px-4 py-2 rounded-full text-sm"
                      style={{ background: V("color-ink"), color: V("color-canvas") }}
                    >
                      Coming soon
                    </span>
                  </div>
                )}

                {/* Product image placeholder */}
                <div
                  className="h-64 flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{ background: V("color-canvas-mid") }}
                >
                  <span className="relative z-10">{product.emoji}</span>
                  {/* Subtle gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${V("color-accent-blue")} 0%, transparent 60%)`,
                    }}
                  />
                </div>

                {/* Product details */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold" style={{ ...S.h4, color: V("color-ink") }}>
                      {product.name}
                    </h3>
                    <div
                      className="font-semibold shrink-0"
                      style={{ fontSize: "18px", color: V("color-accent-blue") }}
                    >
                      {product.price}
                    </div>
                  </div>
                  <p className="mb-4" style={{ ...S.bodySm, color: V("color-body-mid") }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: V("color-canvas-mid"), color: V("color-body-mid") }}
                    >
                      {product.color}
                    </span>
                    {!product.comingSoon ? (
                      <button
                        className="transition-colors inline-flex items-center"
                        style={{
                          ...S.bodySm,
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
                          ...S.bodySm,
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
              <p style={{ ...S.bodyLg, color: V("color-mute") }}>No products match this filter.</p>
            </div>
          )}
        </Section>

        {/* ═══════ COMING SOON HIGHLIGHTS ═══════ */}
        <Section bg="soft">
          <div className="text-center mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Teaser
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Dropping soon
            </h2>
            <p className="max-w-[600px] mx-auto" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              We&apos;re working on expanding the shop with new designs, limited editions, and
              seasonal collections. Here&apos;s a preview of what&apos;s in the pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {[
              { name: "Limited Edition", desc: "Collaboration drops with independent designers. Each run is numbered and never reprinted.", emoji: "✨" },
              { name: "Desk Collection", desc: "Premium desk mats, cable organizers, and workspace accessories for your build station.", emoji: "🖥" },
              { name: "Seasonal Capsule", desc: "Quarterly themed collections with exclusive colorways and designs. First drop: Summer 2026.", emoji: "🌊" },
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
                <h4 className="font-semibold mb-2" style={{ ...S.h4, color: V("color-ink") }}>
                  {drop.name}
                </h4>
                <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{drop.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ NEWSLETTER ═══════ */}
        <Section>
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Stay in the loop
            </h2>
            <p className="mb-8" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Be the first to know about new merch drops, restocks, and exclusive shop offers.
              No spam — just product updates.
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
                className="inline-flex items-center justify-center transition-colors shrink-0"
                style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
              >
                Subscribe <Arrow />
              </button>
            </form>
          </div>
        </Section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        className="py-16 px-5 sm:px-8"
        style={{ borderTop: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(FOOTER).map(([heading, items]) => (
              <div key={heading}>
                <h4
                  className="font-semibold mb-6"
                  style={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px", color: V("color-ink") }}
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
              &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: "12px", color: V("color-mute") }}>
              <a href="#" className="hover:underline">
                Made in Kreature
              </a>
              {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map((p) => (
                <a key={p} href="#" className="hover:underline">
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
