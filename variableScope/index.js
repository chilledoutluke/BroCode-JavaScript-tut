// variable scope = where a variable is recognized and 
//                  accessible(local vs global)


// LOCAL is any vairable declared inside a function.

// GLOBAL scope is any variable declared outside 
//of a function.

//example 1 ( Global variable)

/*
let x = 3;

function function1(){
    console.log(x);
}
*/

//Example 2 (local vairable)

function function2(){
    let x = 2;
    console.log(x);
}