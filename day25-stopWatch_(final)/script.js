let hr = document.getElementById("hr")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let startbtn = document.getElementById("startbtn")
let stopbtn = document.getElementById("stopbtn")
let list = document.getElementById("list")
let audio = document.getElementById("audio")


let h=0
let m=0
let s=0

sec.innerText=digit(s)
min.innerText=digit(m)
hr.innerText=digit(h)

let alpha

function start(){
    clickSound()

alpha = setInterval(function(){
        s++
        sec.innerText=digit(s)

        if(s>=60){
            s=0
            sec.innerText=digit(s)
            m++
            min.innerText=digit(m)

        if(m==10)
        {
            audio.innerHTML=`<audio autoplay loop>
            <source src="./sound.mp3" type="audio/mpeg" />
            <source src="myAudio.ogg" type="audio/ogg" />
            </audio>`
        }

        if(m>=60){
            m=0
            min.innerText=digit(m)
            h++
            hr.innerText=digit(h)
        }
        }
    },1000)

    startbtn.disabled=true
}


function stop(){
    clickSound()
    clearInterval(alpha)
    startbtn.disabled=false
    audio.innerHTML=""
}

function digit(num)
{
    if(num<=9){
        return `0${num}`
    }
    return num
}

function getLap()
{
    let li = document.createElement("li")
    li.innerText=`${digit(h)}:${digit(m)}:${digit(s)}`
    list.append(li)
    clickSound()
}


function addOne(){
    m += 1
    min.innerText=digit(m)
    clickSound()
}
function addTen(){
    m += 10
    min.innerText=digit(m)
    clickSound()
}
function addOneHour(){
    h += 1
    hr.innerText=digit(h)
    clickSound()
}
function subOne(){
    m -= 1
    min.innerText=digit(m)
    clickSound()
}
function subTen(){
    m -= 10
    min.innerText=digit(m)
    clickSound()
}
function subOneHour(){
    h -= 1
    hr.innerText=digit(h)
    clickSound()
}

function clickSound(){

  click.innerHTML=` <audio autoplay>
                    <source src="./click.mp3" type="audio/mpeg" />
                    <source src="myAudio.ogg" type="audio/ogg" />
                    </audio>`
}
