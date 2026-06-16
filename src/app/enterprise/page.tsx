"use client";

import { useState, useCallback, useRef, useEffect } from "react";

/* ─── CSS VAR ─── */
const V = (n: string) => `var(--${n})`;

/* ─── TYPOGRAPHY ─── */
const T = {
  h1: { fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em" } as React.CSSProperties,
  h2: { fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-0.01em" } as React.CSSProperties,
  h3: { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  h4: { fontSize: "18px", fontWeight: 600, lineHeight: "26px" } as React.CSSProperties,
  body: { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" } as React.CSSProperties,
  bodyLg: { fontSize: "18px", fontWeight: 400, lineHeight: "28.8px" } as React.CSSProperties,
  bodySm: { fontSize: "14px", fontWeight: 400, lineHeight: "22.4px" } as React.CSSProperties,
  caption: { fontSize: "12px", fontWeight: 550, lineHeight: "15.6px", letterSpacing: "0.06em", textTransform: "uppercase" } as React.CSSProperties,
  stat: { fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em" } as React.CSSProperties,
  btn: { fontSize: "15px", fontWeight: 500, padding: "14px 28px", borderRadius: "6px", lineHeight: 1.5 } as React.CSSProperties,
  btnSm: { fontSize: "14px", fontWeight: 500, padding: "10px 20px", borderRadius: "6px", lineHeight: 1.5 } as React.CSSProperties,
  pill: { fontSize: "12px", fontWeight: 600, lineHeight: "15.6px", textTransform: "uppercase", letterSpacing: "0.04em" } as React.CSSProperties,
};

/* ─── HELPERS ─── */
function Arrow() {
  return <span className="ml-1.5 text-[1.1em] leading-none select-none">&rarr;</span>;
}

function Kreature() {
  return (
    <>
      Kreature<span style={{ color: V("color-accent-blue") }}>.</span>
    </>
  );
}

/* ─── DATA ─── */

const TRUST_LOGOS = [
  { name: "IDEO", src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439dc_ideo-logo.svg" },
  { name: "monday.com", src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439c8_monday.com.svg" },
  { name: "BBDO", src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439db_bbdo-logo.svg" },
  { name: "The New York Times", src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439d9_nytimes.svg" },
  { name: "TED", src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439d8_TED.svg" },
  { name: "Docusign", src: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c9a39c128261b2128439c9_Docusign-dark.svg" },
];

const CUSTOMER_STATS = [
  { stat: "10x", label: "In cost savings annually", logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/ncr.svg", co: "NCR" },
  { stat: "67%", label: "decrease in dev ticketing", logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/dropbox.svg", co: "Dropbox" },
  { stat: "$6M", label: "in cost savings annually", logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/orangetheory.svg", co: "Orangetheory Fitness" },
  { stat: "56%", label: "increase in form fills", logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/walker-dunlop.svg", co: "Walker & Dunlop" },
  { stat: "1,170%", label: "increase in traffic YoY", logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/docusign.svg", co: "Docusign" },
  { stat: "$200M", label: "in new pipeline generated post-site launch", logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/abm.svg", co: "ABM" },
  { stat: "+20%", label: "increase in site-wide conversion", logo: "https://dhygzobemt712.cloudfront.net/Web/logos/dark/lattice.svg", co: "Lattice" },
];

const AUDIENCE_TABS = ["Marketing teams", "Design teams", "Engineering teams", "Agencies"] as const;
type AudienceTab = (typeof AUDIENCE_TABS)[number];

const AUDIENCE_CONTENT: Record<AudienceTab, {
  desc: string;
  cards: { img: string; title: string; desc: string }[];
}> = {
  "Marketing teams": {
    desc: "Kreature Enterprise gives marketing teams the flexibility, security, and reliability they need to scale innovative web experiences that drive growth in the age of AI.",
    cards: [
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8765bf6a6c347e70f6c6e_enterprise_marketing_card-1.webp",
        title: "Move quickly without sacrificing quality or process",
        desc: "Launch on-brand experiences fast. Kreature Enterprise delivers the marketing speed you need with the precision you demand. Built-in guardrails protect quality, while structured processes ensure speed without added risk.",
      },
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b88261f8c7c21aba34b5c6_enterprise_marketing_card-2.webp",
        title: "Turn traffic into revenue",
        desc: "Launch sophisticated web experiments seamlessly with native, AI-powered optimization tools. Kreature Enterprise helps ensure your digital experiences are both SEO/AEO-friendly and optimized for conversion.",
      },
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b882f910d563e95ccbda5a_e83cb76fa89d1fcaacab9786e3a2d693_enterprise_marketing_card-3.webp",
        title: "Reduce overhead with a single source of truth",
        desc: "Collaborate more effectively by uniting creative, marketing, and dev teams in one platform. With Kreature Enterprise, every team can move faster, together.",
      },
    ],
  },
  "Design teams": {
    desc: "Kreature Enterprise gives creative teams the flexibility, security, and reliability to scale brand-forward experiences in the age of AI — without compromising consistency or creative vision.",
    cards: [
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b883d9dc8b722410a21899_35c37d9b7605946a74dd948cea46fbb9_enterprise_creative_card-1.webp",
        title: "Create quickly without sacrificing quality or process",
        desc: "Visually build expressive, high-impact designs without adding to the engineering backlog. Your team can build independently and produce at scale, with the systems and approvals that ensure brand integrity.",
      },
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b883d9f033b2ef7b05badc_enterprise_creative_card-2.webp",
        title: "Deliver on-brand design that drives results",
        desc: "In Kreature Enterprise, creative work ships fast and contributes to performance. With testing and optimization tools built into the same platform, creative teams play an active role in improving outcomes.",
      },
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b883d94fca1911faa29707_eae8df813c11aed3db047feb0d3b2e16_enterprise_creative_card-3.webp",
        title: "Cut overhead for consistent, scalable design",
        desc: "Streamline creative collaboration by bringing creative, marketing, and dev teams together in one platform. With a shared workspace and centralized design system, design-to-development happens automatically.",
      },
    ],
  },
  "Engineering teams": {
    desc: "Kreature Enterprise gives engineering teams the control, scalability, and reliability they need to reduce non-core dev work — so they can focus on delivering business-critical value in the age of AI.",
    cards: [
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8855e1ac1da05909b7796_enterprise_engineering_card-1.webp",
        title: "Don't compromise on speed, quality, or control",
        desc: "Enable marketing speed without compromising developer control. Structured components and built-in governance let marketing ship independently without touching your backlog.",
      },
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8855e8a688214e05a36d9_enterprise_engineering_card-2.webp",
        title: "Connect content and data at enterprise scale",
        desc: "Kreature Enterprise unifies content, localization, and optimization in a single governed system. With robust APIs and seamless integrations, marketing can iterate at scale.",
      },
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8855ed7163b0079beed4b_enterprise_engineering_card-3.webp",
        title: "Consolidate infrastructure, cut overhead",
        desc: "Replace fragmented CMS, hosting, and deployment pipelines with one scalable platform. By reducing tool sprawl and maintenance burden, engineering teams spend less time on upkeep.",
      },
    ],
  },
  "Agencies": {
    desc: "Kreature Enterprise gives agencies the flexibility, control, and scalability they need to deliver high-impact work for the most complex clients.",
    cards: [
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8a2751f8d3ed2d425eb1b_platform_collaboration_tab-bg.webp",
        title: "Move quickly without sacrificing quality or process",
        desc: "Visually build expressive, high-impact designs without adding to the engineering backlog. Your team can build independently and produce at scale, with systems and approvals that ensure brand integrity.",
      },
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b85fc5f9848b1ef479189b_b6c48110dc5dcde22344aaa2f70d2686_cms_agencies_asset-2.webp",
        title: "Streamline client handoffs",
        desc: "Streamline creative collaboration by bringing agency and client teams together in one platform. With a shared workspace and centralized design system, handoffs become seamless.",
      },
      {
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b75833e49e173f396eefb4_c2c9b544f4db157064a4bb9deaf6b903_cms_scale_tab-4.webp",
        title: "Offer clients more than just design",
        desc: "Unify content, localization, and optimization in a single platform. With robust APIs and seamless integrations, Kreature fits into any client's tech stack.",
      },
    ],
  },
};

const CAPABILITY_TABS = [
  {
    id: "scalability",
    label: "Scalability",
    desc: "Empower your teams to build, manage, and optimize global digital experiences at scale.",
    cta: "Scale with Kreature",
    ctaHref: "/contact-sales",
    panels: [
      {
        title: "Scale content without constraints",
        desc: "Manage high volumes of CMS items, collections, and static pages on a new architecture built for enterprise scale. Kreature's next-gen CMS delivers greater flexibility, data capacity, and performance.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b877916c47fa0690bb65a2_33f70e27194a0da3ade03264cd4677f4_enterprise_scalability_card-1.webp",
      },
      {
        title: "Optimize across teams and markets",
        desc: "Measure and optimize digital experiences at enterprise scale — all within a centralized platform built for global operations.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b878d16c7a892b91c9ca0f_enterprise_scalability_card-2.webp",
        links: [
          { label: "Analyze", href: "/feature/analyze" },
          { label: "Optimize", href: "/feature/optimize" },
          { label: "Localization", href: "/feature/localization" },
        ],
      },
      {
        title: "Automate high-volume workflows",
        desc: "Streamline large-scale updates, publishing, and system integrations with high-capacity APIs that keep enterprise operations running smoothly at scale.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b8792bd9a2087b97bc3549_enterprise_scalability_card-3.webp",
        links: [{ label: "Explore API Docs", href: "#" }],
      },
    ],
  },
  {
    id: "governance",
    label: "Governance",
    desc: "Reduce risk with controls designed specifically for large teams.",
    cta: "Talk to an expert",
    ctaHref: "/contact-sales",
    panels: [
      {
        title: "Enforce control across teams",
        desc: "Give the right people the right level of access with granular permissions, custom roles, SSO, and SCIM. Empower teams to work confidently within guardrails.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87c690ce041dca223c813_fcaf91e0d2f69d22dbf0655cdc33503b_enterprise_governance_card-1.png",
      },
      {
        title: "Streamline enterprise-grade workflows",
        desc: "Ensure changes go through the right process — from first draft to final publish. Kreature helps large teams collaborate safely with workflows that support reviews, approvals, branching, and staging.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87c69f5cfd8af13c37ed7_7de124e0aa35a380a788339409493692_enterprise_governance_card-2.webp",
      },
      {
        title: "Stay compliant and audit-ready",
        desc: "Maintain visibility with detailed logs, version history, or via the audit log API — you'll have the transparency and traceability you need.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87c69fd40148183ae24f1_9747013c1305954fbdae19042ea6495a_enterprise_governance_card-3.webp",
      },
    ],
  },
  {
    id: "hosting",
    label: "Managed hosting & security",
    desc: "Scale confidently with fully-managed hosting including world-class security, performance, and reliability.",
    cta: "Talk to a hosting expert",
    ctaHref: "/contact-sales",
    panels: [
      {
        title: "Focus on building, not maintenance",
        desc: "Ensure site stability with SLAs for both hosting and application uptime, backed by Kreature's fully managed infrastructure.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87db9ab811d813f823b25_enterprise_hosting_card-1.webp",
        links: [{ label: "Discover hosting", href: "/feature/hosting" }],
      },
      {
        title: "Align security with enterprise standards",
        desc: "Configure custom SSL certificates, security headers, and access controls to meet your organization's standards and stay compliant.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87db8d9bdd8c981926722_enterprise_hosting_card-2.webp",
        links: [{ label: "Explore the Trust Center", href: "/trust" }],
      },
      {
        title: "Built for risk-aware teams",
        desc: "Satisfy security reviews with access to Kreature's Enterprise Whistic profile, plus defined incident response SLAs and a clear escalation path.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87db8e170e1ddf8f39cfb_fda970d9f686ef7f02c51e89d46dcf35_enterprise_hosting_card-3.webp",
      },
    ],
  },
  {
    id: "extensibility",
    label: "Extensibility",
    desc: "Integrate Kreature with your existing tech stack — no matter how complex.",
    cta: "Get connected",
    ctaHref: "/contact-sales",
    panels: [
      {
        title: "Connect Kreature to your tech stack",
        desc: "Seamlessly connect with marketing, data, and operational systems — through native integrations with Marketo, Figma, and React, vetted 3rd-party apps, or custom integrations with robust, MACH-certified APIs.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87fac5bb1c6e06c5084d2_f333d5bdf286abdf3b7aff0def0fdf04_enterprise_extensibility_card-1.webp",
      },
      {
        title: "Bring full-stack web apps to your website experience",
        desc: "Deploy full-stack applications and dynamic web experiences alongside your Kreature site — maintaining brand consistency at scale while eliminating complexity across separate systems.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87facf5cfd8af13c4790e_4da0cb8a847f0c874ddbd833740800d0_enterprise_extensibility_card-2.webp",
        links: [{ label: "Discover Kreature Cloud", href: "/feature/cloud" }],
      },
      {
        title: "Extend your design system with code components",
        desc: "Use developer-built React components directly in Kreature's canvas to scale bespoke, on-brand UI across sites, campaigns, and markets.",
        img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b87facb3f9ea60d54bebe3_56a8d578a97c8d7f810f537c5dac5fb0_enterprise_extensibility_card-3.webp",
      },
    ],
  },
];

const SUPPORT_FEATURES = [
  {
    icon: "https://dhygzobemt712.cloudfront.net/Icons/Light/64px/TimeWatch.svg",
    title: "24/7 tailored customer service",
    desc: "Get 24/7 support from a team that understands your needs. Work through any problem with help from a real person, at any time.",
  },
  {
    icon: "https://dhygzobemt712.cloudfront.net/Icons/Light/64px/HandHug.svg",
    title: "A dedicated customer success manager",
    desc: "Work with a dedicated customer success manager to meet your business goals and maximize your investment in Kreature Enterprise.",
  },
  {
    icon: "https://dhygzobemt712.cloudfront.net/Icons/Light/64px/ToolNut.svg",
    title: "Solutions architects",
    desc: "Consult with a solutions architect to streamline your implementation and get guidance and expertise to scale your use of Kreature Enterprise.",
  },
];

const TESTIMONIALS = [
  {
    stat: "32",
    label: "global sites launched in 10 days",
    quote: "With Kreature, we're not just keeping up, we're setting the pace. It's the speedboat that's helping us move faster than ever before.",
    name: "Rob Alfano",
    role: "VP of Digital Marketing",
    co: "Verifone",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/light/verifone.svg",
    img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/696fe69ed48d51a111c2baa2_customer-stories_verifone.avif",
  },
  {
    stat: "20%",
    label: "Increase in site-wide conversion",
    quote: "With Kreature, we've significantly improved organic traffic, SEO, and conversions. From my perspective as CMO, that's a huge win because our brand is reaching more people.",
    name: "Elizabeth Walton Egan",
    role: "CMO",
    co: "Lattice",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/light/lattice.svg",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68b065e3cee20f75820054b6_feature-image-lattice.webp",
  },
  {
    stat: "$6M",
    label: "in cost savings annually",
    quote: "We're saving upwards of $6 million a year with Kreature, and we've reinvested those savings in other areas like website optimization and localization.",
    name: "Malcolm Greene",
    role: "Chief Information Officer",
    co: "Orangetheory Fitness",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/light/orangetheory.svg",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68b9969033c7fa0eb2c29c2f_feature-image-orangetheory.webp",
  },
  {
    stat: "98%",
    label: "Increase in speed to market",
    quote: "With Kreature Enterprise, we're able to move with trust and confidence that things will get done quickly without compromising our brand or draining resources.",
    name: "Cat Origitano",
    role: "VP of Product & Portfolio Marketing",
    co: "Fivetran",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/light/fivetran.svg",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68b065e3cee20f75820054a0_feature-image-fivetran.webp",
  },
  {
    stat: "56%",
    label: "Increase in form fills",
    quote: "Kreature empowers us to do what we do best as marketers, designers, and content creators: It strips away the technical complexity and unleashes us to be creative.",
    name: "Kokko Tso",
    role: "VP Digital Marketing",
    co: "Walker & Dunlop",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/light/walker-dunlop.svg",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68b065e3cee20f75820054b9_feature-image-walkerdunlop.webp",
  },
  {
    stat: "10x",
    label: "cost savings in agency fees",
    quote: "Kreature eliminates the traditionally gated processes of web development. Building for the web is no longer rigid — it's a more fluid, collaborative process.",
    name: "Dan Dawson",
    role: "Sr. Manager of Digital Properties",
    co: "NCR",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/light/ncr.svg",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68c03e9869a6a5a0803845db_NCR-optimized.webp",
  },
  {
    stat: "1,170%",
    label: "increase in traffic YoY",
    quote: "Kreature doesn't just allow you to work faster and easier, but differently. Speed is huge, but once you get engineers, designers, and copywriters to really enjoy working together, that's something different.",
    name: "Carla Weis",
    role: "VP, Brand & Creative",
    co: "Docusign",
    logo: "https://dhygzobemt712.cloudfront.net/Web/logos/light/docusign.svg",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68bf1a67e66e34b3ddf5712e_author_carla-weis.webp",
  },
];

const FAQ_ITEMS = [
  {
    q: "What's the difference between Kreature Enterprise and standard Kreature plans?",
    a: "Along with everything included in standard plans, Enterprise plans provide the scale, collaboration tools, security, and support that large organizations need. This includes higher bandwidth, flexible pricing, pooled product usage across teams, page branching, publishing workflows, custom roles, SSO, SCIM, SOC 2 Type II compliance, a dedicated CSM, onboarding support, and Enterprise SLAs.",
  },
  {
    q: "How does Kreature Enterprise handle security and compliance for large organizations?",
    a: "Kreature Enterprise meets strict enterprise security requirements with SOC 2 Type II certification, SSO integration, and automated user provisioning via SCIM and JIT. Sites are protected by AWS- and Cloudflare-powered DDoS mitigation, TLS/SSL traffic encryption, and optional custom SSL certificates and security headers.",
  },
  {
    q: "Can Kreature Enterprise integrate with our existing enterprise tools and custom APIs?",
    a: "Yes. Kreature Enterprise supports native integrations directly in the Designer so marketers can easily connect existing tools — like HubSpot, Marketo, and Google Analytics — without engineering support. For deeper customization, Kreature's robust, MACH-aligned API platform lets engineering teams build custom integrations.",
  },
  {
    q: "What kind of dedicated support does Kreature Enterprise provide?",
    a: "Kreature Enterprise plans include a dedicated Customer Success Manager, tailored onboarding through Kreature University Pro, and access to technical consulting with Kreature Solutions Architects. Enterprise customers also get priority support through a dedicated queue.",
  },
  {
    q: "How scalable is Kreature Enterprise for high-traffic sites and multiple teams?",
    a: "Kreature Enterprise is hosted on AWS and delivered through Cloudflare's global CDN, with automatic traffic scaling, sub-50ms global reach, and 99.99% uptime SLAs. For teams, the platform supports multiple sites within a single Workspace, plus features like shared design system libraries, page branching, custom roles, and publishing workflows.",
  },
];

const RESOURCES = [
  {
    tag: "Webinars",
    title: "How CMOs are rethinking marketing in the AI era",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/69f391433a2f81395bbbca4f_Type%3DGeneral%2C%20Sub-type%3DNone%2C%20Dimensions%3D16x9.jpg",
    href: "/resources/webinars/how-cmos-are-rethinking-marketing-in-the-ai-era-webinar",
  },
  {
    tag: "Webinars",
    title: "Building AEO systems that scale",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/6a2058bbf6f44d5c917419c2_Type%3DGeneral%2C%20Sub-type%3DNone%2C%20Dimensions%3D16x9.png",
    href: "/resources/webinars/building-aeo-systems-that-scale-webinar",
  },
  {
    tag: "Webinars",
    title: "Kreature AEO: From insight to action, at scale",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/6a2836db18052e4f831a56de_Type%3DGeneral%2C%20Sub-type%3DNone%2C%20Dimensions%3D16x9.jpg",
    href: "/resources/webinars/kreature-aeo-from-insight-to-action-at-scale-webinar",
  },
  {
    tag: "Ebooks",
    title: "How to use AEO to power growth for your agency",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/6a0cb51c86958a7153386d18_eBook_The-AEO-Playbook_web_thumbnail_1000x1000.png",
    href: "/resources/ebooks/aeo-agency",
  },
  {
    tag: "Webinars",
    title: "What actually earns AI search visibility",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/69dd85e5e9eff5e91feb7cd6_Type%3DGeneral%2C%20Sub-type%3DNone%2C%20Dimensions%3D16x9.jpg",
    href: "/resources/webinars/what-actually-earns-ai-search-visibility-webinar",
  },
  {
    tag: "Webinars",
    title: "AEO as a growth channel",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/69dd83d17c489cefb74c3bc6_Type%3DGeneral%2C%20Sub-type%3DNone%2C%20Dimensions%3D16x9.jpg",
    href: "/resources/webinars/aeo-as-a-growth-channel-webinar",
  },
  {
    tag: "Webinars",
    title: "How AI decides what to trust",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/69b87d15359b9dcd0aa9fa34_Type%3DGeneral%2C%20Sub-type%3DNone%2C%20Dimensions%3D16x9.jpg",
    href: "/resources/webinars/how-ai-decides-what-to-trust",
  },
  {
    tag: "Webinars",
    title: "What an AI-ready website looks like at global scale",
    img: "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/6996594df27a15220a9c456a_Type%3DGeneral%2C%20Sub-type%3DNone%2C%20Dimensions%3D16x9.jpg",
    href: "/resources/webinars/what-an-ai-ready-website-looks-like-at-global-scale-webinar",
  },
];

const MADE_IN_KREATURE_SITES = [
  { name: "Ramp", img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68d69490cd3566426dcdb55f_miw-site_ramp.avif" },
  { name: "Lattice", img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b854486356004056513a9a_ea808fc9bc751aae4b1cfde3634e1144_interactions-hero-03.avif" },
  { name: "Orangetheory", img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68d69491231ccd6f43a6d2e7_miw-site_orange-theory.avif" },
  { name: "Walker & Dunlop", img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68d694918e02e5dcb77a832b_miw-site_walker-dunlop.avif" },
  { name: "Docusign", img: "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68d6962305367651e38ad105_miw-site_docusign-brand.avif" },
];

const FOOTER_LINKS: Record<string, string[]> = {
  Product: ["Platform", "Design", "Edit content", "Interactions", "GSAP", "Page building", "Shared Libraries", "Collaboration", "CMS", "Hosting", "Localization", "Security", "Ecommerce", "Analyze", "Optimize", "SEO", "AEO", "Kreature Cloud", "DevLink", "Figma to Kreature", "Accessibility", "AI"],
  Solutions: ["Enterprise", "Startups", "Global alliances", "Agencies", "Freelancers"],
  Resources: ["University", "Blog", "Customer stories", "Webinars & ebooks", "Apps", "Libraries", "Templates", "Developers", "Made in Kreature", "Glossary", "Livestreams", "The Kreature Way"],
  Company: ["About", "Careers", "Press", "Kreature Ventures", "Kreature Shop", "Terms of Service", "Privacy policy", "Cookie policy", "Accessibility statement"],
  Compare: ["Contentful", "Framer", "Sitecore", "Wix", "WordPress"],
  Community: ["Discover the community", "Partner with Kreature", "Certified Partners", "Become a template designer", "Become an affiliate", "Become a Global Leader", "Find a meetup near you"],
  "Get help": ["Support", "Pricing", "Status", "Community Homebase", "Wishlist"],
};

/* ─── COMPONENTS ─── */

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)] ${className ?? ""}`}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── PAGE ─── */

export default function EnterprisePage() {
  const [audience, setAudience] = useState<AudienceTab>("Marketing teams");
  const [capability, setCapability] = useState("scalability");
  const [capPanel, setCapPanel] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statScroll, setStatScroll] = useState(0);
  const statTrackRef = useRef<HTMLDivElement>(null);

  const activeCap = CAPABILITY_TABS.find((c) => c.id === capability)!;
  const activePanel = activeCap.panels[capPanel];

  const prevTestimonial = () => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);

  const scrollStats = (dir: 1 | -1) => {
    const newVal = statScroll + dir;
    const max = CUSTOMER_STATS.length - 1;
    setStatScroll(Math.max(0, Math.min(newVal, max)));
  };

  useEffect(() => {
    if (statTrackRef.current) {
      const cardWidth = 320;
      statTrackRef.current.style.transform = `translateX(-${statScroll * cardWidth}px)`;
    }
  }, [statScroll]);

  return (
    <div className="page-wrapper" style={{ background: V("color-ink"), color: V("color-body") }}>
      <main>
        {/* ─── HERO ─── */}
        <section className="px-5 sm:px-8 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-4" style={{ ...T.caption, color: V("color-mute-soft") }}>
                  Kreature Enterprise
                </p>
                <h1 className="mb-6" style={{ ...T.h1, color: V("color-canvas") }}>
                  Enterprise scale, unmatched impact
                </h1>
                <p className="mb-8 max-w-[500px]" style={{ ...T.bodyLg, color: V("color-mute-soft") }}>
                  Turn your brand's creative vision into dynamic web experiences that drive real results with an AI-native platform that scales across your entire organization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact-sales" className="inline-flex items-center transition-all hover:brightness-110" style={{ ...T.btn, background: V("color-accent-blue"), color: "#fff" }}>
                    Contact sales
                  </a>
                  <a href="/product-tour" className="inline-flex items-center transition-all" style={{ ...T.btn, background: "transparent", color: V("color-canvas"), border: `1px solid rgba(255,255,255,0.15)` }}>
                    Watch demo
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68d6dc890bcbd955dc3f9c0a_d25d48850b61554fb4f25f3b14f1d9b5_entperise-hero_abm.avif"
                  alt="Enterprise team working on website"
                  className="rounded-lg w-full"
                  style={{ borderRadius: "12px" }}
                />
                <img
                  src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68d6ddb9988f68493e7ae69b_ecb477f05859315ea8abdb603763b6dd_entperise-hero_abm-laptop.avif"
                  alt="Laptop showing enterprise site"
                  className="rounded-lg absolute -bottom-6 -left-6 w-[55%] shadow-xl hidden lg:block"
                  style={{ borderRadius: "8px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
                />
              </div>
            </div>

            {/* Trust bar */}
            <div className="mt-16 pt-12" style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }}>
              <p className="text-center mb-8" style={{ ...T.bodySm, color: V("color-mute") }}>
                Trusted by teams at
              </p>
              <div className="flex flex-wrap gap-8 items-center justify-center opacity-60">
                {TRUST_LOGOS.map((l) => (
                  <img key={l.name} src={l.src} alt={l.name} className="h-6 w-auto" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CUSTOMER RESULTS SCROLLER ─── */}
        <section className="py-12 overflow-hidden" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => scrollStats(-1)}
                disabled={statScroll === 0}
                className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all disabled:opacity-30"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: V("color-mute-soft") }}
                aria-label="Scroll stats left"
              >
                &larr;
              </button>
              <div className="overflow-hidden flex-1">
                <div ref={statTrackRef} className="flex gap-4 transition-transform duration-500 ease-out" style={{ width: "max-content" }}>
                  {CUSTOMER_STATS.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-6 flex flex-col justify-between shrink-0"
                      style={{ width: 304, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                    >
                      <img src={item.logo} alt={item.co} className="h-5 w-auto mb-4 opacity-60" />
                      <div>
                        <div style={{ ...T.stat, color: V("color-canvas") }}>{item.stat}</div>
                        <div style={{ ...T.bodySm, color: V("color-mute") }}>{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => scrollStats(1)}
                disabled={statScroll >= CUSTOMER_STATS.length - 1}
                className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all disabled:opacity-30"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: V("color-mute-soft") }}
                aria-label="Scroll stats right"
              >
                &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* ─── AUDIENCE TABS ─── */}
        <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="mb-2" style={{ ...T.h2, color: V("color-canvas") }}>
              The platform for modern
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {AUDIENCE_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setAudience(tab)}
                  className="transition-all px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: audience === tab ? "rgba(255,255,255,0.1)" : "transparent",
                    color: audience === tab ? V("color-canvas") : V("color-mute-soft"),
                    border: `1px solid ${audience === tab ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)"}`,
                    fontSize: 14,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className="mb-12 max-w-[650px]" style={{ ...T.bodyLg, color: V("color-mute-soft") }}>
              {AUDIENCE_CONTENT[audience].desc}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {AUDIENCE_CONTENT[audience].cards.map((card, i) => (
                <div key={i} className="rounded-lg overflow-hidden" style={{ borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
                  <img src={card.img} alt="" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="mb-3" style={{ ...T.h4, color: V("color-canvas") }}>
                      {card.title}
                    </h3>
                    <p style={{ ...T.bodySm, color: V("color-mute") }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CAPABILITY TABS ─── */}
        <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="mb-3" style={{ ...T.h2, color: V("color-canvas") }}>
              Complexity shouldn't slow creativity
            </h2>
            <p className="mb-10" style={{ ...T.bodyLg, color: V("color-mute-soft") }}>
              Kreature Enterprise helps big brands meet their web needs today — and tomorrow.
            </p>

            {/* Capability nav */}
            <div className="flex flex-wrap gap-2 mb-10">
              {CAPABILITY_TABS.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => { setCapability(cap.id); setCapPanel(0); }}
                  className="transition-all px-5 py-2.5 rounded-full text-sm font-medium"
                  style={{
                    background: capability === cap.id ? "rgba(255,255,255,0.1)" : "transparent",
                    color: capability === cap.id ? V("color-canvas") : V("color-mute-soft"),
                    border: `1px solid ${capability === cap.id ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)"}`,
                    fontSize: 14,
                  }}
                >
                  {cap.label}
                </button>
              ))}
            </div>

            <p className="mb-4 max-w-[600px]" style={{ ...T.body, color: V("color-mute-soft") }}>
              {activeCap.desc}
            </p>
            <a href={activeCap.ctaHref} className="inline-flex items-center mb-10 transition-all" style={{ ...T.bodySm, fontWeight: 500, color: V("color-accent-blue") }}>
              {activeCap.cta} <Arrow />
            </a>

            {/* Panel sub-nav */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              {activeCap.panels.map((panel, i) => (
                <button
                  key={i}
                  onClick={() => setCapPanel(i)}
                  className="shrink-0 transition-all text-left"
                  style={{ opacity: capPanel === i ? 1 : 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: capPanel === i ? V("color-accent-blue") : "rgba(255,255,255,0.2)" }}
                    />
                    <span style={{ ...T.bodySm, fontWeight: 500, color: V("color-canvas") }}>{panel.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Panel content */}
            <div className="rounded-lg overflow-hidden" style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col justify-center">
                  <h3 className="mb-4" style={{ ...T.h3, color: V("color-canvas") }}>
                    {activePanel.title}
                  </h3>
                  <p className="mb-6" style={{ ...T.body, color: V("color-mute") }}>
                    {activePanel.desc}
                  </p>
                  {"links" in activePanel && activePanel.links && (
                    <div className="flex flex-wrap gap-4">
                      {activePanel.links.map((link, j) => (
                        <a key={j} href={link.href} className="inline-flex items-center transition-all" style={{ ...T.bodySm, fontWeight: 500, color: V("color-accent-blue") }}>
                          {link.label} <Arrow />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <img src={activePanel.img} alt="" className="rounded-lg w-full max-h-[400px] object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ENTERPRISE SUPPORT ─── */}
        <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="mb-3" style={{ ...T.h2, color: V("color-canvas") }}>
              A platform that powers growth. A partner that supports it.
            </h2>
            <p className="mb-10 max-w-[650px]" style={{ ...T.bodyLg, color: V("color-mute-soft") }}>
              From implementation support to in-the-moment troubleshooting, we're here to help you build, scale, and optimize your digital experiences.
            </p>
            <a href="/enterprise/experience-success" className="inline-flex items-center mb-12 transition-all" style={{ ...T.bodySm, fontWeight: 500, color: V("color-accent-blue") }}>
              Explore Enterprise Success <Arrow />
            </a>
            <div className="grid md:grid-cols-3 gap-8">
              {SUPPORT_FEATURES.map((f, i) => (
                <div key={i} className="text-center">
                  <img src={f.icon} alt="" className="w-12 h-12 mx-auto mb-5 opacity-80" />
                  <h3 className="mb-3" style={{ ...T.h4, color: V("color-canvas") }}>
                    {f.title}
                  </h3>
                  <p style={{ ...T.bodySm, color: V("color-mute") }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS CAROUSEL ─── */}
        <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="mb-10" style={{ ...T.h2, color: V("color-canvas") }}>
              300,000 powerful brands, powered by <Kreature />
            </h2>

            <div className="relative rounded-lg overflow-hidden" style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img src={TESTIMONIALS[testimonialIdx].img} alt="" className="w-full h-full object-cover" style={{ minHeight: 400 }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,8,0) 60%, rgba(8,8,8,1) 100%)" }} />
                </div>
                <div className="p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col justify-center">
                  <img src={TESTIMONIALS[testimonialIdx].logo} alt={TESTIMONIALS[testimonialIdx].co} className="h-6 w-auto mb-6 opacity-70" />
                  <div className="mb-4">
                    <div style={{ ...T.stat, color: V("color-canvas") }}>{TESTIMONIALS[testimonialIdx].stat}</div>
                    <div style={{ ...T.bodySm, color: V("color-mute") }}>{TESTIMONIALS[testimonialIdx].label}</div>
                  </div>
                  <blockquote className="mb-6" style={{ ...T.body, color: V("color-mute-soft") }}>
                    &ldquo;{TESTIMONIALS[testimonialIdx].quote}&rdquo;
                  </blockquote>
                  <div style={{ ...T.bodySm, fontWeight: 500, color: V("color-canvas") }}>
                    {TESTIMONIALS[testimonialIdx].name}
                  </div>
                  <div style={{ ...T.bodySm, color: V("color-mute") }}>
                    {TESTIMONIALS[testimonialIdx].role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button onClick={prevTestimonial} className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:border-current" style={{ borderColor: "rgba(255,255,255,0.1)", color: V("color-mute-soft") }} aria-label="Previous testimonial">
                &larr;
              </button>
              <button onClick={nextTestimonial} className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:border-current" style={{ borderColor: "rgba(255,255,255,0.1)", color: V("color-mute-soft") }} aria-label="Next testimonial">
                &rarr;
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)} className="rounded-full transition-all" style={{ width: i === testimonialIdx ? 20 : 8, height: 8, background: i === testimonialIdx ? V("color-canvas") : "rgba(255,255,255,0.15)" }} aria-label={`Testimonial ${i + 1}`} />
                ))}
              </div>
            </div>

            <p className="mt-10 text-center" style={{ ...T.body, color: V("color-mute-soft") }}>
              <a href="/contact-sales" className="inline-flex items-center transition-all" style={{ color: V("color-accent-blue"), fontWeight: 500 }}>
                Talk to us <Arrow />
              </a>
              {" "}about how Kreature can unlock impact for your team.
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-center mb-12" style={{ ...T.h2, color: V("color-canvas") }}>
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="rounded-lg overflow-hidden" style={{ borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    style={{ color: V("color-canvas") }}
                  >
                    <span style={{ ...T.body, fontWeight: 500 }}>{item.q}</span>
                    <span className="shrink-0 text-xl transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", color: V("color-mute") }}>
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5" style={{ ...T.body, color: V("color-mute") }}>
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BUSINESS VALUE CALCULATOR ─── */}
        <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-lg overflow-hidden grid md:grid-cols-2" style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <div className="p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col justify-center">
                <h3 className="mb-3" style={{ ...T.h2, color: V("color-canvas") }}>
                  See the business impact of moving to Kreature
                </h3>
                <p className="mb-6" style={{ ...T.body, color: V("color-mute") }}>
                  Use this calculator to estimate the impact of Kreature's platform on your goals — backed by real-world results.
                </p>
                <a href="/migrate/business-value-calculator" className="inline-flex items-center transition-all" style={{ ...T.bodySm, fontWeight: 500, color: V("color-accent-blue") }}>
                  Use the calculator <Arrow />
                </a>
              </div>
              <div className="flex items-center justify-center p-6">
                <img src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/695e887fc945b678052de100_verifone.avif" alt="Verifone" className="rounded-lg w-full max-h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRODUCT TOUR ─── */}
        <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="mb-3" style={{ ...T.h2, color: V("color-canvas") }}>
              Kreature in action
            </h2>
            <p className="mb-8 max-w-[600px] mx-auto" style={{ ...T.bodyLg, color: V("color-mute-soft") }}>
              In this demo video, you'll learn how to build, manage, and optimize websites that convert.
            </p>
            <a href="/product-tour" className="inline-flex items-center transition-all" style={{ ...T.bodySm, fontWeight: 500, color: V("color-accent-blue") }}>
              Explore the product tour <Arrow />
            </a>
            <img
              src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68949e086d62de50b6f450a1_cta-image.avif"
              alt="Dashboard preview"
              className="mt-10 rounded-lg w-full max-w-[900px] mx-auto"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </section>

        {/* ─── RESOURCES ─── */}
        <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,6rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="mb-3" style={{ ...T.h2, color: V("color-canvas") }}>
              The future of the web is yours to build
            </h2>
            <p className="mb-10 max-w-[600px]" style={{ ...T.bodyLg, color: V("color-mute-soft") }}>
              Explore whitepapers, ebooks, and more about creating web experiences that get results with Kreature.
            </p>
            <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
              {RESOURCES.map((r, i) => (
                <a
                  key={i}
                  href={r.href}
                  className="rounded-lg overflow-hidden shrink-0 group transition-all hover:brightness-110"
                  style={{ width: 280, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", scrollSnapAlign: "start" }}
                >
                  <img src={r.img} alt="" className="w-full h-40 object-cover" />
                  <div className="p-5">
                    <div className="mb-2" style={{ ...T.pill, color: V("color-accent-blue") }}>{r.tag}</div>
                    <h4 style={{ ...T.h4, color: V("color-canvas"), fontSize: "16px", lineHeight: "22px" }}>{r.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BOTTOM CTA ─── */}
        <section className="px-5 sm:px-8 py-[clamp(4rem,10vw,8rem)]" style={{ background: V("color-ink") }}>
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="mb-3" style={{ ...T.h2, color: V("color-canvas") }}>
              Get a demo
            </h2>
            <p className="mb-8 max-w-[550px] mx-auto" style={{ ...T.bodyLg, color: V("color-mute-soft") }}>
              Discover what's possible with Kreature Enterprise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="/contact-sales" className="inline-flex items-center transition-all hover:brightness-110" style={{ ...T.btn, background: V("color-accent-blue"), color: "#fff" }}>
                Talk to sales
              </a>
              <a href="/product-tour" className="inline-flex items-center transition-all" style={{ ...T.btn, background: "transparent", color: V("color-canvas"), border: "1px solid rgba(255,255,255,0.15)" }}>
                Watch demo video
              </a>
            </div>

            {/* Made in Kreature sites */}
            <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
              {MADE_IN_KREATURE_SITES.map((site, i) => (
                <div key={i} className="rounded-lg overflow-hidden shrink-0" style={{ width: 200, borderRadius: "8px" }}>
                  <img src={site.img} alt={site.name} className="w-full h-32 object-cover" />
                  <div className="p-2 text-xs font-medium" style={{ color: V("color-mute") }}>{site.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 px-5 sm:px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: V("color-ink") }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
            {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="mb-6" style={{ fontSize: "16px", fontWeight: 500, color: V("color-canvas") }}>
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm hover:underline inline-flex items-center gap-1" style={{ ...T.bodySm, color: V("color-mute") }}>
                        {item}
                        {item === "AEO" && <span className="text-[0.6rem] font-semibold uppercase" style={{ color: V("color-accent-blue") }}>New</span>}
                        {item === "Careers" && <span className="text-[0.6rem] font-semibold uppercase" style={{ color: V("color-accent-green") }}>We're hiring</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: "12px", color: V("color-mute") }}>
              &copy; {new Date().getFullYear()} Kreature, Inc. All rights reserved
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: "12px", color: V("color-mute") }}>
              <a href="#" className="hover:underline">Made in Kreature</a>
              {["YouTube", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map((p) => (
                <a key={p} href="#" className="hover:underline">{p}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
