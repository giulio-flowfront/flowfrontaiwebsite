import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

export type LegalSection = {
  title: string;
  body: ReactNode;
};

type Props = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: readonly LegalSection[];
  contactEmail?: string;
};

export function LegalPage({
  eyebrow,
  titleLead,
  titleAccent,
  lastUpdated,
  intro,
  sections,
  contactEmail = "info@flowfrontai.com",
}: Props) {
  return (
    <>
      <section
        aria-label={`${titleLead} ${titleAccent}`}
        className="relative overflow-hidden"
        style={{ padding: "160px clamp(24px, 5vw, 80px) 40px" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            top: "-10%",
            left: "50%",
            width: "min(1100px, 95vw)",
            height: "min(700px, 80vh)",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at center, var(--color-accent-glow) 0%, rgba(59,130,246,0.06) 40%, rgba(6,11,20,0) 70%)",
            filter: "blur(70px)",
          }}
        />

        <div
          className="relative mx-auto flex flex-col items-center text-center"
          style={{ maxWidth: "880px" }}
        >
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
            <h1
              className="text-balance"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.015em",
              }}
            >
              {titleLead}{" "}
              <span style={{ color: "var(--color-accent)" }}>{titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mt-6 text-sm uppercase"
              style={{
                color: "var(--color-text-dim)",
                letterSpacing: "0.18em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Last Updated: {lastUpdated}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Legal content"
        style={{ padding: "40px clamp(24px, 5vw, 80px) clamp(100px, 14vw, 160px)" }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: "820px",
            background: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border)",
            borderRadius: 20,
            padding: "clamp(36px, 5vw, 64px)",
          }}
        >
          <Reveal>
            <div
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                marginBottom: "clamp(40px, 5vw, 56px)",
                paddingBottom: "clamp(32px, 4vw, 40px)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {intro}
            </div>
          </Reveal>

          <div className="flex flex-col" style={{ gap: "clamp(36px, 4vw, 48px)" }}>
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={0.05 + Math.min(i * 0.04, 0.3)}>
                <section>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                      lineHeight: 1.2,
                      fontWeight: 400,
                      color: "var(--color-text)",
                      marginBottom: 16,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {section.title}
                  </h2>
                  <div
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {section.body}
                  </div>
                </section>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <section
                style={{
                  marginTop: 24,
                  paddingTop: "clamp(32px, 4vw, 40px)",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                    lineHeight: 1.2,
                    fontWeight: 400,
                    color: "var(--color-text)",
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Contact
                </h2>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "1.0625rem",
                    lineHeight: 1.75,
                  }}
                >
                  Questions? Email us at{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    style={{ color: "var(--color-accent)" }}
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              </section>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
