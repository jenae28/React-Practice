
import { useEffect } from "react";

function Message() {
  useEffect(() => {
    console.log("Welcome! My component has loaded.");
  }, []);

  return (
    <div>
      <h1>Learning useEffect</h1>
      <p>My first useEffect example!</p>
    </div>
  );
}

export default Message;
