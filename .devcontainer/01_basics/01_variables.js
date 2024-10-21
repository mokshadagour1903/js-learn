const accountId = 144553
let accountEmail = "mokshadagour3112@gamil.com"
var accountPassword ="12345"
accountCity = "Indore"


// accountId= 2 --> not allowed
accountEmail="moka@gmail.com"
accountPassword ="232323"
accountCity="banglore"
let accountState;
console.log(accountId);
/*
Prefer not to use var because of issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);