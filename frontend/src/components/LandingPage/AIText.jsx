import { useEffect, useState } from "react";

export default function AIText() {

  const text =
    "Find me something spicy, cheesy and under ₹250";

  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;

      if (i > text.length)
        clearInterval(interval);

    }, 50);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="
      bg-white
      rounded-3xl
      p-5
      shadow-xl
    ">
      {display}
      <span className="animate-pulse">|</span>
    </div>
  );
}