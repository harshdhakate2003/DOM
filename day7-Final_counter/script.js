c=0
let limit=10
let count=document.getElementById("count")
let incBtn=document.getElementById("incBtn")
let decBtn=document.getElementById("decBtn")
count.innerText=c

let color=["orange","cyan","green","blue","purple","grey"]
let i=0
count.style.color=color[i]



function inc(){
    c++
    count.innerText=c
    
    if(c>=limit){
        incBtn.disabled=true
    }

    if(c>-limit){
        decBtn.disabled=false
    }

    i++
    count.style.color=color[i]

    if(i>=color.length-1)
    {
        i=0
    }
}

function dec(){

    c--
    count.innerText=c

    if(c<limit){
        incBtn.disabled=false
    }

    if(c<=-limit){
        decBtn.disabled=true
    }


    i--
    count.style.color=color[i]
    
    if(i<0)
    {
        i=color.length-1
    }

}

function setlmt(l)
{
    limit=l
    incBtn.disabled=false
    decBtn.disabled=false
}