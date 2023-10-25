//  reducer
const arr = [1, 2, 3, 4];
const ans = arr.reduce((acc, curr) => {
  console.log(`${acc} ${curr}`);
  return acc + curr;
}, 0); // 0 is starting value
console.log(ans);
const obj = [
  {
    itemName: "hello",
    price: 100,
  },
  {
    itemName: "hllo",
    price: 200,
  },
  {
    itemName: "llo",
    price: 300,
  },
  {
    itemName: "helo",
    price: 400,
  },
];
const anns = obj.reduce((acc, value) => {
  return acc + value.price;
}, 0);
console.log(anns);