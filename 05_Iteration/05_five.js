const arr = ["js", "cpp", "java", "python"];
arr.forEach((value, index, arr) => {
  console.log(value, index, arr);
});
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
