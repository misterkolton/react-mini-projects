import React, { useState } from "react";

export function Input() {
  const [comment, setComment] = useState("");

  return (
    <div className="user-comment">
      <h2>{comment}</h2>
      <form>
        <input placeholder="leave a comment..."></input>
        <button onClick={() => setComment()}></button>
      </form>
    </div>
  );
}
