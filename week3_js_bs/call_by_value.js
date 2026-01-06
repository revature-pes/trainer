function increaseNum(num) // reference variable
{
	num.value++; 
}

function increaseNum(num) { // local variable
	console.log(num)
    num.value += 2;
}

let num = 10
console.log('Before incrementing, i = ', num); // Prints 10
increaseNum(num) // call by value
console.log('After incrementing, i = ', num); // Prints 10


let obj = { value: 10 }
console.log('Before incrementing, i = ', obj.value);
increaseNum(obj) // call by reference
console.log('After incrementing, i = ', obj.value);
