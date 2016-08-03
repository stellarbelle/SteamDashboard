
const currentUserData = (state = {
    isFetching: false,
    didInvalidate: false,
    user: {}
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
                user: {
                    img: 'hello-world',
                    name: action.user.name,
                }
            });
        default:
            return state
    }
};

export default currentUserData;