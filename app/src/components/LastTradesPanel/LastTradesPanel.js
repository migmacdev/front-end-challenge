import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';

/*
*	LastTradesPanel using responsive bootstrap components
*/
class LastTradesPanel extends React.Component{

	constructor(props){
		super(props);
		this.state={lastTrades: []};
	}

	/**
	* Hits the APILayer to fetch last trades
	*/
	loadLastTrades(bookName){
		//Get last trades with bookname
		APILayer.getLastTrades(bookName,(trades) => {
			this.setState({"lastTrades": trades});
		});
	}

	/**
	* Tick runs if the property live is set to true, this fetchs data from APILayer constantly
	*/
	tick(){
		if(this.props.book.name !== undefined){
			this.loadLastTrades(this.props.book.name);
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
				this.loadLastTrades(newProps.book.name);

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
			this.timerId = setInterval(() => this.tick(),3000);
		}
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render(){
		return (
			<div className={`col-xs-3 col-sm-3 ${style.panel}`}>
				<div className = {style.pageheader}>ÚLTIMOS TRADES</div>
				<table className = {style.tablecontainer}>
					{/*Table Heades*/}
					<tr className = {style.tablecontainer}>
    					<th>Hora</th>
 		   				<th>{this.props.book.minor} Precio</th> 
 		   				<th>{this.props.book.major} Monto</th>
  					</tr>
  					{/*Table rows*/}
  					{
  						this.state.lastTrades.map((trade, i) => 
							<tr className = {style.tablerow} id = {i}>
						    	<td>{new Date(trade.created_at).toLocaleTimeString()}</td>
						    	<td className = {style[trade.maker_side]}>{trade.price}</td> 
						    	<td>{trade.amount}</td>
				  			</tr>
				  		)
					}
				</table>
			</div>
		);
	}
}

export default LastTradesPanel;