import React, {Component} from 'react';
import {Prompt} from "react-router-dom";
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false
        };
    }
    handlerSubmitForm(event) {
        event.preventDefault();
        this.setState({isBlocking: false});
    }

    handlerInputChange(event) {
        this.setState({ isBlocking: event.target.value.length > 0 });
    }

    render() {
        const {isBlocking} = this.state;
        return (
            <form onSubmit = {this.handlerSubmitForm.bind(this)} >
                <Prompt when = {isBlocking}
                    message={location => `Are you sure you want to go to ${location.pathname}`}/>
                <p> Blocking?{" "} {isBlocking ? "Yes, click a link or the back button" : "Nope"} </p>
                <p>
                    <input size="50" placeholder="type something to block transitions"
                        onChange={this.handlerInputChange.bind(this)}/>
                </p>
                <p> <button>Submit to stop blocking</button> </p>
            </form>
        );
    }
}