import React from 'react';
//import APILayer from '../../data/APILayer';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import BookStore from '../../data/Books/BookStore';
import BookActions from '../../data/Books/BookActions';
/*
*	ExhangePage, defines the structure of the page panels
*/
class BookInfoBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {books: []};
		this._onChange = this._onChange.bind(this);
	}

	_onChange(){
		console.log("READY");
		this.setState({books: BookStore.getBooks()});
		console.log(this.state.books);
	}
	//Fetch books data
	componentDidMount(){
		BookStore.addChangeListener(this._onChange);
		BookActions.getBooks();
		/*APILayer.getBooksInfo((data) => {
			this.setState({books: data});	
		});*/
	}

	//Render books dropdown
	render(){
		return (
			<div className="page-header container">
				<select>						
					{this.state.books.map((book, i) => <option key = {i}>{book.book}</option>)}
				</select>

			</div>
		);
	}
}

export default BookInfoBar;