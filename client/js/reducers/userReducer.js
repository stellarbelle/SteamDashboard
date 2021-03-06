
const currentUserData = (state = {
    isFetching: false,
}, action) => {
    switch(action.type) {
        case "REQUEST_USER":
            return {
                ...state,
                isFetching: true,
            };
        case "RECEIVE_USER":
            return  {
                ...state,
                isFetching: false,
                user: action.user
            };
        default:
            return state
    }
};

export default currentUserData;