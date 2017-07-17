import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__logo logo">
                    <Link to="/" className="logo__link">
                        <img src='/images/logo.png' className="logo__image" />
                    </Link>
                </div>

                <div className="footer__copyright">
                    <p>© 2017</p>
                </div>
            </div>
        );
    }
}