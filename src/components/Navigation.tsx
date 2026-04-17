"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  type: "link" | "anchor" | "coming-soon";
};

const links: NavLink[] = [
  { label: "Services", href: "/#services", type: "anchor" },
  { label: "AI Receptionist", href: "/ai-receptionist", type: "link" },
  { label: "About", href: "/about", type: "link" },
  { label: "Pricing", href: "/pricing", type: "link" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("contact");
    if (el) {
      e.preventDefault();
      setOpen(false);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setOpen(false);
    }
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      setOpen(false);
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(12, 18, 32, 0.72)" : "rgba(12, 18, 32, 0.32)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: "1200px",
            padding: "18px clamp(24px, 5vw, 80px)",
          }}
          aria-label="Primary"
        >
          <Link
            href="/"
            className="text-[1.5rem] leading-none tracking-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            FlowFront <span style={{ color: "var(--color-accent)" }}>AI</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {links.map((l) => {
              if (l.type === "coming-soon") {
                return (
                  <span
                    key={l.label}
                    title="Coming Soon"
                    className="nav-link cursor-not-allowed text-sm"
                    style={{ color: "var(--color-text-dim)", letterSpacing: "0.02em" }}
                    aria-disabled="true"
                  >
                    {l.label}
                  </span>
                );
              }

              const isActive =
                l.type === "link" && l.href !== "#" && pathname === l.href;

              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={l.label === "Services" ? handleServicesClick : undefined}
                  className="nav-link text-sm transition-colors"
                  style={{
                    color: isActive ? "var(--color-accent)" : "var(--color-text-muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href="#contact"
              onClick={handleCtaClick}
              className="btn-primary btn-sm rounded-full text-sm font-medium"
              style={{ padding: "10px 20px" }}
            >
              Get Started
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden"
            style={{ color: "var(--color-text)" }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
              <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[60] md:hidden"
            style={{ background: "var(--color-bg-elevated)" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="flex items-center justify-between"
              style={{ padding: "18px clamp(24px, 5vw, 80px)" }}
            >
              <span
                className="text-[1.5rem] leading-none tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                FlowFront <span style={{ color: "var(--color-accent)" }}>AI</span>
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                style={{ color: "var(--color-text)" }}
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
                  <path d="M6 6l14 14M20 6L6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div
              className="flex flex-col gap-7"
              style={{ padding: "40px clamp(24px, 5vw, 80px)" }}
            >
              {links.map((l) => {
                if (l.type === "coming-soon") {
                  return (
                    <span
                      key={l.label}
                      className="cursor-not-allowed"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.75rem, 7vw, 2.75rem)",
                        color: "var(--color-text-dim)",
                      }}
                    >
                      {l.label}
                      <span
                        className="ml-3 align-middle text-xs uppercase"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "var(--color-accent)",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Soon
                      </span>
                    </span>
                  );
                }
                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={l.label === "Services" ? handleServicesClick : undefined}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.75rem, 7vw, 2.75rem)",
                      color: "var(--color-text)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                );
              })}

              <a
                href="#contact"
                onClick={handleCtaClick}
                className="btn-primary mt-4 inline-flex items-center justify-center rounded-full text-base font-medium"
                style={{
                  padding: "16px 24px",
                  width: "fit-content",
                }}
              >
                Get Started →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
