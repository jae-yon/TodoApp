import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "Dongsu",
    comment: "Ramen"
  },
  {
    name: "Sangsu",
    comment: "Sushi"
  },
  {
    name: "Dangsu",
    comment: "Coin"
  },
  {
    name: "Honggu",
    comment: "Climbing"
  },
  {
    name: "Gackgo",
    comment: "Karaoke"
  },
];

function CommentList(props) {
  return ( 
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;