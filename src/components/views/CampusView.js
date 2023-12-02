/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import "../styling/CampusView.css"

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  // console.log(campus.students.gpa)
  return (
    <div>
      <img src={campus.imageUrl} alt="school campus" className="campusImg"/>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <br/>
      <hr/>

      <h3>Students at {campus.name}</h3>

      <div className="studentCont">
        {campus.students.length === 0 ? 
          <h2> No Students At This Campus Yet </h2>
        :
        campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div className="studentCard" key={student.id}>
              <div className="cardLeft"> 
                <img className="studentIcon" src={student.imageUrl} alt="Student Icon"/>
              </div>
              <div className="cardRight"> 
                <Link to={`/student/${student.id}`}>
                  <h2>{name}</h2>
                </Link> 
                <hr/>
                <h4>{campus.name}</h4>
                <p>Email: {student.email}</p>
                <p>GPA: {student.gpa === null ? Number(0).toFixed(2) : Number(student.gpa).toFixed(2)}</p>
              </div>
                          
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default CampusView;