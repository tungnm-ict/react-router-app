import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { findPerson } from './store.jsx'

export default class Person extends Component {
    render() {
        const person = findPerson(this.props.match.params.id);
        return (
            <div>
                <h3>{person.name}’s Friends</h3>
                <ul>
                    {person.friends.map(id => (
                        <li key={id}>
                            <Link to={`${this.props.match.url}/${id}`}>{findPerson(id).name}</Link>
                        </li>
                    ))}
                </ul>
                <Route path={`${this.props.match.url}/:id`} component={Person}/>
            </div>
        );
    }
}