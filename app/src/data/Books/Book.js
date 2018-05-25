import Immutable from 'immutable';

const Book = Immutable.Record({
	book: '',
	volume: '',
	high: '',
	low: '',
	vwap: '',
});

export default Book;