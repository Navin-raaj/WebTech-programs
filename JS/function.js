//*Functions
//Types :
    //1.Normal or named function
    //2.Anonymous function
    //3.Arrow function
    //4.IIFE
    //5.HOF
    //6.Callback function
    //7.Nested function

//! 1.Normal Functions
// Hoisting is possible only in normal function.


// function fname(){
//     console.log("Hello world")
// }
// fname()
// fname()
// fname()

// demo()
// function demo()
// {
//     console.log("Demo function")
// }

// a=10;
// console.log(a) //10

// function func(a,b=3){ //b=3 is the defaut value, if no value for b is given in the arguments it will consider 3 as its value, because if no default value is given and no value for b is given in argument as well, the system will allocate undefined to b, this will give us NaN whenever any operation is performed.
//     console.log(a+b)
//     console.log(arguments) // will display the arguments in array format.
// }

// func(10,30)

//?return
// After return statement, no instructions is to be returned because they wont be executed.

// function func1(a,b){
//     return a+b
// }

// console.log(func1(5,6))
// let fun=func1(10,30)



//! 2.Anonymous function
// Function created using function keyword without a function  name.
// To invoke the function first we need to store the function ina  variable and then invoke it using the variable name.
// Behaves same as normal function.


// let func3=function(a,b=5){
//     console.log("Anonymous function")
//     return a+b
// }

// console.log(func3(10,5))


//! 3.Arrow function
// Shortest and simplest function in the js.
// Wont use function keyword and function name.


// let arrow=()=>{
//     console.log("Arrow function")

// }
// arrow()

//* Characteristics.
//? i.No parameters.
// let noParam=()=>{
//     console.log("No parameters.")
// }

//? ii.Single parameters
// let singleparam=a=>{
//     console.log("Single parameter")
//     console.log(a)
// }

// singleparam(10)

//? iii.Multiple parameters
// let multiparam=(a,b,c)=>{
//     console.log("multiparam")
//     console.log(a+b+c)
// }

// multiparam(10,20,30)

//? iv. Implicit return : returns the value automatically when we have one line expression.
// let addition=(a,b,c)=>a+b+c
// console.log(addition(10,5,10))

//? v.Explicit return : returning the value manually. When we are using return keyword explicitly and also when we have more than one line expression {} are mandatory.
// let explicit=(a,b)=>{
//     return a+b
// }
// console.log(explicit(10,2))



//? Limitations:
// 1.Doesn't have it's own this keyword.
// 2.Doesn't have argument object.
// 3.can't be used as constructor.


//!4. IIFE : Immediately invoked function expression
// Only function in js that can only be used once and cannot reuse.
//Wrap the entire function inside paranthesis.
// let z=100; // only situation when semicolon is mandatory. if not used it will assume 100() which will give as function not declared.Before using iife function the before codes are to be terminated.
// (function(a,b){
//     console.log(z)
//     console.log("IIFE")
//     console.log(a+b)
// })(10,20);

// ((a,b)=>{
//     console.log("IIFE")
//     console.log(a+b)
// })('string',20);

// ((function func4(){
//     console.log("IIFE")
// }))()

// console.log(10)
//!5. HOF : Higher order function
//? function accepting another function as an argument
// function add(a,b){
//     console.log(a+b)
// }

// function calculate(x,y,z){
//     console.log(x+y)
//     console.log(z)
//     console.log(typeof z)
//     z(100,200)
//     z(x,y)
// }

// calculate(10,20,add)


//? function returning another function

//Ex : 1
// function demo(){
//     console.log("Demo function")
//     return () => {
//         console.log("Output from returned function")
//     };
// }

// let res=demo()
// res()

//Ex : 2
// function add(a){
//     return function(b){
//         console.log(a+b)
//     }
// }

// let result=add(10)
// result(20)


//!6. Callback function
// The function which is passed as an arguent is callback function




// function a(stat){
//     console.log("a")
//     console.log(typeof stat)
// }
// function b(){
//     console.log("b")
// }

// a(b())
// console.log(typeof b)


// console.log(typeof function(){
//     console.log("hii")
// })


//! 7.Nested function
// function outer(){
//     console.log("Outer function")
//     function inner(){
//         console.log("Inner function")
//     }
//     inner()
// }
// outer()

//! Closure
//It is responsible for remmebering the outer functions decalrations.
//It is only generated when the inner function is trying to access th eouter functions variables.
function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}

let res=outer()
res()
res()
res()
res()
res()
res()





