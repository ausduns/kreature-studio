"use client";

import { useState, useCallback } from "react";

/* ─── CDN ─── */
const CDN = "https://cdn.prod.website-files.com/686294e263eb7e215bd232f7";
const LOGO = "https://dhygzobemt712.cloudfront.net/Web/logos/dark";

/* ─── EXACT STYLES (extracted from live kreature.com at 1440px) ─── */
const S = {
  h2:  { fontSize: "56px", fontWeight: 600, lineHeight: "58.24px", letterSpacing: "normal" } as React.CSSProperties,
  h3:  { fontSize: "20px", fontWeight: 600, lineHeight: "28px" } as React.CSSProperties,
  heroSub: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
  bodyLg: { fontSize: "20px", lineHeight: 1.5 } as React.CSSProperties,
  body:  { fontSize: "16px", fontWeight: 400, lineHeight: "25.6px", letterSpacing: "-0.16px" } as React.CSSProperties,
  bodySm:{ fontSize: "14px", lineHeight: "22.4px" } as React.CSSProperties,
  caption:{ fontSize:"12.8px", fontWeight:550, lineHeight:"15.36px" } as React.CSSProperties,
  btn:   { fontSize:"16px", fontWeight:500, lineHeight:"19.2px", letterSpacing:"-0.16px", padding:"16px 24px", borderRadius:"4px" } as React.CSSProperties,
  navLink:{ fontSize:"14px", fontWeight:500, lineHeight:"22.4px" } as React.CSSProperties,
};

/* ─── DATA ─── */
type Team = "Marketing" | "Design" | "Engineering" | "Agency";

const LOGOS = [
  { name:"Verifone", src:`${LOGO}/verifone.svg`, stat:"", sub:"" },
  { name:"NCR", src:`${LOGO}/ncr.svg`, stat:"10x", sub:"In cost savings annually" },
  { name:"monday.com", src:`${LOGO}/monday.svg`, stat:"", sub:"" },
  { name:"Spotify", src:`${LOGO}/spotify.svg`, stat:"", sub:"" },
  { name:"TED", src:`${LOGO}/ted.svg`, stat:"", sub:"" },
  { name:"Dropbox", src:`${LOGO}/dropbox.svg`, stat:"67%", sub:"decrease in dev ticketing" },
  { name:"Greenhouse", src:`${LOGO}/greenhouse.svg`, stat:"", sub:"" },
  { name:"Clear", src:`${LOGO}/clear.svg`, stat:"", sub:"" },
  { name:"OrangeTheory", src:`${LOGO}/orangetheory.svg`, stat:"$6M", sub:"in cost savings annually" },
  { name:"Checkout.com", src:`${LOGO}/checkout.svg`, stat:"", sub:"" },
  { name:"SoundCloud", src:`${LOGO}/soundcloud.svg`, stat:"", sub:"" },
  { name:"Walker & Dunlop", src:`${LOGO}/walker-dunlop.svg`, stat:"56%", sub:"increase in form fills" },
  { name:"Reddit", src:`${LOGO}/reddit.svg`, stat:"", sub:"" },
  { name:"Docusign", src:`${LOGO}/docusign.svg`, stat:"1,170%", sub:"increase in traffic YoY" },
  { name:"ABM", src:`${LOGO}/abm.svg`, stat:"$200M", sub:"in new pipeline generated" },
  { name:"NYT", src:`${LOGO}/the-new-york-times.svg`, stat:"", sub:"" },
  { name:"IDEO", src:`${LOGO}/ideo.svg`, stat:"", sub:"" },
  { name:"Upwork", src:`${LOGO}/upwork.svg`, stat:"", sub:"" },
  { name:"Discord", src:`${LOGO}/discord.svg`, stat:"", sub:"" },
  { name:"Lattice", src:`${LOGO}/lattice.svg`, stat:"+20%", sub:"increase in site-wide conversion" },
];

const PLATFORM = [
  { title:"Build together", desc:"Bring team members and AI agents into one shared workspace, with design systems to keep everything on brand.", cta:"Start building", img:`${CDN}/68b84cae6b5dd841d1e9fc49_home_platform_card-1.webp` },
  { title:"Publish at scale", desc:"Create and manage content in a visual, composable CMS — with built-in SEO and AEO to reach humans and machines alike.", cta:"Start publishing", img:`${CDN}/68b84e1aa441592c04ada2ed_home_platform_card-2.webp` },
  { title:"Optimize for growth", desc:"Turn every page into a revenue driver with native analytics and AI that show you what's working and help you scale it.", cta:"Start optimizing", img:`${CDN}/68c632d3ac920cf61b28450c_home_platform_card-3.webp` },
];

