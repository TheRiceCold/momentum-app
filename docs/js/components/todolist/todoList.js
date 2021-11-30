import { inputBox, todoList } from '../../domElements.js'

let storedTodoList
export function showTasks() {
  storedTodoList = 
    !localStorage.todoList ? [] : 
    JSON.parse(localStorage.todoList)

  todoList.innerHTML = ''
  storedTodoList.forEach((element, index) => todoList.append(addTodoItem(element, index)))
  inputBox.value = ''
}

inputBox.addEventListener('keypress', e => {
  if(e.key === 'Enter' && inputBox.value.trim() != 0) { 
    storedTodoList.push(inputBox.value)
    localStorage.todoList = JSON.stringify(storedTodoList)
    showTasks()
  }
})

function deleteTask(index){
  storedTodoList = JSON.parse(localStorage.todoList)
  storedTodoList.splice(index, 1)
  localStorage.todoList = JSON.stringify(storedTodoList)
  showTasks()
}

function addTodoItem(element, index) {
  const listItem = document.createElement('LI')
  listItem.textContent = element
  
  const delBtn = document.createElement('span')
  delBtn.className = 'icon'
  delBtn.innerHTML = '<i class="fas fa-trash"></i>'
  delBtn.addEventListener('click', () => deleteTask(index))
  
  const editBtn = document.createElement('span')
  editBtn.className = 'icon'
  editBtn.innerHTML = '<i class="fas fa-pen"></i>'

  listItem.append(delBtn, editBtn)

  return listItem
}