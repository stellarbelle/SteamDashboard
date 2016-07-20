import React from 'react';

export default class Dash extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hours: 2813,
			games: 412,
			value: 4964,
			img: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/1378588_10151919808711620_186028602_n.jpg?oh=614001a42a8d746b465a1817df2096a4&oe=5821DA59",
			name: this.props.name,
			online: false,
			profileAge: 12
		}
	}
	render() {
		return (
			<div>
				<User 
					img={this.state.img} 
					name={this.state.name}
					online={this.state.online} 
				/>
				<Created age={this.state.profileAge} />
				<Stats 
					hours={this.state.hours} games={this.state.games} value={this.state.value} 
				/>
			</div>
		)
	}
}

const Created = (props) => {
	return(
		<h1>Profile created: {props.age} years ago</h1>
	)
} 

const Online = (props) => {
	if(props.online) {
		return <h3>Online</h3>
	} else {
		return <h3>Offline</h3>
	}
}

const User = (props) => {
	console.log("props: ", props)
	console.log("online: ", Online)
	return(
		<div>
			<img src={props.img} alt="profile pic" />
			<h1>{props.name}</h1>
			<Online online={props.online} />
		</div>
	)
}

const Stats = (props) => {
	return(
		<div>
			<table>
				<thead>
					<tr>
						<th>{props.hours}</th>
						<th>{props.games}</th>
						<th>${props.value}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>hours on record</td>
						<td>games owned</td>
						<td>account value</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
} 

Dash.propTyes = {
	name: React.PropTypes.string.isRequired
}