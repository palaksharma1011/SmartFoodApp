import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function SaveButton({ foodId, name }) {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);

  async function handleSave() {
    // if (loading) return;

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
        setVideos((prev) =>
          prev.map((v) =>
            v._id === foodId ? { ...v, saveCount: v.saveCount + 1 } : v,
          ),
        );
      } else {
        setSaved(false);
        console.log("unsaved!!!");
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
    <button
      onClick={handleSave}
      className={`
    flex
    h-12
    w-12
    md:h-14
    md:w-14
    items-center
    justify-center
    bg-transparent
    transition-all
    duration-300
    hover:scale-110
    ${saved ? "scale-110" : ""}
  `}
    >
      <img
        src="/svg/save.svg"
        alt=""
        className={`
      w-6
      md:w-8
      transition-all
      duration-300
      drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]
      drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
      ${saved ? "drop-shadow-[0_0_15px_rgba(255,210,0,0.8)]" : ""}
    `}
      />
    </button>
  );
}

export default SaveButton;
