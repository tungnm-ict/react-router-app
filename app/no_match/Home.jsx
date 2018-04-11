import React, { Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <p>
                A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
                that matches. A <code>&lt;Route></code> with no <code>path</code> always
                matches.
            </p>
        );
    }
}