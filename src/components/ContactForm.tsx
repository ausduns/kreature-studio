"use client";

import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  "Landing Page",
  "Full Website",
  "SaaS MVP",
  "Internal Tool",
  "Other",
];

const BUDGETS = [
  "Under $2,500",
  "$2,500 – $6,500",
  "$6,500 – $15,000",
  "$15,000 – $25,000",
  "$25,000+",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this to an API route or form service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <div className="border border-accent/30 rounded-2xl bg-accent/[0.03] p-12">
            <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="font-heading font-[800] text-2xl mb-2">
              Message sent.
            </h3>
            <p className="text-muted">
              We&apos;ll get back to you within 4 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-base-light/30">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading font-[800] text-3xl sm:text-4xl tracking-tight mb-4">
            Start your project
          </h2>
          <p className="text-muted">
            Tell us what you&apos;re building. We&apos;ll tell you how fast we
            can ship it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-border rounded-2xl bg-base-card p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-muted mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-base border border-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-muted mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-base border border-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="project-type"
              className="block text-sm text-muted mb-1.5"
            >
              Project type
            </label>
            <select
              id="project-type"
              name="project-type"
              required
              defaultValue=""
              className="w-full bg-base border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors appearance-none"
            >
              <option value="" disabled className="text-dim">
                Select a project type
              </option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-sm text-muted mb-1.5"
            >
              Budget range
            </label>
            <select
              id="budget"
              name="budget"
              required
              defaultValue=""
              className="w-full bg-base border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors appearance-none"
            >
              <option value="" disabled className="text-dim">
                Select a range
              </option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-muted mb-1.5"
            >
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-base border border-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-accent/50 transition-colors resize-none"
              placeholder="What are you building? Who is it for?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3.5 rounded-lg transition-colors text-sm sm:text-base"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
