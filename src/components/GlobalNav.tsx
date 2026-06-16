"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

const S = {
  navLink: { fontSize: "14px", fontWeight: 500, lineHeight: "22.4px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">→</span>;
}

/* ─── NAV DATA ─── */

type DropdownItem = { label: string; href: string; badge?: string };
type NavSection = { label: string; items: DropdownItem[] };

const PLATFORM_LINKS: NavSection[] = [
  {
    label: "Build",
    items: [
      { label: "Design", href: "/feature/design" },
      { label: "CMS", href: "/feature/cms" },
      { label: "Interactions & Animations", href: "/feature/interactions-animations" },
      { label: "Figma to Kreature", href: "/feature/figma-to-webflow" },
    ],
  },
  {
    label: "Manage",
    items: [
      { label: "Hosting", href: "/feature/hosting" },
      { label: "Localization", href: "/feature/localization" },
      { label: "Ecommerce", href: "/feature/ecommerce" },
    ],
  },
  {
    label: "Optimize",
    items: [
      { label: "SEO", href: "/feature/seo" },
      { label: "Optimize", href: "/feature/optimize" },
      { label: "Analyze", href: "/feature/analyze" },
      { label: "AI", href: "/feature/ai", badge: "New" },
    ],
  },
];

const ECOSYSTEM_LINKS: NavSection[] = [
  {
    label: "Extend",
    items: [
      { label: "Apps", href: "/apps" },
      { label: "Integrations", href: "/integrations" },
      { label: "Libraries", href: "/libraries" },
      { label: "Templates", href: "/templates" },
    ],
  },
  {
    label: "Showcase",
    items: [
      { label: "Made in Kreature", href: "/made-in-webflow" },
      { label: "Customers", href: "/customers" },
      { label: "Certified Partners", href: "/certified-partners" },
    ],
  },
];

const SOLUTIONS_LINKS: NavSection[] = [
  {
    label: "By Role",
    items: [
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Freelancers", href: "/solutions/freelancers" },
      { label: "Developers", href: "/solutions/developers" },
      { label: "Creative Teams", href: "/solutions/brand-creative-teams" },
      { label: "Performance Marketers", href: "/solutions/performance-marketers" },
      { label: "Startups", href: "/solutions/startups" },
    ],
  },
  {
    label: "By Scale",
    items: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Sales", href: "/contact-sales" },
    ],
  },
];

