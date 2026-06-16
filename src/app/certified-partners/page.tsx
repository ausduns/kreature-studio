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
};

/* ─── DATA ─── */

const PARTNER_TIERS = [
  {
    id: "certified",
    name: "Certified Partner",
    accent: "green",
    description: "Proven expertise delivering Kreature projects. Vetted for quality, reliability, and customer satisfaction.",
    badge: "Certified",
    requirements: [
      "Complete Kreature Partner Certification program",
      "Minimum 3 completed Kreature projects",
      "95%+ customer satisfaction score",
      "Active Kreature agency plan subscription",
    ],
    benefits: [
      "Listed in the Kreature Partner Directory",
      "Partner badge on your profile",
      "Access to partner Slack community",
      "Early access to new features",
      "Co-marketing opportunities",
    ],
  },
  {
    id: "premier",
    name: "Premier Partner",
    accent: "blue",
    description: "Elite partners with deep platform expertise and a track record of delivering exceptional results at scale.",
    badge: "Premier",
    requirements: [
      "All Certified Partner requirements",
      "Minimum 15 completed Kreature projects",
      "Dedicated Kreature practice lead on staff",
      "Case studies demonstrating measurable client results",
      "Annual partner business review",
    ],
    benefits: [
      "Everything in Certified, plus:",
      "Priority placement in Partner Directory",
      "Direct referral pipeline from Kreature sales",
      "Dedicated partner success manager",
      "Co-branded case studies and PR",
      "Invitation to Premier Partner Summit",
      "Revenue sharing on referred clients",
    ],
  },
  {
    id: "global",
    name: "Global Partner",
    accent: "purple",
    description: "Strategic partners operating at worldwide scale. Trusted to drive the Kreature ecosystem across regions and industries.",
    badge: "Global",
    requirements: [
      "All Premier Partner requirements",
      "Presence in 3+ geographic regions",
      "50+ certified Kreature practitioners on staff",
      "Significant annual Kreature revenue commitment",
      "Executive-level relationship with Kreature leadership",
    ],
    benefits: [
      "Everything in Premier, plus:",
      "Exclusive territory and industry rights",
      "Joint go-to-market strategy with Kreature",
      "Custom integrations and API access",
      "Co-development of platform features",
      "Executive sponsor from Kreature leadership",
      "Global Partner Summit speaking opportunities",
    ],
  },
];

const BENEFITS = [
  {
    title: "Accelerate delivery",
    description: "Certified partners bring battle-tested playbooks and deep platform expertise. They ship Kreature projects 3x faster than internal teams learning the platform from scratch.",
    accent: "green",
  },
  {
    title: "Strategic guidance",
    description: "Partners don't just build — they advise. From content architecture to SEO strategy to conversion optimization, they bring strategic expertise that elevates every project.",
    accent: "blue",
  },
  {
    title: "Enterprise scale",
    description: "Global partners have managed Kreature deployments with hundreds of sites, thousands of pages, and millions of visitors. They know how to operate at enterprise scale.",
    accent: "purple",
  },
  {
    title: "Deep specialization",
    description: "Whether you need ecommerce, localization, accessibility compliance, or custom integrations — there's a partner with exactly the expertise your project demands.",
    accent: "orange",
  },
  {
    title: "Ongoing support",
    description: "Partners provide long-term maintenance, optimization, and evolution of your Kreature investment. They're your extended team, not just a one-time build shop.",
    accent: "pink",
  },
  {
    title: "Vetted quality",
    description: "Every certified partner has passed Kreature's rigorous qualification process. You get proven expertise, not a gamble on an unknown agency.",
    accent: "green",
  },
];

const REGIONS = ["All regions", "North America", "Europe", "Asia Pacific", "Latin America", "Middle East & Africa"];
const EXPERTISE_AREAS = [
  "All expertise",
  "Enterprise deployments",
  "Ecommerce",
  "Localization",
  "SEO & AEO",
  "Accessibility",
  "Design systems",
  "Custom integrations",
  "Migration",
];

