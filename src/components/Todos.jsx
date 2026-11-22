
import { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div>
      <h1>My Todo List</h1>

      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
<p>Task ID: {todo.id}</p>

          <p>
            Status: {todo.completed ? "Completed" : "Pending"}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Todos;
