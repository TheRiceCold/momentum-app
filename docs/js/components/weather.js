const api = {
  key: "fcc8de7015bbb202209bbf0261babf4c",
  base: "https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector('.searchLocation')

export function setWeather(e) {
  if (e.key === 'Enter') 
    getResults(searchbox.value)
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(resp => resp.json())
    .then(displayResults)
}

function displayResults (weather) {
  let city = document.querySelector('.location .city')
  city.textContent = `${weather.name}, ${weather.sys.country}`

  let temp = document.querySelector('.current .temp')
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

  let weatherText = document.querySelector('.current .weather')
  weatherText.textContent = weather.weather[0].main
}