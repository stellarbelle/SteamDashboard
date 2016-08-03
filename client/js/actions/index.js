// import App from '../app';
// import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch'

export const requestUserData = () => {
    return {
        type: 'REQUEST_USER',
    }
};

export const receiveUserData = (response) => {
    return {
        user: response,
        type: 'RECEIVE_USER',
    }
};

export const getUserInfo = (userId) => {
    return dispatch => {
        dispatch(requestUserData());
        return fetch('http://localhost:10666/api/gamers?gamerId=' + userId)
            .then(response => dispatch(receiveUserData(response)));
    }
};

// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     };
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onPopulateUser: (userId) => {
//             dispatch(fetchUserInfo(userId))
//         }
//     }
// };
//
// export const AppConnected = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App);

