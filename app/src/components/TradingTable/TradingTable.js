import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';

/*
*	LastTradesPanel using responsive bootstrap components
*/
class TradingTable extends React.Component{

	constructor(props){
		super(props);
	}

	/**
	* Hits the APILayer to fetch last trades
	*/
	loadOrders(bookName){
		//Get last trades with bookname
		APILayer.getOrders(bookName,(orders) => {
			this.setState(orders);
		});
	}

	/**
	* Tick runs if the property live is set to true, this fetchs data from APILayer constantly
	*/
	tick(){
		if(this.props.book.name !== undefined){
			this.loadOrders(this.props.book.name);
		}
	}

	/**
	* Keeps track of the changing props, to load trades from the new book
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


	getAsks(){
		console.log("------------");
		console.log(this.state);
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

	getBids(){

	}



	render(){
		if(this.state == null){
			return(<p>Loading</p>);
		}
		return (
			this.getAsks()
		);
	}
}

export default TradingTable;