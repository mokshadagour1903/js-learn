// Primitive datatypes

// 7 Types -- String , Boolean , Number , undefined(value not assigned) , Symbol(to make any value unique) , null (ka mtlb h empty), BigInt

// Reference (Non-Primitive)

// Arrays , Objects , Functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

//In typescript we do like this
//const score2 :Number = 10
const bigNumber = 657468767657686573678652n  //as soon as u add n to the last of the number it gets converted to big int number

const heroes = ["shaktiman" , "naagraj" , "doga"]
//designation : "soon to be a proficient backend Developer",
let myObj = {
    name : "Moka" ,
    age : 24
}
const myFunction = function(){
    console.log("Namstey everyone")
}

// console.log(typeof bigNumber)
// console.log(typeof myObj)
// console.log(typeof heroes)
// console.log(typeof userEmail)
// console.log(typeof outsideTemp)
// console.log(typeof myFunction)


//********************** MEMORY *************************//

//Stack (Primitive) -- yha copy milta h ,  Heap(Non-Primitive) ---- yha reference milta h

let myYoutubename = "mokshadagourdotcom"
let  anotherName= myYoutubename
 anotherName = "ChaiAurCode"
console.log(myYoutubename)
console.log(anotherName)

let userOne={
    email :"moka@gmail.com",
    upi:"user@ybl"
}
anotherName = "ChaiAurCode"
console.log(userOne)
let userTwo = userOne

userTwo.email="jalad@gmail.com"
console.log(userTwo)

console.log(userOne)