import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { AboutStory } from "@/components/about/AboutStory";
import { Founder } from "@/components/about/Founder";
import { Principles } from "@/components/about/Principles";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceHero } from "@/components/service/ServiceHero";

export const metadata: Metadata = {
  title: "About — FlowFront AI",
  description:
    "FlowFront AI is a managed AI automation practice. We build practical AI systems that run quietly in the background — so your team can focus on what actually matters.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          eyebrow="About FlowFront"
          headlineStart="We build AI"
          headlineAccent="that works quietly."
          subtitle="FlowFront AI is a managed automation practice. We design, build, and maintain AI systems that run in the background of your business — not in front of it."
          ctaLabel="Work With Us"
        />
        <AboutStory />
        <Founder />
        <Principles />
        <ServiceCTA
          lead="You don't need a louder AI vendor."
          boldLine="You need one that works."
          ctaLabel="Book a Free Consultation"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
