import React from "react";

const Form = ({ setInputText, comments, setComments, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitCommentHandler = (e) => {
    e.preventDefault();
    setComments([...comments, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="comment-input"
      />
      <button
        onClick={submitCommentHandler}
        className="comment-button"
        type="submit"
      >
        Submit Comment
      </button>
    </form>
  );
};

export default Form;
