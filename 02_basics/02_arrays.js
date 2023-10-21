const marvel_heros = ["thor", "IronMan", "spiderman"];
const dc = ["superman", "flash", "bataman"]

// marvel_heros.push(dc);
// console.log(marvel_heros); // [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'bataman' ] ] array gets copied into array
// console.log(marvel_heros[3]); // [ 'superman', 'flash', 'bataman' ]
// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc); // will return new hero
// console.log(allHeros); // [ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'bataman' ]

// ***** spread operator *****
// remember when glass breaks it spread out its partical

const heros = [...marvel_heros, ...dc]; // benifit we can give more argument also rather than one in concat
console.log(heros); // [ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'bataman' ]

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArr = arr.flat(Infinity);
console.log(realAnotherArr); 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//  ]

console.log(Array.isArray("Viraj")); // false
console.log(Array.from("Viraj")); // [ 'V', 'i', 'r', 'a', 'j' ] // will convert it into array
console.log(Array.from({name:"hitesh"})); // [] // intresting we have to tell that make array from key
let s1 = 100;
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3)); // [ 100, 200, 300 ]
