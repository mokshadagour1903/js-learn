function sayMyName (){
    console.log("M")
    console.log("O")
    console.log("K")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("D")
    console.log("A")
}

//sayMyName()

function sum(num1,num2){
   console.log(num1+num2)
    
}

function sum(num1,num2){
//    result = num1+num2
//    return result
     return num1+num2
 }
const result =sum(6,9)
console.log("Result :", result )


function loginUserMessage(username = "Moka"){
    if(!username){
        console.log("Please enter a username")
        return
    }

    return `${username} just logged in`
}
//console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2, ...num1){
return num1
}

console.log(calculateCartPrice(200,400,500,2000))


const user ={
username:"hitesh",
price:199
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200,989,90,676,56]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))