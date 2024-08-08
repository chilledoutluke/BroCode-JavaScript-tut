// Random Number Generator

//let randomNum = Math.floor(Math.random() * 6) + 1;

//if I want it between specific numbers such as 
//between 50 and 100

/* const min = 50;
    const max = 100;

    let randomNum = Math.floor(Math.random() * (max - min )) + min

console.log(randomNum);
*/

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("myLabel1");
const label2 = document.getElementById("myLabel2");
const label3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max ) + min;
    randomNum2 = Math.floor(Math.random() * max ) + min;
    randomNum3 = Math.floor(Math.random() * max ) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}