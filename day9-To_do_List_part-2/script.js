let inpTag=document.getElementById("task")
let list=document.getElementById("list")

let color=["orange","cyan","green","blue","purple","grey"]
let i=0


function addtodo(){
    let data=inpTag.value
    let li=document.createElement("li")
    li.innerText=data
    list.append(li)
    inpTag.value=""

    li.style.color=color[i]
    i++

    if(i>color.length-1)
    {
        i=0
    }
}