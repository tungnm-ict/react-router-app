import React, {Component} from 'react';
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import ModalSwitch from './ModalSwitch.jsx';

// This example shows how to render two different screens (or the same screen in
// a different context) at the same url, depending on how you got there.
//
// Click the colors and see them full screen, then "visit the gallery" and click
// on the colors. Note the URL and the component are the same as before but now
// we see them inside a modal on top of the old screen.
export default class ModalGallery extends Component {
    render() {
        return (
            <HashRouter>
                <Route component={ModalSwitch}/>
            </HashRouter>
        );
    }
}