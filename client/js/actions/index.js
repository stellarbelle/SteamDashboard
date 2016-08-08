import fetch from 'isomorphic-fetch'

export const requestUserData = () => {
    return {
        type: 'REQUEST_USER',
    }
};

export const receiveUserData = (response) => {
    return {
        user: response.results[0],
        type: 'RECEIVE_USER',
    }
};

export const getUserInfo = (userId) => {
    var url ='/api/gamers?gamerId=' + userId;
    return dispatch => {
        dispatch(requestUserData());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveUserData(json)));
    }
};

export const requestGameData = () => {
    return {
        type: 'REQUEST_GAMES',
    }
};

export const receiveGameData = (response) => {
    return {
        games: response,
        type: 'RECEIVE_GAMES',
    }
};

export const getGameInfo = (games) => {
    var url ='/api/games?' + games;
    return dispatch => {
        dispatch(requestGameData());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveGameData(json)));
    }
};
