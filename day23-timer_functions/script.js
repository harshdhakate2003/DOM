// setTimeout() -> it calls the callback only once when the delay is finished

let container = document.getElementById("container")
let count = document.getElementById("count")
// let inter = document.getElementById("inter")

let bImage = document.createElement("img")
bImage.src="https://media.tenor.com/niC6wk8TvlkAAAAM/kozhi-nuclear-bomb.gif"

let dImage = document.createElement("img")
dImage.src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyamV4aXplMng5d3R5OTRhano5ZzZpaWQ1Z2ZrY213YmQzcXM4bXVzMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RVFkBglC4vkXbVxgJs/200w.gif"


let abc = setTimeout(blast,3000)

function blast()
{
    container.append(bImage)
}

function dispose()
{
    clearTimeout(abc)
    container.append(dImage)
}


// setInterval -> it will contui call the calllback  after ever delay


let i=0

let counter
function start()
{
    counter =  setInterval(function(){
        count.innerText = ++i
    },1000)
    
}

function stop()
{
    clearInterval(counter)
    console.log("Timer Stops")
}

