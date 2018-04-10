import React from "react";
import fakeAuth from './fakeAuth.jsx'
import {Route, Redirect} from "react-router-dom";
export default class PrivateRoute extends React.Component {
    render() {
        var Component = this.props.component;
        return (
            <Route
            path = {this.props.path}
            render={ () => fakeAuth.isAuthenticated
            ? (<Component {...this.props}/>)
            : (<Redirect to={{ pathname: "/login", state: { from: this.props.location } }}/>) 
            }/>
        );
    }
}