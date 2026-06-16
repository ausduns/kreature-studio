"use client";

import { useState, useCallback } from "react";

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
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  bodyLg: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
};

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";

/* ─── DATA ─── */

const TRUST_LOGOS = [
  { name: "Verifone", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/verifone.svg` },
  { name: "NCR", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/ncr.svg` },
  { name: "monday.com", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/monday.svg` },
  { name: "Spotify", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/spotify.svg` },
  { name: "TED", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/ted.svg` },
  { name: "Greenhouse", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/greenhouse.svg` },
  { name: "Clear", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/clear.svg` },
  { name: "OrangeTheory", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/orangetheory.svg` },
  { name: "Checkout.com", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/checkout.svg` },
  { name: "SoundCloud", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/soundcloud.svg` },
];

const SECURITY_FEATURES = [
  {
    title: "Single Sign-On (SSO)",
    desc: "Integrate with your identity provider — Okta, Azure AD, OneLogin, or any SAML 2.0 / OIDC provider. Enforce organization-wide access policies and streamline onboarding.",
    icon: "🔐",
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Require MFA for every login. Support for TOTP, WebAuthn, and hardware security keys. Protect every account with an additional authentication layer.",
    icon: "🛡",
  },
  {
    title: "Audit Logs",
    desc: "Track every action across your workspace. Every publish, every permission change, every content edit is logged and exportable for compliance and security reviews.",
    icon: "📋",
  },
  {
    title: "Role-Based Access Control",
    desc: "Define custom roles with granular permissions. Control who can edit content, publish changes, manage users, and access billing — down to the individual page level.",
    icon: "👥",
  },
  {
    title: "SOC 2 Type II",
    desc: "Kreature maintains SOC 2 Type II certification with annual audits. Our security controls, availability, and confidentiality practices are independently verified.",
    icon: "✅",
  },
  {
    title: "Data Residency",
    desc: "Choose where your data lives. Host content in the US, EU, or Asia-Pacific regions to meet data sovereignty requirements and reduce latency for global teams.",
    icon: "🌍",
  },
];

const SCALE_FEATURES = [
  {
    title: "99.99% Uptime SLA",
    desc: "Enterprise-grade hosting with a financially backed uptime guarantee. Global CDN with 300+ points of presence ensures your site loads fast everywhere.",
    icon: "⚡",
  },
  {
    title: "Global Edge Network",
    desc: "Your content served from the edge, everywhere. Automatic failover, DDoS protection, and intelligent routing keep your site online through traffic spikes.",
    icon: "🌐",
  },
  {
    title: "Unlimited Bandwidth",
    desc: "No traffic caps, no overage fees. Handle Black Friday spikes, product launches, and viral moments without ever worrying about bandwidth limits.",
    icon: "📈",
  },
  {
    title: "Site Performance Monitoring",
    desc: "Real-time dashboards monitor Core Web Vitals, uptime, and performance metrics. Proactive alerts notify your team before users notice slowdowns.",
    icon: "📊",
  },
  {
    title: "Zero-Maintenance Hosting",
    desc: "No servers to patch, no certificates to renew, no infrastructure to manage. Our platform team handles security updates, scaling, and maintenance 24/7.",
    icon: "🔄",
  },
  {
    title: "Custom SLAs",
    desc: "Need a higher uptime guarantee or faster support response times? Custom SLAs are available for mission-critical deployments with dedicated infrastructure.",
    icon: "📝",
  },
];

