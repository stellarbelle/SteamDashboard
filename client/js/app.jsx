import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title.jsx';
import Form from './form.jsx';
require('../css/styles.scss');

class App extends React.Component {
	render() {
		return <div>
			   	  <Title/>
			   	  <Form/>
			   </div>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));