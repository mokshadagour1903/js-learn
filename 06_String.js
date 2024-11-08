const name = "Moka"
const repoCount = 50

//console.log(name + repoCount +" Value") this syntax is outdated

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`)

const gameName = new String('Moka-Sam-sheeen-kaaf-aa')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase)
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,3)
console.log(newString)
const anotherString =gameName.slice(-2,4)
console.log(anotherString)
const url = "https://mokshada.com/moka%19gour"

console.log(url.replace('%19','-'))
console.log(url.includes('moka'))
console.log(gameName.split('-'))