import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — FlowFront AI",
  description:
    "Terms of Service governing your access to and use of FlowFront AI's website and AI automation services.",
};

const sections: readonly LegalSection[] = [
  {
    title: "Services",
    body: (
      <p>
        FlowFront AI provides AI-powered automation services, including voice receptionist
        agents, workflow automation, custom AI agents and chatbots, lead generation, CRM
        automation, and related services. Services may be updated, modified, or discontinued at
        our discretion.
      </p>
    ),
  },
  {
    title: "Eligibility",
    body: (
      <p>
        You must be at least 18 years old and have the legal authority to enter into these Terms
        to use our services.
      </p>
    ),
  },
  {
    title: "Client Responsibilities",
    body: (
      <p>
        You are responsible for ensuring the accuracy of information provided to FlowFront AI,
        maintaining compliance with applicable laws, and obtaining any required consent for call
        recording or data processing.
      </p>
    ),
  },
  {
    title: "Acceptable Use",
    body: (
      <p>
        You agree not to misuse the services, attempt unauthorized access, interfere with system
        operations, or use the services for unlawful or prohibited purposes.
      </p>
    ),
  },
  {
    title: "Fees and Payments",
    body: (
      <p>
        Pricing and payment terms are agreed upon separately. Failure to pay may result in
        suspension or termination of services.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    body: (
      <p>
        All content, software, and materials provided by FlowFront AI are owned by or licensed to
        us and may not be copied, modified, or distributed without permission.
      </p>
    ),
  },
  {
    title: "Confidentiality",
    body: (
      <p>
        Both parties agree to maintain the confidentiality of non-public information exchanged in
        connection with the services.
      </p>
    ),
  },
  {
    title: "Disclaimer of Warranties",
    body: (
      <p>
        Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; FlowFront AI
        makes no warranties regarding uninterrupted operation or error-free performance.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, FlowFront AI shall not be liable for indirect,
        incidental, or consequential damages arising from the use of the services.
      </p>
    ),
  },
  {
    title: "Indemnification",
    body: (
      <p>
        You agree to indemnify and hold harmless FlowFront AI from claims arising out of your use
        of the services or violation of these Terms.
      </p>
    ),
  },
  {
    title: "Termination",
    body: (
      <p>
        We may suspend or terminate access to the services at any time for violation of these
        Terms or for operational reasons.
      </p>
    ),
  },
  {
    title: "Governing Law",
    body: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the United
        States, without regard to conflict of law principles.
      </p>
    ),
  },
  {
    title: "Changes to Terms",
    body: (
      <p>
        We may update these Terms from time to time. Continued use of the services constitutes
        acceptance of the revised Terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main>
        <LegalPage
          eyebrow="Legal"
          titleLead="Terms of"
          titleAccent="Service"
          lastUpdated="January 21, 2026"
          intro={
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
              website and services provided by FlowFront AI (&ldquo;FlowFront AI,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing our website
              or using our services, you agree to be bound by these Terms.
            </p>
          }
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
