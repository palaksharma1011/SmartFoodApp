import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function SaveButton({ foodId, name, count }) {
  const [saved, setSaved] = useState(false);
  const [saveCount, setSaveCount] = useState(count);

  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);

  async function handleSave(e) {
    // if (loading) return;
    e.preventDefault();

    try {
      const response = await api.post(
        "/food/save",
        { foodId: foodId },
        { withCredentials: true },
      );
      console.log(response.data.save);
      if (response.data.save) {
        setSaved(true);
        console.log("saved!!");
        setSaveCount((prev) => prev + 1);

        setVideos((prev) =>
          prev.map((v) =>
            v._id === foodId ? { ...v, saveCount: v.saveCount + 1 } : v,
          ),
        );
      } else {
        setSaved(false);
        console.log("unsaved!!!");
        setSaveCount((prev) => prev - 1);

        setVideos((prev) =>
          prev.map((v) =>
            v._id === foodId ? { ...v, saveCount: v.saveCount - 1 } : v,
          ),
        );
      }
    } catch (err) {
      navigate("/error", {
        state: {
          status: err.response?.status,
          message: "U need to be a user for using reel actions ",
        },
      });
    }
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleSave}
        className={`
    w-6
    md:w-8
    transition-all
    duration-300
    ${
      saved
        ? `
          scale-125
          brightness-150
          rotate-12
          `
        : ""
    }
`}
      >
        <img
          src="/svg/save.svg"
          alt=""
          className={`
            bg-white/100
      w-6
      md:w-8
      transition-all
      duration-300
      drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]
      drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
      ${saved ? " bg-yellow-400/70 drop-shadow-[0_0_15px_rgba(255,210,0,0.8)]" : ""}
    `}
        />
      </button>

      <div className="text-white text-xs">{saveCount}</div>
    </div>
  );
}

export default SaveButton;
