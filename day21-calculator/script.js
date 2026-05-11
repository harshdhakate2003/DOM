let curr = document.getElementById("curr")
let operation = document.getElementById("operation")
let prev = document.getElementById("prev")

function handelClick(val){
    let btnVal=val

    if(typeof(btnVal)=="number")
    {
        curr.append(btnVal)
    }
    else if(btnVal=="+"){
        operation.innerText=btnVal
        prev.innerText=curr.innerText
        curr.innerText=""
    }
    else if(btnVal=="-"){
        operation.innerText=btnVal
        prev.innerText=curr.innerText
        curr.innerText=""
    }
    else if(btnVal=="*"){
        operation.innerText=btnVal
        prev.innerText=curr.innerText
        curr.innerText=""
    }
    else if(btnVal=="/"){
        operation.innerText=btnVal
        prev.innerText=curr.innerText
        curr.innerText=""
    }
    else if(btnVal=="="){
        let curVal = Number(curr.innerText)
        let prevVal = Number(prev.innerText)
        let opVal = operation.innerText

        switch (opVal) {
        case "+": curr.innerText = prevVal + curVal 
            break
        case "-": curr.innerText = prevVal - curVal 
            break
        case "*": curr.innerText = prevVal * curVal 
            break
        case "/": curr.innerText = prevVal / curVal 
            break
        }

        prev.innerText = ""
        operation.innerText = ""
    }   

}