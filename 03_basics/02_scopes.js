var c = 300
let a = 300
if (true) {
  let a = 10;
  console.log("INNER: ",a)
  const b = 20;
  var c = 30;
}

// console.log(a); // a is not defined // for if block
// console.log(b); // b is not defined // for if block
console.log(c); // 30 // will overrite


function one()
{
    const username = "Viraj"
    function two()
    {
        const website = "Youtube"
        console.log(username); // we can access outside ones
    }
    // console.log(website); // out of scope
    two()
}
one()
if(true)
{
    const name = "Viraj"
    if(name === "Viraj")
    {
        const website = "youtube"
        console.log(name + " " + website);
    }
    // console.log(website); // gives error outside scope
}
// console.log(name); // // gives error outside scope



// *************** intresting ***************

console.log(addone(5)) // 6
// addone(5) // we can also write like this
function addone(num)
{
    return num + 1
}


//addTwo(5) // but this will give error when we declare like expression in detail we will have hoisitng
// can't access before intialization
const addTwo = function(num) // this kind of declaration is also called as expression
{
    return num + 2;
}

