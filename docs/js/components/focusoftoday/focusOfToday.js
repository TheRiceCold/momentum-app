import { focusTodayInput, todoInput, mainFocus, mainBox, focusItem } from '../../domElements.js'
import { askFocusOfToday } from './askForFocus.js'

function enterFocusOfToday(e) {
	if(e.key === 'Enter' && focusTodayInput.value.trim() != 0) {
		localStorage.focus = focusTodayInput.value
		showFocusOfToday()
	}
}

export function focusOfToday() {	
	if(!localStorage.focus) 
		focusTodayInput.addEventListener('keypress', enterFocusOfToday)
	else 
		showFocusOfToday()
}

function showFocusOfToday(){
	mainFocus.textContent = 'Today\'s Goal: '
	focusItem.innerHTML = `
	<span class="doneTodo">
		<span class="check-box"></span>
	</span>
	<span class="to-do-item">
		${localStorage.focus}
	</span>
	<span class="remove">x</span>`

	todoInput.append(focusItem)
	focusTodayInput.style.display = 'none'

	
	const donebtn = document.querySelector('.doneTodo')
	donebtn.addEventListener('click', () => {
		donebtn.parentNode.classList.toggle('done')
		let isDone = donebtn.parentNode.className === 'done'
		localStorage.focusDone = isDone
	})
	
	const remove = document.querySelector('span.remove')
	remove.addEventListener('click', delFocusOfToday)
}

function delFocusOfToday() {
	focusItem.remove()
	delete localStorage.focus
	delete localStorage.focusDone
	
	askFocusOfToday()
	focusTodayInput.addEventListener('keypress', enterFocusOfToday)
}

