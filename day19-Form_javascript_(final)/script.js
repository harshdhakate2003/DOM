let container=document.getElementById("container")

let prodForm=document.getElementById("prodForm")
    prodForm.addEventListener("submit",function(){
        addData()
        prodForm.reset()
    })

let products=[]

function addData()
{
    event.preventDefault()

    let title=prodForm.ptitle.value
    let price=prodForm.pprice.value
    let image=prodForm.pimage.value
    let description=prodForm.pdescription.value
    let category=prodForm.pcategory.value
    
    let obj={
        title,
        price,
        image,
        description,
        category
    }

    products.push(obj)
    // console.log(products)
    mapData(products)
}

function mapData(arr)
{
    container.innerHTML=""

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





