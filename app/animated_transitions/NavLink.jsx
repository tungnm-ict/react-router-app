import React, { Component} from 'react';
import styles from './styleSheet.jsx';
import {Link} from 'react-router-dom';

export default class NavLink extends Component {
    render() {
        return (
            <li style={styles.navItem}>
                <Link {...this.props} style={{
                    color: "inherit"
                }}/>
            </li>
        );
    }
}