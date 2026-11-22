
import { useState, useEffect } from "react";

function MessageBox() {
  useEffect(() => {
    console.log("My component appeared!");

    return () => {
      console.log("My component disappeared!");
    };
  }, []);

  return <h2>Welcome to my React App!</h2>;
}

function ShowHide() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Mounting and Unmounting Practice</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <MessageBox />}
    </div>
  );
}

export default ShowHide;

