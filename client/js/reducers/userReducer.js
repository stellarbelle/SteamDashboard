
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
                    name: action.user.name,
                    stats: {
                        hours: 2813,
                        games: 412,
                        value: 4964,
                    },
                    games: [
                        {'img': '', 'name': 'QuakeLIVE!', 'timePlayed': '23 hours', 'platforms': 'Windows', 'features': '...', 'metascore': '-'},
                        {'img': '', 'name': 'DOTA 2', 'timePlayed': '4 hours', 'platforms': 'Windows', 'features': 'Co-op', 'metascore': '90'},
                        {'img': '', 'name': 'CS:GO', 'timePlayed': '0.5 hours', 'platforms': 'Windows, Mac', 'features': '...', 'metascore': '83'}
                    ],
                    img: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/1378588_10151919808711620_186028602_n.jpg?oh=614001a42a8d746b465a1817df2096a4&oe=5821DA59",
                    online: false,
                    profileAge: 12
                }
            });
        default:
            return state
    }
};

export default currentUserData;