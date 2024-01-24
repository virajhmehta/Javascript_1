console.log(2 > 3); // false
console.log(null == 0); // false // null means empty or unknown value
// undefined means the value has not been assigned yet

console.log(null >= 0); // true
console.log(null == 0); // false

// the reason is that equality check == and comparison > < >= <= work  differently.
// comparison convert null to a number, treatin as a 0
// that's why null >= 0 is true and null > 0 is false


// === value and datatype will get checked

console.log("2" === 2); // false
