const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.map((num) => num + 10);
// chaining
const num = myNums
  .map((num) => num * 10)
  .map((num) => num + 1 )// this num will be reult after *10 => num + 1
  .filter((num) => num > 40)
console.log(num);
