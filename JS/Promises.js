//!Promises
//*It is an js object which is an asynchronous block of code used as an placeholder for until a promise is completed.
//*Accepts a callback function with two arguments (resolve,reject)
//*every resolve and reject is to be resolved by using then and catch block.
//*then is for fulfilled promise(consuming a promise) which accepts an callback function with one argument as the msg which will store the  reason in the resolve in promise.
//*catch is for rejected promises(handling a promise) which works as the same like then.

// let p1=new Promise((res,rej)=>{
//     let a=10
//     if(a==10)
//         res("Promise resolved")
//     else
//         rej("Promise rejected")

// })
//  //? To handle or consume promise we need then() and catch()
// p1.then(msg=>console.log(msg))
// p1.catch(err=>console.log(err))

// //*only fro resolved promises:
// let p2=new Promise((res,rej)=>{
//     setTimeout(() => {
//         res("Promise resolved")
        
//     }, 2000);
// }).then(msg=>console.log(msg)).catch(err=>console.log(err))

//*Promise methods
//accepts array as an argument.
// let p3 =Promise.reject("Promsie reject p3")
// let p4 =Promise.reject("Promsie reject p4")
// let p5 =Promise.resolve("Promsie resolved p5")


// ?1. Promise.any():
//returns resolved even if one promise is resolved. doesnt care about reject only searches for resolved promised.
//works like arr.some() method

// Promise.any([p3,p4,p5])
//     .then(msg=>console.log(msg))
//     .catch(err=>console.log(err))

//?2. Promise.all()
//returns rejected even if one is rejected. doesnt care about resolved only cares about rejected.
//works same like arr.every() method

// Promise.all([p3,p4,p5])
//     .then(msg=>console.log(msg))
//     .catch(err=>console.log(err))

//?3. Promise.allSettled()
//returns all the promise irrespective of its status

// Promise.allSettled([p3,p4,p5])
//     .then(msg=>console.log(msg))
//     .catch(err=>console.log(err))


//?4. Promise.race():
//returns the 1st promsie to complete.
//  let car=new Promise((res,rej)=>
// {
//     setTimeout(() => {
//         res("Car won the race")
        
//     }, 2000);
// })
// let bike=new Promise((res,rej)=>
// {
//     setTimeout(() => {
//         res("Car won the race")
        
//     }, 1000);
// })
// let plane=new Promise((res,rej)=>
// {
//     setTimeout(() => {
//         rej("Car won the race")
        
//     }, 1500);
// })

// Promise.race([bike,plane,car])
// .then(msg=>console.log(msg))
// .catch(err=>console.log(err))

//?fetch(url):
//used to fetch the datas from apis
//it returns a promise that needs to be handled.

// let fetchData=fetch("https://fakestoreapi.com/products");
// fetchData.then(response=>{
//     return response.json //this returing statement returns a promise.

// }).then(finalData=>{//this finalData is an array because the api contains objects inside array
//     finalData.forEach(ele => {
//         console.log(ele.title)
//         console.log(ele.price)

        
//     });

    
// }).catch(err=>console.log(err)) //one catch block is enough for multiple then blocks.

//*Using more than one then block leads to a concept called promise chaining. Using promise chaining is not recommended as we can't use 1000's of then block if we have 1000's of promises. To overcome this, we'll using async and await.


//! async and await
//?They are a pair of keywords which cannot be used without one another.
async function fetchData(){
    try{
        let response=await fetch("https://fakestoreapi.com/products")//await is used to wait for the promise to be resolved or rejected. it can only be used inside an async function.
        let finalData=await response.json()//await is used to wait for the promise to be resolved or rejected. it can only be used inside an async function.
        finalData.forEach(ele => {
            console.log(ele.title)
            console.log(ele.price)
        })
    }catch(err){
        console.log(err)
    }   
}
fetchData()//async function is invoked like a normal function. it returns a promise which can be handled using then and catch block. but we don't need to handle it as we have already handled the promise inside the async function using try and catch block.
