import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import style from './style.less'
import APILayer from '../../data/APILayer';

/*
* BookInfoBar: Book information bar to show book's select, Volume, Max, Min and Variacion
*/
class BookInfoBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {"booksList": [], "loadedBook": {}};
	}

	/**
	* Fetch the data to load into the select dropdown, and displays the dafault values
	*/
	componentDidMount(){
		APILayer.getBooksList((books) => {
			this.setState({"booksList": books});
			APILayer.getBookData(books[0], (book) => {
				this.setState({"loadedBook": book});
			});
		});
	}

	/*
	* Handles Select box change, fetchs selected book data
	* and make the callback to function in parent if exists
	*/
	handleChange(evt){
		var selectedBook = evt.target.value;
		
		APILayer.getBookData(selectedBook, (book) => {
			this.setState({"loadedBook": book});
		});

		if(this.props.onChange){
			this.props.onChange(selectedBook);
		}
	}

	/**
	* Populates the select box with the booksList from state
	* Delegates the change callback to the parent component, sending the selected value
	*/
	render(){
		return (
			<div className="page-header container" className = {style.infobar}>
				<select onChange = {(evt) => this.handleChange(evt)}>						
					{this.state.booksList.map((book, i) => 
						<option className = {style.item} value = {book} key = {i}>{book}</option>)
					}
				</select>
				<label>Volume:  </label>
				<label>{this.state.loadedBook.volume}</label>

				<label>Max:  </label>
				<label>{this.state.loadedBook.high}</label>

				<label>Min:  </label>
				<label>{this.state.loadedBook.low}</label>

				<label>Variación:  </label>
				<label>{this.state.loadedBook.vwap}</label>
			</div>
		);
	}
}

export default BookInfoBar;