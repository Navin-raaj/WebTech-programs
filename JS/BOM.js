//!Browser object model
//it is a part of browser
// console.log(window) //by default each and everything in the js will have "window." in front
// console.log(document)
// console.log(window.document)

//?location:
// location.href="https://www.amazon.com" //never to use without button as it will directly redirect the page to the given address without showing the html page.
// location.reload()  //keeps on reloading infinitely so use only with button

//?history:
//works like the ->,<- in the browserr. takes us to the previous or next page accordingly
// history.back() //takes us one page before
// history.forward() //takes us one page after
// history.go(-2) //takes us two pages before
// history.go(2) //takes us two pages after


// console.log(innerHeight)//displays the height of the html document
// console.log(innerWidth)//displays the width of the html document

// console.log(outerWidth)//displays the width of the browser browser 
// console.log(outerHeight)//displays the height of the html browser excluding the task bar height

//?screen:
// console.log(screen)
// console.log(screen.height)//dispplays the height of the screen
// console.log(screen.width)//displays the width of the screen


//?dialouge methods or window methods.
 
//*1.prompt():
//displays a prompt to the user while loading the page.
//it is synchronous meaning it will block the code after it before the user gives the input. the codes after will only execute after the input.
//the value returned by the prompt is always string.
// console.log("hello")
// let a=Number(prompt("Enter value of a : "))
// let b=Number(prompt("Enter value of b : "))
// console.log("Hii")
// console.log(a+b)

//*2.alert():
//displays a warning message while loading.
// console.log("hello")
// alert("this is a warning")
// console.log("hello") 


//*3.confirm():
//consfirmation message we will get.
//it will return true or false based on our choice.
// let c=confirm("Are you sure")
// console.log(c)


//?setTimeout(callbackfunction,delay)
//makes the code asynchronous.
//makes the code inside the call back function execute after the dealy seconds.
//retruns an timeout id using which w can cancel the settimeout and make it never happen.
// let stid=setTimeout(() => {
//     console.log("js")
//     demo()
    
// }, 2000);

// function demo(){
//     console.log("javascript")
// }
// clearTimeout(stid)

//?setInterval(callback function,interval)
//makes the code inside the call back function repeat infinitely with the given interval.
//works same as timeout,returns the id using which it can be stopped

// let stid1=setInterval(() => {
//     console.log("interval")
//     demo()
    
// }, 2000);


// setTimeout(()=>{
//     clearInterval(stid1)


// },9000)


// for(let i=0;i<5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 3000);
// }

//op: 0 1 2 3 4 because let creates a block scope i for each and every iteration in which the updates i is stored each time

// for(var j=0;j<5;j++){
//     setTimeout(() => {
//         console.log(j) 
        
//     }, 3000);
// }

//op: 5 5 5 5 5 because var is a global variable, it doesnt create seperate seperate blocks j instead it override the global j value. by the time settimeout access the j value, it wouldve already updated to the maximum.

