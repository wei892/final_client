/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom/cjs/react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <img  src={student.imageUrl} alt="student icon" style={{width: 300}}/>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {student.campus == null ? <p> Student Is Not At A School Yet </p> : 
      <Link to={`../../campus/${student.campus.id}`}>
        <h3>{student.campus.name}</h3>
      </Link>}

      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa === null ? Number(0).toFixed(2) : Number(student.gpa).toFixed(2)}</p>
      <Link to={`/editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );

};

export default StudentView;