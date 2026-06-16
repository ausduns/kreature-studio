"use client";

import { useState, useMemo, useCallback } from "react";

/* ─── CSS Var helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Arrow ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Inline SVG icons ─── */
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

function CloneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

/* ─── Types ─── */
type SiteCategory = "Animation" | "Interactions" | "CMS" | "Ecommerce" | "Portfolio";

interface ShowcaseSite {
  id: number;
  name: string;
  author: string;
  likes: number;
  views: number;
  cloneable: boolean;
  categories: SiteCategory[];
  gradient: string;
}

/* ─── Constants ─── */
const FILTERS: readonly string[] = [
  "All",
  "Animation",
  "Interactions",
  "CMS",
  "Ecommerce",
  "Portfolio",
] as const;

const SORT_OPTIONS = ["Popular", "Recent", "Trending"] as const;

const INITIAL_VISIBLE = 12;

/* ─── Showcase Data ─── */
const SHOWCASE_SITES: ShowcaseSite[] = [
  {
    id: 1,
    name: "Flowfest 2025",
    author: "Osmo",
    likes: 123,
    views: 480,
    cloneable: false,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #146ef5 0%, #7a3dff 100%)",
  },
  {
    id: 2,
    name: "LITHOSQUARE",
    author: "SKAALD",
    likes: 62,
    views: 195,
    cloneable: true,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #080808 0%, #363636 100%)",
  },
  {
    id: 3,
    name: "Bark Studio",
    author: "Joseph Berry",
    likes: 179,
    views: 947,
    cloneable: true,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #ff6b00 0%, #ffae13 100%)",
  },
  {
    id: 4,
    name: "Truus",
    author: "Dennis Snellenberg",
    likes: 137,
    views: 410,
    cloneable: false,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #ed52cb 0%, #7a3dff 100%)",
  },
  {
    id: 5,
    name: "Anthem Creative",
    author: "Greaterthan Studio",
    likes: 33,
    views: 102,
    cloneable: true,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #00d722 0%, #006acc 100%)",
  },
  {
    id: 6,
    name: "GSAP Flip Layout",
    author: "Become",
    likes: 64,
    views: 281,
    cloneable: true,
    categories: ["Animation"],
    gradient: "linear-gradient(135deg, #146ef5 0%, #ed52cb 100%)",
  },
  {
    id: 7,
    name: "BUNKR Design",
    author: "Studio Kanda",
    likes: 49,
    views: 156,
    cloneable: false,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #7a3dff 0%, #080808 100%)",
  },
  {
    id: 8,
    name: "Crisp Loading Animation",
    author: "Osmo",
    likes: 209,
    views: 1000,
    cloneable: true,
    categories: ["Animation"],
    gradient: "linear-gradient(135deg, #ffae13 0%, #ff6b00 100%)",
  },
  {
    id: 9,
    name: "Pause",
    author: "Daymark",
    likes: 61,
    views: 188,
    cloneable: false,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #006acc 0%, #00d722 100%)",
  },
  {
    id: 10,
    name: "Dria Ventures",
    author: "Paper Tiger",
    likes: 48,
    views: 134,
    cloneable: true,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #ee1d36 0%, #ff6b00 100%)",
  },
  {
    id: 11,
    name: "Streamtime",
    author: "Koysor",
    likes: 55,
    views: 172,
    cloneable: true,
    categories: ["CMS"],
    gradient: "linear-gradient(135deg, #146ef5 0%, #00d722 100%)",
  },
  {
    id: 12,
    name: "Joseph Berry Gsap Example",
    author: "Joseph Berry",
    likes: 143,
    views: 860,
    cloneable: true,
    categories: ["Animation"],
    gradient: "linear-gradient(135deg, #7a3dff 0%, #ed52cb 100%)",
  },
  {
    id: 13,
    name: "talcual.studio",
    author: "Dariel Curbelo",
    likes: 58,
    views: 199,
    cloneable: false,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #ffae13 0%, #ed52cb 100%)",
  },
  {
    id: 14,
    name: "Interactions Demo Webflow Conf '25",
    author: "Osmo",
    likes: 94,
    views: 1100,
    cloneable: true,
    categories: ["Interactions"],
    gradient: "linear-gradient(135deg, #146ef5 0%, #ff6b00 100%)",
  },
  {
    id: 15,
    name: "Fixed Underlay Navigation",
    author: "Osmo",
    likes: 32,
    views: 112,
    cloneable: true,
    categories: ["Interactions"],
    gradient: "linear-gradient(135deg, #080808 0%, #5a5a5a 100%)",
  },
  {
    id: 16,
    name: "Osmo",
    author: "Osmo",
    likes: 80,
    views: 301,
    cloneable: false,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #006acc 0%, #146ef5 100%)",
  },
  {
    id: 17,
    name: "Portal to the Future",
    author: "Aaron Rudyk",
    likes: 196,
    views: 1000,
    cloneable: true,
    categories: ["Interactions"],
    gradient: "linear-gradient(135deg, #7a3dff 0%, #146ef5 100%)",
  },
  {
    id: 18,
    name: "Bland AI",
    author: "Khod",
    likes: 32,
    views: 98,
    cloneable: false,
    categories: ["Portfolio"],
    gradient: "linear-gradient(135deg, #363636 0%, #080808 100%)",
  },
];

