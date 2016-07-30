import React from 'react';

export default class Dash extends React.Component {
	constructor(props){
		super(props);
		this.state = {
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
				<Stats stats={this.state.stats} />
				<Games games={this.state.games} />
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
	return(
		<div>
			<img src={props.img} alt="profile pic" />
			<h1>{props.name}</h1>
			<Online online={props.online} />
		</div>
	)
}

const Games = (props) => {
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
}

const Stats = (props) => {
	let columns = [
		{'key': 'hours', 'title': 'hours on record'},
		{'key': 'games', 'title': 'games owned'},
		{'key': 'value', 'title': 'account value'},
	];
	return(
		<Table data={props.stats} columns={columns} />
	);
} 

const Table = (props) => {
	let tableHeaderRow = [];
	let tableDataRow = [];
	let headerData = props.data;
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
}

Dash.propTyes = {
	name: React.PropTypes.string.isRequired
}