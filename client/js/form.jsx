import React from 'react';
import { Link, withRouter } from 'react-router';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			error: false,
			renderUser: false,
		};
		this.getIdData = this.getIdData.bind(this);
		this.inputUserName = this.inputUserName.bind(this);
	}

	inputUserName(e) {
		this.setState({
			user: e.target.value
		});
	}

	getIdData() {
		const user = this.refs.myInput.value;
		this.props.router.replace('/about/' + user);
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

	render() {
		return (<div className='idInput'>
				  <input type='text' name='user' onChange={this.inputUserName} placeholder='Profile URL/Steam ID/Community ID'
				  ref="myInput" />
				  <button type="button" onClick={this.getIdData} >Search</button>
				  {this._renderError()}
			    </div>);
	}
}

export default withRouter(Form);