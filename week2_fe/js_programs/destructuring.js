const address = {
	doorNum : 125,
	area : 'shivajinagar',
	city : 'Mysuru',
	state : 'Karnataka',
	pin : 570014
};

const {street, city, country, pin} = address;
try {
    console.log(state);  // ReferenceError
}
catch(ReferenceError) {
    console.log('state does not exist');     
}
console.log(street); // undefined
console.log(city);   // Mysuru
console.log(pin);    // 570014
