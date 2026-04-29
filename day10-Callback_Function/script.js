// Types of functions
// There are 3 types of function

// 1) Normal function

function demo(x)
{
    console.log(x**3)
}
demo(2)


// 2) ananomas function - Function without name

let abc=function(){
    console.log("This is abc")
}
abc()


// 3) Arrow function

let pqr=()=>{
    console.log("This is pqr")
}
pqr()


let xyz=()=> "This is xyz"

console.log(xyz())


// Callbackfunctions - When a function is passed as an argument to another function then its is known as callback function

function printKaro(xyz)
{
    console.log(xyz(5,5))
}
printKaro(addKaro)

function addKaro(x,y)
{
    return x+y
}

