// for of
// ["", "", ""]
// [{},{}]

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  // here object means where u want apply on which object
  console.log(i);
}
const greetings = "Hello World"
for (const str of greetings) {
  console.log(str);
}

// Maps
const map = new Map()
// search on wen map js mdn
map.set('ind', 'india')
map.set('USA', 'united state of america')
map.set('fr', 'france')
console.log(map);
for (const [key,value] of map) {
  console.log(key,value);
}
const myObj = {
  'Game1': 'nfs',
  'game2': 'speider man'
}
// we can't run forof on object
// for (const [key, value] of myObj) {
//  console.log(key, value); 
// }
