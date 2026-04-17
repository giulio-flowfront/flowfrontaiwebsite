import { Reveal } from "../Reveal";

const sharedTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
  lineHeight: 1.3,
  fontWeight: 400,
  letterSpacing: "-0.01em",
};

export function AboutStory() {
  return (
    <section
      aria-label="The FlowFront story"
      style={{ padding: "clamp(120px, 16vw, 200px) clamp(24px, 5vw, 80px)" }}
    >
      <div
        className="mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: "880px", gap: "clamp(40px, 6vw, 72px)" }}
      >
        <Reveal>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            Most AI feels loud. Chatbots that interrupt.
            <br className="hidden md:block" />
            Demos that don&apos;t ship. Tools that don&apos;t integrate.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            FlowFront was built on a different premise:
            <br className="hidden md:block" />
            AI should work quietly, reliably, and invisibly.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text-muted)" }}>
            We started with one service — an AI voice receptionist —
            <br className="hidden md:block" />
            because that&apos;s where the gap between what AI can do and what small businesses actually
            use was widest.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ ...sharedTextStyle, color: "var(--color-text)" }}>
            Now we build automations, AI agents, and custom systems for{" "}
            <span style={{ color: "var(--color-accent)" }}>operators who need AI that actually works</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
