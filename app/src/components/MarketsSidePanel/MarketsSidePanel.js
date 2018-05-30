import React from 'react';
import APILayer from '../../data/APILayer';
import style from './style.less';
import MarketChartItem from './MarketChartItem';
import Dock from 'react-dock';

class MarketsSidePanel extends React.Component{

	constructor(props){
		super(props);
		this.state = {isVisible: false, open: []}
		this.toggleDock = this.toggleDock.bind(this);
	}

	componentDidMount(){
		APILayer.getBooksListAndValue((booksList) => {
			this.setState({booksList});
		});
	}

	toggleDock(){
		this.setState({ isVisible: !this.state.isVisible })
	}

	render(){
		if(this.state.booksList === undefined){
			return(<p>Loading</p>);
		}
		return(
			<div>
				<div>
					<button className= {style.right} onClick = {() => this.toggleDock()}>Click me</button>
				</div>
				<Dock position='right' fluid = {true} dimMode = 'none' isVisible={this.state.isVisible}>
					<ul>
						{
							this.state.booksList.map((book, i) => 
								<MarketChartItem book = {book} />
							)
						}
					</ul>
				</Dock>
			</div>
		);
	}
}

export default MarketsSidePanel;