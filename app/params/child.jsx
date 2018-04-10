import React from 'react';
import ReactDOM from 'react-dom';

export default class Child extends React.Component {
    render() {
        return (
            <div>
                <h3>ID: {this.props.match.params.id}</h3>
            </div>
        );
    }
}