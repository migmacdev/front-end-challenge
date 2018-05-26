import React from 'react';
import NavigationBar from '../NavigationBar';
import BookInfoBar from '../BookInfoBar';

/*
* ExhangePage: Compose the ExchangePage through the components
*/
class ExchangePage extends React.Component{

	render(){
		return (
			<div>
				<NavigationBar />
				<BookInfoBar />
			</div>
		);
	}
}

export default ExchangePage;