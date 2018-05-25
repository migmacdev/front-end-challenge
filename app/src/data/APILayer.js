
/*
* This class handles the communication between the API and the components requests
* by setting callbacks the data can be managed before sent to populate components
* This allows the app to change the source of the data without messing around with the components
*/

const availableBooksUrl = 'https://api.bitso.com/v3/available_books/';

class APILayer {

	static getBooksInfo(callback){
		
		fetch(availableBooksUrl)
			.then((resp) => resp.json()) // Transform the data into json
		  	.then(function(data) {
			    callback(data.payload);
		    })
		    .catch(function(error) {
        		console.log("error: " + error);
    		}
		);

	}
}

export default APILayer;