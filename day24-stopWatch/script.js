let hhh = document.getElementById("hour")
let mmm = document.getElementById("min")
let sss = document.getElementById("sec")

let hour = 0
let min = 0
let sec = 0

hhh.innerText = hour
mmm.innerText = min
sss.innerText = sec

let pqr

function start()
{
    pqr = setInterval(function(){
        sec++

        if(sec>=59)
        {
            sec=0
            min++

            if(min>=59)
            {
                min=0
                hour++
                hhh.innerText = hour
            }

            mmm.innerText = min
        }

        sss.innerHTML = sec

    },10)
}

function stop()
{
    clearInterval(pqr)
}

