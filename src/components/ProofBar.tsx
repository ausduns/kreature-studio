const STATS = [
  { value: "40+", label: "Products Shipped" },
  { value: "5–7", label: "Day Avg Delivery" },
  { value: "98%", label: "On-Time Rate" },
  { value: "$2.5K", label: "Starting Price" },
];

export default function ProofBar() {
  return (
    <section className="border-y border-border bg-base-light/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-[800] text-2xl sm:text-3xl text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
