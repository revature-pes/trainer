const first = {name : 'Nithin', age:40}
const second = {place : ['Mysuru', 'Bengaluru'], designation: 'trainer'}

const employee = {...first, ...second, gender : 'male'}

console.log(employee)