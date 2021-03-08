import React from "react";
import Comment from "./comment"


const CommentList = ({ comments, setComments }) => {
     return(
        <div className="comment-container">
            <ul className="comment-list">
                {comments.map((comment) => (
                    <Comment 
                        setComments={setComments}
                        comments={setComments}
                        text={comment.text}
                        comment= {comment}
                        key={comment.id}
                    />
                )) }
            </ul>
        </div>
    );  
};

export default CommentList;