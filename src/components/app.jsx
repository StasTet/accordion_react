import React from 'react';
import Main from './main.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import '../../styles/style.scss';

const App = () => {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;