import React from "react";

const Form = ({ setInputText, comments, setComments, inputText }) => {
    const inputTextHandler = (e) => {       
        setInputText(e.target.value);
    };
    const submitCommentHandler = (e) => {
        e.preventDefault();
        setComments([
            ...comments, { text: inputText, id: Math.random() * 1000 } // <this "... comments" is call spreading. this means if there were already items in this array..
            //or in this case, comments in the comments list, this tells it to pass it and contintue to add
        ]);
        setInputText("");
    };
   
    return(
        <form>
            {/* below on input, i am passing the "inputTextHandler" to the onChange event */}
            <input value={inputText} onChange={inputTextHandler} type="text" className="comment-input" />
            <button onClick={submitCommentHandler} className="comment-button" type="submit">
            <i className="fas fa-plus"></i>
            </button>
               
        </form>
    )
}

export default Form;