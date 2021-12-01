import { focusTodayInput } from '../../domElements.js'
import { focusItem } from './renderFocusToday.js'
import { askFocusOfToday } from './askForFocus.js'
import { enterFocusOfToday } from './focusOfToday.js'

export function delFocusOfToday() {
	focusItem.remove()
	delete localStorage.focus
	delete localStorage.focusDone
	askFocusOfToday()
	focusTodayInput.addEventListener('keypress', enterFocusOfToday)
}