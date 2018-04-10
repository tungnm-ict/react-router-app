import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link} from "react-router-dom";
import Topic from './topic.jsx';
export default class Topics extends React.Component {
    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
                <Route
                    exact
                    path={this.props.match.url}
                    render={() => <h3>Please select one topic.</h3>}/>
            </div>
        );
    }
}