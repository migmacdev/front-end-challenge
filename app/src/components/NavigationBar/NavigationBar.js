import React from 'react';

import brand from '../../sharedfiles/images/bitso_logo@2x.png';
import dropdown from '../../sharedfiles/images/icon_dropdown@2x.png';


/*
*	NavigationBar using responsive bootstrap components
*/
class NavigationBar extends React.Component{
	
	render(){
		return (
			<div>{this.props.book}</div>
		);
	}
}

export default NavigationBar;