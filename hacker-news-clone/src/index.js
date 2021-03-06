import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import setGlobalStyles from 'styles/globals';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from 'store';

setGlobalStyles();

const renderApp = () => {
    const initialState = {};
    const store = configureStore(initialState);

    store.dispatch({ type: '@hnClone/@@INIT' });

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'));
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
