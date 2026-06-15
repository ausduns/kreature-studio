export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-heading font-[800] text-3xl sm:text-4xl md:text-5xl tracking-tight mb-5">
          Ready to ship?
        </h2>
        <p className="text-muted text-lg mb-3 max-w-xl mx-auto">
          We take on a maximum of 2 active clients at a time to guarantee
          quality and speed. If there&apos;s a slot open, move fast.
        </p>
        <p className="text-dim text-sm mb-10">
          Average response time: under 4 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm sm:text-base"
          >
            Book a discovery call
          </a>
          <a
            href="#contact"
            className="border border-border hover:border-border-hover text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm sm:text-base"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
