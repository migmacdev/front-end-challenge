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

	loadLastTrades(bookName){
		//Get last trades with bookname
		APILayer.getLastTrades(bookName,(trades) => {
			console.log(trades);
			this.setState({"lastTrades": trades});
		});
	}

	tick(){
		console.log("Ticking");
		console.log(this.props.book);
		if(this.props.book.name !== undefined){
			console.log("reload");
			this.loadLastTrades(this.props.book.name);
		}
	}

	componentWillReceiveProps(newProps){
		//If the props value changed
		if (newProps !== this.props){
			//if properties are defined
			if(newProps.book.major !== undefined && newProps.book.minor !== undefined ){
				this.loadLastTrades(newProps.book.name);

				if(newProps.live && this.timerId === undefined){
					console.log("INTERVAL NOT SET");
					this.setLoadInterval();
				}
			}
		}
	}

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
			<div className="bgleftpanel col-xs-4">
				<div className = "page-header">ÚLTIMOS TRADES</div>
				<table>
					<tr>
    					<th>Hora</th>
 		   				<th>{this.props.book.minor} Precio</th> 
 		   				<th>{this.props.book.major} Monto</th>
  					</tr>
  					{
  						this.state.lastTrades.map((trade, i) => 
							<tr id = {i} className = {trade.maker_side}>
						    	<td>{new Date(trade.created_at).toLocaleTimeString()}</td>
						    	<td>{trade.price}</td> 
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