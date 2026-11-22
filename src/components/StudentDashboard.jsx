
import { useState, useEffect } from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStudents() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to load students");
        }

        const data = await response.json();
        setStudents(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchStudents();

    return () => controller.abort();
  }, [retryCount]);

  function handleRetry() {
    setRetryCount((previous) => previous + 1);
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="dashboard dashboard-message">
        <h2>Loading students...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard dashboard-message">
        <h2>Error: {error}</h2>
        <button
          className="retry-button"
          onClick={handleRetry}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>My Student Dashboard</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search students by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="dashboard-stats">
        <p>Total Students: {students.length}</p>
        <p>Showing: {filteredStudents.length}</p>
      </div>

      {filteredStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <div
              className="student-card"
              key={student.id}
            >
              <h2>{student.name}</h2>
              <p>
                <strong>Email:</strong> {student.email}
              </p>
              <p>
                <strong>City:</strong> {student.address.city}
              </p>
              <p>
                <strong>Company:</strong> {student.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;

