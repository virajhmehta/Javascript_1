// Dates
let myDate = new Date();
console.log(myDate.toDateString()); // Sat Oct 21 2023
console.log(myDate.toLocaleString()); // Sat Oct 21 2023
// 10/21/2023, 4:27:02 AM
console.log(typeof myDate); // object
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 // months start from 0 in js
let anotherDate = new Date(2023, 0, 23, 5, 3);
console.log(anotherDate.toLocaleDateString()); // 1/23/2023
console.log(anotherDate.toLocaleDateString()); // 1/23/2023 let anotherDate = new Date(2023, 0, 23, 5, 3)
let date1 = new Date("01-14-2023");
console.log(date1.toLocaleString()); // 1/14/2023, 12:00:00 AM

// *** Time Stamp ***

let mytTimeStamp = Date.now();
console.log(mytTimeStamp); // 1697862850760 // by default it will be in mili second
console.log(date1.getTime()); // 1673654400000 // by this way we can compare time
console.log(Math.floor(Date.now() / 1000)); // 1697863010 // converted into second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // 10 // october // gives 9 bcoz it starts with 0
console.log(newDate.getDay()); // 6 // saturday

newDate.toLocaleString("default", {
  weekday: "long",
});
