import React from 'react';
import brand from '../../sharedfiles/images/bitso_logo@2x.png';
import dropdown from '../../sharedfiles/images/icon_dropdown@2x.png';
import style from './style.less';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

/*
*	NavigationBar using responsive bootstrap components
*/
class NavigationBar extends React.Component{
	
	render(){
		return (
			<Navbar className = {style.bgnavy} collapseOnSelect >
				{/*Nav Brand*/}
	  			<Navbar.Header>
				    <Navbar.Brand>
				      	<img src = {brand}/>
				    </Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>

				{/*NavItems*/}
				<Navbar.Collapse>
				  	<Nav pullLeft>
				     	<Navbar.Text>
				      		EXCHANGE
				    	</Navbar.Text>
					</Nav>
					<Nav pullRight>
				    	<NavItem eventKey={1} href="#" >
				      		1 BTC  = 000,000 MXN
				    	</NavItem>
				    	<NavItem eventKey={1} href="#" >
				    		Wallet   <img src = {dropdown}/>
				    	</NavItem>
				    	<NavItem eventKey={1} href="#" >
				    		Exchange <img src = {dropdown}/>
				    	</NavItem>
				    </Nav>
			    	<Nav pullRight>
				    	<NavItem eventKey={1} href="#" >
				    		Ayuda
				    	</NavItem>
				    	<NavItem eventKey={1} href="#" >
				    		Usuario
				    	</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar;