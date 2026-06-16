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

/* ─── Blog data ─── */
type Category = "All" | "Product" | "Design" | "AI" | "Business" | "Tutorial" | "Guide";

interface Post {
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  featured?: boolean;
}

const CATEGORIES: Category[] = ["All", "Product", "Design", "AI", "Business", "Tutorial", "Guide"];

const POSTS: Post[] = [
  {
    title: "How AI is Changing Product Development",
    excerpt:
      "Artificial intelligence is reshaping how products get built — from automated code generation to intelligent design systems. Here's what founders need to know about the AI-powered product studio model and why it's the fastest path from idea to launch.",
    category: "AI",
    date: "June 10, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "Ship Faster: The No-Code Advantage for Founders",
    excerpt:
      "No-code tools have evolved far beyond simple landing pages. Today's platforms let non-technical founders ship full products without writing a line of code — or hire a studio that does.",
    category: "Product",
    date: "June 8, 2026",
    readTime: "6 min read",
  },
  {
    title: "Why Fixed-Scope Development Beats Hourly Billing",
    excerpt:
      "Hourly billing creates misaligned incentives. Fixed-scope engagements reward speed, quality, and outcomes — not time spent. Here's why the best studios have moved on.",
    category: "Business",
    date: "June 5, 2026",
    readTime: "5 min read",
  },
  {
    title: "The Rise of AI Product Studios",
    excerpt:
      "A new category of company is emerging: the AI product studio. Combining design, engineering, and AI into a single offering, these studios are changing how products get to market.",
    category: "AI",
    date: "June 3, 2026",
    readTime: "7 min read",
  },
  {
    title: "From Idea to MVP in 2 Weeks",
    excerpt:
      "Most founders spend months on planning, hiring, and fundraising before building anything. Here's a step-by-step playbook for going from concept to working MVP in fourteen days.",
    category: "Tutorial",
    date: "May 28, 2026",
    readTime: "10 min read",
  },
  {
    title: "Design Systems That Scale",
    excerpt:
      "A design system isn't a component library — it's a shared language between design and engineering. Learn how to build one that scales from your first product to your hundredth.",
    category: "Design",
    date: "May 22, 2026",
    readTime: "6 min read",
  },
  {
    title: "What Non-Technical Founders Need to Know",
    excerpt:
      "You don't need to learn to code to build a successful product. But you do need to understand the product development process. Here's your crash course.",
    category: "Guide",
    date: "May 18, 2026",
    readTime: "9 min read",
  },
  {
    title: "Building Products People Actually Use",
    excerpt:
      "Launching is easy. Getting traction is hard. We break down the product-market fit signals that separate successful launches from ghost towns.",
    category: "Product",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
];

/* ─── Footer ─── */
function Footer() {
  const FOOTER_COLS = [
    {
      heading: "Company",
      links: [
        { label: "Services", href: "/#offers" },
        { label: "Results", href: "/#case-studies" },
        { label: "Process", href: "/#process" },
        { label: "The Kreature Way", href: "/webflow-way" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Resources", href: "/resources" },
        { label: "Community", href: "/community" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Contact", href: "/contact-sales" },
        { label: "Book a Call", href: "https://cal.com" },
      ],
    },
  ];

  return (
    <footer style={{ background: V("color-canvas"), borderTop: `1px solid ${V("color-hairline")}` }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="h-[36px] w-auto logo-dark"
              />
              <img
                src="/logo/kreature-logo-light.png"
                alt="Kreature"
                className="h-[36px] w-auto logo-light"
              />
              <span
                className="font-heading font-[800] text-xl tracking-tight"
                style={{ color: V("color-ink") }}
              >
                Kreature<span className="text-[#146ef5]">.</span>
              </span>
            </div>
            <p style={{ ...T.bodySm, color: V("color-mute"), maxWidth: "280px" }}>
              AI Product Studio for founders who ship fast.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div
                className="mb-4 uppercase tracking-wider"
                style={{ ...T.caption, color: V("color-mute") }}
              >
                {col.heading}
              </div>
              <ul className="space-y-3 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="no-underline transition-colors"
                      style={{ ...T.bodySm, color: V("color-body-mid") }}
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
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${V("color-hairline")}` }}
        >
          <p style={{ ...T.caption, color: V("color-mute") }}>
            &copy; {new Date().getFullYear()} Kreature Studio. All rights reserved.
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Category accent colors ─── */
const CAT_COLORS: Record<string, string> = {
  Product: "color-accent-blue",
  Design: "color-accent-purple",
  AI: "color-accent-green",
  Business: "color-accent-orange",
  Tutorial: "color-accent-pink",
  Guide: "color-accent-blue",
};

/* ══════════════════════════════════════════════════════════════════
   Blog Page
   ══════════════════════════════════════════════════════════════════ */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory);

  const featuredPost = POSTS.find((p) => p.featured);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <>
      <main style={{ background: V("color-canvas") }}>
        {/* ─── Hero ─── */}
        <section
          className="relative pt-[68px] overflow-hidden"
          style={{ background: V("color-canvas") }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
              style={{ background: V("color-accent-blue"), opacity: 0.06 }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center">
            <h1
              className="font-heading mb-6"
              style={{ ...T.h1, color: V("color-ink") }}
            >
              The Kreature Blog
            </h1>
            <p
              className="max-w-2xl mx-auto mb-0"
              style={{ ...T.h4, color: V("color-body-mid"), fontWeight: 400 }}
            >
              Insights on product building, AI, startups, and shipping fast. Written
              for founders who want to build products people love.
            </p>
          </div>
        </section>

        {/* ─── Category chips ─── */}
        <section className="px-5 sm:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="transition-all cursor-pointer"
                  style={{
                    ...T.bodySm,
                    fontWeight: 500,
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    border:
                      activeCategory === cat
                        ? `2px solid ${V("color-accent-blue")}`
                        : `2px solid ${V("color-hairline")}`,
                    background:
                      activeCategory === cat
                        ? V("color-accent-blue")
                        : "transparent",
                    color:
                      activeCategory === cat ? "#fff" : V("color-body"),
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Featured Post ─── */}
        {featuredPost && activeCategory === "All" && (
          <section className="px-5 sm:px-8 pb-16">
            <div className="max-w-7xl mx-auto">
              <article
                className="group cursor-pointer overflow-hidden"
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${V("color-hairline")}`,
                  background: V("color-canvas-soft"),
                }}
              >
                <div className="grid md:grid-cols-5">
                  {/* Visual placeholder */}
                  <div
                    className="md:col-span-2 min-h-[240px] relative overflow-hidden"
                    style={{ background: V("color-accent-blue"), opacity: 0.08 }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${V("color-accent-blue")}22, ${V("color-accent-purple")}22)`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        style={{
                          ...T.caption,
                          color: V("color-accent-blue"),
                          background: V("color-canvas"),
                          padding: "6px 16px",
                          borderRadius: "9999px",
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        style={{
                          ...T.caption,
                          color: V(CAT_COLORS[featuredPost.category]),
                          background: V("color-canvas"),
                          padding: "3px 12px",
                          borderRadius: "9999px",
                        }}
                      >
                        {featuredPost.category}
                      </span>
                      <span style={{ ...T.caption, color: V("color-mute") }}>
                        {featuredPost.date}
                      </span>
                      <span style={{ ...T.caption, color: V("color-mute") }}>
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2
                      className="font-heading mb-3 cursor-pointer"
                      style={{ ...T.h3, color: V("color-ink") }}
                    >
                      {featuredPost.title}
                    </h2>
                    <p
                      className="mb-5 max-w-xl"
                      style={{ ...T.body, color: V("color-body-mid") }}
                    >
                      {featuredPost.excerpt}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 no-underline font-medium"
                      style={{ ...T.bodySm, color: V("color-accent-blue") }}
                    >
                      Read article <Arrow />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* ─── Posts Grid ─── */}
        <section className="px-5 sm:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.filter((p) => !p.featured).length === 0 ? (
              <div className="text-center py-16">
                <p style={{ ...T.body, color: V("color-mute") }}>
                  No posts found in this category.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts
                  .filter((p) => !p.featured)
                  .map((post, i) => (
                    <article
                      key={i}
                      className="group cursor-pointer flex flex-col transition-all"
                      style={{
                        borderRadius: "12px",
                        border: `1px solid ${V("color-hairline")}`,
                        background: V("color-canvas-soft"),
                      }}
                    >
                      {/* Card header */}
                      <div
                        className="h-[160px] relative overflow-hidden"
                        style={{
                          borderRadius: "12px 12px 0 0",
                          background: V("color-canvas-mid"),
                        }}
                      >
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${V(CAT_COLORS[post.category])}15, transparent)`,
                          }}
                        />
                      </div>

                      {/* Card body */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span
                            style={{
                              ...T.caption,
                              color: V(CAT_COLORS[post.category]),
                              background: V("color-canvas"),
                              padding: "3px 12px",
                              borderRadius: "9999px",
                            }}
                          >
                            {post.category}
                          </span>
                          <span style={{ ...T.caption, color: V("color-mute") }}>
                            {post.date}
                          </span>
                        </div>
                        <h3
                          className="font-heading mb-2 cursor-pointer flex-1"
                          style={{ ...T.h4, color: V("color-ink") }}
                        >
                          {post.title}
                        </h3>
                        <p
                          className="mb-4 line-clamp-3"
                          style={{ ...T.bodySm, color: V("color-body-mid") }}
                        >
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span style={{ ...T.caption, color: V("color-mute") }}>
                            {post.readTime}
                          </span>
                          <a
                            href="#"
                            className="inline-flex items-center gap-1 no-underline font-medium"
                            style={{ ...T.caption, color: V("color-accent-blue") }}
                          >
                            Read more <Arrow />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            )}
          </div>
        </section>

        {/* ─── Newsletter CTA ─── */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden"
          style={{ background: V("color-canvas-soft") }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
              style={{ background: V("color-accent-blue"), opacity: 0.06 }}
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2
              className="font-heading mb-4"
              style={{ ...T.h2, color: V("color-ink") }}
            >
              Stay in the loop
            </h2>
            <p
              className="mb-8 max-w-lg mx-auto"
              style={{ ...T.body, color: V("color-body-mid") }}
            >
              Get the latest articles on product building, AI, and startup strategy
              delivered straight to your inbox. No spam, unsubscribe anytime.
            </p>

            {subscribed ? (
              <div
                className="inline-flex items-center gap-2 px-6 py-3"
                style={{
                  borderRadius: "8px",
                  background: V("color-accent-green"),
                  color: "#fff",
                }}
              >
                <span style={{ ...T.body, color: "#fff", fontWeight: 500 }}>
                  You&apos;re subscribed! Check your inbox.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 w-full sm:w-auto px-5 py-3.5 outline-none transition-colors"
                  style={{
                    ...T.body,
                    borderRadius: "4px",
                    border: `1px solid ${V("color-hairline")}`,
                    background: V("color-canvas"),
                    color: V("color-ink"),
                  }}
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto text-white font-medium cursor-pointer transition-colors whitespace-nowrap"
                  style={{
                    ...T.btn,
                    background: V("color-accent-blue"),
                    border: "none",
                  }}
                >
                  Subscribe <Arrow />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
