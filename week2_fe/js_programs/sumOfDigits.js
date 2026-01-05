// Program to find sum of Even digits of the given number

inputNumber = 46782389
sumOfEvenDigits = 0
temperoryNumber = inputNumber

while(temperoryNumber != 0) { // temporaryNumber > 0
    remainderDigit = temperoryNumber % 10
    if(remainderDigit % 2 == 0)
        sumOfEvenDigits += remainderDigit
    temperoryNumber = Math.trunc(temperoryNumber / 10)
}
console.log('Sum of Even digits = ', sumOfEvenDigits)
//alert('Sum = ', sumOfEvenDigits)
//document.writeln()
/*
5678

10)5678(567
   5670
      8
10)5(0
   0
   5
*/