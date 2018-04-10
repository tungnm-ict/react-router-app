import React from "react";
import { withRouter } from "react-router-dom";
import fakeAuth from './fakeAuth.jsx'

class AuthButton extends React.Component {
    render() {
        return fakeAuth.isAuthenticated
            ? (
                <p>
                    Welcome!{" React-router "}
                    <button
                        onClick={() => {
                        fakeAuth.signout(() => this.props.history.push("/"));
                    }}>
                        Sign out
                    </button>
                </p>
            )
            : (
                <p>You are not logged in.</p>
            );
    }
}

export default withRouter(AuthButton);