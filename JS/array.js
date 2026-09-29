//! ARRAY:
    // A array is a collection of homogeneous and heterogenous data.
    // It is a non primitive data type.
    // Mutable in nature
    // Index based starting from 0.
    // Stores multiple values.
//? Declaration using [] : 
let arr=[10,0,20.65,true,'jsp','a',false,()=>{},{},null,undefined]




//Read :
// console.log(arr[1])
// console.log(arr.length)
// console.log(arr)
// console.log(arr[200])

//Update : 
// arr[0]=20
// arr[100]=300
// console.log(arr)
// console.log(arr.length)
// console.log(arr[100])
// console.log(arr[80])

//delete
// delete arr[2]
// console.log(arr[2])
// console.log(arr)


//? declaration using new keyword
// let arr2 =new Array(20)
// console.log(arr2.length)
// let arr3=new Array(10,20)
// console.log(arr3.length)
// console.log(arr3[0])
// let arr4=new Array('10')
// console.log(arr4.length)

//! Array methods:

//* Mutating methods:
let arr5=[10,20,30,40,50,60,70,80,90]
// console.log(arr5[100]) //undefined

//?push method
// Adds n number of elements at the end of the array.
// console.log(arr5.push(50,60,70,80,90)) //push method adds the elements and returns the length of the array
// console.log(arr5)


//?pop method
//removes the last element from the end of the array.
//returns the deleted element.
//wont accept any arguments, even if given will ignore the arguments.
// arr5.pop()
// console.log(arr5)
// console.log(arr5.pop())




//? unshift()
//add the elements at the starting index of the array.
//return type is length same as push.
// arr5.unshift(1,2,3)
// console.log(arr5)


//? shift()
//removes the first element from the array.
//same as the pop method.
// arr5.shift()
// console.log(arr5)
// arr5.shift()
// console.log(arr5)
// arr5.shift()
// console.log(arr5)

//? splice()
//Add,remove and modify the elements at the same time.
//returns the deleted elements.
//splice(startIndex,no.of element to be deleted,elements to be added) --> the elements will be added from the starting index that we've specified.
// console.log(arr5.splice(2)) // returns the deleted value so it will delete all the value from the 2nd index and retruns the deleted value
// console.log(arr5.splice(2,2)) // deletes 2 elements from 2nd index i.e., 2nd and 3rd index elements and returns them.
// console.log(arr5.splice(2,2,100,200,300)) // returns the deleted elements i.e., 2nd index and 3rd index value and then add the 100 200 300 from the 2nd index. the elements after the 2nd index will be shifted forward.
// console.log(arr5)
// arr5.splice(2,0,100,200,300) // wont delete anything since the no of elements to be del is 0 and just adds elements from the 2nd index.
// console.log(arr5)


//? sort()
//sorts using the ASCII values of the letters.
let arr6=['navin','aditya','Kishore','gaya','skooo','Kumaran','thulasi','Guru','skyjoe']
// console.log(arr6.sort())
// console.log(arr6)

//? sort((a,b)=>{})
//used to sort number arrays. we need to pass two parameters inside the sort method to sort the number array.
// let arr7=[20,40,22,87,90,100,4,34]
// arr7.sort((a,b)=>a-b) //(for ascending order) // returns (b,a) if the result is positive, (a,b) if the result is negative or 0.
// console.log(arr7)
// arr7.sort((a,b)=>b-a) //for descending order
// console.log(arr7)

//? localCompare()
//used to sort the string array irrespective of case.
//used just like sort(a,b)
// arr6.sort((a,b)=>a.localeCompare(b)) //ascending order
// console.log(arr6)
// arr6.sort((a,b)=>b.localeCompare(a)) //desscending order
// console.log(arr6)

//?reverse()
//used to reverse an array.
// console.log(arr6.reverse())



//* Non-Mutating methods

//? 1.join("seperator"):
//used to seperate the array with the help of seperator. converts the array into string without the ,.
//toString() with some customzation
//seperator is included in the final output
let arr8=[10,20,30,40,10]
// console.log(arr8.join()) //10,20,30,40
// console.log(arr8.join("")) //10203040
// console.log(arr8.join(" ")) //10 20 30 40
// console.log(arr8.join("@")) //10@20@30@40
// console.log(arr8.join("js")) //10js20js30js40


//? 2.includes()
//returns true if the given element is present and false if not.
// console.log(arr8.includes(20)) //true

//? 3.indexOf(element)
// console.log(arr8.indexOf(10)) //0
// console.log(arr8.indexOf(40)) //3
// console.log(arr8.indexOf(80)) //-1

//? 4.lastIndexOf(element)
// console.log(arr8.lastIndexOf(10)) //4
// console.log(arr8.lastIndexOf(80)) //-1

