import React, { Component } from 'react';

export default class FullPreview extends Component {

    show() {
        let slide = null;

        if (this.props.data !== undefined && this.props.data !== null) {
            slide = this.props.data;
            
            const defaultWidth = 600;
            const defaultHeight = 370;

            if (slide.type == 'image') {
                return <img src={slide.src} />
                
            } else if (slide.type == 'video') {
                return <iframe width={defaultWidth} height={defaultHeight} src={slide.src + '/?autoplay=1;'}></iframe>
            }
        } else {
            return null
        }

    }

    render() {
        return this.show()
    }
}