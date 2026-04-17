import { Reveal } from "../Reveal";

const sharedTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
  lineHeight: 1.3,
  fontWeight: 400,
  letterSpacing: "-0.01em",
};

export function ProblemSection() {
  return (
    <section
      aria-label="The problem we solve"
      style={{
        padding: "clamp(120px, 16vw, 200px) clamp(24px, 5vw, 80px)",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: "880px", gap: "clamp(40px, 6vw, 72px)" }}
      >
        <Reveal delay={0}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            You built a great business. You hired good people.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            But the phone still rings unanswered. Voicemails pile up.
            <br className="hidden md:block" />
            New patients and customers slip through the cracks.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            Hiring another receptionist costs $35K+ a year.
            <br className="hidden md:block" />
            And they still can&apos;t work nights, weekends, or holidays.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text)" }}>
            You don&apos;t need more staff. You need a{" "}
            <span style={{ color: "var(--color-accent)" }}>smarter front desk</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
