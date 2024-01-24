const user = {
  username: "Viraj",
  logincount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got the user details");
    console.log(`username: ${this.username}`); //console.log(`username: ${username}`); gives error
    console.log(this); // prints the current context

    // {
    // username: 'Viraj',
    // logincount: 8,
    // signedIn: true,
    // getUserDetails: [Function: getUserDetails]
    // }
  },
};


// we have to create new user2 to create a new one 
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // {} prints the global context

// new is constructor function
// const promiseOne = new Promise()
// const date = new Date() 
function User(username, logincount, isLoggedIn)
{
    this,username = username // this.varName = argument
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
    // if we don't write above then also  it gives value

}
// const userOne = User("Viraj", 2, true)
// const userTwo = User("Hello", 13, false)
// console.log(userOne); // here the value will get overwrite of userTwo

const userOne = new User("Viraj", 2, true) // will create new object
const userTwo = new User("Hello", 13, false)
console.log(userOne.constructor); // [Function: User]
console.log(userOne); // here the value will not get overwrite
console.log(userTwo); 


// instance of variable --> The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.
// The return value is a boolean value
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true