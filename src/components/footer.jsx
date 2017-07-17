import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'; //file-loader!

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__logo logo">
                    <Link to="/" className="logo__link">
                         <img src={logo} className="logo__image" /> 
                    </Link>
                </div>

                <div className="footer__copyright">
                    <p>© 2017</p>
                </div>
            </div>
        );
    }
}