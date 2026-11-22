
import { useState, useEffect } from "react";

function FetchStatus() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setStatus("loading");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to load users");
        }

        const data = await response.json();

        setUsers(data);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    }

    fetchUsers();
  }, []);

  if (status === "loading") {
    return <h2>Loading user information...</h2>;
  }

  if (status === "error") {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Users Loaded Successfully!</h1>

      <p>Total Users: {users.length}</p>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FetchStatus;
