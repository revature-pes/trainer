const person2 = {
	talk() {
		setTimeout( function() { // callback function
			console.log('this:', this);	
		}, 1000);
	}
};
person2.talk();