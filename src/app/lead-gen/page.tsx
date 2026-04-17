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
  IconChart,
  IconFunnel,
  IconMail,
  IconStar,
  IconSync,
  IconTarget,
} from "@/components/service/ServiceIcons";
import { ServiceProblem } from "@/components/service/ServiceProblem";

export const metadata: Metadata = {
  title: "Lead Gen & CRM Automation — FlowFront AI",
  description:
    "Scraping, enrichment, outreach sequences, and CRM sync. A pipeline that fills itself — built and maintained by FlowFront AI.",
};

const useCases = [
  "Prospect Scraping",
  "Data Enrichment",
  "Cold Email",
  "LinkedIn Outreach",
  "Lead Scoring",
  "CRM Sync",
  "Pipeline Reporting",
] as const;

const steps = [
  {
    n: "01",
    title: "Define Your ICP",
    body: "We work with you to pin down the exact buyer profile that actually closes — title, industry, size, triggers — then build the sourcing to match.",
  },
  {
    n: "02",
    title: "Enrich & Personalize",
    body: "Every lead comes in with verified contact data, context from their LinkedIn and site, and a personalized opener — not template spam.",
  },
  {
    n: "03",
    title: "Automate & Sync",
    body: "Sequences run on autopilot. Replies trigger workflows. Every conversation lands in your CRM with full context. Your team just closes.",
  },
] as const;

const features: readonly ServiceFeature[] = [
  {
    icon: IconTarget,
    title: "ICP-Matched Sourcing",
    body: "Automated prospecting from LinkedIn, public directories, and paid databases — scoped to the buyers you actually want.",
  },
  {
    icon: IconMail,
    title: "Verified Deliverability",
    body: "Every email address validated. Warm-up handled. Your domain reputation protected from day one — no surprise spam folder drops.",
  },
  {
    icon: IconFunnel,
    title: "Multi-Channel Outreach",
    body: "Email, LinkedIn, and SMS sequences in one coordinated flow. Replies pause the sequence automatically — no awkward follow-ups.",
  },
  {
    icon: IconSync,
    title: "CRM Auto-Sync",
    body: "HubSpot, Salesforce, Close, Pipedrive, Attio. Every lead, reply, and activity lands in your CRM with full context attached.",
  },
  {
    icon: IconStar,
    title: "AI Lead Scoring",
    body: "Leads scored automatically by engagement, fit, and intent. Your team works the warmest prospects first, not a cold list.",
  },
  {
    icon: IconChart,
    title: "Reporting & Iteration",
    body: "Real-time dashboards on reply rates, pipeline value, and cost per meeting. We tune copy and targeting every month.",
  },
];

export default function LeadGenPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          eyebrow="Lead Gen & CRM Automation"
          headlineStart="A Pipeline That"
          headlineAccent="Fills Itself."
          subtitle="Scraping, enrichment, outreach sequences, and CRM sync — so your sales team closes deals instead of building lists."
          ctaLabel="See It In Action"
        />
        <SocialProofBar items={useCases} ariaLabel="Lead generation capabilities" />
        <ServiceProblem
          lines={[
            "Your sales team spends 40% of their time on data entry.",
            "Leads leak out of your CRM. Follow-ups fall through the cracks.",
            "Cold outreach takes weeks to set up — and burns out your best reps.",
          ]}
          finalLine={{
            lead: "You need a pipeline that",
            accent: "builds itself",
            tail: ".",
          }}
        />
        <ServiceHowItWorks
          eyebrow="Our Process"
          headlineLead="From cold list to"
          headlineAccent="warm conversations."
          steps={steps}
        />
        <ServiceFeatures
          eyebrow="What You Get"
          headlineLead="Everything your SDR does."
          headlineAccent="Running 24/7."
          features={features}
        />
        <ServiceCTA
          lead="Your reps are still building lists in spreadsheets."
          boldLine="They should be closing."
          ctaLabel="Book a Pipeline Strategy Call"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
