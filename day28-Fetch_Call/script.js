let container = document.getElementById("container")

async function getData(){
    let data = await fetch("https://fakestoreapi.com/products")
    let actualData = await data.json()

    console.log(actualData)
    appendData(actualData)
}

getData()

function appendData(arr){

    arr.forEach(function(el,i,arr)
    {
        let card=document.createElement("div")
        card.setAttribute("class","card")

        let topDiv=document.createElement("div")
        topDiv.setAttribute("class","topDiv")

        let image=document.createElement("img")
        image.src=el.image

        let btmDiv=document.createElement("div")
        btmDiv.setAttribute("class","btmDiv")

        let title=document.createElement("h3")
        title.setAttribute("class","title")
        title.innerText=el.title

        let category=document.createElement("h4")
        category.setAttribute("class","category")
        category.innerText=`Category - ${el.category}`

        let price=document.createElement("h3")
        price.setAttribute("class","price")
        price.innerText=`Price - ${el.price}`

        let description=document.createElement("p")
        description.setAttribute("class","description")
        description.innerText=el.description

        topDiv.append(image)
        btmDiv.append(title,category,price,description)
        card.append(topDiv,btmDiv)
        container.append(card)
    })

}