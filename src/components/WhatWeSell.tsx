const VALUES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Speed",
    description:
      "Your product ships in days, not quarters. Fixed timelines, no scope creep, no status meetings that should have been emails.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Systems",
    description:
      "Every build comes with auth, payments, analytics, and deployment baked in. Not bolted on after launch.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Execution",
    description:
      "You get a deployed, production-grade product — not a prototype that needs 'just a few more weeks' of polish.",
  },
];

export default function WhatWeSell() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-[800] text-3xl sm:text-4xl tracking-tight mb-4">
            What we actually sell
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Not hours. Not retainers. Not vague roadmaps. Three things that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="group border border-border hover:border-border-hover bg-base-card rounded-2xl p-8 transition-all hover:bg-surface"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                {v.icon}
              </div>
              <h3 className="font-heading font-[800] text-xl mb-3">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
