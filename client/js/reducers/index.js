import { combineReducers } from 'redux';
import currentGamesData from './gamesReducer';
import currentUserData from './userReducer';
import filteredData from './filtersReducer';

const rootReducer = combineReducers({
    currentUserData,
    currentGamesData,
    filteredData,
});

export default rootReducer;