const COLLABORATION_FEATURES = [
  {
    title: "Advanced Approvals",
    desc: "Custom multi-stage approval workflows. Require legal, compliance, or brand review before any change goes live. Every approval is logged and auditable.",
    icon: "✋",
  },
  {
    title: "Branching & Staging",
    desc: "Create isolated branches for major redesigns, seasonal campaigns, or A/B tests. Merge when ready. Staging environments let you preview before publishing.",
    icon: "🌿",
  },
  {
    title: "Design Systems",
    desc: "Shared component libraries, style guides, and brand tokens. Every team builds from the same source of truth. Changes propagate automatically across all properties.",
    icon: "🎨",
  },
  {
    title: "Version Control",
    desc: "Every change is versioned. Compare versions side by side, roll back instantly, and restore content from any point in time. Git-like history for your entire site.",
    icon: "⏱",
  },
  {
    title: "Workspace Management",
    desc: "Organize teams, sites, and permissions across your entire organization. Centralized billing, user management, and security settings for dozens of sites.",
    icon: "🏢",
  },
  {
    title: "Content Workflows",
    desc: "Draft, review, approve, schedule, and publish — all from one interface. Content teams stay productive without developer gatekeeping or CMS complexity.",
    icon: "📅",
  },
];

const SUPPORT_TIERS = [
  {
    title: "Dedicated Success Manager",
    desc: "A named point of contact who knows your business, your team, and your goals. Quarterly business reviews, strategic planning, and priority escalation.",
    highlight: true,
  },
  {
    title: "Priority Support",
    desc: "Skip the queue with guaranteed response times. Critical issues get 1-hour response, high-priority issues within 4 hours. 24/7 phone and email support.",
  },
  {
    title: "Onboarding & Training",
    desc: "Custom onboarding program tailored to your team structure. Live training sessions, documentation, and certification paths for designers, developers, and content editors.",
  },
  {
    title: "Migration Assistance",
    desc: "Dedicated engineering support for migrating from legacy platforms. Content migration tools, redirect management, and SEO preservation strategies.",
  },
  {
    title: "Solution Architecture",
    desc: "Access to Kreature solution architects who design your implementation — multi-site architecture, API integrations, headless deployments, and custom app development.",
  },
  {
    title: "Executive Sponsorship",
    desc: "Direct line to Kreature leadership. Quarterly executive check-ins, roadmap influence, and early access to new features and beta programs.",
  },
];

const CASE_STUDIES = [
  {
    stat: "32",
    label: "global sites launched in 10 days",
    quote: "With Kreature Enterprise, we're not just keeping up — we're setting the pace. The platform's speed and reliability let us launch a complete global rebrand across 32 markets in under two weeks.",
    name: "Rob Alfano",
    role: "VP of Digital Marketing",
    co: "Verifone",
    logo: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/verifone.svg`,
  },
  {
    stat: "98%",
    label: "increase in speed to market",
    quote: "With Kreature Enterprise, we can move with trust and confidence that things will get done quickly without compromising our brand or draining engineering resources.",
    name: "Cat Origitano",
    role: "VP of Product & Portfolio Marketing",
    co: "Fivetran",
    logo: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/fivetran.svg`,
  },
  {
    stat: "$6M",
    label: "in cost savings annually",
    quote: "We're saving upwards of $6 million a year with Kreature Enterprise, and we've reinvested those savings into website optimization and localization. That's been really powerful for our global growth.",
    name: "Malcolm Greene",
    role: "Chief Information Officer",
    co: "Orangetheory Fitness",
    logo: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/orangetheory.svg`,
  },
  {
    stat: "1,170%",
    label: "increase in traffic YoY",
    quote: "Kreature doesn't just allow you to work faster, but differently. Once you get engineers, designers, and copywriters to really enjoy working together, that's something different.",
    name: "Carla Weis",
    role: "VP, Brand & Creative",
    co: "Docusign",
    logo: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/docusign.svg`,
  },
];

