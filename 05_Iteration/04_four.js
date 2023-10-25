const obj = {
  js: "javascrpit",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in obj) {
  console.log(obj[key]);
  console.log(key);
}

const arr = ["js", "app", "cpp"];
for (const key in arr) {
  console.log(key); 
  console.log(arr[key]); // it will print arr index
}
// will not worked in Map
