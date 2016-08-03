import { store } from './App';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App'

export const Root = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
};