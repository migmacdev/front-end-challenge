import React from 'react';
import NavigationBar from '../NavigationBar';
import BookInfoBar from '../BookInfoBar';
import LastTradesPanel from '../LastTradesPanel';
import StocksPanel from '../StocksPanel';
import Book from '../../data/Book';

/*
* ExhangePage: Compose the ExchangePage through the components
*/
class ExchangePage extends React.Component{

	constructor(props){
		super(props);
		this.state = {currentBook: {}};
	}

	onSelectionChange(selectedBook){
		var book = new Book(selectedBook);
		this.setState({"currentBook": book});
	}

	render(){
		return (
			<div>
				<NavigationBar book = {this.state.currentBook} />
				<BookInfoBar onChange = {(evt) => this.onSelectionChange(evt)} />
				<div>
					<div className = "row">
						<LastTradesPanel book = {this.state.currentBook} live = {true} className = "col-xs-2" />
						<StocksPanel className = "col-xs-8">PANEL CENTRAL</StocksPanel>
					</div>
				</div>
			</div>
		);
	}
}

export default ExchangePage;