"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "../Reveal";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "How does the setup fee work?",
    a: "The setup fee covers discovery, architecture, custom configuration, testing, and training — the one-time engineering work to get your system live and reliable. It's not a markup on templates; it's the actual cost of building something for your business.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Yes. Start on Starter for a single automation, scale to Growth when you want more, or move to Custom if you need dedicated engineering. We handle migration so nothing breaks.",
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "Month-to-month after the first 60 days. No long-term lock-in. If FlowFront isn't delivering value, you can cancel with 30 days notice — and you keep everything we built.",
  },
  {
    q: "What happens to the system if we stop working together?",
    a: "It keeps running. All accounts are in your name, all code is in your repos, all credentials under your control. We hand off documentation and you can maintain it yourself or bring in another team.",
  },
  {
    q: "Do you work with regulated industries (healthcare, legal, finance)?",
    a: "Yes — most of our work is in service-based businesses with compliance requirements. HIPAA-aware configurations, audit trails, and scoped credentials are standard on Custom plans.",
  },
  {
    q: "How is this different from hiring a consultant or buying a SaaS tool?",
    a: "Consultants hand off a project and disappear. SaaS tools give you a template and expect you to fit your business into it. FlowFront is a managed practice — we build to your workflow, own the ongoing reliability, and stay in the loop as your business evolves.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="pricing-faq-title"
      style={{ padding: "clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "820px" }}>
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <Reveal>
            <span
              className="mb-6 inline-block text-sm uppercase md:text-base"
              style={{
                color: "var(--color-accent)",
                letterSpacing: "0.22em",
                fontFamily: "var(--font-mono)",
              }}
            >
              Questions
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="pricing-faq-title"
              className="text-balance"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.015em",
              }}
            >
              The ones we get{" "}
              <span style={{ color: "var(--color-accent-secondary)" }}>most.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            className="flex flex-col"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.q}
                  style={{ borderBottom: "1px solid var(--color-border)" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    style={{
                      padding: "22px 0",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-sans)",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontSize: "1.0625rem",
                        fontWeight: 500,
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        flex: "none",
                        width: 24,
                        height: 24,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-accent)",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          style={{
                            color: "var(--color-text-muted)",
                            fontSize: "1rem",
                            lineHeight: 1.65,
                            paddingBottom: 24,
                            paddingRight: 32,
                          }}
                        >
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
