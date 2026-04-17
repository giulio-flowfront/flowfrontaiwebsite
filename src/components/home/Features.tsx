import { Reveal } from "../Reveal";

type Feature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const stroke = {
  stroke: "var(--color-accent)",
  strokeWidth: 1.5,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const StackIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M14 3l11 6-11 6-11-6 11-6z" {...stroke} />
    <path d="M3 15l11 6 11-6M3 21l11 6 11-6" {...stroke} />
  </svg>
);

const PlugIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M10 3v6M18 3v6" {...stroke} />
    <rect x="6" y="9" width="16" height="7" rx="2" {...stroke} />
    <path d="M14 16v5a3 3 0 0 0 3 3h4" {...stroke} />
  </svg>
);

const RocketIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path
      d="M14 3c5 3 8 8 8 13l-4 4-3-2-2-3-4-3c0-5 5-8 5-9zM10 20l-4 5M14 16l-5 5M18 19l4 5"
      {...stroke}
    />
    <circle cx="15" cy="11" r="1.5" {...stroke} />
  </svg>
);

const SupportIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <circle cx="14" cy="14" r="9" {...stroke} />
    <path d="M14 8v6l4 2" {...stroke} />
    <circle cx="14" cy="14" r="1.5" fill="var(--color-accent)" />
  </svg>
);

const ScaleIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M5 22V6M23 22V10" {...stroke} />
    <path d="M2 22h24M5 10l6-4 6 6 6-4" {...stroke} />
  </svg>
);

const TagIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M4 4h10l10 10-10 10L4 14V4z" {...stroke} />
    <circle cx="9" cy="9" r="1.5" fill="var(--color-accent)" />
  </svg>
);

const features: Feature[] = [
  {
    icon: StackIcon,
    title: "End-to-End Ownership",
    body: "Strategy, build, launch, and ongoing care. One team — no handoffs, no hiring, no loose ends.",
  },
  {
    icon: PlugIcon,
    title: "Your Stack, Not Ours",
    body: "Make, Zapier, n8n, custom code — whatever fits your business. You own everything we build.",
  },
  {
    icon: RocketIcon,
    title: "Ship in Weeks, Not Quarters",
    body: "Most builds go live in 2–6 weeks. You see value before the ROI meeting, not after.",
  },
  {
    icon: SupportIcon,
    title: "Real Human Support",
    body: "A dedicated team you can actually reach. No ticket queues, no chatbots, no runaround.",
  },
  {
    icon: ScaleIcon,
    title: "Built to Scale",
    body: "Every system is monitored, documented, and designed to handle 10x your current volume.",
  },
  {
    icon: TagIcon,
    title: "Transparent Pricing",
    body: "Fixed-scope projects or monthly retainers. No hidden fees. No surprise invoices. Ever.",
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-title"
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
              Why FlowFront
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="features-title"
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
              Everything you need.{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>Nothing you don&apos;t.</span>
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

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article
      className="card-hover h-full"
      style={{
        borderRadius: 12,
        padding: 32,
      }}
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
