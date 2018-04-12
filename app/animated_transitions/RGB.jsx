import React, {Component} from 'react';
import styles from './styleSheet.jsx';

export default class RGB extends Component {
    render() {
        return (
            <div
                style={{
                ...styles.rgb,
                background: `rgb(${this.props.match.params.r}, ${this.props.match.params.g}, ${this.props.match.params.b})`
            }}>
                rgb({this.props.match.params.r}, {this.props.match.params.g}, {this.props.match.params.b})
            </div>
        );
    }
}