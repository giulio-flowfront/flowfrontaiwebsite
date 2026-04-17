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
  IconChat,
  IconFunnel,
  IconHandoff,
  IconLogs,
  IconPalette,
  IconSms,
} from "@/components/service/ServiceIcons";
import { ServiceProblem } from "@/components/service/ServiceProblem";

export const metadata: Metadata = {
  title: "Custom AI Agents & Chatbots — FlowFront AI",
  description:
    "Branded AI agents for web, SMS, and WhatsApp. Trained on your business, escalating to humans when it matters. Built and maintained by FlowFront AI.",
};

const useCases = [
  "Web Chat",
  "SMS",
  "WhatsApp",
  "Lead Qualification",
  "FAQ Support",
  "Onboarding",
  "Internal Tools",
] as const;

const steps = [
  {
    n: "01",
    title: "Knowledge Capture",
    body: "We train your agent on FAQs, product docs, policies, past conversations, and the edge cases that matter most to your business.",
  },
  {
    n: "02",
    title: "Voice & Guardrails",
    body: "Your agent sounds like your brand — professional, warm, technical, whatever fits. With tight guardrails on what it will and won't say.",
  },
  {
    n: "03",
    title: "Launch Across Channels",
    body: "Web chat widget, SMS, WhatsApp, or your own app. One agent, deployed everywhere your customers reach out.",
  },
] as const;

const features: readonly ServiceFeature[] = [
  {
    icon: IconChat,
    title: "Embed-Anywhere Web Chat",
    body: "A polished chat widget that drops into any site in under a minute. Mobile-ready, accessible, and themed to your brand.",
  },
  {
    icon: IconSms,
    title: "SMS & WhatsApp Native",
    body: "Same agent, same knowledge — answering text messages like a human would. No separate build required.",
  },
  {
    icon: IconPalette,
    title: "Your Brand, Not Ours",
    body: "Custom name, tone, avatar, and UI. Your customers see your brand, not some generic chatbot template.",
  },
  {
    icon: IconFunnel,
    title: "Qualify & Capture",
    body: "Every conversation scores intent, captures contact details, and pushes qualified leads straight into your CRM.",
  },
  {
    icon: IconHandoff,
    title: "Seamless Human Handoff",
    body: "When a question needs a person, the agent routes the full conversation history to the right teammate — no repeating needed.",
  },
  {
    icon: IconLogs,
    title: "Full Transcripts & Insights",
    body: "Every conversation logged, summarized, and searchable. See what customers actually ask — and where to improve.",
  },
];

export default function AIAgentsPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          eyebrow="Custom AI Agents & Chatbots"
          headlineStart="A Smart Employee"
          headlineAccent="Who Never Sleeps."
          subtitle="Branded AI agents for web, SMS, and WhatsApp — trained on your business, speaking in your voice, escalating to humans when it actually matters."
          ctaLabel="Design Your Agent"
        />
        <SocialProofBar items={useCases} ariaLabel="Where AI agents work" />
        <ServiceProblem
          lines={[
            "Your customers want answers at 2 AM. Your team doesn't.",
            "Generic chatbots frustrate users and dilute your brand.",
            "Hiring 24/7 support is expensive and slow to scale.",
          ]}
          finalLine={{
            lead: "You need an agent that",
            accent: "sounds like you",
            tail: ".",
          }}
        />
        <ServiceHowItWorks
          eyebrow="Our Process"
          headlineLead="From generic bot to"
          headlineAccent="trusted teammate."
          steps={steps}
        />
        <ServiceFeatures
          eyebrow="What You Get"
          headlineLead="Everything a support rep does."
          headlineAccent="Better, faster, always on."
          features={features}
        />
        <ServiceCTA
          lead="Your competitors are still using off-the-shelf chatbots."
          boldLine="You don't have to."
          ctaLabel="Design Your Agent"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
