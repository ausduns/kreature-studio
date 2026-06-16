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
const SECURITY_FEATURES = [
  {
    title: "SOC 2 Type II",
    description:
      "Kreature undergoes annual SOC 2 Type II audits conducted by independent third-party assessors. This certification validates that our security controls — spanning data protection, availability, and confidentiality — are designed and operating effectively over time.",
    icon: "🔒",
  },
  {
    title: "Encryption at rest and in transit",
    description:
      "All customer data is encrypted using AES-256 at rest. Data in transit is protected with TLS 1.3 across all endpoints. We enforce HTTPS for all connections and use HSTS to prevent downgrade attacks. Encryption keys are managed through a hardware security module (HSM).",
    icon: "🔐",
  },
  {
    title: "Single Sign-On (SSO)",
    description:
      "Enterprise customers can integrate Kreature with their identity provider via SAML 2.0 and OIDC. SSO centralizes access management, enforces password policies, and simplifies user provisioning and deprovisioning across your organization.",
    icon: "👤",
  },
  {
    title: "Audit logs",
    description:
      "Every action in the Kreature platform — from content edits to permission changes — is logged with an immutable, tamper-proof audit trail. Administrators can search, filter, and export logs for compliance reporting and security investigations.",
    icon: "📋",
  },
  {
    title: "Role-based access control",
    description:
      "Granular permissions let you define exactly who can view, edit, publish, or administer every resource. Workspaces, teams, and custom roles ensure the principle of least privilege is enforced across your entire organization.",
    icon: "🛡",
  },
  {
    title: "DDoS protection & WAF",
    description:
      "Our infrastructure includes distributed denial-of-service (DDoS) protection and a web application firewall (WAF) that monitors and filters malicious traffic. Rate limiting, IP reputation filtering, and bot management keep your sites available and secure.",
    icon: "🌐",
  },
];

const PRIVACY_MEASURES = [
  {
    title: "GDPR Compliance",
    description:
      "Kreature complies with the EU General Data Protection Regulation. We provide Data Processing Agreements (DPAs), support data subject access requests (DSARs), and maintain records of processing activities. EU customer data is hosted in European data centers.",
  },
  {
    title: "CCPA Compliance",
    description:
      "We meet California Consumer Privacy Act requirements, including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell customer data.",
  },
  {
    title: "Data residency",
    description:
      "Choose where your data is stored. Kreature offers data residency options in the United States, European Union, United Kingdom, Australia, and Canada. Each region operates independently with no cross-region data movement without explicit authorization.",
  },
  {
    title: "Data Processing Agreement",
    description:
      "All customers receive a comprehensive DPA that defines our role as a data processor, outlines sub-processors, and details our security measures. Enterprise customers can negotiate custom DPAs to meet specific regulatory or contractual requirements.",
  },
];

const RELIABILITY_METRICS = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 150ms", label: "Global average latency" },
  { value: "24/7/365", label: "Monitoring & support" },
  { value: "Multi-region", label: "Automatic failover" },
];

