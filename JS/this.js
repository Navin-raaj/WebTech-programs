//!this keyword:
//by default everythings parent object is window in javascript. 
//this keyword points towards the current object
// console.log(this) //window

function demo(){
    console.log(this)
}
// demo()//window
// new demo()//demo .since new keyword creates a new object

let arrow=()=>{
    console.log(this)
}
// arrow()//window
// new arrow() //error cause arrow function does not have its own this keyword. it inherits the this keyword properties if it has any parent function.

// function demo1(){
//     let arrow1=()=>{
//         console.log(this)

//     }
//     arrow1()
// }
// new demo1() //demo1

let obj={
    name:"jsp",
    branch:"btm",
    fun:function(){
        console.log(this)
    },
    arrow:()=>{
        console.log(this)
    },
    nestedArrow:function(){
        let arrow=()=>{
            console.log(this)
        }
        arrow()
    }
}
// obj.nestedArrow()//std1 .the arrow function inside the nestedArrow is called
// obj.arrow()//window
// obj.fun()//std1


//*Dynamic behaviour of this keyword.
//making the this keyword point towards a desired object instead of only pointing to the current object.
function demo2(city,state){
    console.log(this)
    console.log(this.name)
    console.log(this.branch)
    console.log(city)
    console.log(state)
}

//? by using call(object,paramters)
//call is a function method used to make the this keyword point towards another object.
//does not support partial arguments. the function is invoked immediately once .call() is used
// demo2.call(obj,"bgr","ka") //bgr and ka are the arguments for the function city and state.

//? by using apply(object,[parameters])
//same as the previous one. the only difference is that the parameters are passed using an array.
//does not support partial arguments. the function is invoked immediately once .apply() is used
// demo2.apply(obj,["bng","ka"])

//? by using bind(obj,parameters) or bind(obj)
//allows partial arguments
//returns a new function. 
// partial argument is nothing but the parameters for the function can be seperately passed once invoking
//the function wont be invoked immediately while using bind. the new function that the bind returns has to be stored inside a new variable and then the function has to be invoked uding the new variable name. while invoking with the variable name, arguments can be passed.
//binding can only be happened once. so if we have to make this keyword to point to another object, once again we need to use bind and store it in another variable.
let res=demo2.bind(obj,"bng","ka") //or
res=demo2.bind(obj)
// res("coorg","ka")
let res1=demo2.bind(obj)
// res()
// res1("chennai","tn")
 //? to make the function inside the obj to point to other obj
 obj.fun.call(window)