const RESOURCES_LINKS: NavSection[] = [
  {
    label: "Learn",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
      { label: "The Kreature Way", href: "/webflow-way" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    label: "Connect",
    items: [
      { label: "Community", href: "/community" },
      { label: "Brand Guidelines", href: "/brand-guidelines" },
      { label: "Shop", href: "/shop" },
    ],
  },
];

const COMPANY_LINKS: DropdownItem[] = [
  { label: "About Us", href: "/company/about" },
  { label: "Careers", href: "/company/careers" },
  { label: "Trust Center", href: "/trust" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

type DropdownKey = "platform" | "solutions" | "resources" | "ecosystem" | "company" | null;

/* ─── THEME TOGGLE ─── */
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  function t() {
    const n = !dark;
    setDark(n);
    document.documentElement.classList.toggle("dark", n);
    try { localStorage.setItem("theme", n ? "dark" : "light"); } catch {}
  }
  return (
    <button
      onClick={t}
      className="w-9 h-9 rounded-full border flex items-center justify-center text-sm shrink-0"
      style={{ borderColor: V("color-hairline"), color: V("color-ink") }}
      aria-label={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}

/* ─── DROPDOWN ─── */
function DropdownMenu({
  label,
  sections,
  items,
  open,
  onToggle,
  onClose,
  pathname,
}: {
  label: string;
  sections?: NavSection[];
  items?: DropdownItem[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  pathname: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="hover:opacity-70 flex items-center gap-1 transition-colors"
        style={{ ...S.navLink, color: V("color-ink") }}
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-lg p-6 shadow-lg z-[1001] min-w-[640px]"
          style={{
            background: V("color-canvas"),
            border: `1px solid ${V("color-hairline")}`,
            boxShadow: "0 24px 48px rgba(0,0,0,0.12)",
          }}
        >
          {sections ? (
            <div className={`grid grid-cols-${Math.min(sections.length, 4)} gap-8`}
                 style={{ gridTemplateColumns: `repeat(${Math.min(sections.length, 4)}, 1fr)` }}>
              {sections.map((sec) => (
                <div key={sec.label}>
                  <p className="mb-3 font-medium" style={{ fontSize: "12.8px", fontWeight: 550, color: V("color-mute"), textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {sec.label}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {sec.items.map((it) => (
                      <a
                        key={it.href}
                        href={it.href}
                        onClick={onClose}
                        className="flex items-center gap-2 px-2 py-1.5 -mx-2 rounded transition-colors hover:bg-[color-mix(in_srgb,var(--color-canvas-mid)_50%,transparent)]"
                        style={{
                          fontSize: "14px",
                          fontWeight: pathname === it.href ? 500 : 400,
                          color: pathname === it.href ? V("color-accent-blue") : V("color-body"),
                          textDecoration: "none",
                        }}
                      >
                        {it.label}
                        {it.badge && (
                          <span className="text-[0.65rem] font-semibold uppercase px-1.5 py-0.5 rounded-sm" style={{ background: V("color-accent-blue"), color: "#fff" }}>
                            {it.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : items ? (
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 min-w-[320px]">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={onClose}
                  className="block px-2 py-1.5 -mx-2 rounded transition-colors hover:bg-[color-mix(in_srgb,var(--color-canvas-mid)_50%,transparent)]"
                  style={{
                    fontSize: "14px",
                    fontWeight: pathname === it.href ? 500 : 400,
                    color: pathname === it.href ? V("color-accent-blue") : V("color-body"),
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {it.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

/* ─── MOBILE ACCORDION ─── */
function MobileSection({ label, sections, items, pathname, onClose }: {
  label: string;
  sections?: NavSection[];
  items?: DropdownItem[];
  pathname: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3"
        style={{ color: V("color-ink"), fontSize: "16px", fontWeight: 500 }}
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5"
             style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.15s" }}>
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>
      {open && (
        <div className="pb-3 pl-4 space-y-2">
          {(sections ? sections.flatMap((s) => s.items) : items || []).map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={onClose}
              className="block py-1.5"
              style={{
                fontSize: "14px",
                color: pathname === it.href ? V("color-accent-blue") : V("color-body-mid"),
                textDecoration: "none",
                fontWeight: pathname === it.href ? 500 : 400,
              }}
            >
              {it.label}
              {it.badge && (
                <span className="ml-2 text-[0.65rem] font-semibold uppercase px-1.5 py-0.5 rounded-sm" style={{ background: V("color-accent-blue"), color: "#fff" }}>
                  {it.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── GLOBAL NAV ─── */
export default function GlobalNav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Restore theme from localStorage
    try {
      if (localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark");
    } catch {}
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [pathname]);

  function toggleDropdown(key: DropdownKey) {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }

  function isActive(href: string) { return pathname === href; }

  return (
    <>
      {/* ═══════ PROMO BAR ═══════ */}
      <aside role="complementary" style={{ background: "transparent", padding: 0 }}>
        <a
          href="/feature/ai"
          className="flex items-center justify-center w-full transition-opacity"
          style={{
            color: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            padding: "12px 0",
            background: V("color-accent-blue"),
          }}
        >
          New: Kreature AI — Build sites with intelligence <Arrow />
        </a>
      </aside>

      {/* ═══════ HEADER ═══════ */}
      <header
        className="sticky top-0 z-[999] h-[68px] flex items-center transition-colors"
        style={{
          background: scrolled ? V("color-canvas") : V("color-canvas"),
          borderBottom: scrolled ? `1px solid ${V("color-hairline")}` : `1px solid transparent`,
        }}
      >
        <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 flex items-center justify-between h-full">
          {/* Logo + wordmark */}
          <a href="/" className="shrink-0 flex items-center gap-2.5">
            <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="h-[42px] w-auto logo-dark" />
            <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-[42px] w-auto logo-light" />
            <span className="font-semibold text-xl tracking-tight" style={{ color: V("color-ink") }}>
              Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6" style={{ color: V("color-ink") }}>
            <DropdownMenu label="Platform" sections={PLATFORM_LINKS} open={openDropdown === "platform"} onToggle={() => toggleDropdown("platform")} onClose={() => setOpenDropdown(null)} pathname={pathname} />
            <DropdownMenu label="Solutions" sections={SOLUTIONS_LINKS} open={openDropdown === "solutions"} onToggle={() => toggleDropdown("solutions")} onClose={() => setOpenDropdown(null)} pathname={pathname} />
            <DropdownMenu label="Ecosystem" sections={ECOSYSTEM_LINKS} open={openDropdown === "ecosystem"} onToggle={() => toggleDropdown("ecosystem")} onClose={() => setOpenDropdown(null)} pathname={pathname} />
            <DropdownMenu label="Resources" sections={RESOURCES_LINKS} open={openDropdown === "resources"} onToggle={() => toggleDropdown("resources")} onClose={() => setOpenDropdown(null)} pathname={pathname} />
            <DropdownMenu label="Company" items={COMPANY_LINKS} open={openDropdown === "company"} onToggle={() => toggleDropdown("company")} onClose={() => setOpenDropdown(null)} pathname={pathname} />
            <a href="/enterprise" className="hover:opacity-70 transition-colors" style={{ ...S.navLink, color: isActive("/enterprise") ? V("color-accent-blue") : V("color-ink") }}>Enterprise</a>
            <a href="/pricing" className="hover:opacity-70 transition-colors" style={{ ...S.navLink, color: isActive("/pricing") ? V("color-accent-blue") : V("color-ink") }}>Pricing</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="/login" className="hover:opacity-70 transition-colors" style={{ fontSize: "15.98px", fontWeight: 500, color: isActive("/login") ? V("color-accent-blue") : V("color-ink"), padding: "20.78px 0 19.18px", textDecoration: "none" }}>Log in</a>
            <a href="/contact-sales" className="hover:opacity-70 transition-colors" style={{ fontSize: "15.98px", fontWeight: 500, color: isActive("/contact-sales") ? V("color-accent-blue") : V("color-ink"), padding: "20.78px 0 19.18px", textDecoration: "none" }}>Contact Sales</a>
            <a href="/signup" className="transition-colors inline-flex items-center" style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff", textDecoration: "none" }}>Start for free</a>
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
              aria-label="Menu"
              style={{ color: V("color-ink") }}
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed top-[68px] left-0 right-0 bottom-0 z-[998] overflow-y-auto px-5 pb-8"
            style={{ background: V("color-canvas"), borderTop: `1px solid ${V("color-hairline")}` }}
          >
            <MobileSection label="Platform" sections={PLATFORM_LINKS} pathname={pathname} onClose={() => setMobileOpen(false)} />
            <MobileSection label="Solutions" sections={SOLUTIONS_LINKS} pathname={pathname} onClose={() => setMobileOpen(false)} />
            <MobileSection label="Ecosystem" sections={ECOSYSTEM_LINKS} pathname={pathname} onClose={() => setMobileOpen(false)} />
            <MobileSection label="Resources" sections={RESOURCES_LINKS} pathname={pathname} onClose={() => setMobileOpen(false)} />
            <MobileSection label="Company" items={COMPANY_LINKS} pathname={pathname} onClose={() => setMobileOpen(false)} />
            <div className="py-3"><a href="/enterprise" onClick={() => setMobileOpen(false)} className="block py-3" style={{ color: V("color-ink"), fontSize: "16px", fontWeight: 500, textDecoration: "none" }}>Enterprise</a></div>
            <div className="py-3"><a href="/pricing" onClick={() => setMobileOpen(false)} className="block py-3" style={{ color: V("color-ink"), fontSize: "16px", fontWeight: 500, textDecoration: "none" }}>Pricing</a></div>
            <div className="border-t pt-6 mt-2 space-y-3" style={{ borderColor: V("color-hairline") }}>
              <a href="/login" onClick={() => setMobileOpen(false)} className="block py-2" style={{ color: V("color-ink"), fontSize: "16px", fontWeight: 500, textDecoration: "none" }}>Log in</a>
              <a href="/contact-sales" onClick={() => setMobileOpen(false)} className="block py-2" style={{ color: V("color-ink"), fontSize: "16px", fontWeight: 500, textDecoration: "none" }}>Contact Sales</a>
              <a href="/signup" onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center w-full mt-2" style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff", textDecoration: "none" }}>Start for free</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
