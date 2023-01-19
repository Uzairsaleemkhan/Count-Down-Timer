let secondEl=document.querySelector(".second")
let minuteEl=document.querySelector(".minute")
let hourEl=document.querySelector(".hour")
let dayEl=document.querySelector(".day")
secondEl.innerHTML="00"
minuteEl.innerHTML="00"
hourEl.innerHTML="00"
dayEl.innerHTML="00"
function timeDifference(current,target) {

    let milliseconds=  target-current
    let seconds= Math.floor(milliseconds/1000)
    let minutes= Math.floor(seconds/60)
    // console.log(minutes)
    let hours=Math.floor(minutes/60)
    let days=Math.floor(hours/24)
    hours=hours-(days*24)
    minutes=minutes-((hours*60)+(days*24*60))
    seconds=seconds-((days*24*60*60)+(hours*60*60)+(minutes*60))

    return {
        days:days,
        hours:hours,
        minutes:minutes,
        seconds:seconds,
        difference:milliseconds
    }
}

let timer= setInterval(()=>{
    let current=new Date().getTime()
    let target= new Date('January 20, 2023 00:25:20').getTime()
let data=timeDifference(current,target)

    secondEl.innerHTML=data.seconds<10?"0"+ data.seconds : data.seconds
    minuteEl.innerHTML=data.minutes<10?"0" + data.minutes : data.minutes
    hourEl.innerHTML=data.hours<10?"0" + data.hours : data.hours
    dayEl.innerHTML=data.days<10?"0"+data.days:data.days
    // console.log(data.days+"".length)
    // console.log(data.seconds)
    if (Math.floor(data.difference/1000)===0||Math.floor(data.difference/1000)<0) {
        secondEl.innerHTML="00"
minuteEl.innerHTML="00"
hourEl.innerHTML="00"
dayEl.innerHTML="00"
clearInterval(timer)

}

},1000)


















//     if (data.seconds===0&&data.minutes===0&&data.days===0&&data.hours===0) {
//     secondEl.innerHTML="00"
//     minuteEl.innerHTML="00"
//     hourEl.innerHTML="00"
//     dayEl.innerHTML="00"
//     clearInterval(timer)

// }