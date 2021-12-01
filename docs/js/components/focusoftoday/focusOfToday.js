import { focusTodayInput, mainFocus, mainBox, focusBox } from '../../domElements.js'
import { askFocusOfToday } from './askForFocus.js'
import { showFocusOfToday } from './showFocusToday.js'

export function enterFocusOfToday(e) {
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