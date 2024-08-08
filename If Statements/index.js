// IF STATEMENTS = if a conditionis true, execute some code
//                  if not, do something else

/* EXAMPLE 1

let age = 13;

if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}
*/

/* EXAMPLE 2
let time = 9;

if(time < 12){
    console.log("Good morning!");
}
else{
    console.log("Good afternoon");
}*/

// If statements also work well with Boolean varialbles;

/* EXAMPLE 3

let isStudent = false;

if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are not a student!");
}*/

// You can even create nested if statements;

/* EXAMPLE 4

let age = 25;
let hasLicense = true;

 if(age >= 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license!")
    }
    else{
        console.log("You do not have your license yet!")
    }
 }
 else {
    console.log(" You must be 16+ to have a license")
 }*/

// ELSE IF STAEMENTS

// order does matter, once it finds an appropriate clause it skips the others.
// (==) 2 equal signs is used for a comparison


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;


mySubmit.onclick = function(){
    
    age = myText.value;
    age = Number(age);


    if(age >= 100){
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born.`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    } 
}
