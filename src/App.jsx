import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Homes from "./components/Homes";
import InTheNews from "./components/InTheNews";
import DreamHomeCTA from "./components/DreamHomeCTA";
import PriceEstimator from "./components/PriceEstimator";
import WhatWeOffer from "./components/WhatWeOffer";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import ConnectWithUs from "./components/connectwithus";
import FAQ from "./components/FAQ";
import FloatingChat from "./components/FloatingChat"; // ✅ Added

export default function App() {
  return (
    <div className="font-sans">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Your existing middle sections */}
      <div className="max-w-6xl mx-auto px-4">
        <Features />
        <Testimonials />
        <Stats />
        <Homes />
      </div>

      {/* New sections */}
      <PriceEstimator />
      <WhatWeOffer />
      <HowItWorks />
      <InTheNews />
      <FAQ />
      <DreamHomeCTA />
      <ConnectWithUs />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp + Chat Popup */}
      <FloatingChat />
    </div>
  );
}
