startNumber = 40
endNumber = 100
printPrimes(startNumber, endNumber);

function printPrimes(startNumber, endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
        if(checkIfPrime(i))
            console.log(i)
    }
}

function checkIfPrime(userNumber) {
    prime = true // assume given number is Prime

    untilNumber = Math.ceil(Math.sqrt(userNumber))
    for(let i = 2; i <= untilNumber; i++) {
        if(userNumber % i == 0) {
            prime = false
            break; // breaks the loop
        }
    }
    return prime
}