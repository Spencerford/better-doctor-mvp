import React, {Component} from 'react';

class DocItem extends Component {
    render() {
        return (
            <div className="col-md-4">
                    <p className="text-center"><strong>Name:</strong> {this.props.item.profile.first_name} {" "} {this.props.item.profile.last_name} {" "} {this.props.item.profile.title}</p>
                    <p><strong>Address:</strong> <br /> {this.props.item.practices[0].visit_address.city}, {" "}
                    {this.props.item.practices[0].visit_address.state} <br />
                    {this.props.item.practices[0].visit_address.street} <br />
                    {this.props.item.practices[0].visit_address.zip}</p>
                    <p><strong>Bio:</strong> {this.props.item.profile.bio}</p>
                
            </div>
        );
    }
}

export default DocItem;