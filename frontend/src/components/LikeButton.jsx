import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LikeButton({ foodId, name }) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);

  async function handleLike() {
    // if (loading) return;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/food/like",
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
      className={`reelLikeBtn_xyz ${liked ? "reelLiked_xyz" : ""}`}
      onClick={handleLike}
    >
      <img src="/svg/like.svg" alt="" />
    </button>
  );
}

export default LikeButton;
