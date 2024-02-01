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
console.log(ans);

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) newNums.push(num);
});
console.log(newNums);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => {
  return bk.genre === 'History'
})

userBooks = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
