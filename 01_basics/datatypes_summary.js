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

// ************************ Memory ************************

// Stack(Primitive)->will get copy of var, Heap(Non-primitive)->will get ref | used with this datatypes
let myYoutubename = "Hello"

let anotherName = myYoutubename;
anotherName = "chaiaurcode" 

console.log(anotherName); // chaiaurcode
console.log(myYoutubename); // Hello 
// in above we got the copy

let user = {
    email : "hello@gmail.com",
    upi : "user@ybl",
}

let temp = user;
temp.email = "temp@gmail.com";

console.log(user.email); // temp@gmail.com // used ref for original value
