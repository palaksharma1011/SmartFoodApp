import React from "react";
import FoodStream from "./FoodStream.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AIsearch from "../../components/FoodStream/AIsearch.jsx";

const Home = () => {
  const navigate = useNavigate();

  const [showAI, setShowAI] = useState(false);
  

  const handleAISearch = async (text) => {
    console.log(text);

    // axios call
    // const response = await axios.post("/api/ai", {
    //   query,
    // and update videos
    // });

    setShowAI(false);
  };

  return (
    <main>
      {!showAI ? (
        <section
          className="
      fixed
      top-3
      left-1/2
      -translate-x-1/2
      z-[10000]
      flex
      w-[92%]
      max-w-[500px]
      items-center
      justify-around
      rounded-full
      bg-white/10
      px-3
      py-2
      backdrop-blur-md
      shadow-lg
    "
        >
          <div>
            <button
              onClick={() => navigate("/user/profile")}
              className="
          flex
          flex-col
          items-center
          gap-1
          bg-transparent
          border-none
          cursor-pointer
          text-white
        "
            >
              <img
                src="/svg/profile.svg"
                alt="Profile"
                className="
            w-8
            md:w-9
            transition
            hover:scale-110
            drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
          "
              />

              <p className="m-0 text-xs underline md:text-sm">Profile</p>
            </button>
          </div>

          <div>
            <button
              onClick={() => setShowAI(true)}
              className="
          flex
          flex-col
          items-center
          gap-1
          bg-transparent
          border-none
          cursor-pointer
          text-white
        "
            >
              <img
                src="/svg/AI.svg"
                alt="AI"
                className="
            w-8
            md:w-9
            transition
            hover:scale-110
            drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
          "
              />

              <p className="m-0 text-xs underline md:text-sm">AI</p>
            </button>
          </div>
        </section>
      ) : (
        <AIsearch handleAISearch={handleAISearch} setShowAI={setShowAI} />
      )}

      <FoodStream />
    </main>
  );
};

export default Home;
