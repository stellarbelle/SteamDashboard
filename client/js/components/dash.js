import React from 'react';
import { connect } from 'react-redux';

export default class Dash extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		var user = this.props;
		console.log("user1: ", user, "name: ", user.name);
		// console.log("name: ", this.props.name);
		for (var i=0; i<user.length; i++) {

		}
		return (
			<div>
				<User 
					img={user.img}
					name={user.name}
					online={user.online}
				/>
				<Stats stats={user.stats} />
				<Games games={user.games} />
			</div>
		)
	}
}

// const Created = (props) => {
// 	return(
// 		<h1>Profile created: {props.age} years ago</h1>
// 	)
// };
//
// const mapStateToCreatedProps = function(state) {
// 	return {
// 		age: state.user.age
// 	};
// };
//
// const ConnectedCreated = connect(mapStateToCreatedProps)(Created);

const Online = (props) => {
	if(props.online) {
		return <h3>Online</h3>
	} else {
		return <h3>Offline</h3>
	}
}

const User = (props) => {
	return(
		<div>
			<img src={props.img} alt="profile pic" />
			<h1>{props.name}</h1>
			<Online online={props.online} />
		</div>
	)
}

const Games = (props) => {
	console.log("games: ", props.games);
	let gameRows = [];
	let games = props.games;
	for(var index in games) {
		var game = games[index]
		gameRows.push(
						<tr>
							<td><img src={game.img} alt="game image" /></td>
							<td>{game.name}</td>
							<td>{game.timePlayed}</td>
							<td>{game.platforms}</td>
							<td>{game.features}</td>
							<td>{game.metascore}</td>
						</tr>
					)
	}
	return(
		<div>
			<table>
				<thead>
					<tr>
						<th>Filter</th>
						<th>Name</th>
						<th>Time Played</th>
						<th>Platforms</th>
						<th>Features</th>
						<th>Metascore</th>
					</tr>
				</thead>
				<tbody>
					{gameRows}
				</tbody>
			</table>
		</div>
	);
};

const Table = (props) => {
	let tableHeaderRow = [];
	let tableDataRow = [];
	let headerData = props.stats;
	let columns = props.columns;
	var count = 0;
	for (var item in columns) {
		count++;
		var column = columns[item];
		var key = column["key"];
		tableHeaderRow.push(<th key={count}>{headerData[key]}</th>)
		tableDataRow.push(<td key={count}>{column["title"]}</td>)
	}
	return(
		<div>
			<table>
				<thead>
					<tr>
						{tableHeaderRow}
					</tr>
				</thead>
				<tbody>
					<tr>
						{tableDataRow}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

Dash.propTyes = {
	name: React.PropTypes.string.isRequired
};

const Stats = (props) => {
	console.log("state props: ", props);
	let columns = [
		{'key': 'hours', 'title': 'hours on record'},
		{'key': 'games', 'title': 'games owned'},
		{'key': 'value', 'title': 'account value'},
	];
	return(
		<Table stats={props.stats} columns={columns} />
	);
};