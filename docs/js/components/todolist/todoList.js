import { inputBox, todoList } from '../../domElements.js'


let listArray = []
export function showTasks(){
  let getLocalStorageData = localStorage.getItem('todoList');
  listArray = getLocalStorageData == null ? [] : JSON.parse(getLocalStorageData)
  let newTask = ''
  listArray.forEach((element, index) => 
    newTask += `
    <li>${element}
      <span class="icon" onclick="deleteTask(${index})">
        <i class="fas fa-trash"></i>
      </span>
    </li>`
  )
  todoList.innerHTML = newTask
  inputBox.value = ''
}

inputBox.addEventListener('keypress', e => {
  if(e.key === 'Enter') {
    if(inputBox.value.trim() != 0) { 
      listArray = localStorage.todoList == null ? [] : JSON.parse(localStorage.todoList)
      listArray.push(inputBox.value)
      localStorage.setItem('todoList', JSON.stringify(listArray))
      showTasks()
    }
  }
})

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem('todoList')
  listArray = JSON.parse(getLocalStorageData)
  listArray.splice(index, 1)
  localStorage.setItem('todoList', JSON.stringify(listArray))
  showTasks()
}