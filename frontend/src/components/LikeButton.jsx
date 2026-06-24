import { useState } from "react";
import axios from "axios";

function LikeButton({ foodId, name }) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLike() {
    if (loading) return;

    const prev = liked;

    setLiked(!liked);
    setLoading(true);

    try {
      await axios.post(
        "/api/like-food",
        {
          foodId,
          action: name,
        },
        {
          withCredentials: true,
        },
      );
    } catch (err) {
      setLiked(prev);

      console.log(err);
    } finally {
      setLoading(false);
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
