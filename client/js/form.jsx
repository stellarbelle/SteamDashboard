import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			error: false,
			renderUser: false
		};
	}

	inputUserName(e) {
		console.log(e.target.value);
		this.setState({
			user: e.target.value
		});
		console.log("user: ", this.state.user);
	}

	getIdData() {
		console.log("user: ", this.state.user);
		if (this.state.error == true) {
			this.setState ({
				error: false
			});
		};
		if (!this.state.user) {
			this.setState ({
				error: true
			});
			console.log("error");
		} else {
			this.setState({
				renderUser: true
			});
		}
	}

	_renderError() {
		if(this.state.error) {
			return(
				<div>
					<p>Please Enter a Valid Username</p>
				</div>
			)
		} else {
			return null;
		}
	}

	_renderUser() {
		if(this.state.renderUser) {
			return(
				<div>
					<h3>Welcome, {this.state.user}!</h3>
				</div>
			)
		} else {
			return null;
		}
	}

	render() {
		return (<div className='idInput'>
				  <input type='text' name='user' onChange={this.inputUserName.bind(this)} placeholder='Profile URL/Steam ID/Community ID'/>
				  <button type="button" onClick={this.getIdData.bind(this)} >Search</button>
				  {this._renderError()}
				  {this._renderUser()}
			    </div>);
	}
}