import React, { useState } from "react";
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

/**
 * Yumloop — landing page for a Pinterest-meets-reels food discovery app.
 * Two audiences: Customers (browse + AI-filtered food reels) and
 * Food Partners (upload a photo + name, AI does the selling).
 *
 * Pure Tailwind, single file, no external CSS files needed beyond the
 * Google Fonts import below (Fraunces for personality, Plus Jakarta Sans
 * for everyday text).
 */

const REELS = [
  {
    id: 1,
    title: "Butter Chicken, dangerously good",
    partner: "Spice Trail Kitchen",
    tag: "Comfort food",
    price: "₹240",
    likes: "3.2k",
    h: "h-72",
    grad: "from-orange-400 via-rose-400 to-red-500",
  },
  {
    id: 2,
    title: "Loaded Cheese Burst Pizza",
    partner: "Crust & Co.",
    tag: "Cheesy",
    price: "₹399",
    likes: "5.1k",
    h: "h-96",
    grad: "from-amber-300 via-orange-400 to-rose-500",
  },
  {
    id: 3,
    title: "Iced Matcha, no sugar crash",
    partner: "Leaf & Bloom",
    tag: "Drinks",
    price: "₹180",
    likes: "1.8k",
    h: "h-64",
    grad: "from-teal-300 via-emerald-400 to-teal-500",
  },
  {
    id: 4,
    title: "Midnight Ramen Bowl",
    partner: "Noodle Bar 24",
    tag: "Late night",
    price: "₹310",
    likes: "4.6k",
    h: "h-80",
    grad: "from-rose-400 via-pink-500 to-fuchsia-500",
  },
  {
    id: 5,
    title: "Street-style Dosa Roll",
    partner: "Amma's Tiffin",
    tag: "Vegetarian",
    price: "₹120",
    likes: "2.9k",
    h: "h-72",
    grad: "from-yellow-300 via-amber-400 to-orange-500",
  },
  {
    id: 6,
    title: "Triple Chocolate Lava Cake",
    partner: "The Sweet Tooth",
    tag: "Dessert",
    price: "₹150",
    likes: "6.4k",
    h: "h-60",
    grad: "from-orange-500 via-amber-600 to-rose-600",
  },
  {
    id: 7,
    title: "Tandoori Paneer Tikka",
    partner: "Coal & Smoke",
    tag: "Spicy",
    price: "₹260",
    likes: "3.7k",
    h: "h-88",
    grad: "from-red-500 via-orange-500 to-amber-400",
  },
  {
    id: 8,
    title: "Korean Corn Cheese Fries",
    partner: "Seoul Bites",
    tag: "Snack",
    price: "₹200",
    likes: "2.1k",
    h: "h-64",
    grad: "from-lime-300 via-green-400 to-emerald-500",
  },
];

const CRAVING_CHIPS = [
  "Spicy & under ₹250",
  "Something sweet",
  "High protein",
  "Vegan today",
  "Comfort food, fast",
];

