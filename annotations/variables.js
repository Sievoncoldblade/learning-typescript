// primitive types
var apples = 5;
var speed = "fast";
var hasMoney = true;
var nothingMuch = null;
var nothing = undefined;
// built-in objects
var now = new Date();
// Array
var colors = ["red", "green", "blue"];
var digits = [1, 2, 3];
var truths = [true, false, true];
// Classes
var Car = /** @class */ (function () {
    function Car(model, plateNumber) {
        this.model = model;
        this.plateNumber = plateNumber;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    return Car;
}());
var car = new Car("Honda Civic", "X099-0728");
// console.log(car.getModel());
// Object Literal
var point = {
    x: 2,
    y: 3
};
// Function
var logNumber = function (i) {
    console.log(i);
};
var logNumber2 = function (i) {
    console.log(i);
};
// When to use annotations
// 1. Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
// 2. When we declare a variable on one line
// and initialize it later
var words = ["red", "green", "blue"];
var foundWord;
for (var word in words) {
    foundWord = true ? word === "blue" : (foundWord = false);
}
console.log(foundWord);
