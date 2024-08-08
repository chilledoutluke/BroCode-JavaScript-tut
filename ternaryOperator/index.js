//ternary operatory = a shortcut to if{} and else{} 
//                    statements helps assign a variable based 
//                    condtion ? codeIfTrue : codeIfFalse;  

// Example 1

/*
let age = 21;
let message =  age >= 18 ? "You're an adult" : "You're a minor";
*/

//The above is like writing an alternative too:

/*
let age = 21;

let message;

if(age >= 18){
    message = "You're an adult";
}
else{
    message = "You're a minor";
}*/

// THE TERNARY OPERATOR is more condensed and easier
// to read than the if..else statement


// Example 2

// let time = 16;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";

// console.log(greeting);

// Example 3

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

// Example 4

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount *(discount/100)}`);