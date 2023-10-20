// primitive datatype -> 7 type
// String Number boolean null undefined Symbol(to make value unique) BigInt

const score = 100
const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId); // false

// non primitive datatype - > Reference type
// Array, Objects, Functions

const heros = ["Dhoni", "Kohli"];
let myobj = {
    name: "viraj",
    age: 23,
}
const myFun = function()
{
    console.log("Hello World");
}
console.log(typeof myFun);

