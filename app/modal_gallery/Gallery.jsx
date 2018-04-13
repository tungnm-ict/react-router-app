import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import IMAGES from './imageSource.jsx';
import Thumbnail from './Thumbnail.jsx';

export default class Gallery extends Component {
    render() {
        return (
            <div>
                {IMAGES.map(i => (
                    <Link
                        key={i.id}
                        to={{
                        pathname: `/img/${i.id}`,
                        state: { modal: true } }}>
                        {/* this is the trick!  */}
                        <Thumbnail color={i.color}/>
                        <p>{i.title}</p>
                    </Link>
                ))}
            </div>
        );
    }
}