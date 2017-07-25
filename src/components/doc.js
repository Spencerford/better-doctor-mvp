import React, { Component } from 'react';

import DocItemContainer from "../containers/doc-item-container.js";

class Doc extends Component {
    genItems() {
        return this.props.results.map((item, index) => {
            return <DocItemContainer key={item.practices[0].name + index} item={item}/>
        })
    } 
    render() {
        return (
            <div className="col-md-12">
                {this.genItems()}
            </div>
        );
    }
}

export default Doc;