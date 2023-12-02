/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <img  src={student.imageUrl} alt="student icon" style={{width: 300}}/>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {student.campus == null ? <p> Student Is Not At A School Yet </p> : 
      <h3>{student.campus.name}</h3>}

      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa === null ? Number(0).toFixed(2) : Number(student.gpa).toFixed(2)}</p>
    </div>
  );

};

export default StudentView;