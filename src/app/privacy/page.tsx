import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — FlowFront AI",
  description:
    "FlowFront AI's Privacy Policy — how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.",
};

const sections: readonly LegalSection[] = [
  {
    title: "Information We Collect",
    body: (
      <div className="flex flex-col gap-4">
        <p>
          <strong style={{ color: "var(--color-accent-secondary)" }}>Personal Information:</strong>{" "}
          Name, email address, phone number, business name, and any information you submit
          through forms or direct communication.
        </p>
        <p>
          <strong style={{ color: "var(--color-accent-secondary)" }}>
            Usage and Technical Information:
          </strong>{" "}
          IP address, browser type, device information, pages visited, and referring URLs.
        </p>
        <p>
          <strong style={{ color: "var(--color-accent-secondary)" }}>
            Call and Communication Data:
          </strong>{" "}
          Call recordings, transcripts, call metadata, and appointment-related information
          processed solely to provide our services.
        </p>
      </div>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <p>
        We use collected information to provide and maintain services, respond to inquiries,
        configure AI automation systems, improve functionality, communicate updates, and comply
        with legal obligations.
      </p>
    ),
  },
  {
    title: "Data Sharing and Disclosure",
    body: (
      <p>
        We do not sell personal information. Data may be shared with trusted service providers,
        to comply with legal obligations, or to protect rights and security.
      </p>
    ),
  },
  {
    title: "Data Security",
    body: (
      <p>
        We use reasonable administrative and technical safeguards to protect your data. No system
        can be guaranteed to be fully secure.
      </p>
    ),
  },
  {
    title: "Data Retention",
    body: (
      <p>
        We retain data only as long as necessary to fulfill service purposes and legal
        requirements.
      </p>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <p>
        You may request access, correction, or deletion of your personal information by
        contacting us.
      </p>
    ),
  },
  {
    title: "Children\u2019s Privacy",
    body: <p>Our services are not intended for individuals under the age of 13.</p>,
  },
  {
    title: "Policy Updates",
    body: (
      <p>
        We may update this policy periodically. Continued use of our services constitutes
        acceptance of the revised policy.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        <LegalPage
          eyebrow="Legal"
          titleLead="Privacy"
          titleAccent="Policy"
          lastUpdated="January 21, 2026"
          intro={
            <p>
              FlowFront AI (&ldquo;FlowFront AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy and is committed to protecting it through
              this Privacy Policy. This policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or engage with our services.
            </p>
          }
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
