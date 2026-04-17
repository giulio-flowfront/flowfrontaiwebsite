"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const services = [
  "AI Voice Receptionist",
  "Workflow Automation",
  "Custom AI Agent / Chatbot",
  "Lead Gen & CRM Automation",
  "Not Sure Yet — Let's Talk",
];

const inputStyle: React.CSSProperties = {
  background: "var(--color-bg-card)",
  border: "1px solid var(--color-border)",
  color: "var(--color-text)",
  height: 48,
  borderRadius: 8,
  padding: "0 16px",
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  color: "var(--color-text-muted)",
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  fontFamily: "var(--font-sans)",
  display: "block",
  marginBottom: 8,
};

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      {children}
    </div>
  );
}

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@flowfrontai.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_gotcha")) return;

    const payload: Record<string, string> = {
      name: String(data.get("name") ?? ""),
      business: String(data.get("business") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      _subject: `New FlowFront AI Lead: ${String(data.get("business") ?? "Unknown")}`,
      _replyto: String(data.get("email") ?? ""),
      _template: "table",
    };

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = (await res.json().catch(() => null)) as
        | { success?: string | boolean }
        | null;
      if (json && json.success !== undefined && json.success !== "true" && json.success !== true) {
        throw new Error("FormSubmit rejected the submission");
      }
      setSent(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? "Something went wrong sending that. Please try again or email us directly at info@flowfrontai.com."
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 4px var(--color-accent-dim)";
  };
  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
    (e.currentTarget as HTMLElement).style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      style={{ padding: "clamp(100px, 14vw, 160px) clamp(24px, 5vw, 80px)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "720px" }}>
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
              Get in Touch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="contact-title"
              className="text-balance"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.015em",
              }}
            >
              Let&apos;s map what&apos;s worth <span style={{ color: "var(--color-accent-secondary)" }}>automating.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            className="mx-auto"
            style={{
              maxWidth: "560px",
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
              borderRadius: 16,
              padding: "clamp(28px, 4vw, 44px)",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    aria-hidden
                  >
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M20 33l8 8 16-18"
                      stroke="var(--color-accent)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                    />
                  </motion.svg>
                  <h3
                    className="mt-6"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.75rem",
                      color: "var(--color-text)",
                    }}
                  >
                    Thanks! We&apos;ll be in touch within 24 hours.
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "1rem",
                    }}
                  >
                    Keep an eye on your inbox — including the spam folder, just in case.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: 1,
                      height: 1,
                      opacity: 0,
                    }}
                    aria-hidden
                  />
                  <Field id="name" label="Full Name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      style={inputStyle}
                    />
                  </Field>
                  <Field id="business" label="Business Name">
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      autoComplete="organization"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      style={inputStyle}
                    />
                  </Field>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field id="email" label="Email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        style={inputStyle}
                      />
                    </Field>
                    <Field id="phone" label="Phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        style={inputStyle}
                      />
                    </Field>
                  </div>
                  <Field id="service" label="What are you looking to automate?">
                    <div style={{ position: "relative" }}>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        onFocus={onFocus}
                        onBlur={onBlur}
                        style={{
                          ...inputStyle,
                          appearance: "none",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          paddingRight: 44,
                        }}
                      >
                        <option value="" disabled style={{ color: "var(--color-text-dim)" }}>
                          Pick the closest fit…
                        </option>
                        {services.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden
                        style={{
                          position: "absolute",
                          right: 16,
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                        }}
                      >
                        <path
                          d="M3 5l4 4 4-4"
                          stroke="var(--color-text-muted)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Field>
                  <Field id="message" label="Message (optional)">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      style={{
                        ...inputStyle,
                        height: "auto",
                        padding: "14px 16px",
                        resize: "vertical",
                        minHeight: 96,
                      }}
                    />
                  </Field>
                  {errorMessage && (
                    <p
                      role="alert"
                      style={{
                        color: "#FCA5A5",
                        background: "rgba(239, 68, 68, 0.08)",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                        borderRadius: 8,
                        padding: "12px 16px",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 w-full rounded-lg font-semibold transition-all duration-300"
                    style={{
                      background: "var(--color-accent)",
                      color: "var(--color-bg)",
                      height: 52,
                      fontSize: "1rem",
                      letterSpacing: "0.01em",
                      fontFamily: "var(--font-sans)",
                      cursor: submitting ? "wait" : "pointer",
                      opacity: submitting ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 32px var(--color-accent-glow)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
