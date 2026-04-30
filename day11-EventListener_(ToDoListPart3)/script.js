let inpBox=document.getElementById("inpBox")
let priority=document.getElementById("priority")
let taskTable=document.getElementById("taskTable")

let addBtn=document.getElementById("addBtn")
addBtn.addEventListener("click",btnPress)

let srno=1

function btnPress()
{
    sr=srno++
    data=inpBox.value
    prio=priority.value

    console.log(sr,data,prio)

    let sr_td=document.createElement("td")
    sr_td.innerText=sr

    let task_td=document.createElement("td")
    task_td.innerText=data

    let prio_td=document.createElement("td")
    prio_td.innerText=prio

    let status_td=document.createElement("td")
    status_td.innerText="not available"

    let tr=document.createElement("tr")
    tr.append(sr_td,task_td,prio_td,status_td)

    taskTable.append(tr)

    inpBox.value=""
    priority.value="none"
}

