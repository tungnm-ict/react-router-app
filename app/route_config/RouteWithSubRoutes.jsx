import React, {Component} from 'react';
import { Route } from "react-router-dom";

export default class RouteWithSubRoutes extends Component {
    render() {
        var {path, routes} = this.props;
        return (
            <Route
                path={path}
                render={props => (
                // pass the sub-routes down to keep nesting
                <this.props.component {...props} routes={routes} />
                )}
            />
        );
    }
}