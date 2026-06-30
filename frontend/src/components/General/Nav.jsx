import React from "react";
import {
  Search,
  Mic,
  Heart,
  Play,
  Sparkles,
  ChefHat,
  Users,
  Camera,
  Wand2,
  ArrowRight,
  Star,
  Flame,
  Soup,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = () => {
        const navigate=useNavigate();
  return (
    <header className="sticky top-0 z-30 border-b border-[#2B1B17]/5 bg-[#FFF8EC]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-body">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF5252] text-white shadow-sm shadow-[#FF5252]/30">
            <Flame className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">
            Yumloop
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold text-[#2B1B17]/70 md:flex">
          <a href="#discover" className="transition hover:text-[#FF5252]">
            Discover
          </a>
          <Link to="/login" className="transition hover:text-[#FF5252]">
            AI Craving Search
          </Link>
          <Link to="/partner/login" className="transition hover:text-[#FF5252]">
            Sell on Yumloop
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden rounded-full px-4 py-2 text-sm font-bold text-[#2B1B17] transition hover:bg-[#2B1B17]/5 sm:block"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
          <button
            className="rounded-full bg-[#FF5252] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#FF5252]/30 transition hover:bg-[#e84545]"
            onClick={() => navigate("/home")}
          >
            Get Yumloop free
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
