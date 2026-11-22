
import { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // Runs when the component mounts
  useEffect(() => {
    console.log("Component Mounted!");

    return () => {
      console.log("Component Unmounted!");
    };
  }, []);

  // Runs when the counter changes
  useEffect(() => {
    console.log("Counter Updated:", count);
  }, [count]);

  return (
    <div>
      <h1>React Counter Practice</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 5)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Lifecycle;
