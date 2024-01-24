// two way to declare object 1 literals 2 constructor
// one more concept is singleton : whenever we make through constructor

// object literals
const mySym = Symbol("Key1");
const jsUser = {
  name: "Viraj", // it will be "name" i.e string
  age: 24,
  // mySym: "mykey1", // cosole.log(type of mySym) will give string
  [mySym]: "mykey1",
  "fullname": "Viraj Mehta", // have to compulsary access like console.log(jsUser["email"])
  location: "Bengaluru",
  email: "virajmehta2499@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
console.log(jsUser.email); //
// one more way
console.log(jsUser["email"]); // type is string
//console.log(jsUser.fullname); // wrong
console.log(jsUser["fullname"]);
console.log(typeof mySym); // symbol // line 9,10
console.log(jsUser[mySym]); // mykey1

jsUser.email = "hello.com";
console.log(jsUser["email"]); // hello.com
//Object.freeze(jsUser); // any changes will not reflected
//jsUser.email = "temp.com"; // changes will not be made
//console.log(jsUser["email"]); // hello.com
console.log(jsUser);
// {
//     name: 'Viraj',
//     age: 24,
//     fullname: 'Viraj Mehta',
//     location: 'Bengaluru',
//     email: 'hello.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(Key1)]: 'mykey1'
//   }

// we can add function as well
jsUser.greeting = function () {
  console.log("Hello jsuser");
};
console.log(jsUser.greeting);
// [Function (anonymous)]

console.log(jsUser.greeting());
// Hello jsuser
// undefined

jsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`); // to use  properties defined
};
console.log(jsUser.greetingTwo());
// Hello js user Viraj
// undefined
