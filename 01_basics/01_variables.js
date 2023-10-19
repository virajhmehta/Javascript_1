const accountId = 144453
let accountEmail = "virajmehta2499@gmail.com";
var accountPass = "12345";
accountCity = "Bengaluru"

let accountState; //default value undefined 

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

// accountId = 2  //not Allowed 
accountEmail = "hello@gmail.com"
accountPass = "2111"
accountCity = "Bvn"
console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accountState]);