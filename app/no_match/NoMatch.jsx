import React, {Component} from 'react';
import {HashRouter, Route, Link, Switch, Redirect} from "react-router-dom";
import Home from './Home.jsx';
import WillMatch from './WillMatch.jsx';
import NotMatch from './NotMatch.jsx';

export default class NoMatch extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/old-match">Old Match, to be redirected</Link>
                        </li>
                        <li>
                            <Link to="/will-match">Will Match</Link>
                        </li>
                        <li>
                            <Link to="/will-not-match">Will Not Match</Link>
                        </li>
                        <li>
                            <Link to="/also/will/not/match">Also Will Not Match</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Redirect from="/old-match" to="/will-match"/>
                        <Route path="/will-match" component={WillMatch}/>
                        <Route component={NotMatch}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}