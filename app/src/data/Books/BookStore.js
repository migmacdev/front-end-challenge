import Immutable from 'immutable';
import BitsoDispatcher from '../BitsoDispatcher';
import BookActionTypes from './BookActionTypes';
import Book from './Book';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _store = {};

class AvlBooksStore extends EventEmitter {

  addChangeListener(cb) {
  	console.log("registered");
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getBooks() {
    return _store;
  }

}


// Initialize the singleton to register with the
// dispatcher and export for React components
const BooksStore = new AvlBooksStore();

BitsoDispatcher.register((payload) => {
  	const action = payload.action;
  	switch (payload.type) {	
  		case BookActionTypes.ADD_BOOK:
  			console.log(payload);
  			_store.push(payload.data);
  			BooksStore.emit(CHANGE_EVENT);
  			break;
  		case BookActionTypes.GET_BOOKS:
  			console.log(payload);
  			_store =payload.data;
  			BooksStore.emit(CHANGE_EVENT);
  			break;
	  	default:
	    	return true;
  	}
});

export default BooksStore;

/*
class AvlBooksStore extends EventEmitter {

	
	dispatcherCallback(action, data) {
        switch (action.type) {
            case BookTypes.GET_BOOKS:
                this.emit(CHANGE_EVENT,data);
                break;
        }
        return true;
    }

	/*reduce(state, action){
		switch(action.type){
			case BookTypes.GET_BOOKS:
				action.data.map((book) =>
					{
						console.log(book);
						var bk = new Book({
							book: book.book,
							volume: book.volume,
							high: book.high,
							low: book.low,
							vwap: book.vwap,
						});

						state = state.set(bk.book, bk);
						return state;
					}
				);
				return state;
	
			default:
				return state;
		}
	}
}
*/
