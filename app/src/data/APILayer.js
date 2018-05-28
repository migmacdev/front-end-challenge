/*
* This class handles the communication between the API and the components requests
* by setting callbacks the data can be managed before sent to populate components
* This allows the app to change the source of the data without messing around with the components
*/

const availableBooksUrl = 'https://api.bitso.com/v3/available_books/';
const booksInfo = {
	"btc_mxn" : {"high":"149500.00","last":"148000.04","created_at":"2018-05-26T15:19:22+00:00","book":"btc_mxn","volume":"78.03237765","vwap":"145818.25005458","low":"145003.01","ask":"148497.19","bid":"148000.00"},
	"eth_mxn" : {"high":"11800.00","last":"11759.91","created_at":"2018-05-26T15:20:14+00:00","book":"eth_mxn","volume":"265.84921184","vwap":"11453.69951708","low":"11326.01","ask":"11759.91","bid":"11560.34"},
	"xrp_btc": {"high":"0.00008240","last":"0.00008185","created_at":"2018-05-26T15:21:06+00:00","book":"xrp_btc","volume":"12057.78073995","vwap":"0.00008086","low":"0.00008126","ask":"0.00008240","bid":"0.00008198"},
	"xrp_mxn": {"high":"12.23","last":"12.14","created_at":"2018-05-26T15:41:47+00:00","book":"xrp_mxn","volume":"391345.26764208","vwap":"11.86975402","low":"11.82","ask":"12.14","bid":"12.10"},
	"eth_btc": {"high":"0.08099898","last":"0.07924900","created_at":"2018-05-26T15:40:55+00:00","book":"eth_btc","volume":"21.92073108","vwap":"0.07852102","low":"0.07850000","ask":"0.08025600","bid":"0.07886509"},
	"bch_btc": {"high":"0.13599998","last":"0.13599922","created_at":"2018-05-26T15:42:54+00:00","book":"bch_btc","volume":"31.67259170","vwap":"0.13332992","low":"0.13215000","ask":"0.13599873","bid":"0.13509956"},
	"ltc_btc": {"high":"0.01619960","last":"0.01619960","created_at":"2018-05-26T15:43:35+00:00","book":"ltc_btc","volume":"35.41290873","vwap":"0.01596680","low":"0.01596300","ask":"0.01619960","bid":"0.01600000"},
	"ltc_mxn": {"high":"2415.00","last":"2375.00","created_at":"2018-05-26T15:44:14+00:00","book":"ltc_mxn","volume":"417.84998760","vwap":"2346.83732373","low":"2325.94","ask":"2414.97","bid":"2375.00"},
	"bch_mxn": {"high":"20000.00","last":"19800.00","created_at":"2018-05-26T15:44:41+00:00","book":"bch_mxn","volume":"180.18019162","vwap":"19097.38378095","low":"19000.00","ask":"19999.99","bid":"19900.00"}
};

function getFormattedData(data){
	var books = [];
	console.log(data);
	data.forEach((book) => {
		books.push({
			name: book.book, 
			volume: booksInfo[book.book]["volume"],
			high: booksInfo[book.book]["high"],
			low: booksInfo[book.book]["low"],
			vmap: booksInfo[book.book]["vwap"]
		});
	});
	return books;
}


class APILayer {

	static getBooksInfo(callback){
		console.log("Ask for data");
		//Fetch data from specified url and send the result to the received callback
		fetch(availableBooksUrl)
			.then((resp) => resp.json()) // Transform the data into json
		  	.then(function(data) {
		  		console.log("data getted");
			    callback(getFormattedData(data.payload));
		    })
		    .catch(function(error) {
        		console.log("error: " + error);
    		}
		);
	}
	static getBookData(book, callback){
		console.log("Ask for book");
		console.log(booksInfo[book]);
		//Fetch data from specified url and send the result to the received callback
		callback(booksInfo[book]);
	}

	static getBooksList(callback){
		fetch(availableBooksUrl)
			.then((resp) => resp.json()) // Transform the data into json
		  	.then(function(data) {
			    callback(data.payload.map(a => a.book));
		    })
		    .catch(function(error) {
        		console.log("error: " + error);
    		}
		);
	}
}

export default APILayer;