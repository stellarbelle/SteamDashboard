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
		return (
            <div>
                <img src={user.img} alt="profile pic" />
                <h1>{user.name}</h1>
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



Dash.propTyes = {
	name: React.PropTypes.string.isRequired
};

