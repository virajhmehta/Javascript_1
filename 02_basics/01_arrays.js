// array
// const myArr = [0, 1, 2, 3, 4, true, "Viraj"] // Valid
const myArr = [0, 1, 2, 3, 4]
console.log(myArr[0]); // 0
// when we copy array it creates shallow copy means like reference type in heap
// deep copy means like copy variables 

const myHeros = ["Viraj", "Dhoni"]
const arr = new Array( 1, 2, 3, 4);
// console.log(typeof arr) -> object
// Array Methods
arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 6 ]
arr.pop() // 
console.log(arr); // [ 1, 2, 3, 4 ]
arr.unshift(9) // will be added at start
console.log(arr); // [ 9, 1, 2, 3, 4 ]
arr.shift() // will remove the first element
console.log(arr);  // [ 1, 2, 3, 4 ]

console.log(arr.includes(9)); // false
console.log(arr.indexOf(9)); // -1


const newArr = arr.join();
console.log(arr);
console.log(newArr); // we are concating arr to an string newArr -> 1,2,3,4
console.log(typeof newArr); // string


//slice and splice

const arr1 = [0, 1, 2, 3, 4, 5] 
console.log("A", arr1); // A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = arr1.slice(1, 3); // will not modified the original one
console.log(myn1); // [ 1, 2 ] // 
console.log("B", arr1); //  B [ 0, 1, 2, 3, 4, 5 ]
const myn2 = arr1.splice(1, 3); // moves that index element to new one 
console.log("C", arr1); // C [ 0, 4, 5 ]