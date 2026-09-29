//!Date.js
//reference date: 1 january 1970
let today=new Date()
// console.log(today)//Fri Sep 18 2026 13:29:51 GMT+0530 (India Standard Time)
// console.log(today.toDateString()) //Fri Sep 18 2026
// console.log(today.toTimeString()) //13:30:54 GMT+0530 (India Standard Time)

//? get methods:
// console.log(today.getTime()) //gives total milliseconds from jan 1 1970
// console.log(today.getFullYear()) //2026
// console.log(today.getMonth()) //8
// console.log(today.getDate()) //18
// console.log(today.getDay()) //5
// console.log(today.getMilliseconds()) //gives the ms(current)
// console.log(today.getHours()) //gives current hour 
// console.log(today.getMinutes()) //gives current minutes 
// console.log(today.getSeconds()) //gives current seconds 

//?set methods:
//set method returns the milliseconds from 1970
let setDate=new Date()
// setDate.setFullYear(2025)
// setDate.setMonth(7)
// setDate.setDate(12)
// setDate.setHours(12)
// setDate.setFullYear(2025)

// console.log(setDate)


//?
// console.log(Date.now()) //gives total milliseconds from jan 1 1970