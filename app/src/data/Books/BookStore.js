import Immutable from 'immutable';
import BitsoDispatcher from '../BitsoDispatcher';
import BookActionTypes from './BookActionTypes';
import Book from './Book';
import { EventEmitter } from 'events';

var _store = Immutable.Map();
const CHANGE_EVENT = 'change';

class AvlBooksStore extends EventEmitter {

	addChangeListener(cb) {
		this.on(CHANGE_EVENT, cb);
	}

	removeChangeListener(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	}

	getBooks() {
		return _store.valueSeq().toArray();;
	}
}


// Initialize the singleton to register with the
// dispatcher and export for React components
const BooksStore = new AvlBooksStore();

BitsoDispatcher.register((payload) => {

	switch (payload.type) {	
		case BookActionTypes.GET_BOOKS:
			for (var i in payload.data) {
  				_store = _store.set(i,payload.data[i]);
			}
			console.log(_store);
			BooksStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

export default BooksStore;