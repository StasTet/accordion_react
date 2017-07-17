import React, { Component } from 'react';
import Menu from './menu/menu.jsx';
import Routers from '../Routers';

export default class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <Menu />
                <div className="wrapper__container">
                    <Routers />
                </div>
            </div>
        );
    }
}