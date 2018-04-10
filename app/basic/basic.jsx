import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, HashRouter} from "react-router-dom";
import Home from './home.jsx';
import About from './about.jsx';
import Topics from './topics.jsx';

export default class Basic extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </HashRouter>
        );
    }
}
