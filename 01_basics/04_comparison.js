// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 != 1)


/** unpredictable result */

console.log("2" > 1); // true automatically convert string to number
console.log("02" > 1); //true automatically convert string to number

console.log(null > 0); //false null convert to 0
console.log(null == 0); //false null convert to 0
console.log(null >= 0);  //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0);  //false



/** === check value as well as data type*/
console.log("2" == 2); //true
console.log("2" === 2); //false








