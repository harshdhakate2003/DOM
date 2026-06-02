let type = document.getElementById("type")
let searchInp = document.getElementById("searchInp")
let container = document.getElementById("container")

let searchBtn = document.getElementById("searchBtn")
    searchBtn.addEventListener("click",doSearch)

let filterBtn = document.getElementById("filterBtn")
    filterBtn.addEventListener("click",doFilter)

let sortByAge = document.getElementById("sortByAge")
    sortByAge.addEventListener("change",doSort)

async function doSearch(){
    try{
        let selectVal = type.value
        let inputVal = searchInp.value

        let data = await fetch(`http://localhost:3000/user?${selectVal}:contains=${inputVal}`)
        let actualData = await data.json()

        if(actualData.length == 0){
            throw "no user found with this details"
        }

        mapData(actualData)

    }catch(error){
        alert(error)
    }
}



async function getMapData(){
    let data = await fetch("http://localhost:3000/user")
    let actualData = await data.json()

    mapData(actualData)
    console.log(actualData)

}

getMapData()


function mapData(arr){
    container.innerHTML=""

    arr.forEach(function(el,i,arr){
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let name = document.createElement("h2")
        name.innerText=el.name

        let age = document.createElement("h2")
        age.innerText=el.age
        
        let city = document.createElement("h2")
        city.innerText=el.city

        card.append(name,age,city)
        container.append(card)
    });
}

async function doFilter(){
    let inpVal = document.getElementById("filterInp").value
    let selectVal = document.getElementById("filter").value

    let data = await fetch(`http://localhost:3000/user?age:${selectVal}=${inpVal}`)
    let actualData = await data.json()

    mapData(actualData)
}

async function doSort(){
    let sVal = document.getElementById("sortByAge").value

    try {
        let data = await fetch(`http://localhost:3000/user?_sort=${sVal}`)
        let actualData = await data.json()   
        
        mapData(actualData)

    } catch (error) {
        alert("something is wrong")
    }
}