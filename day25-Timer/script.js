let hr = document.getElementById("hr")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let startbtn = document.getElementById("startbtn")
let stopbtn = document.getElementById("stopbtn")


let h=1
let m=1
let s=59

sec.innerText=digit(s)
min.innerText=digit(m)
hr.innerText=digit(h)

let alpha

function start(){

alpha = setInterval(function(){ 


        s--
        sec.innerText=digit(s)

        if(s<0){
            s=59
            sec.innerText=digit(s)

            m--
            min.innerText=digit(m)

            if(m<0)
            {
                m=59
                min.innerText=digit(m)

                h--
                hr.innerText=digit(h)
            }

        }

        if(h==0 && m==0 && s==0)
        {
            stop()
        }
        
    },10)

}


function stop(){
    clearInterval(alpha)
}


function digit(num)
{
    if(num<=9){
        return `0${num}`
    }
    return num
}


