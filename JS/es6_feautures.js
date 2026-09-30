//!Destructuring
//extracting values from array and object and assigning them to variables. It is a feature of ES6.
//*destructuring with arrays
let arr=[1,2,3,4,5]
// let a=arr[0]
// let b=arr[1]
// let c=arr[2]
// let d=arr[3]
// let e=arr[4]
//?instead of doing the above we can use destructuring to extract the values from the array and assign them to variables in a single line.
// let [a,b,c,d,e]=arr
// console.log(a,b,c,d,e)

//?if we want to extract only some values from the array and not all, we can use commas to skip the values we don't want to extract.
// let [a,,c,,e]=arr
// console.log(a,c,e)

//*nested destructuring
//we can use flat method on the array and make it a single array and then use destructuring to extract the values from the array and assign them to variables in a single line. Instead of using flat method, we can also use nested destructuring to extract the values from the array and assign them to variables in a single line.
let arr2=[1,2,[3,4,5],6,7]
// let [a,b,[c,d,e],f,g]=arr2
// console.log(a,b,c,d,e,f,g)

//*destructuring with objects
let obj={
    name:"navin",
    age:22,
    address:{
        street:"btm",
        city:"bangalore"
    }
}
// let {name,age,address}=obj
//while destructuring an object, it is mandatory to take the variable names same as the key names of the object. If we want to take different variable names, we can use colon(:) to assign the key value to a different variable name.
//?if we want to take different variable names, we can use colon(:) to assign the key value to a different variable name.
// let {name:n,age:a,address:{street:s,city:c}}=obj
// console.log(name,age,address)

//*destructuring with nested objects
// let {name,age,address:{street,city}}=obj
//?if we want only state and city and not any other from the main object, we can just use the destructuring on the address object.
// let {address:{street,city}}=obj
// let {street,city}=obj.address
// console.log(name,age,street,city)

//!Priority of execuion
//first priority is for synchronous code.
//then for micro tasks
//last is macro tasks

//promises belong to micro task
//settimeout and setInterval are macro tasks
//In same level of priority, the code is executed in the order it is written.


