"use client";

/* ─── Design token helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Styles ─── */
const S = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodyLg: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  eyebrow: { fontSize: "15px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
  btnSm: { fontSize: "14px", fontWeight: 500, padding: "12px 20px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── Shared components ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-heading font-[800] text-xl tracking-tight ${className}`} style={{ color: V("color-ink") }}>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </span>
  );
}

function Section({
  bg,
  children,
  className,
}: {
  bg?: "soft" | "dark" | "blue";
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
              : bg === "blue"
                ? V("color-accent-blue")
                : V("color-canvas"),
      }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── Icons (SVG placeholders matching source) ─── */
function Icon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    SiteLove: "♥",
    ChartLineIncrease: "↗",
    ImageDecrease: "⊟",
    Encryption: "🔒",
    SecurityCertified: "🛡",
    Sync: "↻",
    SiteSSO: "🔑",
    WebMonitor: "◉",
    CertifiedStamp: "✓",
    CloudBackup: "☁",
    PublishMarketing: "◇",
    BranchMerge: "⑂",
    Localization: "🌐",
    SiteControls: "⚙",
  };
  return <span className="text-4xl leading-none">{icons[name] || "●"}</span>;
}

/* ─── SCALE SECURELY FEATURES ─── */
const SCALE_FEATURES = [
  {
    icon: "SiteLove",
    title: "Zero maintenance",
    desc: "No updates to run, packages to install, or capacity planning. Just publish your site and let us take care of the rest.",
  },
  {
    icon: "ChartLineIncrease",
    title: "Traffic-surge ready",
    desc: "Webflow is equipped to handle high traffic volumes and can scale alongside growing site traffic.",
  },
  {
    icon: "ImageDecrease",
    title: "Image optimization and compression",
    desc: "Responsive images come with every plan, and we offer easy conversion to WebP and AVIF formats for even more streamlined performance.",
  },
  {
    icon: "Encryption",
    title: "SSL/TLS comes free",
    desc: "Every Site plan automatically includes SSL and TLS. This means improved SEO for your site and no more security warnings for your customers.",
  },
  {
    icon: "SecurityCertified",
    title: "Global DDoS & Bot protection comes free",
    desc: "Powered by our global CDN provider, our hosting network offers built-in protection from Distributed Denial-of-Service (DDoS) attacks and uses advanced Bot protection to keep your site safe.",
  },
  {
    icon: "Sync",
    title: "Automatic form spam filtering comes free",
    desc: "No more manual spam cleanup — Webflow's automated system filters form responses for you.",
  },
  {
    icon: "SiteSSO",
    title: "SSO included for Enterprise",
    desc: "Webflow Enterprise customers enjoy secure and centralized access management using Single Sign-On (SSO), ensuring compliance with security policies.",
  },
  {
    icon: "WebMonitor",
    title: "Vulnerability scanning",
    desc: "We continuously monitor for new security vulnerabilities and deploy updates automatically to stay ahead of threats.",
  },
  {
    icon: "CertifiedStamp",
    title: "Security compliant",
    desc: "We take security seriously and map our security program to industry standards. Webflow is also SOC 2 Type II, CCPA, and GDPR compliant — to name a few.",
  },
];

/* ─── SITE MANAGEMENT FEATURES ─── */
const MANAGE_FEATURES = [
  {
    icon: "CloudBackup",
    title: "Backups and versioning",
    desc: "Preview and restore your site from ongoing, automatic backups — or create save points to mark progress and track changes.",
  },
  {
    icon: "PublishMarketing",
    title: "Staging domains",
    desc: "Stage your site for testing and approval before hitting publish — and customize them (or make them private) with Webflow Enterprise.",
  },
  {
    icon: "SecurityCertified",
    title: "Password protection",
    desc: "Password protect individual pages — or your entire website — to protect in-progress work or restrict access.",
  },
  {
    icon: "BranchMerge",
    title: "Branching",
    desc: "Every Site plan automatically includes SSL and TLS. This means improved SEO for your site and no more security warnings for your customers.",
  },
  {
    icon: "Localization",
    title: "Localization",
    desc: "Build, customize, and deliver fully localized sites within Webflow — and maintain domain authority with hosted subdirectories (like .com/es/).",
  },
  {
    icon: "SiteControls",
    title: "Custom Security Headers",
    desc: "Protect your site visitors from man-in-the-middle (MitM) attacks when you host with Webflow Enterprise.",
  },
];

