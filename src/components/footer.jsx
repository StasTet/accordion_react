import React, { Component } from 'react';
import logo from '../../images/logo.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__logo logo">
                    <img src={logo} className="logo__image" /> 
                </div>

                <div className="footer__copyright">
                    <p>© 2017</p>
                </div>
            </div>
        );
    }
}