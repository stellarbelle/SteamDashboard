
const steamApp = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch(action.type) {
        case "REQUEST_USER":
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case "RECEIVE_USER":
            console.log("Received: ", action.user);
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                user: action.user,
            });
        default:
            return state
    }
};

export default steamApp;