"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      style={{ padding: "120px clamp(24px, 4vw, 64px) 80px" }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "140vw",
          height: "120vh",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, var(--color-accent-glow) 0%, rgba(59,130,246,0.08) 38%, rgba(6,11,20,0) 68%)",
          filter: "blur(60px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <div
        className="relative mx-auto flex w-full flex-col items-center text-center"
        style={{ maxWidth: "1280px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          className="mb-8 text-sm font-medium uppercase"
          style={{
            color: "var(--color-accent)",
            letterSpacing: "0.18em",
            fontFamily: "var(--font-sans)",
          }}
        >
          AI Automation for Growing Businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="text-balance"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
            lineHeight: 1.1,
            fontWeight: 400,
            letterSpacing: "-0.015em",
          }}
        >
          Your Operations,
          <br />
          <span style={{ color: "var(--color-accent)" }}>On Autopilot.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-10 text-balance"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "clamp(1.125rem, 1.35vw, 1.25rem)",
            lineHeight: 1.6,
            maxWidth: "800px",
          }}
        >
          FlowFront AI builds the systems that run your business in the background — so your team can
          focus on the work that actually moves the needle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
          className="mt-12 flex flex-col items-center"
        >
          <a
            href="#contact"
            onClick={handleCtaClick}
            className="btn-primary inline-flex items-center gap-2 rounded-full text-base font-semibold"
            style={{
              padding: "18px 32px",
              fontFamily: "var(--font-sans)",
            }}
          >
            Book a Free Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-5 text-sm" style={{ color: "var(--color-text-dim)" }}>
            30 min. No pitch. Just a plan.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs uppercase"
          style={{
            color: "var(--color-text-dim)",
            letterSpacing: "0.2em",
          }}
        >
          See what we build
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="pulse-down"
          aria-hidden
        >
          <path d="M8 4v15M2 13l6 6 6-6" stroke="var(--color-text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
