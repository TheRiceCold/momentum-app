let input = document.querySelector('.toDoForm input')
let node = document.createElement('LI')
let todoInput = document.querySelector('ul')
let mainFocus = document.querySelector('#mainFocus')

export function focusOfToday() {	
	if(!localStorage.focus) { 
		input.addEventListener('keypress', e => {
			if(e.key === 'Enter') // or keyCode 13 
				if (input.value !== '') {
					localStorage.focus = input.value
					showTodo()
				}
		})
	} 
	else showTodo()
}

function showTodo(){
	mainFocus.innerText = 'Today\'s Goal: '
	mainFocus.className += ' has-goal'
	node.innerHTML = `
	<span class="doneTodo">
	<span class="check-box"></span>
	</span><span class="to-do-item">
	${localStorage.focus}</span><span class="remove">x</span>`
	todoInput.appendChild(node)
	input.style.display = 'none'

	input.addEventListener('keypress', e => {
		if(e.key === 'Enter' && input.value !== ''){
			localStorage.focus = input.value
			showTodo()
		}
	})

	const button = document.querySelector('.doneTodo')
	button.addEventListener('click', () => {
		button.parentNode.classList.toggle('done')
		if(button.parentNode.className === "done")
			localStorage.focusDone = true
		else 
			localStorage.focusDone = false
	})

	const remove = document.querySelector('span.remove')
	remove.addEventListener('click', () => {
		node.parentNode.removeChild(node)
		localStorage.focus = ''
		mainFocus.className = "goal"
		mainFocus.textContent = 'What is your main focus for today?'
		input.style.display = ''
		input.value = ''
		node.className = ''
	})
}
