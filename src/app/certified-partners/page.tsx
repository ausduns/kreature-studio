"use client";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>
  );
}

/* ─── Data ─── */

const WHY_PARTNER_CARDS = [
  {
    title: "Build and launch faster",
    desc: "Whether you're migrating to Kreature or managing existing sites, certified partners help you launch faster while setting you up with a scalable foundation.",
  },
  {
    title: "Give your team superpowers",
    desc: "Partners help with rebrands, SEO projects, migrations, content management, animations, and more -- extending what your team can accomplish.",
  },
  {
    title: "Fully vetted help",
    desc: "Every certified partner is thoroughly vetted and qualified by the Kreature team so you can find expert help you can trust.",
  },
];

const FIND_PARTNER_CARDS = [
  {
    title: "Get matched",
    desc: "Tell us a bit about your project, and we'll recommend partners who'd be the best fit.",
    cta: "Get matched",
    primary: true,
  },
  {
    title: "Browse directory",
    desc: "Filter by services offered, budget, location, and more to find the perfect partner for your needs.",
    cta: "Browse partners",
    primary: false,
  },
];

const MARKETING_CARDS = [
  {
    title: "Full power of code",
    desc: "Kreature hosting meets HTTP/2 standards out of the box and is compatible with HTTP/3.",
  },
  {
    title: "Creativity unleashed",
    desc: "The visual canvas gives complete creative control over every detail, from structure to pixel-perfect execution.",
  },
  {
    title: "Speed to market",
    desc: "Eliminate the lengthy back and forth associated with traditional dev so you can ship exactly what you want, faster.",
  },
  {
    title: "Improved collaboration",
    desc: "Marketing can easily add and update site content while engineering and design can focus on bigger challenges.",
  },
];

const FEATURED_PARTNERS = [
  "8020",
  "Brix",
  "BX Studio",
  "Flow Ninja",
  "Funsize",
  "Outliant",
  "Ramotion",
  "Refokus",
  "Shadow",
  "Social Driver",
  "Zabal Media",
];

