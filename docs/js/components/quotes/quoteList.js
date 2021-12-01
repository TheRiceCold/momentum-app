import { quoteList } from "../../domElements.js"

let storedQuotes = 
	!localStorage.quotes ? [] : 
	JSON.parse(localStorage.quotes)

export function showAllQuotes() {
	quoteList.innerHTML = ''
  storedQuotes.forEach((element, index) => quoteList.append(allQuotes(element, index)))
}

function allQuotes(element, index) {
	const todoItem = document.createElement('li')
	todoItem.className = 'quote'

	const content = document.createElement('span')
	content.className = 'content'
		
	todoItem.append(content)
		
	const quoteText = document.createElement('textarea')
	quoteText.className = 'text'
	quoteText.style.color = 'black'
	quoteText.style.resize = 'none'
	quoteText.style.outline = 'none'
	quoteText.style.width = '90%'
	quoteText.setAttribute('readonly', 'readonly')
	quoteText.value = element.quote
	
	const personText = document.createElement('input')
	personText.style.color = 'black'
	personText.value = element.person
	personText.style.outline = 'none'
	personText.setAttribute('readonly', 'readonly')
		
	content.append(quoteText, personText)

		
	const editBtn = document.createElement('span')
	editBtn.className = 'edit'
	editBtn.innerHTML = '<i class="fas fa-pen" style="color:black"></i>'

	const delBtn = document.createElement('span')
	delBtn.className = 'delete'
	delBtn.innerHTML = '<i class="fas fa-trash" style="color:black"></i>'

	todoItem.append(editBtn, delBtn)
	quoteList.append(todoItem)

	delBtn.addEventListener('click', () => deleteTask(index))
	editBtn.addEventListener('click', () => editTask(index))

	return todoItem
}

const quoteInput = document.getElementById('quoteInput')

const quotePersonInput = document.getElementById('quotePersonInput')

document.getElementById('addQuote').addEventListener('click', () => {
	if(quoteInput.value.trim() != 0) { 
		storedQuotes.push({ 
			quote: quoteInput.value, 
			person: 
				quotePersonInput.value.trim() != 0 
				? quotePersonInput.value
				: 'unknown'})
		localStorage.quotes = JSON.stringify(storedQuotes)
		// showTasks()
	}
})

// function deleteTask(index) {
//   storedTodoList.splice(index, 1)
//   localStorage.todoList = JSON.stringify(storedTodoList)
//   showTasks()
// }

// function editTask(index) {
// 	storedTodoList = JSON.parse(localStorage.todoList)
// 	const todoText = document.querySelectorAll('input.text')[index]
// 	todoText.removeAttribute('readonly')
// 	todoText.focus()
// 	todoText.addEventListener('keypress', e => {
// 		if (e.key === 'Enter') {
// 			storedTodoList[index] = todoText.value
// 			todoText.setAttribute('readonly', 'readonly')
// 			localStorage.todoList = JSON.stringify(storedTodoList)
// 		}
// 	})
// }