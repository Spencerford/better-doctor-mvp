import React, { Component } from 'react';

import DocItem from "../components/doc-item.js";

class DocItemContainer extends Component {
    render() {
        return (
            <div>
                <DocItem item={this.props.item}/>
            </div>
        );
    }
}

export default DocItemContainer;