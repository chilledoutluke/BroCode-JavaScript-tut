//array = a variable like structure that 
//        can hold more than 1 value

let fruits =["apple", "orange", "banana", "coconut"];


//fruits.push("coconuts"); //push to the end of the array
//fruits.pop(); //removes last element
//fruits.unshift("mango");//adds to the beginning of arr
//fruits.shift(); //removes elements from beginning of arr

//let numOfFruits = fruits.length; //To get length of array
//let index = fruits.indexOf("apple"); // searches for element

//loop through elements
/*
    for(let i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
}
*/

//Shortcut version
/*

for(let fruit of fruits){
    console.log(fruit);
}
*/

//If you need to display the order in reverse:
/*
for(let i = fruits.length -1; i >=0; i--){
    console.log(fruits[i]);
}
*/
//fruits.sort() //alphabetical order
fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}




