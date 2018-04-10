import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from "react-router-dom";

export default class MenuLink extends React.Component {
    render() {
        return <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "active" : ""}>
            {match ? "> " : ""}
            <Link to={this.props.to}>{this.props.label}</Link>
          </div>
        )}
      />;
    }
}