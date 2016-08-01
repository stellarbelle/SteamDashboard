import { fetchUserInfo } from './actions';

const userInfo = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_INFO':
            console.log(action);
            // fetchUserInfo(action.userId);
            return state;
        case 'USER_REQUEST_FAILED':
            console.log('failed from reducer');
            return state;
        case 'RECEIVED_USER_INFO':
            console.log('success', action);
            console.log('success from reducer');
            return state;
        default:
            return state;
    }
};

export default userInfo;