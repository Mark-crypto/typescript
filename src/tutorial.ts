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
