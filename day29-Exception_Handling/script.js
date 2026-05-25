let inp = document.getElementById('age')
let box = document.getElementById("box")

function verifyAge(){
    let age = Number(inp.value)
    try{
        if(age<15 || age>35)
        {
            throw "Age is not valid"
        }
        else{
            console.log("You are fine for jump")
            let img = "https://i.makeagif.com/media/4-09-2019/NZo7-Q.gif"
            boxImg(img)
        }
        }
    catch(error){
        console.log(error)
        let img = "https://gifzz.com/storage/gifs/EsuD03gIqEdBcVD00fiWyA94diJZazu09SQiWYv2.gif"
        boxImg(img)
    }
    finally{
        console.log("thank you visit again")
    }
}

function boxImg(img){
    box.innerHTML=""
    let picture = document.createElement("img")
    picture.src = img
    box.append(picture)
}