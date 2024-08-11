//Temperature COnversion Program

const textBox = document.getElementById("textBox");
const toFahrenhuit = document.getElementById("toFahrenhuit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){
    
    if(toFahrenhuit.checked){

    }
    else if(toCelsius.checked){

    }
    else{
        result.textContent = "Select a unit";
    }
}