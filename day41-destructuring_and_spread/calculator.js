function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    return a/b
}


let calculator = {add,sub,mul,div}
// console.log(calculator)

export default calculator;

export {add,sub,mul,div};