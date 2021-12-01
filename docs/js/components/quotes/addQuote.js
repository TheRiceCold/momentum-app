import { storedQuotes } from './getQuotes.js'
import { addQuoteInput, addQuotePersonInput } from '../../domElements.js'
import { showAllQuotes } from './showQuotes.js'

export function addQuote() {
	if (addQuoteInput.value.trim() == 0) return 
	
	storedQuotes.push({ 
		quote: addQuoteInput.value, 
		person: 
			(addQuotePersonInput.value.trim() != 0)
			? addQuotePersonInput.value
			: 'unknown'
		})

	addQuoteInput.value = ''
	addQuotePersonInput.value = ''
	localStorage.quotes = JSON.stringify(storedQuotes)
	showAllQuotes()
}