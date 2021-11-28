import { backgroundImage } from './components/background.js'
import { getTime } from './components/clock.js'
import { loadName } from './components/greeting/store.js'

window.onload = () => {
  backgroundImage()
  loadName()
  setInterval(getTime, 1000)

  // test fetching JSON 
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => console.log(data))
}