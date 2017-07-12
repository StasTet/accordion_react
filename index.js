import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './component/store/configureStore.js'
import App from './component/app.jsx';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>,
    document.getElementById('accordion')
);