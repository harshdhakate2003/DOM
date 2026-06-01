let userForm = document.getElementById("userForm")
    userForm.addEventListener("submit",getData)

let updateForm = document.getElementById("updateForm")
    updateForm.addEventListener("submit",updateData)

let delBtn = document.getElementById("delBtn")
    delBtn.addEventListener("click",deleteData)


function getData(){
    let name = userForm.name.value
    let age = userForm.age.value
    let city = userForm.city.value

    let obj = {name,age,city}

    prodAdd(obj)
}


async function prodAdd(obj){
    try{
        await fetch ("http://localhost:3000/user",{
            method : "Post",
            body : JSON.stringify(obj),
            headers : {
                "Content-Type":"application/json"
            }
        })
    }catch(err)
    {
        console.log("something is wrong")
    }
}


async function getUserData(){
    let userId = document.getElementById("userId").value

    let data = await fetch(`http://localhost:3000/user/${userId}`)
    let actualData = await data.json()

    updateForm.name.value=actualData.name
    updateForm.age.value=actualData.age
    updateForm.city.value=actualData.city
}


async function updateData(){

        let userId = document.getElementById("userId").value

        let name = updateForm.name.value
        let age = updateForm.age.value
        let city = updateForm.city.value

        let obj = {name,age,city}
        
        try{
            await fetch(`http://localhost:3000/user/${userId}`,{

                method : "PUT",
                body : JSON.stringify(obj),
                headers : {
                    "Content-Type" : "application/json"
                }
            })    
        }
        catch(err){
            console.log("Something is wrong")
        }
}


async function updatePut(){
    obj = {
        name : "Tiya"
    }

    try{
        await fetch("http://localhost:3000/user/1",{

            method : "PUT",
            body : JSON.stringify(obj),
            headers : {
                "Content-Type":"application/json"
            }
        })
    }catch(err){
        console.log("something is wrong")
    }
}

async function deleteData(){
    let delId = document.getElementById("delId").value

    try {
        let data = await fetch(`http://localhost:3000/user/${delId}`,{
            method : "DELETE"
        })

        let actualData = await data.json()

        alert(`The data of ${actualData.name} is deleted`)

    } catch (error) {
        console.log("something went wrong")
    }
}