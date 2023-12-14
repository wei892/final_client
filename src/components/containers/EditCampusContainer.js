/*==================================================
EditCampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from "./Header";
import { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampus.View"; // Replace with the view for editing campus
import { editCampusThunk } from "../../store/thunks"; // Import the thunk for updating campus

class EditCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            name: "",
            address: "",
            description: "",
            imageUrl: "",
            redirect: false,
            redirectId: null,
        };
    }
    componentDidMount() {
        // Get campus ID from URL (API link)
        this.props.fetchCampus(this.props.match.params.id);
    }

    //capture input data
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //Submit action
    handleSubmit = async event => {
        event.preventDefault();

        let edit_campus = {
            id: this.props.campus.id,
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
        };

        //edit campus in backend
        //let newCampus = await this.props.editCampus(edit_campus);
        console.log(this.props.campus.id);

        //update the state
        this.setState({
            id: "",
            name: "",
            address: "",
            description: "",
            imageUrl: "",
            redirect: true,
            redirectId: edit_campus.id,
        })
    }

    componentWillUnmount(){
        this.setState({redirect: false, redirectId:null});
    }
    
    render() {
        if(this.state.redirect){
            return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
          <div>
            <Header />
            <EditCampusView
                campus={this.props.campus}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            />
          </div>
        );
    }
    

}
const mapState = (state) => {
    return {
      campus: state.campus,  // Get the State object from Reducer "campus"
    };
};

const mapDispatch = (dispatch) => {
    return {
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
      editCampus: (id) => dispatch(editCampusThunk(id)),
    };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);