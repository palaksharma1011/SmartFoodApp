import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function LikeButton({ foodId, name, count }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(count);
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  async function handleLike(e) {
    // if (loading) return;
    e.preventDefault();

    try {
      const response = await api.post(
        "/food/like",
        { foodId: foodId },
        { withCredentials: true },
      );

      if (response.data.like) {
        console.log("Video liked");
        setLiked(true);
        setLikeCount((prev) => prev + 1);
        setVideos((prev) =>
          prev.map((v) =>
            v._id === foodId ? { ...v, likeCount: v.likeCount + 1 } : v,
          ),
        );
      } else {
        console.log("Video unliked");
        setLiked(false);
        setLikeCount((prev) => prev - 1);
        setVideos((prev) =>
          prev.map((v) =>
            v._id === foodId ? { ...v, likeCount: v.likeCount - 1 } : v,
          ),
        );
      }
      console.log(response);
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
        onClick={handleLike}
        className={`
    w-6
    md:w-8
    transition-all
    duration-300
    ${
      liked
        ? `
          scale-125
          brightness-150
          rotate-12
          drop-shadow-[0_0_20px_rgb(255,0,100)]
          `
        : ""
    }
`}
      >
        <img
          src="/svg/like.svg"
          alt=""
          className={`
      w-6
      md:w-8
      transition-all
      duration-300
      drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]
      drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
      ${liked ? "drop-shadow-[0_0_15px_rgba(255,60,100,0.8)]" : ""}
    `}
        />
      </button>

      <div className="text-white text-xs">{likeCount}</div>
    </div>
  );
}

export default LikeButton;
