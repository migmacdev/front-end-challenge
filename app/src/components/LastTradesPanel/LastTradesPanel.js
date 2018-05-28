import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';

/*
*	LastTradesPanel using responsive bootstrap components
*/
class LastTradesPanel extends React.Component{

	constructor(props){
		super(props);
		this.state={lastTrades: {}};
	}

	componentWillReceiveProps(newProps){
		//If the props value changed
		if (newProps !== this.props){
			//if properties are defined
			if(newProps.book.major !== undefined && newProps.book.minor !== undefined ){
				//Get last trades with bookname
				var bookName = newProps.book.name;
				APILayer.getLastTrades(bookName,(trades) => {
					this.setState({"lastTrades": trades});
				});
			}
		}
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
				</table>
			</div>
		);
	}
}

export default LastTradesPanel;