"use client";

import { useState } from "react";

/* ─── CSS Var helper ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Typography scale ─── */
const T = {
  h1: { fontSize: "80px", fontWeight: 600, lineHeight: "83.2px", letterSpacing: "-0.8px" } as React.CSSProperties,
  h2: { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px" } as React.CSSProperties,
  h3: { fontSize: "32px", fontWeight: 500, lineHeight: "41.6px" } as React.CSSProperties,
  h4: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12.8px", fontWeight: 550, lineHeight: "15.36px" } as React.CSSProperties,
  btn: { fontSize: "16px", fontWeight: 500, lineHeight: "19.2px", padding: "16px 24px", borderRadius: "4px" } as React.CSSProperties,
};

/* ─── Helpers ─── */
function Arrow() {
  return <span className="ml-1 text-[1.1em] leading-none select-none">&rarr;</span>;
}

/* ─── Footer ─── */
function Footer() {
  const FOOTER_COLS = [
    { heading: "Company", links: [{ label: "Services", href: "/#offers" }, { label: "Results", href: "/#case-studies" }, { label: "Process", href: "/#process" }, { label: "The Kreature Way", href: "/webflow-way" }] },
    { heading: "Resources", links: [{ label: "Blog", href: "/blog" }, { label: "Resources", href: "/resources" }, { label: "Community", href: "/community" }, { label: "FAQ", href: "/#faq" }] },
    { heading: "Connect", links: [{ label: "Contact", href: "/contact-sales" }, { label: "Book a Call", href: "https://cal.com" }] },
  ];

  return (
    <footer style={{ background: V("color-canvas"), borderTop: `1px solid ${V("color-hairline")}` }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-[36px] w-auto logo-dark" />
              <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-[36px] w-auto logo-light" />
              <span className="font-heading font-[800] text-xl tracking-tight" style={{ color: V("color-ink") }}>Kreature<span className="text-[#146ef5]">.</span></span>
            </div>
            <p style={{ ...T.bodySm, color: V("color-mute"), maxWidth: "280px" }}>AI Product Studio for founders who ship fast.</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div className="mb-4 uppercase tracking-wider" style={{ ...T.caption, color: V("color-mute") }}>{col.heading}</div>
              <ul className="space-y-3 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}><a href={link.href} className="no-underline transition-colors" style={{ ...T.bodySm, color: V("color-body-mid") }}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${V("color-hairline")}` }}>
          <p style={{ ...T.caption, color: V("color-mute") }}>&copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors" style={{ color: V("color-mute") }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors" style={{ color: V("color-mute") }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Community data ─── */

interface Channel {
  title: string;
  description: string;
  icon: string;
  accent: string;
  cta: string;
  href: string;
  members?: string;
}

interface ShowcaseProject {
  title: string;
  creator: string;
  description: string;
  accent: string;
  tags: string[];
}

interface Partner {
  name: string;
  type: string;
  description: string;
}

const CHANNELS: Channel[] = [
  {
    title: "Discord",
    description:
      "Join 2,400+ builders, founders, and designers in our Discord server. Get feedback on your product, find collaborators, and learn from people shipping daily.",
    icon: "💬",
    accent: "color-accent-purple",
    cta: "Join Discord",
    href: "https://discord.com",
    members: "2,400+ members",
  },
  {
    title: "Forum",
    description:
      "Long-form discussions on product strategy, technical architecture, funding, and growth. Our forum is where the deep conversations happen — organized, searchable, permanent.",
    icon: "📚",
    accent: "color-accent-blue",
    cta: "Browse forum",
    href: "#",
    members: "850+ threads",
  },
  {
    title: "Events",
    description:
      "Monthly virtual events: AMAs with successful founders, live product teardowns, design critiques, and build-in-public sessions. Free and open to everyone.",
    icon: "📅",
    accent: "color-accent-orange",
    cta: "See upcoming events",
    href: "#",
    members: "Monthly",
  },
  {
    title: "Meetups",
    description:
      "In-person meetups in 12 cities worldwide. Connect with local builders, share what you're working on, and find co-founders, collaborators, and friends.",
    icon: "📍",
    accent: "color-accent-green",
    cta: "Find a meetup",
    href: "#",
    members: "12 cities",
  },
];

const SHOWCASE: ShowcaseProject[] = [
  {
    title: "FounderHealth Dashboard",
    creator: "Sarah Chen",
    description:
      "A personal health tracker for founders — sleep, exercise, focus metrics. Built entirely in two weeks using AI-assisted development.",
    accent: "color-accent-blue",
    tags: ["Product", "Health"],
  },
  {
    title: "SaaS Pricing Calculator",
    creator: "Marcus Webb",
    description:
      "An interactive pricing calculator for SaaS companies. Models MRR, churn, and growth. Used by 300+ startups during fundraising.",
    accent: "color-accent-purple",
    tags: ["Tool", "Finance"],
  },
  {
    title: "Design Token Exporter",
    creator: "Lena Park",
    description:
      "A Figma plugin that exports design tokens to Tailwind, CSS custom properties, and SwiftUI — in one click. 2,000+ installs.",
    accent: "color-accent-pink",
    tags: ["Tool", "Design"],
  },
  {
    title: "Indie Page",
    creator: "Dev Sharma",
    description:
      "A link-in-bio tool for indie makers. Minimal, fast, open source. Built and launched in 10 days, now serving 4,500 users.",
    accent: "color-accent-orange",
    tags: ["Product", "Open Source"],
  },
  {
    title: "AI Copy Companion",
    creator: "Rachel Torres",
    description:
      "An AI writing assistant trained on successful SaaS landing pages. Helps founders write copy that converts without sounding generic.",
    accent: "color-accent-green",
    tags: ["AI", "Marketing"],
  },
  {
    title: "ShipLog",
    creator: "Alex Kim",
    description:
      "A build-in-public journaling tool. Log your progress, share with followers, build accountability. Integration with Twitter and Discord.",
    accent: "color-accent-blue",
    tags: ["Product", "Community"],
  },
];

const PARTNERS: Partner[] = [
  {
    name: "DesignJoy",
    type: "Design Partner",
    description: "Unlimited design subscription for startups. Trusted design partner for Kreature clients who need ongoing design support.",
  },
  {
    name: "Supabase",
    type: "Infrastructure Partner",
    description: "Open source Firebase alternative. Our recommended backend stack for client projects — Postgres, Auth, Storage, Edge Functions.",
  },
  {
    name: "Vercel",
    type: "Platform Partner",
    description: "Frontend cloud. Where we deploy everything — Next.js apps, edge functions, and static sites with global CDN.",
  },
  {
    name: "Stripe",
    type: "Payments Partner",
    description: "Payment infrastructure for the internet. Every Kreature project that handles money runs on Stripe.",
  },
  {
    name: "Notion",
    type: "Productivity Partner",
    description: "Our shared workspace for client collaboration — scope docs, project boards, meeting notes, and knowledge bases.",
  },
  {
    name: "Figma",
    type: "Design Partner",
    description: "Collaborative design tool. Every design system and component library we build starts in Figma.",
  },
];

/* ══════════════════════════════════════════════════════════════════
   Community Page
   ══════════════════════════════════════════════════════════════════ */
export default function CommunityPage() {
  return (
    <>
      <main style={{ background: V("color-canvas") }}>
        {/* ─── Hero ─── */}
        <section className="relative pt-[68px] overflow-hidden" style={{ background: V("color-canvas") }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: V("color-accent-purple"), opacity: 0.06 }} />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px]" style={{ background: V("color-accent-blue"), opacity: 0.04 }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center">
            <h1 className="font-heading mb-6" style={{ ...T.h1, color: V("color-ink") }}>
              Join the Kreature community
            </h1>
            <p className="max-w-2xl mx-auto mb-0" style={{ ...T.h4, color: V("color-body-mid"), fontWeight: 400 }}>
              A global community of builders, founders, and designers who ship products
              fast. Learn, share, and grow alongside people building the future.
            </p>
          </div>
        </section>

        {/* ─── Community Channels ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28" style={{ background: V("color-canvas-soft") }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading mb-4 text-center" style={{ ...T.h2, color: V("color-ink") }}>
              Where to find us
            </h2>
            <p className="text-center mb-16 max-w-xl mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Four ways to connect with the community. Pick your vibe — real-time chat,
              deep discussions, live learning, or in-person hangs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {CHANNELS.map((channel) => (
                <article
                  key={channel.title}
                  className="p-8 sm:p-10 transition-all flex flex-col"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center text-xl"
                      style={{ borderRadius: "10px", background: V("color-canvas-soft") }}
                    >
                      {channel.icon}
                    </div>
                    {channel.members && (
                      <span
                        style={{
                          ...T.caption,
                          color: V(channel.accent),
                          background: V("color-canvas-soft"),
                          padding: "4px 12px",
                          borderRadius: "9999px",
                        }}
                      >
                        {channel.members}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading mb-2" style={{ ...T.h4, color: V("color-ink") }}>
                    {channel.title}
                  </h3>
                  <p className="mb-6 flex-1" style={{ ...T.bodySm, color: V("color-body-mid") }}>
                    {channel.description}
                  </p>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 no-underline font-medium"
                    style={{ ...T.bodySm, color: V(channel.accent) }}
                  >
                    {channel.cta} <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Made by the Community Showcase ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28" style={{ background: V("color-canvas") }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading mb-4 text-center" style={{ ...T.h2, color: V("color-ink") }}>
              Made by the community
            </h2>
            <p className="text-center mb-16 max-w-xl mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              Products, tools, and resources built by Kreature community members.
              Get inspired, find collaborators, or submit your own.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SHOWCASE.map((project) => (
                <article
                  key={project.title}
                  className="group cursor-pointer p-6 transition-all flex flex-col"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas-soft"),
                  }}
                >
                  {/* Project header visual */}
                  <div
                    className="h-[100px] mb-4 relative overflow-hidden flex items-center justify-center"
                    style={{
                      borderRadius: "8px",
                      background: `linear-gradient(135deg, ${V(project.accent)}18, ${V(project.accent)}06)`,
                    }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center text-lg"
                      style={{
                        borderRadius: "8px",
                        background: V("color-canvas"),
                      }}
                    >
                      🚀
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      style={{
                        ...T.caption,
                        color: V(project.accent),
                        background: V("color-canvas"),
                        padding: "2px 10px",
                        borderRadius: "9999px",
                      }}
                    >
                      {project.tags[0]}
                    </span>
                    {project.tags[1] && (
                      <span
                        style={{
                          ...T.caption,
                          color: V("color-mute"),
                          background: V("color-canvas"),
                          padding: "2px 10px",
                          borderRadius: "9999px",
                        }}
                      >
                        {project.tags[1]}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading mb-1 flex-1" style={{ ...T.h4, color: V("color-ink") }}>
                    {project.title}
                  </h3>
                  <p className="mb-1" style={{ ...T.caption, color: V("color-mute") }}>
                    by {project.creator}
                  </p>
                  <p className="mb-4" style={{ ...T.bodySm, color: V("color-body-mid") }}>
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 no-underline font-medium"
                    style={{ ...T.caption, color: V("color-accent-blue") }}
                  >
                    View project <Arrow />
                  </a>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-1 no-underline transition-colors"
                style={{
                  ...T.btn,
                  border: `1px solid ${V("color-hairline")}`,
                  color: V("color-ink"),
                }}
              >
                Submit your project <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* ─── Partner Directory ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden" style={{ background: V("color-canvas-soft") }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px]" style={{ background: V("color-accent-purple"), opacity: 0.04 }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading mb-4" style={{ ...T.h2, color: V("color-ink") }}>
                Partner directory
              </h2>
              <p style={{ ...T.body, color: V("color-body-mid"), fontSize: "20px", lineHeight: 1.6 }}>
                Trusted partners we work with and recommend. From design subscriptions
                to payment infrastructure, these are the tools and services that power
                our clients&apos; products.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PARTNERS.map((partner) => (
                <article
                  key={partner.name}
                  className="p-6 transition-all"
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                  }}
                >
                  <div className="mb-3" style={{ ...T.caption, color: V("color-mute"), textTransform: "uppercase" }}>
                    {partner.type}
                  </div>
                  <h3 className="font-heading mb-2" style={{ ...T.h4, color: V("color-ink") }}>
                    {partner.name}
                  </h3>
                  <p style={{ ...T.bodySm, color: V("color-body-mid") }}>
                    {partner.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/certified-partners"
                className="inline-flex items-center gap-1 no-underline transition-colors"
                style={{
                  ...T.btn,
                  border: `1px solid ${V("color-hairline")}`,
                  color: V("color-ink"),
                }}
              >
                View all partners <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden" style={{ background: V("color-canvas") }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]" style={{ background: V("color-accent-purple"), opacity: 0.06 }} />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-heading mb-4" style={{ ...T.h2, color: V("color-ink") }}>
              Ready to join?
            </h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ ...T.body, color: V("color-body-mid") }}>
              The community is free, open, and full of people building interesting
              things. Jump into Discord, come to an event, or just say hi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white no-underline transition-colors"
                style={{ ...T.btn, background: V("color-accent-purple") }}
              >
                Join Discord <Arrow />
              </a>
              <a
                href="/contact-sales"
                className="inline-flex items-center no-underline transition-colors"
                style={{
                  ...T.btn,
                  border: `1px solid ${V("color-hairline")}`,
                  color: V("color-ink"),
                }}
              >
                Work with us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
