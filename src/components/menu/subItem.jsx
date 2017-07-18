import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SubItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        return event.stopPropagation();
    }
    
    render() {
        return(
            <ul className={'main__subitems subitem ' + (this.props.style ? 'main__subitems_show' : 'main__subitems_hidden')} onClick={this.handleClick}>
                {
                    this.props.data.map((item, index) => {
                        return <li className="subitem__item item" key={index}><Link to={item.url} className="item__link">{item.title}</Link></li>
                    })
                }
            </ul>
        )
    }
}