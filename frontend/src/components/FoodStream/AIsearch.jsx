import React, { useState } from "react";
import { Mic, Search } from "lucide-react";
import { XCircleIcon } from "lucide-react";

const AIsearch = ({ handleAISearch, setShowAI }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    try {
      // send text to parent/backend
      await handleAISearch(trimmedQuery);

      // clear input after successful send
      setQuery("");

      // close AI search
      setShowAI(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-white p-2 pl-4 fixed z-1000">
      <Search className="h-5 w-5 flex-shrink-0 text-gray-400" />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="What are you craving?"
        className="
            w-full
            bg-transparent
            text-black
            outline-none
          "
      />

      <button
        className="
            flex
            h-11
            w-11
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            bg-orange-100
            text-red-500
          "
      >
        <Mic className="h-5 w-5" />
      </button>

      <button
        onClick={handleSearch}
        className="
            flex-shrink-0
            rounded-full
            bg-red-500
            px-5
            py-3
            font-bold
            text-white
            transition
            hover:bg-red-600
          "
      >
        Search
      </button>
      {/* close */}
      <button
        onClick={() => setShowAI(false)}
        className="
        fixed
          mt-30
          w-full
          rounded-xl
          py-2
          text-black/70
          transition
          hover:bg-white/10
        "
      >
        <XCircleIcon className="bg-red-500  text-white rounded-2xl" />
      </button>
    </div>
  );
};

export default AIsearch;
