import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import Profile from './profile';


export const store = createStore(
    rootReducer,
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