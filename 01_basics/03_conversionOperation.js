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
