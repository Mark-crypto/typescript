//string
let name: string = "John";
name = name.toUpperCase();
console.log(name);

//number
let num: number = 10;
num = num * 3;
console.log(num);

//boolean
let isActive: boolean = true;
isActive = !isActive;
console.log(isActive);

//union
let num2: number | string = 10;
num2 = "10";
console.log(num2);

//literal
let num3: 10 | 20 | 30 = 10;
num3 = 20;
console.log(num3);

const books = ["robinhood", "harrypotter", "sherlock"];

let findBook: string | undefined;

for (let book of books) {
  if (book === "harrypotter") {
    findBook = book;
    findBook.toUpperCase();
    break;
  }
}

console.log(findBook?.length);

//arrays
let fruits: string[] = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);

//objects
let movie: { name: string; rating: number } = {
  name: "harrypotter",
  rating: 5,
};
movie.rating = 4;
console.log(movie);

//arrays and objects
let car = { name: "audi", model: "A4", year: 2021 };
let car2 = { name: "bmw", model: "X5", year: 2020 };
let car3 = { name: "benz", model: "C class" };

let vehicles: { readonly name: string; model: string; year?: number }[] = [
  car,
  car2,
  car3,
];
console.log(vehicles);

//functions
function sayHi(name: string): string {
  console.log(`Hello there ${name.toUpperCase()}`);
  return "done";
}
sayHi("Michelle");

let names: string[] = ["John", "Doe", "Jane"];

function checkPresent(name: string): boolean {
  return names.includes(name);
}

if (checkPresent("John")) {
  console.log(`John is present in the list`);
} else {
  console.log(`John is not present in the list`);
}

//functions 2
//optional params
function calculate(price: number, discount: number): number {
  return price - price * discount;
}
//default params
function calculate2(price: number, discount: number = 0.1): number {
  return price - price * discount;
}
//rest params
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);
  let total = numbers.reduce((prev, curr) => prev + curr, 0);
  return `${message} ${total}`;
}

let results = sum("The total is: ", 1, 2, 3, 4, 5);

//function no return
function logMessage(message: string): void {
  console.log(message);
}

//type guard
function something(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLowerCase());
  }
}

something(10);
something("Hello");

//objects as parameters

function person({ id }: { id: number }): { id: number; isActive: boolean } {
  return {
    id,
    isActive: id % 2 === 0,
  };
}
const first = person({ id: 1 });
console.log(first);

//alternative
function person2(details: { id: number; name: string }): void {
  console.log(
    `My name is ${details.name.toUpperCase()} and my id is ${details.id}`
  );
}
person2({ id: 1, name: "John" });

//extra property checks
function person3(details: { id: number; name: string }): void {
  console.log(
    `My name is ${details.name.toUpperCase()} and my id is ${details.id}`
  );
}

const info = {
  id: 1,
  name: "John",
  isActive: true,
};
person3({ id: 1, name: "John" });
person3(info); //passed in extra property without error

//challenge

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", { reverse: true }));

//type alias
type User = { id: number; name: string; isActive: boolean };

const persona: User = {
  id: 1,
  name: "Jimmy",
  isActive: true,
};
//intersection
const persona2: User & { birth: number } = {
  id: 2,
  name: "Jane",
  isActive: false,
  birth: 1945,
};

console.log(persona);
console.log(persona2);

const propName = "age";
type Someone = {
  [propName]: number;
};

let Tiger: Someone = {
  [propName]: 10,
};
