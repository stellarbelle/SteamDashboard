import React from 'react';
import { connect } from 'react-redux';
import { getGameInfo, filterFeatures } from '../actions/index';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class Dash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            features: []
        };
    }

    componentDidMount() {
        var gameIds = this.props.user.gameIds;
        this.props.dispatch(getGameInfo(gameIds));
    }


    loadGames() {
        console.log("props: ", this.props);
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

    checklistFilters() {
        return (
            <div>
                <CheckboxGroup
                    name="features"
                    value={this.state.features}
                    onChange={this.featuresChanged.bind(this)}>

                    <label><Checkbox value="co-op"/> co-op</label>
                    <label><Checkbox value="Single-player"/> Single-player</label>
                    <label><Checkbox value="Multi-player"/> Multi-player</label>
                </CheckboxGroup>
            </div>
        )
    }

    featuresChanged(selectedFeatures) {
        this.props.dispatch(filterFeatures(selectedFeatures));
        this.setState({
            features: selectedFeatures
        });
    }

    friendsList() {
        var friends = this.props.user.friends;
        return friends.map((friend, index) => <Friend key={index} friend={friend} />);
    }

    render() {
        return (
            <div>
                <img src={this.props.user.img} alt="profile pic" />
                <h1>{this.props.user.name}</h1>
                {this.checklistFilters()}
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
    let games;
    let features;
    if(!state.currentGamesData.games) {
        games = [];
    } else {
        games = state.currentGamesData.games.results;
    }
    if (!state.filteredData.featureFilters) {
        features = [];
    } else {
        features = state.filteredData.featureFilters;
    }
    return {
        features,
        games,
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
