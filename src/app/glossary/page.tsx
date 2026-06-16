"use client";

import { useState, useMemo } from "react";

/* ─── Helpers ─── */
const V = (n: string) => `var(--${n})`;

/* ─── Glossary Data ─── */
interface GlossaryTerm {
  term: string;
  definition: string;
}

const GLOSSARY: Record<string, GlossaryTerm[]> = {
  A: [
    {
      term: "AEO (Answer Engine Optimization)",
      definition:
        "The practice of optimizing content to be surfaced as direct answers in AI-powered search engines, voice assistants, and answer engines like ChatGPT, Perplexity, and Google AI Overviews. AEO focuses on structured data, clear Q&A formatting, and authoritative content that AI models can easily parse and cite.",
    },
    {
      term: "API (Application Programming Interface)",
      definition:
        "A set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications use to request and exchange information, enabling integrations between services, platforms, and tools.",
    },
    {
      term: "Accessibility (a11y)",
      definition:
        "The practice of designing and developing websites, applications, and digital content so they can be used by people of all abilities, including those who rely on assistive technologies like screen readers, keyboard navigation, or voice control. Governed by standards like WCAG.",
    },
    {
      term: "Agile",
      definition:
        "A project management and product development methodology that emphasizes iterative progress, cross-functional collaboration, and continuous feedback. Agile teams work in short cycles called sprints to deliver incremental value and adapt quickly to changing requirements.",
    },
    {
      term: "Alt Text",
      definition:
        "A text description added to an image in HTML via the alt attribute. Alt text serves two purposes: it is read by screen readers to describe images to visually impaired users, and it displays when an image fails to load. Essential for both accessibility and SEO.",
    },
    {
      term: "Analytics",
      definition:
        "The systematic collection, measurement, and analysis of data about website traffic, user behavior, and conversion patterns. Web analytics tools like Google Analytics, Mixpanel, and PostHog help teams understand how visitors interact with their digital products.",
    },
  ],
  B: [
    {
      term: "Backend",
      definition:
        "The server-side layer of a web application that handles business logic, database operations, authentication, and API services. The backend processes requests from the frontend, manages data storage and retrieval, and returns responses. Common backend technologies include Node.js, Python, Ruby, and Go.",
    },
    {
      term: "Browser",
      definition:
        "A software application used to access and navigate the World Wide Web. Browsers like Chrome, Safari, Firefox, and Edge interpret HTML, CSS, and JavaScript to render web pages. Each browser has its own rendering engine and may display pages slightly differently.",
    },
    {
      term: "Bounce Rate",
      definition:
        "The percentage of visitors who navigate away from a website after viewing only one page. A high bounce rate may indicate that visitors did not find what they were looking for, though it can also reflect quick answers for content pages. Context matters when interpreting this metric.",
    },
  ],
  C: [
    {
      term: "CDN (Content Delivery Network)",
      definition:
        "A geographically distributed network of servers that deliver web content to users based on their location. CDNs cache static assets like images, stylesheets, and scripts at edge locations, reducing latency and improving page load times for users around the world.",
    },
    {
      term: "CMS (Content Management System)",
      definition:
        "A software platform that enables users to create, edit, organize, and publish digital content without writing code directly. Modern CMS platforms include traditional ones like WordPress and headless CMS solutions that decouple content management from the presentation layer.",
    },
    {
      term: "CSS (Cascading Style Sheets)",
      definition:
        "The stylesheet language used to describe the presentation and layout of HTML documents. CSS controls visual aspects like colors, typography, spacing, animations, and responsive layouts. Modern CSS includes features like Grid, Flexbox, custom properties, and container queries.",
    },
    {
      term: "Cache",
      definition:
        "A temporary storage mechanism that holds frequently accessed data so future requests for that data are served faster. In web development, caching can occur at multiple levels: browser cache, CDN cache, server cache, and database cache — each reducing load time and server strain.",
    },
    {
      term: "Call to Action (CTA)",
      definition:
        "A design element, usually a button or link, that prompts a user to take a specific action such as signing up, purchasing, downloading, or contacting. Effective CTAs use clear, action-oriented language and stand out visually from surrounding content.",
    },
    {
      term: "Cookie",
      definition:
        "A small piece of data stored in the user's browser by a website. Cookies are used for session management (keeping users logged in), personalization (remembering preferences), and tracking (analytics and advertising). Privacy regulations like GDPR require websites to disclose cookie usage.",
    },
    {
      term: "Conversion Rate",
      definition:
        "The percentage of website visitors who complete a desired action, such as making a purchase, signing up for a newsletter, or filling out a form. Conversion rate optimization (CRO) is the practice of systematically improving this metric through design and copy changes.",
    },
  ],
  D: [
    {
      term: "DNS (Domain Name System)",
      definition:
        "The system that translates human-readable domain names (like kreature.com) into IP addresses that computers use to identify each other on the internet. DNS is often called the phonebook of the internet — it is essential infrastructure for navigating the web.",
    },
    {
      term: "Domain",
      definition:
        "A unique, human-readable web address that identifies a website on the internet (e.g., kreature.com). Domains are registered through domain registrars and must be renewed periodically. A domain is part of a URL along with the protocol and path.",
    },
    {
      term: "DevOps",
      definition:
        "A set of practices combining software development and IT operations to shorten the development lifecycle and deliver software continuously. DevOps emphasizes automation, monitoring, collaboration, and shared responsibility across teams that traditionally worked in silos.",
    },
  ],
  F: [
    {
      term: "Frontend",
      definition:
        "The client-side layer of a web application — everything the user sees and interacts with directly in the browser. Frontend development involves HTML for structure, CSS for styling, and JavaScript for interactivity. Modern frontend frameworks include React, Vue, and Next.js.",
    },
    {
      term: "Framework",
      definition:
        "A pre-built collection of code, tools, and conventions that provides a foundation for building applications. Web frameworks like Next.js, Django, and Ruby on Rails handle common tasks such as routing, data fetching, and rendering so developers can focus on application-specific logic.",
    },
    {
      term: "FTP (File Transfer Protocol)",
      definition:
        "A standard network protocol used to transfer files between a client and server over the internet. While still used for some legacy hosting setups, modern web development favors Git-based deployment, CI/CD pipelines, and cloud storage over FTP for security and reliability reasons.",
    },
  ],
  H: [
    {
      term: "HTML (Hypertext Markup Language)",
      definition:
        "The standard markup language used to structure content on the web. HTML uses elements (tags) to define headings, paragraphs, links, images, and other content types. Every web page is built on an HTML foundation, which CSS then styles and JavaScript makes interactive.",
    },
    {
      term: "HTTP/HTTPS",
      definition:
        "Hypertext Transfer Protocol (Secure) is the foundation protocol of the web, governing how browsers request resources from servers and servers respond. HTTPS adds a layer of SSL/TLS encryption to protect data in transit. Browsers mark non-HTTPS sites as not secure.",
    },
    {
      term: "Headless CMS",
      definition:
        "A content management system that provides content editing and API delivery without a built-in frontend presentation layer. Headless CMS platforms give developers full flexibility to build custom frontends while giving content editors familiar authoring tools. Examples include Contentful, Strapi, and Sanity.",
    },
    {
      term: "Hosting",
      definition:
        "The service of storing and serving website files on servers connected to the internet. Web hosting ranges from shared servers to dedicated machines to cloud platforms like AWS, Vercel, and Netlify. The choice of hosting affects performance, scalability, security, and cost.",
    },
  ],
  J: [
    {
      term: "JavaScript",
      definition:
        "The primary programming language of the web, enabling interactive and dynamic content in browsers. JavaScript can manipulate HTML/CSS, handle user events, fetch data from APIs, and power complex single-page applications. With Node.js, JavaScript also runs on servers.",
    },
    {
      term: "Jamstack",
      definition:
        "A modern web development architecture based on JavaScript, APIs, and Markup. Jamstack sites pre-render pages at build time and serve them via CDNs, with dynamic functionality handled by APIs. This approach offers better performance, security, and developer experience compared to traditional monolithic architectures.",
    },
  ],
  M: [
    {
      term: "Metadata",
      definition:
        "Data that provides information about other data. In web development, metadata includes page titles, descriptions, Open Graph tags, and schema markup — all of which help search engines and social platforms understand and display content. Proper metadata is essential for SEO and social sharing.",
    },
    {
      term: "MVP (Minimum Viable Product)",
      definition:
        "The simplest version of a product that can be released to validate a core idea with real users. An MVP includes only essential features needed to solve the primary problem and gather feedback. The goal is to learn quickly and iterate, not to launch a polished final product.",
    },
  ],
  R: [
    {
      term: "Responsive Design",
      definition:
        "An approach to web design that ensures web pages render well across a wide range of devices and screen sizes. Responsive design uses fluid grids, flexible images, and CSS media queries to adapt layouts. It is the standard approach for building websites in a multi-device world.",
    },
    {
      term: "REST API",
      definition:
        "An API that follows the principles of Representational State Transfer, using standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources identified by URLs. REST APIs are stateless, cacheable, and widely used for communication between web clients and servers.",
    },
    {
      term: "Rendering",
      definition:
        "The process of generating the visual output of a web page from code. Rendering can happen on the server (SSR), in the browser (CSR), at build time (SSG), or incrementally (ISR). The rendering strategy affects performance, SEO, and user experience.",
    },
  ],
  S: [
    {
      term: "SEO (Search Engine Optimization)",
      definition:
        "The practice of improving a website to increase its visibility in search engine results pages (SERPs). SEO encompasses technical optimization (site speed, crawlability), on-page factors (content quality, keywords), and off-page factors (backlinks, authority).",
    },
    {
      term: "SSL/TLS",
      definition:
        "Cryptographic protocols that provide secure communication over computer networks. SSL/TLS certificates encrypt data transmitted between a browser and server, protecting sensitive information like passwords and payment details. HTTPS relies on SSL/TLS, and modern browsers require it.",
    },
    {
      term: "SaaS (Software as a Service)",
      definition:
        "A software delivery model where applications are hosted by a provider and made available to customers over the internet, typically on a subscription basis. SaaS eliminates the need for users to install, manage, and update software locally. Examples include Slack, Notion, and Salesforce.",
    },
    {
      term: "Schema Markup",
      definition:
        "Structured data vocabulary added to HTML that helps search engines understand the content and context of a page. Schema markup enables rich results like star ratings, FAQ accordions, and product information in search listings, improving click-through rates and visibility in AI-powered search.",
    },
    {
      term: "Semantic HTML",
      definition:
        "HTML that uses elements according to their intended meaning rather than purely for presentation. Semantic elements like header, nav, main, article, and footer describe the role of content, improving accessibility, SEO, and maintainability. Screen readers and search engines rely on semantic structure.",
    },
    {
      term: "Serverless",
      definition:
        "A cloud computing model where developers build and run applications without managing server infrastructure. Despite the name, servers are still involved — the cloud provider dynamically allocates resources. Serverless functions (AWS Lambda, Vercel Functions) scale automatically and bill only for actual usage.",
    },
  ],
  U: [
    {
      term: "UI (User Interface)",
      definition:
        "The visual and interactive elements of a digital product that users engage with directly — buttons, forms, menus, icons, typography, and color. UI design focuses on the look and feel of a product, working in tandem with UX to create pleasant, intuitive digital experiences.",
    },
    {
      term: "UX (User Experience)",
      definition:
        "The overall experience a person has when interacting with a digital product, encompassing usability, accessibility, performance, and emotional response. UX design is a research-driven discipline that seeks to understand user needs and create products that are useful, usable, and desirable.",
    },
    {
      term: "URL (Uniform Resource Locator)",
      definition:
        "The web address used to locate a specific resource on the internet. A URL consists of a protocol (https://), domain (example.com), and optional path (/page) and parameters (?query=value). Clean, descriptive URLs improve both user experience and SEO.",
    },
  ],
  W: [
    {
      term: "Webhook",
      definition:
        "A method for one application to send real-time data to another application when a specific event occurs. Unlike polling where an app repeatedly checks for updates, webhooks push data automatically — like getting a notification when a payment is processed or a form is submitted.",
    },
    {
      term: "WCAG (Web Content Accessibility Guidelines)",
      definition:
        "An internationally recognized set of standards for making web content accessible to people with disabilities. Published by the W3C, WCAG is organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR). Levels include A, AA, and AAA.",
    },
    {
      term: "Wireframe",
      definition:
        "A low-fidelity visual guide representing the skeletal structure of a web page or application. Wireframes focus on layout, content hierarchy, and functionality without color, imagery, or detailed styling. They are used early in the design process to align stakeholders before visual design begins.",
    },
  ],
};

