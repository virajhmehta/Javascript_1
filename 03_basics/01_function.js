function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
const res = addTwoNumbers(3, 4);
console.log(res); // undefined // does not mean 7 will get store in res

function addNumbers(num1, num2) {
  let res = num1 + num2;
  return res;
}
const ans = addTwoNumbers(3, 4); // 7

function logInUserMessage(username) {
  // (username = "Viraj") // to give default value
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
logInUserMessage("Viraj"); //  will print nothing so wrap in the stmt
console.log(logInUserMessage("Viraj"));
function calculateCartPrice(...num1) {
  // ... is called spread/rest operator
  return num1;
}
console.log(calculateCartPrice(2)); // 2
console.log(calculateCartPrice(200, 400, 500)); // it will added to array

function calculatePrice(val1, val2, ...num1) {
  // ... is called spread/rest operator
  return num1;
}
console.log(calculatePrice(200, 400, 500, 2000)); // val1->200, val2->400 and rest in num1

const use = {
  username: "Viraj",
  price: 199,
};
function handleObject(anyobject) {
  console.log(`user is ${anyobject.username} and price is  ${anyobject.price}`);
}
handleObject(use);
const arr = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1]; // 400
}
console.log(returnSecondValue(arr));
// console.log(returnSecondValue(arr[200, 400, 100, 600]));
