import React from "react";
import {
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
        const navigate=useNavigate();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-[#2EC4B6]">
          Pick your side of the screen
        </span>
        <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">
          One app, two very different mornings
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Customer */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FF5252] to-[#FF9F1C] p-9 text-white shadow-xl shadow-orange-500/20">
          <Users className="h-10 w-10 text-white/90" strokeWidth={1.75} />
          <h3 className="font-display mt-5 text-2xl font-semibold">
            I'm here to eat
          </h3>
          <p className="font-body mt-3 text-white/85">
            Open Yumloop, see what's cooking near you, and let the AI narrow it
            down to the three or four reels you'll actually order from.
          </p>
          <ul className="font-body mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Play className="h-4 w-4 flex-shrink-0" /> Scroll an endless feed
              of real food, real plating, real reactions
            </li>
            <li className="flex items-center gap-2.5">
              <Mic className="h-4 w-4 flex-shrink-0" /> Speak or type a craving
              and watch the feed re-sort instantly
            </li>
            <li className="flex items-center gap-2.5">
              <Heart className="h-4 w-4 flex-shrink-0" /> Save favourites and
              reorder your go-to dish in two taps
            </li>
          </ul>
          <button
            className="font-body mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#FF5252] transition hover:-translate-y-0.5"
            onClick={() => navigate("/home")}
          >
            Browse food reels <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Partner */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2EC4B6] to-[#1a9c90] p-9 text-white shadow-xl shadow-teal-500/20">
          <ChefHat className="h-10 w-10 text-white/90" strokeWidth={1.75} />
          <h3 className="font-display mt-5 text-2xl font-semibold">
            I'm here to cook
          </h3>
          <p className="font-body mt-3 text-white/85">
            Snap a photo of the dish, type its name, done. Yumloop's AI writes
            the description, picks the tags, and makes it sound irresistible —
            no copywriting required.
          </p>
          <ul className="font-body mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Camera className="h-4 w-4 flex-shrink-0" /> Upload one photo and
              a dish name, nothing else to fill in
            </li>
            <li className="flex items-center gap-2.5">
              <Wand2 className="h-4 w-4 flex-shrink-0" /> AI writes the caption,
              tags, and a description that sells
            </li>
            <li className="flex items-center gap-2.5">
              <Star className="h-4 w-4 flex-shrink-0" /> Track likes, saves, and
              orders straight from your feed
            </li>
          </ul>
          <button
            className="font-body mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1a9c90] transition hover:-translate-y-0.5"
            onClick={() => navigate("/createFood")}
          >
            Start selling on Yumloop <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
