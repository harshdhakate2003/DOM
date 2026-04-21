let aa=document.getElementById("alpha")
console.log(aa)

let bb=document.getElementsByClassName("gama")
console.log(bb)

let cc=document.getElementsByTagName("h1")
console.log(cc)


// dom -> document object model (html+css+js) we can manage html ans css with the help of js 
// document  -> refers to current html web page

// when ever i want to change html document
// 1-> get elemet by id  -> it will bring me the first elemnt with the id found
// 2-> get element by className -> it will bring all the elements present in the html file wit the class specified
// in the format of html collections
// 3-> getelementby tag-> it will bring all the tags available in my html file in the format of html collection
// 4-> query selector -> it can be use for all ie id, class, tag , but it will return only one element that is found first 
// 5-> query selector All -> it will bring all the elemnts specified or that are available in the html file

// inner text , innerHTML 
// innerText ->  it will repalce the old text available ,it is use to add text betn the html tags
// innerHTML -> to add an HTML element inside any of the tag
