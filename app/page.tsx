"use client"
import Hero from "@/components/Hero";

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
    </main>
  );
}
