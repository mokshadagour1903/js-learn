// singleton
// Object.create

// object literals


// Symbol 
const mySym =Symbol("key1")
//ques take a symbol and add it in obejct as a keys and print it 
 
const JsUser = {
    name :"hitesh",
    "full name" :"Hitesh Choudhary",
    age : 18 ,
    [mySym] :"key1",
    location:"Jaipur",
    email :"hitesh@google.com",
    isLoggedIn :"false",
    lastLoginDays :["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof mySym)
// console.log(JsUser[mySym])

JsUser.email="moka@chatgpt.com"
console.log(JsUser.email)
//Object.freeze(JsUser)
JsUser.email="hitesh@chatgpt.com"
console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
// console.log(JsUser.greeting) // returns --> [Function (anonymous)]
console.log(JsUser.greeting())
// console.log(JsUser.greeting) // returns --> [Function (anonymous)]
console.log(JsUser.greetingTwo())
