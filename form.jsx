import React from 'react';
import {Button} from './button.jsx';

export default class Form extends React.Component {
	render() {
		return (<div>
				  <input type='text' name='user' placeholder='Profile URL/Steam ID/Community ID'/>
				  <Button/>
			    </div>);
	}
}