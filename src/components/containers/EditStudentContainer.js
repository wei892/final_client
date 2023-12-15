import Header from "./Header";
import { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editStudentThunk } from "../../store/thunks";
import EditStudentView from "../views/EditStudent.view"; // Replace with the view for editing campus
import { fetchStudentThunk } from "../../store/thunks"; // Import the thunk for updating campus

class EditStudentContainer extends Component {
    // Initialize state
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "", 
      campusId: null, 
      email: "",
      gpa: 0,
      imageUrl: "",
      redirect: false, 
      redirectId: null
    };
  }
  componentDidMount() {
    // Get campus ID from URL (API link)
    this.props.fetchStudent(this.props.match.params.id);
    console.log(this.props.student);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.props);
  }

  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let student = {
        id: this.props.student.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        campusId: this.state.campusId,
        email: this.state.email,
        gpa: this.state.gpa,
        imageUrl: this.state.imageUrl,
    };
    
    // Add new student in back-end database
    let editStudent = await this.props.editStudent(student);

    // Update state, and trigger redirect to show the new student
    this.setState({
      id: "",
      firstname: "", 
      lastname: "", 
      campusId: null,
      email: "",
      gpa: 0.00,
      imageUrl: "",
      redirect: true, 
      redirectId: student.id
    });
  }
  componentWillUnmount(){
    this.setState({redirect: false, redirectId:null});
  }
  render() {
    if(this.state.redirect){
        return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }
    return (
      <div>
        <Header />
        <EditStudentView
            student = {this.props.student}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
        />
      </div>
    );
  }
}

const mapState = (state) => {
    return {
      student: state.student,  // Get the State object from Reducer "student"
    };
};

const mapDispatch = (dispatch) => {
    return {
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
      editStudent: (student) => dispatch(editStudentThunk(student)),
    };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);