const TRUSTED_BY_LOGOS = [
  "IDEO",
  "Monday.com",
  "BBDO",
  "The New York Times",
  "TED",
  "Philips",
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
      { label: "Kreature Way", href: "/webflow-way" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/certified-partners" },
      { label: "Careers", href: "/company/careers" },
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

const SOCIAL_LINKS = [
  { label: "Webflow Discover", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "#" },
];

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
              Hire certified Kreature designers and agencies. Expert help for
              your next project.
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
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-xs transition-colors"
                style={{ color: V("color-mute") }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function CertifiedPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(68px + 100px)",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[130px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-purple")} 6%, transparent)`,
            }}
          />
        </div>

        <div
          className="relative z-10 mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: V("color-accent-purple") }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span
                  className="text-xs font-semibold"
                  style={{ color: V("color-body-mid") }}
                >
                  Certified Partner
                </span>
              </div>

              <h1
                className="font-heading tracking-tight mb-6"
                style={{
                  fontSize: "56px",
                  fontWeight: 600,
                  lineHeight: "60px",
                  letterSpacing: "-0.8px",
                  color: V("color-ink"),
                }}
              >
                Hire a Certified Kreature Partner
              </h1>
              <p
                className="mb-8"
                style={{
                  fontSize: "20px",
                  lineHeight: 1.5,
                  color: V("color-body"),
                  maxWidth: "520px",
                }}
              >
                Whether you need a freelancer or an agency, Kreature can match
                you with the perfect certified partner -- or browse our directory
                of over 1,200 vetted experts yourself.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#"
                  className="font-medium transition-colors inline-flex items-center"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    padding: "16px 24px",
                    borderRadius: "4px",
                    background: V("color-accent-purple"),
                    color: "#fff",
                  }}
                >
                  Get matched <Arrow />
                </a>
                <a
                  href="/certified-partners/browse"
                  className="font-medium transition-colors inline-flex items-center"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    padding: "16px 24px",
                    borderRadius: "4px",
                    border: `1px solid ${V("color-hairline")}`,
                    color: V("color-ink"),
                  }}
                >
                  Browse partners
                </a>
              </div>
              <p
                className="mt-3 text-sm"
                style={{ color: V("color-mute") }}
              >
                Choose from over 1,200 certified partners
              </p>
            </div>

            {/* Right: illustration placeholder */}
            <div
              className="hidden lg:flex items-center justify-center rounded-xl overflow-hidden"
              style={{
                background: V("color-canvas-soft"),
                border: `1px solid ${V("color-hairline")}`,
                height: "400px",
              }}
            >
              <p style={{ color: V("color-mute") }}>
                Kreature Certified Partner illustration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by bar */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
          background: V("color-canvas"),
          borderTop: `1px solid ${V("color-hairline")}`,
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "1200px" }}
        >
          <p
            className="text-sm mb-5"
            style={{
              color: V("color-mute"),
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {TRUSTED_BY_LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-base font-semibold whitespace-nowrap"
                style={{ color: V("color-mute-soft") }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partner Logo Carousel */}
      <section
        className="overflow-hidden"
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {FEATURED_PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-base font-semibold whitespace-nowrap"
                style={{ color: V("color-body-mid") }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with a Certified Partner */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <h2
            className="font-heading tracking-tight mb-14 text-center"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "52px",
              color: V("color-ink"),
            }}
          >
            Why work with a Certified Kreature Partner?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_PARTNER_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-8"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: V("color-accent-purple") }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: V("color-ink"),
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "25.6px",
                    color: V("color-body"),
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to find the right partner */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <h2
            className="font-heading tracking-tight mb-14 text-center"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "52px",
              color: V("color-ink"),
            }}
          >
            How to find the right partner
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {FIND_PARTNER_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-10 flex flex-col items-center text-center"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: V("color-canvas-soft") }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={V("color-accent-purple")}
                    strokeWidth="2"
                  >
                    {card.primary ? (
                      <>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </>
                    ) : (
                      <>
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                      </>
                    )}
                  </svg>
                </div>
                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    color: V("color-ink"),
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontSize: "16px",
                    lineHeight: "25.6px",
                    color: V("color-body"),
                  }}
                >
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="font-medium transition-colors inline-flex items-center"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    padding: "12px 22px",
                    borderRadius: "4px",
                    background: card.primary
                      ? V("color-accent-purple")
                      : "transparent",
                    color: card.primary ? "#fff" : V("color-accent-purple"),
                    border: card.primary
                      ? "none"
                      : `1px solid ${V("color-accent-purple")}`,
                  }}
                >
                  {card.cta} <Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why marketers choose Kreature */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <h2
            className="font-heading tracking-tight mb-4 text-center"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "52px",
              color: V("color-ink"),
            }}
          >
            Why marketers choose Kreature
          </h2>
          <p
            className="mx-auto mb-14 text-center"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: V("color-body"),
              maxWidth: "600px",
            }}
          >
            Whether you&apos;re working with a Certified Partner or tackling a
            project in-house, Kreature gives you everything you need for
            high-performance web experiences.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MARKETING_CARDS.map((card) => (
              <div key={card.title}>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: V("color-canvas-soft") }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={V("color-accent-purple")}
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "26px",
                    color: V("color-ink"),
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: V("color-body"),
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Case Study */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas-soft"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: image placeholder */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: V("color-canvas"),
                border: `1px solid ${V("color-hairline")}`,
                height: "360px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: V("color-mute") }}>Case study preview</p>
            </div>

            {/* Right: testimonial */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold"
                style={{
                  background: V("color-canvas"),
                  border: `1px solid ${V("color-hairline")}`,
                  color: V("color-body-mid"),
                }}
              >
                Wondersauce x Grubhub
              </div>
              <blockquote
                className="mb-6"
                style={{
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "33px",
                  color: V("color-ink"),
                  fontStyle: "italic",
                }}
              >
                Wondersauce was the ultimate complementary partner. They built a
                web experience that aligned perfectly with our goals and brought
                our vision to life quickly. We&apos;re thrilled with the overall
                execution.
              </blockquote>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: V("color-canvas") }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: V("color-body-mid") }}
                  >
                    CS
                  </span>
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: V("color-ink") }}
                  >
                    Charlie Streit
                  </div>
                  <div className="text-xs" style={{ color: V("color-mute") }}>
                    Senior Associate Producer, Grubhub
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium inline-flex items-center hover:underline"
                style={{ color: V("color-accent-purple") }}
              >
                Read story <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Certified Partner CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          background: V("color-canvas"),
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
            style={{
              background: `color-mix(in srgb, ${V("color-accent-purple")} 10%, transparent)`,
            }}
          />
        </div>
        <div
          className="relative z-10 mx-auto px-5 sm:px-8 text-center"
          style={{ maxWidth: "650px" }}
        >
          <h2
            className="font-heading tracking-tight mb-4"
            style={{
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: "58.24px",
              color: V("color-ink"),
            }}
          >
            Become a Certified Partner
          </h2>
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: V("color-body"),
            }}
          >
            Join a growing network of Certified Kreature Partners. Get matched
            with new clients, connect with the community, access exclusive events
            and training, and get listed in our partner directory.
          </p>
          <a
            href="#"
            className="font-medium transition-colors inline-flex items-center"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              padding: "16px 24px",
              borderRadius: "4px",
              background: V("color-accent-purple"),
              color: "#fff",
            }}
          >
            Apply now <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
