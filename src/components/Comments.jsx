
import { useState, useEffect } from "react";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  return (
    <div>
      <h1>My React Comments</h1>

      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.name}</h2>
          <p>Email: {comment.email}</p>
          <p>Comment: {comment.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Comments;
