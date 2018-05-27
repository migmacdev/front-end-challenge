import React from 'react';
import ReactDOM from 'react-dom';
import test from './test.less';

class App extends React.Component{
	render(){
		console.log(test);
		return (
			<div className = {test.header}>Hello Appsss</div>
		);
	}
}

export default App;