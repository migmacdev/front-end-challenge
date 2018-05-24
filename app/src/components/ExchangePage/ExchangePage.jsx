import React from 'react';
import NavigationBar from '../NavigationBar/';
import BookInfoBar from '../BookInfoBar/';

/*
*	ExhangePage, defines the structure of the page panels
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