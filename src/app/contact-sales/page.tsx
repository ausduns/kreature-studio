"use client";

import { useState } from "react";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── CDN ─── */
const ICONS_CDN = "https://dhygzobemt712.cloudfront.net/Icons/Light/64px";
const LOGOS_CDN = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";
const WF_CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";

/* ─── TYPOGRAPHY ─── */
const S = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  bodyLg: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── DATA ─── */

const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Germany", "France",
  "Australia", "Brazil", "India", "Japan", "Singapore",
  "Netherlands", "Sweden", "Denmark", "Norway", "Finland",
  "Spain", "Italy", "Mexico", "South Korea", "United Arab Emirates",
  "Other",
];

const TRUST_LOGOS = [
  { name: "Verifone", src: `${LOGOS_CDN}/verifone.svg` },
  { name: "NCR", src: `${LOGOS_CDN}/ncr.svg` },
  { name: "monday.com", src: `${LOGOS_CDN}/monday.svg` },
  { name: "Spotify", src: `${LOGOS_CDN}/spotify.svg` },
  { name: "TED", src: `${LOGOS_CDN}/ted.svg` },
  { name: "Dropbox", src: `${LOGOS_CDN}/dropbox.svg` },
  { name: "Greenhouse", src: `${LOGOS_CDN}/greenhouse.svg` },
  { name: "Clear", src: `${LOGOS_CDN}/clear.svg` },
  { name: "OrangeTheory", src: `${LOGOS_CDN}/orangetheory.svg` },
  { name: "NYT", src: `${LOGOS_CDN}/the-new-york-times.svg` },
  { name: "Reddit", src: `${LOGOS_CDN}/reddit.svg` },
  { name: "Checkout.com", src: `${LOGOS_CDN}/checkout.svg` },
  { name: "Walker & Dunlop", src: `${LOGOS_CDN}/walker-dunlop.svg` },
  { name: "Docusign", src: `${LOGOS_CDN}/docusign.svg` },
  { name: "ABM", src: `${LOGOS_CDN}/abm.svg` },
];

const G2_BADGES = [
  { alt: "G2 Enterprise Leader Winter 2026", src: `${WF_CDN}/695d1a83f727ce7de53a4c8c_Enterprise%20Leader%20-%20Winter%202026%20G2.svg` },
  { alt: "G2 Overall Leader Winter 2026", src: `${WF_CDN}/695d1aeb3253f22d5bbe6aab_g2-badge_overall-leader_winter-26.svg` },
  { alt: "G2 Regional Leader for EMEA Winter 2026", src: `${WF_CDN}/695d1aeb1bdcf54c2ba09181_g2-badge_regional-leader_emea_winter-26.svg` },
];

const WHY_FEATURES = [
  {
    icon: "BreakDownSilos",
    title: "Break down silos between marketing, design, and development",
    desc: "Give your marketing and design team greater control to add, edit, and update content and free your engineering team to focus on bigger challenges.",
  },
  {
    icon: "SecurityCertified",
    title: "Backed by enterprise-grade security",
    desc: "Kreature Enterprise is backed by SOC-2 certification and comes with advanced security features like single sign on, custom security headers, custom SSL certificates, and much more.",
  },
  {
    icon: "HeartHandshake",
    title: "We'll partner with you to ensure success",
    desc: "We're here to help you succeed with expert-led training through Kreature University Pro, a dedicated team for technical and strategic consulting, and tailored support available 24/7.",
  },
  {
    icon: "Code",
    title: "Harness the power of code — without writing it",
    desc: "Kreature's visual development tool means you can build any layout for any page, visually, without having to write a single line of code.",
  },
  {
    icon: "CloudUpload",
    title: "Publish directly to world-class hosting",
    desc: "Push your website changes live in a single click to a scalable, secure, and globally-distributed hosting network.",
  },
  {
    icon: "Performance",
    title: "World-class performance",
    desc: "Fast page loads powered by Fastly CDN and enterprise-level uptime SLAs make for seamless hosting.",
  },
];

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Submit your details",
    desc: "Tell us about your team, your goals, and what you're looking for in a web platform. The more we know, the better we can tailor the conversation.",
  },
  {
    step: "02",
    title: "We'll reach out",
    desc: "An enterprise specialist will contact you within 1 business day to understand your needs and answer any initial questions you have about Kreature.",
  },
  {
    step: "03",
    title: "Personalized demo",
    desc: "We'll walk you through a custom demo focused on your use case — whether that's scaling content operations, improving site performance, or consolidating your tech stack.",
  },
  {
    step: "04",
    title: "Tailored proposal",
    desc: "You'll receive a proposal with pricing, implementation timeline, and onboarding plan designed specifically for your team's requirements.",
  },
];

