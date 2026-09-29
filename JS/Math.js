//!Math object
//can be only be used on number datatype.
//if used on any other type, will retrurn undefined or NaN

//?1.abs()
//converts the number to positive number
// console.log(Math.abs(-5))//5
// console.log(Math.abs(25))//25
// console.log(Math.abs(-2.5))//2.5

//?2.round()
//rounds the number to nearest integer value. 1-4 : lower integer, 5-9 : higher integr
// console.log(Math.round(2.3))//2
// console.log(Math.round(2.5))//3
// console.log(Math.round(2.6))//3

//?3.floor()
//rounds the value to the lowest integer value
// console.log(Math.floor(2.1))//2
// console.log(Math.floor(2.9))//2


//?4.ceil()
//rounds the value to the higher integer value
// console.log(Math.ceil(2.1))//3
// console.log(Math.abs(2.9))//3


//?5.pow()
//returns the power of the given value
// console.log(Math.pow(5,2))//25
// console.log(Math.pow(5,3))//125

//?6.sqrt()
//returns square root of the given value
// console.log(Math.sqrt(25))//5
// console.log(Math.sqrt(49))//7

//?7.cbrt()
//returns cube root of the given value
// console.log(Math.cbrt(8))//2
// console.log(Math.cbrt(27))//3


//?8.max()
//returns the max value among the given values
// console.log(Math.max(2,2,56,43,5667,12345,976))//12345
// console.log(Math.max([2,2,56,43,5667,12345,976]))//NaN

//?9.min()
//returns the min value among the given values
// console.log(Math.min(2,2,56,43,5667,12345,976))//2
// console.log(Math.min([2,2,56,43,5667,12345,976]))//NaN


//?10.random()

//genrates a random value between 0 to 1
// console.log(Math.random())

//*4-digit otp
// let min=1000
// let max=9999
// let otp=Math.floor(Math.random()*(max-min+1)+min)
// console.log(otp)

//*6-digit top
// let min=100000
// let max=999999
// let otp=Math.floor(Math.random()*(max-min+1)+min)
// console.log(otp)


