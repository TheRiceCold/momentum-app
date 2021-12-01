const api = {
  key: "fcc8de7015bbb202209bbf0261babf4c",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.searchLocation')
searchbox.addEventListener('keypress', setQuery)

function setQuery(e) {
  if (e.key === 'Enter') 
    getResults(searchbox.value)
}

export function showWeather(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(resp => resp.json())
    .then(displayResults)
}

function displayResults (weather) {
  let city = document.querySelector('.location .city')
  city.innerText = `${weather.name}, ${weather.sys.country}`

  let temp = document.querySelector('.current .temp')
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

  let weather_el = document.querySelector('.current .weather')
  weather_el.innerText = weather.weather[0].main

  let hilow = document.querySelector('.hi-low')
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
}