const AI_FEATURES = [
  { title:"Build", desc:"Create a site and design system from the ground up, modify it easily, and generate clean code to power dynamic experiences.", img:`${CDN}/68c633811e147b0ee1eb6e8a_e89f192c37050ced888b8c808ac27d4f_home_ai-module_build.webp` },
  { title:"Manage", desc:"Generate copy and CMS collection items individually or in bulk to keep your site fresh, drive traffic, and strengthen your brand.", img:`${CDN}/68c63381f6811a2b551391f0_e3cc7a1e5ff8216b9b9f990cdbea2567_home_ai-module_manage.webp` },
  { title:"Optimize", desc:"Turn traffic into revenue. Native tools run experiments, personalize by audience, and optimize for traditional search and LLMs.", img:`${CDN}/68c633817929cdfb716827d7_4bf237a8f14e32657fa1d915ccc2d9ba_home_ai-module_optimize.webp` },
];

const TESTIMONIALS = [
  { stat:"32", label:"global sites launched in 10 days", quote:"With Kreature, we're not just keeping up, we're setting the pace. It's the speedboat that's helping us move faster than ever before.", name:"Rob Alfano", role:"VP of Digital Marketing", co:"Verifone", logo:`${LOGO}/verifone.svg`, img:`${CDN}/696fe69ed48d51a111c2baa2_customer-stories_verifone.avif` },
  { stat:"20%", label:"Increase in site-wide conversion", quote:"With Kreature, we've significantly improved organic traffic, SEO, and conversions. From my perspective as CMO, that's a huge win because our brand is reaching more people.", name:"Elizabeth Walton Egan", role:"CMO", co:"Lattice", logo:`${LOGO}/lattice.svg`, img:`${CDN}/687e8d1b96312cc631cafec7/68b065e3cee20f75820054b6_feature-image-lattice.webp` },
  { stat:"$6M", label:"in cost savings annually", quote:"We're saving upwards of $6 million a year with Kreature, and we've reinvested those savings in other areas like website optimization and localization… that's been really powerful.", name:"Malcolm Greene", role:"Chief Information Officer", co:"Orangetheory Fitness", logo:`${LOGO}/orangetheory.svg`, img:`${CDN}/687e8d1b96312cc631cafec7/68b9969033c7fa0eb2c29c2f_feature-image-orangetheory.webp` },
  { stat:"98%", label:"Increase in speed to market", quote:"With Kreature Enterprise, we're able to move with trust and confidence that things will get done quickly without compromising our brand or draining resources.", name:"Cat Origitano", role:"VP of Product & Portfolio Marketing", co:"Fivetran", logo:`${LOGO}/fivetran.svg`, img:`${CDN}/687e8d1b96312cc631cafec7/68b065e3cee20f75820054a0_feature-image-fivetran.webp` },
  { stat:"56%", label:"Increase in form fills", quote:"Kreature empowers us to do what we do best as marketers, designers, and content creators: It strips away the technical complexity and unleashes us to be creative, try new things, and iterate quickly.", name:"Kokko Tso", role:"VP Digital Marketing", co:"Walker & Dunlop", logo:`${LOGO}/walker-dunlop.svg`, img:`${CDN}/687e8d1b96312cc631cafec7/68b065e3cee20f75820054b9_feature-image-walkerdunlop.webp` },
  { stat:"1,170%", label:"increase in traffic YoY", quote:"Kreature doesn't just allow you to work faster and easier, but differently. Speed is huge, but once you get engineers, designers, and copywriters to really enjoy working together, that's something different.", name:"Carla Weis", role:"VP, Brand & Creative", co:"Docusign", logo:`${LOGO}/docusign.svg`, img:`${CDN}/687e8d1b96312cc631cafec7/68bf1a67e66e34b3ddf5712e_author_carla-weis.webp` },
];

const SITE_GALLERY = [
  { name:"Jasper AI", src:`${CDN}/68b89b6b950c3a56ec73d48f_interactions_miw-slider_cloneable-asset_07.webp` },
  { name:"Aether 1", src:`${CDN}/68b9ee931c01ec299dc30d84_main_miw_sites_05.avif` },
  { name:"Cula", src:`${CDN}/68b9ee9239be3633ac100f58_main_miw_sites_03.avif` },
  { name:"Palmer Dinnerware", src:`${CDN}/68b85448e80f2aef9f59b6fb_158d56d074b6096d5f6e86ac7094e6cb_interactions-hero-04.avif` },
  { name:"Siena Film Festival", src:`${CDN}/68b9ee93b378e00e7af22358_main_miw_sites_02.avif` },
  { name:"Normal Computing", src:`${CDN}/68b9ee9339be3633ac100f6f_main_miw_sites_01.avif` },
  { name:"Giulia Gartner", src:`${CDN}/68b9ee92efe24074c75ffed0_main_miw_sites_04.avif` },
];

