function updateTime() {
    const now =  new Date()
    const hour = now.getHours() % 12
    const minute = now.getMinutes()
    const second = now.getSeconds()
    const hourHand = document.querySelector('.hour-hand')
    const minuteHand = document.querySelector('.minute-hand')
    const secondHand = document.querySelector('.second-hand')
    const rotateHour = (hour * 30) + (minute * 0.5) + 90
    const rotateMinute  = ((minute / 60) * 360) + 90
    const rotateSecond = ((second / 60) * 360) + 90
    hourHand.style.transform = 'rotate(' + rotateHour + 'deg)'
    minuteHand.style.transform = 'rotate(' + rotateMinute + 'deg)'
    secondHand.style.transform = 'rotate(' + rotateSecond + 'deg)'  
}
setInterval(updateTime, 1000);