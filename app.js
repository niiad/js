function add(num1, num2) {
    return num1 + num2;
}
var number1 = 4;
var number2 = 12.4;
console.log(add(number1, number2));
var person = {
    name: "Henry",
    age: 17,
    hobbies: ["video games", "sex", "cooking"],
    role: [2, "coder"]
};
person.role.push("manager");
person.role[1] = 10;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
