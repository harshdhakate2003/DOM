let curr = document.getElementById("curr")
let operation = document.getElementById("operation")
let prev = document.getElementById("prev")

let num=[]
let sym=[]


function handelClick(val){
    let btnVal=val

    if(btnVal=="=")
    {
        let demo=curr.innerText
        let strArr=demo.split("")
        console.log(strArr)

        let n=0
        for(let i=0;i<=strArr.length-1;i++)
        {
            if(strArr[i]!="+" && strArr[i]!="-" && strArr[i]!="*" && strArr[i]!="/")
            {

                let a=Number(strArr[i])
                n=n*10+a
            }
            else{
                num.push(n)
                n=0
                sym.push(strArr[i])            
            }
        }
        num.push(n)

        console.log(num)
        console.log(sym)
    }
    else{
        curr.append(btnVal)
    }


    if(btnVal=="=")
    {
        while(sym.includes("/"))
        {
            let i = sym.indexOf("/")

            let s = num[i] / num[i+1]
            console.log(s)

            for(let k=i;k<num.length-1;k++)
            {
                if(k==i)
                {
                    num[k]=s
                }
                else if(num[k+1]==undefined)
                {
                    break
                }
                else{
                    num[k]=num[k+1]
                }
            }
            num.pop()
            sym.splice(i,1)
            console.log(num)
        }

        while(sym.includes("*"))
        {
            let i = sym.indexOf("*")

            let s = num[i] * num[i+1]
            console.log(s)

            for(let k=i;k<num.length-1;k++)
            {
                if(k==i)
                {
                    num[k]=s
                }
                else if(num[k+1]==undefined)
                {
                    break
                }
                else{
                    num[k]=num[k+1]
                }
            }
            num.pop()
            sym.splice(i,1)
            console.log(num)
        }

        while(sym.includes("+"))
        {
            let i = sym.indexOf("+")

            let s = num[i] + num[i+1]
            console.log(s)

            for(let k=i;k<num.length-1;k++)
            {
                if(k==i)
                {
                    num[k]=s
                }
                else if(num[k+1]==undefined)
                {
                    break
                }
                else{
                    num[k]=num[k+1]
                }
            }
            num.pop()
            sym.splice(i,1)
            console.log(num)
        }

        while(sym.includes("-"))
        {
            let i = sym.indexOf("-")

            let s = num[i] - num[i+1]
            console.log(s)

            for(let k=i;k<num.length-1;k++)
            {
                if(k==i)
                {
                    num[k]=s
                }
                else if(num[k+1]==undefined)
                {
                    break
                }
                else{
                    num[k]=num[k+1]
                }
            }
            num.pop()
            sym.splice(i,1)
            console.log(num)
        }
    
    curr.innerText=num[0]
    }

    
}