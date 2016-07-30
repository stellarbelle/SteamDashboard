import React from 'react';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute  } from 'react-router';
// import SteamLink from './steamLink';
import Dash from './dash';

export default class App extends React.Component {
	constructor() {
		super();
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
		<div className='idInput'>
			<button type="button"><a href="http://localhost:10666/auth/?openid=http%3A%2F%2Fsteamcommunity.com%2Fopenid">Login</a></button>
		</div>
	);
};
