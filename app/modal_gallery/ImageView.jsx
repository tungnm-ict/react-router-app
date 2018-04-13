import React, { Component} from 'react';
import Image from './Image.jsx';
import IMAGES from './imageSource.jsx';

export default class ImageView extends Component {
    render() {
        const image = IMAGES[parseInt(this.props.match.params.id, 10)];
        if (!image) {
          return <div>Image not found</div>;
        }
      
        return (
          <div>
            <h1>{image.title}</h1>
            <Image color={image.color} />
          </div>
        );
    }
}
  