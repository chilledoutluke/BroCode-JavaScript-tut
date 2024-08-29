// forEach() = method used to iterate over the elements
//             of an array and apply a specified function
//             (callback) to each element

//              array.forEach(callback)
//              element, index, array are provided

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(){
    array[index]= element.toUpperCase();
}

function lowerCase(){
    array[index]= element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}