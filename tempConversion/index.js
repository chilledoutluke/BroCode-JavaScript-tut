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
        result.textContent = temp + "°F"
    }
    else if(toCelsius.checked){

    }
    else{
        result.textContent = "Select a unit";
    }
}