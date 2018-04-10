import React from 'react';
import fakeAuth from './fakeAuth.jsx'
import { Redirect } from "react-router-dom";
export default class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {redirectToReferrer: false};
    }

    login() {
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferrer: true});
        });
    };

    render() {
        const {from} = this.props.location.state || {
            from: {
                pathname: "/"
            }
        };
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from}/>;
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login.bind(this)}>Log in</button>
            </div>
        );
    }
}