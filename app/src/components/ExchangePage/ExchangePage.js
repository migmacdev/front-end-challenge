import React from 'react';
import NavigationBar from '../NavigationBar';
import BookInfoBar from '../BookInfoBar';
import LastTradesPanel from '../LastTradesPanel';
import StocksPanel from '../StocksPanel';
import TradingTable from '../TradingTable';
import Book from '../../data/Book';
import MarketsSidePanel from '../MarketsSidePanel';
import style from './style.less';
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
			<div className = {style.componentsContainer}>
				<NavigationBar book = {this.state.currentBook} />
				<BookInfoBar onChange = {(evt) => this.onSelectionChange(evt)} />
				<div className = {style.container}>
					<div className = "row">
						<LastTradesPanel book = {this.state.currentBook} live = {true}/>
						<div className = "col-xs-8 row"> 
							<StocksPanel className = "col-xs-8 col-sm-8"></StocksPanel>
							<TradingTable className = "col-xs-8 col-sm-8" book = {this.state.currentBook} live = {true} />
						</div>
						<MarketsSidePanel/>
					</div>
				</div>
			</div>
		);
	}
}

export default ExchangePage;