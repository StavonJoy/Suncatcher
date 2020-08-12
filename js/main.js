const goBtn = document.getElementById('go')
const container = document.getElementById('container')
const riseTitle = document.getElementById('rise-title')
const setTitle = document.getElementById('set-title')
const sunRise = document.getElementById('sunrise-text')
const sunSet = document.getElementById('sunset-text')


const render = (rise, set) => {
    sunRise.innerText=`${rise} UTC`
    sunSet.innerText=`${set} UTC`
}

goBtn.addEventListener('click', () => {
    fetch(`https://freegeoip.app/json/`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let latt = data.latitude
        let longt = data.longitude
        let longLatt = `lat=${latt}&lng=${longt}`
        return fetch(`https://api.sunrise-sunset.org/json?${longLatt}&date=today`)
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let rise = data.results.sunrise
        let set = data.results.sunset
        render(rise, set)
        // sunRise.innerText = `${rise} UTC`
        // sunSet.innerText = `${set} UTC`
    })
    .catch((err) => {
        console.log(err)
    })
})
