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
import { useNavigate } from "react-router-dom";

const PartnerFeature = () => {
        const navigate=useNavigate();
  return (
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
  );
};

export default PartnerFeature;
