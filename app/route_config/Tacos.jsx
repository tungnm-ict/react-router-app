import React, {Component} from 'react';
import {Link } from "react-router-dom";
import RouteWithSubRoutes from './RouteWithSubRoutes.jsx';

export default class Tacos extends Component {
    render() {
        return (
            <div>
                <h2>Tacos</h2>
                <ul>
                    <li>
                        <Link to="/tacos/bus">Bus</Link>
                    </li>
                    <li>
                        <Link to="/tacos/cart">Cart</Link>
                    </li>
                </ul>

                {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
            </div>
        );
    }
}