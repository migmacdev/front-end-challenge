import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';
import candleIcon from '../../sharedfiles/images/icon_candles.png';
import barsIcon from '../../sharedfiles/images/icon_deep.png';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import CandleChart from './CandleChart';
/*
*	LastTradesPanel using responsive bootstrap components
*/
class StocksPanel extends React.Component{

	constructor(props){
		super(props);
		this.state = {btnIcon : candleIcon};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		APILayer.getCandleStickData("book", "time",(data) =>{
			this.setState({ data })
		});
	}

	handleChange(evt) {
		console.log(evt);
    	this.setState({btnIcon: barsIcon});  
	}

	graphControls(){
		return(
			<ButtonToolbar>
				<DropdownButton
					onSelect={() => { this.handleChange(evt)}}
			      	bsSize="xsmall"
			      	title={<img src = {this.state.btnIcon}/>}
			      	id="dropdown-size-extra-small">
					<MenuItem eventKey="1"><img src = {candleIcon}/></MenuItem>
					<MenuItem eventKey="2"><img src = {barsIcon} /></MenuItem>
				</DropdownButton>
				<label>Periodo</label>
				<DropdownButton
			      	bsSize="xsmall"
			      	title="1 m"
			      	id="dropdown-size-extra-small">
					<MenuItem eventKey="1">3 m</MenuItem>
					<MenuItem eventKey="2">1 a</MenuItem>
				</DropdownButton>
				<label>Intervalo</label>
				<DropdownButton
			      	bsSize="xsmall"
			      	title="1 mes"
			      	id="dropdown-size-extra-small">
					<MenuItem eventKey="1">1 h</MenuItem>
					<MenuItem eventKey="2">1 d</MenuItem>
					<MenuItem eventKey="2">15 d</MenuItem>
				</DropdownButton>
				<Button>-</Button>
				<Button>+</Button>
			</ButtonToolbar>
		);
	}


	render(){
		if (this.state == null || this.state.data === undefined ||  this.state.data.length === 0 ) {
			return <div>Loading...</div>
		}

		console.log("···········-.-.-.--.-.-.3");
		console.log(this.state);
		return(<div>
			{this.graphControls()}
			<CandleChart />
					
		</div>);		
	}
}

export default StocksPanel;