let container=document.getElementById("container")

let abc=document.createElement("ol")

let item1=document.createElement("li")
item1.innerText="Harsh"

let item2=document.createElement("li")
item2.innerText="Ayush"

let item3=document.createElement("li")
item3.innerText="Mahesh"

let item4=document.createElement("li")
item4.innerText="Aditya"

abc.append(item1,item2,item3,item4)

container.append(abc)