
const filteredData = (state = {
    featureFilters: []
}, action) => {
    switch(action.type) {
        case "FEATURE_FILTERS":
            return {
                featureFilters: action.filters
            };
        // case "RECEIVE_USER":
        //     return  {
        //         ...state,
        //         isFetching: false,
        //         user: action.user
        //     };
        default:
            return state
    }
};

export default filteredData;