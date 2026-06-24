import SaveButton from "../../components/SaveButton";
import LikeButton from "../../components/LikeButton";
import CommentButton from "../../components/CommentButton";

import "./FoodStream.css";

function ReelActions({ reelId }) {
  return (
    <div className="reelActionContainer_xyz">
      <LikeButton foodId={(reelId = { reelId })} name="like" />

      <SaveButton foodId={(reelId = { reelId })} name="save" />

      <CommentButton foodId={(reelId = { reelId })} name="comment" />
    </div>
  );
}

export default ReelActions;
