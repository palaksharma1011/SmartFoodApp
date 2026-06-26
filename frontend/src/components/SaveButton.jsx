import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SaveButton({ foodId, name }) {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);

  async function handleSave() {
    // if (loading) return;

    try {
      const response = await axios.post(
        "https://smartfoodapp-backend.onrender.com/api/food/save",
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
      className={`reelSaveBtn_xyz ${saved ? "reelSaved_xyz" : ""}`}
      onClick={handleSave}
    >
      <img src="/svg/save.svg" alt="" />
    </button>
  );
}

export default SaveButton;
