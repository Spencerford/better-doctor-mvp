import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="col-md-12 text-center header">
                <h1>Search For a Doctor Near You!</h1>
                <input
                    onChange={(event) => {
                    this
                        .props
                        .handleChange("name", event);
                }}
                    value={this.props.input.name}
                    placeholder="name"
                    type="text"/>
                <input
                    onChange={(event) => {
                    this
                        .props
                        .handleChange("origin", event);
                }}
                    value={this.props.input.origin}
                    placeholder="state"
                    type="text"/>
                <button onClick={() => {
                        this.props.handleClick(this.props.input);
                    }} >Search</button>
            </div>
        );
    }
}

export default Form;