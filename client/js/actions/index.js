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

