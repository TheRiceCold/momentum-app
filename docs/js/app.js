import { backgroundImage } from './components/background.js'
import { dateAndTime } from './components/clock.js'
import { loadName } from './components/nameAndGreet/nameForm.js'
import { getRandomQuote } from './components/quotes/getQuotes.js'
import { focusOfToday } from './components/focusoftoday/focusOfToday.js'
import { showTasks } from './components/todolist/todoList.js'
import { logout } from './components/logout.js'
import { showAllQuotes } from './components/quotes/showQuotes.js'
import { showWeather } from './components/weather.js'

// addEventListener('DOMContentLoaded', e => {})
onload = () => {
  backgroundImage()
  loadName()
  setInterval(dateAndTime, 1000)
  getRandomQuote()
  setInterval(getRandomQuote, 60000)
  showAllQuotes()
  focusOfToday()
  showTasks()
  showWeather()
  logout()
}