import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <About/>
      <ContactForm/>
    </div>
  );
}
