import { Reveal } from "../Reveal";

type Step = {
  n: string;
  title: string;
  body: string;
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  steps: readonly Step[];
};

export function ServiceHowItWorks({ eyebrow, headlineLead, headlineAccent, steps }: Props) {
  return (
    <section
      aria-labelledby="svc-how-title"
      style={{ padding: "clamp(100px, 14vw, 160px) clamp(24px, 5vw, 80px)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <Reveal>
            <span
              className="mb-6 inline-block text-sm uppercase md:text-base"
              style={{
                color: "var(--color-accent)",
                letterSpacing: "0.22em",
                fontFamily: "var(--font-mono)",
              }}
            >
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="svc-how-title"
              className="text-balance"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.015em",
                maxWidth: "880px",
              }}
            >
              {headlineLead}{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>{headlineAccent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={0.1 + i * 0.1}>
              <article
                className="h-full"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderLeft: "2px solid var(--color-accent)",
                  borderRadius: 12,
                  padding: "40px 32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-accent)",
                    fontSize: "4rem",
                    lineHeight: 1,
                    marginBottom: 24,
                    fontWeight: 400,
                  }}
                >
                  {step.n}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                  }}
                >
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
