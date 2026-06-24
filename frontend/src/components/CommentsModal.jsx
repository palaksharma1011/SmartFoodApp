import { useState } from "react";
import axios from "axios";

function CommentsModal({ foodId, name, closeModal }) {
  const [comment, setComment] = useState("");

  async function submitComment() {
    if (!comment.trim()) return;

    try {
      await axios.post(
        "/api/comment-food",
        {
          foodId,
          comment,
          action: name,
        },
        {
          withCredentials: true,
        },
      );

      setComment("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="reelCommentOverlay_xyz" onClick={closeModal}>
      <div
        className="reelCommentModal_xyz"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="reelCommentHandle_xyz"></div>

        <h3>Comments</h3>

        <div className="reelCommentBody_xyz">{/* comments list */}</div>

        <div className="commentInputContainer_xyz">
          <input
            className="commentInput_xyz"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write comment..."
          />

          <button className="sendCommentBtn_xyz" onClick={submitComment}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;
