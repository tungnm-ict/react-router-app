import React, { Component} from 'react';
import { HashRouter } from 'react-router-dom';
import Person from './Person.jsx';

export default class Recursive extends Component {
    render() {
        return (
            <HashRouter>
                <Person match={{ params: { id: 0 }, url: "" }} />
            </HashRouter>
        );
    }
}