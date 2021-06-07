// 1. задача
// let person = {}
// person.firstName = 'Ivan';
// person.secondName = 'Ivanov';

// const showData = function() {
//     console.log(firstName, secondName);
// }

// let newPerson = Object.assign({}, person);

// newPerson.firstName = 'Petro';
// newPerson.secondName = 'Petriv';

// person.showData();
// newPerson.showData();

// 2.
const MyMath = {}
MyMath.a = 5;
MyMath.b = 2;

const sum = function () {
    console.log(MyMath.a + MyMath.b)
}
const multiplication = function () {
    console.log(MyMath.a * MyMath.b)
}
const division = function () {
    console.log(MyMath.a / MyMath.b)
}
const subtraction = function () {
    console.log(MyMath.a - MyMath.b)
}
// MyMath.
sum();
multiplication();
division();
subtraction();