// arrays
let arrString: string[] = ["a", "b", "c"];

let arrNumber: number[] = [1, 2, 3];

let arrBool: boolean[] = [true, false];

let arrMix: (string | number | boolean)[] = [1, "two", true];

let arrTup: [string, number] = ["string", 1];

// objects
let person: {
	name: string;
	age: number;
} = {
	name: "Jessie",
	age: 25,
};

person.name = "Jules";

// type
type AlphaNum = string | number;

let year: AlphaNum = 2023;
year = "2023";

// functions
function calculatePure(arg0: number, arg1: number): number {
	return arg0 + arg1;
}

let calculateArrow: (arg0: number, arg1: number, arg2?: number) => number;

calculateArrow = (arg0: number, arg1: number) => {
	return arg0 + arg1;
};

// interface
interface PersonInterface {
	name: string;
	age: number;
}

let mike: PersonInterface = {
	name: "mike",
	age: 34,
};

class Person implements PersonInterface {
	constructor(public name: string, public age: number, private email: string) {}

	greet(): string {
		return `Hi, my name is ${this.name} and I am ${this.age}.`;
	}
}

let john: Person = new Person("John Doe", 35, "johndoe@gmail.com");
console.log(john.greet());
