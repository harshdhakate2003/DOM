let count=document.getElementById("count")
let c=0
count.innerText=c

let incBtn=document.getElementById("incBtn")
let decBtn=document.getElementById("decBtn")
let xyz=document.getElementById("xyz")

let limit=10


function inc(){
    c++
    count.innerText=c
    changecolor(c)
    count.style.fontSize=`${40+(c*2)}px`

    if(c>=limit)
    {
        incBtn.disabled=true
    }
    if(c>-limit)
    {
        decBtn.disabled=false
    }
    
    count.style.fontSize=`${40+(c*2)}px`
    xyz.style.width=`${150+(c*10)}px`
    xyz.style.height=`${150+(c*10)}px`
}


function dec(){
    c--
    count.innerText=c
    changecolor(c)

    if(c<limit)
    {
        incBtn.disabled=false
    }
    if(c<=-limit)
    {
        decBtn.disabled=true
    }

    count.style.fontSize=`${40+(c*2)}px`
    xyz.style.width=`${150+(c*10)}px`
    xyz.style.height=`${150+(c*10)}px`

}


function setlmt(l){
    limit=l
    incBtn.disabled=false
    decBtn.disabled=false
}


function changecolor(num){

    let a = Math.abs(num)

    if(a%10==1){
        count.style.color="red"
    }
    else if(a%10==2){
        count.style.color="green"
    }
    else if(a%10==3){
        count.style.color="purple"
    }
    else if(a%10==4){
        count.style.color="yellow"
    }
    else if(a%10==5){
        count.style.color="grey"
    }
    else if(a%10==6){
        count.style.color="orange"
    }
    else if(a%10==7){
        count.style.color="pink"
    }
    else if(a%10==8){
        count.style.color="blue"
    }
    else if(a%10==9){
        count.style.color="brown"
    }
    else if(a%10==0){
        count.style.color="aqua"
    }
}

