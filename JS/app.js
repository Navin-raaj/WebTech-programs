// console.log("JS first code.")

// ?Varaible creation
// var
// var a;
// a=10;
// console.log(a)
// a=20
// console.log(a)
// var a=50;
// console.log(a)

// let

// let a;
// a=10;
// console.log(a)
// a=20
// console.log(a)
// let a=50; //let wont allow redeclaration like var
// console.log(a)

// const
// const a; //const does not allow initialization,declaration,redeclaration. it only allows initialization and declaration at the same line.
// a=10;
// console.log(a)
// a=20
// console.log(a)
// const a=50;
// console.log(a)
 
//? Looping statements
// for(let i=1;i<101;i++){
//     console.log('blahhh blahhh blahh')
// }

// let i=1
// while(i<101){
//     console.log('wahhh wahh wahh')
//     i++
// }

// let y=1;
// do{
//     console.log('achoo achooo achooo')
//     y++
// }while(y<101)

// console.log(('Navin Raaj'.replaceAll('a','i')).replaceAll('i','a'))
// console.log('Navin'.toUpperCase())
// console.log('Navin'.toLowerCase())
// console.log('javascript'.slice(0,4)) //java
// console.log('javascript'.slice(4)) //script
// console.log('javascript'.slice(6,2)) //empty string
// console.log('javascript'.slice(-4,-1)) //rip




//? String methods
// 1. .replace('string to replace','String to be replaced with') -- replaces only the first occuring string.
// 2. .replaceAll('string to replace','String to be replaced with') -- replaces all the occuring string.
// 3. .toUpperCase() -- converts and returns the string in uppercase.
// 4. .toLowerCase() -- converts and returns the string in lower case.
// 5. .slice(startIndex,endIndex(excluded)) -- extract some portion of original string(substring).
// 6. .concat(string) -- merge the strings given.
// 7. .toString() -- converts the datattype to string except null and undefined.
// 8. .split("seperator") -- converts the string into array with the help of seperator. seperator is not included in the array.
// 9. .indexOf("string") -- prints the index of first occuring matching string.
// 10. .lastIndexOf('String') -- prints the index of last occuring matching string.
// 11. .includes('string') -- checks whether the string has the specified string in it and returns true or false.
// 12. .charAt(index)  -- returns the character or string in the specified index
// 13. .startsWith('string') -- checks whether the string starts with the specified string. is case sensitive.
// 14. .endsWith('string')  -- checks whether the string ends wiht the specified string.
// 15. .repeat(count) -- count should be in integer if given in decimal it will convert in into integer and repeat the string that number of times. count should be in positive always.
// 16. .trim() -- deletes the white space from the beginning and end of the string.
// 17. .trimStart() -- deletes the white space from the beginning of the string.
// 18. .trimEnd() -- deletes the white space from the end of the string.




// let str='hello'
// let str2='world'
// let a=10;
//? contcat()
// console.log(str.concat(" ",str2," From the other side."))  //hello world From the other side.

//?toString()
// console.log(typeof a) //number
// console.log(a.toString()) //10
// console.log(typeof a.toString()) //String

//?split()
// let str3='javaScript'
// console.log(str3.split())  //['javaScript']
// console.log(str3.split(""))  //['j', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
// console.log(str3.split('a')) // ['j', 'v', 'Script']

//? indexof()
// console.log(str3.indexOf('java')) //0
// console.log(str3.indexOf('a'))  //1
// console.log(str3.indexOf('h'))  //-1

//? lastIndexOf()
// console.log(str3.lastIndexOf('j')) //0
// console.log(str3.lastIndexOf('a')) //3

//? includes()
// console.log(str3.includes('java'))
// console.log(str3.includes('javass'))

//? charAt()
// console.log(str3.charAt(4))  //v
// console.log(str3.charAt(100)) // empty string
// console.log(str3.charAt(2,4)) //only returns the char present in 2nd index, neither gives error nor cosider the 4th index no matter what

//? startsWith()
// console.log(str3.startsWith('ja'))  //true
// console.log(str3.startsWith('J')) //false

//? endsWith()
// console.log(str3.endsWith('a')) //false
// console.log(str3.endsWith('pt')) //true
// console.log(str3.endsWith('t')) //true

//?repeat()
// console.log(str3.repeat(3)) //javaScriptjavaScriptjavaScript
// console.log(str3.repeat(3.5)) //javaScriptjavaScriptjavaScript
// console.log(str3.repeat(-3)) //RangeError








