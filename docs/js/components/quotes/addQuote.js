import { storedQuotes } from './getQuotes.js'

export function addQuote() {
	if (quoteInput.value.trim() == 0) return 
	
	storedQuotes.push({ 
		quote: quoteInput.value, 
		person: 
			quotePersonInput.value.trim() != 0 
			? quotePersonInput.value
			: 'unknown'
		})

	localStorage.quotes = JSON.stringify(storedQuotes)
}