type Props = {
  items: readonly string[];
  ariaLabel?: string;
};

function Row({ items }: { items: readonly string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16">
      {items.map((label) => (
        <span key={label} className="flex items-center gap-16">
          <span
            className="whitespace-nowrap text-sm uppercase"
            style={{
              color: "var(--color-text-dim)",
              letterSpacing: "0.18em",
              fontFamily: "var(--font-sans)",
            }}
          >
            {label}
          </span>
          <span
            aria-hidden
            style={{
              width: 4,
              height: 4,
              borderRadius: 999,
              background: "var(--color-border-light)",
            }}
          />
        </span>
      ))}
    </div>
  );
}

export function SocialProofBar({ items, ariaLabel = "Marquee" }: Props) {
  return (
    <section
      aria-label={ariaLabel}
      className="w-full"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        background: "rgba(12, 18, 32, 0.4)",
      }}
    >
      <div
        className="relative flex items-center overflow-hidden"
        style={{ height: 56 }}
      >
        <div className="marquee-track">
          <Row items={items} />
          <Row items={items} />
        </div>
      </div>
    </section>
  );
}
