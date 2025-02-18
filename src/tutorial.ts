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

//Interface
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //methods
  printAuthor(): void;
  printTitle(message: string): string;
  //alternative
  printSomething: (value: number) => number;
}

const deepWork: Book = {
  isbn: 1234,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  //first option
  // printSomething: function (value){
  //   return value;
  // }
  //second option
  // printSomething: (value) => {
  //   return value;
  // },
  //third option
  printSomething(value) {
    return value;
  },
};

deepWork.printAuthor();
deepWork.printTitle("is a great book");

//challenge
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(value: number): number;
}

const computer1: Computer = {
  id: 1,
  brand: "lenovo",
  ram: 8,
  storage: 512,
  upgradeRam(value) {
    return this.ram + value;
  },
};

computer1.upgradeRam(8);

//advanced interface

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}
interface Person {
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const per: Person = {
  name: "John",
  age: 17,
  getDetails() {
    return `Name is ${this.name} and age is ${this.age}`;
  },
};

const emp: Employee = {
  employeeId: 1,
  name: "Jane",
  age: 25,
  getDetails() {
    return `Name is ${this.name} and age is ${this.age}`;
  },
};

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "Bob",
  age: 35,
  dogName: "Buddy",
  getDetails() {
    return `Name is ${this.name} and age is ${this.age}`;
  },
  getDogDetails() {
    return `Name is ${this.dogName}`;
  },
  managePeople() {
    console.log("Managing people");
  },
};

manager.managePeople();

//Challenge
interface Guy {
  name: string;
}

interface DogGuy extends Guy {
  dogName: string;
}

interface Director extends Guy {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Guy | DogGuy | Director {
  let randomNumber: number = Math.random();

  if (randomNumber < 0.33) {
    return {
      name: "John",
    };
  } else if (randomNumber < 0.66) {
    return {
      name: "Jane",
      dogName: "Buddy",
    };
  } else {
    return {
      name: "Bob",
      managePeople() {
        console.log("Managing people");
      },
      delegateTasks() {
        console.log("Delegating tasks");
      },
    };
  }
}

const randomGuy: Guy | DogGuy | Director = getEmployee();
console.log(randomGuy);

function isManager(obj: Guy | DogGuy | Director): obj is Director {
  return "managePeople" in obj;
}

//tuples and enums
let personInfo: readonly [string, number, boolean] = ["John", 25, true];
console.log(personInfo);

function getPerson(): [string, number, boolean] {
  return ["John", 25, true];
}
getPerson();
let susan: [string, number?] = ["Susan"];
console.log(susan);

enum ServerResponseStatus {
  Success,
  Error,
}
interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["John", "Jane"],
  };
}

//challenge
enum UserRole {
  Admin,
  Manager,
  User,
}

type User43 = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User43): User43 {
  return user;
}

let akuru: User43 = createUser({
  id: 1,
  name: "John",
  role: UserRole.Admin,
  contact: ["test@test.com ", " 443"],
});
console.log(akuru);

//type assertion, type unknown and type never
//assertion
let someValue: any = "Hello there";
let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name":"parrot"}';
let dogString = '{"breed":"poodle"}';
let dogObject = JSON.parse(dogString);
let birdObject = JSON.parse(birdString);

let bird = birdObject as Bird;
console.log(bird);
//unknown
let unknownValue: unknown;
unknownValue = "Hello there";
unknownValue = [1, 2, 3, 4, 5, 6];

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}
//never
let neverValue: never;

type Theme = "light" | "dark";

function setTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("Light theme");
    return;
  }
  if (theme === "dark") {
    console.log("Dark theme");
    return;
  }
  theme;
}

enum Color {
  red,
  blue,
}
function getColor(color: Color): void {
  switch (color) {
    case Color.red:
      console.log("Red color");
      break;
    case Color.blue:
      console.log("Blue color");
      break;
    default:
      //at buildtime
      let unexpectedColor: never = color;
      //at runtime
      throw new Error(`Invalid color ${color}`);
  }
}
getColor(Color.red);
getColor(Color.blue);