/* ─── Format helpers ─── */
function formatViews(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`;
  }
  return String(n);
}

/* ─── Site Card ─── */
function SiteCard({ site }: { site: ShowcaseSite }) {
  return (
    <article
      className="group rounded-xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer"
      style={{
        background: V("color-canvas"),
        border: `1px solid ${V("color-hairline")}`,
        boxShadow: V("shadow-card"),
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `var(--shadow-card-strong)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `var(--shadow-card)`;
      }}
    >
      {/* Screenshot area */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <div
          className="absolute inset-0"
          style={{ background: site.gradient }}
        />
        {/* Subtle grid overlay for "website" feel */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Site name overlay on image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-white font-heading opacity-80 group-hover:opacity-100 transition-opacity text-center px-4"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "30px",
              letterSpacing: "-0.24px",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {site.name}
          </span>
        </div>
        {/* Cloneable badge */}
        {site.cloneable && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.9)",
              color: "#080808",
            }}
          >
            <CloneIcon />
            Cloneable
          </div>
        )}
      </div>

      {/* Card info */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3
            className="font-heading mb-0.5"
            style={{
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "25.2px",
              color: V("color-ink"),
            }}
          >
            {site.name}
          </h3>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: V("color-body-mid"),
            }}
          >
            by {site.author}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-auto">
          <span
            className="inline-flex items-center gap-1.5"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: V("color-mute"),
            }}
          >
            <HeartIcon />
            {site.likes}
          </span>
          <span
            className="inline-flex items-center gap-1.5"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: V("color-mute"),
            }}
          >
            <EyeIcon />
            {formatViews(site.views)}
          </span>
          <span
            className="ml-auto text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: V("color-accent-blue") }}
          >
            View details <Arrow />
          </span>
        </div>
      </div>
    </article>
  );
}

