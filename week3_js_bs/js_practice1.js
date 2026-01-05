returnValue = console.log('Hello World!!!')
console.log(returnValue)

students = [
    {rollNum:101, name: 'statish', marks:80},
    {rollNum:102, name: 'harish', marks:70},
    {rollNum:103, name: 'vignesh', marks:73}
]

for(let element of students){
    element.marks += 10
}

console.log(students)