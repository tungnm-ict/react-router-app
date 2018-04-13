import React, {Component} from 'react';

export default class Image extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                height: 400,
                background: this.props.color
            }}/>
        );
    }
}