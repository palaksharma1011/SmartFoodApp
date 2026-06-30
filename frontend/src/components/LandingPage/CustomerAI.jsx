import {Mic, Sparkles} from "lucide-react";
import AIText from "./AIText";
export default function CustomerAI() {
  return (
    <section className="max-w-7xl mx-auto py-24">

      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[40px] p-10 text-white">

        <div className="flex items-center gap-3">
          <Sparkles/>
          <h2 className="text-4xl font-black">
            AI Food Assistant
          </h2>
        </div>

        <p className="mt-5 text-xl">
          Tell AI what you want.
        </p>

        <div className="bg-white rounded-3xl p-4 mt-8 flex items-center gap-4">

<AIText/>

          <button className="bg-black text-white p-4 rounded-2xl">
            <Mic/>
          </button>

        </div>

      </div>
    </section>
  );
}