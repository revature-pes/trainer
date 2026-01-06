function Circle(radius) { // constructor Function
	this.radius = radius;
	this.draw = function() {
		console.log(`Circle was drawn of radius ${this.radius}`);
	}
}
const circle1 = new Circle(2); // createing object out of the cons function.
circle1.draw() // calling the metjod via the object

const Square = new Function('side', `
	this.side = side;
	this.draw = function() {
		console.log('Square of side ${this.side} is drawn')
        console.log(this)
	}
`);
const square1 = new Square(15)
square1.draw()
console.log(square1.side)
console.log(circle1)  // print the object circle1
console.log(square1) // print the object square