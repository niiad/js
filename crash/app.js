// arrays
var arrString = ["a", "b", "c"];
var arrNumber = [1, 2, 3];
var arrBool = [true, false];
var arrMix = [1, "two", true];
var arrTup = ["string", 1];
// objects
var person = {
    name: "Jessie",
    age: 25
};
person.name = "Jules";
var year = 2023;
year = "2023";
// functions
function calculatePure(arg0, arg1) {
    return arg0 + arg1;
}
var calculateArrow;
calculateArrow = function (arg0, arg1) {
    return arg0 + arg1;
};
var mike = {
    name: "mike",
    age: 34
};
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Person.prototype.greet = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age, ".");
    };
    return Person;
}());
var john = new Person("John Doe", 35, "johndoe@gmail.com");
console.log(john.greet());
