"use client";

import { Reveal } from "../Reveal";

type Tier = {
  name: string;
  tagline: string;
  setup: string;
  monthly: string;
  monthlyNote?: string;
  includes: string[];
  bestFor: string;
  ctaLabel: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "One service. Up and running fast.",
    setup: "$2,500",
    monthly: "$750",
    monthlyNote: "per month",
    includes: [
      "One automation or AI system",
      "Custom configured to your business",
      "Monthly tuning & health checks",
      "Email support, 1-business-day SLA",
      "All blueprints & credentials handed to you",
    ],
    bestFor: "Single-location clinics, solo operators, and teams launching their first automation.",
    ctaLabel: "Start With Starter",
  },
  {
    name: "Growth",
    tagline: "Multiple automations. Running in lockstep.",
    setup: "$5,000",
    monthly: "$1,800",
    monthlyNote: "per month",
    includes: [
      "Up to 4 automations or AI systems",
      "Deep integration across your stack",
      "Weekly tuning & iteration",
      "Priority support + dedicated Slack channel",
      "Quarterly strategy review",
      "You own everything we build",
    ],
    bestFor: "Multi-location businesses, growing service ops, and teams scaling beyond their first hire.",
    ctaLabel: "Get Growth",
    featured: true,
  },
  {
    name: "Custom",
    tagline: "Enterprise-grade. Built for scale.",
    setup: "Custom",
    monthly: "Custom",
    includes: [
      "Unlimited automations & AI systems",
      "Dedicated engineer embedded with your team",
      "Custom integrations (EMR, ERP, regulated APIs)",
      "SLAs, uptime guarantees, compliance review",
      "24/7 monitoring & on-call support",
      "Complete source ownership & handoff docs",
    ],
    bestFor: "Enterprise teams, regulated industries, and ops needing dedicated engineering capacity.",
    ctaLabel: "Request a Quote",
  },
];

export function PricingTiers() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      aria-labelledby="pricing-tiers-title"
      style={{ padding: "clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <h2 id="pricing-tiers-title" className="sr-only">
          Pricing tiers
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 lg:items-stretch">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={0.05 + i * 0.08}>
              <article
                className="card-hover flex h-full flex-col"
                style={{
                  borderRadius: 16,
                  padding: "clamp(32px, 3.5vw, 48px)",
                  borderLeft: tier.featured ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
                  position: "relative",
                  ...(tier.featured
                    ? { background: "var(--color-bg-card-hover)" }
                    : null),
                }}
              >
                {tier.featured && (
                  <span
                    className="absolute text-[0.68rem] uppercase"
                    style={{
                      top: 24,
                      right: 24,
                      color: "var(--color-accent)",
                      letterSpacing: "0.2em",
                      fontFamily: "var(--font-mono)",
                      background: "var(--color-accent-dim)",
                      border: "1px solid var(--color-border-light)",
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    Most Popular
                  </span>
                )}

                <div className="mb-8">
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.25rem",
                      lineHeight: 1.1,
                      fontWeight: 400,
                      color: "var(--color-text)",
                      marginBottom: 8,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {tier.tagline}
                  </p>
                </div>

                <div
                  className="mb-8 flex flex-col gap-1 pb-8"
                  style={{ borderBottom: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-baseline gap-2">
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
                        lineHeight: 1,
                        color: "var(--color-accent)",
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {tier.monthly}
                    </span>
                    {tier.monthlyNote && (
                      <span
                        style={{
                          color: "var(--color-text-muted)",
                          fontSize: "0.95rem",
                        }}
                      >
                        {tier.monthlyNote}
                      </span>
                    )}
                  </div>
                  <div
                    className="mt-2 text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span style={{ color: "var(--color-text-dim)" }}>Setup:</span>{" "}
                    <span style={{ color: "var(--color-text)" }}>{tier.setup}</span>
                    {tier.setup !== "Custom" && (
                      <span style={{ color: "var(--color-text-dim)" }}> (one-time)</span>
                    )}
                  </div>
                </div>

                <ul className="mb-10 flex flex-col gap-3">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.95rem",
                        lineHeight: 1.55,
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                        style={{ flex: "none", marginTop: 4 }}
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="var(--color-accent)"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className="mb-8 pb-8"
                  style={{
                    color: "var(--color-text-dim)",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {tier.bestFor}
                </p>

                <a
                  href="#contact"
                  onClick={onClick}
                  className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    tier.featured ? "btn-primary" : ""
                  }`}
                  style={{
                    padding: "14px 20px",
                    fontFamily: "var(--font-sans)",
                    ...(tier.featured
                      ? {}
                      : {
                          border: "1px solid var(--color-border-light)",
                          color: "var(--color-text)",
                          background: "transparent",
                        }),
                  }}
                >
                  {tier.ctaLabel}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
