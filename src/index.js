import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './store';
import App from './components/app.jsx';

const store = configureStore();

// store.subscribe(() => {
//     console.log(store.getState(), '<======== subscribe state');
// });

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
     </Provider>,
    document.getElementById('root')
);