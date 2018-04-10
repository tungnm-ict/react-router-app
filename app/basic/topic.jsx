import React from 'react';
import ReactDOM from 'react-dom';

export default class Topic extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>{this.props.match.url}</h3>
                <h3>{this.props.match.params.topicId}</h3>
            </div>
        );
    }
}