/* ─── FAQ ─── */
const FAQS = [
  {
    q: "What's the difference between Webflow Hosting and Webflow Cloud?",
    a: "Webflow's core hosting powers static and CMS-driven websites with enterprise-grade speed, security, and reliability. Webflow Cloud extends that foundation to support dynamic, server-rendered web apps, giving developers full control over backend logic, API routes, and deployment workflows, on the same domain.",
  },
  {
    q: "Can Webflow host web apps as well as websites?",
    a: "Yes. Webflow Cloud lets developers deploy full-stack web apps and dynamic experiences alongside websites on Webflow's infrastructure, on the same custom domain. This means teams can build everything from marketing pages to product dashboards in one place, without juggling multiple hosting providers or environments. Developers can use frameworks like Next.js, Astro, and more in the future. Webflow Cloud also supports server-side rendering, API routes, and environment variables, making it possible to build interactive, data-driven applications with the performance and scalability of Webflow's global infrastructure.",
  },
  {
    q: "Can I connect my own custom domain to Webflow hosting?",
    a: "Yes, you can easily connect any custom domain to your Webflow-hosted site by updating your DNS records to point to Webflow's servers. You can purchase a domain directly within Webflow or use one you already own from any domain registrar. Once connected, your custom domain benefits from all of Webflow's hosting features, including SSL certificates, global CDN delivery, and automatic backups. You maintain full control over your domain settings and the ability to transfer hosting between sites in your workspace without downtime.",
  },
  {
    q: "How does Webflow hosting handle security and SSL certificates?",
    a: "Every Webflow Site plan includes free SSL/TLS certificates that automatically renew, providing end-to-end encryption between your site and visitors without any setup required. Webflow hosting also includes automatic vulnerability scanning, DDoS and bot protection powered by Cloudflare, form spam filtering, and compliance with SOC 2 Type II, CCPA, and GDPR standards. For Enterprise customers requiring additional control, custom SSL certificates can be uploaded, and advanced security features like custom security headers protect against man-in-the-middle attacks.",
  },
  {
    q: "Can I use Webflow to host high-traffic or enterprise websites?",
    a: "Webflow's enterprise-grade hosting infrastructure processes tens of billions of page views monthly and is built to scale automatically with your traffic needs. Enterprise customers benefit from a 99.99% uptime SLA, custom security headers, SSO integration, and the ability to upload custom SSL certificates. Companies like Monday.com, IDEO, and The New York Times trust Webflow to handle their high-traffic demands, with features like automatic image optimization, HTTP/2 and HTTP/3 support, and global CDN distribution that ensure fast load times regardless of visitor volume.",
  },
  {
    q: "How does Webflow compare to other hosting providers?",
    a: "Webflow combines the power of AWS infrastructure with Cloudflare's global CDN to deliver 99.99% uptime and reach 95% of the world in less than 50 milliseconds. Unlike traditional hosting providers where you have to manage updates, security patches, and server configurations, Webflow provides a zero-maintenance solution with automatic backups, built-in DDoS protection, and traffic-surge readiness. This managed approach means you can focus on building and updating your site while we handle the technical complexities of keeping it fast, secure, and available worldwide.",
  },
  {
    q: "Is hosting included with Webflow?",
    a: "Yes, hosting is included with all paid Webflow Site plans, providing a completely managed solution powered by AWS and Cloudflare. Site plans include enterprise-grade hosting that handles millions of page views daily with less than 100ms response time, automatic SSL certificates, global CDN delivery, and continuous security monitoring — all without needing to manage servers or technical infrastructure yourself. Webflow also offers built-in staging, rollback, and environment support, so you can test changes in isolated branches, preview them safely, and revert instantly if needed.",
  },
];

/* ─── CUSTOMER STORIES ─── */
const STORIES = [
  { metric: "10x", label: "In cost savings annually", logo: "Verifone" },
  { metric: "67%", label: "decrease in dev ticketing", logo: "Dropbox" },
  { metric: "$6M", label: "in cost savings annually", logo: "Orangetheory Fitness" },
  { metric: "56%", label: "increase in form fills", logo: "Walker & Dunlop" },
  { metric: "1,170%", label: "increase in traffic YoY", logo: "DocuSign" },
  { metric: "$200M", label: "in new pipeline generated post-site launch", logo: "ABM" },
  { metric: "+20%", label: "increase in site-wide conversion", logo: "Lattice" },
];

