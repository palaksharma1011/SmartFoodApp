import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/axios';

function LikeButton({ foodId, name }) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);

  async function handleLike() {
    // if (loading) return;

    try {
      const response = await api.post(
        "/food/like",
        { foodId: foodId },
        { withCredentials: true },
      );

      if (response.data.like) {
        console.log("Video liked");
        setLiked(true);
        setVideos((prev) =>
          prev.map((v) =>
            v._id === foodId ? { ...v, likeCount: v.likeCount + 1 } : v,
          ),
        );
      } else {
        console.log("Video unliked");
        setLiked(false);
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
<button
  onClick={handleLike}
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
    ${liked ? "scale-110" : ""}
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
      ${
        liked
          ? "drop-shadow-[0_0_15px_rgba(255,60,100,0.8)]"
          : ""
      }
    `}
  />
</button>
  );
}

export default LikeButton;
