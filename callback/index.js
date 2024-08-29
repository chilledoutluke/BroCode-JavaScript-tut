//callback = a function that is passed as an argument to 
//           another function.


//          used to handle asynchronous operations:
//          1. Reading a file.
//          2. Network requests
//          3. Interacting with databases

//          "Hey, when you're done, call this next."

// EXAMPLE 1

/*hello(goodbye);

function hello(callback){  // what this does is makes sure
    console.log("Hello!"); // the hello function is called
    callback(); // then the goodbye function after
}

function goodbye(){
    console.log("Goodbye!");
}
*/


//EXAMPLE 2
sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result)
}