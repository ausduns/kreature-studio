export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      {/* Atmospheric gradient — inspired by reference sites */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center py-24 sm:py-32">
        <h1 className="font-heading font-[800] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
          We build products.
          <br />
          <span className="text-accent">You ship fast.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Kreature is the productized build engine for non-technical founders
          who need their first product live — not a pitch deck, not a wireframe,
          a working product.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#offers"
            className="bg-white text-base font-medium px-8 py-3.5 rounded-lg hover:bg-white/90 transition-colors text-sm sm:text-base"
          >
            See our work
          </a>
          <a
            href="#contact"
            className="border border-border hover:border-border-hover text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm sm:text-base"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