const TEAM_DATA: Record<Team,{ cols:{ label:string; desc:string; links:string[] }[] }> = {
  Marketing:{ cols:[
    { label:"Agility", desc:"Create and launch new sites and pages on your timeline — no waiting for dev resources.", links:["Build and launch web experiences without filing a ticket","Manage content in a visual, composable CMS","Empower every marketer with templates and page building","Generate production-ready apps and reusable components","Cut production time with help from Kreature's AI assistant"] },
    { label:"Impact", desc:"Every tool you need to grow traffic, convert audiences, and prove site ROI.", links:["Understand what's working with native analytics","Optimize for conversion with AI-powered personalization","Reach a global audience with AI-powered localization","Drive traffic from traditional search and LLMs with built-in tools for SEO and AEO"] },
    { label:"Scale", desc:"Give everyone on the team room to build, with guardrails that keep things on brand.", links:["Collaborate in a shared workspace with marketing, design, dev, and AI agents","Manage changes with comments, approvals, version control, and rollback","Stay on-brand with design systems and shared libraries"] },
  ]},
  Design:{ cols:[
    { label:"Creative freedom", desc:"Build exactly what you imagine, without compromises or workarounds.", links:["Build with pixel-perfect precision","Create rich interactions and animations powered by GSAP","Own your content structure in a visual, composable CMS","Design in Figma, build in Kreature, extend with React","Focus on craft while AI handles the repetitive work","Generate production-ready apps from your designs"] },
    { label:"Consistency", desc:"Scale your creative vision across every page, every launch, and every team.", links:["Stay on brand with design systems and shared libraries","Set access levels that protect the work without slowing the team","Manage edits with branching, staging, approvals, and publishing workflows"] },
    { label:"Impact", desc:"Test, iterate, and make informed creative decisions that drive performance.", links:["Understand what works with native analytics","Optimize for conversion with AI-powered personalization","Reach a global audience with AI-powered localization"] },
  ]},
  Engineering:{ cols:[
    { label:"Efficiency", desc:"Spend more time building software that matters and less time on marketing tickets.", links:["Build visually with the power of HTML, JS, and CSS","Hand over content management to the teams that own it","Generate production-ready apps and reusable components","Extend the UI with custom code components","Control releases with branching, staging, approvals, and publishing workflows"] },
    { label:"Integration", desc:"Build on a flexible platform your organization won't outgrow.", links:["Save time tool-switching: Replace your Frankenstack with one platform","Sync with Figma and import or export from React","Deploy web apps alongside your site with Kreature Cloud","Integrate anything with custom code and MACH-certified APIs"] },
    { label:"Scale", desc:"Secure, reliable, enterprise-grade hosting means there's nothing to slow you down.", links:["Grow uninterrupted with 99.99% uptime, a global CDN, and edge routing","Stay safe with 24/7 managed security, audit logs, and site backups","Save time with zero-maintenance hosting, security, and platform updates"] },
  ]},
  Agency:{ cols:[
    { label:"Creative control", desc:"Launch high-performing, distinctive client sites fast, without compromise.", links:["Create fully custom web experiences that integrate with your clients' tech stack","Create scroll-stopping interactions and animations","Give clients a CMS they can actually use","Generate production-ready web apps and reusable components","Help clients stay on brand with design systems and shared libraries"] },
    { label:"Client management", desc:"Streamline client management and handoffs.", links:["See every engagement at a glance","Delegate billing to clients directly from Kreature","Hand off client projects without downtime","Collaborate flexibly and securely with clients on your terms"] },
    { label:"Impact", desc:"Turn every project into a long-term engagement.", links:["Add high-margin services without adding tools","Prove ROI with native analytics to keep your clients coming back","Deliver enterprise-grade hosting without owning the infrastructure"] },
  ]},
};

const FOOTER: Record<string,string[]> = {
  Product:["Platform","Design","Edit content","Interactions","GSAP","Page building","Shared Libraries","Collaboration","CMS","Hosting","Localization","Security","Ecommerce","Analyze","Optimize","SEO","AEO","Kreature Cloud","DevLink","Figma to Kreature","Accessibility","AI"],
  Solutions:["Enterprise","Startups","Global alliances","Agencies","Freelancers"],
  Resources:["University","Blog","Customer stories","Webinars & ebooks","Apps","Libraries","Templates","Developers","Made in Kreature","Glossary","Livestreams","The Kreature Way"],
  Company:["About","Careers","Press","Kreature Ventures","Kreature Shop","Terms of Service","Privacy policy","Cookie policy","Accessibility statement"],
  Compare:["Contentful","Framer","Sitecore","Wix","WordPress"],
  Community:["Discover the community","Partner with Kreature","Certified Partners","Become a template designer","Become an affiliate","Become a Global Leader","Find a meetup near you"],
  "Get help":["Support","Pricing","Status","Community Homebase","Wishlist"],
};

