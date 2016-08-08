
const currentGamesData = (state = {
    isFetching: false,
}, action) => {
    switch(action.type) {
        case "REQUEST_GAMES":
            return {
                ...state,
                isFetching: true,
            };
        case "RECEIVE_GAMES":
            return  {
                ...state,
                isFetching: false,
                games: action.games
            };
        default:
            return state
    }
};

export default currentGamesData;