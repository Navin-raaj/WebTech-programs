//? Global execution context 
// var a=10
// let b=20
// const c=30
// function demo(){
//     console.log("Demo")
// }
// demo()

//? Function execution context (FEC)
// var a=10
// let b=20
// const c=30
// function demo(){
//     let d=10
//     var e=30
//     console.log("Demo")
//     console.log(d)
//     function subdemo(a,b){
//         console.log('subdemo')

//     }
//     subdemo(10,20)
// }
// demo()


//? closure
// it is a function which will be created or generated only when the innner function access the outer functions variable.
// When th eouter function returns a functions inside it, it will be stored in an variable . we can only invoke it using the variable name, by the time we invoke the inner function, the outer function will be removed from the callstack. So the local scope variables of the outer function will be destroyed, while the inner function is invoked there wouldnt be any of the outer variable present. if the inner function is trying to access the outer function vasriable, a closure function is created inside which the outer functions variable is stored.
//? counter using closure
function counter(){
    let count=0
    function incCount(){
        console.log("inner")
        console.log("inner")
        console.log("inner")
        console.log("inner")
        count++
        console.log(count)
    }
    return incCount
}

let finalValue=counter()
finalValue()
finalValue()
finalValue()
finalValue()


//? How to use debugger : 
// Inspect --> sources --> js file --> click line number we want to start from --> refresh the page.

//? How to stop the debugguer
// Unclick the line number that is already clicked --> click on stop debugging in the browser.