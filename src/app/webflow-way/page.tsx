"use client";

/* ─── CSS Var helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Arrow ─── */
function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Inline SVG icons ─── */
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 24l5 5 11-11"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UniversityIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path d="M16 4L2 10l14 6 14-6-14-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 10v12l14 6 14-6V10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 16v5l7 3 7-3v-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function HelpIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
      <path d="M12 12a4 4 0 017.2 2.4c0 2.4-4 3.6-4 3.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="23" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CommunityIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 24c0-3.3 2.7-6 6-6s5 2.7 5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StoriesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M4 14h24" stroke="currentColor" strokeWidth="2" />
      <circle cx="10" cy="9" r="1.5" fill="currentColor" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
      <circle cx="20" cy="9" r="1.5" fill="currentColor" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      opacity="0.15"
    >
      <path d="M3 21V13.5C3 9.36 6.36 6 10.5 6V9C7.8 9 6 10.8 6 13.5V21H3zM12 21V13.5C12 9.36 15.36 6 19.5 6V9C16.8 9 15 10.8 15 13.5V21H12z" />
    </svg>
  );
}

function TemplateIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

/* ─── Data ─── */

interface Contributor {
  name: string;
  role: string;
}

interface Topic {
  slug: string;
  title: string;
  description: string;
  link: string;
  contributors: Contributor[];
  insight?: string;
  breadcrumb?: string;
}

const TOPICS: Topic[] = [
  {
    slug: "design-systems",
    title: "Design systems",
    description:
      "Build consistent, scalable sites faster with reusable design foundations in Kreature.",
    link: "/webflow-way/design-systems",
    breadcrumb: "Design systems",
    insight:
      "Design systems serve your business — and promote user experiences that drive engagement.",
    contributors: [
      { name: "Melanie Richards", role: "Group Product Manager" },
      { name: "Garrett Berg", role: "Staff Product Manager" },
      { name: "Matt Aune", role: "Product Design Manager" },
      { name: "Fan Sai Kuok", role: "Staff Product Designer" },
      { name: "Jake Apple", role: "Senior Product Manager" },
      { name: "Josh Jacobs", role: "Staff Brand Designer" },
    ],
  },
  {
    slug: "cms",
    title: "CMS",
    description:
      "Create flexible, content-rich experiences that grow with your site.",
    link: "/webflow-way/cms",
    breadcrumb: "CMS",
    contributors: [
      { name: "Katherine Grygo", role: "Senior Product Manager" },
      { name: "Sheryl Sulistiawan", role: "Manager, Product Design" },
    ],
  },
  {
    slug: "localization",
    title: "Localization",
    description:
      "Create relevant experiences for audiences anywhere in the world.",
    link: "/webflow-way/localization",
    breadcrumb: "Localization",
    contributors: [
      { name: "Katherine Grygo", role: "Senior Product Manager" },
      { name: "Sheryl Sulistiawan", role: "Manager, Product Design" },
      { name: "Alex Nichol", role: "Product Manager" },
      { name: "Itzel Barreto", role: "Product Designer" },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    description:
      "Optimize your site for efficient crawling by search engines.",
    link: "/webflow-way/seo",
    breadcrumb: "SEO",
    contributors: [
      { name: "Katherine Grygo", role: "Senior Product Manager" },
      { name: "Sheryl Sulistiawan", role: "Manager, Product Design" },
      { name: "Sarla-Loraine Mundil", role: "Senior Product Designer" },
    ],
  },
  {
    slug: "optimize-analyze",
    title: "Analyze and Optimize",
    description:
      "Use data to drive higher conversion rates, sharper insights, and a culture of continuous improvement.",
    link: "/webflow-way/optimize-analyze",
    breadcrumb: "Optimize & Analyze",
    insight:
      "Optimization is among the fastest levers you can pull to affect performance.",
    contributors: [
      { name: "Jason Kahn", role: "Director, Product Management" },
      { name: "Kiran Hansen", role: "Staff Product Designer" },
      { name: "Emily Brodman", role: "Staff Product Manager" },
      { name: "Alex Benson", role: "Staff Product Designer" },
    ],
  },
  {
    slug: "collaboration",
    title: "Collaboration",
    description:
      "Bring your whole team together — designers, developers, and marketers — to work in Kreature at the same time.",
    link: "/webflow-way/collaboration",
    breadcrumb: "Collaboration",
    contributors: [
      { name: "Hannah Koopman", role: "Senior Product Manager" },
      { name: "Jeff Jean-Baptiste", role: "Senior Product Designer" },
      { name: "Cari Bonilla", role: "Senior Product Manager" },
      { name: "Mary Carnes", role: "Senior Product Designer" },
      { name: "Irene Chung", role: "Senior Product Manager" },
      { name: "Josh Jacobs", role: "Staff Brand Designer" },
    ],
  },
];

interface LevelUpCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  href: string;
}

