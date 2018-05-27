import React from 'react';
import NavigationBar from '../NavigationBar';

/*
* ExhangePage: Compose the ExchangePage through the components
*/
class ExchangePage extends React.Component{

	constructor(props){
		super(props);
		this.state = {book: "BTC_MXN"};
	}
	render(){
		return (
			<div>
				<NavigationBar book = {this.state.book} />
			</div>
		);
	}
}

export default ExchangePage;