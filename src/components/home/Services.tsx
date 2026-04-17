import Link from "next/link";
import { Reveal } from "../Reveal";

type Service = {
  name: string;
  body: string;
  icon: React.ReactNode;
  href?: string;
  linkLabel?: string;
  featured?: boolean;
};

const stroke = {
  stroke: "var(--color-accent)",
  strokeWidth: 1.5,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const PhoneIcon = (
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden>
    <path
      d="M7 4h5l2 6-3 2a14 14 0 0 0 7 7l2-3 6 2v5a2 2 0 0 1-2 2C13 25 5 17 5 6a2 2 0 0 1 2-2z"
      {...stroke}
    />
  </svg>
);

const WorkflowIcon = (
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden>
    <rect x="3" y="4" width="7" height="6" rx="1.5" {...stroke} />
    <rect x="20" y="4" width="7" height="6" rx="1.5" {...stroke} />
    <rect x="11.5" y="20" width="7" height="6" rx="1.5" {...stroke} />
    <path d="M6.5 10v3a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-3M15 16v4" {...stroke} />
  </svg>
);

const AgentIcon = (
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden>
    <rect x="5" y="7" width="20" height="16" rx="3" {...stroke} />
    <circle cx="11" cy="15" r="1.5" fill="var(--color-accent)" />
    <circle cx="19" cy="15" r="1.5" fill="var(--color-accent)" />
    <path d="M15 2v5M11 23l-2 4M19 23l2 4" {...stroke} />
  </svg>
);

const FunnelIcon = (
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden>
    <path d="M3 5h24l-9 11v9l-6-3v-6L3 5z" {...stroke} />
  </svg>
);

const services: Service[] = [
  {
    icon: PhoneIcon,
    name: "AI Voice Receptionist",
    body: "A 24/7 voice agent that answers every call, books appointments, and sounds natural. Your best hire — without the hiring.",
    href: "/ai-receptionist",
    linkLabel: "Explore the receptionist",
    featured: true,
  },
  {
    icon: WorkflowIcon,
    name: "Workflow Automation",
    body: "Connect the tools you already use — Make, Zapier, n8n, custom code. Data flows automatically. Manual handoffs gone for good.",
    href: "/workflow-automation",
    linkLabel: "See how we automate",
  },
  {
    icon: AgentIcon,
    name: "Custom AI Agents & Chatbots",
    body: "Branded assistants for web, SMS, and WhatsApp. They qualify leads, answer FAQs, and escalate to your team when it matters.",
    href: "/ai-agents",
    linkLabel: "Design your agent",
  },
  {
    icon: FunnelIcon,
    name: "Lead Gen & CRM Automation",
    body: "Scraping, enrichment, outreach sequences, and CRM sync. A pipeline that fills and qualifies itself while you sleep.",
    href: "/lead-gen",
    linkLabel: "See the pipeline",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      style={{
        padding: "clamp(100px, 14vw, 160px) clamp(24px, 5vw, 80px)",
        scrollMarginTop: "80px",
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
              Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="services-title"
              className="text-balance"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.015em",
                maxWidth: "920px",
              }}
            >
              Four ways we put your business{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>on autopilot.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={0.05 + (i % 2) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const card = (
    <article
      className="card-hover group flex h-full flex-col"
      style={{
        borderRadius: 14,
        padding: "clamp(28px, 3.5vw, 40px)",
        position: "relative",
        ...(service.featured
          ? {
              borderLeft: "2px solid var(--color-accent)",
            }
          : null),
      }}
    >
      {service.featured && (
        <span
          className="absolute text-[0.68rem] uppercase"
          style={{
            top: 20,
            right: 20,
            color: "var(--color-accent)",
            letterSpacing: "0.2em",
            fontFamily: "var(--font-mono)",
            background: "var(--color-accent-dim)",
            border: "1px solid var(--color-border-light)",
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          Flagship
        </span>
      )}

      <div
        className="mb-6 inline-flex items-center justify-center rounded-lg"
        style={{
          width: 56,
          height: 56,
          background: "var(--color-accent-dim)",
          border: "1px solid var(--color-border-light)",
        }}
      >
        {service.icon}
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
        {service.name}
      </h3>

      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: "1.05rem",
          lineHeight: 1.6,
          marginBottom: service.href ? 24 : 0,
          flex: 1,
        }}
      >
        {service.body}
      </p>

      {service.href && (
        <span
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{
            color: "var(--color-accent)",
            letterSpacing: "0.01em",
          }}
        >
          {service.linkLabel ?? "Learn more"}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M3 7h8M7 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}

      {!service.href && (
        <span
          className="mt-6 inline-block text-xs uppercase"
          style={{
            color: "var(--color-text-dim)",
            letterSpacing: "0.2em",
            fontFamily: "var(--font-mono)",
          }}
        >
          Available on request
        </span>
      )}
    </article>
  );

  if (service.href) {
    return (
      <Link href={service.href} className="block h-full no-underline">
        {card}
      </Link>
    );
  }

  return card;
}
