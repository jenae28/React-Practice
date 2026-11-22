
function Courses() {
  const courses = [
    {
      id: 1,
      name: "React Basics",
      instructor: "Sarah",
      duration: "4 weeks"
    },
    {
      id: 2,
      name: "JavaScript Fundamentals",
      instructor: "Michael",
      duration: "6 weeks"
    },
    {
      id: 3,
      name: "HTML and CSS",
      instructor: "Emily",
      duration: "3 weeks"
    },
    {
      id: 4,
      name: "Python Programming",
      instructor: "David",
      duration: "8 weeks"
    }
  ];

  return (
    <div>
      <h1>Available Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          <p>Duration: {course.duration}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Courses;
