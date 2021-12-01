import { focusBox, focusTodayInput } from '../../domElements.js'
import { askFocusOfToday } from './askForFocus.js'
import { enterFocusOfToday } from './focusOfToday.js'
import { delFocusOfToday } from './delFocusToday.js'
import { renderFocusOfToday } from './renderFocusToday.js'

export function showFocusOfToday(){
	renderFocusOfToday()
  doneBtn()
  removeBtn()
}

function removeBtn() {
  const remove = document.querySelector('span.remove')
	remove.addEventListener('click', delFocusOfToday)
}

function doneBtn() {
  const donebtn = document.querySelector('span.doneTodo')
	donebtn.addEventListener('click', () => {
		donebtn.parentNode.classList.toggle('done')
		let isDone = donebtn.parentNode.className === 'done'
		localStorage.focusDone = isDone
	})
}
