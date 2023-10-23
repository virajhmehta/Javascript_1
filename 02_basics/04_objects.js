//const tinderUser = new Object(); // singleton object
const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // prints--> {} for both line 1 and 2 const tinderUser = {}
const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      // we can do nesting as many as we like
      firstname: "Viraj",
      lastname: "mehta",
    },
  },
};
console.log(regularUser.fullName.userFullName.firstname);
console.log(regularUser.fullName?.userFullName.firstname); // optinal chaining ? if full name does not exist

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  5: "a",
  6: "b",
};
//const obj3 = { obj1, obj2 };  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } will give like nesting
// const obj3 = Object.assign(obj1, obj2); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } this way we can combine
// const obj3 = Object.assign({}, obj1, obj2, obj4); // but good to use {} as one of parameter we returning one empty object
const obj3 = { ...obj1, ...obj2, ...obj4 }; // best to use spread

console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//sometimes when we r getting values from database we get array of objects, to iterate through each
const users = [
  {
    id: 1,
    email: "hello@gmail.com",
  },
  {
    id: 2,
    email: "hllo@gmail.com",
  },
  {},
  {},
];
console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // array of keys we wiil get // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // array of value we wiil get // [ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ] will create array inside array
console.log(tinderUser.hasOwnProperty('isLoggendIn')); // false

const course = {
    courseName: "js in hindi",
    price: 999,
    courseTeacher: "Hitesh"
}
// course.courseTeacher second method to print on line 68
// extract the from the object
const {courseTeacher} = course // const{values} = obj name
console.log(courseTeacher); // Hitesh
const {courseTeacher: instructor} = course // aliasing
console.log(instructor); // Hitesh


// Json Object example
// {
//     "name": " Hitesh",
//     "courseName": "js in hindi",
//     "price": "free"
// }
