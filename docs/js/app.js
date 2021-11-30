import { backgroundImage } from './components/background.js'
import { dateAndTime } from './components/clock.js'
import { loadName } from './components/greeting/nameForm.js'
import { getRandomQuote } from './components/quotes/getQuotes.js'
import { focusOfToday } from './components/focusoftoday/focusOfToday.js'
import { showTasks } from './components/todolist/todoList.js'
import { logout } from './components/logout.js'

// window.addEventListener('DOMContentLoaded', e => {})
window.onload = () => {
  backgroundImage()
  loadName()
  setInterval(dateAndTime, 1000)
  getRandomQuote()
  focusOfToday()
  showTasks()
  logout()
}