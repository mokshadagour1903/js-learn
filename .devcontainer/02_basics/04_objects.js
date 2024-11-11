// const tinderUser = new Object() //--> this is singleton object 
const tinderUser ={} // --> this is not a singleton object 
tinderUser.id = "123User"
tinderUser.name = "Moka"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    fullname : {
        userfullname :{
            firstname:"Hitesh",
            lastname:"Choudhary"
        }
    }
}
//console.log(regularUser.fullname?.userfullname.lastname) // optional chaining concept "will learn in upcoming lectures"

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1,obj2}
//const obj3= Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3)

//whenever  the values would come from database then ...., for example 

const users = [
    {
        id:1,
        email :"moka@gmail.com"
    },
    {
        id:2,
        email :"m@gmail.com"
    },
    {
        id:3,
        email :"namita@gmail.com"
    },
    {
        id:4,
        email :"ruchi@gmail.com"
    },
    {
        id:5,
        email :"raj@gmail.com"
    },
    {
        id:6,
        email :"riddhi@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    coursename :"js in hindi ",
    price : 999,
    courseInstructor :"hitesh"
}
//course.courseInstructor
const {courseInstructor :instructor} = course
// console.log(courseInstructor)
console.log(instructor)

// {
//     "name" :"hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }