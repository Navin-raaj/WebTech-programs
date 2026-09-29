//It is a part of BOM.
//? Types:
    // 1.document.getElementById('id')
    // 2.document.getElementsByClassName('classname')
    // 3.document.getElementsByTagName(tag)
    // 4.document.querySelector('css selectors')
    // 5.document.querySelectorAll('css selectors')



//*1.getelementbyid:
// let h1=document.getElementById("dom")
// console.log(h1)

//?reading: 
// innerHTML : returns every inside the specified element aling with the html tags 
// innerText : retruns only the text content inside the specified element that are visible in ui
// textContent : returns every text content iside the specified element no matter its visibility in the ui.


// let div=document.getElementById('div')
// console.log(div.innerHTML)
// console.log(div.innerText)
// console.log(div.textContent)


//*2.getElementsByClassName():
//It returns HTMLCollection which is similar to array but not original array and we can access elements by using index values.
//array methods cant be accessed on it.
// let p=document.getElementsByClassName('para')
// console.log(p)
// console.log(p[0].textContent)
// console.log(p[2])


//*3.getElementsByTagName():
//returns an HTMLCollection which is similar to array but not an original array and we can only access the elements using index values.
//array methods cant be used on it.
// let p=document.getElementsByTagName('p')
// console.log(p)
// console.log(p[0].textContent)
// console.log(p[2])


//*4.querySelector():
// let h11=document.querySelector('.para')
// console.log(h11)
// console.log(h11.textContent)


//*5.querySelectorAll():
// it returns NodeList which is similar to array but is not an original array. the elements can be accessed using index values or with the help of forEach.
//No array methods except forEach works upon it.
// let paras=document.querySelectorAll('.para')
// console.log(paras)
// console.log(paras[2].textContent)
// paras.forEach(ele=>{
//     console.log(ele.textContent)
// })


//?modify
// let h11=document.querySelector('h1')
// h11.textContent="Document Object Model"

// let paras=document.querySelectorAll('.para')
// paras[3].textContent="para3"


//?applying styles

// let h11=document.querySelector('h1')
// h1.style.backgroundColor="red"
// h1.style.fontFamily="cursive"
// h1.style.color="white"


//!Generating html content
//?createElement('tag)
let h1=document.createElement('h1')
h1.textContent="DOM"

//?set attributes : setAttributes('attribute','value')
//recomended for adding only ids.
//will override the 1st class or id if used twice.
h1.setAttribute('id','dom')

//?removeAttributes('class'):
//removes  the class attribute fully from the element.
// h1.removeAttribute('id')

//?remove():
//removes the element fomr the browser using the tag name.
// h1.remove()//removes the h1 element.

//?classList('class name'):
//adds extra class name for an element.
//*classList.add()
//adds another class to the element
//*classList.remove('className')
//removes the specified class from the element.
//*classList.replace('oldClassName','newClassName')



//?to display in the browser
//*1.appendChild(Node) : accepts only one argument at a time and also accepts only elements as argumnets string cant be directly passed as an argument.
//*2.append() : accepts multiple elements as an argument also string can be directly passed as an argument.

document.body.appendChild(h1)

let p=document.createElement('p')
p.setAttribute('class','para')
p.textContent="Document Object Model"
document.body.appendChild(p)

let div=document.createElement('div')
div.setAttribute('id','div')
document.body.append(div)

let h2=document.createElement('h2')
h2.setAttribute('id','h2')
h2.textContent="Iam h2 inside div tag"

let p1=document.createElement('p')
p1.setAttribute('class','para')
p1.textContent="Iam para inside the div tag"
p1.style.display="none"

let span=document.createElement('span')
span.setAttribute('id','span')
span.textContent="I am span inside the div tag"

div.append(h2,p1,span)


let div1=document.createElement('div')
div1.setAttribute('class','batch A53')
div1.textContent="Batch A53"
document.body.appendChild(div1)

let p2=document.createElement('p')
p2.setAttribute('class','para')
p2.textContent="p1"

let p3=document.createElement('p')
p3.setAttribute('class','para')
p3.textContent="p2"

let p4=document.createElement('p')
p4.setAttribute('class','para')
p4.textContent="p3"

let p5=document.createElement('p')
p5.setAttribute('class','para')
p5.textContent="p4"

document.body.append(p2,p3,p4,p5)

document.querySelector('.A53').style.color="red"
document.querySelector('.batch').style.fontFamily="cursive"