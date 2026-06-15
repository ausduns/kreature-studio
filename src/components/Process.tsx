const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "30-minute call. We scope your product, define the deliverable, and lock the timeline. No proposals that take a week.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and develop in parallel. You get daily async updates and a live preview link from day one.",
  },
  {
    number: "03",
    title: "Ship",
    description:
      "Your product goes live on your domain with monitoring, analytics, and documentation. No handoff chaos.",
  },
  {
    number: "04",
    title: "Extract",
    description:
      "We extract reusable systems from your build — auth flows, payment logic, component libraries — so your next iteration is faster.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-[800] text-3xl sm:text-4xl tracking-tight mb-4">
            Four steps. No mystery.
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Every engagement follows the same battle-tested workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+2px)] w-[calc(100%-44px)] h-px bg-border -translate-x-1/2 z-0" />
              )}
              <div className="relative border border-border rounded-2xl p-7 bg-base-card hover:border-border-hover transition-all h-full">
                <div className="font-heading font-[800] text-3xl text-accent/30 mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-[800] text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
