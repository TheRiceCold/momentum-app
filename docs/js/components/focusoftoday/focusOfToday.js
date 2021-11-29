let todoForm = document.querySelector('.toDoForm')
let input = todoForm.querySelector('input')
let node = document.createElement('LI')
let todoInput = document.querySelector('ul')
let mainFocus = document.querySelector('#mainFocus')

if (localStorage.buttonClass === "active") node.className = "done"
else node.className = ""

if(!localStorage.hasOwnProperty('todo') || (localStorage.todo === '' || localStorage.todo === null)){ 
	todoForm.addEventListener('submit', e => {
		e.preventDefault()
		if(e.keyCode === 13 && input.value !== '') {
			localStorage.todo = input.value
			focusOfToday()
		}
	})
} 
else focusOfToday()

export function focusOfToday(){
	mainFocus.innerText = 'Today\'s Goal: '
	mainFocus.className += ' has-goal'
	node.innerHTML = `
  <span class="doneTodo">
  <span class="check-box"></span>
  </span><span class="to-do-item">
  ${localStorage.todo}</span><span class="remove">x</span>`
  todoInput.appendChild(node)
	input.style.display = 'none'

	todoForm.addEventListener('submit', e => {
		if(e.keyCode === 13 && input.value !== ''){
			e.preventDefault()
			localStorage.todo = input.value
			focusOfToday()
		}
	})

	//checkmark
	let button = document.querySelector('.doneTodo')
	button.addEventListener('click', () => {
		this.parentNode.classList.toggle('done')
		if(this.parentNode.className === "done")
			localStorage.buttonClass = "active"
		else delete localStorage.buttonClass
		
	});

	//X button
	let remove = document.querySelector('.remove')
	remove.addEventListener('click', () => {
		node.parentNode.removeChild(node)
		mainFocus.className = "goal"
		mainFocus.innerText = 'What Is Your Main Focus For Today?'
		input.style.display = ''
		input.value = ''
		node.className = ''
	});
}