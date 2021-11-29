let listArray
const inputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".wrapper .todoList")
const deleteAllBtn = document.querySelector(".footer button")

inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value
  if(userEnteredValue.trim() != 0) 
    addBtn.classList.add("active") 
  else 
    addBtn.classList.remove("active") 
}

addBtn.addEventListener('click', () => {
  let userEnteredValue = inputBox.value
  let getLocalStorageData = localStorage.getItem('New Todo')
  listArray = getLocalStorageData == null ? [] : JSON.parse(getLocalStorageData)
  listArray.push(userEnteredValue)
  localStorage.setItem("New Todo", JSON.stringify(listArray))
  showTasks()
  addBtn.classList.remove("active")
})


function deleteTask(index){
  let getLocalStorageData = localStorage.getItem('New Todo')
  listArray = JSON.parse(getLocalStorageData)
  listArray.splice(index, 1)
  localStorage.setItem('New Todo', JSON.stringify(listArray))
  showTasks()
}

export function showTasks(){
  let getLocalStorageData = localStorage.getItem('New Todo');
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
