import { Reveal } from "../Reveal";

type Principle = {
  n: string;
  title: string;
  body: string;
};

const principles: Principle[] = [
  {
    n: "01",
    title: "AI should be invisible.",
    body: "The best system is the one your customers never realize they interacted with. We measure success in outcomes — not demos.",
  },
  {
    n: "02",
    title: "You own what we build.",
    body: "Accounts in your name. Code in your repos. No vendor lock-in, no platform fees. Take the system with you anywhere, anytime.",
  },
  {
    n: "03",
    title: "Outcomes over features.",
    body: "Fewer missed calls. Shorter response times. More closed deals. That's the scoreboard. Not how many integrations we have.",
  },
  {
    n: "04",
    title: "One team. End to end.",
    body: "Strategy, build, launch, support — one team, no handoffs, no offshore tickets. You talk to the people building your system.",
  },
];

export function Principles() {
  return (
    <section
      aria-labelledby="principles-title"
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
              What We Believe
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="principles-title"
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
              Four rules we don&apos;t{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>break.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={0.05 + (i % 2) * 0.08}>
              <article
                className="card-hover h-full"
                style={{
                  borderRadius: 12,
                  padding: "40px 32px",
                  borderLeft: "2px solid var(--color-accent)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-accent)",
                    fontSize: "3rem",
                    lineHeight: 1,
                    marginBottom: 20,
                    fontWeight: 400,
                  }}
                >
                  {p.n}
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
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                  }}
                >
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
