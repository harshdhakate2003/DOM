import card from "./Components/card.js"

let container = document.getElementById("container")

async function getData(){
    let data = await fetch("http://localhost:3000/products")
    let actualData = await data.json()

    mapData(actualData)
}
getData()

function mapData(arr){
    container.innerHTML = ""

    arr.forEach((el,i,arr)=>{
        let abc = card(el.image,el.title,el.category,el.price)
        container.append(abc)
    })
}