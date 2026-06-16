"use client";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── CDN ─── */
const KS_CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";

/* ─── TYPOGRAPHY ─── */
const T = {
  h1:    { fontSize: "60px", fontWeight: 600, lineHeight: "62.4px", letterSpacing: "-0.02em" } as React.CSSProperties,
  h2:    { fontSize: "48px", fontWeight: 600, lineHeight: "49.92px", letterSpacing: "-0.01em" } as React.CSSProperties,
  h3:    { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  h4:    { fontSize: "24px", fontWeight: 600, lineHeight: "31.2px" } as React.CSSProperties,
  body:  { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodyLg:{ fontSize: "20px", fontWeight: 400, lineHeight: "30px" } as React.CSSProperties,
  bodySm:{ fontSize: "14px", fontWeight: 400, lineHeight: "22.4px" } as React.CSSProperties,
  btn:   { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── HELPERS ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none" aria-hidden="true">&rarr;</span>;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1"
      style={{ color: filled ? V("color-accent-yellow") : V("color-mute-soft") }}>
      <path d="M6 1l1.545 3.13L11 4.635 8.5 7.07 9.09 10.5 6 8.875 2.91 10.5 3.5 7.07 1 4.635l3.455-.505z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-px">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < Math.floor(rating)} />
      ))}
    </span>
  );
}

function EcommerceIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 1h2l1.5 9h7l1.5-6H3.5" />
      <circle cx="5.5" cy="12.5" r="1" />
      <circle cx="10.5" cy="12.5" r="1" />
    </svg>
  );
}

function CmsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="12" height="9" rx="1.5" />
      <path d="M4.5 3v9M1 6.5h12" />
    </svg>
  );
}

function UiKitIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="5.5" height="5.5" rx="1" />
      <rect x="7.5" y="1" width="5.5" height="5.5" rx="1" />
      <rect x="1" y="7.5" width="5.5" height="5.5" rx="1" />
      <rect x="7.5" y="7.5" width="5.5" height="5.5" rx="1" />
    </svg>
  );
}

/* ─── DATA ─── */

const TRUSTED_LOGOS = [
  { name: "IDEO", src: `${KS_CDN}/68c9a39c128261b2128439dc_ideo-logo.svg` },
  { name: "Monday.com", src: `${KS_CDN}/68c9a39c128261b2128439c8_monday.com.svg` },
  { name: "BBDO", src: `${KS_CDN}/68c9a39c128261b2128439db_bbdo-logo.svg` },
  { name: "The New York Times", src: `${KS_CDN}/68c9a39c128261b2128439d9_nytimes.svg` },
  { name: "TED", src: `${KS_CDN}/68c9a39c128261b2128439d8_TED.svg` },
  { name: "Docusign", src: `${KS_CDN}/68c9a39c128261b2128439c9_Docusign-dark.svg` },
];

const CATEGORIES = [
  { name: "Portfolio & Agency", href: "portfolio-and-agency-websites", images: ["#2d1f3d", "#3d2860", "#4a3580"] },
  { name: "Technology", href: "technology-websites", images: ["#0d1b2a", "#1b3a5c", "#1e4d7a"] },
  { name: "Blog & Editorial", href: "blog-and-editorial-websites", images: ["#1a2e1a", "#2a4a2a", "#356035"] },
  { name: "Personal", href: "personal-websites", images: ["#3d1a2e", "#5c2a45", "#783558"] },
  { name: "Professional Services", href: "professional-services-websites", images: ["#2a1a0d", "#4a2a15", "#6e3d1f"] },
  { name: "Real Estate", href: "real-estate-websites", images: ["#0f1f2e", "#1a3448", "#224560"] },
  { name: "UI Kit", href: "ui-kit-websites", images: ["#1f1a3d", "#30285c", "#423678"] },
  { name: "Retail", href: "retail-and-e-commerce-websites", images: ["#3d2a0d", "#5c3a15", "#7a4d1f"] },
];

const CAT_COLORS: Record<string, string> = {
  "Portfolio & Agency": "color-accent-purple",
  Technology: "color-accent-blue",
  "Blog & Editorial": "color-accent-green",
  Personal: "color-accent-pink",
  "Professional Services": "color-accent-orange",
  "Real Estate": "color-accent-blue-deep",
  "UI Kit": "color-accent-purple",
  Retail: "color-accent-yellow",
};

type Template = {
  name: string;
  category: string;
  price: number;
  designer: string;
  rating: number;
  date: string;
  isNew?: boolean;
  gradient: string;
};

const FEATURED: Template[] = [
  { name: "RunLoop", category: "Portfolio", price: 169, designer: "Uros Mikic", rating: 5, date: "Jun 12, 2026", gradient: "linear-gradient(135deg, #1a1a2e, #16213e)" },
  { name: "Loonis", category: "Agency", price: 169, designer: "Loonis Studio", rating: 5, date: "Jun 10, 2026", gradient: "linear-gradient(135deg, #1e1e30, #2d1b3d)" },
  { name: "Olyyx", category: "Technology", price: 99, designer: "Olyyx Team", rating: 4.5, date: "Jun 8, 2026", gradient: "linear-gradient(135deg, #0d1b2a, #1b3a5c)" },
  { name: "Flowbyte", category: "SaaS", price: 49, designer: "Flowbyte", rating: 4.5, date: "Jun 5, 2026", gradient: "linear-gradient(135deg, #0a1628, #0f2847)" },
  { name: "Outgrid", category: "Portfolio", price: 79, designer: "Outgrid Co", rating: 4.5, date: "Jun 3, 2026", gradient: "linear-gradient(135deg, #1a1a2e, #2a1a3e)" },
  { name: "Adox Studio", category: "Agency", price: 59, designer: "Adox Team", rating: 4.5, date: "Jun 1, 2026", gradient: "linear-gradient(135deg, #1e1e2e, #3a1a3a)" },
  { name: "Subex", category: "Technology", price: 39, designer: "Subex Labs", rating: 4, date: "May 28, 2026", gradient: "linear-gradient(135deg, #0d1b30, #0a1a2e)" },
  { name: "Teracle", category: "Business", price: 39, designer: "Teracle Co", rating: 5, date: "May 25, 2026", gradient: "linear-gradient(135deg, #1a2e1a, #0d1f0d)" },
  { name: "Neura Nova", category: "SaaS", price: 129, designer: "Neura Team", rating: 5, date: "May 22, 2026", gradient: "linear-gradient(135deg, #1a1a3e, #0d1b4a)" },
];

const NEW_TEMPLATES: Template[] = [
  { name: "Verde Vita", category: "Wellness", price: 49, designer: "Verde Co", rating: 5, date: "Jun 14, 2026", isNew: true, gradient: "linear-gradient(135deg, #1a3a1a, #2a5a2a)" },
  { name: "Arvista", category: "Technology", price: 59, designer: "Arvista Team", rating: 4.5, date: "Jun 13, 2026", isNew: true, gradient: "linear-gradient(135deg, #0a1a2e, #1a3a5c)" },
  { name: "Kata Studio", category: "Agency", price: 39, designer: "Kata Design", rating: 5, date: "Jun 12, 2026", isNew: true, gradient: "linear-gradient(135deg, #2a1a3e, #3d1b5a)" },
  { name: "Flexfye", category: "Portfolio", price: 79, designer: "Flexfye Co", rating: 4.5, date: "Jun 11, 2026", isNew: true, gradient: "linear-gradient(135deg, #1a1a2e, #2e1a4a)" },
  { name: "Zenvia", category: "Wellness", price: 99, designer: "Zenvia Studio", rating: 4.5, date: "Jun 10, 2026", isNew: true, gradient: "linear-gradient(135deg, #1e2e1e, #0d2a0d)" },
  { name: "Dentalflow", category: "Professional Services", price: 169, designer: "DentalFlow Inc", rating: 5, date: "Jun 8, 2026", isNew: true, gradient: "linear-gradient(135deg, #1a2e2e, #0d2a3a)" },
  { name: "Nexlify", category: "Technology", price: 79, designer: "Nexlify Team", rating: 4.5, date: "Jun 7, 2026", isNew: true, gradient: "linear-gradient(135deg, #0d1b2a, #1e3a5a)" },
  { name: "Calma", category: "Personal", price: 79, designer: "Calma Design", rating: 4, date: "Jun 5, 2026", isNew: true, gradient: "linear-gradient(135deg, #2e1a2e, #4a2a4a)" },
];

