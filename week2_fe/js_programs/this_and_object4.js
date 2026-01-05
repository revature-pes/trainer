const person4 = {
	talk() {
		setTimeout(() => {
			console.log('this:', this);	
		}, 1000);
	}
};
person4.talk();