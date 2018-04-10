import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, HashRouter} from "react-router-dom";
import Child from './child.jsx'
import ComponentWithRegex from './componentWithRegex.jsx'

export default class Params extends React.Component {
    render() {
    return (
        <HashRouter>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li>
                        <Link to="/netflix">Netflix</Link>
                    </li>
                    <li>
                        <Link to="/zillow-group">Zillow Group</Link>
                    </li>
                    <li>
                        <Link to="/yahoo">Yahoo</Link>
                    </li>
                    <li>
                        <Link to="/modus-create">Modus Create</Link>
                    </li>
                    <li>
                        <Link to="/order/asc">Order ASC</Link>
                    </li>
                    <li>
                        <Link to="/order/desc">Order DESC</Link>
                    </li>
                    <li>
                        <Link to="/order/foo">Order FOO</Link>
                    </li>
                </ul>

                <Route path="/:id" component={Child} />

                {/*
                It's possible to use regular expressions to control what param values should be matched.
                * "/order/asc"  - matched
                * "/order/desc" - matched
                * "/order/foo"  - not matched
                */}
                <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
            </div>
        </HashRouter>
    );
    }
}
