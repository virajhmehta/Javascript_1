const email = "hello@gmail.com";
if (email) {
  console.log("got the mail");
} else {
  console.log("No any mail");
}
// false value --> false, 0, -0, Bigint, 0n, "", null, undefined,NaN
// truth value --> "0",  'false', [], {}, function(){}, 