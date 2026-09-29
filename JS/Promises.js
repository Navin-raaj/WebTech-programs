//!Promises
//*It is an js object which is an asynchronous block of code used as an placeholder for until a promise is completed.
//*Accepts a callback function with two arguments (resolve,reject)
//*every resolve and reject is to be resolved by using then and catch block.
//*then is for fulfilled promise(consuming a promise) which accepts an callback function with one argument as the msg which will store the  reason in the resolve in promise.
//*catch is for rejected promises(handling a promise) which works as the same like then.

let p1=new Promise((res,rej)=>{
    let a=10
    if(a==10)
        res("Promise resolved")
    else
        rej("Promise rejected")

})
 //? To handle or consume promise we need then() and catch()
p1.then(msg=>console.log(msg))
p1.catch(err=>console.log(err))

//*only fro resolved promises:
let p2=new Promise((res,rej)=>{
    setTimeout(() => {
        res("Promise resolved")
        
    }, 2000);
}).then(msg=>console.log(msg)).catch(err=>console.log(err))
