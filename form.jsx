import React from 'react';
import Button from './button.jsx';

class Form extends React.Component {
	render() {
		return <div>
				<input type='text' name='user' />
				<br />
				<Button/>
			   </div>
	}
}
