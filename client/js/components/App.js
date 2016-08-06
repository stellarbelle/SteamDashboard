import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import currentUserData from '../reducers/userReducer';
import Profile from './profile';


export const store = createStore(
    currentUserData,
    null,
    applyMiddleware(
        thunkMiddleware
    )
);

const App = () => {
    return (
        <div>
            <Profile />
        </div>
)};

export default App;

// http://localhost:10666/api/gamers?gamerId=76561198067052329
// "results" is a list of dictionaries
//store: {
//        user: {
//          "name": "Joe",
//          "id": "123450",
//          "gameIds": [1344, 5678, 1111]
//          "friends": [{"name": "mandrake", "id": "7777"},
//                    {"name": "djeebus", "id": 124}]
//          }
//        },
// http://localhost:10666/api/games?gameId=9180&gameId=400&gameId=40930&gameId=620&gameId=11610&gameId=99900&gameId=218130&gameId=224760&gameId=252110&gameId=253690&gameId=49520&gameId=295790&gameId=224600&gameId=9900&gameId=291480&gameId=222900&gameId=316480&gameId=322330&gameId=236110
//        {
//         games: {
//           "gameUrl": "...",
//           "id": "1234",
//           "name": "QuakeLIVE!",
//           "features": ["coop", "single-player],
//           "tags": ["classic"],
//           "metascore": "90",
//           "iconUrl": "...",
//           "genres": ["action"]
//          }
//        }
// }