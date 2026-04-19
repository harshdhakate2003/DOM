let aaa=document.getElementById("alpha")
aaa.innerText="This is h1 tag"

let bbb=document.getElementsByClassName("beta")
console.log(bbb)
bbb[0].innerText="This is changed"
bbb[1].innerText="This is changed 2"

let allH1=document.getElementsByTagName("h1")
console.log(allH1)
allH1[4].innerText="This is changed by tag name"

let apple=document.querySelector("#alpha")
console.log(apple)

let pqr=document.querySelector(".beta")
console.log(pqr)

let qqq=document.querySelectorAll(".beta")
console.log(qqq)

let zzz=document.querySelectorAll("#money")
console.log(zzz)