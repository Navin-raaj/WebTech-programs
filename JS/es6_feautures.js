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



//!spread operator
//it is used to spread the values of an array or object into another array or object.
//*spread operator with arrays
let arr3=[1,2,3]
let arr1=[...arr3,4,5,6]
// console.log(...arr3) // 1 2 3
// console.log(arr1)

// function demo(a,b,c,d,e){
//     console.log(a,b,c,d,e)  //a will store 1, b will store 2, c will store 3, d will store 4, e will store 5
    //c d e will store the values of the arrat arr3.
// }
// demo(1,2,...arr3)

//!rest operator
//it is used to collect the values of an array or object into a single variable.
//*rest operator with arrays
let[a,b,...args]=arr3 //a will store 1, b will store 2, args will store [3] [1,2,3]
// console.log(a) 
// console.log(b) 
// console.log(args) 

//?with objects
let obj1={
    name:"navin",
    age:22,
    address:{
        street:"btm",
        city:"bangalore"
    }
}
//*rest operator with objects
let {name,...rest}=obj1 //name will store "navin", rest will store {age:22,address:{street:"btm",city:"bangalore"}}
// console.log(name) 
// console.log(rest)

//*spread operator with objects
let obj2={
    ...obj1,
    gender:"male"
}
// console.log(obj2) //{name: "navin", age: 22, address: {…}, gender: "male"}
// console.log(...Object.keys(obj1)) //name age address
// console.log(...Object.values(obj1)) //navin 22 {street: 'btm', city: 'bangalore'}
// console.log(...Object.entries(obj1)) //["name", "navin"] ["age", 22] ["address", {…}] ["gender", "male"]

//*in short, we can say that spread operator only works on array. if we want to use it on objects, we can use Object.keys(), Object.values() and Object.entries() methods to convert the object into an array and then use the spread operator on it.

//!Advantages of spread operator over rest operator
//1.spread operator can be used to copy the values of an array or object into another array or object. rest operator can be used to collect the values of an array or object into a single variable.
//2.spread operator can be used to merge two arrays or objects. rest operator cannot be used to merge two arrays or objects.
//3.spread operator can be used to convert an object into an array. rest operator cannot be used to convert an object into an array.

//*Shallow copy

//?array
let arrr=[1,2,3]
let arrrr=arrr //this is copy the refernece not the values. so if we modify the values of arrrr, it will also modify the values of arrr.
arrrr[0]=10
// console.log(arrr) //[10,2,3]
// console.log(arrrr) //[10,2,3]

//so to avoid this, we can use spread operator to copy the values of an array into another array. This is called shallow copy. In shallow copy, if we modify the values of the new array, it will not modify the values of the original array.
//basically, we are copying the values instead of the reference.
let arr4=[1,2,3]
let arr5=[...arr4] //shallow copy of arr4 into arr5
arr5[0]=10
// console.log(arr4) //[1,2,3]
// console.log(arr5) //[10,2,3]

//?object
let obj3={
    name:"navin",
    age:"22",
}
let obj4=obj3 //this is copy the refernece not the values. so if we modify the values of obj4, it will also modify the values of obj3.
obj4.name="aditya"
// console.log(obj3) //{name: "aditya", age: "22"}
// console.log(obj4) //{name: "aditya", age: "22"}

let obj5={...obj3} //shallow copy of obj3 into obj5
obj5.name="aditya"
// console.log(obj3) //{name: "navin", age: "22"}
// console.log(obj5) //{name: "aditya", age: "22"}

//*Disadvantages of shallow copy
//1.shallow copy only copies the values of the original array or object into the new array or object. It does not copy the nested arrays or objects. So if we modify the values of the nested arrays or objects in the new array or object, it will also modify the values of the nested arrays or objects in the original array or object.
//2.shallow copy only works for one level of nesting. If we have more than one level of nesting, we need to use deep copy to copy the values of the nested arrays or objects into the new array or object.

let arr6=[1,2,[3,4,5]]
let arr7=[...arr6] //shallow copy of arr6 into arr7
arr7[2][0]=10
// console.log(arr6) //[1,2,[10,4,5]]
// console.log(arr7) //[1,2,[10,4,5]]

let obj6={
    name:"navin",
    age:22,
    address:{
        street:"btm 1st stage",
        city:"Bangalore"
    }
}
let obj7={...obj6} //shallow copy of obj6 into obj7
obj7.address.street="btm 2nd stage"
// console.log(obj6) //{name: "navin", age: 22, address: {street: "btm 1st stage", city: "Bangalore"}}
// console.log(obj7) //{name: "navin", age: 22, address: {street: "btm 2nd stage", city: "Bangalore"}}


//*Deep copy
//Deep copy is a way to copy the values of an array or object into another array or object. It copies the values of the nested arrays or objects as well. So if we modify the values of the nested arrays or objects in the new array or object, it will not modify the values of the nested arrays or objects in the original array or object.
//?we can achieve deep copy using 2 ways. 
// 1. using JSON.parse() and JSON.stringify() methods.
//  2. using recursion to copy the values of the nested arrays or objects into the new array or object.

//JSON is nothing but it is like an object in which the key and value both are in stirng format.
//?1.Using JSON methods.
//?array
let arr8=[1,2,[3,4,5]]
let arr9=JSON.parse(JSON.stringify(arr8)) //deep copy of arr8 into arr9
arr9[2][0]=10
// console.log(arr8) //[1,2,[3,4,5]]
// console.log(arr9) //[1,2,[10,4,5]]

console.log(typeof JSON.stringify(arr8)) //string
console.log(typeof JSON.parse(JSON.stringify(arr8))) //object

//?object
let obj8={
    name:"navin",
    age:22,
    address:{
        street:"btm 1st stage",
        city:"Bangalore"
    }
}
let obj9=JSON.parse(JSON.stringify(obj8)) //deep copy of obj8 into obj9
obj9.name="aditya"
obj9.address.street="btm 2nd stage"
// console.log(obj8) //{name: "navin", age: 22, address: {street: "btm 1st stage", city: "Bangalore"}}
// console.log(obj9) //{name: "aditya", age: 22, address: {street: "btm 2nd stage", city: "Bangalore"}}

//*JSON.parse() method is used to convert a JSON string into a JavaScript object. JSON.stringify() method is used to convert a JavaScript object into a JSON string. So we can use these two methods to create a deep copy of an array or object.
//*JSON.stringify() method gets an input as a js object then why does array also work with it? Because array is also an object in js. So we can use JSON.stringify() method to convert an array into a JSON string and then use JSON.parse() method to convert the JSON string into a JavaScript object. This way we can create a deep copy of an array or object.

//?Disadvantages of using JSON.parse() and JSON.stringify() methods to create a deep copy of an array or object.
//1. It does not work for functions, undefined, and symbol values. It will ignore these values while creating a deep copy of an array or object.
//2. It does not work for circular references. It will throw an error while creating a deep copy of an array or object with circular references.
//3. It is not the best way to create a deep copy of an array or object. It is not efficient and it is not the best way to create a deep copy of an array or object.

//?Using recursion.
//we can use recursion to create a deep copy of an array or object. We can check if the value is an array or object and then we can call the function recursively to copy the values of the nested arrays or objects into the new array or object. This way we can create a deep copy of an array or object.



