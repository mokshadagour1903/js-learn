const marvel_hero = ["thor","Ironman","spiderman"]
const dc = ["superman", "flash","batman"]

// marvel_hero.push(dc)
// console.log(marvel_hero)

const all_heros = marvel_hero.concat(dc)
// console.log(all_heros)
// console.log(typeof(all_heros))
//spread operator  => ...

const all_new_heros = [...marvel_hero, ...dc]
// console.log(all_new_heros)
const another_array = [1,2,3,[4,5,6],7,[6,7 ,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name :"hitesh"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))