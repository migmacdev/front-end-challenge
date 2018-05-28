import React from 'react';
import NavigationBar from '../NavigationBar';
import BookInfoBar from '../BookInfoBar';

/*
* ExhangePage: Compose the ExchangePage through the components
*/
class ExchangePage extends React.Component{

	constructor(props){
		super(props);
		this.state = {currentBook: "","books": ['BTC_MXN', "ETC"]};
	}

	onSelectionChange(selectedBook){
		console.log(selectedBook);
		this.setState({"currentBook": selectedBook});
	}

	onComponentDidMount(){
		this.setState({"currentBook": "BTC_MXN"});
	}

	render(){
		return (
			<div>
				<NavigationBar book = {this.state.currentBook} />
				<BookInfoBar onChange = {(evt) => this.onSelectionChange(evt)} />
			</div>
		);
	}
}

export default ExchangePage;