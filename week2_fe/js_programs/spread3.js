let numbers = [10, 20, 30, 10, 10, 30, 30]
let freq = [ [10, 3], [20, 1], [30, 3] ]

for(let e of numbers){
    console.log(e)
}

for(let eAr of freq){
    console.log(eAr)
}

for(let [theNum, itsFreq] of freq){
    console.log(`${theNum} occurs ${itsFreq} times`)
}