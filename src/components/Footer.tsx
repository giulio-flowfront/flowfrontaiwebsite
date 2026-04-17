"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CONTACT_EMAIL = "info@flowfrontai.com";

type FooterLink = {
  label: string;
  href: string;
  type: "link" | "anchor" | "coming-soon";
};

const navLinks: FooterLink[] = [
  { label: "Services", href: "/#services", type: "anchor" },
  { label: "AI Receptionist", href: "/ai-receptionist", type: "link" },
  { label: "About", href: "/about", type: "link" },
  { label: "Pricing", href: "/pricing", type: "link" },
  { label: "Contact", href: "#contact", type: "anchor" },
];

export function Footer() {
  const pathname = usePathname();

  const onAnchorClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (href === "/#services" && pathname === "/") {
      e.preventDefault();
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className="mt-8"
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "80px clamp(24px, 5vw, 80px) 40px",
        background: "rgba(12, 18, 32, 0.4)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-[1.5rem] leading-none tracking-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              FlowFront <span style={{ color: "var(--color-accent)" }}>AI</span>
            </Link>
            <p
              className="mt-4 max-w-xs"
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              An AI automation agency for growing businesses.
            </p>
          </div>

          <div>
            <div
              className="mb-5 text-xs uppercase"
              style={{
                color: "var(--color-text-dim)",
                letterSpacing: "0.18em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Navigate
            </div>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.type === "coming-soon" ? (
                    <span
                      title="Coming Soon"
                      className="cursor-not-allowed text-sm"
                      style={{ color: "var(--color-text-dim)" }}
                    >
                      {link.label}
                    </span>
                  ) : link.type === "anchor" ? (
                    <a
                      href={link.href}
                      onClick={onAnchorClick(link.href)}
                      className="nav-link text-sm transition-colors"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="nav-link text-sm transition-colors"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="mb-5 text-xs uppercase"
              style={{
                color: "var(--color-text-dim)",
                letterSpacing: "0.18em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Contact
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="nav-link text-sm transition-colors"
              style={{ color: "var(--color-text-muted)" }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <span
            className="text-xs"
            style={{
              color: "var(--color-text-dim)",
              letterSpacing: "0.04em",
            }}
          >
            © 2026 FlowFront AI · Tampa, FL
          </span>
          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="/privacy"
                className="nav-link text-xs transition-colors"
                style={{ color: "var(--color-text-dim)", letterSpacing: "0.04em" }}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="nav-link text-xs transition-colors"
                style={{ color: "var(--color-text-dim)", letterSpacing: "0.04em" }}
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
