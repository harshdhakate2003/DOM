let container = document.getElementById("container")


async function getData()
{
    try{
        data = await fetch ("http://localhost:3000/product");
        let actualData = await data.json();
        console.log(actualData)
        mapData(actualData)
    }
    catch(error)
    {
        console.log(error)
        let link = "https://cdn-icons-gif.flaticon.com/18534/18534805.gif"
        appendImg(link)
    }
}
getData()


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

function appendImg(link)
{
    let image = document.createElement("img")
    let note = document.createElement("h1")
    note.setAttribute("id","note")

    note.innerHTML="LINK IS BROKEN"
    image.src = link

    container.append(note)
    container.append(image)
}