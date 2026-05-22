let container = document.getElementById("container")
let prev = document.getElementById("prev")
    prev.addEventListener("click",back)
let next = document.getElementById("next")
    next.addEventListener("click",forward)

let images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/74_1x._CB783716748_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/yesbank/makeup_PC._CB796616147_.png",
    "https://images-eu.ssl-images-amazon.com/images/G/31/Img26/Sports/April/KSS/GW/Legacy_PC/New/GW_april_3000._CB782314143_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78268._CB785061629_.jpg"
]

let img = document.createElement("img")
    img.src = images[0]
    container.append(img)

let index = 1

function forward(){
    container.innerHTML=""

    if(index>=images.length)
    {
        index=0
    }
    let img = document.createElement("img")
    img.src = images[index++]
    container.append(img)
}


function back(){
    container.innerHTML=""

    if(index<=0)
    {
        index=images.length-1
    }
    let img = document.createElement("img")
    img.src = images[index--]
    container.append(img)   
}

setInterval(function(){
    forward()
},3000)