export default function YumloopLanding() {
  const [activeChip, setActiveChip] = useState(CRAVING_CHIPS[0]);
  const [craving, setCraving] = useState("");
  const navigate=useNavigate();

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

      {/* ---------------- NAV ---------------- */}
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
            <button className="hidden rounded-full px-4 py-2 text-sm font-bold text-[#2B1B17] transition hover:bg-[#2B1B17]/5 sm:block"
            onClick={() => navigate("/login")}>
              Log in
            </button>
            <button className="rounded-full bg-[#FF5252] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#FF5252]/30 transition hover:bg-[#e84545]" onClick={() => navigate("/home")}>
              Get Yumloop free
            </button>
          </div>
        </nav>
      </header>

      {/* ---------------- HERO ---------------- */}
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
              type it or just say it out loud — and watch your feed reshape
              itself in seconds.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-full bg-[#FF5252] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF5252]/30 transition hover:-translate-y-0.5 hover:bg-[#e84545]" onClick={() => navigate("/home")}>
                I'm hungry, show me reels
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="flex items-center justify-center gap-2 rounded-full border-2 border-[#2B1B17]/15 bg-white px-7 py-4 text-base font-bold text-[#2B1B17] transition hover:border-[#2EC4B6] hover:text-[#1a9c90]"
              onClick={() => navigate("/partner/login")}>
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

      {/* ---------------- DISCOVER / MASONRY ---------------- */}
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

      {/* ---------------- AI CRAVING SEARCH ---------------- */}
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

      {/* ---------------- TWO PATHS ---------------- */}
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
              Open Yumloop, see what's cooking near you, and let the AI narrow
              it down to the three or four reels you'll actually order from.
            </p>
            <ul className="font-body mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Play className="h-4 w-4 flex-shrink-0" /> Scroll an endless
                feed of real food, real plating, real reactions
              </li>
              <li className="flex items-center gap-2.5">
                <Mic className="h-4 w-4 flex-shrink-0" /> Speak or type a
                craving and watch the feed re-sort instantly
              </li>
              <li className="flex items-center gap-2.5">
                <Heart className="h-4 w-4 flex-shrink-0" /> Save favourites and
                reorder your go-to dish in two taps
              </li>
            </ul>
            <button className="font-body mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#FF5252] transition hover:-translate-y-0.5" onClick={() => navigate("/home")}>
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
                <Camera className="h-4 w-4 flex-shrink-0" /> Upload one photo
                and a dish name, nothing else to fill in
              </li>
              <li className="flex items-center gap-2.5">
                <Wand2 className="h-4 w-4 flex-shrink-0" /> AI writes the
                caption, tags, and a description that sells
              </li>
              <li className="flex items-center gap-2.5">
                <Star className="h-4 w-4 flex-shrink-0" /> Track likes, saves,
                and orders straight from your feed
              </li>
            </ul>
            <button className="font-body mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1a9c90] transition hover:-translate-y-0.5" onClick={() => navigate("/createFood")}>
              Start selling on Yumloop <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- PARTNER AI MAGIC ---------------- */}
      <section id="partner" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-[#FF9F1C]">
              For food partners
            </span>
            <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">
              You bring the dish.
              <br />
              The AI brings the words.
            </h2>
            <p className="font-body mt-4 max-w-md text-[#2B1B17]/65">
              Most partners spend more time writing menu descriptions than
              cooking. On Yumloop, you upload one photo and type the dish name —
              the AI fills in everything that makes a customer stop scrolling.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  step: "Upload",
                  text: "A photo of the dish and its name. That's the entire form.",
                },
                {
                  step: "Generate",
                  text: "AI writes the description, picks mood tags, and suggests a price range.",
                },
                {
                  step: "Publish",
                  text: "It goes live as a reel in customer feeds within minutes.",
                },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-4">
                  <span className="font-display flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF1E0] text-base font-semibold text-[#FF9F1C]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-body font-bold">{s.step}</p>
                    <p className="font-body text-sm text-[#2B1B17]/60">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* before / after mock */}
          <div className="relative rounded-[2rem] bg-[#FFF8EC] p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {/* Before */}
              <div className="flex-1 rounded-2xl border-2 border-dashed border-[#2B1B17]/15 bg-white p-5">
                <p className="font-body mb-3 text-xs font-bold uppercase tracking-wide text-[#2B1B17]/40">
                  What you type
                </p>
                <div className="mb-3 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-orange-200 to-rose-200">
                  <Camera className="h-7 w-7 text-white" />
                </div>
                <p className="font-body text-sm font-semibold">
                  "Paneer Tikka Wrap"
                </p>
              </div>

              <Wand2 className="hidden h-6 w-6 flex-shrink-0 text-[#FF9F1C] sm:block" />

              {/* After */}
              <div className="flex-1 rounded-2xl bg-[#2B1B17] p-5 text-white shadow-xl">
                <p className="font-body mb-3 text-xs font-bold uppercase tracking-wide text-[#FFD23F]">
                  What customers see
                </p>
                <div className="mb-3 h-28 rounded-xl bg-gradient-to-br from-orange-400 to-rose-500" />
                <p className="font-body text-sm font-bold">
                  Smoky Paneer Tikka Wrap
                </p>
                <p className="font-body mt-1 text-xs text-white/70">
                  Charred paneer, mint chutney, and a charcoal-grilled wrap —
                  built for the 2pm hunger slump.
                </p>
                <div className="mt-3 flex gap-1.5">
                  {["Smoky", "Vegetarian", "Under ₹200"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FF5252] px-8 py-16 text-center text-white sm:px-16">
          <Soup className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 text-white/10" />
          <Soup className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rotate-12 text-white/10" />
          <h2 className="font-display relative text-3xl font-semibold sm:text-4xl">
            Your feed is hungrier than you are.
          </h2>
          <p className="font-body relative mx-auto mt-3 max-w-md text-white/85">
            Join as a customer to start watching, or as a partner to start
            selling — either way, you're two taps from the good part.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#FF5252] transition hover:-translate-y-0.5" onClick={() => navigate("/login")}>
              Get Yumloop free
            </button>
            <button className="rounded-full border-2 border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:border-white" onClick={() => navigate("/partner/register")}>
              Apply as a food partner
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-[#2B1B17]/10 px-6 py-10">
        <div className="font-body mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#2B1B17]/50 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF5252] text-white">
              <Flame className="h-4 w-4" />
            </span>
            <span className="font-display font-semibold text-[#2B1B17]">
              Yumloop
            </span>
          </div>
          <p>© 2026 Yumloop. Made for people who scroll before they eat.</p>
        </div>
      </footer>
    </div>
  );
}

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
