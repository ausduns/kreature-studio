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

interface Library {
  name: string;
  creator: string;
  price: string;
  isFree: boolean;
  layouts: number;
  dateAdded: string;
  tags: string[];
}

const PAID_LIBRARIES: Library[] = [
  {
    name: "Spark UI",
    creator: "Flowbase",
    price: "$79",
    isFree: false,
    layouts: 60,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions", "custom code"],
  },
  {
    name: "Zen UI",
    creator: "Flowbase",
    price: "$79",
    isFree: false,
    layouts: 58,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions", "custom code"],
  },
  {
    name: "Jambo",
    creator: "Flowbase",
    price: "$79",
    isFree: false,
    layouts: 63,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions", "custom code"],
  },
  {
    name: "Nimbus Library",
    creator: "Wavesdesign",
    price: "$129",
    isFree: false,
    layouts: 107,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "Wonder UI",
    creator: "Flowbase",
    price: "$79",
    isFree: false,
    layouts: 56,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions", "custom code"],
  },
  {
    name: "Nixar Library",
    creator: "Nixar",
    price: "$299",
    isFree: false,
    layouts: 250,
    dateAdded: "Nov 09, 2022",
    tags: [],
  },
  {
    name: "Akita Library",
    creator: "Azwedo",
    price: "$79",
    isFree: false,
    layouts: 83,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "BeFlow Library",
    creator: "BeFlow",
    price: "$79",
    isFree: false,
    layouts: 50,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "Ocelot Library",
    creator: "Maxim White",
    price: "$79",
    isFree: false,
    layouts: 50,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Sentinel Library",
    creator: "Aaron Grieve",
    price: "$79",
    isFree: false,
    layouts: 50,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "Adapto Library",
    creator: "Medium Rare",
    price: "$129",
    isFree: false,
    layouts: 69,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "Bento Library",
    creator: "Eclipse SRL",
    price: "$129",
    isFree: false,
    layouts: 90,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Ease Library",
    creator: "Over Sight",
    price: "$129",
    isFree: false,
    layouts: 91,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Glory Library",
    creator: "VictorFlow",
    price: "$129",
    isFree: false,
    layouts: 189,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "Dark Tech Library",
    creator: "Wavesdesign",
    price: "$79",
    isFree: false,
    layouts: 71,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "Koala UI Library",
    creator: "Koala UI",
    price: "$79",
    isFree: false,
    layouts: 60,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "Studio Library",
    creator: "Nikolai Bain",
    price: "$79",
    isFree: false,
    layouts: 50,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "StudioForm Library",
    creator: "BMG.studio",
    price: "$79",
    isFree: false,
    layouts: 36,
    dateAdded: "Nov 09, 2022",
    tags: ["custom code"],
  },
  {
    name: "Cyrus",
    creator: "Flowbase",
    price: "$79",
    isFree: false,
    layouts: 50,
    dateAdded: "Nov 09, 2022",
    tags: [],
  },
  {
    name: "Helio UI",
    creator: "Flowbase",
    price: "$79",
    isFree: false,
    layouts: 75,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions", "custom code"],
  },
  {
    name: "Flowblocks Library",
    creator: "Webestica",
    price: "$149",
    isFree: false,
    layouts: 404,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Root UI Lite",
    creator: "Flowfye",
    price: "$299",
    isFree: false,
    layouts: 200,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
];

const FREE_LIBRARIES: Library[] = [
  {
    name: "Walsh Library",
    creator: "JP",
    price: "$0",
    isFree: true,
    layouts: 99,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Accessible Components",
    creator: "Finsweet",
    price: "$0",
    isFree: true,
    layouts: 26,
    dateAdded: "Nov 09, 2022",
    tags: ["unstyled", "custom code"],
  },
  {
    name: "Memberstack Library",
    creator: "Memberstack",
    price: "$0",
    isFree: true,
    layouts: 49,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Spark Library",
    creator: "Spark",
    price: "$0",
    isFree: true,
    layouts: 114,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "uCode Library",
    creator: "Eclipse SRL",
    price: "$0",
    isFree: true,
    layouts: 31,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "custom code"],
  },
  {
    name: "Avatar Kit Library",
    creator: "Dorian Hoxha",
    price: "$0",
    isFree: true,
    layouts: 40,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Lynx Library",
    creator: "Maxim White",
    price: "$0",
    isFree: true,
    layouts: 30,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Alley Component Library",
    creator: "Flowbase",
    price: "$0",
    isFree: true,
    layouts: 35,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Conversion Flow Library",
    creator: "Conversion Flow",
    price: "$0",
    isFree: true,
    layouts: 50,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Combine Library",
    creator: "Maria Marin",
    price: "$0",
    isFree: true,
    layouts: 60,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Flow Elements Library",
    creator: "Flow Ninja",
    price: "$0",
    isFree: true,
    layouts: 40,
    dateAdded: "Nov 09, 2022",
    tags: ["styled", "interactions"],
  },
  {
    name: "uDesign Library",
    creator: "Eclipse SRL",
    price: "$0",
    isFree: true,
    layouts: 43,
    dateAdded: "Nov 09, 2022",
    tags: ["unstyled", "interactions"],
  },
  {
    name: "Kutup Library",
    creator: "Flowmance",
    price: "$0",
    isFree: true,
    layouts: 40,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "FlowUI Component Library",
    creator: "Flowbase",
    price: "$0",
    isFree: true,
    layouts: 201,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Untitled UI Library",
    creator: "Untitled UI",
    price: "$0",
    isFree: true,
    layouts: 283,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Relume Library Lite",
    creator: "Relume",
    price: "$0",
    isFree: true,
    layouts: 53,
    dateAdded: "Nov 09, 2022",
    tags: ["unstyled"],
  },
  {
    name: "SystemFlow Lite Library",
    creator: "Systemflow",
    price: "$0",
    isFree: true,
    layouts: 100,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Elements Library",
    creator: "BRIX Templates",
    price: "$0",
    isFree: true,
    layouts: 226,
    dateAdded: "Nov 09, 2022",
    tags: ["styled"],
  },
  {
    name: "Waves Library",
    creator: "Wavesdesign",
    price: "$0",
    isFree: true,
    layouts: 49,
    dateAdded: "May 31, 2023",
    tags: ["styled"],
  },
  {
    name: "Flowstica Library",
    creator: "Webestica",
    price: "$0",
    isFree: true,
    layouts: 72,
    dateAdded: "Jul 10, 2023",
    tags: ["styled"],
  },
  {
    name: "Radiant UI Library",
    creator: "Radiant Templates",
    price: "$0",
    isFree: true,
    layouts: 205,
    dateAdded: "Jan 01, 2025",
    tags: ["styled", "interactions"],
  },
];

