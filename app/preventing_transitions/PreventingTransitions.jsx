import React, { Component} from 'react';
import {HashRouter, Route, Link} from "react-router-dom";
import Form from './Form.jsx';

export default class PreventingTransitions extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Form</Link>
                        </li>
                        <li>
                            <Link to="/one">One</Link>
                        </li>
                        <li>
                            <Link to="/two">Two</Link>
                        </li>
                    </ul>
                    <Route path="/" exact component={Form}/>
                    <Route path="/one" render={() => <h3>One</h3>}/>
                    <Route path="/two" render={() => <h3>Two</h3>}/>
                </div>
            </HashRouter>
        );
    }
}