const ALL_LETTERS = Object.keys(GLOSSARY).sort();

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
              Your reference for web development, design, SEO, and digital
              product terminology.
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
export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filteredGlossary = useMemo(() => {
    if (!search.trim()) return GLOSSARY;
    const q = search.toLowerCase();
    const result: Record<string, GlossaryTerm[]> = {};
    for (const [letter, terms] of Object.entries(GLOSSARY)) {
      const matched = terms.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      );
      if (matched.length > 0) result[letter] = matched;
    }
    return result;
  }, [search]);

  const totalTerms = Object.values(GLOSSARY).reduce(
    (sum, t) => sum + t.length,
    0
  );
  const filteredCount = Object.values(filteredGlossary).reduce(
    (sum, t) => sum + t.length,
    0
  );

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
              Resources
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
              Web building glossary
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: V("color-mute-soft"),
                maxWidth: "650px",
              }}
            >
              {totalTerms} terms covering web development, design, SEO,
              accessibility, and digital product strategy. Whether you&apos;re a
              founder, marketer, or developer, this reference helps you navigate
              the language of the modern web.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Alphabet Nav + Terms */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas"),
        }}
      >
        <div
          className="mx-auto px-5 sm:px-8"
          style={{ maxWidth: "1440px" }}
        >
          {/* Search bar */}
          <div className="mx-auto mb-10" style={{ maxWidth: "600px" }}>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: V("color-mute") }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search terms..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-3.5 pl-12 pr-4 rounded-lg text-base outline-none transition-colors"
                style={{
                  background: V("color-canvas-soft"),
                  border: `1px solid ${V("color-hairline")}`,
                  color: V("color-ink"),
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded"
                  style={{ color: V("color-mute") }}
                >
                  Clear
                </button>
              )}
            </div>
            {search && (
              <p
                className="mt-3 text-center"
                style={{
                  fontSize: "14px",
                  lineHeight: "22.4px",
                  color: V("color-mute"),
                }}
              >
                {filteredCount} {filteredCount === 1 ? "term" : "terms"} found
              </p>
            )}
          </div>

          {/* Alphabet quick-nav */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-12">
            {ALL_LETTERS.map((letter) => {
              const hasMatch = !!filteredGlossary[letter];
              return (
                <button
                  key={letter}
                  onClick={() => {
                    setActiveLetter(
                      activeLetter === letter ? null : letter
                    );
                    if (!hasMatch) return;
                    const el = document.getElementById(
                      `glossary-${letter}`
                    );
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  className="w-9 h-9 rounded-md flex items-center justify-center text-sm font-semibold transition-colors"
                  style={{
                    background:
                      activeLetter === letter
                        ? V("color-accent-blue")
                        : hasMatch
                          ? V("color-canvas-soft")
                          : V("color-canvas-mid"),
                    color:
                      activeLetter === letter
                        ? "#fff"
                        : hasMatch
                          ? V("color-ink")
                          : V("color-mute-soft"),
                    border:
                      activeLetter === letter
                        ? "none"
                        : `1px solid ${V("color-hairline")}`,
                    opacity: hasMatch ? 1 : 0.4,
                    cursor: hasMatch ? "pointer" : "default",
                  }}
                  disabled={!hasMatch}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Terms grouped by letter */}
          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            {Object.entries(filteredGlossary).length === 0 && (
              <div className="text-center py-16">
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.5,
                    color: V("color-mute"),
                  }}
                >
                  No terms found for &ldquo;{search}&rdquo;. Try a different
                  search.
                </p>
              </div>
            )}
            {Object.entries(filteredGlossary).map(([letter, terms]) => (
              <div
                key={letter}
                id={`glossary-${letter}`}
                className="mb-14"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold shrink-0"
                    style={{
                      background: V("color-accent-blue"),
                      color: "#fff",
                    }}
                  >
                    {letter}
                  </div>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: "32px",
                      fontWeight: 600,
                      lineHeight: "40px",
                      color: V("color-ink"),
                    }}
                  >
                    {letter}
                  </h2>
                  <div
                    className="h-px flex-1"
                    style={{ background: V("color-hairline") }}
                  />
                </div>

                <div className="space-y-8">
                  {terms.map((item) => (
                    <div key={item.term}>
                      <h3
                        className="font-heading mb-2"
                        style={{
                          fontSize: "20px",
                          fontWeight: 600,
                          lineHeight: "28px",
                          color: V("color-ink"),
                        }}
                      >
                        {item.term}
                      </h3>
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "25.6px",
                          color: V("color-body-mid"),
                        }}
                      >
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: V("color-canvas-soft"),
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
            Something missing?
          </h2>
          <p
            className="mb-8"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: V("color-body-mid"),
            }}
          >
            This glossary is always growing. If there&apos;s a term you think
            should be here, we&apos;d love to hear about it. We update our
            glossary regularly to keep pace with the evolving language of the
            web.
          </p>
          <a
            href="/contact"
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
            Suggest a term <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
