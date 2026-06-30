import Footer from "../../components/General/Footer";
import CTA from "../../components/LandingPage/CTA";
import PartnerFeature from "../../components/General/PartnerFeature";
import Features from "../../components/LandingPage/Features";
import Nav from "../../components/General/Nav";
import Hero from "../../components/LandingPage/Hero";
import AIsearch from "../../components/LandingPage/AIsearch";
import Discover from "../../components/LandingPage/Discover";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFF8EC] text-[#2B1B17] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .reel-card { -webkit-mask-image: none; }
        @keyframes float-slow { 0%,100% { transform: translateY(0) rotate(var(--r,0deg)); } 50% { transform: translateY(-10px) rotate(var(--r,0deg)); } }
        .float-slow { animation: float-slow 5s ease-in-out infinite; }
      `}</style>
      <Nav />
      <Hero />
      <Discover />
      <AIsearch />
      <Features />
      <PartnerFeature />
      <CTA />
      <Footer />
    </div>
  );
}
