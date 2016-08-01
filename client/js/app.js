import React from 'react';
import Request from 'superagent';
import { userRequest } from './actions';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute  } from 'react-router';
// import SteamLink from './steamLink';
import Dash from './dash';

require('../css/styles.scss');

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profile_id: ""
		}
	}

	getProfileId(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1,c.length);
			}
			if (c.indexOf(nameEQ) == 0) {
				console.log("profile id: ", c.substring(nameEQ.length,c.length));
				var id = c.substring(nameEQ.length,c.length);
				this.setState({
					profile_id: id
				})
			}
		}
		return null;
	};

	componentWillMount() {
		console.log("component will mount");
		this.getProfileId('profile_id');
	}

	_renderProfile() {
		console.log("render profile");
		if (this.state.profile_id) {
			// var url = "http://www.omdbapi.com/?i=tt0944947&Season=1";
			var url ='http://localhost:10666/api/gamers?gamerId=' + this.state.profile_id;
			Request.get(url).then((response) => {
				console.log("response: ", response);
				console.log("store: ", this.props);
				// this.props.store.dispatch({type: "RECEIVED_USER_INFO", user: response});
			});
			return (
				<Dash />
			);
		} else {
			return (
				<SteamLink />
			);
		}
	}

	render() {
		return (
			<div>
				<Title />
				{this._renderProfile()}
			</div>
		)
	}
}


const Title = () => {
	return (
		<h1><span className='highlight'>Steam</span>Hunt</h1>
	);
};

const SteamLink = () => {
	return (
		<form className="idInput" method="get" action="/auth/">
			<input type="hidden" name="openid" value="http://steamcommunity.com/openid" />
			<input type="submit" value="Login" />
		</form>
	);
};
