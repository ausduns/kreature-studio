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

function KreatureWordmark() {
  return (
    <span className="font-semibold text-xl tracking-tight" style={{ color: V("color-ink") }}>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
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

export default function PrivacyPage() {
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
                Legal
              </p>
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Privacy Policy
              </h1>
              <p style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Last updated: June 1, 2026
              </p>
            </div>
          </div>
        </section>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <Section>
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-semibold mb-6" style={{ ...S.h3, color: V("color-ink") }}>
              Contents
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {PRIVACY_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 rounded-lg transition-colors hover:bg-opacity-10"
                  style={{ ...S.bodySm, color: V("color-accent-blue") }}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════ PRIVACY CONTENT ═══════ */}
        <Section bg="soft">
          <div className="max-w-[800px] mx-auto space-y-16">
            {PRIVACY_SECTIONS.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="font-semibold mb-6" style={{ ...S.h2, color: V("color-ink") }}>
                  {section.title}
                </h2>
                {section.content.split("\n\n").filter(Boolean).map((paragraph, i) => {
                  if (paragraph.match(/^\([a-z]\)/m)) {
                    const items = paragraph.split("\n").filter(Boolean);
                    return (
                      <div key={i} className="space-y-2 mb-4">
                        {items.map((item, j) => (
                          <p key={j} className="pl-4" style={{ ...S.body, color: V("color-body"), lineHeight: "28px" }}>
                            {item}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="mb-4" style={{ ...S.body, color: V("color-body"), lineHeight: "28px" }}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ CONTACT ═══════ */}
        <Section>
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Questions about your privacy?
            </h2>
            <p className="mb-8" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              We take your privacy seriously. If you have questions about this policy, want to
              exercise your data rights, or have a privacy concern, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@kreature.com"
                className="inline-flex items-center transition-colors"
                style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
              >
                Contact privacy team <Arrow />
              </a>
              <a
                href="/terms"
                className="inline-flex items-center transition-colors"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                Read terms of service
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* ═══════ SIMPLE FOOTER ═══════ */}
      <footer
        className="py-12 px-5 sm:px-8"
        style={{ borderTop: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <KreatureWordmark />
          </div>
          <p style={{ fontSize: "12px", color: V("color-mute") }}>
            &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
          </p>
          <div className="flex items-center gap-5" style={{ fontSize: "12px", color: V("color-mute") }}>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
            <a href="/accessibility" className="hover:underline">
              Accessibility
            </a>
            <a href="/trust" className="hover:underline">
              Trust Center
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
