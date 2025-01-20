"use client"

import Chatbot from "@/components/chatbot";
import CallToAction from "../components/call-to-action";
import FAQ from "../components/faq";
import Features from "../components/features";
import Header from "../components/header";
import Hero from "../components/hero";
import WhyUs from "../components/why";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <Features />
    <WhyUs />
    <CallToAction />
    <FAQ />
    <Chatbot />
    <Footer />
    </div>
  );
}