//? 5.slice(Startindex,EndIndex)
// console.log(arr8.slice(2,4))  //[30, 40]
// console.log(arr8.slice(3))  //[40, 10]
// console.log(arr8.slice(2,1)) //[]


//? 6.concat()
//merge two array into single array
// let array=[1,2,3,4]
// let array2=['a','b','c']
// console.log(array2.concat(array))  //['a', 'b', 'c', 1, 2, 3, 4]
// console.log(array.concat(array2))  //[1, 2, 3, 4, 'a', 'b', 'c']


//? 7.at()
//returns the eleme(nt at the specified index. same as charAt.
// console.log(arr6.at(3)) // gaya
// console.log(arr6.at(30)) // undefined


//? 8.flat(depth)
//will make the nested array into one single array.
//if we're having multiple nested arrays inside one array, in order to flat those and make it as one single array,we use flat().
// let arr12=[[1,2],3,4,[5,6,[7,8,[9],10,11],12,13],14,15]
// console.log(arr12.flat())//(11) [1, 2, 3, 4, 5, 6, Array(5), 12, 13, 14, 15]
// console.log(arr12.flat(2))//(15) [1, 2, 3, 4, 5, 6, 7, 8, Array(1), 10, 11, 12, 13, 14, 15]
// console.log(arr12.flat(3))//(15) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// console.log(arr12.flat(Infinity))//will take away all the the nested arrays in a single shot. used when we dont know the depth





//* Array advanced methods:
//will accept callback funciton as arguments.
//The callback function will accept atleast 3 arguments(element,index,original array).
//Index and array are optional in the arguments.
// callback executes for every element(executes n number of times, n is the number of elements in the original array)
let numbers=[1,10,20,30,40,50]



//? 1.forEach():
//used to iterate the elements in the array.
//no return statement allowed. if used,will retuen undefined.
// DOM Manipulation,login,logout,etc..
//  numbers.forEach((ele,index,arr)=>{
//         console.log(ele,index)
        // console.log(arr)
        // console.log(ele); //undefined
//     })




//? 2.find():
//will return the 1st element that satisfies the condition.
//does not support chaining.
//will only return 1 element that is in number so arrays methods cant be chained wiht it.
// console.log(numbers.find(e1=>e1%2==0)) //10. Will find the 1st element that is even. e1 is element, takes the element returns whether the element satisfies the condition or not. if satisfies then the element is returned.
// console.log(numbers.find((e1,index)=>e1)) //10
// console.log(numbers.find((e1,index)=>index)) //20
// console.group(numbers.find(e1=>e1%2 != 0)) //undefined since there is no element satisfing this condition




//? 3.filter():
//works same as find but instead of one element it returns an array containing every element that satisfies the condition.

// console.log(arr.filter(ele=>ele))// returns only the truthy values. excludes 0,null,undefined,"",'',etc....
// console.log(numbers.filter((ele,index)=>index))//returns all the element excluding the 0th index value because 0(index) is falsy value.
// console.log(numbers.filter(ele=>ele%2==0))//returns all the even number sin the array


//? 4.map():
//takes each and every element of ana array and returns whatever modification we've done on the element. It does not affect the origianl array, instead it returns a new array of same length with the modified values.
// let arr10=[1,2,3,4]
// console.log(arr10.map(ele=>{
//     if(ele%2==0){
//         return ele*ele
//     }
//     else{
//         return ele*ele*ele
//     }
// }))


//? 5.some():
//retruns true or false. returns whether any of the element in the array satisfies the given condition.
// const arr22=[1,2,3,4]
// console.log(arr22.some((ele)=>ele==6)) //fasle
// console.log(arr22.some((ele)=>ele==2)) //true


//? 6. every():
//same as some, retrurns true only if every element in the array satisifies the condition..
// const arr23=[2,4,6,8]
// console.log(arr23.every(ele=>ele%2==0)) //true
// console.log(arr23.every(ele=>ele%2==1)) //false



//? 7.reduce():
//accepts arrow function(accumulator,currentVal,arr)=>{},initial value.
//everything except acc,curr are optional. if initial value is not given, the 1st element of the array is taken as initial value as default.
//whatever we return, it becomes the next accumulator value. current Value is iterated through the array.
//accumulator can be anything, may it be number, array, object, etc..

//*sum of all the elements in the array
// const tarr15=[2,4,6,8,10]
// console.log(tarr15.reduce((acc,curr)=>acc+curr,0))




console.log("Tasks")

//!Tasks
let tarr1=[2,3,6,8,9,12,14,15]

//* numbers divisile by 3
console.log(tarr1.filter(ele=>ele%3==0))
//*numbers between 10 and 30
console.log(tarr1.filter(ele=>ele>10&&ele<30))

