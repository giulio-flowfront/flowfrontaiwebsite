import { Reveal } from "../Reveal";

const items = [
  {
    title: "Full ownership",
    body: "Accounts in your name, code in your repos, credentials you control. Leave anytime with everything intact.",
  },
  {
    title: "Dedicated team",
    body: "One team — strategy, build, support. You talk to the people actually building your systems.",
  },
  {
    title: "Monitoring & alerts",
    body: "Every automation is logged, health-checked, and alerted on failure. No silent outages.",
  },
  {
    title: "Quarterly reviews",
    body: "We measure what's working, what isn't, and where to invest next — every 90 days.",
  },
];

export function PricingIncludes() {
  return (
    <section
      aria-labelledby="pricing-includes-title"
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)",
        background: "rgba(12, 18, 32, 0.35)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="mb-14 flex flex-col items-center text-center md:mb-16">
          <Reveal>
            <span
              className="mb-6 inline-block text-sm uppercase md:text-base"
              style={{
                color: "var(--color-accent)",
                letterSpacing: "0.22em",
                fontFamily: "var(--font-mono)",
              }}
            >
              Always Included
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="pricing-includes-title"
              className="text-balance"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.015em",
                maxWidth: "820px",
              }}
            >
              What every plan{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>gets.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.05 + i * 0.06}>
              <article
                className="card-hover h-full"
                style={{ borderRadius: 12, padding: 28 }}
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