/* ─── CSS VAR ─── */
const V = (n:string)=>`var(--${n})`;

/* ─── HELPERS ─── */
function Arrow(){return <span className="ml-1 text-[1.1em] leading-none select-none">→</span>;}

function ThemeToggle(){
  const [dark,setDark]=useState(false);
  function t(){const n=!dark;setDark(n);document.documentElement.classList.toggle("dark",n);}
  return <button onClick={t} className="w-9 h-9 rounded-full border flex items-center justify-center text-sm" style={{borderColor:V("color-hairline"),color:V("color-ink")}} aria-label={dark?"Light mode":"Dark mode"}>{dark?"☀":"☾"}</button>;
}

function MachineMode(){
  return <button className="flex items-center gap-2 px-4 py-2 rounded-sm border" style={{...S.caption,borderColor:V("color-hairline"),color:V("color-mute")}}>
    <span className="text-sm">🤖</span> Machine Mode
  </button>;
}

function InkBtn({href,children,blue,white}:{href:string;children:React.ReactNode;blue?:boolean;white?:boolean}){
  return <a href={href} className="inline-flex items-center rounded-sm transition-colors" style={{...S.btn,background:blue?V("color-accent-blue"):"transparent",color:blue||white?"#fff":V("color-ink"),border:blue?"none":`1px solid ${white?"rgba(255,255,255,0.2)":V("color-hairline")}`}}>{children}</a>;
}

function H2({children}:{children:React.ReactNode}){
  return <h2 className="font-semibold leading-[1.04] mb-12" style={{...S.h2,color:V("color-ink")}}>{children}</h2>;
}

function Section({bg,children,className}:{bg?:"soft"|"dark";children:React.ReactNode;className?:string}){
  return <section className={`px-5 sm:px-8 py-[clamp(3rem,8vw,9rem)] ${className||""}`} style={{background:bg==="soft"?V("color-canvas-soft"):bg==="dark"?V("color-ink"):V("color-canvas")}}>
    <div className="max-w-[1440px] mx-auto">{children}</div>
  </section>;
}

