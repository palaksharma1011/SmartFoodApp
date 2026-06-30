import React from "react";
import "../../app/App.css";
import { useState, useEffect } from "react";

import Navbar from "../../components/LandingPage/Navbar";
import Hero from "../../components/LandingPage/Hero";
import FoodMasonry from "../../components/LandingPage/FoodMasonry";
import CustomerAI from "../../components/LandingPage/CustomerAI";
import PartnerAI from "../../components/LandingPage/PartnerAI";
import Stats from "../../components/LandingPage/Stats";
import CTA from "../../components/LandingPage/CTA";
import AnimatedBackground from "../../components/LandingPage/AnimatedBackground";
export default function LandingPage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div className="bg-[#FFF8F3] min-h-screen overflow-x-hidden">
      <div
        className="
    fixed
    h-72
    w-72
    rounded-full
    blur-3xl
    bg-pink-300/30
    pointer-events-none
  "
        style={{
          left: pos.x - 150,
          top: pos.y - 150,
        }}
      />
      <AnimatedBackground />
      <Navbar />

      <Hero />

      <FoodMasonry />

      <CustomerAI />

      <PartnerAI />

      <Stats />

      <CTA />
    </div>
  );
}
