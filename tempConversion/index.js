//Temperature COnversion Program

const textBox = document.getElementById("textBox");
const toFahrenhuit = document.getElementById("toFahrenhuit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){
    
    if(toFahrenhuit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"; // to add  sym hold alt and type 0176 on number pad.
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9); 
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }
}