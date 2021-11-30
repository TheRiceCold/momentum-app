import { focusTodayInput, focusItem } from "../../domElements.js"

export function askFocusOfToday() {
	mainFocus.className = 'goal'
	mainFocus.textContent = 'What is your main focus for today?'
	mainFocus.style.fontSize = '1em'
	mainFocus.style.fontWeight = '100'
	
	focusTodayInput.style.display = ''
	focusTodayInput.value = ''
	focusItem.className = ''
}