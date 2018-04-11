import React, { Component} from 'react';

export default class NotMatch extends Component {
    render() {
        return (
            <h3>
                No match for <code>{this.props.location.pathname}</code>
            </h3>
        );
    }
}