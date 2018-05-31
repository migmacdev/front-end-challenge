import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';
import candleIcon from '../../sharedfiles/images/icon_candles@2x.png';
import barsIcon from '../../sharedfiles/images/icon_deep@2x.png';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';


import Chart from './CandleChart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	componentDidMount() {
		getData("btc_mxn","1month",data => {
			console.log(data);
			this.setState({ data })
		});
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<Chart type={"hybrid"} width = {600} data={this.state.data} />
		)
	}
}

/*
*	LastTradesPanel using responsive bootstrap components
*/
class StocksPanel extends React.Component{

	componentDidMount() {

		/*getData().then(data => {
			console.log(data);
			this.setState({ data })
		})
		*/

		APILayer.getCandleStickData("book", "time",(data) =>{
			this.setState({ data })
		});

		/*APILayer.getCandleStickData("btc_mxn","1month",(data) => {
			console.log(".................");
			console.log(data);
			this.setState({ data })
		});*/
	}
	graphControls(){
		return(
			<ButtonToolbar>
				<DropdownButton
			      	bsSize="xsmall"
			      	title={<img src = {candleIcon}/>}
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
		if (this.state == null || this.state.data.length === 0) {
			return <div>Loading...</div>
		}

		console.log("···········-.-.-.--.-.-.3");
		console.log(this.state);
		return(<div>
			{this.graphControls()}
			<Chart type={"hybrid"} width = {600} data={this.state.data} />
			
		</div>);		
	}
}

export default StocksPanel;