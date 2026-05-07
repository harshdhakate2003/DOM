let prodForm=document.getElementById("prodForm")
    prodForm.addEventListener("submit",function(){
        addData()
    })


let products=[]

function addData()
{
    event.preventDefault()

    let title=document.getElementById("title").value
    let price=document.getElementById("price").value
    let image=document.getElementById("image").value
    let category=document.getElementById("category").value
    let description=document.getElementById("description").value

    let obj={
        productTitle:title,
        productPrice:price,
        productImage:image,
        productCategory:category,
        productDescription:description
    }

    products.push(obj)

    document.getElementById("title").value=""
    document.getElementById("price").value=""
    document.getElementById("image").value=""
    document.getElementById("category").value="none"
    document.getElementById("description").value=""

    console.log(products)
}
