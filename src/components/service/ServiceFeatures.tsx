import { Reveal } from "../Reveal";

export type ServiceFeature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  features: readonly ServiceFeature[];
};

export function ServiceFeatures({ eyebrow, headlineLead, headlineAccent, features }: Props) {
  return (
    <section
      aria-labelledby="svc-features-title"
      style={{
        padding: "clamp(100px, 14vw, 160px) clamp(24px, 5vw, 80px)",
        background: "rgba(12, 18, 32, 0.35)",
      }}
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
              id="svc-features-title"
              className="text-balance"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.015em",
                maxWidth: "900px",
              }}
            >
              {headlineLead}{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>{headlineAccent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.05 + (i % 3) * 0.08}>
              <FeatureCard feature={f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: ServiceFeature }) {
  return (
    <article
      className="card-hover h-full"
      style={{ borderRadius: 12, padding: 32 }}
    >
      <div
        className="mb-6 inline-flex items-center justify-center rounded-lg"
        style={{
          width: 52,
          height: 52,
          background: "var(--color-accent-dim)",
          border: "1px solid var(--color-border-light)",
        }}
      >
        {feature.icon}
      </div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "var(--color-text)",
          marginBottom: 10,
          letterSpacing: "-0.01em",
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: "1rem",
          lineHeight: 1.6,
        }}
      >
        {feature.body}
      </p>
    </article>
  );
}
