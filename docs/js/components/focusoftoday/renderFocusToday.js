import { mainFocus, focusBox, focusTodayInput } from '../../domElements.js'
import { showFocusOfToday } from './showFocusToday.js'

export const focusItem = document.createElement('LI')

export function renderFocusOfToday() {
  mainFocus.textContent = 'Today\'s Goal: '
	focusItem.innerHTML = `
	<span class="doneTodo">
		<span class="check-box"></span>
	</span>
	<span class="to-do-item">
		${localStorage.focus}
	</span>
	<span class="remove">x</span>`

	focusBox.append(focusItem)
	focusTodayInput.style.display = 'none'
}