interface TemplateItem {
  name: string;
  gradient: string;
}

const TEMPLATES: TemplateItem[] = [
  { name: "Absolut", gradient: "linear-gradient(135deg, #146ef5 0%, #7a3dff 100%)" },
  { name: "For Human", gradient: "linear-gradient(135deg, #ed52cb 0%, #ff6b00 100%)" },
  { name: "Optune", gradient: "linear-gradient(135deg, #00d722 0%, #006acc 100%)" },
  { name: "And Fold", gradient: "linear-gradient(135deg, #7a3dff 0%, #ed52cb 100%)" },
];

const HERO_COLORS = [
  "#146ef5",
  "#7a3dff",
  "#ed52cb",
  "#ff6b00",
  "#00d722",
  "#ffae13",
  "#006acc",
  "#ee1d36",
];

const TOPIC_ACCENT: Record<number, string> = {
  0: "color-accent-blue",
  1: "color-accent-purple",
  2: "color-accent-pink",
  3: "color-accent-orange",
  4: "color-accent-green",
  5: "color-accent-yellow",
};

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */
export default function KreatureWayPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 120px)",
          paddingBottom: "120px",
          background: V("color-canvas"),
        }}
      >
        {/* Decorative gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 right-[-200px] w-[600px] h-[600px] rounded-full blur-[160px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-blue")} 8%, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] rounded-full blur-[160px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-purple")} 8%, transparent)`,
            }}
          />
        </div>

        <div
          className="relative z-10 mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Headline + subhead */}
            <div>
              <span
                className="inline-block mb-6 font-medium tracking-wide uppercase"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1.4px",
                  color: V("color-accent-blue"),
                }}
              >
                The Kreature Way
              </span>

              <h1
                className="font-heading tracking-tight"
                style={{
                  fontSize: "clamp(48px, 6vw, 80px)",
                  fontWeight: 600,
                  lineHeight: "1.05",
                  letterSpacing: "-0.02em",
                  color: V("color-ink"),
                }}
              >
                Design
                <br />
                Build
                <br />
                Collaborate
                <br />
                Scale
                <br />
                Grow
                <br />
                <span style={{ color: V("color-accent-blue") }}>
                  the Kreature Way
                </span>
              </h1>

              <p
                className="mt-8"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "28.8px",
                  color: V("color-body"),
                  maxWidth: "500px",
                }}
              >
                Unlock the full potential of Kreature with best practices
                validated by experts.
              </p>

              {/* Video thumbnail CTA */}
              <div
                className="mt-10 flex items-center gap-4 group cursor-pointer"
                style={{ maxWidth: "420px" }}
              >
                <div
                  className="relative shrink-0 w-[72px] h-[72px] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{ background: V("color-accent-blue") }}
                >
                  <PlayIcon className="text-white ml-0.5" />
                </div>
                <div>
                  <p
                    className="font-medium"
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "22.4px",
                      color: V("color-ink"),
                    }}
                  >
                    Proven by industry pros, so you can build like one.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 mt-1 font-medium"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: V("color-accent-blue"),
                    }}
                  >
                    Watch the intro <Arrow />
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Collage composition */}
            <div className="relative hidden lg:block">
              <div
                className="relative w-full rounded-2xl overflow-hidden grid grid-cols-3 grid-rows-4 gap-2"
                style={{ aspectRatio: "1 / 1", maxWidth: "520px", marginLeft: "auto" }}
              >
                {HERO_COLORS.map((color, i) => {
                  const sizes = [
                    { col: "span 1", row: "span 2" },
                    { col: "span 2", row: "span 1" },
                    { col: "span 1", row: "span 1" },
                    { col: "span 1", row: "span 2" },
                    { col: "span 1", row: "span 1" },
                    { col: "span 1", row: "span 1" },
                    { col: "span 2", row: "span 1" },
                    { col: "span 1", row: "span 1" },
                  ];
                  const s = sizes[i];
                  return (
                    <div
                      key={i}
                      className="rounded-lg flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `color-mix(in srgb, ${color} 70%, ${V("color-canvas")})`,
                        gridColumn: s.col,
                        gridRow: s.row,
                        minHeight: "60px",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 20px 20px, white 2px, transparent 2px)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                      <span
                        className="font-heading text-white opacity-50 select-none"
                        style={{ fontSize: "clamp(20px, 3vw, 40px)", fontWeight: 700 }}
                      >
                        {["K", "R", "E", "A", "T", "U", "R", "E"][i]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ YOUR PERFORMANCE BLUEPRINT ═══════ */}
      <section
        style={{
          paddingTop: "104px",
          paddingBottom: "104px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          {/* Section header */}
          <div className="mb-16">
            <h2
              className="font-heading tracking-tight mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                color: V("color-ink"),
                maxWidth: "700px",
              }}
            >
              Your performance blueprint
            </h2>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28.8px",
                color: V("color-body"),
                maxWidth: "680px",
              }}
            >
              Whether you&apos;re building, managing, or optimizing, these best
              practices can help you get the most out of Kreature to deliver
              high-performing, scalable web experiences.
            </p>
          </div>

          {/* Topic cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {TOPICS.map((topic, i) => (
              <TopicCard key={topic.slug} topic={topic} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CRAFTED BY REAL PROS ═══════ */}
      <section
        style={{
          paddingTop: "104px",
          paddingBottom: "104px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2
              className="font-heading tracking-tight mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                color: V("color-ink"),
              }}
            >
              Crafted by real pros
            </h2>
            <p
              className="mx-auto"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28.8px",
                color: V("color-body"),
                maxWidth: "640px",
              }}
            >
              The Kreature Way is informed by the deep platform knowledge of
              our global community, who bring real-world perspective to every
              best practice.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {/* Testimonial 1 */}
            <div
              className="relative p-8 rounded-xl"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <QuoteIcon className="absolute top-6 left-6" />
              <blockquote
                className="relative z-10 mb-6"
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "30px",
                  color: V("color-ink"),
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;The Kreature Way is packed to the gills with informed
                insights to maximize your Kreature capabilities.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center"
                  style={{
                    background: `color-mix(in srgb, ${V("color-accent-purple")} 25%, transparent)`,
                  }}
                >
                  <span
                    className="font-heading font-bold"
                    style={{ fontSize: "18px", color: V("color-accent-purple") }}
                  >
                    JJ
                  </span>
                </div>
                <div>
                  <p
                    className="font-medium"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "22px",
                      color: V("color-ink"),
                    }}
                  >
                    Josh Jacobs
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: V("color-mute"),
                    }}
                  >
                    Jasper, Staff Brand Designer
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div
              className="relative p-8 rounded-xl"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              <QuoteIcon className="absolute top-6 left-6" />
              <blockquote
                className="relative z-10 mb-6"
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "30px",
                  color: V("color-ink"),
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;Build with intention. Develop with precision — with the
                guidance of the Kreature Way.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center"
                  style={{
                    background: `color-mix(in srgb, ${V("color-accent-blue")} 25%, transparent)`,
                  }}
                >
                  <span
                    className="font-heading font-bold"
                    style={{ fontSize: "18px", color: V("color-accent-blue") }}
                  >
                    MM
                  </span>
                </div>
                <div>
                  <p
                    className="font-medium"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "22px",
                      color: V("color-ink"),
                    }}
                  >
                    Maggy Monceaux
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: V("color-mute"),
                    }}
                  >
                    The Dev Shop, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ EARN YOUR BADGE ═══════ */}
      <section
        style={{
          paddingTop: "104px",
          paddingBottom: "104px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div
            className="rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16"
            style={{
              background: V("color-canvas"),
              border: `1px solid ${V("color-hairline")}`,
            }}
          >
            {/* Badge visual */}
            <div className="shrink-0">
              <div
                className="w-[160px] h-[160px] rounded-full flex flex-col items-center justify-center gap-2 relative"
                style={{
                  background: `conic-gradient(from 0deg, ${V("color-accent-blue")}, ${V("color-accent-purple")}, ${V("color-accent-pink")}, ${V("color-accent-blue")})`,
                  padding: "4px",
                }}
              >
                <div
                  className="w-full h-full rounded-full flex flex-col items-center justify-center"
                  style={{ background: V("color-canvas") }}
                >
                  <BadgeIcon style={{ color: V("color-accent-blue") }} />
                  <span
                    className="font-heading font-bold mt-1 text-center"
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      lineHeight: "14px",
                      color: V("color-ink"),
                      maxWidth: "100px",
                    }}
                  >
                    Proud to build the Kreature Way
                  </span>
                </div>
              </div>
            </div>

            {/* Badge content */}
            <div>
              <h3
                className="font-heading tracking-tight mb-4"
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 600,
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  color: V("color-ink"),
                }}
              >
                Earn your badge
              </h3>
              <p
                className="mb-8"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "28.8px",
                  color: V("color-body"),
                  maxWidth: "500px",
                }}
              >
                Prove your mastery of Kreature best practices and unlock a badge
                to showcase your expertise.
              </p>
              <a
                href="/webflow-way/exam"
                className="inline-flex items-center font-medium transition-all duration-200"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "19.2px",
                  padding: "16px 28px",
                  borderRadius: "4px",
                  background: V("color-ink"),
                  color: V("color-canvas"),
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }}
              >
                Test your knowledge <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ EXPERT-APPROVED TEMPLATES ═══════ */}
      <section
        style={{
          paddingTop: "104px",
          paddingBottom: "104px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2
              className="font-heading tracking-tight mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                color: V("color-ink"),
              }}
            >
              Expert-approved templates
            </h2>
            <p
              className="mx-auto"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28.8px",
                color: V("color-body"),
                maxWidth: "600px",
              }}
            >
              Browse Kreature site templates that check all our boxes for
              usability (and good looks).
            </p>
          </div>

          {/* Template carousel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {TEMPLATES.map((tpl) => (
              <a
                key={tpl.name}
                href="/templates"
                className="group rounded-xl overflow-hidden block transition-all duration-300"
                style={{
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `var(--shadow-card-strong)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `var(--shadow-card)`;
                }}
              >
                {/* Template preview */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: tpl.gradient }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-heading text-white opacity-90 group-hover:opacity-100 transition-opacity text-center px-3"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "26px",
                        letterSpacing: "-0.2px",
                        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      {tpl.name}
                    </span>
                  </div>
                </div>
                {/* Card footer */}
                <div className="p-4 flex items-center justify-between">
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: V("color-ink"),
                    }}
                  >
                    {tpl.name}
                  </span>
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: V("color-accent-blue"),
                    }}
                  >
                    Preview <Arrow />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/templates"
              className="inline-flex items-center font-medium transition-all duration-200"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.2px",
                padding: "16px 28px",
                borderRadius: "4px",
                border: `1px solid ${V("color-hairline")}`,
                color: V("color-ink"),
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = `var(--color-ink)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = `var(--color-hairline)`;
              }}
            >
              <TemplateIcon className="mr-2" />
              Browse templates <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ NEXT UP: DESIGN SYSTEMS ═══════ */}
      <section
        style={{
          paddingTop: "104px",
          paddingBottom: "104px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <span
                className="inline-block mb-4 uppercase tracking-wide"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "1.3px",
                  color: V("color-mute"),
                }}
              >
                Next up
              </span>
              <h2
                className="font-heading tracking-tight mb-6"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 600,
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: V("color-ink"),
                }}
              >
                Design systems
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "28.8px",
                  color: V("color-body"),
                  maxWidth: "500px",
                }}
              >
                Design systems unlock efficiency, consistency, and scalability
                for your organization, which drive more consistent, usable, and
                accessible experiences for your customers.
              </p>

              {/* Breadcrumb */}
              <p
                className="mb-6"
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: V("color-mute"),
                }}
              >
                The Kreature Way{" "}
                <span style={{ margin: "0 6px" }}>&rarr;</span> Design systems{" "}
                <span style={{ margin: "0 6px" }}>&rarr;</span> Overview
              </p>

              <a
                href="/webflow-way/design-systems"
                className="inline-flex items-center font-medium transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: V("color-accent-blue"),
                }}
              >
                Keep reading <Arrow />
              </a>
            </div>

            {/* Right preview card */}
            <a
              href="/webflow-way/design-systems"
              className="group rounded-xl overflow-hidden block transition-all duration-300"
              style={{
                border: `1px solid ${V("color-hairline")}`,
                background: V("color-canvas"),
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `var(--shadow-card-strong)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `var(--shadow-card)`;
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${V("color-accent-blue")} 0%, ${V("color-accent-purple")} 100%)`,
                  }}
                />
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-heading text-white opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      letterSpacing: "-0.24px",
                    }}
                  >
                    Overview
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: V("color-mute"),
                  }}
                >
                  Design systems &rarr; Overview
                </span>
              </div>
            </a>
          </div>

          {/* Feedback CTA */}
          <div
            className="mt-16 pt-12 text-center"
            style={{ borderTop: `1px solid ${V("color-hairline")}` }}
          >
            <p
              className="mb-4"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: V("color-body-mid"),
              }}
            >
              Have feedback on The Kreature Way?
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium transition-colors"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: V("color-accent-blue"),
              }}
            >
              Share your thoughts <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ MORE WAYS TO LEVEL UP ═══════ */}
      <section
        style={{
          paddingTop: "104px",
          paddingBottom: "104px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <h2
            className="font-heading tracking-tight mb-12"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 600,
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: V("color-ink"),
            }}
          >
            More ways to level up
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <LevelUpCard
              icon={<UniversityIcon style={{ color: V("color-ink") }} />}
              title="Kreature University"
              description="Explore courses and pathways to grow your skills or prepare for a Kreature-verified certification."
              cta="Go to University"
              href="/university"
            />
            <LevelUpCard
              icon={<HelpIcon style={{ color: V("color-ink") }} />}
              title="Help Center"
              description="Find solutions to your Kreature questions and get help from our expert customer support team."
              cta="Go to docs"
              href="/help"
            />
            <LevelUpCard
              icon={<CommunityIcon style={{ color: V("color-ink") }} />}
              title="Community"
              description="Connect with other designers and developers to share tips, ask questions, and show off your work."
              cta="Go to Community"
              href="/community"
            />
            <LevelUpCard
              icon={<StoriesIcon style={{ color: V("color-ink") }} />}
              title="Customer stories"
              description="Hear inspiring enterprise and agency success stories."
              cta="View all stories"
              href="/customers"
            />
          </div>
        </div>
      </section>

      {/* ═══════ KREATURE FOOTER ═══════ */}
      <KreatureFooter />
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   TOPIC CARD
   ══════════════════════════════════════════════════════════════════ */
function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  const accentVar = TOPIC_ACCENT[index] || "color-accent-blue";

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: V("color-canvas"),
        border: `1px solid ${V("color-hairline")}`,
        boxShadow: V("shadow-card"),
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `var(--shadow-card-strong)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `var(--shadow-card)`;
      }}
    >
      {/* Cover image area */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/8" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${V(accentVar)} 0%, color-mix(in srgb, ${V(accentVar)} 60%, ${V("color-ink")}) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute top-5 left-6 px-3 py-1 rounded-md backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.15)",
          }}
        >
          <span
            className="font-heading text-white"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            {topic.breadcrumb || topic.title}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3
            className="font-heading mb-2"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "28.8px",
              letterSpacing: "-0.24px",
              color: V("color-ink"),
            }}
          >
            {topic.title}
          </h3>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "24px",
              color: V("color-body"),
            }}
          >
            {topic.description}
          </p>
        </div>

        {/* Contributors */}
        <div className="flex items-center gap-2 mt-auto">
          <div className="flex -space-x-2">
            {topic.contributors.slice(0, 4).map((c, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0"
                style={{
                  background: `color-mix(in srgb, ${V(accentVar)} 20%, ${V("color-canvas-soft")})`,
                  borderColor: V("color-canvas"),
                }}
                title={`${c.name} — ${c.role}`}
              >
                <span
                  className="font-heading font-bold"
                  style={{
                    fontSize: "10px",
                    color: V(accentVar),
                  }}
                >
                  {c.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            ))}
            {topic.contributors.length > 4 && (
              <div
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0"
                style={{
                  background: V("color-canvas-mid"),
                  borderColor: V("color-canvas"),
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: V("color-mute"),
                  }}
                >
                  +{topic.contributors.length - 4}
                </span>
              </div>
            )}
          </div>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: V("color-mute"),
            }}
          >
            {topic.contributors.length} contributor
            {topic.contributors.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Featured insight */}
        {topic.insight && (
          <div
            className="p-4 rounded-lg"
            style={{
              background: V("color-canvas-soft"),
              borderLeft: `3px solid ${V(accentVar)}`,
            }}
          >
            <span
              className="block mb-1 uppercase tracking-wide"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: V(accentVar),
              }}
            >
              Featured insight
            </span>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "22px",
                color: V("color-ink"),
              }}
            >
              &ldquo;{topic.insight}&rdquo;
            </p>
          </div>
        )}

        {/* CTA */}
        <a
          href={topic.link}
          className="inline-flex items-center font-medium transition-colors mt-1"
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: V("color-accent-blue"),
          }}
        >
          Keep reading <Arrow />
        </a>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   LEVEL UP CARD
   ══════════════════════════════════════════════════════════════════ */
