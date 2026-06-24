import { useState } from "react";
import CommentsModal from "./CommentsModal";

function CommentButton({ foodId, name }) {
  const [openComments, setOpenComments] = useState(false);

  return (
    <>
      <button
        className="reelCommentBtn_xyz"
        onClick={() => setOpenComments(true)}
      >
        <img
          src="/svg/comment.svg"
          alt=""
        />
      </button>

      {openComments && (
        <CommentsModal
          foodId={foodId}
          name={name}
          closeModal={() => setOpenComments(false)}
        />
      )}
    </>
  );
}

export default CommentButton;
