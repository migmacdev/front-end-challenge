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

			//Call parent function with initial value
			if(this.props.onChange){
				this.props.onChange(books[0]);
			}
			
			//Populate this view required data(max, min, volumen, etc)
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
		
		//Get data for this componets fields
		APILayer.getBookData(selectedBook, (book) => {
			this.setState({"loadedBook": book});
		});

		//Execute callback in parent
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
			<div className="page-header container"  className = {style.infobar}>
				<select onChange = {(evt) => this.handleChange(evt)}>						
					{this.state.booksList.map((book, i) => 
						<option className = {style.item} value = {book} key = {i}>{book}</option>)
					}
				</select>
				<div className = {style.couple}>
					<label className= {style.darktext}>Volume:  </label>
					<label className= {style.lighttext}>{this.state.loadedBook.volume}</label>
				</div>
				<div className = {style.couple}>
					<label className= {style.darktext}>Max:  </label>
					<label className= {style.lighttext}>{this.state.loadedBook.high}</label>
				</div>
				<div className = {style.couple}>
					<label className= {style.darktext}>Min:  </label>
					<label className= {style.lighttext}>{this.state.loadedBook.low}</label>
				</div>
				<div className = {style.couple}>
					<label className= {style.darktext}>Variación:  </label>
					<label className= {style.lighttext}>{this.state.loadedBook.vwap}</label>
				</div>
			</div>
		);
	}
}

export default BookInfoBar;