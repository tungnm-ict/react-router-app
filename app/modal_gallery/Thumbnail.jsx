import React, {Component} from 'react';

export default class Thumbnail extends Component {
    render() {
        return (
            <div style={{
                width: 50,
                height: 50,
                background: this.props.color
            }}/>
        );
    }
}