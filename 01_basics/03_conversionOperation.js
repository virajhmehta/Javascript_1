let score = "33"; // for 33abc will give Nan it can't convert

// "33" -> 33
// "33abc" -> Nan
// "true" -> 1 false -> 0
console.log(typeof score); // string // 2 ways to know the type 
console.log(typeof(score)); // string

let valueInNumber = Number(score) // typecast
console.log(valueInNumber); // Nan
console.log(typeof valueInNumber); // number  


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// if isLoggedIn = "" line 16 will give false
// if isLoggedIn = "Viraj" line 16 will give true

let someNumber = 33
let stringNumber = String(someNumber);

console.log(stringNumber); // 33 
console.log(typeof stringNumber); // string

// ************** Operations **************

let value = 3;
let negValue = -value
// console.log(negValue); // -3
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Viraj"
let str3 = str1 + str2
console.log(str3); // Hello Viraj
console.log(1 + "2"); // 12
console.log("1" + 2); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32



