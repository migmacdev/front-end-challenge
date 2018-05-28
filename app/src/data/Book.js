class Book {
  	constructor(name){
  		var majorminor = name.split("_");
  		this.name = name;
		this.major = majorminor[0];
		this.minor = majorminor[1];
		console.log(name);
		console.log(this.major);
  	}
}

export default Book;