import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import BookStore from '../../data/Books/BookStore';
import BookActions from '../../data/Books/BookActions';

/*
* BookInfoBar: Book information bar to show book's select, Volume, Max, Min and Variacion
*/
class BookInfoBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {books: [], currentSelection: ''};
		this._onChange = this._onChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	/**
	+ _onChange: Store's on change callback, fetchs the store data when a change occurs
	*/
	_onChange(){
		this.setState({books: BookStore.getBooks()});
	}

	/**
	* Subscribe to change event on store
	*/
	componentDidMount(){
		BookStore.addChangeListener(this._onChange);
		BookActions.getBooks();
	}

	handleChange(event){
		console.log(event.target.value);
		this.setState({currentSelection: event.target.value});
		console.log(this.state.books[event.target.value].volume);
	}


	render(){
		return (
			<div className="page-header container">
				<select onChange = {this.handleChange}>						
					{this.state.books.map((book, i) => <option value = {i} key = {i}>{book.book}</option>)}
				</select>
				<label>Volume: </label>
			</div>
		);
	}
}

export default BookInfoBar;