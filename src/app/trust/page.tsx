"use client";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Data ─── */
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
              Security, privacy, and reliability built into the foundation of
              everything we do.
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
export default function TrustPage() {
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
              Trust Center
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
              Trust at Kreature
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-mute-soft"),
                maxWidth: "650px",
              }}
            >
              Security, privacy, and reliability are built into the foundation
              of everything we do. We earn your trust through transparency,
              independent audits, and enterprise-grade infrastructure designed to
              protect your data and your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Reliability Quick Stats */}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RELIABILITY_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl p-6 text-center"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="font-heading font-semibold leading-none mb-2"
                  style={{
                    fontSize: "36px",
                    color: V("color-accent-blue"),
                  }}
                >
                  {metric.value}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "22.4px",
                    color: V("color-body-mid"),
                  }}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="https://status.kreature.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:opacity-70"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: V("color-accent-blue"),
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: V("color-accent-green") }}
              />
              All systems operational — view status page <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
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
              Security
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
              Enterprise-grade protection
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                color: V("color-body-mid"),
                maxWidth: "650px",
              }}
            >
              Our security program is designed to protect your data at every
              layer — from infrastructure to application to user access. We
              invest continuously in security controls, testing, and independent
              validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl p-8"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "22.4px",
                    color: V("color-body-mid"),
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Measures */}
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
              Privacy
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
              Your data, your control
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                color: V("color-body-mid"),
                maxWidth: "650px",
              }}
            >
              We believe privacy is a fundamental right. Our privacy program
              ensures you maintain ownership and control of your data, with clear
              policies and tools to manage how information is collected, used,
              and shared.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRIVACY_MEASURES.map((measure) => (
              <div
                key={measure.title}
                className="rounded-xl p-8 flex gap-4"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="mt-1 shrink-0"
                  style={{ color: V("color-accent-blue") }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-heading mb-2"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      color: V("color-ink"),
                    }}
                  >
                    {measure.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "22.4px",
                      color: V("color-body-mid"),
                    }}
                  >
                    {measure.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
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
              Certifications & attestations
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
              Independently validated
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                color: V("color-body-mid"),
                maxWidth: "650px",
              }}
            >
              We engage independent auditors and assessors to validate our
              security and privacy controls. Our certifications reflect our
              commitment to meeting the highest standards for protecting customer
              data.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table
              className="w-full"
              style={{ borderCollapse: "separate", borderSpacing: "0" }}
            >
              <thead>
                <tr>
                  <th
                    className="text-left py-3 px-5"
                    style={{
                      fontSize: "14px",
                      fontWeight: 550,
                      color: V("color-mute"),
                      borderBottom: `1px solid ${V("color-hairline")}`,
                    }}
                  >
                    Certification
                  </th>
                  <th
                    className="text-left py-3 px-5"
                    style={{
                      fontSize: "14px",
                      fontWeight: 550,
                      color: V("color-mute"),
                      borderBottom: `1px solid ${V("color-hairline")}`,
                    }}
                  >
                    Status
                  </th>
                  <th
                    className="text-left py-3 px-5"
                    style={{
                      fontSize: "14px",
                      fontWeight: 550,
                      color: V("color-mute"),
                      borderBottom: `1px solid ${V("color-hairline")}`,
                    }}
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATIONS.map((cert) => (
                  <tr key={cert.name}>
                    <td
                      className="py-4 px-5"
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: V("color-ink"),
                        borderBottom: `1px solid ${V("color-hairline")}`,
                      }}
                    >
                      {cert.name}
                    </td>
                    <td
                      className="py-4 px-5"
                      style={{
                        borderBottom: `1px solid ${V("color-hairline")}`,
                      }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background:
                            cert.status === "Active" ||
                            cert.status === "Compliant"
                              ? V("color-accent-green")
                              : cert.status === "In progress"
                                ? V("color-accent-yellow")
                                : V("color-accent-blue"),
                          color:
                            cert.status === "In progress"
                              ? V("color-ink")
                              : "#fff",
                        }}
                      >
                        {cert.status}
                      </span>
                    </td>
                    <td
                      className="py-4 px-5"
                      style={{
                        fontSize: "14px",
                        lineHeight: "22.4px",
                        color: V("color-body-mid"),
                        borderBottom: `1px solid ${V("color-hairline")}`,
                      }}
                    >
                      {cert.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reports & Resources */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "800px" }}
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
            Security resources
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: V("color-body-mid"),
            }}
          >
            Download our latest security documents, whitepapers, and compliance
            reports. For enterprise customers, SOC 2 reports and penetration test
            summaries are available under NDA through your account manager.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Security whitepaper",
                desc: "Architecture overview, encryption, and security controls",
                format: "PDF",
              },
              {
                title: "SOC 2 report",
                desc: "Available to enterprise customers under NDA",
                format: "NDA",
              },
              {
                title: "Penetration test summary",
                desc: "Latest third-party pentest results",
                format: "PDF",
              },
              {
                title: "Data Processing Agreement",
                desc: "Standard DPA for all customers",
                format: "PDF",
              },
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
                  style={{
                    background: V("color-canvas"),
                    color: V("color-accent-blue"),
                  }}
                >
                  {doc.format}
                </div>
                <h4
                  className="font-heading mb-2 group-hover:underline"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {doc.title}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "22.4px",
                    color: V("color-body-mid"),
                  }}
                >
                  {doc.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-ink"),
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-25"
          style={{
            background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "700px" }}
        >
          <h2
            className="font-heading tracking-tight mb-6"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "52px",
              color: V("color-canvas"),
            }}
          >
            Have a security concern?
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: V("color-mute-soft"),
            }}
          >
            If you believe you&apos;ve discovered a security vulnerability in
            Kreature, please report it through our responsible disclosure
            program. Our security team responds to confirmed reports within 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@kreature.com"
              className="inline-flex items-center transition-colors font-medium"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: V("color-accent-blue"),
                color: "#fff",
              }}
            >
              Report a vulnerability <Arrow />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center transition-colors font-medium"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: "transparent",
                color: V("color-canvas"),
                border: `1px solid rgba(255,255,255,0.2)`,
              }}
            >
              Contact security team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
