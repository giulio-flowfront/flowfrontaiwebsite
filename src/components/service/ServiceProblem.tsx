import { Reveal } from "../Reveal";

type Props = {
  lines: readonly string[];
  finalLine: {
    lead: string;
    accent: string;
    tail?: string;
  };
};

const sharedTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
  lineHeight: 1.3,
  fontWeight: 400,
  letterSpacing: "-0.01em",
};

export function ServiceProblem({ lines, finalLine }: Props) {
  return (
    <section
      aria-label="The problem"
      style={{ padding: "clamp(120px, 16vw, 200px) clamp(24px, 5vw, 80px)" }}
    >
      <div
        className="mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: "880px", gap: "clamp(40px, 6vw, 72px)" }}
      >
        {lines.map((line, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>{line}</p>
          </Reveal>
        ))}
        <Reveal delay={lines.length * 0.08}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text)" }}>
            {finalLine.lead}{" "}
            <span style={{ color: "var(--color-accent)" }}>{finalLine.accent}</span>
            {finalLine.tail ? finalLine.tail : "."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
