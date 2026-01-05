function createRectangle(length, breadth) {
	return {
		length,
		breadth,
		draw: function() {
			console.log(`Zero Arg Rectangle with length= ${this.length} and breadth= ${this.breadth}`);
		},
		draw : function(len, bre) {
			console.log(`Rectangle with len= ${length} and bre= ${breadth}`);
			return 
		}
	}
}

const rect = createRectangle(41, 5);
rect.draw();
area = rect.draw(rect.length, rect.breadth);
console.log('Area = ', area);
console.log('Area = ',rect.draw(22, 9));


range(5)
range(5, 10)
range(50, 5, -3)
