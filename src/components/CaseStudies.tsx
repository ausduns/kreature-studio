const CASES = [
  {
    type: "SaaS MVP",
    before: "Idea on a napkin, zero technical co-founder",
    after: "Live product with 200+ waitlist signups in week one",
    metric: "0 → 200+ signups",
    timeline: "4 weeks",
  },
  {
    type: "E-Commerce Platform",
    before: "Shopify store hitting revenue ceiling, no custom features",
    after: "Custom platform with subscription model, 3x AOV",
    metric: "3x average order value",
    timeline: "3 weeks",
  },
  {
    type: "Internal Tool",
    before: "Team running on spreadsheets and manual processes",
    after: "Custom dashboard saving 15 hrs/week across the team",
    metric: "15 hrs/week saved",
    timeline: "2 weeks",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-base-light/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-[800] text-3xl sm:text-4xl tracking-tight mb-4">
            Real outcomes. Real timelines.
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Every project starts with a problem and ends with a measurable result.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CASES.map((c) => (
            <div
              key={c.type}
              className="border border-border rounded-2xl p-7 bg-base-card hover:border-border-hover transition-all"
            >
              <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-5">
                {c.type}
              </span>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs text-dim uppercase tracking-wider mb-1">
                    Before
                  </div>
                  <p className="text-sm text-muted">{c.before}</p>
                </div>
                <div>
                  <div className="text-xs text-dim uppercase tracking-wider mb-1">
                    After
                  </div>
                  <p className="text-sm text-white">{c.after}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-border">
                <div>
                  <div className="font-heading font-[800] text-lg text-accent">
                    {c.metric}
                  </div>
                </div>
                <span className="text-xs text-dim">{c.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
