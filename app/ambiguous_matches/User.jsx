import React, { Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <h3>
                User: {this.props.match.params.user}               
            </h3>
        );
    }
}