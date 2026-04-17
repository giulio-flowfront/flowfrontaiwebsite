import { Reveal } from "../Reveal";

type Industry = {
  name: string;
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

const SpineIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M14 3v22" {...stroke} />
    <path d="M10 6c2 1 6 1 8 0M10 11c2 1 6 1 8 0M10 16c2 1 6 1 8 0M10 21c2 1 6 1 8 0" {...stroke} />
  </svg>
);

const ToothIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path
      d="M14 4c-3.5 0-7 1.5-7 5 0 3 1 4 1.5 7 .5 3 1 8 2.5 8s1.5-5 3-5 1.5 5 3 5 2-5 2.5-8c.5-3 1.5-4 1.5-7 0-3.5-3.5-5-7-5z"
      {...stroke}
    />
  </svg>
);

const ScalesIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M14 4v20M6 24h16" {...stroke} />
    <path d="M4 11l4-7 4 7a4 4 0 0 1-8 0zM16 11l4-7 4 7a4 4 0 0 1-8 0z" {...stroke} />
  </svg>
);

const FlameIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path
      d="M14 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 1-5-2 1-4 3-4 7a7 7 0 1 0 14 0c0-7-6-8-6-12z"
      {...stroke}
    />
  </svg>
);

const ScissorsIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <circle cx="8" cy="8" r="3.5" {...stroke} />
    <circle cx="8" cy="20" r="3.5" {...stroke} />
    <path d="M11 10l13 10M11 18L24 8" {...stroke} />
  </svg>
);

const BarberIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <rect x="9" y="3" width="10" height="22" rx="2" {...stroke} />
    <path d="M9 8l10 5M9 13l10 5M9 18l10 5" {...stroke} />
  </svg>
);

const industries: Industry[] = [
  {
    icon: SpineIcon,
    name: "Chiropractors",
    body: "Stop losing new patients to voicemail during adjustments.",
  },
  {
    icon: ToothIcon,
    name: "Dental Offices",
    body: "Fill cancellations instantly with automated rebooking.",
  },
  {
    icon: ScalesIcon,
    name: "Law Firms",
    body: "Capture every potential client call — intake never sleeps.",
  },
  {
    icon: FlameIcon,
    name: "HVAC Companies",
    body: "Book emergency service calls 24/7 without a dispatcher.",
  },
  {
    icon: ScissorsIcon,
    name: "Salons & Spas",
    body: "Free your staff from the phone so they can focus on clients.",
  },
  {
    icon: BarberIcon,
    name: "Barbershops",
    body: "Let the AI handle bookings while you handle fades.",
  },
];

export function Industries() {
  return (
    <section
      aria-labelledby="industries-title"
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
              Who We Serve
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="industries-title"
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
              Built for businesses that{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>can&apos;t miss a call.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={0.05 + (i % 3) * 0.08}>
              <IndustryCard industry={ind} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
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
        {industry.icon}
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
        {industry.name}
      </h3>
      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: "1rem",
          lineHeight: 1.6,
        }}
      >
        {industry.body}
      </p>
    </article>
  );
}
