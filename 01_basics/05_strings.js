// we can either declare with '' or ""
const name = "viraj"
const repoCount = 50;
// console.log(name + repoCount + "value"); viraj50value

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('Virajmehta');

console.log(gameName);
console.log(gameName[0]); // V
console.log(gameName.__proto__); // {}
console.log(gameName.length); 
console.log(gameName.toLocaleLowerCase()); 
console.log(gameName.charAt(2)); // r
console.log(gameName.indexOf('r')); // 2 
const temp = new String('hello-world');

const newString = temp.substring(0, 4) // [)
console.log(newString); // hell

const anotherString = temp.slice(-8, 4);// will start from reverse ( start index, end index ) so -8 is given so it starts from end and 4 is from start so -8 is 'l' and 4 is 'o' so it is [) so prints 'l'
console.log(anotherString); // l

const newStringOne = " Viraj "
console.log(newStringOne); //  Viraj -> original 
console.log(newStringOne.trim()); // Viraj -> space will get removed 

const url = "https://www.google.com/viraj%20mehta"
// url.replace('%20', '-');
console.log(url.replace('%20', '-')); // https://www.google.com/viraj-mehta
console.log(url.includes('viraj')); // true
const name1 = "Viraj-Mehta temp"
console.log(name1.split('-'));