import { Reveal } from "../Reveal";

const sharedTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
  lineHeight: 1.3,
  fontWeight: 400,
  letterSpacing: "-0.01em",
};

export function ProblemSection() {
  return (
    <section
      aria-label="The problem we solve"
      style={{
        padding: "clamp(120px, 16vw, 200px) clamp(24px, 5vw, 80px)",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: "900px", gap: "clamp(40px, 6vw, 72px)" }}
      >
        <Reveal delay={0}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            You scaled the business. The work scaled faster.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            Your team is buried in repetitive tasks.
            <br className="hidden md:block" />
            Tools don&apos;t talk to each other. Leads slip through the cracks.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            Hiring more people is slow, expensive,
            <br className="hidden md:block" />
            and it doesn&apos;t actually fix the problem.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text)" }}>
            You don&apos;t need more hands. You need{" "}
            <span style={{ color: "var(--color-accent)" }}>smarter systems</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
