import BookActionTypes from './BookActionTypes';
import BitsoDispatcher from '../BitsoDispatcher';
import APILayer from '../APILayer';

class BookActions{
	getBooks(){
		APILayer.getBooksInfo(function(data){
			console.log(data);
			BitsoDispatcher.dispatch({
			    type: BookActionTypes.GET_BOOKS,
			    data: data,
			 });
		});
	}
}

export default new BookActions();