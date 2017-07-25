import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";

//import css
import "./css/index.css";

//import header and footer
import Header from "./header.js";
import Footer from "./footer.js";

//import containers
import FormContainer from "./containers/form-container.js";
import DocContainer from "./containers/doc-container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FormContainer />
                <DocContainer />
            </div> 
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));