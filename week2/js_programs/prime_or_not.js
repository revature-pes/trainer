// Check if the given number is Prime number

inputNumber = 35
prime = true // assume given number is Prime

untilNumber = Math.ceil(Math.sqrt(inputNumber))
for(let i = 2; i <= untilNumber; i++) {
    if(inputNumber % i == 0) {
        prime = false
        break; // breaks the loop
    }
}
if(prime)
    console.log(`${inputNumber} is a Prime number`)
else
    console.log(`${inputNumber} is not a Prime number`)