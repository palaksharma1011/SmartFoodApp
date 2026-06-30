import {Upload, Wand2} from "lucide-react";

export default function PartnerAI() {
  return (
    <section className="max-w-7xl mx-auto py-20">

      <div className="grid lg:grid-cols-2 gap-12">

        <div className="bg-white rounded-[35px] p-10 shadow-xl">

          <Upload size={50}/>

          <h2 className="text-3xl font-black mt-5">
            Upload Food Photo
          </h2>

          <p className="text-gray-500 mt-3">
            Just upload your food image.
          </p>

        </div>

        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-[35px] p-10 text-white">

          <Wand2 size={50}/>

          <h2 className="text-3xl font-black mt-5">
            AI Does Everything
          </h2>

          <p className="mt-3">
            Generates description,
            hashtags,
            menu highlights,
            SEO tags,
            and sales copy automatically.
          </p>

        </div>

      </div>
    </section>
  );
}