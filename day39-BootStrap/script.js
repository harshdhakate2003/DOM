let navForm = document.getElementById("navForm")
    navForm.addEventListener("submit",getData)
let pqr = document.getElementsByClassName("pqr")

function getData(){
    let navValue = navForm.abc.value
    console.log(navValue)
}

console.log(pqr)