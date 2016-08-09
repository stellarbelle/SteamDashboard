import React from 'react';
import { connect } from 'react-redux';
import { getGameInfo } from '../actions/index';

class Dash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var gameIds = this.props.user.gameIds;
        this.props.dispatch(getGameInfo(gameIds));
    }


    loadGames() {
        console.log("games: ", this.props.games);
        var games = this.props.games;
        if (games){
            var allGames = this.props.games;
            var gamesList = allGames.map((game, index) => {
                if(game.isValid) {
                    return <Game key={index} game={game}/>
                }
            });
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Genres</th>
                            <th>Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gamesList}
                    </tbody>
                </table>
            )
        }
    }


    friendsList() {
        var friends = this.props.user.friends;
        return friends.map((friend, index) => <Friend key={index} friend={friend} />);
    }

    render() {
        console.log("user: ", this.props.user);
        return (
            <div>
                <img src={this.props.user.img} alt="profile pic" />
                <h1>{this.props.user.name}</h1>
                <h3>Games: </h3>
                {this.loadGames()}
                <h3>Friends: </h3>
                {this.friendsList()}
            </div>
        )
    }

}

const Game = (props) => {
    var genresList = props.game.genres.join(', ');
    var featuresList = props.game.features.join(', ');
    return(
        <tr className="game">
            <td><img src={props.game.iconUrl}/></td>
            <td>{genresList}</td>
            <td>{featuresList}</td>
            <td><button><a  href={props.game.gameUrl}>Play!</a></button></td>
        </tr>
    )
};

const Friend = (props) => {
    return(
        <div>
            <p>{props.friend.name}</p>
        </div>
    )
};


const mapStateToProps = (state) => {
    console.log("state: ", state);
    let games;
    if(!state.currentGamesData.games) {
        games = [];
    } else {
        games = state.currentGamesData.games.results;
    }
    return {
        games: games,
        user: state.currentUserData.user
    }
};

const ConnectedDash = connect(
    mapStateToProps
)(Dash);

Dash.propTyes = {
	name: React.PropTypes.string.isRequired
};

export default ConnectedDash;
