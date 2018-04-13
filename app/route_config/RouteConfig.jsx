import React, { Component} from 'react';
import {HashRouter, Route, Link, Switch} from "react-router-dom";
import routes from './routes.jsx';

import RouteWithSubRoutes from './RouteWithSubRoutes.jsx';

// Some folks find value in a centralized route config. A route config is just
// data. React is great at mapping data into components, and <Route> is a
// component. wrap <Route> and use this everywhere instead, then when sub routes
// are added to any route it'll work
export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/tacos">Tacos</Link>
                        </li>
                        <li>
                            <Link to="/sandwiches">Sandwiches</Link>
                        </li>
                    </ul>
                <Switch>
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
                </Switch>
                </div>
            </HashRouter>
        );
    }
}