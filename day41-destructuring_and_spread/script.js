import calculator from "./calculator.js";

// import {add,sub} from "./calculator.js"

// -------------Destructuring---------------------

// let std1={
//     name:"harsh",
//     age:23,
//     city:'nagpur',
//     email:"h@gmail.com"
// }

// let {name,age,city,email} = std1

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(email);

// -----------------------------------------------

// console.log(calculator)

// let {add,sub,mul,div} = calculator

// console.log(add,sub,mul,div)
// console.log(add(10,90))
// console.log(sub(100,90))

// ---------------------------------------------------

// let arr=["mango","apple","orange","grapes","pineapple","kacchaMango","kiwi"]

// console.log(arr)

// let [harsh,ayush,mahesh,...remain] = arr
// console.log(harsh)
// console.log(ayush)
// console.log(mahesh)
// console.log(remain)

//----------------------------------------------------

//--------------Spread Operator--------------------------

// let fruits1=["mango","apple","orange","grapes","pineapple","kacchaMango","kiwi"]
// let fruits2=["chiku","straberry","sitafal","dragonfruit","lichi"]

// let allFruits = [...fruits1,...fruits2]
// console.log(allFruits)


// fruits1=[...fruits1,...fruits2]
// console.log(fruits1)


//-------------------------------------------------------------

let std1={
    name:"harsh",
    age:23,
    city:'nagpur',
    email:"h@gmail.com"
}
let marks={
    math:80,
    sci:90,
    eng:75
}

let allDetails = {...std1,...marks}
console.log(allDetails)