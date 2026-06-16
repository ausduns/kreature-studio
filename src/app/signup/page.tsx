"use client";

import { useState } from "react";

const V = (n: string) => `var(--${n})`;

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">→</span>
  );
}

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Auth logic would go here
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: V("color-canvas-soft") }}
    >
      {/* ─── Main Content ─── */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full" style={{ maxWidth: 480 }}>
          {/* Card */}
          <div
            className="w-full"
            style={{
              background: V("color-canvas"),
              borderRadius: 8,
              border: `1px solid ${V("color-hairline")}`,
              padding: 32,
              boxShadow: V("shadow-card"),
            }}
          >
            {/* Heading */}
            <h1
              className="text-center mb-2"
              style={{
                fontSize: 28,
                fontWeight: 600,
                letterSpacing: "-0.5px",
                color: V("color-ink"),
                lineHeight: 1.2,
              }}
            >
              Get started with Kreature
            </h1>
            <p
              className="text-center mb-8"
              style={{
                fontSize: 14,
                lineHeight: "22.4px",
                color: V("color-body-mid"),
              }}
            >
              Start building with AI-powered speed. No credit card required.
            </p>

            {/* Social signup buttons */}
            <div className="flex flex-col gap-3 mb-6">
              {/* Google */}
              <a
                href="/auth/google"
                className="w-full flex items-center justify-center gap-3 font-medium no-underline transition-all"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "14px 24px",
                  borderRadius: 4,
                  background: V("color-canvas-soft"),
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                  lineHeight: 1.5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = V("color-canvas-mid");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = V("color-canvas-soft");
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </a>

              {/* GitHub */}
              <a
                href="/auth/github"
                className="w-full flex items-center justify-center gap-3 font-medium no-underline transition-all"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "14px 24px",
                  borderRadius: 4,
                  background: V("color-canvas-soft"),
                  color: V("color-ink"),
                  border: `1px solid ${V("color-hairline")}`,
                  lineHeight: 1.5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = V("color-canvas-mid");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = V("color-canvas-soft");
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: V("color-ink") }}
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Continue with GitHub
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex-1"
                style={{ height: 1, background: V("color-hairline") }}
              />
              <span
                style={{
                  fontSize: 12.8,
                  fontWeight: 550,
                  color: V("color-mute"),
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                or
              </span>
              <div
                className="flex-1"
                style={{ height: 1, background: V("color-hairline") }}
              />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full name field */}
              <label className="flex flex-col gap-1.5">
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: V("color-ink"),
                    lineHeight: "22.4px",
                  }}
                >
                  Full name
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded text-base outline-none transition-colors"
                  style={{
                    fontSize: 16,
                    background: V("color-canvas-soft"),
                    color: V("color-ink"),
                    border: `1px solid ${V("color-hairline")}`,
                    lineHeight: 1.5,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = V("color-accent-blue");
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${V("color-accent-blue")}20`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = V("color-hairline");
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </label>

              {/* Email field */}
              <label className="flex flex-col gap-1.5">
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: V("color-ink"),
                    lineHeight: "22.4px",
                  }}
                >
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded text-base outline-none transition-colors"
                  style={{
                    fontSize: 16,
                    background: V("color-canvas-soft"),
                    color: V("color-ink"),
                    border: `1px solid ${V("color-hairline")}`,
                    lineHeight: 1.5,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = V("color-accent-blue");
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${V("color-accent-blue")}20`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = V("color-hairline");
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </label>

              {/* Password field */}
              <label className="flex flex-col gap-1.5">
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: V("color-ink"),
                    lineHeight: "22.4px",
                  }}
                >
                  Password
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Create a password (min. 8 characters)"
                  className="w-full px-4 py-3 rounded text-base outline-none transition-colors"
                  style={{
                    fontSize: 16,
                    background: V("color-canvas-soft"),
                    color: V("color-ink"),
                    border: `1px solid ${V("color-hairline")}`,
                    lineHeight: 1.5,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = V("color-accent-blue");
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${V("color-accent-blue")}20`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = V("color-hairline");
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full font-medium cursor-pointer transition-all mt-1"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "16px 24px",
                  borderRadius: 4,
                  background: V("color-accent-blue"),
                  color: "#ffffff",
                  border: "none",
                  lineHeight: 1.5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = V(
                    "color-accent-blue-hover"
                  );
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = V("color-accent-blue");
                }}
              >
                Start for free
                <Arrow />
              </button>
            </form>

            {/* Terms */}
            <p
              className="text-center mt-6"
              style={{
                fontSize: 12.8,
                fontWeight: 550,
                lineHeight: "20px",
                color: V("color-mute"),
              }}
            >
              By signing up, you agree to our{" "}
              <a
                href="/terms"
                className="no-underline hover:underline font-medium"
                style={{ color: V("color-accent-blue") }}
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="no-underline hover:underline font-medium"
                style={{ color: V("color-accent-blue") }}
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer
        className="py-6 px-6"
        style={{
          background: V("color-canvas-soft"),
          borderTop: `1px solid ${V("color-hairline")}`,
        }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontSize: 12.8,
              fontWeight: 550,
              color: V("color-mute"),
            }}
          >
            &copy; {new Date().getFullYear()} Kreature. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/terms"
              className="no-underline hover:underline"
              style={{
                fontSize: 12.8,
                fontWeight: 550,
                color: V("color-mute"),
              }}
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="no-underline hover:underline"
              style={{
                fontSize: 12.8,
                fontWeight: 550,
                color: V("color-mute"),
              }}
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
