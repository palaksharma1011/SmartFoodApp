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
import CRAVING_CHIPS from "../../data/CRAVING_CHIPS";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AIsearch = () => {
        const navigate=useNavigate();
  const [activeChip, setActiveChip] = useState(CRAVING_CHIPS[0]);
  const [craving, setCraving] = useState("");
  return (
    <section
      id="craving"
      className="relative overflow-hidden bg-[#2B1B17] py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[#FF5252]/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#FFD23F]">
          <Sparkles className="h-3.5 w-3.5" />
          Talk to your feed
        </span>
        <h2 className="font-display mt-5 text-3xl font-semibold text-white sm:text-4xl">
          Type it. Say it. Yumloop figures out what you actually want.
        </h2>
        <p className="font-body mt-4 text-white/60">
          No filters menu to dig through — describe the craving in your own
          words and the AI re-sorts every reel in your feed to match.
        </p>

        <div className="mt-9 flex items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-2xl">
          <Search className="h-5 w-5 flex-shrink-0 text-[#2B1B17]/40" />
          <input
            value={craving}
            onChange={(e) => setCraving(e.target.value)}
            placeholder={activeChip}
            className="font-body w-full bg-transparent text-base text-[#2B1B17] placeholder:text-[#2B1B17]/40 focus:outline-none"
          />
          <button className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF1E0] text-[#FF5252] transition hover:bg-[#FF5252] hover:text-white">
            <Mic className="h-4.5 w-4.5" />
          </button>
          <button className="flex h-11 flex-shrink-0 items-center gap-2 rounded-full bg-[#FF5252] px-5 text-sm font-bold text-white transition hover:bg-[#e84545]">
            Curate my feed
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {CRAVING_CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              className={`font-body rounded-full px-4 py-2 text-xs font-semibold transition ${
                activeChip === chip
                  ? "bg-[#FFD23F] text-[#2B1B17]"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIsearch;
