const user = {
    username: "Viraj",
    price: 999,
    
    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website `); // we have to use with this for accesing using current context
        console.log(this);
        // {
        //     username: 'Viraj',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
        //   Sam, welcome to website
        //   {
        //     username: 'Sam',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   } if we un comment 22-24
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
console.log(this); // empty current context {}

// default object in browser is window object

// function chai()
// {
//     let uname = "Viraj"
//     console.log(this.uname); // undefined so we can't use this in function only with object
// }
// chai() // we get many value if u run this


// const chai = function() 
// {
//     let uname = "Viraj"
//     console.log(this.uname); // undefined when we invoke this function
// }
const chai = () => 
{
    let uname = "Viraj"
    console.log(this.uname); // undefined when we invoke this function
    console.log(this); // {}
}

chai()


// const addTwo = (num1, num2) => { // explicit return 
//     return num1 + num2
// }
const addTwo = (num1, num2) =>  ( num1 + num2 ) // callesd as implicit return
const addThree = (num1, num2) =>  ( {username: "Viraj"})  // to return object we have to wrap with ()
console.log(addTwo(3, 4));