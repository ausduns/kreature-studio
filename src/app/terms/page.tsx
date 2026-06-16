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
const TERMS_SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Kreature platform, website, and services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms. If you do not agree to these Terms, you may not use the Service.

We may update these Terms from time to time. When we make material changes, we will notify you via email or through the Service at least 30 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.`,
  },
  {
    id: "account",
    title: "2. Account Responsibilities",
    content: `To access certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:

(a) Provide accurate, current, and complete registration information.
(b) Maintain and promptly update your account information to keep it accurate and complete.
(c) Use strong, unique passwords and enable multi-factor authentication where available.
(d) Notify us immediately at security@kreature.com of any unauthorized use of your account.
(e) Not share your account credentials with any third party, except as permitted through designated team and collaboration features.

You are responsible for the actions of any users you invite to your workspace. Kreature reserves the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    id: "payment",
    title: "3. Payment Terms",
    content: `Paid plans are billed in advance on a monthly or annual basis, depending on the plan you select. By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis until you cancel.

(a) Pricing: All prices are listed in US dollars and are exclusive of applicable taxes. You are responsible for any sales, use, value-added, or similar taxes that may apply to your use of the Service.

(b) Billing: Subscription fees are non-refundable except as required by applicable law or as explicitly stated in our refund policy. If you cancel a paid plan, you retain access through the end of your current billing period.

(c) Changes: We may change pricing with 30 days notice. If you disagree with a price change, you may cancel your subscription before the change takes effect.

(d) Trials: Free trials convert to paid subscriptions at the end of the trial period unless you cancel before the trial ends. We will notify you before your trial converts.

(e) Late payments: If payment cannot be processed, we may suspend your access to paid features. We will provide notice and a reasonable grace period before any suspension.`,
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: `Your Content: You retain all rights to the content, designs, code, media, and data you create or upload to the Service ("Your Content"). Kreature does not claim ownership of Your Content. By using the Service, you grant Kreature a limited license to host, display, and distribute Your Content solely as necessary to provide the Service to you and your authorized users.

Kreature IP: The Service, including its software, infrastructure, user interface, documentation, branding, and underlying technology, is owned by Kreature and protected by copyright, trademark, patent, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our express written permission.

Templates and Libraries: Templates, components, and code snippets made available through Kreature Libraries or the Kreature Marketplace are licensed under their respective license terms. You are responsible for complying with any applicable license requirements for third-party assets you use.

Feedback: If you provide feedback, suggestions, or ideas about the Service, we may use that feedback without restriction or obligation to you. This does not apply to confidential information you share under a separate agreement.`,
  },
  {
    id: "acceptable-use",
    title: "5. Acceptable Use",
    content: `You agree not to use the Service to:

(a) Violate any applicable law, regulation, or third-party rights.
(b) Distribute malware, viruses, or other harmful code.
(c) Engage in phishing, spam, or other deceptive practices.
(d) Host or distribute content that is illegal, harassing, defamatory, or infringes on intellectual property rights.
(e) Interfere with or disrupt the Service, its infrastructure, or other users' experience.
(f) Attempt to gain unauthorized access to the Service or related systems.
(g) Scrape, crawl, or systematically extract data from the Service without our express permission.
(h) Use the Service to build a competitive product or service.

We reserve the right to investigate and take appropriate action against violations of this policy, including removing content, suspending access, or terminating accounts.`,
  },
  {
    id: "third-party",
    title: "6. Third-Party Services",
    content: `The Service may integrate with or link to third-party websites, applications, and services. These third-party services are governed by their own terms and privacy policies.

Kreature does not endorse, warrant, or assume responsibility for any third-party service. Your use of third-party services integrated with Kreature is at your own risk. We recommend reviewing the terms and policies of any third-party service before connecting it to your account.

We may change the third-party services available through our platform at any time. We will provide reasonable notice before discontinuing a widely-used integration.`,
  },
  {
    id: "limitation",
    title: "7. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, KREATURE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF:

(a) The amount you paid us for the Service in the twelve (12) months preceding the claim, or
(b) One hundred US dollars ($100).

Some jurisdictions do not allow the exclusion or limitation of certain damages, so some or all of these limitations may not apply to you. In such jurisdictions, our liability is limited to the fullest extent permitted by law.

The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
  },
  {
    id: "indemnification",
    title: "8. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Kreature, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from:

(a) Your violation of these Terms.
(b) Your violation of any third-party right, including intellectual property or privacy rights.
(c) Your Content and your use of the Service.
(d) Any claim that Your Content caused damage to a third party.

We will provide you with prompt notice of any such claim and reasonably cooperate with your defense, provided that we retain the right to participate in the defense with counsel of our own choosing at our own expense.`,
  },
  {
    id: "termination",
    title: "9. Termination",
    content: `You may stop using the Service at any time. To cancel a paid subscription, follow the cancellation process in your account settings. Cancellation takes effect at the end of your current billing period.

We may suspend or terminate your access to the Service:

(a) For violation of these Terms, with notice where reasonably possible.
(b) If your payment method fails and you do not resolve it within the grace period.
(c) If required by law or to protect the security or integrity of the Service.
(d) After providing 30 days written notice for any other reason.

Upon termination, your right to access the Service ceases immediately. We will retain Your Content for at least 30 days after termination to allow you to export your data. After that period, we may delete Your Content in accordance with our data retention policies.

Provisions that by their nature should survive termination (including intellectual property rights, limitation of liability, indemnification, and governing law) will survive.`,
  },
  {
    id: "changes",
    title: "10. Changes to the Service",
    content: `We continuously improve the Service, which means we may add, modify, or remove features over time. For material changes that could significantly affect your use of the Service, we will provide at least 30 days advance notice.

If a change materially reduces core functionality, you may cancel your subscription and receive a pro-rated refund for the remainder of your current billing period.

We are not liable for any modification, price change, suspension, or discontinuation of the Service or any feature thereof.`,
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: `These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any dispute arising from these Terms shall be resolved exclusively in the state or federal courts located in Delaware.

For users in the European Union, United Kingdom, or other jurisdictions with mandatory consumer protection laws, you may also be entitled to bring claims in your local courts and under your local laws. Nothing in these Terms limits rights you may have under mandatory local law.

Before initiating any formal legal action, both parties agree to attempt to resolve disputes informally. Please contact us at legal@kreature.com with any concerns — we want to address them directly.`,
  },
  {
    id: "contact",
    title: "12. Contact",
    content: `If you have questions about these Terms of Service, please contact us:

Kreature, Inc.
Attn: Legal Department
Email: legal@kreature.com

For billing questions: billing@kreature.com
For security concerns: security@kreature.com
For general inquiries: hello@kreature.com`,
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

export default function TermsPage() {
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
                Terms of Service
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
              {TERMS_SECTIONS.map((section) => (
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

        {/* ═══════ TERMS CONTENT ═══════ */}
        <Section bg="soft">
          <div className="max-w-[800px] mx-auto space-y-16">
            {TERMS_SECTIONS.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="font-semibold mb-6" style={{ ...S.h2, color: V("color-ink") }}>
                  {section.title}
                </h2>
                {section.content.split("\n\n").filter(Boolean).map((paragraph, i) => {
                  // Handle sub-bullet items like (a), (b)
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
              Still have questions?
            </h2>
            <p className="mb-8" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              If anything in these Terms is unclear or you&apos;d like to discuss a custom agreement,
              our legal team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@kreature.com"
                className="inline-flex items-center transition-colors"
                style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
              >
                Contact legal <Arrow />
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center transition-colors"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                Read privacy policy
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
            <a href="/privacy" className="hover:underline">
              Privacy Policy
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
