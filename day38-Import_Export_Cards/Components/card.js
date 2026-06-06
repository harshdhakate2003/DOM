function card(image,title,category,price){

        let card = document.createElement("div")
        card.setAttribute("class","card")

        let img = document.createElement("img")
        img.src = image

        let name = document.createElement("h3")
        name.innerText = title

        let cate = document.createElement("h3")
        cate.innerHTML = category

        let p = document.createElement("h3")
        p.innerHTML = price

        card.append(img,name,cate,p)
        
        return card
}

export default card ;