//*find the 1st negative number
let tarr2=[5,8,3,-2,7,-10]
console.log(tarr2.find(ele=>ele<0))

//*words more that 5 characters
const tarr3=["apple","banana","cat","elephant","dog","orange"]
console.log(tarr3.filter(ele=>ele.length>5))

//*first word starting with a
const tarr4=["dog","cat","apple","ant","ball"]
console.log(tarr4.find(ele=>ele.startsWith('a')))

//*filter words starting with b
const tarr5=['apple','banana','ball','cat','bat','dog']
console.log(tarr5.filter(ele=>ele.startsWith('b')))

//*first word containing e
const tarr6=['cat','dog','fish','apple','banana','eye']
console.log(tarr6.find(ele=>ele.includes('e')))

//*first number greater than 10 and divisible by 3
const tarr7=[4,9,11,14,18,21,25]
console.log(tarr7.find(ele=>ele>10 && ele%3==0))

//*first word starts with s and has more than 4 characters
const tarr8=['sun','star','sky','school','sea','street']
console.log(tarr8.find(ele=>ele.startsWith('s')&&ele.length>4))

//*number between 20 and 50 and odd
const tarr9=[15,21,24,27,32,35,42,49,55]
console.log(tarr9.filter(ele=>ele%2!=0 && ele>20 && ele<50))

//*arrange in asc order.
const tarr10=[35,12,98,45,67,10]
console.log(tarr10.sort((a,b)=>a-b))

//*return square of only the even number
const tarr11=[5,12,18,21,30,7]
console.log(tarr11.map(ele=>{
    if(ele%2==0)
        return ele*ele
    else
        return ele
}))

//*add 10 to every element in the array
const tarr12=[5,8,12,3,9,20,15]
console.log(tarr12.map(ele=>ele+10))

//*retrun only the string whose length is less than 5
let tarr13=["cat","elephant","dog","tiger","lion","ant"]
console.log(tarr13.filter(ele=>ele.length<5))

//*convert every string to uppercase
const tarr14=["java","python","javascript","c","cpp"]
console.log(tarr14.map(ele=>ele.toUpperCase()))

//*sum of all the elements in the array
const tarr15=[2,4,6,8,10]
console.log(tarr15.reduce((acc,curr)=>acc+curr,0))

//*rerturn the largest number in the array.
const tarr16=[12,25,7,40,18,55]
tarr16.sort((a,b)=>a-b)
console.log(tarr16[tarr16.length-1])
//Alternative
console.log(tarr16.reduce((acc,curr)=>acc>curr?acc:curr))

//*return only the strings that start with a vowel
const tarr17=["apple","banana","mango","kiwi","orange"]
console.log(tarr17.filter((ele)=>'AEIOU'.includes(ele.at(0).toUpperCase())))

//*count how many times each string appear
const tarr18=["apple","banana","apple","mango","banana","orange"]
console.log(tarr18.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1
    return acc;

},{}))


//*remove the duplicate elements frmo the array
const tarr25=[1,2,3,1,2,3,4,5,2,4]
console.log(tarr25.filter((ele,ind)=>{
    return tarr25.indexOf(ele)==ind
}))

//*return the longest string in the array
const tarr19=["apple","banana","mango","watermelon","papaya"]
console.log(tarr19.reduce((acc,curr)=>acc.length>curr.length?acc:curr))

//*return the length of each string
const tarr20=["HTML","CSS","Javascript","React"]
console.log(tarr20.reduce((acc,curr)=>{
    acc[curr]=curr.length
    return acc
},{}))

//*calculate the average of all numbers
const tarr21=[100,200,300,400,500]
console.log((tarr21.reduce((acc,curr)=>acc+curr,0))/tarr21.length)

//*return only the strings that ends with "ing"
const tarr22=["running","jumping","eat","playing","sleep","walking"]
console.log(tarr22.filter(ele=>ele.toLowerCase().endsWith('ing')))

//*increase every number by 10%
const tarr23=[100,200,300,400,500]
console.log(tarr23.map(ele=>ele+ele*10/100))

//*capitalize the first letter of every string
const tarr24=["jhon","jane","alex","sarah"]
console.log(tarr24.map(ele=>ele.at(0).toUpperCase()+ele.slice(1)))



//*task is to move all the 0's to the end of the array
// let arr11=[1,2,3,0,4,0,5,0,6] 
// console.log(arr11.filter(ele=>ele!=0).concat(arr11.filter(ele=>ele==0)))


//* task of 8th sep.
// let str="we are jspider students"
// console.log(str.split(' ').reverse().join(' '))
// let str2=str.split(' ').reverse().join(' ')
// let str3='';
// console.log(str.split('').reverse().join(''))
// str.split(' ').forEach((ele)=>{
//     str3=str3.concat(ele.split('').reverse().join(''),' ')
// })

