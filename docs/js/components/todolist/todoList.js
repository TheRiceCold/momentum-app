import { todoInput, todoList } from '../../domElements.js'

let storedTodoList = 
	!localStorage.todoList ? [] : 
	JSON.parse(localStorage.todoList)

export function showTasks() {
	todoList.innerHTML = ''
  storedTodoList.forEach((element, index) => todoList.append(addTodoItem(element, index)))
	todoInput.value = ''
}

showTasks()

todoInput.addEventListener('keypress', e => {
	if(e.key === 'Enter' && todoInput.value.trim() != 0) { 
		storedTodoList.push(todoInput.value)
		localStorage.todoList = JSON.stringify(storedTodoList)
		showTasks()
	}
})

function addTodoItem(element, index) {
	const todoItem = document.createElement('li')
	todoItem.className = 'task'

	const content = document.createElement('span')
	content.className = 'content'
		
	todoItem.append(content)
		
	const todoText = document.createElement('input')
	todoText.className = 'text'
	todoText.type = 'text'
	todoText.value = element
	todoText.setAttribute('readonly', 'readonly')
		
	content.append(todoText)

		
	const editBtn = document.createElement('span')
	editBtn.className = 'edit'
	editBtn.innerHTML = '<i class="fas fa-pen"></i>'

	const delBtn = document.createElement('span')
	delBtn.className = 'delete'
	delBtn.innerHTML = '<i class="fas fa-trash"></i>'

	todoItem.append(editBtn, delBtn)
	todoList.append(todoItem)

	delBtn.addEventListener('click', () => deleteTask(index))
	editBtn.addEventListener('click', () => editTask(index))

	return todoItem
}

function deleteTask(index) {
  storedTodoList.splice(index, 1)
  localStorage.todoList = JSON.stringify(storedTodoList)
  showTasks()
}

function editTask(index) {
	storedTodoList = JSON.parse(localStorage.todoList)
	const todoText = document.querySelectorAll('input.text')[index]
	todoText.removeAttribute('readonly')
	todoText.focus()
	todoText.addEventListener('keypress', e => {
		if (e.key === 'Enter') {
			storedTodoList[index] = todoText.value
			todoText.setAttribute('readonly', 'readonly')
			localStorage.todoList = JSON.stringify(storedTodoList)
		}
	})
}