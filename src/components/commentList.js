import React from "react";
import Comment from "./comment";

const CommentList = ({ comments, setComments }) => {
  const deleteHandler = (id) => {
    setComments(comments.filter((element) => element.id !== id));

    console.log(comments);
  };
  return (
    <div className="comment-container">
      <ul className="comment-list">
        {comments.map((comment) => (
          <>
            <Comment
              setComments={setComments}
              comments={setComments}
              text={comment.text}
              comment={comment}
              key={comment.id}
            />
            <button
              onClick={() => deleteHandler(comment.id)}
              className="trash-button"
            >
              Delete Comment
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