const COMPARISON_PLANS = [
  {
    feature: "Hosting & Infrastructure",
    starter: "Shared hosting, 99.9% uptime",
    enterprise: "Dedicated infrastructure, 99.99% uptime SLA",
  },
  {
    feature: "Security",
    starter: "Standard SSL, 2FA",
    enterprise: "SSO, MFA, RBAC, audit logs, SOC 2 Type II",
  },
  {
    feature: "Support",
    starter: "Community forum, email support",
    enterprise: "Dedicated success manager, 24/7 priority support",
  },
  {
    feature: "Collaboration",
    starter: "3 editors, basic roles",
    enterprise: "Unlimited editors, custom roles, approvals, branching",
  },
  {
    feature: "Content Management",
    starter: "5 CMS collections, 2 locales",
    enterprise: "Unlimited collections, unlimited locales, scheduling",
  },
  {
    feature: "API Access",
    starter: "REST API, 60 req/min",
    enterprise: "Full API access, custom rate limits, webhooks, headless SDK",
  },
  {
    feature: "Performance",
    starter: "Standard CDN",
    enterprise: "Global edge network, performance monitoring, Core Web Vitals dashboard",
  },
  {
    feature: "Customization",
    starter: "Standard themes and components",
    enterprise: "Custom components, design systems, white-label options, custom apps",
  },
  {
    feature: "Billing & Contracts",
    starter: "Monthly or annual, credit card",
    enterprise: "Custom contracts, invoicing, procurement-friendly terms",
  },
  {
    feature: "Compliance",
    starter: "Standard DPA",
    enterprise: "Custom DPA, data residency, HIPAA BAAs, GDPR support team",
  },
];

