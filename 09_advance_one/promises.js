// 1
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () { // any response is there it will be in the .then // if any error in it goes to .catch
  console.log("Promise consumed");
});

// 2
// not storing in variable

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Viraj", email: "demo@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user); // consumption
});

// 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) resolve({ username: "Viraj", pass: "123" });
    else reject("ERROR: Something went wrong");
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either rejected or resolved"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // false --> no error
    if (!error) resolve({ username: "javascript", pass: "123" });
    else reject("ERROR: JS went wrong");
  }, 1000);
});

// with async
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// with json

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json() // we have to await data
//     // const data = response.json();
//      console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

// with .then and .catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); // in console this data is getting printed first
  })
  .catch((error) => console.log(error));


// points to know then catch try catch finally 