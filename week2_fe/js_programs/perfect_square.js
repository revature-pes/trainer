// Program to check if a number is Perfect Square
/*
34    5.88    5    25
169  13.0    13   169
150  12.3    12   144
Algorithm:
Read N
ROOT = square root of N
check if ROOT * ROOT is equal to N
if yes, print N is perfect square
if no, print N is not perfect square
*/
n = 34
root = Math.sqrt(n) // Here root has some decimal part
root = Math.floor(root) // remove the decimal part
if (root * root === n)
    console.log(n, ' is a Perfect Square')
else
    console.log(`${n} is not a Perfect Square`)
    // print(f'{n} is not a Perfect Square')