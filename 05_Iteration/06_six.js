const arr = ["js", "cpp", "java", "python"];
// forEach does not return value
const values = arr.forEach((value) => {
  // console.log(value, index, arr);
  return value;
});
console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const val = myNums.filter((num) => num > 4);
const val1 = myNums.filter((num) => {
  return num > 4;
});
console.log(val);
console.log(val1);

const ans = myNums.filter((num) => {
  return num > 4;
});
