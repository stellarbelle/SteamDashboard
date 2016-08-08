import { combineReducers } from 'redux';
import currentGamesData from './gamesReducer';
import currentUserData from './userReducer';

const rootReducer = combineReducers({
    currentUserData,
    currentGamesData,
});

export default rootReducer;