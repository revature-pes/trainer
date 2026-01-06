const trainer = {
	name : 'Nithin',
	tech () { 
		console.log('MERN Stack');
		return 'improving fast and better';
	}
};
trainer['address'] = {doorNum: 185, area: 'CHH'}

// Now we can access the keys of the object:
console.log('Keys of the Object are:')
for (let key in trainer) {
	console.log(key)
}

console.log('Values of the Object are:')
for (let key in trainer) {
	console.log(trainer[key])
}

console.log('Values of the Object are:')
for (let key in trainer) {
	if(typeof trainer[key] != 'function')
		console.log(trainer[key])
}

keys = Object.keys(trainer) // returns the keys of the given object.
console.log(keys)