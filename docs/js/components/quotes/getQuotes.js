import { quoteOfToday, quotePerson, skipQuote } from '../../domElements.js'
import { quotes } from './quotes.js'

export let storedQuotes = 
	!localStorage.quotes ? [] : 
	JSON.parse(localStorage.quotes)

export function getRandomQuote() {
  if (!localStorage.quotes) 
    localStorage.quotes = JSON.stringify(quotes)
  
  let parsedQuotes = JSON.parse(localStorage.quotes)
  const randIndex = parseInt(Math.random() * parsedQuotes.length)
  quoteOfToday.textContent = `"${parsedQuotes[randIndex].quote}"`
  quotePerson.textContent = `~  ${parsedQuotes[randIndex].person}  ~`
}

skipQuote.addEventListener('click', getRandomQuote)