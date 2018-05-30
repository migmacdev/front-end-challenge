import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';

/*
*	TradingTable using responsive bootstrap components
*/
class TradingTable extends React.Component{

	constructor(props){
		super(props);
	}

	/**
	* Hits the APILayer to fetch last orders
	*/
	loadOrders(bookName){
		//Get last orders with bookname
		APILayer.getOrders(bookName,(orders) => {
			this.setState(orders);
		});
	}

	/**
	* Tick runs if the property live is set to true, this fetchs data from APILayer constantly to this objects state
	*/
	tick(){
		if(this.props.book.name !== undefined){
			this.loadOrders(this.props.book.name);
		}
	}

	/**
	* Keeps track of the changing props, to load orders from the new book
	*/
	componentWillReceiveProps(newProps){
		//If the props value changed
		if (newProps !== this.props){
			//if properties are defined
			if(newProps.book.major !== undefined && newProps.book.minor !== undefined ){
				this.loadOrders(newProps.book.name);

				//If the live property is set to true the interval is initializated
				if(newProps.live && this.timerId === undefined){
					this.setLoadInterval();
				}
			}
		}
	}

	/**
	* Set an interval to run the tick function every 3000 ms
	*/
	setLoadInterval(){
		if(this.props.live){
			this.timerId = setInterval(() => this.tick(),4000);
		}
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	/**
	* retuns a table with the values extracted from this.state.asks
	*/
	getAsks(){
		return (<div className="bgleftpanel col-xs-4">
			<div className = "page-header">Ask {this.props.book.minor} POSTURAS DE VENTA</div>
			<table>
				{/*Table Heades*/}
				<tr>
					<th></th>
					<th>SUM</th>
		   				<th>{this.props.book.major} MONTO</th> 
		   				<th>{this.props.book.minor} VALOR</th>
		   				<th>{this.props.book.minor} PRECIO</th>
					</tr>
					{/*Table rows*/}
					{
						this.state.asks.map((order, i) => 
						<tr id = {i}>
							<td className = "bar"></td>
					    	<td></td>
					    	<td>{order.amount}</td>
					    	<td></td>
					    	<td>{order.price}</td>
			  			</tr>
			  		)
				}
			</table>
		</div>);
	}

	/**
	* retuns a table with the values extracted from this.state.bids
	*/
	getBids(){
		return (<div className="bgleftpanel col-xs-4">
			<div className = "page-header">POSTURAS DE COMPRA {this.props.book.minor} Bid</div>
			<table>
				{/*Table Heades*/}
				<tr>
					<th></th>
					<th>SUM</th>
		   				<th>{this.props.book.major} MONTO</th> 
		   				<th>{this.props.book.minor} VALOR</th>
		   				<th>{this.props.book.minor} PRECIO</th>
					</tr>
					{/*Table rows*/}
					{
						this.state.bids.map((order, i) => 
						<tr id = {i}>
							<td className = "bar"></td>
					    	<td></td>
					    	<td>{order.amount}</td>
					    	<td></td>
					    	<td>{order.price}</td>
			  			</tr>
			  		)
				}
			</table>
		</div>);
	}

	render(){
		if(this.state == null){
			return(<p>Loading</p>);
		}
		return (
			<div>
			{this.getBids()}
			{this.getAsks()}
			</div>
		);
	}
}

export default TradingTable;