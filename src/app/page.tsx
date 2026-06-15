import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import WhatWeSell from "@/components/WhatWeSell";
import Offers from "@/components/Offers";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProofBar />
        <WhatWeSell />
        <Offers />
        <CaseStudies />
        <Process />
        <FAQ />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
