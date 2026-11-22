
function StudentList() {
  const students = [
    "Jenae",
    "Sarah",
    "Michael",
    "Emily",
    "David",
    "Dominic"
  ];

  return (
    <div>
      <h1>My Student List</h1>

      {students.map((student) => (
        <div key={student}>
          <h2>{student}</h2>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
