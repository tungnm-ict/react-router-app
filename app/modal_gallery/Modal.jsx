import React, {Component} from 'react';
import IMAGES from './imageSource.jsx';
import Image from './Image.jsx';

export default class Modal extends Component {

    back(e) {
        e.stopPropagation();
        this.props.history.goBack();
    };

    render() {
        const image = IMAGES[parseInt(this.props.match.params.id, 10)];
        if (!image) {
            return null;
        }
        return (
            <div
                onClick={this.back.bind(this)}
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.15)"
            }}>
                <div
                    className="modal"
                    style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"
                }}>
                    <h1>{image.title}</h1>
                    <Image color={image.color}/>
                    <button type="button" onClick={this.back.bind(this)}>
                        Close
                    </button>
                </div>
            </div>
        );
    }
}