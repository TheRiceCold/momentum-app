import { input, node, todoInput, mainFocus } from '../../domElements.js'

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
	mainFocus.textContent = 'Today\'s Goal: '
	mainFocus.className += 'has-goal'
	mainFocus.style.fontSize = '.75em'
	mainFocus.style.fontWeight = '600'
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
		localStorage.focusDone = (button.parentNode.className === 'done')

	})

	const remove = document.querySelector('span.remove')
	remove.addEventListener('click', () => {
		node.parentNode.removeChild(node)
		delete localStorage.focus
		delete localStorage.focusDone
		mainFocus.className = 'goal'
		mainFocus.textContent = 'What is your main focus for today?'
		mainFocus.style.fontSize = '1em'
		mainFocus.style.fontWeight = '100'
		input.style.display = ''
		input.value = ''
		node.className = ''
	})
}
