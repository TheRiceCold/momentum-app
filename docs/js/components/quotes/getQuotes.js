import { quoteOfToday, quotePerson, skipQuote } from '../../domElements.js'
import { quotes } from './quotes.js'

localStorage.quotes = JSON.stringify(quotes)
let storedQuotes = JSON.parse(localStorage.quotes)

export function getRandomQuote() {
  const randIndex = parseInt(Math.random() * storedQuotes.length)
  quoteOfToday.textContent = `"${storedQuotes[randIndex].quote}"`
  quotePerson.textContent = `~  ${storedQuotes[randIndex].person}  ~`
}

skipQuote.addEventListener('click', getRandomQuote)