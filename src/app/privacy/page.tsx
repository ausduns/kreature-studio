"use client";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Data ─── */
const PRIVACY_SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `We collect information you provide directly, information collected automatically when you use the Service, and information from third-party sources.

Information you provide:

(a) Account information: When you create an account, we collect your name, email address, company name, and password. For paid plans, we collect billing information including billing address and payment method details.

(b) Content you create: We collect and store the content, designs, code, media, and data you create or upload to the Service. This includes website pages, templates, assets, form submissions, and any other content you build or publish through our platform.

(c) Communications: When you contact us for support, send us feedback, or otherwise communicate with us, we collect the content of those communications and any information you choose to share.

Information collected automatically:

(d) Usage data: We collect information about how you interact with the Service, including pages visited, features used, actions taken, and time spent. This helps us understand how the Service is used and improve it.

(e) Device and browser data: We collect information about the device and browser you use to access the Service, including IP address, browser type and version, operating system, device type, and screen resolution.

(f) Cookies and similar technologies: We use cookies, local storage, and similar technologies to authenticate users, remember preferences, analyze usage patterns, and deliver relevant information. You can control cookie settings through your browser preferences.

Information from third parties:

(g) Integrations: If you connect third-party services to your Kreature account, we may receive information from those services as authorized by you. You can manage these connections in your account settings.

(h) Payment processors: Our payment processors (Stripe) provide us with limited payment information to process transactions and manage billing. We do not receive or store full credit card numbers.`,
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

(a) Provide, maintain, and improve the Service: We use your information to operate the Service, authenticate your access, process your requests, and deliver the features and functionality you expect. Usage data helps us identify opportunities to improve performance, usability, and reliability.

(b) Communicate with you: We send service-related communications including account notifications, billing reminders, security alerts, and product updates. We also respond to your support requests and feedback. You cannot opt out of essential service communications, but you can manage marketing email preferences.

(c) Ensure security and prevent abuse: We monitor usage to detect and prevent fraud, unauthorized access, and violations of our Terms of Service. This includes analyzing login patterns, scanning for malicious content, and investigating suspicious activity.

(d) Analyze and improve: We aggregate and analyze usage data to understand how customers use the Service, identify trends, measure feature adoption, and guide product development decisions. We use aggregated, de-identified data for these purposes where possible.

(e) Comply with legal obligations: We may use or disclose information as required by law, regulation, legal process, or governmental request. We will notify you of such requests unless prohibited by law.

(f) With your consent: For any other purpose, we will ask for your explicit consent before using your information.`,
  },
  {
    id: "data-sharing",
    title: "3. How We Share Your Information",
    content: `We do not sell your personal information. We share information only in the following circumstances:

(a) Service providers: We engage third-party companies and individuals to perform services on our behalf, including cloud hosting (AWS), payment processing (Stripe), email delivery, analytics, and customer support. These providers are contractually bound to use your information only as necessary to provide services to us and in compliance with this Privacy Policy.

(b) Your authorized users: Content you create is accessible to other users within your Kreature workspace according to the permissions you configure. You control who has access to your workspace through team management settings.

(c) Published content: If you use Kreature to publish a website, the content you publish becomes publicly accessible. You control what content is published and can unpublish it at any time. Kreature does not publicly disclose that your site was built with our platform unless you choose to display attribution.

(d) Legal requirements: We may disclose information if we believe in good faith that disclosure is necessary to comply with a legal obligation, protect Kreature's rights or property, prevent fraud or abuse, protect the safety of users or the public, or defend against legal claims.

(e) Business transfers: If Kreature is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice on the Service before your information is transferred and becomes subject to a different privacy policy.

(f) With your consent: We may share your information for other purposes with your explicit consent.`,
  },
  {
    id: "cookies",
    title: "4. Cookies and Tracking Technologies",
    content: `We use cookies and similar technologies for the following purposes:

Essential cookies: Required for the Service to function. These cookies enable core functionality like authentication, security, and load balancing. The Service cannot function properly without these cookies.

Preference cookies: Remember your settings and preferences, such as language, theme, and display preferences. These cookies improve your experience by personalizing the Service.

Analytics cookies: Help us understand how you use the Service so we can improve it. We use first-party analytics to track feature usage, performance, and error rates. We do not use third-party advertising cookies in the Service.

You can manage cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies will prevent the Service from functioning properly.

