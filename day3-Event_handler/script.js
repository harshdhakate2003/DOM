// let count=document.getElementById("count")

// count.innerText=500

// let div=document.getElementById("box")
// div.innerHTML="<h1>This is h1 tag</h1>"
// div.innerHTML='<img src="https://rukminim2.flixcart.com/fk-p-flap/3240/1580/image/ca9ee3c84435ff40.jpg?q=60" alt="">'


let i=0
count=document.getElementById("count")
count.innerText=i

function increase(){
    i++
    count.innerText=i
}

function decrease(){
    i--
    count.innerText=i
}