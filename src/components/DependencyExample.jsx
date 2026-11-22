
import { useState, useEffect } from "react";

function DependencyExample() {
  const [count, setCount] = useState(0);

  // Example 1: Runs after every render
  useEffect(() => {
    console.log("Effect 1: Every render");
  });

  // Example 2: Runs when component mounts
  useEffect(() => {
    console.log("Effect 2: Component mounted");
  }, []);

  // Example 3: Runs when count changes
  useEffect(() => {
    console.log("Effect 3: Count is", count);
  }, [count]);

  return (
    <div>
      <h1>useEffect Dependency Example</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default DependencyExample;
