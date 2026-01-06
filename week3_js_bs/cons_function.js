function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		// some code goes here
		console.log('Draw Circle');
	}
}
const circle = new Circle(5);
circle.draw()
console.log('Radius = ', circle.radius)