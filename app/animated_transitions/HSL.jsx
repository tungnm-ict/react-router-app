import React, {Component} from 'react';
import styles from './styleSheet.jsx';

export default class HSL extends Component {
    render() {
        return (
            <div
                style={{
                ...styles.hsl,
                background: `hsl(${this.props.match.params.h}, ${this.props.match.params.s}%, ${this.props.match.params.l}%)`
            }}>
                hsl({this.props.match.params.h}, {this.props.match.params.s}%, {this.props.match.params.l}%)
            </div>
        );
    }
}