import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';
import {Panel, Button} from 'react-bootstrap';
import {LineChart, Line} from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
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
				<Button onClick={() =>{this.onPanelClick()}
				}>
					<div>
						<h4>{this.props.book.book}</h4>
						<h6>{this.props.book.change}</h6>
						<h4>{this.props.book.value}</h4>
					</div>
		        </Button>
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