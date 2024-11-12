const user = {
    username :"hitesh",
    price : 999,
   welcomeMessage : function(){
    // console.log(this)
    // console.log(`${this.username} ,Welcome to website`)
   }

}

// user.welcomeMessage()
// user.username = "Sam"
//  user.welcomeMessage()

// console.log(this)

// function chaii(){
//     let username = "hitesh" // we cannot use this inside the functions and can only use it for object.
//     console.log(this.username)
  
// }

const chaii =() => {
    let username = "hitesh" 
    // console.log(this)
  
}
chaii()

// const addTwo = (num1, num2) =>{ //agar {} m wrap kiya to return keyword likhna pdega 
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// //implicit return in arrow function
// const addTwo = (num1, num2) => num1 + num2 
//implicit return in arrow function
// const addTwo = (num1, num2) => (num1 + num2) //agar () m wrap kiya toh return keyword nhi likhna hoga
// console.log(addTwo(3,4))

//if we want to return object the how it is done ?

const addTwo = (num1, num2) => ({username : "hitesh"})
console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]
// myArray.forEach(()=> {})