const ENTERPRISE_LOGOS = [
  { name: "Verifone", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/verifone.svg` },
  { name: "NCR", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/ncr.svg` },
  { name: "monday.com", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/monday.svg` },
  { name: "Spotify", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/spotify.svg` },
  { name: "TED", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/ted.svg` },
  { name: "Greenhouse", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/greenhouse.svg` },
  { name: "Clear", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/clear.svg` },
  { name: "OrangeTheory", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/orangetheory.svg` },
  { name: "Checkout.com", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/checkout.svg` },
  { name: "SoundCloud", src: `https://dhygzobemt712.cloudfront.net/Web/logos/dark/soundcloud.svg` },
];

const FAQ_ITEMS = [
  {
    q: "How long does enterprise onboarding take?",
    a: "Most enterprise teams are fully onboarded within 2-4 weeks. This includes SSO integration, team training, content migration planning, and custom workspace setup. Larger migrations with dozens of sites may take 6-8 weeks depending on complexity.",
  },
  {
    q: "Can we use our own identity provider?",
    a: "Yes. Kreature Enterprise supports any SAML 2.0 or OIDC-compatible identity provider, including Okta, Azure AD, OneLogin, Ping Identity, and Google Workspace. We also support just-in-time provisioning and SCIM for automated user management.",
  },
  {
    q: "What compliance certifications does Kreature hold?",
    a: "Kreature is SOC 2 Type II certified with annual independent audits. We maintain GDPR compliance, offer custom Data Processing Agreements, and can support HIPAA BAAs for healthcare organizations. Our security team reviews and updates compliance documentation quarterly.",
  },
  {
    q: "Do you offer custom contracts and invoicing?",
    a: "Absolutely. Enterprise plans include custom Master Service Agreements, flexible payment terms, net-30/60 invoicing, and procurement-friendly documentation. We work with your legal and procurement teams to meet your organization's requirements.",
  },
  {
    q: "What does the 99.99% uptime SLA cover?",
    a: "Our SLA guarantees 99.99% uptime for your published sites, measured monthly. If we fall below this threshold, you receive service credits. The SLA covers our hosting infrastructure, CDN, and platform services. Exclusions include scheduled maintenance (announced 72 hours in advance) and force majeure events.",
  },
  {
    q: "Can we host Kreature on our own infrastructure?",
    a: "Kreature is a cloud-native platform and runs on our managed infrastructure. However, we offer dedicated hosting environments for enterprise customers with custom security requirements, private networking, and dedicated compute resources. Contact our sales team to discuss your specific infrastructure needs.",
  },
];

const FOOTER: Record<string, string[]> = {
  Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way"],
  Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ─── HELPERS ─── */

function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">→</span>;
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
      className={`px-5 sm:px-8 py-[clamp(3rem,8vw,9rem)] ${className ?? ""}`}
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

function Kreature() {
  return (
    <>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </>
  );
}

/* ─── PAGE ─── */

export default function EnterprisePage() {
  const [caseIdx, setCaseIdx] = useState(0);
  const caseLen = CASE_STUDIES.length;
  const c = CASE_STUDIES[caseIdx];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const prevCase = useCallback(
    () => setCaseIdx((i) => (i - 1 + caseLen) % caseLen),
    [caseLen],
  );
  const nextCase = useCallback(
    () => setCaseIdx((i) => (i + 1) % caseLen),
    [caseLen],
  );

  return (
    <div
      className="page-wrapper"
      style={{ background: V("color-canvas"), color: V("color-body") }}
    >
      <main>
        {/* ─── HERO ─── */}
        <section
          className="px-5 sm:px-8 pt-[clamp(3rem,8vw,8rem)] pb-[clamp(3rem,6vw,6rem)]"
          style={{ background: V("color-ink") }}
        >
          <div className="max-w-[1440px] mx-auto text-center">
            <p
              className="mb-4 uppercase tracking-widest"
              style={{ ...S.caption, color: V("color-mute-soft") }}
            >
              Kreature Enterprise
            </p>
            <h1
              className="font-semibold leading-[1.04] mb-6 max-w-[900px] mx-auto"
              style={{ ...S.h1, color: V("color-canvas") }}
            >
              The enterprise-grade web platform for teams that build at scale
            </h1>
            <p
              className="max-w-[650px] mx-auto mb-10"
              style={{ ...S.bodyLg, color: V("color-mute-soft") }}
            >
              Everything growing teams need to build, manage, and optimize
              high-performing websites — with the security, compliance, and
              support enterprise organizations require.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact-sales"
                className="transition-colors inline-flex items-center rounded-sm"
                style={{
                  ...S.btn,
                  background: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Talk to sales
                <Arrow />
              </a>
              <a
                href="/signup"
                className="transition-colors inline-flex items-center rounded-sm"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-canvas"),
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Start for free
              </a>
            </div>
          </div>
        </section>

        {/* ─── TRUST BAR ─── */}
        <section
          className="py-12 px-5 sm:px-8 border-b"
          style={{
            borderColor: V("color-hairline"),
            background: V("color-canvas"),
          }}
        >
          <div className="max-w-[1440px] mx-auto">
            <p
              className="text-center mb-8 uppercase tracking-wider"
              style={{ ...S.bodySm, color: V("color-mute") }}
            >
              Trusted by enterprise teams worldwide
            </p>
            <div className="flex flex-wrap gap-8 items-center justify-center opacity-40">
              {TRUST_LOGOS.map((l) => (
                <img
                  key={l.name}
                  src={l.src}
                  alt={l.name}
                  className="h-6 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECURITY FEATURES ─── */}
        <Section>
          <div className="text-center mb-16">
            <h2 style={{ ...S.h2, color: V("color-ink") }}>
              Enterprise security, built in
            </h2>
            <p
              className="max-w-[650px] mx-auto mt-4"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              From SSO to audit logs, every security feature you need is
              included — not bolted on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-lg p-[clamp(1.25rem,2vw,2rem)] transition-all hover:shadow-md"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                <div className="text-2xl mb-4">{f.icon}</div>
                <h4 style={{ ...S.h4, color: V("color-ink") }} className="mb-3">
                  {f.title}
                </h4>
                <p style={{ ...S.body, color: V("color-body-mid") }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── SCALE FEATURES ─── */}
        <Section bg="soft">
          <div className="text-center mb-16">
            <h2 style={{ ...S.h2, color: V("color-ink") }}>
              Built to scale with you
            </h2>
            <p
              className="max-w-[650px] mx-auto mt-4"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              From your first site to your hundredth, the infrastructure scales
              automatically.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCALE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-lg p-[clamp(1.25rem,2vw,2rem)] transition-all hover:shadow-md"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                <div className="text-2xl mb-4">{f.icon}</div>
                <h4 style={{ ...S.h4, color: V("color-ink") }} className="mb-3">
                  {f.title}
                </h4>
                <p style={{ ...S.body, color: V("color-body-mid") }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── COLLABORATION ─── */}
        <Section>
          <div className="text-center mb-16">
            <h2 style={{ ...S.h2, color: V("color-ink") }}>
              Collaboration at enterprise scale
            </h2>
            <p
              className="max-w-[650px] mx-auto mt-4"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              Advanced workflows that keep large teams aligned, productive, and
              on brand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLABORATION_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-lg p-[clamp(1.25rem,2vw,2rem)] transition-all hover:shadow-md"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                <div className="text-2xl mb-4">{f.icon}</div>
                <h4 style={{ ...S.h4, color: V("color-ink") }} className="mb-3">
                  {f.title}
                </h4>
                <p style={{ ...S.body, color: V("color-body-mid") }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── CASE STUDIES ─── */}
        <Section bg="soft">
          <div className="mb-12">
            <h2 style={{ ...S.h2, color: V("color-ink") }} className="mb-4">
              Enterprise teams building with <Kreature />
            </h2>
            <p
              className="max-w-[650px]"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              See how organizations use Kreature Enterprise to move faster,
              reduce costs, and drive measurable results.
            </p>
          </div>

          <div
            className="rounded-lg overflow-hidden max-w-[900px]"
            style={{
              borderRadius: "8px",
              border: `1px solid ${V("color-hairline")}`,
              background: V("color-canvas"),
            }}
          >
            <div className="p-[clamp(1.5rem,3vw,2.5rem)]">
              <img
                src={c.logo}
                alt={c.co}
                className="h-6 w-auto mb-6 opacity-60"
              />
              <div className="mb-6">
                <div
                  className="font-semibold leading-none mb-2"
                  style={{
                    fontSize: "clamp(2.5rem,5vw,4rem)",
                    color: V("color-ink"),
                  }}
                >
                  {c.stat}
                </div>
                <div
                  className="font-medium"
                  style={{
                    fontSize: "clamp(1rem,1.3vw,1.25rem)",
                    color: V("color-body-mid"),
                  }}
                >
                  {c.label}
                </div>
              </div>
              <blockquote
                className="mb-6"
                style={{ ...S.bodyLg, color: V("color-body") }}
              >
                &ldquo;{c.quote}&rdquo;
              </blockquote>
              <div style={{ ...S.bodySm, fontWeight: 500, color: V("color-ink") }}>
                {c.name}
              </div>
              <div style={{ ...S.bodySm, color: V("color-mute") }}>
                {c.role}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <button
                onClick={prevCase}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-current"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-mute"),
                }}
                aria-label="Previous case study"
              >
                &larr;
              </button>
              <button
                onClick={nextCase}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-current"
                style={{
                  borderColor: V("color-hairline"),
                  color: V("color-mute"),
                }}
                aria-label="Next case study"
              >
                &rarr;
              </button>
            </div>
            <div className="flex items-center gap-2">
              {CASE_STUDIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCaseIdx(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === caseIdx ? 24 : 8,
                    height: 8,
                    background:
                      i === caseIdx
                        ? V("color-ink")
                        : V("color-hairline"),
                  }}
                  aria-label={`Case study ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs" style={{ color: V("color-mute") }}>
              {caseIdx + 1} / {caseLen}
            </span>
          </div>
        </Section>

        {/* ─── ENTERPRISE SUPPORT ─── */}
        <Section>
          <div className="text-center mb-16">
            <h2 style={{ ...S.h2, color: V("color-ink") }}>
              Enterprise-grade support
            </h2>
            <p
              className="max-w-[650px] mx-auto mt-4"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              More than just a help desk — a strategic partnership from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPORT_TIERS.map((f) => (
              <div
                key={f.title}
                className="rounded-lg p-[clamp(1.25rem,2vw,2rem)] transition-all hover:shadow-md"
                style={{
                  borderRadius: "8px",
                  border: f.highlight
                    ? `1px solid ${V("color-accent-blue")}`
                    : `1px solid ${V("color-hairline")}`,
                  background: f.highlight
                    ? `color-mix(in srgb, ${V("color-accent-blue")} 5%, ${V("color-canvas")} 95%)`
                    : V("color-canvas"),
                }}
              >
                <h4 style={{ ...S.h4, color: V("color-ink") }} className="mb-3">
                  {f.title}
                  {f.highlight && (
                    <span
                      className="ml-2 text-xs uppercase font-semibold px-2 py-0.5 rounded-sm"
                      style={{
                        background: V("color-accent-blue"),
                        color: "#fff",
                      }}
                    >
                      Key
                    </span>
                  )}
                </h4>
                <p style={{ ...S.body, color: V("color-body-mid") }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── COMPARISON TABLE ─── */}
        <Section bg="soft">
          <div className="mb-12">
            <h2 style={{ ...S.h2, color: V("color-ink") }} className="mb-4">
              How Enterprise compares
            </h2>
            <p
              className="max-w-[650px]"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              See what you get with Enterprise versus our standard plans.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ minWidth: "700px" }}>
              <thead>
                <tr
                  style={{
                    borderBottom: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <th
                    className="text-left py-4 pr-6"
                    style={{ ...S.bodySm, fontWeight: 600, color: V("color-mute") }}
                  >
                    Feature
                  </th>
                  <th
                    className="text-left py-4 px-6"
                    style={{ ...S.bodySm, fontWeight: 600, color: V("color-mute") }}
                  >
                    Starter & Growth
                  </th>
                  <th
                    className="text-left py-4 pl-6"
                    style={{
                      ...S.bodySm,
                      fontWeight: 600,
                      color: V("color-accent-blue"),
                    }}
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_PLANS.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: `1px solid ${V("color-hairline")}`,
                      background:
                        i % 2 === 0 ? "transparent" : V("color-canvas-soft"),
                    }}
                  >
                    <td
                      className="py-4 pr-6"
                      style={{
                        ...S.bodySm,
                        fontWeight: 500,
                        color: V("color-ink"),
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      className="py-4 px-6"
                      style={{ ...S.bodySm, color: V("color-body-mid") }}
                    >
                      {row.starter}
                    </td>
                    <td
                      className="py-4 pl-6"
                      style={{ ...S.bodySm, color: V("color-ink") }}
                    >
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ─── LOGO CAROUSEL ─── */}
        <section
          className="py-12 overflow-hidden border-y"
          style={{
            borderColor: V("color-hairline"),
            background: V("color-canvas"),
          }}
        >
          <div
            className="flex gap-10 animate-[scroll_40s_linear_infinite] w-max"
          >
            {[...ENTERPRISE_LOGOS, ...ENTERPRISE_LOGOS].map((l, i) => (
              <div key={i} className="flex items-center shrink-0">
                <img
                  src={l.src}
                  alt={l.name}
                  className="h-6 w-auto opacity-50"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ─── ENTERPRISE API ─── */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ ...S.h2, color: V("color-ink") }} className="mb-6">
                Enterprise API access
              </h2>
              <p
                className="mb-6"
                style={{ ...S.bodyLg, color: V("color-body-mid") }}
              >
                Programmatic access to every part of the platform. Build custom
                integrations, automate workflows, and connect Kreature to your
                existing tech stack.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Full REST and GraphQL APIs with custom rate limits",
                  "Webhooks for real-time event streaming",
                  "Headless SDK for custom front-end development",
                  "SCIM provisioning for automated user management",
                  "MACH Alliance certified — composable by design",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{ ...S.body, color: V("color-body") }}
                  >
                    <span
                      className="shrink-0 mt-1"
                      style={{ color: V("color-accent-blue") }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact-sales"
                className="transition-colors inline-flex items-center rounded-sm"
                style={{
                  ...S.btn,
                  background: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Talk to sales
                <Arrow />
              </a>
            </div>
            <div
              className="rounded-lg p-[clamp(1.5rem,3vw,2.5rem)]"
              style={{
                borderRadius: "8px",
                border: `1px solid ${V("color-hairline")}`,
                background: V("color-canvas-soft"),
              }}
            >
              <div
                className="text-xs uppercase tracking-wider mb-4"
                style={{ ...S.caption, color: V("color-mute") }}
              >
                Custom plans &amp; add-ons
              </div>
              {[
                "Dedicated hosting environment with private networking",
                "Custom component libraries and design systems",
                "White-label options for agencies and platforms",
                "Premium integrations with enterprise tools",
                "Advanced analytics and custom reporting",
                "AI-powered personalization at scale",
                "Multi-region deployment for global teams",
                "Custom SLA tiers for mission-critical sites",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 py-3"
                  style={{
                    borderBottom: `1px solid ${V("color-hairline")}`,
                    ...S.body,
                    color: V("color-body"),
                  }}
                >
                  <span
                    className="shrink-0 mt-0.5"
                    style={{ color: V("color-accent-blue") }}
                  >
                    +
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ─── FAQ ─── */}
        <Section bg="soft">
          <div className="max-w-[800px] mx-auto">
            <h2
              style={{ ...S.h2, color: V("color-ink") }}
              className="text-center mb-4"
            >
              Frequently asked questions
            </h2>
            <p
              className="text-center mb-12"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              Everything you need to know about Kreature Enterprise.
            </p>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden"
                  style={{
                    borderRadius: "8px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    style={{ color: V("color-ink") }}
                  >
                    <span style={{ ...S.body, fontWeight: 500 }}>
                      {item.q}
                    </span>
                    <span
                      className="shrink-0 text-lg transition-transform duration-200"
                      style={{
                        transform:
                          openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                        color: V("color-mute"),
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div
                      className="px-6 pb-5"
                      style={{ ...S.body, color: V("color-body-mid") }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ─── BOTTOM CTA ─── */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,9rem)] text-center"
          style={{ background: V("color-ink") }}
        >
          <div className="max-w-[700px] mx-auto">
            <h2
              className="font-semibold leading-[1.04] mb-6"
              style={{ ...S.h2, color: V("color-canvas") }}
            >
              Ready to bring <Kreature /> to your enterprise?
            </h2>
            <p
              className="mb-8"
              style={{ ...S.bodyLg, color: V("color-mute-soft") }}
            >
              Let&apos;s talk about your team&apos;s needs. From security
              reviews to custom pricing, our enterprise team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact-sales"
                className="transition-colors inline-flex items-center rounded-sm"
                style={{
                  ...S.btn,
                  background: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Talk to sales
                <Arrow />
              </a>
              <a
                href="/signup"
                className="transition-colors inline-flex items-center rounded-sm"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-canvas"),
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Start for free
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-16 px-5 sm:px-8"
        style={{
          borderTop: `1px solid ${V("color-hairline")}`,
          background: V("color-canvas"),
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(FOOTER).map(([heading, items]) => (
              <div key={heading}>
                <h4
                  className="font-medium mb-6"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
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
              &copy; {new Date().getFullYear()} Kreature, Inc. All rights
              reserved
            </p>
            <div
              className="flex items-center gap-4"
              style={{ fontSize: "12px", color: V("color-mute") }}
            >
              <a href="#" className="hover:underline">
                Made in Kreature
              </a>
              {[
                "YouTube",
                "X",
                "Facebook",
                "LinkedIn",
                "Instagram",
                "TikTok",
              ].map((p) => (
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
