import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Gallery from './Gallery.jsx';
import ImageView from './ImageView.jsx';
import Modal from './Modal.jsx';

export default class ModalSwitch extends Component {
    // We can pass a location to <Switch/> that will tell it to ignore the router's
    // current location and use the location prop instead.
    //
    // We can also use "location state" to tell the app the user wants to go to
    // `/img/2` in a modal, rather than as the main page, keeping the gallery
    // visible behind it.
    //
    // Normally, `/img/2` wouldn't match the gallery at `/`. So, to get both screens
    // to render, we can save the old location and pass it to Switch, so it will
    // think the location is still `/` even though its `/img/2`.

    constructor(props) {
        super(props);
        this.previousLocation = this.props.location;
        
    }

    componentWillUpdate(nextProps) {
        const {location} = this.props;
        // set previousLocation if props.location is not modal
        if (nextProps.history.action !== "POP" && (!location.state || !location.state.modal)) {
            this.previousLocation = this.props.location;
        }
    }

    render() {
        const {location} = this.props;
        const isModal = !!(location.state && location.state.modal && this.previousLocation !== location); // not initial render
        return (
            <div>
                <Switch
                    location={isModal
                    ? this.previousLocation
                    : location}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/img/:id" component={ImageView}/>
                </Switch>
                {isModal
                    ? <Route path="/img/:id" component={Modal}/>
                    : null}
            </div>
        );
    }
}