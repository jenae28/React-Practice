
function StudentInfo() {
  const students = [
    {
      id: 1,
      name: "Jenae",
      age: 25,
      course: "Software Engineering"
    },
    {
      id: 2,
      name: "Sarah",
      age: 22,
      course: "Web Development"
    },
    {
      id: 3,
      name: "Michael",
      age: 24,
      course: "Computer Science"
    },
    {
      id: 4,
      name: "Emily",
      age: 21,
      course: "Cybersecurity"
    }
  ];

  return (
    <div>
      <h1>Student Information</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>Name: {student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentInfo;
