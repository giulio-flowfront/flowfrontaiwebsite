import Image from "next/image";
import { Reveal } from "../Reveal";

export function Founder() {
  return (
    <section
      aria-labelledby="founder-title"
      style={{
        padding: "clamp(100px, 14vw, 160px) clamp(24px, 5vw, 80px)",
        background: "rgba(12, 18, 32, 0.35)",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: "820px" }}
      >
        <Reveal>
          <span
            className="mb-6 inline-block text-sm uppercase md:text-base"
            style={{
              color: "var(--color-accent)",
              letterSpacing: "0.22em",
              fontFamily: "var(--font-mono)",
            }}
          >
            Founder
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="relative overflow-hidden"
            style={{
              width: 220,
              height: 220,
              borderRadius: 16,
              border: "1px solid var(--color-border-light)",
              background: "var(--color-bg-card)",
              marginBottom: 40,
            }}
          >
            <Image
              src="/giulio.jpg"
              alt="Giulio Caruso, founder of FlowFront AI"
              fill
              sizes="220px"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="founder-title"
            className="text-balance"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "-0.015em",
              marginBottom: 32,
            }}
          >
            Giulio Caruso.{" "}
            <span style={{ color: "var(--color-accent-secondary)" }}>
              Founder & Principal Engineer.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="flex flex-col gap-5 text-left"
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            <p>
              I started FlowFront AI after watching dozens of small businesses lose customers
              every week to missed calls, unresponsive systems, and tools that couldn&apos;t keep
              up with their growth.
            </p>
            <p>
              I&apos;ve spent years building real AI systems for service-based businesses —
              medical clinics, law firms, home services. The pattern was always the same:
              great teams drowning in repetitive work, generic software that wasn&apos;t built
              for how they actually operate.
            </p>
            <p>
              FlowFront is a managed AI practice. Every system we build is{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>
                configured to your business, owned by you, and maintained by us
              </span>
              . No templates. No chatbot-in-a-box. No handoffs to a vendor you&apos;ve never met.
            </p>
            <p>
              Based in Tampa, FL. Reach me directly —{" "}
              <a
                href="mailto:giulio@flowfrontai.com"
                className="transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                giulio@flowfrontai.com
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
