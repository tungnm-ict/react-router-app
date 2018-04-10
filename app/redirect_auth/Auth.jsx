import React from "react";
import { BrowserRouter as Router,Route,Link,Redirect, HashRouter,Switch } from "react-router-dom";
import AuthButton from "./AuthButton.jsx";
import Login from "./Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Public from './Public.jsx';
import Protected from './Protected.jsx';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

export default class Auth extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <AuthButton/>
                    <ul>
                        <li>
                            <Link to="/public" replace>Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected" replace>Protected Page</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/protected"/>)}/>
                        <Route path="/public" component={Public}/>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute path="/protected" component={Protected}/>
                        <Route component={() => (<h1>ERROR PAGE</h1>)}/>
                    </Switch>
                  
                </div>
            </HashRouter>
        );
    }
}