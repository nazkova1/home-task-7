// 1. задача
const person = {}
person.firstName = 'Ivan';
person.secondName = 'Ivanov';

person.showData = function() {
    console.log(this.firstName + ' ' + this.secondName);
}

const newPerson = Object.assign({}, person);

newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData();

// 2.
const sum = function () {
    console.log(this.a + this.b)
}
const multiplication = function () {
    console.log(this.a * this.b)
}
const division = function () {
    console.log(this.a / this.b)
}
const subtraction = function () {
    console.log(this.a - this.b)
}
const MyMath = {}
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum = sum;
MyMath.multiplication = multiplication;
MyMath.division = division;
MyMath.subtraction = subtraction;

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();