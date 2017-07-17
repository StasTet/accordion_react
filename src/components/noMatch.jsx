import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="wrapper__article">
            <h1>Page not found!</h1>
            <p><Link to="/">Home page</Link></p>
        </div>
    );
}

export default NoMatch;