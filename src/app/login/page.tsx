"use client";

import { useState } from "react";

const V = (n: string) => `var(--${n})`;

function Arrow() {
  return (
    <span className="ml-1 text-[1.1em] leading-none select-none">→</span>
  );
}

export default function LoginPage() {
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
        <div className="w-full" style={{ maxWidth: 440 }}>
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
              Log in to Kreature
            </h1>
            <p
              className="text-center mb-8"
              style={{
                fontSize: 14,
                lineHeight: "22.4px",
                color: V("color-body-mid"),
              }}
            >
              Continue building with AI-powered speed.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                <div className="flex items-center justify-between">
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
                  <a
                    href="/forgot-password"
                    className="no-underline hover:underline"
                    style={{
                      fontSize: 14,
                      color: V("color-accent-blue"),
                      lineHeight: "22.4px",
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
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
                Log in
                <Arrow />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
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

            {/* SSO button */}
            <a
              href="/login/sso"
              className="w-full block text-center font-medium no-underline transition-all"
              style={{
                fontSize: 16,
                fontWeight: 500,
                padding: "16px 24px",
                borderRadius: 4,
                background: V("color-canvas"),
                color: V("color-ink"),
                border: `1px solid ${V("color-hairline")}`,
                lineHeight: 1.5,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = V("color-canvas-soft");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = V("color-canvas");
              }}
            >
              Log in with SSO
            </a>
          </div>

          {/* Signup link */}
          <p
            className="text-center mt-6"
            style={{
              fontSize: 14,
              lineHeight: "22.4px",
              color: V("color-body-mid"),
            }}
          >
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="font-medium no-underline hover:underline"
              style={{ color: V("color-accent-blue") }}
            >
              Start for free
              <Arrow />
            </a>
          </p>
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
