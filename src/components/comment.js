import React from "react";

const Comment = ({ text }) => {
  return (
    <div className="comment">
      <li className="comment-item">{text}</li>
    </div>
  );
};

export default Comment;
