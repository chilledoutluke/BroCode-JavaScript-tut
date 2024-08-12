// spread operator = ... allows an iterable 
//                   such as an array of string
//                    to be expanded into separate elements
//                  (unpacks the elements)

//EXAMPLE 1
/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);
*/

//EXAMPLE 2 
/*
let username = "Chilledoutluke";
let letters = [...username].join("-");

console.log(username);
console.log(letters);
*/

//EXAMPLE 3

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potato"];
// A shallow copy its a diff data structure 
//but it contains identical values.

// you can combine arrays and add new elements.
let foods = [...fruits, ...vegetables, "eggs", "milk"];


console.log(foods);
