import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingIncludes } from "@/components/pricing/PricingIncludes";
import { PricingTiers } from "@/components/pricing/PricingTiers";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceHero } from "@/components/service/ServiceHero";

export const metadata: Metadata = {
  title: "Pricing — FlowFront AI",
  description:
    "Simple, transparent pricing for FlowFront AI. One-time setup + monthly retainer. Starter, Growth, and Custom tiers. No contracts, no hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          eyebrow="Pricing"
          headlineStart="Simple pricing."
          headlineAccent="Built to scale with you."
          subtitle="One-time setup fee plus a monthly retainer. No contracts, no hidden costs. Start small, scale when you're ready."
          ctaLabel="Book a Consultation"
        />
        <PricingTiers />
        <PricingIncludes />
        <PricingFAQ />
        <ServiceCTA
          lead="Not sure which plan fits?"
          boldLine="Let's map it together."
          ctaLabel="Book a Free Consultation"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
