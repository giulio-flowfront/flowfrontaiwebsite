"use client";

import { Reveal } from "../Reveal";

type Props = {
  lead: string;
  boldLine: string;
  ctaLabel?: string;
  ctaSubtext?: string;
};

export function ServiceCTA({
  lead,
  boldLine,
  ctaLabel = "Book a Free Consultation",
  ctaSubtext = "30 min. No pitch. Just a plan.",
}: Props) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      aria-label="Service call to action"
      className="relative overflow-hidden"
      style={{ padding: "clamp(120px, 18vw, 200px) clamp(24px, 5vw, 80px)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "min(1000px, 95vw)",
          height: "min(1000px, 95vw)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at center, var(--color-accent-glow) 0%, rgba(59,130,246,0.06) 40%, rgba(6,11,20,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="relative mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: "920px" }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.2,
              color: "var(--color-text-muted)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            {lead}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="mt-4 md:mt-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--color-white)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            {boldLine}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center">
            <a
              href="#contact"
              onClick={onClick}
              className="btn-primary inline-flex items-center gap-2 rounded-full text-base font-semibold"
              style={{ padding: "18px 32px", fontFamily: "var(--font-sans)" }}
            >
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="mt-4 text-sm" style={{ color: "var(--color-text-dim)" }}>
              {ctaSubtext}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
