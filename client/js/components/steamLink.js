// import React from 'react';
// import { Link, withRouter } from 'react-router';
//
//
// const steamRedirect = (name) => {
// 	var nameEQ = name + "=";
// 	var ca = document.cookie.split(';');
// 	for(var i=0;i < ca.length;i++) {
// 		var c = ca[i];
// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
// 	}
// 	return null;
// };
//
// const steamLink = () => {
// 	return (<div className='idInput'>
// 		<button type="button" onClick={this.steamRedirect('profile_id')}><a href="http://localhost:10666/auth/?openid=http%3A%2F%2Fsteamcommunity.com%2Fopenid">Login</a></button>
// 	</div>);
// };
//
// export default withRouter(steamLink);