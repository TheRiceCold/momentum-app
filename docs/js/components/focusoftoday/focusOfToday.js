import { focusTodayInput, node, todoInput, mainFocus } from '../../domElements.js'

export function focusOfToday() {	
	if(!localStorage.focus) { 
		focusTodayInput.addEventListener('keypress', e => {
			if(e.key === 'Enter') 
				if (focusTodayInput.value !== '') {
					localStorage.focus = focusTodayInput.value
					showFocusOfToday()
				}
		})
	} 
	else showFocusOfToday()
}

function showFocusOfToday(){
	mainFocus.textContent = 'Today\'s Goal: '
	mainFocus.className += 'has-goal'
	mainFocus.style.fontSize = '.75em'
	mainFocus.style.fontWeight = '600'
	
	node.innerHTML = `
	<span class="doneTodo">
		<span class="check-box"></span>
	</span>
	<span class="to-do-item">
		${localStorage.focus}
	</span>
	<span class="remove">x</span>`

	todoInput.appendChild(node)
	focusTodayInput.style.display = 'none'

	focusTodayInput.addEventListener('keypress', e => {
		if(e.key === 'Enter' && focusTodayInput.value !== ''){
			localStorage.focus = focusTodayInput.value
			showFocusOfToday()
		}
	})

	const button = document.querySelector('.doneTodo')
	button.addEventListener('click', () => {
		button.parentNode.classList.toggle('done')
		localStorage.focusDone = (button.parentNode.className === 'done')
	})

	const remove = document.querySelector('span.remove')
	remove.addEventListener('click', delFocusOfToday)
}

function delFocusOfToday() {
	node.parentNode.removeChild(node)
	delete localStorage.focus
	delete localStorage.focusDone

	mainFocus.className = 'goal'
	mainFocus.textContent = 'What is your main focus for today?'
	mainFocus.style.fontSize = '1em'
	mainFocus.style.fontWeight = '100'
	
	focusTodayInput.style.display = ''
	focusTodayInput.value = ''
	node.className = ''
}
