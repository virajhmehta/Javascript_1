const arr = ["js", "cpp", "java", "python"];

arr.forEach((value, index, arr) => {
  console.log(value, index, arr);
});
// js 0 [ 'js', 'cpp', 'java', 'python' ]
// cpp 1 [ 'js', 'cpp', 'java', 'python' ]
// java 2 [ 'js', 'cpp', 'java', 'python' ]
// python 3 [ 'js', 'cpp', 'java', 'python' ]
arr.forEach((a) => {
  console.log("with a", a);
});
const coding = [
  {
    name: "java",
    filename: "java",
  },
  {
    name: "python",
    filename: "py",
  },
  {
    name: "c++",
    filename: "cpp",
  },
];
coding.forEach((item) => {
  console.log(item.name, item.filename);
  //console.log(item.name);
});