const TRUSTED_BY_LOGOS = [
  "Dell",
  "Monday.com",
  "Rakuten",
  "The New York Times",
  "TED",
  "Philips",
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

const SORT_OPTIONS = [
  "Newest to oldest",
  "Oldest to newest",
  "Size: high to low",
  "Size: low to high",
  "A-Z",
  "Z-A",
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
              Build amazing sites faster with Kreature Marketplace Libraries.
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

/* ─── Library Card ─── */
function LibraryCard({ lib }: { lib: Library }) {
  return (
    <a
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
      {/* Thumbnail area */}
      <div
        className="h-40 flex items-center justify-center relative"
        style={{ background: V("color-canvas-soft") }}
      >
        <span
          className="text-sm font-semibold"
          style={{ color: V("color-mute") }}
        >
          {lib.name}
        </span>
        {/* View details overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span
            className="text-sm font-medium inline-flex items-center px-3 py-1.5 rounded-full"
            style={{
              background: V("color-canvas"),
              color: V("color-ink"),
              border: `1px solid ${V("color-hairline")}`,
            }}
          >
            View details <Arrow />
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-3">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={V("color-mute")}
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
          <span className="text-xs" style={{ color: V("color-mute") }}>
            {lib.layouts}
          </span>
        </div>
        <p className="text-xs mb-3" style={{ color: V("color-mute") }}>
          This library contains {lib.layouts} layouts
        </p>

        {/* Creator */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: V("color-canvas-soft") }}
          >
            <span
              className="text-[10px] font-bold"
              style={{ color: V("color-body-mid") }}
            >
              {lib.creator.charAt(0)}
            </span>
          </div>
          <span
            className="text-sm font-semibold"
            style={{ color: V("color-ink") }}
          >
            {lib.name}
          </span>
        </div>
        <p className="text-xs mb-1" style={{ color: V("color-mute") }}>
          {lib.creator}
        </p>

        {/* Price row */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-lg font-bold"
            style={{ color: V("color-ink") }}
          >
            {lib.isFree ? "Free" : lib.price}
          </span>
          {lib.isFree && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: V("color-accent-green"),
                color: "#fff",
              }}
            >
              Free
            </span>
          )}
          <span className="text-xs ml-auto" style={{ color: V("color-mute-soft") }}>
            {lib.dateAdded}
          </span>
        </div>

        {/* Tags */}
        {lib.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {lib.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full"
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
      </div>
    </a>
  );
}

/* ─── Page ─── */
export default function LibrariesPage() {
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [sortBy, setSortBy] = useState("Newest to oldest");

  const allLibraries = [...PAID_LIBRARIES, ...FREE_LIBRARIES];

  const filtered = showFreeOnly
    ? allLibraries.filter((lib) => lib.isFree)
    : allLibraries;

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 100px)",
          paddingBottom: "60px",
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

        {/* Trusted by bar */}
        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center mb-12"
          style={{ maxWidth: "1200px" }}
        >
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

        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "800px" }}
        >
          <h1
            className="font-heading tracking-tight mb-6"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "68px",
              letterSpacing: "-0.8px",
              color: V("color-ink"),
            }}
          >
            Build amazing sites faster with Marketplace Libraries
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
            Jump start your site with powerful layouts built by top Kreature
            designers.
          </p>

          {/* Library card carousel placeholder */}
          <div className="flex gap-4 justify-center overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg flex-shrink-0"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                  width: "200px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="text-xs" style={{ color: V("color-mute") }}>
                  Library {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section
        className="sticky top-[68px] z-20"
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
          background: V("color-canvas"),
          borderBottom: `1px solid ${V("color-hairline")}`,
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-4"
          style={{ maxWidth: "1200px" }}
        >
          <div className="flex items-center gap-4 flex-wrap">
            {/* Free only toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFreeOnly}
                onChange={(e) => setShowFreeOnly(e.target.checked)}
                className="sr-only"
              />
              <div
                className="w-9 h-5 rounded-full relative transition-colors"
                style={{
                  background: showFreeOnly
                    ? V("color-accent-blue")
                    : V("color-hairline"),
                }}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full absolute top-0.5 transition-transform bg-white"
                  style={{
                    left: showFreeOnly ? "18px" : "2px",
                  }}
                />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: V("color-body") }}
              >
                Free Libraries
              </span>
            </label>

            {/* Styling filter */}
            <select
              className="text-sm font-medium px-3 py-1.5 rounded-md cursor-pointer"
              style={{
                color: V("color-body"),
                background: V("color-canvas"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <option>Styling: All</option>
              <option>Styled</option>
              <option>Unstyled</option>
            </select>

            {/* Advanced filter */}
            <select
              className="text-sm font-medium px-3 py-1.5 rounded-md cursor-pointer"
              style={{
                color: V("color-body"),
                background: V("color-canvas"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <option>Advanced: All</option>
              <option>Custom code</option>
              <option>Interactions</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: V("color-mute") }}>
              Sort by
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-medium px-3 py-1.5 rounded-md cursor-pointer"
              style={{
                color: V("color-body"),
                background: V("color-canvas"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Library Grid */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lib) => (
              <LibraryCard key={lib.name + lib.creator} lib={lib} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              className="text-center py-20"
              style={{ color: V("color-mute") }}
            >
              <p className="text-lg">
                No libraries match your current filters.
              </p>
              <p className="text-sm mt-2">
                Try adjusting your filters or browse all libraries.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Creator CTA */}
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
          {/* Badge */}
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6"
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
          <h2
            className="font-heading tracking-tight mb-4"
            style={{
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: "58.24px",
              color: V("color-ink"),
            }}
          >
            Become a creator today
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
            }}
          >
            Build your business by selling Libraries in the Kreature
            Marketplace.
          </p>
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
            Get started <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
