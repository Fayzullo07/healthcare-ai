"use client"
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MedicAI from "@/components/MedicAI";
import OnlineDoctors from "@/components/OnlineDoctors";
import Scans from "@/components/Scans";
import VoiceAI from "@/components/VoiceAI";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ easing: "ease-in-sine", delay: 0 });
    AOS.refresh();
  }, []);
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Scans />
      <MedicAI />
      <VoiceAI />
      <OnlineDoctors />
      <Contact />
    </main>
  );
}
