import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import brand from '../../sharedfiles/images/bitso_logo@2x.png';


class ExchangePage extends React.Component{
	
	render(){
		return (
			<Navbar>
  			<Navbar.Header>
			    <Navbar.Brand>
			      	<img src = {brand}/>
			    </Navbar.Brand>
			  	</Navbar.Header>
			  	<Nav>
			    	<Navbar.Text>
			      		|
			    	</Navbar.Text>
			     	<Navbar.Text>
			      		EXCHANGE
			    	</Navbar.Text>
				</Nav>
				<Nav pullRight>
			    	<NavItem eventKey={1} href="#" >
			      		1 BTC  = 000,000 MXN
			    	</NavItem>
			    	<NavItem eventKey={1} href="#" >
			    		|
			    	</NavItem>
			    	<NavItem eventKey={1} href="#" >
			    		Wallet
			    	</NavItem>
			    	<NavItem eventKey={1} href="#" >
			    		Exchange
			    	</NavItem>
			    	<NavItem eventKey={1} href="#" >
			    		Ayuda
			    	</NavItem>
			    	<NavItem eventKey={1} href="#" >
			    		Usuario
			    	</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

export default ExchangePage;