const FREE_TEMPLATES: (Template & { isFree: true })[] = [
  { name: "HelloBot", category: "Technology", price: 0, designer: "Kreature", rating: 4.5, date: "2026", isFree: true, gradient: "linear-gradient(135deg, #1a2e3e, #0d1b2e)" },
  { name: "BiteBuddy", category: "Retail", price: 0, designer: "Kreature", rating: 4.5, date: "2026", isFree: true, gradient: "linear-gradient(135deg, #3e2a1a, #5c3a1a)" },
  { name: "Lamatic GenAi", category: "SaaS", price: 0, designer: "Kreature", rating: 5, date: "2026", isFree: true, gradient: "linear-gradient(135deg, #1a1a3e, #2e1a5a)" },
  { name: "Nexbet", category: "Business", price: 0, designer: "Kreature", rating: 4, date: "2026", isFree: true, gradient: "linear-gradient(135deg, #1e2e1e, #0d1f0d)" },
  { name: "Advisia", category: "Professional Services", price: 0, designer: "Kreature", rating: 4.5, date: "2026", isFree: true, gradient: "linear-gradient(135deg, #2e2e1a, #3a3a1a)" },
  { name: "Amplify", category: "Portfolio", price: 0, designer: "Kreature", rating: 4.5, date: "2026", isFree: true, gradient: "linear-gradient(135deg, #2e1a2e, #4a2a4a)" },
  { name: "Strevora", category: "Agency", price: 0, designer: "Kreature", rating: 4.5, date: "2026", isFree: true, gradient: "linear-gradient(135deg, #3e1a2e, #5a2a4a)" },
  { name: "Varko", category: "Personal", price: 0, designer: "Kreature", rating: 4, date: "2026", isFree: true, gradient: "linear-gradient(135deg, #2e1a1a, #4a2a2a)" },
];

const BOTTOM_LOGOS = [
  { name: "Lattice", src: `${KS_CDN}/68c9a39c128261b2128439c8_monday.com.svg` },
  { name: "Upwork", src: `${KS_CDN}/68c9a39c128261b2128439d8_TED.svg` },
  { name: "Rakuten", src: `${KS_CDN}/68c9a39c128261b2128439d9_nytimes.svg` },
  { name: "Dell", src: `${KS_CDN}/68c9a39c128261b2128439dc_ideo-logo.svg` },
  { name: "Zendesk", src: `${KS_CDN}/68c9a39c128261b2128439c9_Docusign-dark.svg` },
];

