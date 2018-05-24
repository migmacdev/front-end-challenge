import React from 'react';
import APILayer from '../../data/APILayer';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

/*
*	ExhangePage, defines the structure of the page panels
*/

class BookInfoBar extends React.Component{
	
	render(){
		return (
			<div>
				<div className="page-header container">

					{
						APILayer.getBooksInfo(function(data){
							<select>
					    		console.log(data);
					    		for (var i = data.length - 1; i >= 0; i--) {
					    			data[i];
					    		}
							</select>
							})
					}
						
				</div>
			</div>
		);
	}
}

export default BookInfoBar;