export default function KreatureClone(){
  const [tIdx,setTIdx]=useState(0);const t=TESTIMONIALS[tIdx];const tt=TESTIMONIALS.length;
  const [team,setTeam]=useState<Team>("Marketing");
  const prev=useCallback(()=>setTIdx(i=>(i-1+tt)%tt),[tt]);
  const next=useCallback(()=>setTIdx(i=>(i+1)%tt),[tt]);
  const tl=(k:Team)=>k==="Marketing"?"Marketing teams":k==="Design"?"Design teams":k==="Engineering"?"Engineering teams":"Agencies";

  return <div className="page-wrapper" style={{background:V("color-canvas"),color:V("color-body")}}>

    {/* ═══════ PROMO ═══════ */}
    <aside role="complementary" style={{background:"transparent",padding:0}}>
      <a href="/feature/aeo" className="flex items-center justify-center w-full transition-opacity" style={{color:"#fff",...S.bodySm,fontWeight:500,textDecoration:"none",padding:"12px 0",background:V("color-accent-blue")}}>
        New for Enterprise: Kreature AEO. Own your visibility in AI search <Arrow />
      </a>
    </aside>

    {/* ═══════ NAV ═══════ */}
    <header className="sticky top-0 z-[999] h-[68px] flex items-center" style={{background:V("color-canvas"),borderBottom:`1px solid ${V("color-hairline")}`}}>
      <div className="max-w-[1440px] mx-auto w-full px-8 flex items-center justify-between h-full">
        <a href="/" className="shrink-0 flex items-center">
          <img src="/logo/kreature-logo-dark.png" alt="Kreature" className="h-[42px] w-auto logo-dark" />
          <img src="/logo/kreature-logo-light.png" alt="Kreature" className="h-[42px] w-auto logo-light" />
        </a>
        <nav className="hidden lg:flex items-center gap-6" style={{color:V("color-ink")}}>
          {["Platform","Solutions","Resources"].map(l=><button key={l} className="hover:opacity-70 flex items-center gap-1" style={S.navLink}>{l} <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 1l4 4 4-4"/></svg></button>)}
          <a href="/enterprise" className="hover:opacity-70" style={S.navLink}>Enterprise</a>
          <a href="/pricing" className="hover:opacity-70" style={S.navLink}>Pricing</a>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="/login" className="hover:opacity-70" style={{fontSize:"15.98px",fontWeight:500,color:V("color-ink"),padding:"20.78px 0 19.18px"}}>Log in</a>
          <a href="/enterprise/contact-sales" className="hover:opacity-70" style={{fontSize:"15.98px",fontWeight:500,color:V("color-ink"),padding:"20.78px 0 19.18px"}}>Contact Sales</a>
          <a href="/signup" className="transition-colors" style={{...S.btn,background:V("color-accent-blue"),color:"#fff"}}>Start for free</a>
          <ThemeToggle/>
        </div>
        <button className="lg:hidden p-2" aria-label="Menu" style={{color:V("color-ink")}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
      </div>
    </header>

    <main>
      {/* ═══════ HERO ═══════ */}
      <div className="relative overflow-hidden" style={{background:V("color-canvas")}}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{background:`linear-gradient(to bottom, ${V("color-canvas")} 0%, color-mix(in srgb, ${V("color-canvas")} 85%, transparent 15%) 30%, color-mix(in srgb, ${V("color-canvas")} 40%, transparent 60%) 65%, transparent 100%)`}}/>
        <div className="relative z-10 px-5 sm:px-8 pt-[clamp(2rem,5vw,5rem)] pb-[clamp(2rem,4vw,4rem)]">
          <div className="max-w-[1440px] mx-auto">

            {/* Video poster */}
            <div className="relative mb-10 rounded-lg overflow-hidden" style={{borderRadius:"8px"}}>
              <img src={`${CDN}/68c0557aa0ca3aef28f7396d_home-hero-vid-poster.webp`} alt="Kreature platform preview" className="w-full h-auto"/>
              <button className="absolute inset-0 flex items-center justify-center" aria-label="Play"><div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background:"rgba(0,0,0,0.6)",color:"#fff"}}>▶</div></button>
            </div>

            {/* Trusted by + logos */}
            <p className="mb-6 uppercase tracking-wider" style={{fontSize:"16px",fontWeight:400,color:V("color-ink")}}>Trusted by teams at</p>
            <div className="flex flex-wrap gap-6 items-center mb-8 opacity-40">
              <img src={`${CDN}/68c9a39c128261b2128439dc_ideo-logo.svg`} alt="Ideo" className="h-5 w-auto" loading="lazy"/>
              <img src={`${CDN}/68c9a39c128261b2128439c8_monday.com.svg`} alt="Monday.com" className="h-5 w-auto" loading="lazy"/>
              <img src={`${CDN}/68c9a39c128261b2128439db_bbdo-logo.svg`} alt="BBDO" className="h-5 w-auto" loading="lazy"/>
              <img src={`${CDN}/68c9a39c128261b2128439d9_nytimes.svg`} alt="NYT" className="h-5 w-auto" loading="lazy"/>
              <img src={`${CDN}/68c9a39c128261b2128439d8_TED.svg`} alt="TED" className="h-5 w-auto" loading="lazy"/>
              <img src={`${CDN}/68c9a39c128261b2128439c9_Docusign-dark.svg`} alt="Docusign" className="h-5 w-auto" loading="lazy"/>
            </div>

            {/* H1 + subtext */}
            <div className="mb-[clamp(3rem,6vw,5rem)]">
              <h1 className="font-semibold leading-[1.04] tracking-[-0.01em] mb-6" style={{fontSize:"80px",fontWeight:600,lineHeight:"83.2px",letterSpacing:"-0.8px",color:V("color-ink")}}>Make your website a growth&nbsp;engine</h1>
              <p className="max-w-[700px]" style={{...S.heroSub,color:V("color-ink")}}>Build your brand. Rank in AI search. Drive real revenue. All with Kreature.</p>
            </div>

            {/* Build method cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                {label:"AI site builder",desc:"Quickly generate a custom website.",cta:"Build with AI Site Builder",badge:"New",img:`${CDN}/6904db1c61b3c12d43405059_creation-thumbnail_aisb.avif`},
                {label:"Template",desc:"Start with a design that fits your needs.",cta:"Build with a template",img:`${CDN}/6904db1cdf3e06f9fe7c5377_creation-thumbnail_maeve-template.avif`},
                {label:"From scratch",desc:"Build your way on a blank canvas.",cta:"Start with a blank site",img:`${CDN}/6904db1cabdf76211061ba36_creation-thumbnail_blank.svg`},
                {label:"Enterprise",desc:"Building with a team at scale?",cta:"Talk to sales",img:`${CDN}/69f3b3ffe1fae88ba6e4a705_creation-thumbnail__enterprise.avif`},
              ].map(c=><a key={c.label} href={c.cta.includes("sales")?"/enterprise/contact-sales":"/signup"} className="block rounded-lg overflow-hidden transition-all hover:shadow-lg" style={{borderRadius:"8px",border:`1px solid ${V("color-hairline")}`,background:V("color-canvas")}}>
                <img src={c.img} alt={c.label} className="w-full h-40 object-cover" loading="lazy"/>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2"><span style={{...S.bodySm,fontWeight:500,color:V("color-ink")}}>{c.label}</span>{c.badge&&<span className="text-[0.65rem] font-semibold uppercase px-1.5 py-0.5 rounded-sm" style={{background:V("color-accent-blue"),color:"#fff"}}>{c.badge}</span>}</div>
                  <p className="mb-4" style={{...S.bodySm,color:V("color-body-mid")}}>{c.desc}</p>
                  <span className="inline-flex items-center" style={{...S.bodySm,fontWeight:500,color:V("color-ink")}}>{c.cta} <Arrow/></span>
                </div>
              </a>)}
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6" style={{borderTop:`1px solid ${V("color-hairline")}`}}>
              <span style={{fontSize:"16px",color:V("color-ink")}}>Start building for free. Upgrade any time.</span>
              <a href="/signup" className="transition-colors inline-flex items-center" style={{...S.btn,background:V("color-accent-blue"),color:"#fff"}}>Get started <Arrow/></a>
            </div>

            {/* Bottom hero cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {[
                {label:"Enterprise",desc:"Advanced collaboration, security, and scale for teams.",cta:"Learn about Kreature Enterprise",href:"/enterprise",blue:true},
                {label:"Kreature AEO",desc:"Own your site's visibility in AI search, right within Kreature.",cta:"Explore Kreature AEO",href:"/feature/aeo",badge:"New"},
                {label:"The Future of Search",desc:"Get tips and tricks from AEO experts in our free webinar.",cta:"View webinar series",href:"/resources/series/the-answer-engine"},
              ].map(c=><a key={c.label} href={c.href} className="block rounded-lg p-[clamp(1rem,2vw,1.5rem)] transition-all hover:shadow-lg" style={{borderRadius:"8px",background:c.blue?V("color-accent-blue"):V("color-canvas"),border:c.blue?"none":`1px solid ${V("color-hairline")}`}}>
                <div className="flex items-center gap-2 mb-4"><span className="text-sm font-medium uppercase tracking-wider" style={{...S.caption,color:c.blue?"rgba(255,255,255,0.7)":V("color-body-mid")}}>{c.label}</span>{c.badge&&<span className="text-[0.65rem] font-semibold uppercase px-1.5 py-0.5 rounded-sm" style={{background:V("color-accent-blue"),color:"#fff"}}>{c.badge}</span>}</div>
                <p className="mb-6" style={{...S.body,color:c.blue?"rgba(255,255,255,0.85)":V("color-body")}}>{c.desc}</p>
                <span className="inline-flex items-center" style={{...S.btn,background:"transparent",color:c.blue?"#fff":V("color-ink"),border:"none",padding:0}}>{c.cta} <Arrow/></span>
              </a>)}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ PLATFORM ═══════ */}
      <Section>
        <H2>Kreature is the agentic web marketing platform for high-performing brands</H2>
        <MachineMode/>
        <div className="grid md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] mt-[clamp(2rem,4vw,3rem)] mb-20">
          {PLATFORM.map(p=><div key={p.title} className="rounded-lg overflow-hidden transition-all hover:shadow-lg" style={{borderRadius:"8px",border:`1px solid ${V("color-hairline")}`}}>
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" loading="lazy"/>
            <div className="p-[clamp(1rem,2vw,1.5rem)]" style={{background:V("color-canvas")}}>
              <h3 className="font-semibold mb-3" style={{...S.h3,color:V("color-ink")}}>{p.title}</h3>
              <p className="mb-6" style={{...S.body,color:V("color-body-mid")}}>{p.desc}</p>
              <a href="/signup" className="inline-flex items-center" style={{...S.btn,background:"transparent",color:V("color-ink"),border:"none",padding:0}}>{p.cta} <Arrow/></a>
            </div>
          </div>)}
        </div>
        <div className="pt-16 max-w-[800px]" style={{borderTop:`1px solid ${V("color-hairline")}`}}>
          <blockquote className="mb-6" style={{fontSize:"32px",lineHeight:1.5,color:V("color-ink")}}>&ldquo;AI has raised the stakes: Now brand websites need to resonate with humans, rank in AI search, and drive measurable revenue. Kreature is the platform modern teams choose to build sites that do it all.&rdquo;</blockquote>
          <a href="/ai" className="inline-flex items-center" style={{...S.btn,background:"transparent",color:V("color-ink"),border:"none",padding:0}}>Discover Kreature AI <span className="ml-1">↗</span></a>
        </div>
      </Section>

      {/* ═══════ LOGO MARQUEE ═══════ */}
      <section className="py-12 overflow-hidden border-y" style={{borderColor:V("color-hairline"),background:V("color-canvas")}}>
        <div className="flex gap-8 animate-[scroll_40s_linear_infinite] w-max">
          {[...LOGOS,...LOGOS].map((l,i)=><div key={i} className="flex items-center gap-4 shrink-0">
            <img src={l.src} alt={l.name} className="h-6 w-auto opacity-50" loading="lazy"/>
            {l.stat&&<div className="flex flex-col"><span className="text-sm font-semibold" style={{color:V("color-ink")}}>{l.stat}</span><span className="text-xs" style={{color:V("color-mute")}}>{l.sub}</span></div>}
          </div>)}
        </div>
      </section>

      {/* ═══════ CUSTOMER STORIES ═══════ */}
      <Section bg="soft">
        <H2>300,000+ brands move the needle with Kreature</H2>
        <MachineMode/>
        <div className="flex items-start justify-between mb-8 gap-8 mt-6">
          <div className="hidden sm:flex items-center gap-2 shrink-0 ml-auto">
            <button onClick={prev} className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors" style={{borderColor:V("color-hairline"),color:V("color-mute")}} aria-label="Previous">←</button>
            <button onClick={next} className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors" style={{borderColor:V("color-hairline"),color:V("color-mute")}} aria-label="Next">→</button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden max-w-[900px]" style={{borderRadius:"8px",border:`1px solid ${V("color-hairline")}`,background:V("color-canvas")}}>
          <img src={t.img} alt={`${t.co} case study`} className="w-full h-64 object-cover" loading="lazy"/>
          <div className="p-[clamp(1.5rem,3vw,2.5rem)]">
            <img src={t.logo} alt={t.co} className="h-6 w-auto mb-6 opacity-60"/>
            <div className="mb-6">
              <div className="font-semibold leading-none mb-2" style={{fontSize:"clamp(2.5rem,5vw,4rem)",color:V("color-ink")}}>{t.stat}</div>
              <div className="font-medium" style={{fontSize:"clamp(1rem,1.3vw,1.25rem)",color:V("color-body-mid")}}>{t.label}</div>
            </div>
            <blockquote className="mb-6" style={{...S.bodyLg,color:V("color-body")}}>&ldquo;{t.quote}&rdquo;</blockquote>
            <div style={{...S.bodySm,fontWeight:500,color:V("color-ink")}}>{t.name}</div>
            <div style={{...S.bodySm,color:V("color-mute")}}>{t.role}</div>
            <a href={`/customers/${t.co.toLowerCase().replace(/\s+/g,"-")}`} className="inline-flex items-center mt-4" style={{...S.btn,background:"transparent",color:V("color-ink"),border:"none",padding:0}}>Read customer story <Arrow/></a>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-6">
          {TESTIMONIALS.map((_,i)=><button key={i} onClick={()=>setTIdx(i)} className="rounded-full transition-all" style={{width:i===tIdx?24:8,height:8,background:i===tIdx?V("color-ink"):V("color-hairline")}} aria-label={`Testimonial ${i+1}`}/>)}
          <span className="text-xs ml-2" style={{color:V("color-mute")}}>{tIdx+1} / {tt}</span>
        </div>
        <p className="mt-6" style={{...S.bodySm,color:V("color-body-mid")}}>Let&apos;s talk about what your website could be doing for your business. <a href="/enterprise/contact-sales" className="font-medium hover:underline" style={{color:V("color-ink")}}>Talk to sales →</a></p>
      </Section>

      {/* ═══════ AI FEATURES ═══════ */}
      <Section>
        <H2>From idea to impact, faster</H2>
        <p className="mb-4 max-w-[700px]" style={{...S.bodyLg,color:V("color-ink")}}>Kreature&apos;s agentic AI works alongside your team — drafting copy, generating pages, running experiments — with the guardrails enterprise teams need.</p>
        <a href="/ai" className="inline-flex items-center mb-6" style={{...S.btn,background:"transparent",color:V("color-ink"),border:"none",padding:0}}>Discover Kreature AI <Arrow/></a>
        <MachineMode/>
        <div className="grid md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] mt-[clamp(2rem,4vw,3rem)]">
          {AI_FEATURES.map(f=><div key={f.title} className="rounded-lg overflow-hidden" style={{borderRadius:"8px",border:`1px solid ${V("color-hairline")}`}}>
            <img src={f.img} alt={f.title} className="w-full h-56 object-cover" loading="lazy"/>
            <div className="p-[clamp(1rem,2vw,1.5rem)]" style={{background:V("color-canvas")}}>
              <h3 className="font-semibold mb-3" style={{fontSize:"24px",fontWeight:600,lineHeight:"31.2px",color:V("color-ink")}}>{f.title}</h3>
              <p style={{...S.body,color:V("color-body-mid")}}>{f.desc}</p>
            </div>
          </div>)}
        </div>
      </Section>

      {/* ═══════ TEAM FEATURES ═══════ */}
      <Section bg="soft">
        <H2>Everything {team==="Agency"?"agencies":team.toLowerCase()+" teams"} love about Kreature</H2>
        <div className="flex items-center gap-1 mb-10 border-b pb-1 overflow-x-auto" style={{borderColor:V("color-hairline")}}>
          {(Object.keys(TEAM_DATA) as Team[]).map(k=><button key={k} onClick={()=>setTeam(k)} className="px-4 py-3 text-sm font-medium rounded-sm transition-colors whitespace-nowrap" style={{...S.bodySm,fontWeight:500,background:team===k?V("color-canvas"):"transparent",color:V("color-ink"),border:team===k?`1px solid ${V("color-hairline")}`:"1px solid transparent",borderBottom:team===k?`2px solid ${V("color-ink")}`:"2px solid transparent",borderRadius:"4px"}}>{tl(k)}</button>)}
        </div>
        <div className="grid md:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)]">
          {TEAM_DATA[team].cols.map(c=><div key={c.label}>
            <div className="text-sm font-medium uppercase tracking-wider mb-4" style={{...S.bodySm,fontWeight:500,color:V("color-body-mid")}}>{c.label}</div>
            <p className="mb-6" style={{...S.body,color:V("color-body")}}>{c.desc}</p>
            <ul className="space-y-3">{c.links.map(l=><li key={l}><a href="#" className="inline-flex items-center text-sm hover:underline" style={{...S.bodySm,color:V("color-ink")}}>{l} <span className="ml-1" style={{color:V("color-mute")}}>→</span></a></li>)}</ul>
          </div>)}
        </div>
      </Section>

      {/* ═══════ BOTTOM CTA (dark section) ═══════ */}
      <section className="px-5 sm:px-8 py-[clamp(3rem,8vw,9rem)] relative overflow-hidden" style={{background:V("color-ink")}}>
        <img src={`${CDN}/68b5842b43dac8478419c2f1_home-ui-bot-left.webp`} alt="" className="absolute bottom-0 left-0 w-48 opacity-30 pointer-events-none z-0" loading="lazy"/>
        <img src={`${CDN}/68b5842baa20ebd68da24e91_home-ui-right.webp`} alt="" className="absolute top-0 right-0 w-48 opacity-30 pointer-events-none z-0" loading="lazy"/>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-[700px] mb-16">
            <h2 className="font-semibold leading-[1.04] mb-6" style={{...S.h2,color:V("color-canvas")}}>Make your website your competitive edge</h2>
            <p className="mb-8" style={{...S.bodyLg,color:V("color-mute-soft")}}>Build a brand people trust and pipeline you can measure, all with one powerful platform.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <InkBtn href="/signup" blue>Get started — it&apos;s free</InkBtn>
              <InkBtn href="/enterprise/contact-sales" white>Talk to sales</InkBtn>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SITE_GALLERY.map(s=><div key={s.name} className="rounded-lg overflow-hidden cursor-pointer" style={{borderRadius:"8px",border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.03)"}}>
              <img src={s.src} alt={s.name} className="w-full aspect-[4/3] object-cover" loading="lazy"/>
              <div className="p-3">
                <div className="text-sm font-medium" style={{...S.bodySm,fontWeight:500,color:V("color-canvas")}}>{s.name}</div>
                <div className="text-xs mt-1" style={{fontSize:"12px",color:V("color-mute")}}>View website ↗</div>
              </div>
            </div>)}
          </div>
        </div>
      </section>
    </main>

    {/* ═══════ FOOTER ═══════ */}
    <footer className="py-16 px-5 sm:px-8" style={{borderTop:`1px solid ${V("color-hairline")}`,background:V("color-canvas")}}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 mb-16">
          {Object.entries(FOOTER).map(([heading,items])=><div key={heading}>
            <h4 className="font-semibold mb-6" style={{fontSize:"20px",fontWeight:500,lineHeight:"28px",color:V("color-ink")}}>{heading}</h4>
            <ul className="space-y-2.5">{items.map((item:string)=><li key={item}><a href="#" className="text-sm hover:underline inline-flex items-center gap-1" style={{...S.bodySm,color:V("color-body-mid")}}>{item}{item==="AEO"&&<span className="text-[0.6rem] font-semibold uppercase" style={{color:V("color-accent-blue")}}>New</span>}{item==="Careers"&&<span className="text-[0.6rem] font-semibold uppercase" style={{color:V("color-accent-green")}}>We&apos;re hiring</span>}</a></li>)}</ul>
          </div>)}
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{borderTop:`1px solid ${V("color-hairline")}`}}>
          <p style={{fontSize:"12px",color:V("color-mute")}}>© {new Date().getFullYear()} Kreature, Inc. All rights reserved</p>
          <div className="flex items-center gap-4" style={{fontSize:"12px",color:V("color-mute")}}>
            <a href="#" className="hover:underline">Made in Kreature</a>
            {["YouTube","X","Facebook","LinkedIn","Instagram","TikTok"].map(p=><a key={p} href="#" className="hover:underline">{p}</a>)}
          </div>
        </div>
      </div>
    </footer>
  </div>;
}
