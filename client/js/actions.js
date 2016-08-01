import App from './app';
import { connect } from 'react-redux';

export const userRequestError = (error) => {
    return { error, type: 'USER_REQUEST_FAILED' };
};

export const userRequestSuccess = (response) => {
    return dispatch => {
        dispatch({ response, type: 'RECEIVED_USER_INFO' });
    };
};

export const userRequest = (user) => {
        return { user, type: 'GET_USER_INFO' };
};

export const fetchUserInfo = (userId) => {
    return dispatch =>
        fetch('http://localhost:10666/api/gamers?gamerId=' + userId, {
            method: 'get',
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response);
                    dispatch(userRequestSuccess(response));
                } else {
                    const error = new Error(response.statusText);
                    error.response = response;
                    dispatch(userRequestError(error));
                    throw error;
                }
            })
            .catch(error => { console.log('request failed', error); });
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPopulateUser: (userId) => {
            dispatch(fetchUserInfo(userId))
        }
    }
};

export const AppConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

