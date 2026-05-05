let container=document.getElementById("container")

let prod1={
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPO2-ecPWY1EcPN8Casm77mtR7qhUhIPK_4g&s",
    tittle:"Virat Kohli",
    job:"Virat Kohli is a legendary Indian cricketer known as the run-machine for his extraordinary consistency, immense passion, and unmatched ability to dominate chases in international cricket",
    age:"37",
}

let prod2={
    image:"https://i.pinimg.com/736x/4f/8e/9a/4f8e9a7e824b0f3fde656700806dc90d.jpg",
    tittle:"MS Dhoni",
    job:"Mahendra Singh Dhoni, affectionately known as 'Captain Cool', is a legendary Indian cricketer who revolutionized leadership in the sport by becoming the only captain in history to win all three major ICC limited-overs trophies",
    age:"44",
}

let prod3={
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrpoqw4wl682o8c3SlsueXtzLKGw-ObTxvycJnqgZHJdjTTOsjyc5U3tyftbH-mVsSnbccUC47MVpgOCRlLho8VHoblDwaTFANIV7Rw&s=10",
    tittle:"Rohit Sharma",
    job:"Rohit Sharma, known as the Hitmam is an iconic Indian cricketer celebrated as one of the greatest opening batters in ODI history, holding records for the highest individual score (264) and three double centuries",
    age:"38",
}

let prod4={
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZZZM4ScP_QhrGrAE2amdkJMiTFJkO4zykQ&s",
    tittle:"Sanju samson",
    job:"Sanju Samson is a stylish and explosive Indian wicketkeeper-batter known for his effortless strokeplay, immense power-hitting, and ability to hit consecutive T20I centuries",
    age:"31",
}

let prod5={
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t9NgaaMr_K3STj88l420DKdM-jgovP0KbQ&s",
    tittle:"Abhishek sharma",
    job:"Abhishek Sharma is a swashbuckling left-handed opener from Punjab, known for his fearless batting and record-breaking strike rates for Sunrisers Hyderabad and India.",
    age:"25",
}


let prod6={
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdAiqPtcrKGuT46r32XAxBfmWNlKIoe2ZzA&s",
    tittle:"Shivam dubey",
    job:"Shivam Dube is a dynamic left-handed all-rounder and 2024 T20 World Cup winner, renowned for his clean power-hitting against spin and ability to change momentum instantly in the middle overs.",
    age:"32",
}

let prodArr=[prod1,prod2,prod3,prod4,prod5,prod6]

prodArr.forEach(appendData)

function appendData(el,i,arr)
{
    let card=document.createElement("div")
    card.setAttribute("class","card")

    let topDiv=document.createElement("div")
    topDiv.setAttribute("class","topDiv")

    let image=document.createElement("img")
    image.src=el.image

    let btmDiv=document.createElement("div")
    btmDiv.setAttribute("class","btmDiv")

    let tittle=document.createElement("h3")
    tittle.setAttribute("class","tittle")
    tittle.innerText=el.tittle

    let job=document.createElement("h2")
    job.setAttribute("class","job")
    job.innerText=el.job

    let age=document.createElement("p")
    age.setAttribute("class","age")
    age.innerText=`Age - ${el.age}`

    topDiv.append(image)
    btmDiv.append(tittle,job,age)
    card.append(topDiv,btmDiv)
    container.append(card)
}