const TESTIMONIAL = {
  quote: "Our design and development teams are much more integrated during the build process. Designers have more autonomy, and engineers can focus on the most impactful work — allowing us to deliver new web pages faster.",
  name: "Dan Dawson",
  role: "Sr. Manager of Digital Properties",
  co: "NCR",
  img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68a44d7ba882a0014d47de2d_dan-dawson.webp",
};

/* ─── HELPERS ─── */

function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Kreature() {
  return (
    <>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </>
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
      className={`px-5 sm:px-8 ${className ?? ""}`}
      style={{
        background:
          bg === "soft"
            ? V("color-canvas-soft")
            : bg === "dark"
              ? V("color-ink")
              : V("color-canvas"),
        paddingTop: "clamp(3rem,8vw,9rem)",
        paddingBottom: "clamp(3rem,8vw,9rem)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── FORM COMPONENT ─── */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    ...S.body,
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: `1px solid ${V("color-hairline")}`,
    background: V("color-canvas"),
    color: V("color-ink"),
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    ...S.bodySm,
    fontWeight: 500,
    color: V("color-ink"),
    marginBottom: "6px",
    display: "block",
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg p-[clamp(2rem,3vw,3rem)] text-center"
        style={{
          borderRadius: "8px",
          border: `1px solid ${V("color-hairline")}`,
          background: V("color-canvas-soft"),
        }}
      >
        <div className="text-3xl mb-4">&#10003;</div>
        <h3 className="mb-3" style={{ ...S.h4, color: V("color-ink") }}>
          Thanks for reaching out
        </h3>
        <p style={{ ...S.body, color: V("color-body-mid") }}>
          An enterprise specialist from <Kreature /> will contact you within 1 business day. We look forward to learning about your team and goals.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-[clamp(1.5rem,2.5vw,2.5rem)]"
      style={{
        borderRadius: "8px",
        border: `1px solid ${V("color-hairline")}`,
        background: V("color-canvas"),
      }}
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="first-name" style={labelStyle}>
            First name *
          </label>
          <input
            id="first-name"
            type="text"
            required
            placeholder="Jane"
            style={inputStyle}
            className="focus:border-[var(--color-accent-blue)] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="last-name" style={labelStyle}>
            Last name *
          </label>
          <input
            id="last-name"
            type="text"
            required
            placeholder="Smith"
            style={inputStyle}
            className="focus:border-[var(--color-accent-blue)] transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-5">
        <label htmlFor="work-email" style={labelStyle}>
          Work email *
        </label>
        <input
          id="work-email"
          type="email"
          required
          placeholder="jane@company.com"
          style={inputStyle}
          className="focus:border-[var(--color-accent-blue)] transition-colors"
        />
      </div>

      {/* Company */}
      <div className="mb-5">
        <label htmlFor="company" style={labelStyle}>
          Company *
        </label>
        <input
          id="company"
          type="text"
          required
          placeholder="Acme Inc."
          style={inputStyle}
          className="focus:border-[var(--color-accent-blue)] transition-colors"
        />
      </div>

      {/* Phone */}
      <div className="mb-5">
        <label htmlFor="phone" style={labelStyle}>
          Phone{" "}
          <span style={{ color: V("color-mute"), fontWeight: 400 }}>
            (optional)
          </span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          style={inputStyle}
          className="focus:border-[var(--color-accent-blue)] transition-colors"
        />
      </div>

      {/* Job Title */}
      <div className="mb-5">
        <label htmlFor="job-title" style={labelStyle}>
          Job title *
        </label>
        <input
          id="job-title"
          type="text"
          required
          placeholder="VP of Marketing"
          style={inputStyle}
          className="focus:border-[var(--color-accent-blue)] transition-colors"
        />
      </div>

      {/* Country */}
      <div className="mb-5">
        <label htmlFor="country" style={labelStyle}>
          Country *
        </label>
        <select
          id="country"
          required
          defaultValue=""
          style={{
            ...inputStyle,
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23898989' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
            paddingRight: "40px",
          }}
          className="focus:border-[var(--color-accent-blue)] transition-colors"
        >
          <option value="" disabled>
            Select your country
          </option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" style={labelStyle}>
          Tell us about your project{" "}
          <span style={{ color: V("color-mute"), fontWeight: 400 }}>
            (optional)
          </span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe your team size, goals, timeline, and any specific requirements..."
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: "100px",
            fontFamily: "inherit",
          }}
          className="focus:border-[var(--color-accent-blue)] transition-colors"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full transition-colors inline-flex items-center justify-center rounded-sm font-medium"
        style={{
          ...S.btn,
          background: V("color-accent-blue"),
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Contact Sales
        <Arrow />
      </button>

      <p
        className="mt-4 text-center"
        style={{ ...S.bodySm, color: V("color-mute") }}
      >
        By submitting this form, you agree to our{" "}
        <a
          href="#"
          style={{ color: V("color-ink"), textDecoration: "underline" }}
        >
          Privacy Policy
        </a>{" "}
        and consent to being contacted about Kreature Enterprise.
      </p>
    </form>
  );
}

/* ─── PAGE ─── */

export default function ContactSalesPage() {
  return (
    <div
      className="page-wrapper"
      style={{ background: V("color-canvas"), color: V("color-body") }}
    >
      <main>
        {/* ═══════ HERO + FORM ═══════ */}
        <section
          className="px-5 sm:px-8"
          style={{
            background: V("color-canvas"),
            paddingTop: "clamp(3rem,8vw,8rem)",
            paddingBottom: "clamp(3rem,8vw,6rem)",
          }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-[clamp(2rem,5vw,6rem)] items-start">
              {/* Left: Content */}
              <div>
                <p
                  className="mb-4 uppercase tracking-widest"
                  style={{ ...S.caption, color: V("color-mute") }}
                >
                  Enterprise Sales
                </p>
                <h1
                  className="font-semibold leading-[1.04] mb-6"
                  style={{ ...S.h1, color: V("color-ink") }}
                >
                  Let&apos;s talk
                </h1>
                <p
                  className="mb-8 max-w-[480px]"
                  style={{ ...S.bodyLg, color: V("color-body") }}
                >
                  Tell us about your team and goals. We&apos;ll help you
                  evaluate whether <Kreature /> is the right fit — from security
                  requirements to scaling strategy.
                </p>

                {/* Trust logos */}
                <div className="mb-10">
                  <p
                    className="mb-4 uppercase tracking-wider"
                    style={{ ...S.bodySm, color: V("color-mute") }}
                  >
                    Trusted by enterprise teams worldwide
                  </p>
                  <div className="flex flex-wrap gap-5 items-center opacity-40">
                    {TRUST_LOGOS.slice(0, 6).map((l) => (
                      <img
                        key={l.name}
                        src={l.src}
                        alt={l.name}
                        className="h-5 w-auto"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>

                {/* Contact info card */}
                <div
                  className="rounded-lg p-6 max-w-[400px]"
                  style={{
                    borderRadius: "8px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                  }}
                >
                  <p
                    className="mb-3"
                    style={{
                      ...S.bodySm,
                      fontWeight: 500,
                      color: V("color-ink"),
                    }}
                  >
                    Prefer email?
                  </p>
                  <p style={{ ...S.bodySm, color: V("color-body-mid") }}>
                    Reach our enterprise team directly at{" "}
                    <a
                      href="mailto:enterprise@kreature.com"
                      style={{
                        color: V("color-accent-blue"),
                        textDecoration: "underline",
                      }}
                    >
                      enterprise@kreature.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ LOGO MARQUEE ═══════ */}
        <section
          className="py-12 overflow-hidden border-y"
          style={{
            borderColor: V("color-hairline"),
            background: V("color-canvas"),
          }}
        >
          <div className="flex gap-10 animate-[marquee_40s_linear_infinite] w-max">
            {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
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

        {/* ═══════ CUSTOMERS LOVE US ═══════ */}
        <Section bg="soft">
          <div className="max-w-[800px] mx-auto">
            <h2
              className="text-center mb-4"
              style={{ ...S.h2, color: V("color-ink") }}
            >
              Customers love us
            </h2>
            <p
              className="text-center mb-12 max-w-[550px] mx-auto"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              But don&apos;t just take our word for it — check out our latest G2
              awards.
            </p>

            {/* G2 Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              {G2_BADGES.map((badge) => (
                <img
                  key={badge.alt}
                  src={badge.src}
                  alt={badge.alt}
                  className="h-[clamp(4rem,8vw,7rem)] w-auto"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Testimonial */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src={TESTIMONIAL.img}
                alt={TESTIMONIAL.name}
                className="w-20 h-20 rounded-full object-cover shrink-0"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <blockquote
                  className="mb-6 text-[clamp(1.125rem,1.6vw,1.375rem)] leading-relaxed"
                  style={{ color: V("color-body") }}
                >
                  &ldquo;{TESTIMONIAL.quote}&rdquo;
                </blockquote>
                <div>
                  <div
                    className="font-medium mb-1"
                    style={{ ...S.body, fontWeight: 500, color: V("color-ink") }}
                  >
                    {TESTIMONIAL.name}
                  </div>
                  <div style={{ ...S.bodySm, color: V("color-mute") }}>
                    {TESTIMONIAL.role}, {TESTIMONIAL.co}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ═══════ WHY CHOOSE KREATURE ═══════ */}
        <Section>
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2 style={{ ...S.h2, color: V("color-ink") }} className="mb-4">
              Why choose <Kreature />?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {WHY_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-lg p-[clamp(1.5rem,2.5vw,2.5rem)] flex gap-5 items-start"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                <img
                  src={`${ICONS_CDN}/${f.icon}.svg`}
                  alt=""
                  className="w-10 h-10 shrink-0 mt-0.5"
                  loading="lazy"
                />
                <div>
                  <h3
                    className="mb-2"
                    style={{ ...S.h4, color: V("color-ink") }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ ...S.body, color: V("color-body-mid") }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ WHAT TO EXPECT ═══════ */}
        <Section bg="soft">
          <div className="max-w-[800px] mx-auto">
            <h2
              className="text-center mb-4"
              style={{ ...S.h2, color: V("color-ink") }}
            >
              What happens next?
            </h2>
            <p
              className="text-center mb-16 max-w-[550px] mx-auto"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              After you submit the form, here&apos;s what the process looks like.
            </p>

            <div className="space-y-0">
              {TIMELINE_STEPS.map((item, i) => (
                <div key={item.step} className="flex gap-6 relative">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                      style={{
                        background: V("color-accent-blue"),
                        color: "#fff",
                      }}
                    >
                      {item.step}
                    </div>
                    {i < TIMELINE_STEPS.length - 1 && (
                      <div
                        className="w-px flex-1 min-h-[40px]"
                        style={{ background: V("color-hairline") }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-[clamp(2rem,4vw,3rem)]">
                    <h4
                      className="mb-2"
                      style={{ ...S.h4, color: V("color-ink") }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="max-w-[550px]"
                      style={{ ...S.body, color: V("color-body-mid") }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════ BOTTOM CTA ═══════ */}
        <section
          className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)] text-center"
          style={{ background: V("color-canvas-soft") }}
        >
          <div className="max-w-[650px] mx-auto">
            <h2
              className="font-semibold leading-[1.04] mb-4"
              style={{ ...S.h2, color: V("color-ink") }}
            >
              Ready to see <Kreature /> in action?
            </h2>
            <p
              className="mb-8"
              style={{ ...S.bodyLg, color: V("color-body-mid") }}
            >
              Skip the form and start exploring on your own. Build a site, test
              the CMS, and see why enterprise teams choose Kreature.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/signup"
                className="transition-colors inline-flex items-center rounded-sm"
                style={{
                  ...S.btn,
                  background: V("color-accent-blue"),
                  color: "#fff",
                }}
              >
                Start for free
                <Arrow />
              </a>
              <a
                href="/enterprise"
                className="transition-colors inline-flex items-center rounded-sm"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                }}
              >
                Learn about Enterprise
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
