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
      style={{ padding: "120px clamp(24px, 5vw, 80px) 80px" }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "min(900px, 90vw)",
          height: "min(900px, 90vw)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at center, var(--color-accent-glow) 0%, rgba(59,130,246,0.08) 35%, rgba(6,11,20,0) 65%)",
          filter: "blur(40px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <div
        className="relative mx-auto flex w-full flex-col items-center text-center"
        style={{ maxWidth: "960px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          className="mb-6 text-xs font-medium uppercase md:text-sm"
          style={{
            color: "var(--color-accent)",
            letterSpacing: "0.18em",
            fontFamily: "var(--font-sans)",
          }}
        >
          AI-Powered Voice Receptionist
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="text-balance"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            lineHeight: 1.05,
            fontWeight: 400,
            letterSpacing: "-0.015em",
          }}
        >
          Your Front Desk,
          <br />
          <span style={{ color: "var(--color-accent)" }}>Reimagined.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-8 text-balance"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
            lineHeight: 1.6,
            maxWidth: "620px",
          }}
        >
          FlowFront AI answers every call, books every appointment, and never puts a customer on hold —
          so you can focus on what you do best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
          className="mt-10 flex flex-col items-center"
        >
          <a
            href="#contact"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 rounded-full text-base font-semibold transition-all duration-300"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              padding: "18px 32px",
              fontFamily: "var(--font-sans)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 16px 40px var(--color-accent-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            Book a Free Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-4 text-sm" style={{ color: "var(--color-text-dim)" }}>
            No contracts. Live in 48 hours.
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
          See how it works
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
