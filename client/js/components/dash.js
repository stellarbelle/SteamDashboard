import React from 'react';
import { connect } from 'react-redux';
import { getGameInfo } from '../actions/index';

class Dash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var games = this.props.user.gameIds;
        var gamesUrl = '';
        for (var i = 0; i < games.length; i++) {
            if(i < games.length -1) {
                gamesUrl += 'gameId=' + games[i] + '&';
            } else {
                gamesUrl += 'gameId=' + games[i];
            }
        }
        this.props.dispatch(getGameInfo(gamesUrl));
    }

    gamesList() {
        var gamesList = [];
        var games = this.props.games.games.results;
        for (var i in games) {
            console.log("game: ", games[i]);
            // friendsList.push(<Game key={j} friend={friends[j]} />);
        }
        return <p>Games!!!</p>

    }

    loadGames() {
        console.log("games: ", this.props.games.games);
        var games = this.props.games.games;
        if (games!= undefined){
            return (
                <div>
                    {this.gamesList()}
                </div>
            )
        }
    }


    friendsList() {
        var friendsList = [];
        var friends = this.props.user.friends;
        for (var j in friends) {
            friendsList.push(<Friend key={j} friend={friends[j]} />);
        }
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

};

const Game = (props) => {
    return(
        <div>
            <p>{props.game}</p>
        </div>
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
    return {
        games: state.currentGamesData,
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