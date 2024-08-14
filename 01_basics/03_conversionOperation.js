//let score = 33
//let score = "33"
//let score = "33abc"
//let score = null  // 0 if we print score
//let score = undefined  //NaN if we print score
//let score = true  //1 if we print score
let score = "Dinesh"  //NaN if we print score

console.log(typeof score)

// convert into number
let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)  // NaN (not a number)


// Notes

// "33" => 33
// "33abc" => NaN
// true  => 1
// false => 0


// Boolean

//let isLoggedIn = 1
//let isLoggedIn = "" // false
let isLoggedIn = "Dinesh" // true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


// 1 => true ;  0 => false
// "" => false
// "Dinesh"  => true


let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)




/**************Operations ************************** */
console.log("Operations");

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Dinesh"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 - 2 + "2");

console.log(3+4*5/2); // Good for Question but not good for real coding

console.log(true);
console.log(+true);
//console.log(true+); // Error

console.log(false);
console.log(+false);
//console.log(false+); // Error

console.log(+"");
console.log(+" ");

let num1, num2, num3
num1 = num2 = num3 = 2+2 // confusing not used in real coding
console.log(num1);
console.log(num2);
console.log(num3);

// Presend Operator

/** Postfix Operator */
let gameCounter = 100
gameCounter++
console.log(gameCounter)

/** Prefix Operator*/
++gameCounter
console.log(gameCounter);












