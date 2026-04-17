import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SocialProofBar } from "@/components/SocialProofBar";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceFeatures, type ServiceFeature } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceHowItWorks } from "@/components/service/ServiceHowItWorks";
import {
  IconAlert,
  IconCode,
  IconDocs,
  IconKey,
  IconPlug,
  IconShield,
} from "@/components/service/ServiceIcons";
import { ServiceProblem } from "@/components/service/ServiceProblem";

export const metadata: Metadata = {
  title: "Workflow Automation — FlowFront AI",
  description:
    "Connect Make, Zapier, n8n, or custom code to your stack. Automated data flow, alerting, and orchestration — built and maintained by FlowFront AI.",
};

const useCases = [
  "Lead → CRM Sync",
  "Invoice Intake",
  "Onboarding Flows",
  "Order Fulfillment",
  "Reporting Pipelines",
  "Document Generation",
] as const;

const steps = [
  {
    n: "01",
    title: "Workflow Audit",
    body: "We map every copy-paste, export, manual check, and handoff in your business. You see exactly where time disappears — and where automation pays back fastest.",
  },
  {
    n: "02",
    title: "Build & Integrate",
    body: "We build on the platform that fits — Make, Zapier, n8n, or custom code. API-level integrations where they matter, no-code where they're enough.",
  },
  {
    n: "03",
    title: "Monitor & Iterate",
    body: "Every automation is logged, alerted on failure, and tuned as your processes evolve. You get monthly health reports, not surprise outages.",
  },
] as const;

const features: readonly ServiceFeature[] = [
  {
    icon: IconPlug,
    title: "Multi-Platform Orchestration",
    body: "Make, Zapier, n8n, or direct API code — we pick the right tool for the job, not the one we're stuck with.",
  },
  {
    icon: IconAlert,
    title: "Error Handling & Alerts",
    body: "When an integration breaks, we know first. Automatic retries, fallback logic, and real-time alerts to Slack or email.",
  },
  {
    icon: IconDocs,
    title: "Versioned & Documented",
    body: "Every scenario and blueprint is documented, versioned, and handed to you. No mystery automations running in the dark.",
  },
  {
    icon: IconKey,
    title: "You Own the Blueprints",
    body: "Accounts in your name. Credentials under your control. Take the system with you if you ever want to.",
  },
  {
    icon: IconCode,
    title: "Custom Code When Needed",
    body: "When no-code hits a wall, we drop down to Python or TypeScript. The automation fits the job, not the other way around.",
  },
  {
    icon: IconShield,
    title: "Security & Compliance",
    body: "Scoped credentials, audit trails, and data handling that passes SOC 2 review. Healthcare and finance-ready setups available.",
  },
];

export default function WorkflowAutomationPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          eyebrow="Workflow Automation"
          headlineStart="Your Tools, Finally"
          headlineAccent="Talking To Each Other."
          subtitle="Make, Zapier, n8n, or custom code — we connect the systems you already use so data flows automatically and manual handoffs disappear for good."
          ctaLabel="Book a Free Workflow Audit"
        />
        <SocialProofBar items={useCases} ariaLabel="Workflow automation use cases" />
        <ServiceProblem
          lines={[
            "Your team is the integration layer.",
            "Every day, someone copies data from one tool to another — and fixes it when it breaks.",
            "You pay for a dozen SaaS tools that still don't talk to each other.",
          ]}
          finalLine={{
            lead: "You need systems that",
            accent: "talk to each other",
            tail: ".",
          }}
        />
        <ServiceHowItWorks
          eyebrow="Our Process"
          headlineLead="From chaos to choreography."
          headlineAccent="In weeks."
          steps={steps}
        />
        <ServiceFeatures
          eyebrow="What You Get"
          headlineLead="Automation that actually runs."
          headlineAccent="And keeps running."
          features={features}
        />
        <ServiceCTA
          lead="Your team is still moving data by hand."
          boldLine="They shouldn't have to."
          ctaLabel="Book a Free Workflow Audit"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
