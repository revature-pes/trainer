const trainer = {
	name : 'Nithin',
	tech() { 
		console.log(this);
		return 5;
	}
};

const var1 = trainer.tech; // var1 is a reference to trainer.tech method which is a member of trainer object.
console.log(var1); // Prints: [Function: tech]
const var2 = trainer.tech(); // Calling the method and storing the return value of the method in var2
console.log(var2 + "   " + typeof(var2)); // Prints:  5  number
var1();  //PRINTS HUGE AMOUNT OF INFO, when the program is run using CLI node.  WHATS THAT???
num = var1();
console.log(num + "   " + typeof(num));