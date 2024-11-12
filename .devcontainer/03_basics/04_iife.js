// Immediately Invoked Function Expressions (IIFE) ==> use==> global scope k pollution se problem hoti h kyii baar top us. se bchne kmliye hm iife ka use krdete h.

(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`)
})(); // ()() 1st parenthesis means function defination and the 2nd parenthesis means the function calling


(function aurcode(name){

    console.log(`DB CONNECTED TWO ${name}`)   
})('Hitesh');

((name) =>{
    //Simple IIFE / un-named iife
    console.log(`DB CONNECTED THREE ${name}`)   
})('Mokshada');