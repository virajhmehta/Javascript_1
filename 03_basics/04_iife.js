// immediately invoked function expresstion IIFE
// sometime we want function to execute immediate
//named iife
(function chai() {
  console.log(`DB Connected`);
})(); // last () used for execution

// sometime we get issue from global scope pollution so to remove that we used iife and to invoke immediately as well
((name) => {
  console.log(`DB Connected Two ${name}`);
})("Viraj");

(function hello() {
  console.log("Hello");
})();

((name) => {
  console.log(name);
})("Viraj");
