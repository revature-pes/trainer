const trainer = {
	name : 'Nithin',
	tech1() {  // ES6 Syntax to define a Method
		console.log("AIML JavaFS Trainer")
	},
	tech2() { 
		console.log("C++ MERN Trainer")
	}
}
function func(param1, param2, param3) {
	trainer.tech1(); // Call to the method tech1()
	trainer['name'] = 'Nithin Belamkar' // name of the trainer object modified. Note how we HARD-CODED the field of trainer. This is same as trainer.name = 'Nithin Belamkar'
	trainer[param1]();
	console.log(trainer.name);
	trainer[param2.value] = param3; // Doesn't change/modify trainer.name
	console.log(trainer.name);
	trainer[param2] = param3; // Here the name is modified
	console.log(trainer.name); // 'Nithin Neelakanta Rao'
	console.log(param2.value); // undefined
	console.log(param2); // Prints 'name' which is the value of the variable 'param2'
}

func('tech2', 'name', 'Nithin Neelakanta Rao');