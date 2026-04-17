import { Reveal } from "../Reveal";

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "100%", label: "Call Answer Rate" },
  { value: "48hr", label: "Average Setup Time" },
  { value: "24/7", label: "Always Available" },
  { value: "$35K+", label: "Saved vs. Hiring" },
];

export function Stats() {
  return (
    <section
      aria-label="FlowFront AI in numbers"
      style={{ padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)" }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1200px" }}
      >
        <div
          className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-0"
          style={{
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
            padding: "clamp(40px, 6vw, 64px) 0",
          }}
        >
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 + i * 0.08}>
              <div
                className="flex flex-col items-center text-center"
                style={{
                  borderLeft:
                    i > 0
                      ? "1px solid var(--color-border)"
                      : "none",
                  padding: "0 16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    lineHeight: 1,
                    color: "var(--color-accent)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-4 text-xs uppercase md:text-sm"
                  style={{
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.16em",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
