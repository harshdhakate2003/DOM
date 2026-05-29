let ProdForm = document.getElementById("ProdForm")
ProdForm.addEventListener("submit",getData)


function getData(){

    event.preventDefault()
        
    let name = ProdForm.Pname.value
    let img = ProdForm.Pimg.value
    let category = ProdForm.Pcategory.value
    let price = ProdForm.Pprice.value
    let description = ProdForm.Pdescription.value

    let obj = {
        name,img,category,price,description
    }

    postData(obj)

    ProdForm.reset()
    
}

async function postData(data){
    try{
        await fetch("http://localhost:3000/products",
        {

        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }

        })
    }catch(err){
        alert("Something is wrong")
    }
}