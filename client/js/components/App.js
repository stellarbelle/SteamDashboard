import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import Profile from './Profile';


export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

const App = () => {
    return (
        <div>
            <Profile />
        </div>
)};

export default App;
