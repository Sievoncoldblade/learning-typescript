// primitive types
let apples: number = 5;
let speed: string = "fast";
let hasMoney: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let digits: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {
  model: string;
  plateNumber: string;

  constructor(model: string, plateNumber: string) {
    this.model = model;
    this.plateNumber = plateNumber;
  }

  getModel(): string {
    return this.model;
  }
}

let car: Car = new Car("Honda Civic", "X099-0728");
// console.log(car.getModel());

// Object Literal
let point: { x: number; y: number } = {
  x: 2,
  y: 3,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const logNumber2 = (i: number): void => {
  console.log(i);
};

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// console.log(coordinates);

// 2. When we declare a variable on one line
// and initialize it later

let words = ["red", "green", "blue"];
let foundWord: boolean;
// better way would be
// let foundWord = false;

for (const word in words) {
  foundWord = words[word] == "blue" ? true : false;
}

// console.log(foundWord);

// 3. Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (const number in numbers) {
  const num = numbers[number];
  numberAboveZero = num > 0 ? num : false;
}
console.log(numberAboveZero);
