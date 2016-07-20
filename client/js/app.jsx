import React from 'react';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute  } from 'react-router';
import Form from './form.jsx';
import Dash from './dash.jsx';

export default class App extends React.Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path='/' component={Home}>
					<IndexRoute component={LogIn}></IndexRoute>
					<Route path="about/:user" component={About}></Route>
				</Route>
			</Router>
		)
	}
}

const Title = () => {
	return (
		<h1><span className='highlight'>Steam</span>Hunt</h1>
	);
}

const Home = (props) => <div><Title />{props.children}</div>
const LogIn = () => <div><Form /></div>
const About = (props) => <div><Dash name={props.params.user} /></div>
