// function greetTheStudent(studentName){
//     return `Hello there ${studentName}`;
// }


const greetTheStudent = studentName => `Hello there ${studentName}`;

// const fullName = function(firstName, middleName, lastName){
//     return `${lastName}, ${middleName}. ${firstName}`;
// }


// const student = 'Mary Jane';
// const greet = greetTheStudent(student);
// console.log(greet)

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`

const titleName = fullName('Mary', 'R','Jane')
console.log(titleName)

