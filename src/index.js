import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';
import App from './components/app.jsx';

const store = configureStore();

// store.subscribe(() => {
//     console.log(store.getState(), '<======== subscribe state');
// });

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
     </Provider>,
    document.getElementById('root')
);
