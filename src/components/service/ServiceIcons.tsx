const s = {
  stroke: "var(--color-accent)",
  strokeWidth: 1.5,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const dot = { fill: "var(--color-accent)" };

export const IconPlug = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M10 3v6M18 3v6" {...s} />
    <rect x="6" y="9" width="16" height="7" rx="2" {...s} />
    <path d="M14 16v5a3 3 0 0 0 3 3h4" {...s} />
  </svg>
);

export const IconAlert = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M14 4l10 18H4L14 4z" {...s} />
    <path d="M14 12v4" {...s} />
    <circle cx="14" cy="19" r="0.75" {...dot} />
  </svg>
);

export const IconDocs = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M5 5h15l3 3v15H5z" {...s} />
    <path d="M9 12h10M9 16h10M9 20h6" {...s} />
  </svg>
);

export const IconKey = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <circle cx="9" cy="17" r="4" {...s} />
    <path d="M12 14l11-11M18 8l3 3M16 10l3 3" {...s} />
  </svg>
);

export const IconCode = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M9 8l-5 6 5 6M19 8l5 6-5 6M16 4l-4 20" {...s} />
  </svg>
);

export const IconShield = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M14 3l10 4v8c0 6-5 10-10 10s-10-4-10-10V7l10-4z" {...s} />
    <path d="M10 14l3 3 5-5" {...s} />
  </svg>
);

export const IconChat = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M4 6h20v14H11l-5 4v-4H4V6z" {...s} />
    <circle cx="10" cy="13" r="1.25" {...dot} />
    <circle cx="14" cy="13" r="1.25" {...dot} />
    <circle cx="18" cy="13" r="1.25" {...dot} />
  </svg>
);

export const IconSms = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <rect x="8" y="3" width="12" height="22" rx="2" {...s} />
    <path d="M12 21h4" {...s} />
    <path d="M11 9h6M11 13h4" {...s} />
  </svg>
);

export const IconPalette = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path
      d="M14 4a10 10 0 1 0 5 18c1-.5 1-2 0-2.5s-1-2 0-2.5h3a3 3 0 0 0 3-3A10 10 0 0 0 14 4z"
      {...s}
    />
    <circle cx="9" cy="12" r="1.25" {...dot} />
    <circle cx="13" cy="9" r="1.25" {...dot} />
    <circle cx="18" cy="10" r="1.25" {...dot} />
  </svg>
);

export const IconFunnel = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M3 5h22l-8 10v8l-6-3v-5L3 5z" {...s} />
  </svg>
);

export const IconSwap = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M5 9h16l-3-3M23 19H7l3 3" {...s} />
  </svg>
);

export const IconBell = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M6 19V13a8 8 0 1 1 16 0v6l2 2H4l2-2z" {...s} />
    <path d="M11 23a3 3 0 0 0 6 0" {...s} />
  </svg>
);

export const IconMail = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <rect x="3" y="6" width="22" height="16" rx="2" {...s} />
    <path d="M3 8l11 8L25 8" {...s} />
  </svg>
);

export const IconHandoff = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <circle cx="9" cy="10" r="3" {...s} />
    <path d="M3 22c0-3 3-5 6-5s6 2 6 5" {...s} />
    <path d="M17 11h6M20 8l3 3-3 3" {...s} />
  </svg>
);

export const IconLogs = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <rect x="4" y="4" width="20" height="20" rx="2" {...s} />
    <path d="M8 10h12M8 14h12M8 18h8" {...s} />
  </svg>
);

export const IconMap = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M3 6l7-2 8 2 7-2v18l-7 2-8-2-7 2V6z" {...s} />
    <path d="M10 4v20M18 6v20" {...s} />
  </svg>
);

export const IconTarget = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <circle cx="14" cy="14" r="10" {...s} />
    <circle cx="14" cy="14" r="5" {...s} />
    <circle cx="14" cy="14" r="1.5" {...dot} />
  </svg>
);

export const IconSync = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M4 14a10 10 0 0 1 18-6l2-2v6h-6M24 14a10 10 0 0 1-18 6l-2 2v-6h6" {...s} />
  </svg>
);

export const IconChart = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M4 22V6M24 22H4" {...s} />
    <path d="M8 18v-5M13 18v-9M18 18v-3M23 18v-7" {...s} />
  </svg>
);

export const IconStar = (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
    <path d="M14 3l3 7 8 .5-6 5.5 2 8-7-4-7 4 2-8-6-5.5 8-.5 3-7z" {...s} />
  </svg>
);
