import React, { Component } from 'react';

export default class Slide extends Component {
    constructor(props) {
        super(props);

    }

    getTemplates(data) {
        const url = data.src.split('/');
        const newUrl = url[url.length - 1];

        if (data.type == 'image') {
            return data.src
        } else if (data.type == 'video') {
            
            return 'http://img.youtube.com/vi/' + newUrl + '/default.jpg'
        }
    }

    render() {
        return <img src={ this.getTemplates(this.props.data) } onClick={() => this.props.onChildClick(this.props.data) } />
    }
}