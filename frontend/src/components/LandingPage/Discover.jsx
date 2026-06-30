import React from "react";
import REELS from "../../data/REELS";
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
import { useNavigate } from "react-router-dom";
const Discover = () => {
    const navigate=useNavigate();
  return (
    <section id="discover" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-[#FF9F1C]">
            Trending right now
          </span>
          <h2 className="font-display mt-1 text-3xl font-semibold sm:text-4xl">
            Your feed, basically a snack
          </h2>
        </div>
        <p className="font-body max-w-sm text-sm text-[#2B1B17]/60">
          Every card below is a short food reel — tap once to watch, tap the
          heart to save, and the feed quietly learns your taste.
        </p>
      </div>

      <div className="columns-2 gap-5 sm:columns-3 lg:columns-4 [&>*]:mb-5 [&>*]:break-inside-avoid">
        {REELS.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </section>
  );
};

export default Discover;

function ReelCard({ reel }) {
  return (
    <div
      className={`reel-card group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${reel.grad} ${reel.h} cursor-pointer shadow-md shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />

      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-[#FF5252]">
        <Heart className="h-4 w-4" />
      </span>

      <span className="font-body absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#2B1B17]">
        {reel.tag}
      </span>

      <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
        <Play className="h-5 w-5 fill-white" />
      </span>

      <div className="font-body absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="text-sm font-bold leading-tight">{reel.title}</p>
        <div className="mt-1.5 flex items-center justify-between text-xs text-white/80">
          <span>{reel.partner}</span>
          <span className="flex items-center gap-1 font-semibold">
            <Heart className="h-3 w-3 fill-white" /> {reel.likes}
          </span>
        </div>
        <span className="mt-2 inline-block rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold backdrop-blur-sm">
          {reel.price}
        </span>
      </div>
    </div>
  );
}
