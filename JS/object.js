//!Object
//object are like arrays witht the identifier peresent for each values.


//?object declaration using literals
let obj={
    sname:'abc',
    sid:123,
    semail:'abc@gmail.com',
    s_phno:12345,
    address:{
        street:'xyz',
        area:'bng',
        pin:987

    },
}

//?object declaration using new keyword.
// let obj2=new Object() //this will create an empty object.

let obj2=new Object({
    name:'navin',
    roll:9
})
// console.log(obj2)


//? object creation using constructor
//* before es6 (using constructor function)
// function person(name,salary,role){
//     this.name=name
//     this.salary=salary
//     this.role=role
// }
// let p1=new person('navin',50000,'java developer');
// console.log(p1)


//* after es6 (using class)
// class Student{
//     constructor(name,salary,role){
//         this.name=name
//         this.salary=salary
//         this.role=role
//     }
// }

// let s1=new Student("aditya",696969,'civil engineer')
// let s2=new Student("aditya",696969,'civil engineer')
// console.log(s1)
// console.log(s2)



//?accessing object element
// console.log(obj.sname)
// console.log(obj["sname"]) //if the key is string " is to be used."
// console.log(obj.address.street)
// console.log(obj["adress"]["street"])//error
// obj.name=123// if we want to access nested key value, . operator is to be used. like for eg to access street only '.' can be used.
// console.log(obj.name)
// obj["name"]=234 //if we want to use value inside a variable, we should only use [],'.' opertaor does not work with that.  '.' operator takes the variable name as the key name literaly instead of the value inside the variable.
// console.log(obj["name"])

//? modify
// obj.sname="xyz"
// console.log(obj.sname)
// obj.address.street='abc'
// console.log(obj.address.street)

//?delete 
// delete obj.sname
// console.log(obj)


// const obj2={
//     1:1,
//     2:2
// }
// const obj3=obj2 //reference is copied and stored. so if we modify the properties through obj3, obj2 will also be affected.


//!Object methods

//? 1.keyS()
//gives us only the keys of the object
//retuens an array of the keys
console.log(Object.keys(obj))

//? 2.values()
// givesw us only the values of the object
//returns an array of the values
console.log(Object.values(obj))

//? 3.assign(target,sources)
//concates two array
const obj4={
    name:"navin",
    age:22
}
// const obj5={
//     loc:'bang',
//     clg:'jsp'
// }
// console.log(Object.assign(obj4,obj5))   //no matter in which order we give, the keys will always be arranged in the alphabetic order. It works but is not recommended
// console.log(Object.assign({},obj4,obj5))//recommended

//? 4.seal()
//prevents the obj from addding or deleting properties
// Object.seal(obj4) //allows modificatoin of the existing object. All sealed objects are not frozen.
// obj4.name='nivan'
// obj4.loc='bang'
// delete obj4.loc
// console.log(obj4)

//? 5.freeze():
//will prevent from adding,deleting and modifying the objects properties.
//all frozen objects are sealed.
// Object.freeze(obj4)
// obj4.loc="bang"
// obj4.name='nivan'
// console.log(obj4)

//? 6.isSealed()
//returns whether an object is sealed or not. even frozen objects are considered sealed.
// const obj5={
//     1:1,
//     2:2,
//     3:3
// }
// Object.seal(obj5)

// const obj6={
//     2:3,
//     1:2,
//     3:4
// }
// Object.freeze(obj6)

// console.log(Object.isSealed(obj6)) //true
// console.log(Object.isFrozen(obj6)) //true
// console.log(Object.isSealed(obj5)) //true
// console.log(Object.isFrozen(obj5)) //false