/* ─── PAGE ─── */
export default function HostingFeaturePage() {
  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-ink") }}
        >
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[800px]">
              {/* H1 — no eyebrow on source */}
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                Secure hosting without the hassles
              </h1>

              <p className="max-w-[650px] mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Enjoy reliable, scalable, fast, and secure hosting for your business — managed for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
                >
                  Get started — it&apos;s free
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ CUSTOMER LOGOS BAR ═══════ */}
        <section
          className="px-5 sm:px-8 py-10"
          style={{ borderBottom: `1px solid ${V("color-hairline")}`, background: V("color-canvas-soft") }}
        >
          <div className="max-w-[1440px] mx-auto">
            <p className="text-center mb-8" style={{ ...S.bodySm, color: V("color-mute"), textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
              Powering hosting for millions of websites, including:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
              {["Ideo", "Monday.com", "BBDO", "The New York Times", "Ted", "DocuSign"].map((name) => (
                <div key={name} className="text-lg font-semibold tracking-tight" style={{ color: V("color-mute-soft") }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SCALE SECURELY ═══════ */}
        <Section>
          <div className="mb-14 max-w-[750px]">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Scale securely
            </h2>
            <p style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Webflow&apos;s enterprise-grade hosting securely processes tens of billions of page views a month.
              Reach 95% of the world in less than 50 milliseconds with Webflow hosting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCALE_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)]"
                style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
              >
                <div className="mb-5" style={{ color: V("color-accent-blue") }}>
                  <Icon name={feat.icon} />
                </div>
                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {feat.title}
                </h3>
                <p style={{ ...S.body, color: V("color-body-mid") }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ SEAMLESS SITE MANAGEMENT ═══════ */}
        <Section bg="soft">
          <div className="mb-14 max-w-[750px]">
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Seamless site management
            </h2>
            <p style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Webflow hosting is packed with features that make running your site easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANAGE_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)]"
                style={{ borderRadius: "8px", border: `1px solid ${V("color-hairline")}`, background: V("color-canvas") }}
              >
                <div className="mb-5" style={{ color: V("color-accent-blue") }}>
                  <Icon name={feat.icon} />
                </div>
                <h3 className="font-semibold mb-3" style={{ ...S.h4, color: V("color-ink") }}>
                  {feat.title}
                </h3>
                <p style={{ ...S.body, color: V("color-body-mid") }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ FAQ ═══════ */}
        <Section>
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-semibold leading-[1.04] mb-12" style={{ ...S.h2, color: V("color-ink") }}>
              Frequently asked questions
            </h2>
            <div className="space-y-1">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group py-6 cursor-pointer"
                  style={{ borderBottom: `1px solid ${V("color-hairline")}` }}
                >
                  <summary className="flex items-start justify-between gap-4 list-none">
                    <h3 className="font-semibold flex-1" style={{ ...S.h4, color: V("color-ink") }}>
                      {faq.q}
                    </h3>
                    <span
                      className="text-2xl leading-none mt-0.5 transition-transform group-open:rotate-45 shrink-0"
                      style={{ color: V("color-mute") }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4" style={{ ...S.body, color: V("color-body-mid") }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════ CUSTOMER STORIES ═══════ */}
        <Section bg="soft">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STORIES.slice(0, 4).map((story) => (
              <div
                key={story.logo}
                className="rounded-lg p-6 flex flex-col"
                style={{ borderRadius: "8px", background: V("color-canvas"), border: `1px solid ${V("color-hairline")}` }}
              >
                <div className="text-xs uppercase tracking-wider mb-3" style={{ color: V("color-mute") }}>
                  {story.logo}
                </div>
                <div className="text-4xl font-bold mb-2 leading-none" style={{ color: V("color-ink") }}>
                  {story.metric}
                </div>
                <p className="mb-4" style={{ ...S.bodySm, color: V("color-body-mid") }}>{story.label}</p>
                <a
                  href="/customers"
                  className="inline-flex items-center mt-auto transition-colors"
                  style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-blue") }}
                >
                  Read story <Arrow />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ GET STARTED CTA ═══════ */}
        <Section bg="dark">
          <div className="text-center max-w-[700px] mx-auto">
            <h2 className="font-semibold leading-[1.04] mb-6" style={{ ...S.h2, color: V("color-canvas") }}>
              Get started for free
            </h2>
            <p className="mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
              Try Webflow for as long as you like with our free Starter plan. Purchase a paid Site plan to
              publish, host, and unlock additional features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center transition-colors"
                style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
              >
                Get started — it&apos;s free
              </a>
              <a
                href="/product-tour"
                className="inline-flex items-center transition-colors"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: V("color-canvas"),
                  border: `1px solid rgba(255,255,255,0.2)`,
                }}
              >
                Watch demo
              </a>
            </div>
          </div>
        </Section>

        {/* ═══════ FOOTER ═══════ */}
        <FooterSection />
      </main>
    </div>
  );
}

/* ─── FOOTER ─── */
function FooterSection() {
  const columns: Record<string, string[]> = {
    Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility", "AI"],
    Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
    Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way"],
    Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
    Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
    Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
    "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
  };

  return (
    <footer
      className="border-t px-5 sm:px-8 py-16"
      style={{ borderColor: V("color-hairline"), background: V("color-canvas") }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 mb-16">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="logo-dark h-[32px] w-auto" />
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="logo-light h-[32px] w-auto" />
              <Wordmark />
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: V("color-mute") }}>
              Reliable, scalable, fast, and secure hosting — managed for you.
            </p>
          </div>
          {Object.entries(columns).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: V("color-mute-soft") }}>
                {heading}
              </div>
              <ul className="space-y-2.5">
                {links.map((label) => (
                  <li key={label}>
                    <a href="#" className="text-sm transition-colors hover:underline" style={{ color: V("color-body-mid") }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: V("color-hairline") }}>
          <p style={{ ...S.caption, color: V("color-mute") }}>
            &copy; 2026 Kreature, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map((s) => (
              <a key={s} href="#" className="text-sm transition-colors" style={{ color: V("color-mute") }}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
