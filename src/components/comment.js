import React from "react";

const Comment = ({ text, comment, comments, setComments }) => {

    const deleteHandler = () => {
        setComments(comments.filter((element) => element.id !== comment.id));        
       
        console.log(comments)
    };
    return(
        <div className="comment">
            <li className="comment-item">{text}</li>
            <button onClick={deleteHandler} className="trash-button">Delete Comment</button>
        </div>
    );
}

export default Comment;