function LevelUpCard({ icon, title, description, cta, href }: LevelUpCardData) {
  return (
    <a
      href={href}
      className="group rounded-xl p-6 flex flex-col transition-all duration-300"
      style={{
        background: V("color-canvas-soft"),
        border: `1px solid ${V("color-hairline")}`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `var(--shadow-card-strong)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `var(--shadow-card)`;
      }}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3
        className="font-heading mb-2"
        style={{
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "26px",
          color: V("color-ink"),
        }}
      >
        {title}
      </h3>
      <p
        className="mb-6 flex-1"
        style={{
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "24px",
          color: V("color-body"),
        }}
      >
        {description}
      </p>
      <span
        className="inline-flex items-center font-medium transition-colors group-hover:gap-2"
        style={{
          fontSize: "14px",
          fontWeight: 500,
          color: V("color-accent-blue"),
        }}
      >
        {cta} <Arrow />
      </span>
    </a>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════════════ */
function KreatureFooter() {
  const footerLink =
    "block text-sm transition-colors duration-200 hover:opacity-70";
  const footerHeading = "block text-sm font-semibold mb-4 tracking-tight";

  return (
    <footer
      role="contentinfo"
      style={{
        background: V("color-ink"),
        color: V("color-mute-soft"),
        paddingTop: "72px",
        paddingBottom: "32px",
        fontSize: "14px",
        lineHeight: "20px",
      }}
    >
      <div
        className="mx-auto px-5 sm:px-8"
        style={{ maxWidth: "1200px" }}
      >
        {/* Top area: nav columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Column 1: Kreature Way topics */}
          <div>
            <span
              className={footerHeading}
              style={{ color: V("color-canvas") }}
            >
              Kreature Way
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="/webflow-way" className={footerLink}>
                The Kreature Way
              </a>
              <a href="/webflow-way/design-systems" className={footerLink}>
                Design systems
              </a>
              <a href="/webflow-way/cms" className={footerLink}>
                CMS
              </a>
              <a href="/webflow-way/seo" className={footerLink}>
                SEO
              </a>
              <a href="/webflow-way/localization" className={footerLink}>
                Localization
              </a>
              <a href="/webflow-way/optimize-analyze" className={footerLink}>
                Optimize &amp; Analyze
              </a>
              <a href="/webflow-way/collaboration" className={footerLink}>
                Collaboration
              </a>
              <a href="/webflow-way/exam" className={footerLink}>
                Test your knowledge
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <span
              className={footerHeading}
              style={{ color: V("color-canvas") }}
            >
              Product
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="/platform" className={footerLink}>Platform</a>
              <a href="/design" className={footerLink}>Design</a>
              <a href="/cms" className={footerLink}>CMS</a>
              <a href="/hosting" className={footerLink}>Hosting</a>
              <a href="/localization" className={footerLink}>Localization</a>
              <a href="/seo" className={footerLink}>SEO</a>
              <a href="/analyze" className={footerLink}>Analyze</a>
              <a href="/optimize" className={footerLink}>Optimize</a>
              <a href="/collaboration" className={footerLink}>Collaboration</a>
              <a href="/security" className={footerLink}>Security</a>
              <a href="/apps" className={footerLink}>Apps</a>
              <a href="/ai" className={footerLink}>Kreature AI</a>
            </div>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <span
              className={footerHeading}
              style={{ color: V("color-canvas") }}
            >
              Solutions
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="/enterprise" className={footerLink}>Enterprise</a>
              <a href="/startups" className={footerLink}>Startups</a>
              <a href="/agencies" className={footerLink}>Agencies</a>
              <a href="/freelancers" className={footerLink}>Freelancers</a>
            </div>
          </div>

          {/* Column 4: Resources */}
          <div>
            <span
              className={footerHeading}
              style={{ color: V("color-canvas") }}
            >
              Resources
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="/university" className={footerLink}>University</a>
              <a href="/blog" className={footerLink}>Blog</a>
              <a href="/customers" className={footerLink}>Customer stories</a>
              <a href="/templates" className={footerLink}>Templates</a>
              <a href="/made-in-webflow" className={footerLink}>Made in Kreature</a>
              <a href="/glossary" className={footerLink}>Glossary</a>
              <a href="/libraries" className={footerLink}>Libraries</a>
              <a href="/webflow-way" className={footerLink}>The Kreature Way</a>
            </div>
          </div>

          {/* Column 5: Company */}
          <div>
            <span
              className={footerHeading}
              style={{ color: V("color-canvas") }}
            >
              Company
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="/company/about" className={footerLink}>About</a>
              <a href="/company/careers" className={footerLink}>Careers</a>
              <a href="/company/press" className={footerLink}>Press</a>
              <a href="/legal/terms" className={footerLink}>Terms of Service</a>
              <a href="/legal/privacy" className={footerLink}>Privacy policy</a>
              <a href="/legal/cookies" className={footerLink}>Cookie policy</a>
              <a href="/legal/accessibility" className={footerLink}>Accessibility statement</a>
            </div>
          </div>

          {/* Column 6: Community + Get help */}
          <div>
            <span
              className={footerHeading}
              style={{ color: V("color-canvas") }}
            >
              Community
            </span>
            <div className="flex flex-col gap-2.5 mb-6">
              <a href="/community" className={footerLink}>Join the community</a>
              <a href="/certified-partners" className={footerLink}>Certified Partners</a>
              <a href="/affiliates" className={footerLink}>Become an affiliate</a>
            </div>
            <span
              className={footerHeading}
              style={{ color: V("color-canvas") }}
            >
              Get help
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="/help" className={footerLink}>Support</a>
              <a href="/pricing" className={footerLink}>Pricing</a>
              <a href="/contact-sales" className={footerLink}>Contact Sales</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8"
          style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }}
        >
          {/* Logo + copyright */}
          <div className="flex items-center gap-4">
            <img
              src="/logo/kreature-logo-light.png"
              alt="Kreature"
              className="h-[28px] w-auto"
            />
            <span
              style={{
                fontSize: "13px",
                color: V("color-mute-soft"),
              }}
            >
              &copy; 2025 Kreature, Inc. All rights reserved.
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a href="/made-in-webflow" className={footerLink}>
              Made in Kreature
            </a>
            <a href="https://x.com/kreature" className={footerLink}>
              X
            </a>
            <a href="https://linkedin.com/company/kreature" className={footerLink}>
              LinkedIn
            </a>
            <a href="https://instagram.com/kreature" className={footerLink}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
