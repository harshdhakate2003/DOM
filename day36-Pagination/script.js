let baseUrl = "http://localhost:3000"
let endPoint =  "products"
let per_page = 4
let page = 1
let pageBtn = false

let btnDiv = document.getElementById("btnDiv")
let container = document.getElementById("container")

getData(page)
async function getData(value){
    let data = await fetch(`${baseUrl}/${endPoint}?_page=${value}&_per_page=${per_page}`)
    let actualData = await data.json()

    if(!pageBtn)
    {
        createBtn(actualData.pages)
        pageBtn=true
    }
    // console.log(actualData)
    mapData(actualData)
}

function createBtn(count){

    for(let i=1;i<=count;i++)
    {
        let btn = document.createElement("button")
        btn.value = i
        btn.innerText = i
        btn.addEventListener("click",getBtn)
        btn.setAttribute("class","pageBtn")
        btnDiv.append(btn)
    }
}

function getBtn(event)
{
    let val = event.target.value
    getData(val)
}


function mapData(obj){
    container.innerHTML=''

    let arr = obj.data

    arr.forEach(function(el,i,arr){
        console.log(el)

        let card = document.createElement("div")
        card.setAttribute("class","card")

        let topDiv = document.createElement("div")
        topDiv.setAttribute("class","topDiv")

        let image = document.createElement("img")
        image.src=el.image
        
        let btnDiv = document.createElement("div")
        btnDiv.setAttribute("class","btnDiv")

        let title = document.createElement("h3")
        title.innerText=el.title

        let category = document.createElement("h4")
        category.innerText=el.category

        let rating = document.createElement("h5")
        rating.innerHTML = `<i class="fa-solid fa-star"></i> `;
        rating.append(el.rating.rate);

        let review = document.createElement("h5")
        review.innerHTML=`${el.rating.count} Reviews`

        let price = document.createElement("h3")
        price.innerText=`₹ ${el.price}`

        let cardBtn = document.createElement("button")
        cardBtn.innerText = "ADD TO CART"
        cardBtn.setAttribute("class","cardBtn")

        topDiv.append(image)
        btnDiv.append(title,category,rating,review,price)
        card.append(topDiv,btnDiv,cardBtn)
        container.append(card)
    })
    
}
