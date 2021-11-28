import { backgroundImage } from './components/background.js'
import { getTime } from './components/clock.js'
import { loadName } from './components/greeting/store.js'
import { getRandomQuote } from './components/quotes/getQuotes.js'
import { showTodo } from './components/todo/todo.js'

window.onload = () => {
  backgroundImage()
  loadName()
  setInterval(getTime, 1000)
  getRandomQuote()
  // showTodo()
}