Our published websites: Kreature does not place cookies or tracking technology on websites you publish through our platform, except those you explicitly configure (such as analytics scripts you add). You are responsible for the cookie practices of your published websites.`,
  },
  {
    id: "your-rights",
    title: "5. Your Rights and Choices",
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal information:

Access: You can request a copy of the personal information we hold about you. Much of this information is already available to you through your account settings and the data export tools in the Service.

Correction: You can update your account information at any time through your account settings. If you believe information we hold is inaccurate, you can request a correction.

Deletion: You can request that we delete your personal information. You can also delete your account and data through the Service. We may retain certain information as required by law or for legitimate business purposes as described in our retention policy.

Portability: You can export your content and data from the Service at any time. We provide standard export formats so you can move your data to another platform if you choose.

Opt-out: You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or adjusting your notification preferences. You cannot opt out of essential service communications.

Cookie controls: You can manage cookies through your browser settings as described in Section 4.

California residents: Under the CCPA, California residents have the right to know what personal information is collected, request deletion, and opt out of the sale of personal information. We do not sell personal information. To exercise your CCPA rights, contact us at privacy@kreature.com.

EU/UK residents: Under the GDPR and UK GDPR, you have rights including access, rectification, erasure, restriction, portability, and objection. Our lawful bases for processing include contract performance, legitimate interests, legal obligation, and consent. You have the right to lodge a complaint with your local data protection authority.`,
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content: `We implement technical, administrative, and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.

Security measures include:
- Encryption of data in transit (TLS 1.3) and at rest (AES-256)
- Network security controls including firewalls and intrusion detection
- Access controls with multi-factor authentication and role-based permissions
- Regular security assessments including penetration testing and vulnerability scanning
- Independent third-party audits (SOC 2 Type II)
- Incident response procedures and breach notification protocols

While we strive to protect your information, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security. You are responsible for maintaining the security of your account credentials and for configuring appropriate access controls within your workspace.

If we become aware of a data breach that affects your personal information, we will notify you and applicable regulators as required by law.`,
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content: `We retain your information for as long as your account is active or as needed to provide the Service.

Account data: We retain your account information and content for the duration of your account. If you cancel, we retain your data for 30 days to allow you to export it. After that period, we delete your content from our active systems.

Backups: Data may persist in our encrypted backup systems for up to 90 days after deletion from active systems. Backups are used only for disaster recovery and are not accessible for general use.

Legal holds: We may retain information beyond these periods if required by law, regulation, or legal process, or to enforce our Terms of Service, prevent fraud, or resolve disputes.

Analytics data: Aggregated, de-identified data that cannot reasonably be linked to an individual may be retained indefinitely for analytical purposes.

You can delete individual pieces of content or your entire account through the Service. Account deletion is permanent and cannot be undone.`,
  },
  {
    id: "international-transfers",
    title: "8. International Data Transfers",
    content: `Kreature is a global service. Your information may be transferred to and processed in countries other than where you reside, including the United States, where our primary servers are located.

For transfers outside the European Economic Area, United Kingdom, or Switzerland, we ensure adequate safeguards are in place, including:

(a) Standard Contractual Clauses (SCCs) approved by the European Commission
(b) Data Processing Agreements with all sub-processors and service providers
(c) Technical measures including encryption and access controls

Enterprise customers can choose data residency options to keep data within specific geographic regions. Contact our sales team to learn about data residency for your organization.`,
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: `The Service is not directed to children under the age of 16, and we do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16 without parental consent, we will take steps to delete that information promptly.

If you believe a child under 16 has provided us with personal information, please contact us at privacy@kreature.com.`,
  },
  {
    id: "changes-to-policy",
    title: "10. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, the Service, or applicable law. When we make material changes, we will:

(a) Notify you via email at least 30 days before the changes take effect.
(b) Post a prominent notice on the Service.
(c) Update the "Last updated" date at the top of this page.

Your continued use of the Service after the effective date of the updated Privacy Policy constitutes your acceptance of the changes. If you disagree with the changes, you may cancel your account before the changes take effect.

We recommend reviewing this Privacy Policy periodically to stay informed about our privacy practices.`,
  },
  {
    id: "contact-us",
    title: "11. Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Kreature, Inc.
Attn: Privacy Team
Email: privacy@kreature.com

For data subject access requests under GDPR or CCPA: dsar@kreature.com
For security-related privacy concerns: security@kreature.com

EU Representative:
Kreature EU Services GmbH
Attn: Data Protection
[EU Office Address]
Email: eu-privacy@kreature.com

UK Representative:
Kreature UK Ltd.
Attn: Data Protection
[UK Office Address]
Email: uk-privacy@kreature.com

You have the right to lodge a complaint with your local data protection authority. We encourage you to contact us first so we can address your concerns directly.`,
  },
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
              Your privacy is fundamental to how we build. Clear policies,
              transparent practices, and you in control of your data.
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
export default function PrivacyPage() {
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
              Legal
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
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-mute-soft"),
              }}
            >
              Last updated: June 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "800px" }}
        >
          <h2
            className="font-heading mb-6"
            style={{
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: "36px",
              color: V("color-ink"),
            }}
          >
            Contents
          </h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {PRIVACY_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 rounded-lg transition-colors"
                style={{
                  fontSize: "14px",
                  lineHeight: "22.4px",
                  color: V("color-accent-blue"),
                }}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 space-y-16"
          style={{ maxWidth: "800px" }}
        >
          {PRIVACY_SECTIONS.map((section) => (
            <div key={section.id} id={section.id}>
              <h2
                className="font-heading mb-6"
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  lineHeight: "36px",
                  color: V("color-ink"),
                }}
              >
                {section.title}
              </h2>
              {section.content.split("\n\n").filter(Boolean).map((paragraph, i) => {
                if (paragraph.match(/^\([a-z]\)/m)) {
                  const items = paragraph.split("\n").filter(Boolean);
                  return (
                    <div key={i} className="space-y-2 mb-4">
                      {items.map((item, j) => (
                        <p
                          key={j}
                          className="pl-4"
                          style={{
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: V("color-body"),
                          }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  );
                }
                return (
                  <p
                    key={i}
                    className="mb-4"
                    style={{
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: V("color-body"),
                    }}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "700px" }}
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
            Questions about your privacy?
          </h2>
          <p
            className="mb-8"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: V("color-body-mid"),
            }}
          >
            We take your privacy seriously. If you have questions about this
            policy, want to exercise your data rights, or have a privacy
            concern, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@kreature.com"
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
              Contact privacy team <Arrow />
            </a>
            <a
              href="/terms"
              className="inline-flex items-center transition-colors font-medium"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: "4px",
                background: "transparent",
                color: V("color-ink"),
                border: `1px solid ${V("color-hairline")}`,
              }}
            >
              Read terms of service
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
