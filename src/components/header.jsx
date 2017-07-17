import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo logo">
                    <Link to="/" className="logo__link">
                        <img src='/images/logo.png' className="logo__image" />
                    </Link>
                </div>

                <div className="header__sitename">
                    Test site
                </div>
            </div>
        );
    }
}