/* ─── Page ─── */
export default function MadeInKreaturePage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Popular");
  const [cloneableOnly, setCloneableOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredSites = useMemo(() => {
    let sites = [...SHOWCASE_SITES];

    // Filter by category
    if (activeFilter !== "All") {
      sites = sites.filter((s) => s.categories.includes(activeFilter as SiteCategory));
    }

    // Filter cloneable only
    if (cloneableOnly) {
      sites = sites.filter((s) => s.cloneable);
    }

    // Sort
    switch (sortBy) {
      case "Popular":
        sites.sort((a, b) => b.likes - a.likes);
        break;
      case "Recent":
        sites.sort((a, b) => a.id - b.id);
        break;
      case "Trending":
        sites.sort((a, b) => b.views - a.views);
        break;
    }

    return sites;
  }, [activeFilter, sortBy, cloneableOnly]);

  const visibleSites = filteredSites.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSites.length;

  const showMore = useCallback(() => {
    setVisibleCount((prev) => prev + INITIAL_VISIBLE);
  }, []);

  // Reset visible count when filters change
  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE);
  }, []);

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 104px)",
          paddingBottom: "104px",
          background: V("color-canvas"),
        }}
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-blue")} 6%, transparent)`,
            }}
          />
        </div>

        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "900px" }}
        >
          {/* Eyebrow */}
          <span
            className="inline-block mb-6 font-medium tracking-wide uppercase"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1.4px",
              color: V("color-accent-blue"),
            }}
          >
            Made in Kreature
          </span>

          <h1
            className="font-heading tracking-tight mx-auto"
            style={{
              fontSize: "72px",
              fontWeight: 600,
              lineHeight: "74.88px",
              letterSpacing: "-0.72px",
              color: V("color-ink"),
              maxWidth: "800px",
            }}
          >
            Discover inspiring websites built by the Kreature community
          </h1>

          <p
            className="mx-auto mt-6"
            style={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "25.6px",
              color: V("color-body"),
              maxWidth: "560px",
            }}
          >
            Browse, clone, and customize thousands of websites{" "}
            <a
              href="/templates"
              className="font-medium underline underline-offset-2 decoration-1 transition-colors hover:opacity-80"
              style={{ color: V("color-accent-blue") }}
            >
              #MadeinKreature
            </a>
            .
          </p>
        </div>
      </section>

      {/* ═══════ FILTER / SORT BAR ═══════ */}
      <section
        className="sticky top-[68px] z-50"
        style={{
          background: V("color-canvas"),
          borderBottom: `1px solid ${V("color-hairline")}`,
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4"
          style={{ maxWidth: "1200px" }}
        >
          {/* Filter tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className="shrink-0 px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    background: isActive
                      ? V("color-ink")
                      : "transparent",
                    color: isActive ? V("color-canvas") : V("color-body-mid"),
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = `var(--color-ink)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = `var(--color-body-mid)`;
                    }
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pr-7 pl-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  background: V("color-canvas"),
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                  borderRadius: "4px",
                }}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Cloneable toggle */}
            <label
              className="flex items-center gap-2 cursor-pointer select-none shrink-0"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: cloneableOnly ? V("color-accent-blue") : V("color-body-mid"),
              }}
            >
              <div
                className="relative w-9 h-5 rounded-full transition-colors"
                style={{
                  background: cloneableOnly
                    ? V("color-accent-blue")
                    : V("color-hairline"),
                }}
              >
                <div
                  className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform"
                  style={{
                    left: cloneableOnly ? "calc(100% - 18px)" : "2px",
                  }}
                />
              </div>
              <input
                type="checkbox"
                checked={cloneableOnly}
                onChange={(e) => {
                  setCloneableOnly(e.target.checked);
                  setVisibleCount(INITIAL_VISIBLE);
                }}
                className="sr-only"
              />
              Cloneable only
            </label>

            {/* Showcase CTA (desktop only) */}
            <a
              href="#"
              className="hidden md:inline-flex items-center font-medium transition-all duration-200 shrink-0"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.2px",
                padding: "16px 24px",
                borderRadius: "4px",
                border: `1px solid ${V("color-hairline")}`,
                color: V("color-ink"),
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `var(--color-ink)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `var(--color-hairline)`;
              }}
            >
              Showcase your site
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SHOWCASE GRID ═══════ */}
      <section
        style={{
          paddingTop: "56px",
          paddingBottom: "56px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          {visibleSites.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleSites.map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </div>

              {/* Empty state: no results after filtering */}
              {visibleSites.length === 0 && (
                <div
                  className="text-center py-28"
                  style={{ color: V("color-mute") }}
                >
                  <p
                    className="font-heading mb-2"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: V("color-ink"),
                    }}
                  >
                    No matching sites
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    Try adjusting your filters or check back soon for new
                    submissions.
                  </p>
                </div>
              )}

              {/* Show more */}
              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={showMore}
                    className="inline-flex items-center font-medium transition-all duration-200"
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
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `var(--color-ink)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `var(--color-hairline)`;
                    }}
                  >
                    Show more <Arrow />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Empty state: no results after filtering */
            <div
              className="text-center py-28"
              style={{ color: V("color-mute") }}
            >
              <p
                className="font-heading mb-2"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: V("color-ink"),
                }}
              >
                No matching sites
              </p>
              <p style={{ fontSize: "14px" }}>
                Try adjusting your filters or check back soon for new submissions.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
