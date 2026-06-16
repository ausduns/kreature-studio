"use client";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Data ─── */
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
              The platform for building powerful websites. Terms that protect
              you and us.
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
export default function TermsPage() {
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
              Terms of Service
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
            {TERMS_SECTIONS.map((section) => (
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

      {/* Terms Content */}
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
          {TERMS_SECTIONS.map((section) => (
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
            Still have questions?
          </h2>
          <p
            className="mb-8"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: V("color-body-mid"),
            }}
          >
            If anything in these Terms is unclear or you&apos;d like to discuss
            a custom agreement, our legal team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@kreature.com"
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
              Contact legal <Arrow />
            </a>
            <a
              href="/privacy"
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
              Read privacy policy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
