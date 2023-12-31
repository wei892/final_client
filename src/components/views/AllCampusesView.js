/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styling/AllCampusesView.css"

const AllCampusesView = (props) => {
  const {deleteCampus} = props;
  // If there is no campus, display a message.
  // if (!props.allCampuses.length) {
  //   return <div>There are no campuses.</div>;
  // }

  if (!props.allCampuses.length) {
    return (
      <div>
        <p>There are no campuses.</p>
        <Link to={`newcampus`}>
          <button>Add New Campus</button>
        </Link>
      </div>
      );
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      <div className="campusCardCont">
        {props.allCampuses.length === 0 ? 
        <h2> No Campus Information Available </h2> 
        : 
        props.allCampuses.map((campus) => (
          <div className="CampusCard" key={campus.id}>
            <div className="campusPic">
              <img src={campus.imageUrl} alt="School's campus"/>
            </div>
            <Link to={`/campus/${campus.id}`}>
              <h2>{campus.name}</h2>
            </Link>
            <h4>campus id: {campus.id}</h4>
            <p>{campus.address}</p>
            <p>{campus.description}</p>
            <button onClick={() => deleteCampus(campus.id)}>Delete</button>
          </div>
        ))}
      </div>

      <br></br>

      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;