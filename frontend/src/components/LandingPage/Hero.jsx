import { Sparkles, Brain, ChefHat } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <section className="max-w-7xl mx-auto py-20 px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 mb-6">
              <Sparkles size={18} />
              AI Powered Food Discovery
            </div>

            <h1 className="text-6xl font-black leading-tight">
              Discover Food
              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Like Reels
              </span>
            </h1>

            <p className="text-gray-600 text-xl mt-6">
              Swipe delicious food reels, ask AI what you're craving, and
              discover your next favorite meal.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold">
                Explore Food
              </button>

              <button className="border px-8 py-4 rounded-2xl font-bold">
                Sell Food
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div className="flex gap-3">
                <Brain className="text-blue-500" />
                AI Search
              </div>

              <div className="flex gap-3">
                <ChefHat className="text-green-500" />
                Food Partners
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 h-64 w-64 bg-pink-300 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 h-64 w-64 bg-yellow-300 rounded-full blur-3xl opacity-30" />

            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
}