const CERTIFICATIONS = [
  { name: "SOC 2 Type II", status: "Active", description: "Annual audit covering security, availability, and confidentiality trust service criteria." },
  { name: "ISO 27001", status: "In progress", description: "International standard for information security management systems. Certification expected Q4 2026." },
  { name: "GDPR", status: "Compliant", description: "Full compliance with EU General Data Protection Regulation requirements for data protection and privacy." },
  { name: "CCPA", status: "Compliant", description: "Full compliance with California Consumer Privacy Act, including consumer rights and data handling obligations." },
  { name: "PCI DSS", status: "Compliant", description: "Payment Card Industry Data Security Standard compliance for secure handling of payment information via Stripe." },
  { name: "HIPAA", status: "Available", description: "HIPAA-compliant environment available for enterprise healthcare customers with signed BAAs." },
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

export default function TrustPage() {
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
                Trust Center
              </p>
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Trust at Kreature
              </h1>
              <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Security, privacy, and reliability are built into the foundation of everything we do.
                We earn your trust through transparency, independent audits, and enterprise-grade
                infrastructure designed to protect your data and your customers.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════ RELIABILITY QUICK STATS ═══════ */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RELIABILITY_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl p-6 text-center"
                style={{ background: V("color-canvas-soft"), border: `1px solid ${V("color-hairline")}` }}
              >
                <div
                  className="font-semibold leading-none mb-2"
                  style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: V("color-accent-blue") }}
                >
                  {metric.value}
                </div>
                <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="https://status.kreature.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:opacity-70"
              style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-blue") }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: V("color-accent-green") }}
              />
              All systems operational — view status page <Arrow />
            </a>
          </div>
        </Section>

        {/* ═══════ SECURITY ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Security
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Enterprise-grade protection
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Our security program is designed to protect your data at every layer — from infrastructure
              to application to user access. We invest continuously in security controls, testing, and
              independent validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl p-[clamp(1.5rem,3vw,2rem)]"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {feature.title}
                </h3>
                <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ PRIVACY ═══════ */}
        <Section>
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Privacy
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Your data, your control
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              We believe privacy is a fundamental right. Our privacy program ensures you maintain
              ownership and control of your data, with clear policies and tools to manage how
              information is collected, used, and shared.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRIVACY_MEASURES.map((measure) => (
              <div
                key={measure.title}
                className="rounded-xl p-[clamp(1.5rem,3vw,2rem)] flex gap-4"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div className="mt-1 shrink-0" style={{ color: V("color-accent-blue") }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ ...S.h4, color: V("color-ink") }}>
                    {measure.title}
                  </h3>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{measure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ CERTIFICATIONS ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Certifications & attestations
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Independently validated
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              We engage independent auditors and assessors to validate our security and privacy
              controls. Our certifications reflect our commitment to meeting the highest standards
              for protecting customer data.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "0" }}>
              <thead>
                <tr>
                  <th
                    className="text-left py-3 px-5 font-semibold"
                    style={{ ...S.bodySm, color: V("color-mute"), borderBottom: `1px solid ${V("color-hairline")}` }}
                  >
                    Certification
                  </th>
                  <th
                    className="text-left py-3 px-5 font-semibold"
                    style={{ ...S.bodySm, color: V("color-mute"), borderBottom: `1px solid ${V("color-hairline")}` }}
                  >
                    Status
                  </th>
                  <th
                    className="text-left py-3 px-5 font-semibold"
                    style={{ ...S.bodySm, color: V("color-mute"), borderBottom: `1px solid ${V("color-hairline")}` }}
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATIONS.map((cert) => (
                  <tr key={cert.name}>
                    <td
                      className="py-4 px-5 font-semibold"
                      style={{ ...S.bodySm, color: V("color-ink"), borderBottom: `1px solid ${V("color-hairline")}` }}
                    >
                      {cert.name}
                    </td>
                    <td
                      className="py-4 px-5"
                      style={{ borderBottom: `1px solid ${V("color-hairline")}` }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background:
                            cert.status === "Active" || cert.status === "Compliant"
                              ? V("color-accent-green")
                              : cert.status === "In progress"
                              ? V("color-accent-yellow")
                              : V("color-accent-blue"),
                          color:
                            cert.status === "In progress" ? V("color-ink") : "#fff",
                        }}
                      >
                        {cert.status}
                      </span>
                    </td>
                    <td
                      className="py-4 px-5"
                      style={{ ...S.bodySm, color: V("color-body-mid"), borderBottom: `1px solid ${V("color-hairline")}` }}
                    >
                      {cert.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ═══════ REPORTS & RESOURCES ═══════ */}
        <Section>
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Security resources
            </h2>
            <p className="mb-10" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Download our latest security documents, whitepapers, and compliance reports.
              For enterprise customers, SOC 2 reports and penetration test summaries are
              available under NDA through your account manager.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Security whitepaper", desc: "Architecture overview, encryption, and security controls", format: "PDF" },
                { title: "SOC 2 report", desc: "Available to enterprise customers under NDA", format: "NDA" },
                { title: "Penetration test summary", desc: "Latest third-party pentest results", format: "PDF" },
                { title: "Data Processing Agreement", desc: "Standard DPA for all customers", format: "PDF" },
              ].map((doc) => (
                <a
                  key={doc.title}
                  href="#"
                  className="rounded-xl p-6 text-left transition-all hover:shadow-lg group block"
                  style={{
                    background: V("color-canvas-soft"),
                    border: `1px solid ${V("color-hairline")}`,
                  }}
                >
                  <div
                    className="text-xs font-semibold uppercase mb-2 px-2 py-0.5 rounded inline-block"
                    style={{ background: V("color-canvas"), color: V("color-accent-blue") }}
                  >
                    {doc.format}
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:underline" style={{ ...S.h4, color: V("color-ink") }}>
                    {doc.title}
                  </h4>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{doc.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════ CONTACT ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)]"
          style={{ background: V("color-ink") }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10 text-center">
            <div className="max-w-[700px] mx-auto">
              <h2
                className="font-semibold leading-[1.04] mb-6"
                style={{ ...S.h2, color: V("color-canvas") }}
              >
                Have a security concern?
              </h2>
              <p className="mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                If you believe you&apos;ve discovered a security vulnerability in Kreature, please
                report it through our responsible disclosure program. Our security team responds
                to confirmed reports within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:security@kreature.com"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
                >
                  Report a vulnerability <Arrow />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center transition-colors"
                  style={{
                    ...S.btn,
                    background: "transparent",
                    color: V("color-canvas"),
                    border: `1px solid rgba(255,255,255,0.2)`,
                  }}
                >
                  Contact security team
                </a>
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
