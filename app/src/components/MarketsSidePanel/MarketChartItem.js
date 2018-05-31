import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';
import {Panel, Button} from 'react-bootstrap';
import {LineChart, Line} from 'recharts';

const data = [
      {name: 'Page A', pv: 1000},
      {name: 'Page B', pv: 5000},
      {name: 'Page C', pv: 1500},
      {name: 'Page D', pv: 2000},
      {name: 'Page E', pv: 4000},
      {name: 'Page F', pv: 10000},
      {name: 'Page G', pv: 400},
];


class MarketChartItem extends React.Component{

	constructor(props){
		super(props);
		this.state = {open: false};
		this.onPanelClick = this.onPanelClick.bind(this);
		this.getChart = this.getChart.bind(this);
	}

	onPanelClick(){
	    // update state
	    console.log("panel click");
	    this.setState(
	        {open: !this.state.open}
	    );
	}

	getChart(){
		return (
			<div>
				<LineChart width={300} height={100} data={data}>
					<Line type='monotone' dataKey='pv' stroke='#00ff00' strokeWidth={2} />
				</LineChart>
			</div>
		);
	}

	render(){
		return(
			<li key = {this.props.book.book}>
				<div onClick={() =>{this.onPanelClick()}
				}>
					<div>
						<h6>{this.props.book.book}</h6>
						<h6>{this.props.book.change}</h6>
						<h6>{this.props.book.value}</h6>
					</div>
		        </div>
		        <br />
		        <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
					<Panel.Collapse>
						<Panel.Body>		
							{this.getChart()}		
						</Panel.Body>
						</Panel.Collapse>
		        </Panel>
			</li>
		);
	}

}

export default MarketChartItem;