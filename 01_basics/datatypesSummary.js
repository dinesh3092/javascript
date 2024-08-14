/** Primitive Data Types */
//1 - string
//2 - number
//3 - boolean
//4 - null
//5 - undefined
//6 - symbol
//7 - bigint


// JS is a dynamically type language

const score = 3   //Interger
const scoreValue = 3.2  //Float

const isLoggedIn = false //Boolean 
const outsideTemp = null //null
let userEmail; //undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id);
console.log(anotherId);
console.log(id === anotherId); //false
console.log(id == anotherId);  //false

const bigNumber = 3254848484545484484848n
console.log(bigNumber)



/** Non - Primitive Data Types or Reference Type*/
//1 - Array
//2 - Objects
//3 - functions


const heroes = ["batman", "superman", "hanuman"]  //array
const student = {
    name : "Dinesh",
    age : 31,
}

const myFunction = function(){
    console.log("Hello World")
}


/** find data type of a variable */
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
