let students = [
    {rollNum:101, name: 'statish', marks:80},
    {rollNum:102, name: 'harish', marks:70},
    {rollNum:103, name: 'vignesh', marks:73}
]

const srudent1 = {rollNum:101, name: 'statish', marks:80}

let totalMarks = 0
for(let {rollNum, marks} of students){
    console.log(`Student with Roll-Number ${rollNum} is ${marks}`)    
    totalMarks += marks
}
console.log(`Total Score of all the students is ${totalMarks}`)