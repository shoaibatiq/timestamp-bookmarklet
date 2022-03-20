

let months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
}
let elements = document.querySelectorAll('div[class*=datetime]')
for(let element of elements){
    let text = element.innerText
    let [date, time] = text.split(' ')
    let [year, mon, day] = date.split('/')
    let [hour, min, sec] = time.split(':')
   

    let month = months[parseInt(mon)]
    let timestamp = Date.parse(`${day} ${month} ${year} ${time}`)/1000
    element.innerText += '\t' +timestamp.toString()
}