/* ─── SECTION HEADER ─── */
function SectionHeader({ h2, subtitle }: { h2: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="font-heading tracking-tight mb-4" style={{ ...T.h2, color: V("color-ink") }}>
        {h2}
      </h2>
      {subtitle && (
        <p className="mx-auto" style={{ ...T.bodyLg, color: V("color-body"), maxWidth: "640px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── BUTTONS ─── */
function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center font-medium transition-opacity hover:opacity-90"
      style={{ ...T.btn, background: V("color-accent-blue"), color: "#fff", textDecoration: "none" }}
    >
      {children}
    </a>
  );
}

function OutlineBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center font-medium transition-colors"
      style={{
        ...T.btn,
        background: "transparent",
        color: V("color-ink"),
        border: `1px solid ${V("color-hairline")}`,
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = V("color-ink");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = V("color-hairline");
      }}
    >
      {children}
    </a>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center font-medium transition-colors hover:opacity-70"
      style={{ fontSize: "16px", fontWeight: 500, color: V("color-ink"), textDecoration: "none" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = V("color-accent-blue");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = V("color-ink");
      }}
    >
      {children}
    </a>
  );
}

/* ─── CATEGORY CARD ─── */
function CategoryCard({ name, href, images }: { name: string; href: string; images: string[] }) {
  const accentV = V(CAT_COLORS[name] || "color-accent-blue");
  return (
    <a
      href={`/templates/category/${href}`}
      className="group block rounded-xl p-6 transition-all duration-300"
      style={{
        background: V("color-canvas"),
        border: `1px solid ${V("color-hairline")}`,
        boxShadow: V("shadow-card"),
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentV;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = V("color-hairline");
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Stacked preview images */}
      <div className="relative h-[140px] mb-5">
        {images.map((color, i) => (
          <div
            key={i}
            className="absolute rounded-md border overflow-hidden transition-transform duration-300"
            style={{
              background: color,
              borderColor: V("color-hairline"),
              width: i === 0 ? "100%" : i === 1 ? "90%" : "80%",
              height: i === 0 ? "100%" : i === 1 ? "90%" : "80%",
              bottom: 0,
              left: i === 0 ? "0" : i === 1 ? "5%" : "10%",
              zIndex: 3 - i,
            }}
          >
            <div className="flex gap-1.5 p-2.5 pb-0">
              <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
            <div className="px-2.5 pt-2 space-y-1.5">
              <div className="h-1 rounded" style={{ background: "rgba(255,255,255,0.15)", width: "60%" }} />
              <div className="h-1 rounded" style={{ background: "rgba(255,255,255,0.1)", width: "80%" }} />
              <div className="h-1 rounded" style={{ background: "rgba(255,255,255,0.1)", width: "45%" }} />
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-heading mb-1 group-hover:underline" style={{ ...T.h3, color: V("color-ink") }}>
        {name}
      </h3>
    </a>
  );
}

/* ─── TEMPLATE CARD (PAID) ─── */
function TemplateCard({ tmpl }: { tmpl: Template }) {
  return (
    <a
      href={`/templates/html/${tmpl.name.toLowerCase().replace(/\s+/g, "-")}-template`}
      className="group block rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
      style={{
        background: V("color-canvas"),
        border: `1px solid ${V("color-hairline")}`,
        boxShadow: V("shadow-card"),
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = V("shadow-card-strong");
        e.currentTarget.style.borderColor = V("color-body-mid");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = V("shadow-card");
        e.currentTarget.style.borderColor = V("color-hairline");
      }}
    >
      {/* Preview with hover swap effect */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {/* Primary image */}
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
          style={{ background: tmpl.gradient }}
        >
          <div className="flex gap-1.5 p-3 pb-0">
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
          </div>
          <div className="px-3 pt-2 space-y-1.5">
            <div className="h-1.5 rounded" style={{ background: "rgba(255,255,255,0.2)", width: "70%" }} />
            <div className="h-1.5 rounded" style={{ background: "rgba(255,255,255,0.12)", width: "90%" }} />
            <div className="h-1.5 rounded" style={{ background: "rgba(255,255,255,0.12)", width: "55%" }} />
            <div className="h-1.5 rounded" style={{ background: "rgba(255,255,255,0.08)", width: "75%" }} />
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-16 rounded-md" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>
        {/* Hover image (variant) */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: tmpl.gradient.replace("135deg", "225deg") }}
        >
          <div className="flex gap-1.5 p-3 pb-0">
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
          </div>
          <div className="px-3 pt-2 space-y-1.5">
            <div className="h-1.5 rounded" style={{ background: "rgba(255,255,255,0.2)", width: "50%" }} />
            <div className="h-1.5 rounded" style={{ background: "rgba(255,255,255,0.12)", width: "80%" }} />
            <div className="h-1.5 rounded" style={{ background: "rgba(255,255,255,0.12)", width: "65%" }} />
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-24 rounded-md" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Badge */}
        {tmpl.isNew && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-sm" style={{ background: V("color-accent-blue"), color: "#fff" }}>
              New
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        <h3 className="font-heading group-hover:underline" style={{ ...T.h3, color: V("color-ink") }}>
          {tmpl.name}
        </h3>

        <p style={{ ...T.bodySm, color: V("color-body-mid") }}>
          {tmpl.category}
        </p>

        {/* Designer + avatar */}
        <div className="flex items-center gap-2 mt-1">
          <div
            className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-white"
            style={{ background: V("color-accent-purple") }}
          >
            {tmpl.designer.charAt(0)}
          </div>
          <span style={{ ...T.bodySm, color: V("color-body-mid") }}>
            {tmpl.designer}
          </span>
        </div>

        {/* Rating + date */}
        <div className="flex items-center gap-1.5">
          <Stars rating={tmpl.rating} />
          <span style={{ fontSize: "12px", color: V("color-mute") }}>
            {tmpl.date}
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-2">
          {tmpl.price === 0 ? (
            <span style={{ ...T.h4, color: V("color-accent-green") }}>Free</span>
          ) : (
            <span style={{ ...T.h4, color: V("color-ink") }}>
              ${tmpl.price} <span className="text-sm font-normal" style={{ color: V("color-body-mid") }}>USD</span>
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

/* ─── STARTER / FREE TEMPLATE CARD ─── */
function StarterCard({ tmpl }: { tmpl: Template & { isFree: true } }) {
  return (
    <a
      href={`/templates/html/${tmpl.name.toLowerCase().replace(/\s+/g, "-")}-website-template`}
      className="group block rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
      style={{
        background: V("color-canvas"),
        border: `1px solid ${V("color-hairline")}`,
        boxShadow: V("shadow-card"),
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = V("shadow-card-strong");
        e.currentTarget.style.borderColor = V("color-body-mid");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = V("shadow-card");
        e.currentTarget.style.borderColor = V("color-hairline");
      }}
    >
      {/* Preview */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <div className="absolute inset-0" style={{ background: tmpl.gradient }}>
          <div className="flex gap-1.5 p-3 pb-0">
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
          </div>
          <div className="px-3 pt-2.5 space-y-1.5">
            <div className="h-2 rounded" style={{ background: "rgba(255,255,255,0.2)", width: "65%" }} />
            <div className="h-2 rounded" style={{ background: "rgba(255,255,255,0.1)", width: "85%" }} />
            <div className="h-2 rounded" style={{ background: "rgba(255,255,255,0.1)", width: "50%" }} />
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-20 rounded-md" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>
        {/* Free badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-sm" style={{ background: V("color-accent-green"), color: "#fff" }}>
            Free
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading mb-1 group-hover:underline" style={{ ...T.h3, color: V("color-ink") }}>
          {tmpl.name}
        </h3>

        <span
          className="text-xs inline-block mb-3"
          style={{
            color: V("color-accent-blue"),
            background: `color-mix(in srgb, ${V("color-accent-blue")} 8%, transparent)`,
            padding: "2px 8px",
            borderRadius: "4px",
            alignSelf: "flex-start",
          }}
        >
          {tmpl.category}
        </span>

        {/* Feature icons */}
        <div className="flex items-center gap-3 mt-auto pt-2" style={{ color: V("color-mute-soft") }}>
          <span className="flex items-center gap-1" title="Ecommerce functionality built in.">
            <EcommerceIcon /> <span style={{ fontSize: "11px", color: V("color-mute") }}>Ecommerce</span>
          </span>
          <span className="flex items-center gap-1" title="CMS functionality built in.">
            <CmsIcon /> <span style={{ fontSize: "11px", color: V("color-mute") }}>CMS</span>
          </span>
          <span className="flex items-center gap-1" title="Multiple layout variations built in.">
            <UiKitIcon /> <span style={{ fontSize: "11px", color: V("color-mute") }}>UI Kit</span>
          </span>
        </div>
      </div>
    </a>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */
export default function TemplatesPage() {
  return (
    <div style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
            ═══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{
            paddingTop: "calc(68px + 96px)",
            paddingBottom: "96px",
            background: V("color-canvas"),
          }}
        >
          <div className="mx-auto px-5 sm:px-8 text-center" style={{ maxWidth: "840px" }}>
            <h1
              className="font-heading tracking-tight mb-6"
              style={{ ...T.h1, color: V("color-ink") }}
            >
              Customizable HTML website templates for every need
            </h1>
            <p
              className="mx-auto mb-10"
              style={{ ...T.bodyLg, color: V("color-body"), maxWidth: "640px" }}
            >
              Build a website tailored to your needs with our curated collection of
              HTML website templates — fully customizable and built for seamless,
              responsive web design.
            </p>
            <div className="flex items-center justify-center gap-4 mb-16">
              <PrimaryBtn href="/signup">Get started <Arrow /></PrimaryBtn>
              <OutlineBtn href="#categories">Browse templates</OutlineBtn>
            </div>

            {/* Hero device mockup */}
            <div className="relative mb-16 mx-auto" style={{ maxWidth: "920px" }}>
              <div
                className="rounded-lg overflow-hidden border"
                style={{
                  borderColor: V("color-hairline"),
                  boxShadow: V("shadow-card-strong"),
                }}
              >
                <div className="relative" style={{ aspectRatio: "16/9" }}>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(145deg, ${V("color-canvas-soft")} 0%, ${V("color-canvas-mid")} 100%)`,
                    }}
                  >
                    {/* Desktop mockup */}
                    <div
                      className="absolute top-[8%] left-[10%] right-[10%] bottom-[8%] rounded-md border"
                      style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}
                    >
                      <div className="flex gap-1.5 p-2.5 pb-0">
                        <div className="w-2 h-2 rounded-full" style={{ background: V("color-mute-soft") }} />
                        <div className="w-2 h-2 rounded-full" style={{ background: V("color-mute-soft") }} />
                        <div className="w-2 h-2 rounded-full" style={{ background: V("color-mute-soft") }} />
                      </div>
                      <div className="px-2.5 pt-2 space-y-1.5">
                        <div className="h-1 rounded" style={{ background: V("color-hairline"), width: "30%" }} />
                        <div className="h-1 rounded" style={{ background: V("color-canvas-mid"), width: "50%" }} />
                      </div>
                      <div className="absolute bottom-[15%] left-[8%] right-[8%] h-[60%] rounded-sm" style={{ background: V("color-canvas-soft") }} />
                    </div>
                    {/* Tablet mockup overlapping */}
                    <div
                      className="absolute bottom-0 right-[5%] w-[22%] h-[65%] rounded-t-md border border-b-0"
                      style={{ borderColor: V("color-hairline"), background: V("color-canvas"), zIndex: 1 }}
                    >
                      <div className="flex gap-1 p-2 pb-0">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                      </div>
                      <div className="p-2 pt-1 space-y-1">
                        <div className="h-0.5 rounded" style={{ background: V("color-hairline"), width: "50%" }} />
                        <div className="h-0.5 rounded" style={{ background: V("color-canvas-mid"), width: "70%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted by logos */}
            <p
              className="mb-6 uppercase tracking-wider"
              style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.08em", color: V("color-mute") }}
            >
              Trusted by teams at
            </p>
            <div className="flex flex-wrap gap-8 items-center justify-center opacity-40">
              {TRUSTED_LOGOS.map((logo) => (
                <img key={logo.name} src={logo.src} alt={logo.name} className="h-5 w-auto" loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — POPULAR TEMPLATE CATEGORIES
            ═══════════════════════════════════════════ */}
        <section
          id="categories"
          style={{
            paddingTop: "112px",
            paddingBottom: "112px",
            background: V("color-canvas-soft"),
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <SectionHeader
              h2="Popular template categories"
              subtitle="Explore the best Kreature templates, highly-rated amongst users."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
              {CATEGORIES.map((cat) => (
                <CategoryCard key={cat.name} name={cat.name} href={cat.href} images={cat.images} />
              ))}
            </div>

            <div className="text-center">
              <TextLink href="/templates/all">
                Browse all categories <Arrow />
              </TextLink>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — STARTER TEMPLATES
            ═══════════════════════════════════════════ */}
        <section
          style={{
            paddingTop: "112px",
            paddingBottom: "112px",
            background: V("color-canvas"),
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <div className="flex items-center justify-between mb-16">
              <h2 className="font-heading tracking-tight" style={{ ...T.h2, color: V("color-ink") }}>
                Starter templates
              </h2>
              <TextLink href="/templates/all">
                Browse All Templates <Arrow />
              </TextLink>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
              {FREE_TEMPLATES.slice(0, 4).map((tmpl) => (
                <StarterCard key={tmpl.name} tmpl={tmpl} />
              ))}
            </div>

            <div className="text-center">
              <PrimaryBtn href="/templates/all">
                Browse All Templates <Arrow />
              </PrimaryBtn>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — FEATURED WEBSITE TEMPLATES
            ═══════════════════════════════════════════ */}
        <section
          style={{
            paddingTop: "112px",
            paddingBottom: "112px",
            background: V("color-canvas-soft"),
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <SectionHeader
              h2="Featured website templates"
              subtitle="Monthly selection of curated website templates"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
              {FEATURED.map((tmpl) => (
                <TemplateCard key={tmpl.name} tmpl={tmpl} />
              ))}
            </div>

            <div className="text-center">
              <TextLink href="/templates/featured">
                Browse all featured website templates <Arrow />
              </TextLink>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — NEW HTML TEMPLATES
            ═══════════════════════════════════════════ */}
        <section
          style={{
            paddingTop: "112px",
            paddingBottom: "112px",
            background: V("color-canvas"),
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <SectionHeader
              h2="New HTML templates"
              subtitle="Modern website templates, recently added from our expert template creators"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
              {NEW_TEMPLATES.map((tmpl) => (
                <TemplateCard key={tmpl.name} tmpl={tmpl} />
              ))}
            </div>

            <div className="text-center">
              <TextLink href="/templates/all">
                Browse all website templates <Arrow />
              </TextLink>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — FREE HTML WEBSITE TEMPLATES
            ═══════════════════════════════════════════ */}
        <section
          style={{
            paddingTop: "112px",
            paddingBottom: "112px",
            background: V("color-canvas-soft"),
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <SectionHeader
              h2="Free HTML website templates"
              subtitle="Free templates to get started"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
              {FREE_TEMPLATES.map((tmpl) => (
                <StarterCard key={tmpl.name} tmpl={tmpl} />
              ))}
            </div>

            <div className="text-center">
              <TextLink href="/templates/free-website-templates">
                Browse all free website templates <Arrow />
              </TextLink>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 7 — CREATE AND SELL CTA
            ═══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{
            paddingTop: "112px",
            paddingBottom: "112px",
            background: V("color-canvas"),
          }}
        >
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1200px" }}>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-heading tracking-tight mb-6" style={{ ...T.h2, color: V("color-ink") }}>
                  Build and sell templates on the Kreature Marketplace
                </h2>
                <p className="mb-8" style={{ ...T.body, color: V("color-body-mid"), maxWidth: "540px" }}>
                  Discover how to submit your own website templates and meet Kreature&apos;s
                  quality guidelines, or explore our collection of stunning templates
                  created by talented designers. Join a thriving community of creators
                  and start earning from your designs.
                </p>
                <PrimaryBtn href="/templates/submission-guidelines">
                  Get started <Arrow />
                </PrimaryBtn>
              </div>

              {/* Preview illustration */}
              <div className="flex-1">
                <div
                  className="rounded-xl overflow-hidden border mx-auto"
                  style={{
                    borderColor: V("color-hairline"),
                    boxShadow: V("shadow-card"),
                    maxWidth: "500px",
                  }}
                >
                  <div style={{ aspectRatio: "4/3" }}>
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: V("color-canvas-soft") }}
                    >
                      {/* Abstract marketplace cards illustration */}
                      <div className="relative w-full h-full p-8">
                        <div
                          className="absolute top-6 left-6 w-[42%] h-[35%] rounded-lg border"
                          style={{ background: V("color-canvas"), borderColor: V("color-hairline") }}
                        >
                          <div className="flex gap-1 p-2 pb-0">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                          </div>
                          <div className="px-2 pt-1.5 space-y-1">
                            <div className="h-1 rounded" style={{ background: V("color-accent-blue"), width: "50%", opacity: 0.5 }} />
                            <div className="h-1 rounded" style={{ background: V("color-hairline"), width: "70%" }} />
                          </div>
                        </div>
                        <div
                          className="absolute top-8 right-6 w-[35%] h-[30%] rounded-lg border"
                          style={{ background: V("color-canvas"), borderColor: V("color-hairline") }}
                        >
                          <div className="flex gap-1 p-2 pb-0">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                          </div>
                          <div className="px-2 pt-1.5 space-y-1">
                            <div className="h-1 rounded" style={{ background: V("color-accent-purple"), width: "50%", opacity: 0.5 }} />
                            <div className="h-1 rounded" style={{ background: V("color-hairline"), width: "60%" }} />
                          </div>
                        </div>
                        <div
                          className="absolute bottom-8 left-6 w-[50%] h-[40%] rounded-lg border"
                          style={{ background: V("color-canvas"), borderColor: V("color-hairline") }}
                        >
                          <div className="flex gap-1 p-2 pb-0">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                          </div>
                          <div className="px-2 pt-1.5 space-y-1">
                            <div className="h-1 rounded" style={{ background: V("color-accent-green"), width: "50%", opacity: 0.5 }} />
                          </div>
                          <div className="absolute bottom-3 left-2 right-2 h-[55%] rounded" style={{ background: V("color-canvas-soft") }} />
                        </div>
                        <div
                          className="absolute bottom-12 right-6 w-[30%] h-[25%] rounded-lg border"
                          style={{ background: V("color-canvas"), borderColor: V("color-hairline") }}
                        >
                          <div className="flex gap-1 p-2 pb-0">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: V("color-mute-soft") }} />
                          </div>
                          <div className="px-2 pt-1.5 space-y-1">
                            <div className="h-1 rounded" style={{ background: V("color-accent-orange"), width: "50%", opacity: 0.5 }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 8 — BOTTOM CTA
            ═══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{
            paddingTop: "112px",
            paddingBottom: "112px",
            background: V("color-canvas-soft"),
          }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
              style={{
                background: `color-mix(in srgb, ${V("color-accent-blue")} 6%, transparent)`,
              }}
            />
          </div>

          <div className="relative z-10 mx-auto px-5 sm:px-8 text-center" style={{ maxWidth: "640px" }}>
            <h2 className="font-heading tracking-tight mb-4" style={{ ...T.h2, color: V("color-ink") }}>
              Get started for free
            </h2>
            <p className="mb-10" style={{ ...T.bodyLg, color: V("color-body") }}>
              Try Kreature for as long as you like with our free Starter plan.
              Purchase a paid Site plan to publish, host, and unlock additional features.
            </p>
            <div className="mb-14">
              <PrimaryBtn href="/signup">
                Get started — it&apos;s free <Arrow />
              </PrimaryBtn>
            </div>

            {/* Bottom logos */}
            <p
              className="mb-6 uppercase tracking-wider"
              style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.08em", color: V("color-mute") }}
            >
              Transforming the design process at
            </p>
            <div className="flex flex-wrap gap-8 items-center justify-center opacity-30">
              {BOTTOM_LOGOS.map((logo) => (
                <img key={logo.name} src={logo.src} alt={logo.name} className="h-5 w-auto" loading="lazy" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
