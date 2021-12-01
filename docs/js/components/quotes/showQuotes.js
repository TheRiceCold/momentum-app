import { quoteList } from '../../domElements.js'
import { storedQuotes } from './getQuotes.js'
import { allQuotes } from './quoteList.js'

export function showAllQuotes() {
	quoteList.innerHTML = ''
  storedQuotes.forEach((element, index) => quoteList.append(allQuotes(element, index)))
}