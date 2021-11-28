import { backgroundImage } from './components/background.js'
import { getTime } from './components/clock.js'
import { loadName } from './components/greeting/store.js'
import { getQuotes } from './components/quotes/getQuotes.js'

window.onload = () => {
  backgroundImage()
  loadName()
  setInterval(getTime, 1000)
  getQuotes()
}