// function sayHello () {
// alert(this.name + " says hello!");
// }
// var alice = { name: "Alice" };
// sayHello.call(alice)

// var x = 10;
// var puzzle = function (amount) {
// console.log(x)
// this.x += amount;

// return this.x;
// };

// var obj1 = { x: 10 };

// var obj2 = Object.create(obj1);

// var obj3 = Object.create(obj2);

// var result = obj3.x + 10;

// window.name = 'window'

// var alice = {
// name: 'Alice',
// age: 3,
// greet: function () {
// return "Hi I am " + this.name;
// }
// }

// var bob = {
// name: 'Bob',
// greet: alice.greet
// }

// var greet = alice.greet
// var result = greet()

var name = "Window";
var alice = {
name: "Alice",
sayHi: function() {
alert(this.name + " says hi");
}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);