// function = A section of reusable code.
//              Declare code once, use it whenever you want.
//              Call the function to execute that code.

function add(x, y){
    //let result = x + y;
    //return result;
    return x + y;
}

//let answer = add(2, 3); do this if you want to store it.
function subtract(x, y){
    return x - y;
}
function multiply(){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function isValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("Bro@fake.com"));