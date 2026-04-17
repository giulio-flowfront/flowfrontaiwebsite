import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SocialProofBar } from "@/components/SocialProofBar";
import { ClosingCTA } from "@/components/receptionist/ClosingCTA";
import { Features } from "@/components/receptionist/Features";
import { Hero } from "@/components/receptionist/Hero";
import { HowItWorks } from "@/components/receptionist/HowItWorks";
import { Industries } from "@/components/receptionist/Industries";
import { ProblemSection } from "@/components/receptionist/ProblemSection";
import { Stats } from "@/components/receptionist/Stats";

const industries = [
  "Chiropractors",
  "Dental Offices",
  "Law Firms",
  "HVAC Companies",
  "Salons & Spas",
  "Barbershops",
] as const;

export const metadata: Metadata = {
  title: "AI Voice Receptionist — FlowFront AI",
  description:
    "24/7 AI voice receptionist that answers every call, books appointments, and never puts a customer on hold. Live in 48 hours.",
};

export default function AIReceptionistPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProofBar items={industries} ariaLabel="Industries served" />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <Stats />
        <Industries />
        <ClosingCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
