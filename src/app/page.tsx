import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SocialProofBar } from "@/components/SocialProofBar";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ProblemSection } from "@/components/home/ProblemSection";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";

const useCases = [
  "Inbound Calls",
  "Lead Outreach",
  "CRM Sync",
  "Scheduling",
  "Customer Support",
  "Data Entry",
  "Reporting",
] as const;

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProofBar items={useCases} ariaLabel="What we automate" />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <Stats />
        <Services />
        <ClosingCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
