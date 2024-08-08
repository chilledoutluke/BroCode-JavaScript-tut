//string methods = allow you to manipulate and work with text(strings)

// By adding a dot we are accessing any PROPERTIES or METHODS that string has

//let userName = "BroCode";

// Example 1

//console.log(userName.charAt(0));
// charAt method is for finding certain charaters in said variable

//Example 2
//console.log(userName.indexOf());
// wil return first occurance of a character

//Example 3
//console.log(userName.lastIndexOf("o"));
//finds the last character of said character 
//in the stored variable

//Example 4
//console.log(userName.length);
//gives the length of the string

//console.log(userName.trim());
//used to trim the start and end of string

//console.log(userName.toUpperCase());
//makes string all uppercase

//console.log(userName.toLowerCase());
//makes string all lowercase

//console.log(userName.repeat());
//repeats the string

///console.log(userName.startsWith());
//boolean answers if certain characters are in the string

//console.log(userName.endsWith());
//^^^^^

//console.log(userName.includes());
//checks to see if string has said character/space

let phoneNumber ="678-999-8212";


//phoneNumber = phoneNumber.replaceAll("-", "/");
//console.log(phoneNumber);


phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);
// this adds said character e.g. zero to the phone number until the length is 15

//phoneNumber = phoneNumber.padEnd();
//same thing as padStarts() but added to the end. 







