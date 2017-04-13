import React from 'react';
import {render} from 'react-dom';

class HelloMessage extends React.Component{
  render(){
		return (
			//<div>Hello {this.props.name}</div>);
			<p> Hello React!</p>
			);
	}
}
	
render(<HelloMessage  />, document.getElementById('react-app'));
