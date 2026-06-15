const OFFERS = [
  {
    name: "Launch Sprint",
    price: "$2,500",
    scope: "Landing page + deploy. Copy, design, dev, and hosting — handled.",
    timeline: "5–7 days",
    popular: false,
  },
  {
    name: "Growth System",
    price: "$6,500",
    scope: "Full marketing site + dashboard + auth. Everything to start acquiring users.",
    timeline: "10–14 days",
    popular: true,
  },
  {
    name: "Product Build",
    price: "$12K–$25K+",
    scope: "Full SaaS MVP with custom features, integrations, and admin tooling.",
    timeline: "4–6 weeks",
    popular: false,
  },
  {
    name: "Retainer",
    price: "$1,500/mo",
    scope: "10 hrs/mo of ongoing development, bug fixes, and feature additions.",
    timeline: "Ongoing",
    popular: false,
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-[800] text-3xl sm:text-4xl tracking-tight mb-4">
            Flat-rate. Fixed-scope. No surprises.
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Pick the sprint that matches where you are. Every engagement has a
            clear deliverable, timeline, and price.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFERS.map((offer) => (
            <div
              key={offer.name}
              className={`relative border rounded-2xl p-7 flex flex-col transition-all hover:border-border-hover ${
                offer.popular
                  ? "border-accent/40 bg-accent/[0.03]"
                  : "border-border bg-base-card"
              }`}
            >
              {offer.popular && (
                <span className="absolute -top-3 left-7 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-[800] text-lg mb-1">
                {offer.name}
              </h3>
              <div className="font-heading font-[800] text-2xl sm:text-3xl text-accent mb-4">
                {offer.price}
              </div>
              <p className="text-muted text-sm leading-relaxed flex-1 mb-5">
                {offer.scope}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-border">
                <span className="text-dim text-xs uppercase tracking-wider">
                  Timeline
                </span>
                <span className="text-sm font-medium">{offer.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
