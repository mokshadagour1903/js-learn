// Dates

let myDate = new Date()
// console.log(myDate.toString())

// let myCreatedDate = new Date(2024,4,19)

// let myCreatedDate = new Date(2025,2,19,4,5)
// let myCreatedDate = new Date("2024-01-27")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))
let newDate = new Date() 
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
// `${newDate.getHours()} and the time is `

newDate.toLocaleString('default' , {
    weekday: "long "
    
})
