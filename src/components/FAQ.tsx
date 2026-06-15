"use client";

const FAQS = [
  {
    q: "I don't have a technical background. Can I still work with you?",
    a: "That's exactly who we build for. You bring the idea and the domain knowledge. We handle architecture, design, development, and deployment. You'll have a live product without writing a line of code.",
  },
  {
    q: "What tech stack do you use?",
    a: "Next.js, React, TypeScript, Tailwind, Supabase, Vercel, Stripe — modern tools that are fast to build with and easy to maintain. We pick the stack based on your product, not our preferences.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every build includes one round of revisions. For ongoing work, our $1,500/mo retainer gives you 10 hours of development each month. Most clients use it for feature additions and performance tuning.",
  },
  {
    q: "How do you keep costs so low?",
    a: "We use AI-accelerated workflows and productized scopes. No account managers, no 40-page proposals, no meetings that should have been messages. You pay for output, not overhead.",
  },
  {
    q: "Do I own the code?",
    a: "100%. You own everything we build — source code, designs, assets, and deployment infrastructure. We transfer the full repo on completion.",
  },
  {
    q: "What happens on the discovery call?",
    a: "We spend 30 minutes understanding your product, your users, and your timeline. By the end of the call, you'll have a clear scope, price, and start date. No follow-up proposal needed.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-base-light/30">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-[800] text-3xl sm:text-4xl tracking-tight mb-4">
            Questions founders ask
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group border border-border rounded-xl bg-base-card hover:border-border-hover transition-all"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                <span className="font-medium text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  className="faq-chevron w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-sm text-muted leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
