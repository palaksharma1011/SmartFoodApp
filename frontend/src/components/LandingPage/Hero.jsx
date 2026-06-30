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
const Hero = () => {
        const navigate=useNavigate();
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#FFD23F]/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-96 w-96 rounded-full bg-[#2EC4B6]/25 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-2 lg:pt-20">
        {/* Copy */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2B1B17] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#FFD23F]">
            <Sparkles className="h-3.5 w-3.5" />
            Food, in motion
          </span>

          <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Stop scrolling menus.
            <br />
            Start{" "}
            <span className="relative inline-block text-[#FF5252]">
              watching
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q 50 -2, 100 6 T 200 6"
                  stroke="#FFD23F"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            your dinner.
          </h1>

          <p className="font-body mt-6 max-w-md text-lg leading-relaxed text-[#2B1B17]/70">
            Yumloop turns nearby restaurants and home kitchens into a
            never-ending feed of food reels. Tell our AI what you're craving —
            type it or just say it out loud — and watch your feed reshape itself
            in seconds.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              className="group flex items-center justify-center gap-2 rounded-full bg-[#FF5252] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF5252]/30 transition hover:-translate-y-0.5 hover:bg-[#e84545]"
              onClick={() => navigate("/home")}
            >
              I'm hungry, show me reels
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <button
              className="flex items-center justify-center gap-2 rounded-full border-2 border-[#2B1B17]/15 bg-white px-7 py-4 text-base font-bold text-[#2B1B17] transition hover:border-[#2EC4B6] hover:text-[#1a9c90]"
              onClick={() => navigate("/partner/login")}
            >
              <ChefHat className="h-4 w-4" />I want to sell food
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-[#2B1B17]/60">
            <div className="flex -space-x-3">
              {["#FF9F1C", "#2EC4B6", "#FF5252", "#FFD23F"].map((c, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-[#FFF8EC]"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <p>
              40,000+ people stopped wondering{" "}
              <span className="text-[#2B1B17]">"what's for dinner"</span> this
              month
            </p>
          </div>
        </div>

        {/* Stacked reel cards — signature visual */}
        <div className="relative z-10 mx-auto h-[480px] w-full max-w-sm">
          <ReelMock
            className="float-slow absolute left-2 top-10 z-10 -rotate-6"
            style={{ "--r": "-6deg" }}
            grad="from-amber-300 to-orange-500"
            title="Sizzling Tacos"
            partner="El Fuego"
            likes="2.4k"
          />
          <ReelMock
            className="float-slow absolute right-0 top-0 z-20 rotate-3"
            style={{ "--r": "3deg", animationDelay: "0.6s" }}
            grad="from-rose-400 to-fuchsia-500"
            title="Berry Pancake Stack"
            partner="Sunday Brunch Co."
            likes="5.8k"
            big
          />
          <ReelMock
            className="float-slow absolute bottom-0 left-10 z-30 -rotate-2"
            style={{ "--r": "-2deg", animationDelay: "1.2s" }}
            grad="from-teal-300 to-emerald-500"
            title="Fresh Sushi Rolls"
            partner="Tokyo Lane"
            likes="3.1k"
          />
          <span className="absolute -right-4 bottom-16 z-40 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold shadow-lg shadow-black/10">
            <Wand2 className="h-3.5 w-3.5 text-[#FF5252]" />
            AI matched: 96%
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

function ReelMock({
  className = "",
  style = {},
  grad,
  title,
  partner,
  likes,
  big,
}) {
  return (
    <div
      className={`${className} ${
        big ? "h-64 w-44" : "h-56 w-36"
      } overflow-hidden rounded-3xl bg-gradient-to-br ${grad} shadow-2xl shadow-black/20`}
      style={style}
    >
      <div className="flex h-full flex-col justify-between bg-gradient-to-t from-black/60 via-transparent to-transparent p-3">
        <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm">
          <Play className="h-3.5 w-3.5 fill-white" />
        </span>
        <div className="font-body text-white">
          <p className="text-xs font-bold leading-tight">{title}</p>
          <div className="mt-1 flex items-center justify-between text-[10px] text-white/80">
            <span>{partner}</span>
            <span className="flex items-center gap-1">
              <Heart className="h-2.5 w-2.5 fill-white" /> {likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
