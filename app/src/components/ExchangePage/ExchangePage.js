import React from 'react';
import NavigationBar from '../NavigationBar';
import BookInfoBar from '../BookInfoBar';
import LastTradesPanel from '../LastTradesPanel';

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
				<div className = "container">
					<div className = "row">
						<LastTradesPanel className = "col-xs-2" />
						<div className = "col-xs-8">PANEL CENTRAL</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ExchangePage;