// Higher order function
// A function that takes one or more function as an argument or returns a function

//------------------------------------------------------------------------------------
// forEach function

// forEach(abcd)
// element-> individual element of an arr
/// index -> index of that element
// arr-> complete arr
// function abcd(element,index,arr){
// }

//------------------------------------------------------------------------------------

// let fruits=["mango","apple","orange","kiwi","watermelon","banana","pineapple"]

// fruits.forEach(abc)

// function abc(el,ind,arr)
// {
//     console.log(el,ind,arr)
// }

//----------------------------------------------------------------

let num=[1,2,3,4,5,6]

num.forEach(alpha)

function alpha(el,ind,arr)
{
    console.log(el*10)
}