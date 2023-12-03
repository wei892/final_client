import Header from "./Header";
import { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from "../views/NewCampus.View";
import { addCampusThunk } from "../../store/thunks";

class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            address: "",
            description: "",
            imageUrl: "",
            redirect: false,
            redirectId: null,
        };
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

        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
        };

        //add new campus in backend
        let newCampus = await this.props.addCampus(campus);

        //update the state
        this.setState({
            name: "",
            address: "",
            description: "",
            imageUrl: "",
            redirect: true,
            redirectId: newCampus.id,
        })
    }

    componentWillUnmount(){
        this.setState({redirect: false, redirectId:null});
    }

    //render new campus input form
    render(){
        //redirect to the campus's page after submit
        if(this.state.redirect){
            return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }

        return (
            <div>
                <Header />
                <NewCampusView 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                />
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return ({
        addCampus: (campus) => dispatch (addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);