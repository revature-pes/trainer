const trainer = {
	name : 'Nithin',
	tech1() { 
		console.log(this.name);
	}
};
// this is reference to the current object
trainer.tech1(); // Calls the function and Prints Nithin
trainer.name = 'Belamkar' // changes the name
trainer.tech1(); // Prints Belamkar, bcoz name is changed.