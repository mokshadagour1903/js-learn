const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc : ${acc}, currval ${currval}`);
    
//     return acc + currval ;
// },0)

// const myTotal = myNums.reduce((acc, currval)=> acc+ currval,0)
// console.log(myTotal)
const shoppingCart = [
    { 
        itemName :"js course",
        price:2999
    },
    {
        itemName :"py course",
        price:3999
    },
    {
        itemName :"cpp course",
        price:999
    },
    {
        itemName :"java course",
        price:4999
    },
    {
        itemName :"mobile development course",
        price:9999
    },
    {
        itemName :"Data Science course",
        price:12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);
