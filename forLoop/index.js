// for loop = repeat some code for a LIMITED amount of times

//Example 1

/*
for(let i = 0; i <= 2; i++){
    console.group("Hello");
}
*/    

// You can also count down
/*
for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log("HAPPY NEW YEAR!");
*/

//If you ever need to skip an iteration use the continue keyword
// break keyword is to break out of the loop entirely

for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        continue;
    }
    else{
        console.log(i)
    }
}