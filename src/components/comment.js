import React from "react";

const Comment = ({ text, comment, comments, setComments }) => {

    const deleteHandler = () => {
        setComments(comments.filter((el) => el.id !== comment.id));
        
    }



    return(
        <div className="comment" >
            <li className="comment-item">{text}</li>
            <button onClick={deleteHandler} className="trash-button">
                <i className="fas fa-trash" ></i>
            </button>
        </div>

    );
}

export default Comment;