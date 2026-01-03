const person3 = {
	talk() {
		let self1 = this;
		setTimeout( function() {
			console.log('this:', self1);	
		}, 1000);
	}
};
person3.talk();