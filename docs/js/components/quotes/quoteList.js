import { quoteList } from '../../domElements.js'
import { addQuote } from './addQuote.js'
import { storedQuotes } from './getQuotes.js'
import { quoteInput, quotePersonInput } from '../../domElements.js'
import { showAllQuotes } from './showQuotes.js'

export function allQuotes(element, index) {
	const todoItem = document.createElement('li')
	todoItem.className = 'quote'

	const content = document.createElement('span')
	content.className = 'content'
		
	todoItem.append(content)
		
	content.append(getQuoteText(element), getQuotePersonText(element))
		
	const editBtn = document.createElement('span')
	editBtn.className = 'edit'
	editBtn.innerHTML = '<i class="fas fa-pen" style="color: black"></i>'

	const delBtn = document.createElement('span')
	delBtn.className = 'delete'
	delBtn.innerHTML = '<i class="fas fa-trash" style="color: black"></i>'

	todoItem.append(editBtn, delBtn)
	quoteList.append(todoItem)

	delBtn.addEventListener('click', () => deleteQuote(index))
	editBtn.addEventListener('click', () => editQuote(index))
	return todoItem
}

document.getElementById('addQuote').addEventListener('click', addQuote)

function deleteQuote(index) {
  storedQuotes.splice(index, 1)
  localStorage.quotes = JSON.stringify(storedQuotes)
  showAllQuotes()
}

function editQuote(index) {
	console.log('edit')
	const getQuoteInput = document.querySelectorAll('textArea#quoteInput')[index]
	const getQuotePersonInput = document.querySelectorAll('input#quotePersonInput')[index]
	
	getQuoteInput.removeAttribute('readonly')
	getQuotePersonInput.removeAttribute('readonly')
	getQuoteInput.focus()
	
	getQuoteInput.addEventListener('keypress', e => {
		if (e.key === 'Enter') {
			storedQuotes[index].quote = getQuoteInput.value
			getQuoteInput.setAttribute('readonly', 'readonly')
			localStorage.quotes = JSON.stringify(storedQuotes)
			showAllQuotes()
		}
	})
	
	onEnterEditInput(getQuotePersonInput, index)
}

function onEnterEditInput(input, index) {
	input.addEventListener('keypress', e => {
		if (e.key === 'Enter') {
			storedQuotes[index].person = input.value
			input.setAttribute('readonly', 'readonly')
			localStorage.quotes = JSON.stringify(storedQuotes)
		}
	})
}

function getQuoteText(element) {
	const quoteText = document.createElement('textarea')
	quoteText.id = 'quoteInput'
	quoteText.style.color = 'black'
	quoteText.style.resize = 'none'
	quoteText.style.outline = 'none'
	quoteText.style.width = '90%'
	quoteText.setAttribute('readonly', 'readonly')
	quoteText.value = element.quote
	return quoteText
}

function getQuotePersonText(element) {
	const personText = document.createElement('input')
	personText.id = 'quotePersonInput'
	personText.style.color = 'black'
	personText.value = element.person
	personText.style.outline = 'none'
	personText.setAttribute('readonly', 'readonly')
	return personText
}
