import React, { Component } from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"

import Doc from "../components/doc.js";

class DocContainer extends Component {
    render() {
        return (
            <div className="row">
                <Doc results={this.props.results}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchersToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(DocContainer);