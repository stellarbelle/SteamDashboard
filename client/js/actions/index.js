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
    return dispatch => {
        dispatch(requestUserData());
        var url = new URL('/api/gamers', document.baseURI);
        url.searchParams.append('gamerId', userId);
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

export const getGameInfo = (gameIds) => {
    return dispatch => {
        dispatch(requestGameData());
        var url = new URL('/api/games', document.baseURI);
        gameIds.forEach(gameId => url.searchParams.append('gameId', gameId));
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveGameData(json)));
    }
};
