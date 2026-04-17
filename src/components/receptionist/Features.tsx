import { Reveal } from "../Reveal";

type Feature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const stroke = { stroke: "var(--color-accent)", strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;

const ClockIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <circle cx="14" cy="14" r="10.5" {...stroke} />
    <path d="M14 8v6l4 2.5" {...stroke} />
  </svg>
);

const CalendarIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <rect x="4" y="6" width="20" height="18" rx="2" {...stroke} />
    <path d="M4 11h20M9 3v5M19 3v5" {...stroke} />
    <circle cx="14" cy="17" r="1.5" fill="var(--color-accent)" />
  </svg>
);

const SparkIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M14 3l2.2 6.2L22 11l-5.8 2.2L14 20l-2.2-6.8L6 11l5.8-1.8L14 3z" {...stroke} />
    <path d="M22 18l1 2.8L26 22l-2.8 1L22 26l-1-3L18 22l3-1.2L22 18z" {...stroke} />
  </svg>
);

const TranscriptIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M5 5h15l3 3v15H5z" {...stroke} />
    <path d="M9 12h10M9 16h10M9 20h6" {...stroke} />
  </svg>
);

const GlobeIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <circle cx="14" cy="14" r="10.5" {...stroke} />
    <path d="M3.5 14h21M14 3.5c3 3.5 4.5 6.8 4.5 10.5s-1.5 7-4.5 10.5M14 3.5c-3 3.5-4.5 6.8-4.5 10.5s1.5 7 4.5 10.5" {...stroke} />
  </svg>
);

const DashboardIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <rect x="4" y="5" width="20" height="18" rx="2" {...stroke} />
    <path d="M4 10h20M8 17l3-3 3 3 5-6" {...stroke} />
  </svg>
);

const features: Feature[] = [
  {
    icon: ClockIcon,
    title: "24/7 Call Answering",
    body: "Every call answered on the first ring. Nights, weekends, holidays — no exceptions.",
  },
  {
    icon: CalendarIcon,
    title: "Appointment Booking",
    body: "Integrates with your calendar to book, reschedule, and confirm — automatically.",
  },
  {
    icon: SparkIcon,
    title: "Custom-Trained AI",
    body: "Not a generic bot. Trained on YOUR services, pricing, hours, and policies.",
  },
  {
    icon: TranscriptIcon,
    title: "Call Summaries & Transcripts",
    body: "Every call logged with a summary and full transcript. Nothing slips through.",
  },
  {
    icon: GlobeIcon,
    title: "Bilingual Support",
    body: "English and Spanish out of the box. Your customers speak — we understand.",
  },
  {
    icon: DashboardIcon,
    title: "Live Dashboard",
    body: "See every call, every booking, and every lead in real time from one place.",
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
              What You Get
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
                maxWidth: "880px",
              }}
            >
              Everything a receptionist does.{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>
                Nothing a receptionist can&apos;t.
              </span>
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
