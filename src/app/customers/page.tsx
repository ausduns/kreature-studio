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
};

/* ─── DATA ─── */

const CUSTOMER_LOGOS = [
  "Verifone", "NCR", "Monday.com", "Spotify", "TED",
  "Greenhouse", "Clear", "OrangeTheory", "Checkout.com",
  "SoundCloud", "Docusign", "Lattice", "Reddit", "IDEO",
  "Upwork", "Asana", "Stripe", "Shopify", "Airbnb",
  "Atlassian", "Notion", "Figma", "Vercel", "Linear",
];

const FEATURED_STORIES = [
  {
    id: "verifone",
    company: "Verifone",
    logo: "V",
    industry: "Payments",
    headline: "32 global sites launched in 10 days",
    quote: "Kreature enabled our global marketing team to launch localized sites across 32 markets simultaneously. What would have taken six months with a traditional agency took 10 days.",
    author: "Sarah Chen",
    role: "VP of Global Marketing",
    stats: [
      { value: "32", label: "global sites" },
      { value: "10", label: "days to launch" },
      { value: "98%", label: "brand consistency" },
    ],
    accent: "blue",
  },
  {
    id: "lattice",
    company: "Lattice",
    logo: "L",
    industry: "HR Tech",
    headline: "20% increase in site-wide conversion",
    quote: "After migrating to Kreature, our marketing team saw an immediate lift. The visual editor let our designers iterate faster, while the built-in A/B testing helped us optimize every page for conversion.",
    author: "Marcus Rivera",
    role: "Head of Growth",
    stats: [
      { value: "20%", label: "conversion lift" },
      { value: "3x", label: "faster page launches" },
      { value: "45%", label: "reduction in dev dependency" },
    ],
    accent: "green",
  },
  {
    id: "orangetheory",
    company: "OrangeTheory",
    logo: "OT",
    industry: "Fitness",
    headline: "$6M in annual cost savings",
    quote: "Consolidating from three legacy platforms onto Kreature saved us $6M annually in licensing and maintenance costs. Beyond the savings, our team now ships content updates in minutes instead of waiting weeks for engineering cycles.",
    author: "Jennifer Park",
    role: "Chief Digital Officer",
    stats: [
      { value: "$6M", label: "annual savings" },
      { value: "300+", label: "franchise sites managed" },
      { value: "85%", label: "faster content updates" },
    ],
    accent: "orange",
  },
  {
    id: "docusign",
    company: "Docusign",
    logo: "D",
    industry: "SaaS",
    headline: "1,170% increase in organic traffic",
    quote: "Kreature's built-in SEO and AEO capabilities transformed our organic presence. The platform automatically optimizes every page for both traditional search and AI-powered answer engines — we saw a 1,170% traffic increase within six months of migration.",
    author: "David Okonkwo",
    role: "VP of Digital",
    stats: [
      { value: "1,170%", label: "traffic increase" },
      { value: "#1", label: "for 200+ keywords" },
      { value: "60%", label: "more qualified leads" },
    ],
    accent: "blue",
  },
  {
    id: "walker-dunlop",
    company: "Walker & Dunlop",
    logo: "WD",
    industry: "Commercial Real Estate",
    headline: "56% increase in form fills",
    quote: "The combination of Kreature's visual design tools and A/B testing infrastructure let us continuously optimize our lead generation funnels. We saw a 56% lift in form completions within the first quarter — and the improvements keep compounding.",
    author: "Rachel Kim",
    role: "SVP Marketing",
    stats: [
      { value: "56%", label: "more form fills" },
      { value: "4.8★", label: "page experience score" },
      { value: "2.3x", label: "ROI on content investment" },
    ],
    accent: "purple",
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

export default function CustomersPage() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <div className="page-wrapper" style={{ background: V("color-canvas"), color: V("color-body") }}>
      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
          style={{ background: V("color-ink") }}
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(59,137,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Blue glow orbs */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-25"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-15"
            style={{
              background: `radial-gradient(circle, ${V("color-accent-blue")} 0%, transparent 70%)`,
              transform: "translate(-20%, 30%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-[800px]">
              {/* Eyebrow */}
              <p
                className="mb-4"
                style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
              >
                Customer stories
              </p>

              {/* H1 */}
              <h1
                className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6"
                style={{ ...S.h1, color: V("color-canvas") }}
              >
                See what our customers build
              </h1>

              {/* Subtext */}
              <p className="max-w-[650px] mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                From global enterprises to fast-growing startups, teams use Kreature to build, launch,
                and optimize digital experiences that drive real business results.
              </p>

              {/* Hero metrics */}
              <div className="flex flex-wrap gap-8 lg:gap-16">
                {[
                  { value: "300,000+", label: "teams on Kreature" },
                  { value: "5M+", label: "sites launched" },
                  { value: "98%", label: "customer satisfaction" },
                ].map((m) => (
                  <div key={m.label}>
                    <div
                      className="font-semibold leading-none mb-1"
                      style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: V("color-canvas") }}
                    >
                      {m.value}
                    </div>
                    <p style={{ ...S.bodySm, color: V("color-mute-soft") }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ LOGO WALL ═══════ */}
        <Section>
          <div className="text-center mb-10">
            <p style={{ ...S.bodySm, fontWeight: 500, color: V("color-mute"), textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Trusted by industry leaders
            </p>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {CUSTOMER_LOGOS.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center py-4 px-3 rounded-lg transition-colors"
                style={{
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas-soft"),
                }}
              >
                <span
                  className="font-semibold whitespace-nowrap"
                  style={{
                    fontSize: brand.length > 10 ? "11px" : "14px",
                    color: V("color-body-mid"),
                    letterSpacing: "0.02em",
                  }}
                >
                  {brand}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p style={{ ...S.bodySm, color: V("color-mute") }}>
              And 300,000+ more teams worldwide
            </p>
          </div>
        </Section>

        {/* ═══════ FEATURED CUSTOMER STORIES ═══════ */}
        <Section bg="soft">
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              Featured stories
            </p>
            <h2 className="font-semibold leading-[1.04]" style={{ ...S.h2, color: V("color-ink") }}>
              Results that speak for themselves
            </h2>
          </div>

          {/* Story tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {FEATURED_STORIES.map((story, i) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(i)}
                className="transition-all"
                style={{
                  ...S.bodySm,
                  fontWeight: 500,
                  padding: "8px 18px",
                  borderRadius: "100px",
                  border: `1px solid ${i === activeStory ? V(`color-accent-${story.accent}`) : V("color-hairline")}`,
                  background: i === activeStory ? V(`color-accent-${story.accent}`) : "transparent",
                  color: i === activeStory ? "#fff" : V("color-body-mid"),
                }}
              >
                {story.company}
              </button>
            ))}
          </div>

          {/* Active story card */}
          {FEATURED_STORIES.map((story, i) => (
            <div key={story.id} className={i === activeStory ? "block" : "hidden"}>
              <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                {/* Left: Story content */}
                <div className="lg:col-span-3">
                  {/* Industry badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0"
                      style={{
                        background: V(`color-accent-${story.accent}`),
                        color: "#fff",
                      }}
                    >
                      {story.logo}
                    </div>
                    <div>
                      <p className="font-semibold" style={{ ...S.bodySm, color: V("color-ink") }}>
                        {story.company}
                      </p>
                      <p style={{ ...S.caption, color: V("color-mute") }}>{story.industry}</p>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="font-semibold mb-6" style={{ ...S.h3, color: V("color-ink") }}>
                    {story.headline}
                  </h3>

                  {/* Quote */}
                  <blockquote
                    className="relative mb-8 pl-6"
                    style={{ borderLeft: `3px solid ${V(`color-accent-${story.accent}`)}` }}
                  >
                    <p className="mb-6 italic" style={{ ...S.bodyLg, color: V("color-body") }}>
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <footer>
                      <p className="font-semibold" style={{ ...S.bodySm, color: V("color-ink") }}>
                        {story.author}
                      </p>
                      <p style={{ ...S.caption, color: V("color-mute") }}>{story.role}</p>
                    </footer>
                  </blockquote>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center transition-colors hover:gap-2"
                    style={{ ...S.bodySm, fontWeight: 500, color: V(`color-accent-${story.accent}`) }}
                  >
                    Read full story <Arrow />
                  </a>
                </div>

                {/* Right: Stats cards */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  {story.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg p-[clamp(1.5rem,2vw,2rem)]"
                      style={{
                        borderRadius: "8px",
                        background: V("color-canvas"),
                        border: `1px solid ${V("color-hairline")}`,
                      }}
                    >
                      <div
                        className="font-semibold leading-none mb-2"
                        style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", color: V(`color-accent-${story.accent}`) }}
                      >
                        {stat.value}
                      </div>
                      <p style={{ ...S.bodySm, color: V("color-body-mid") }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Section>

        {/* ═══════ MORE STORIES GRID ═══════ */}
        <Section>
          <div className="mb-14">
            <p
              className="mb-4"
              style={{ ...S.eyebrow, color: V("color-accent-blue"), textTransform: "uppercase" as const }}
            >
              More customer stories
            </p>
            <h2 className="font-semibold leading-[1.04] mb-4" style={{ ...S.h2, color: V("color-ink") }}>
              Teams of every size ship with Kreature
            </h2>
            <p className="max-w-[650px]" style={{ ...S.bodyLg, color: V("color-body-mid") }}>
              Explore how customers across industries use Kreature to launch faster, convert better, and scale their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                company: "SoundCloud",
                industry: "Audio Streaming",
                stat: "200+",
                label: "landing pages in 2 weeks",
                quote: "Kreature's visual canvas let our creative team move at the speed of culture.",
              },
              {
                company: "Clear",
                industry: "Travel Tech",
                stat: "40%",
                label: "faster time to market",
                quote: "We went from concept to global rollout in a fraction of the time.",
              },
              {
                company: "IDEO",
                industry: "Design Consultancy",
                stat: "3x",
                label: "more client projects shipped",
                quote: "Kreature became our secret weapon for rapid prototyping at enterprise scale.",
              },
              {
                company: "Upwork",
                industry: "Marketplace",
                stat: "250K+",
                label: "visitors served daily",
                quote: "The platform handles our traffic effortlessly while our team ships faster than ever.",
              },
              {
                company: "Checkout.com",
                industry: "Fintech",
                stat: "99.99%",
                label: "uptime across all sites",
                quote: "Enterprise-grade reliability without the enterprise complexity.",
              },
              {
                company: "Greenhouse",
                industry: "HR Tech",
                stat: "60%",
                label: "reduction in page load time",
                quote: "Performance is built in, not bolted on. Our pages have never been faster.",
              },
            ].map((card) => (
              <div
                key={card.company}
                className="rounded-lg p-[clamp(1.5rem,2.5vw,2rem)] transition-all hover:shadow-lg group"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas"),
                }}
              >
                {/* Company name */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs shrink-0"
                    style={{ background: V("color-canvas-soft"), color: V("color-accent-blue") }}
                  >
                    {card.company.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ ...S.bodySm, color: V("color-ink") }}>
                      {card.company}
                    </p>
                    <p style={{ fontSize: "11px", color: V("color-mute") }}>{card.industry}</p>
                  </div>
                </div>

                {/* Stat */}
                <div
                  className="font-semibold leading-none mb-1"
                  style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", color: V("color-accent-blue") }}
                >
                  {card.stat}
                </div>
                <p className="mb-4" style={{ ...S.bodySm, color: V("color-body-mid") }}>
                  {card.label}
                </p>

                {/* Quote */}
                <p style={{ ...S.bodySm, color: V("color-body"), fontStyle: "italic" }}>
                  &ldquo;{card.quote}&rdquo;
                </p>

                {/* Read more */}
                <a
                  href="#"
                  className="inline-flex items-center mt-4 transition-colors hover:gap-2"
                  style={{ ...S.bodySm, fontWeight: 500, color: V("color-accent-blue") }}
                >
                  Read story <Arrow />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════ CTA SECTION ═══════ */}
        <section
          className="relative overflow-hidden px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)]"
          style={{ background: V("color-ink") }}
        >
          {/* Blue glow */}
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
                Become a customer
              </h2>
              <p className="mb-10" style={{ ...S.bodyLg, color: V("color-mute-soft") }}>
                Join 300,000+ teams building with Kreature. Start for free — no credit card required,
                no time limit. See why the world&apos;s best teams choose Kreature to ship faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="inline-flex items-center transition-colors"
                  style={{ ...S.btn, background: V("color-accent-blue"), color: "#fff" }}
                >
                  Get started free <Arrow />
                </a>
                <a
                  href="/enterprise/contact-sales"
                  className="inline-flex items-center transition-colors"
                  style={{
                    ...S.btn,
                    background: "transparent",
                    color: V("color-canvas"),
                    border: `1px solid rgba(255,255,255,0.2)`,
                  }}
                >
                  Talk to sales
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
