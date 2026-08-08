import CallToAction from "../components/call-to-action";
import FAQ from "../components/faq";
import Features from "../components/features";
import Header from "@/components/header";
import Hero from "../components/hero";
import WhyUs from "../components/why";
import HowItWorks from "@/components/how-it-works";





export default async function Home() {


  return (
    <div>
    <Header />
    <Hero />
    <HowItWorks />
    <Features />
    <WhyUs />
    <CallToAction />
    <FAQ />
    </div>
  );
}
