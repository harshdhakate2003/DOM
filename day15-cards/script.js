let container=document.getElementById("container")

let prod1={
    image:"https://images.meesho.com/images/products/342688423/lgcwv_512.avif?width=360",
    tittle:"Truck Toy",
    price:180,
    delivary:"Free Delivary",
    rating:3.7,
    review:24009
}

let prod2={
    image:"https://images.meesho.com/images/products/543307766/wnqnh_512.avif?width=360",
    tittle:"Block Toy",
    price:118,
    delivary:"Free Delivary",
    rating:4.2,
    review:2470
}

let prod3={
    image:"https://images.meesho.com/images/products/454259686/ebsxq_512.avif?width=360",
    tittle:"Trendy Musical Toys",
    price:260,
    delivary:"Free Delivary",
    rating:4.3,
    review:50701
}

let prod4={
    image:"https://images.meesho.com/images/products/450336648/pyckl_512.avif?width=512",
    tittle:"Eessential Block Toy",
    price:104,
    delivary:"Free Delivary",
    rating:4.2,
    review:3618
}


let prod5={
    image:"https://images.meesho.com/images/products/321697340/bqlj7_512.avif?width=360",
    tittle:"Car Toy",
    price:188,
    delivary:"Free Delivary",
    rating:3.9,
    review:5218
}


let prod6={
    image:"https://images.meesho.com/images/products/392288867/qg9sn_512.avif?width=360",
    tittle:"Tinkel Kids Musical Toys",
    price:225,
    delivary:"Delivary ₹102",
    rating:4.5,
    review:3798
}



let prodArr=[prod1,prod2,prod3,prod4,prod5,prod6]

prodArr.forEach(appendData)

function appendData(el,i,arr)
{
    let card=document.createElement("div")
    card.setAttribute("class","card")

    let topDiv=document.createElement("div")
    topDiv.setAttribute("class","topDiv")

    let image=document.createElement("img")
    image.src=el.image

    let btmDiv=document.createElement("div")
    btmDiv.setAttribute("class","btmDiv")

    let tittle=document.createElement("h3")
    tittle.setAttribute("class","tittle")
    tittle.innerText=el.tittle

    let price=document.createElement("h2")
    price.setAttribute("class","price")
    price.innerText=`₹${el.price}`

    let free=document.createElement("p")
    free.setAttribute("class","free")
    free.innerText=el.delivary

    let rateDiv=document.createElement("div")
    rateDiv.setAttribute("class","rateDiv")
    rateDiv.innerText=el.rating

    let review=document.createElement("p")
    review.setAttribute("class","review")
    review.innerText=`${el.review} Reviews`

    topDiv.append(image)
    btmDiv.append(tittle,price,free,rateDiv,review)
    card.append(topDiv,btmDiv)
    container.append(card)
}







