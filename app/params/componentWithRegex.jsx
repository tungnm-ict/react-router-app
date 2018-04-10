import React from 'react';
import ReactDOM from 'react-dom';

export default class ComponentWithRegex extends React.Component {
    render() {
        return (
            <div>
                <h3>Only asc/desc are allowed: {this.props.match.params.direction}</h3>
            </div>
        );
    }
}