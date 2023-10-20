const score = 400
const bal = new Number(1000);
console.log(`${bal} and ${typeof bal}`); // 1000 and object
console.log(bal.toString().length);
console.log(bal.toFixed(2)); // 1000.00 to get decimal value
console.log(`${bal} and ${typeof bal}`);

const otherNumber = 89.3666
console.log(otherNumber.toPrecision(3)) // 89.4
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-In')); // 10,00,000
// ***************** Maths *****************

console.log(Math.random()); //  will give value b/w 0-1
console.log((Math.random()*10) + 1); // to avoid value 0-1 and to get b/w 1-10
const mini = 10
const maxi = 20

//to get the value b/w 10 & 20
console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini) 