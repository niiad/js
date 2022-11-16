type combinable = number | string;

enum Status {
    ONLINE,
    OFFLINE
};

function add(num1: number, num2: number) : number {
    return num1 + num2;
}

function doTheMath(num1: number, num2: number) : void {
    console.log(add(num1, num2));
}

let addMe: Function = doTheMath;

let functions: () => void;

let combination: (num1: number, num2: number) => number;
combination = add;

function callable(num: number, callback: (result: number) => void) : void {
    callback(num);
}

function combine(input1: combinable, input2: combinable) : any {
    let result;

    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const number1: number = 4;
const number2: number = 12.4;

console.log(add(number1, number2))

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: (string | number)[]
} = {
    name: "Henry",
    age: 17,
    hobbies: ["video games", "sex", "cooking"],
    role: [2, "coder"]
};

person.role.push("manager");
person.role[1] = 10;

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

let userInput: unknown;
let userInputString: String;

if (typeof userInput === "string") {
    userInputString = userInput;
}

function generateError(message: String, code: number) : never {
    throw {
        message: message,
        errorCode: code
    };
}