const SAMPLE_PARTNERS = [
  {
    name: "Digital Velocity",
    region: "North America",
    tier: "Premier",
    expertise: ["Enterprise deployments", "Migration", "Design systems"],
    projects: 120,
    description: "Full-service digital agency specializing in enterprise Kreature migrations and design system implementation.",
    accent: "blue",
  },
  {
    name: "Atlas Interactive",
    region: "Europe",
    tier: "Global",
    expertise: ["Ecommerce", "Localization", "Enterprise deployments"],
    projects: 350,
    description: "Global digital consultancy with deep ecommerce expertise. Launched 50+ localized Kreature storefronts across EMEA.",
    accent: "purple",
  },
  {
    name: "Prism Studio",
    region: "North America",
    tier: "Certified",
    expertise: ["SEO & AEO", "Design systems", "Accessibility"],
    projects: 45,
    description: "Boutique studio focused on accessible, performant Kreature builds with best-in-class SEO outcomes.",
    accent: "green",
  },
  {
    name: "Meridian Labs",
    region: "Asia Pacific",
    tier: "Premier",
    expertise: ["Localization", "Custom integrations", "Enterprise deployments"],
    projects: 200,
    description: "APAC-based partner with deep localization expertise. Manages multi-language Kreature deployments across 12 markets.",
    accent: "blue",
  },
  {
    name: "Forge Digital",
    region: "Europe",
    tier: "Certified",
    expertise: ["Custom integrations", "Migration", "Design systems"],
    projects: 60,
    description: "Technical agency specializing in complex Kreature integrations with existing enterprise tech stacks.",
    accent: "green",
  },
  {
    name: "Latitude Agency",
    region: "Latin America",
    tier: "Premier",
    expertise: ["Ecommerce", "Localization", "SEO & AEO"],
    projects: 150,
    description: "Leading LATAM digital agency. Drove 300% growth for regional ecommerce brands on Kreature.",
    accent: "blue",
  },
  {
    name: "Vector Creative",
    region: "North America",
    tier: "Premier",
    expertise: ["Design systems", "Accessibility", "Enterprise deployments"],
    projects: 180,
    description: "Design-led agency that built design systems powering 200+ Kreature sites for Fortune 500 clients.",
    accent: "blue",
  },
  {
    name: "Zenith Partners",
    region: "Middle East & Africa",
    tier: "Certified",
    expertise: ["Enterprise deployments", "Localization", "Migration"],
    projects: 35,
    description: "MEA regional partner with deep knowledge of RTL localization and regional compliance requirements.",
    accent: "green",
  },
  {
    name: "Nexus Digital",
    region: "Europe",
    tier: "Global",
    expertise: ["Enterprise deployments", "Ecommerce", "Custom integrations"],
    projects: 500,
    description: "One of Kreature's largest global partners. Powers digital experiences for major brands across 40+ countries.",
    accent: "purple",
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

export default function CertifiedPartnersPage() {
  const [activeTier, setActiveTier] = useState(1); // Premier default
  const [selectedRegion, setSelectedRegion] = useState("All regions");
  const [selectedExpertise, setSelectedExpertise] = useState("All expertise");

  const filteredPartners = SAMPLE_PARTNERS.filter((p) => {
    const regionMatch = selectedRegion === "All regions" || p.region === selectedRegion;
    const expertiseMatch = selectedExpertise === "All expertise" || p.expertise.includes(selectedExpertise);
    return regionMatch && expertiseMatch;
  });

  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-ink") }}
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(59,137,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow orbs */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-15"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-purple")} 0%, transparent 70%)`,
              transform: "translate(-20%, 30%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[800px]">
              {/* Eyebrow */}
              <p
                className="mb-4"
                style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
              >
                Partner ecosystem
              </p>

              {/* H1 */}
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Find the perfect partner
              </h1>

              {/* Subtext */}
              <p className="max-w-[650px] mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Kreature&apos;s certified partner network connects you with vetted agencies and consultants
                who deliver exceptional results. From strategy to build to ongoing optimization — there&apos;s
                a partner ready to help.
              </p>

              {/* Hero metrics */}
              <div className="flex flex-wrap gap-8 lg:gap-16">
                {[
                  { value: "500+", label: "certified partners worldwide" },
                  { value: "60+", label: "countries served" },
                  { value: "50K+", label: "projects delivered" },
                ].map((m) => (
                  <div key={m.label}>
                    <div
                      className="font-semibold leading-none mb-1"
                      style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: V("color-canvas") }}
                    >
                      {m.value}
                    </div>
                    <p style={{ ...S.bodySm, color: V("color-mute-soft") }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ PARTNER DIRECTORY / SEARCH ═══════ */}
        <Section>
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Partner directory
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Find a partner by region or expertise
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Filter our global partner network by region and specialization to find the right team for your project.
            </p>
          </div>

          {/* Filters */}
          <div
            className="rounded-lg p-6 mb-10"
            style={{
              borderRadius: "8px",
              border: `1px solid ${V("color-hairline")}`,
              background: V("color-canvas-soft"),
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Region filter */}
              <div>
                <p className="mb-3 font-semibold" style={{ ...S.bodySm, color: V("color-ink") }}>
                  Region
                </p>
                <div className="flex flex-wrap gap-2">
                  {REGIONS.map((r) => (
                    <button
                      key={r}
                      onClick={() => setSelectedRegion(r)}
                      className="transition-all"
                      style={{
                        ...S.bodySm,
                        fontWeight: 500,
                        padding: "6px 14px",
                        borderRadius: "100px",
                        border: `1px solid ${r === selectedRegion ? V("color-accent-blue") : V("color-hairline")}`,
                        background: r === selectedRegion ? V("color-accent-blue") : "transparent",
                        color: r === selectedRegion ? "#fff" : V("color-body-mid"),
                      }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Expertise filter */}
              <div>
                <p className="mb-3 font-semibold" style={{ ...S.bodySm, color: V("color-ink") }}>
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {EXPERTISE_AREAS.map((e) => (
                    <button
                      key={e}
                      onClick={() => setSelectedExpertise(e)}
                      className="transition-all"
                      style={{
                        ...S.bodySm,
                        fontWeight: 500,
                        padding: "6px 14px",
                        borderRadius: "100px",
                        border: `1px solid ${e === selectedExpertise ? V("color-accent-blue") : V("color-hairline")}`,
                        background: e === selectedExpertise ? V("color-accent-blue") : "transparent",
                        color: e === selectedExpertise ? "#fff" : V("color-body-mid"),
                      }}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Filtered results */}
          {filteredPartners.length === 0 ? (
            <div className="text-center py-16">
              <p style={{ ...S.bodyLg, color: V("color-mute") }}>
                No partners found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)] transition-all hover:shadow-lg group"
                  style={{
                    borderRadius: "8px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  {/* Partner avatar + tier badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0"
                        style={{ background: V("color-canvas-soft"), color: V("color-ink") }}
                      >
                        {partner.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ ...S.bodySm, color: V("color-ink") }}>
                          {partner.name}
                        </p>
                        <p style={{ fontSize: "11px", color: V("color-mute") }}>{partner.region}</p>
                      </div>
                    </div>
                    <span
                      className="shrink-0"
                      style={{
                        ...S.caption,
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "100px",
                        background: V(`color-accent-${partner.accent}`),
                        color: "#fff",
                      }}
                    >
                      {partner.tier}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-4" style={{ ...S.bodySm, color: V("color-body-mid") }}>
                    {partner.description}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {partner.expertise.map((exp) => (
                      <span
                        key={exp}
                        style={{
                          ...S.caption,
                          padding: "2px 8px",
                          borderRadius: "4px",
                          background: V("color-canvas-soft"),
                          color: V("color-body-mid"),
                        }}
                      >
                        {exp}
                      </span>
                    ))}
                  </div>

                  {/* Projects count + CTA */}
                  <div className="flex items-center justify-between">
                    <p style={{ ...S.caption, color: V("color-mute") }}>
                      {partner.projects}+ projects delivered
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center transition-colors hover:gap-2"
                      style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-blue") }}
                    >
                      View profile <Arrow />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results count */}
          <div className="text-center mt-8">
            <p style={{ ...S.bodySm, color: V("color-mute") }}>
              Showing {filteredPartners.length} of {SAMPLE_PARTNERS.length} partners
            </p>
          </div>
        </Section>

        {/* ═══════ PARTNER TIERS ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Partner tiers
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Three levels of partnership
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Every Kreature partner is vetted for quality. Our tiered system helps you find partners
              matched to your project&apos;s scale and complexity.
            </p>
          </div>

          {/* Tier tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {PARTNER_TIERS.map((tier, i) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(i)}
                className="transition-all"
                style={{
                  ...S.bodySm,
                  fontWeight: 500,
                  padding: "10px 24px",
                  borderRadius: "100px",
                  border: `1px solid ${i === activeTier ? V(`color-accent-${tier.accent}`) : V("color-hairline")}`,
                  background: i === activeTier ? V(`color-accent-${tier.accent}`) : "transparent",
                  color: i === activeTier ? "#fff" : V("color-body-mid"),
                }}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Active tier detail */}
          {PARTNER_TIERS.map((tier, i) => (
            <div key={tier.id} className={i === activeTier ? "block" : "hidden"}>
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left: Description + badge */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm shrink-0"
                      style={{ background: V(`color-accent-${tier.accent}`), color: "#fff" }}
                    >
                      {tier.badge.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ ...S.h3, color: V("color-ink") }}>
                        {tier.name}
                      </h3>
                      <span
                        style={{
                          ...S.caption,
                          fontWeight: 600,
                          padding: "2px 10px",
                          borderRadius: "100px",
                          background: V(`color-accent-${tier.accent}`),
                          color: "#fff",
                        }}
                      >
                        {tier.badge}
                      </span>
                    </div>
                  </div>

                  <p className="mb-8" style={{ ...S.bodyLg, color: V("color-body") }}>
                    {tier.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4" style={{ ...S.h4, color: V("color-ink") }}>
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {tier.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-3">
                          <span
                            className="shrink-0 mt-[3px] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                            style={{ background: V(`color-accent-${tier.accent}`), color: "#fff" }}
                          >
                            ✓
                          </span>
                          <span style={{ ...S.body, color: V("color-body-mid") }}>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Benefits */}
                <div
                  className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)]"
                  style={{
                    borderRadius: "8px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <h4 className="font-semibold mb-4" style={{ ...S.h4, color: V("color-ink") }}>
                    Partner benefits
                  </h4>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span
                          className="shrink-0 mt-[3px] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                          style={{ background: V(`color-accent-${tier.accent}`), color: "#fff" }}
                        >
                          ✓
                        </span>
                        <span
                          style={{
                            ...S.body,
                            color: V("color-body"),
                            fontWeight: benefit.startsWith("Everything in") ? 600 : 400,
                          }}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Section>

        {/* ═══════ BENEFITS OF WORKING WITH A PARTNER ═══════ */}
        <Section>
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Why work with a partner
            </p>
            <h2 className="font-semibold leading-[1.04]" style={{ ...S.h2, color: V("color-ink") }}>
              Experts who accelerate your success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)] transition-all hover:shadow-lg group"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                {/* Accent bar */}
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ background: V(`color-accent-${benefit.accent}`) }}
                />

                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {benefit.title}
                </h3>
                <p style={{ ...S.body, color: V("color-body-mid") }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ HOW TO GET STARTED ═══════ */}
        <Section bg="soft">
          <div className="mb-14 text-center">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              How it works
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              From search to launch in four steps
            </h2>
            <p className="max-w-[650px] mx-auto" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Working with a Kreature certified partner is straightforward. Here&apos;s what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Browse & filter", desc: "Search our partner directory by region, expertise, and tier. Review partner profiles, case studies, and client reviews." },
              { step: "02", title: "Connect & scope", desc: "Reach out to partners that match your needs. They'll assess your project and provide a detailed scope and timeline." },
              { step: "03", title: "Build & iterate", desc: "Your partner leads the build on Kreature while you stay involved through shared workspaces and regular reviews." },
              { step: "04", title: "Launch & optimize", desc: "Go live with confidence. Your partner provides ongoing support, optimization, and evolution of your Kreature investment." },
            ].map((step) => (
              <div key={step.step} className="relative">
                {/* Step number */}
                <div
                  className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none mb-4"
                  style={{ color: V("color-accent-blue"), opacity: 0.2 }}
                >
                  {step.step}
                </div>
                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {step.title}
                </h3>
                <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ BECOME A PARTNER CTA ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)]"
          style={{ background: V("color-ink") }}
        >
          {/* Blue + purple glow */}
          <div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-15"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-purple")} 0%, transparent 70%)`,
              transform: "translate(30%, -20%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <h2
                  className="font-semibold leading-[1.04] mb-6"
                  style={{ ...S.h2, color: V("color-canvas") }}
                >
                  Become a partner
                </h2>
                <p className="mb-8" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                  Join a global network of 500+ agencies and consultants building the future of the web
                  on Kreature. Get certified, get listed, and grow your business with access to
                  Kreature&apos;s customer base, co-marketing, and referral programs.
                </p>

                {/* Partner stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "500+", label: "partners worldwide" },
                    { value: "3x", label: "average revenue growth" },
                    { value: "50K+", label: "projects delivered" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        className="font-semibold leading-none mb-1"
                        style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", color: V("color-canvas") }}
                      >
                        {s.value}
                      </div>
                      <p style={{ ...S.caption, color: V("color-mute-soft") }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center transition-colors"
                    style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
                  >
                    Apply to become a partner <Arrow />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center transition-colors"
                    style={{
                      ...S.btn,
                      background: "transparent",
                      color: V("color-canvas"),
                      border: `1px solid rgba(255,255,255,0.2)`,
                    }}
                  >
                    Learn about the program
                  </a>
                </div>
              </div>

              {/* Right: Testimonial card */}
              <div
                className="rounded-lg p-[clamp(2rem,3vw,2.5rem)]"
                style={{
                  borderRadius: "12px",
                  background: V("color-canvas-soft"),
                  border: `1px solid rgba(255,255,255,0.08)`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm mb-6"
                  style={{ background: V("color-accent-blue"), color: "#fff" }}
                >
                  D
                </div>
                <blockquote className="mb-6">
                  <p className="mb-4 italic" style={{ ...S.bodyLg, color: V("color-canvas") }}>
                    &ldquo;Becoming a Kreature Premier Partner transformed our agency. The referral pipeline
                    alone has driven 40% of our new business this year. The platform expertise we&apos;ve built
                    gives us a genuine competitive advantage in every pitch.&rdquo;
                  </p>
                </blockquote>
                <div>
                  <p className="font-semibold" style={{ ...S.bodySm, color: V("color-canvas") }}>
                    Marcus Rivera
                  </p>
                  <p style={{ ...S.caption, color: V("color-mute-soft") }}>
                    CEO, Digital Velocity — Premier Partner since 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
