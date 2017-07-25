import React, { Component } from 'react';
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/index.js";

import Form from "../components/form.js";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            text: {
                name: "",
                origin: ""
            }
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
        console.log(this.state.text)
    }

    render() {
        return (
            <div className="row">
                <Form input={this.state} text="test" handleClick={this.props.loadData} handleChange={this.handleChange}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);