import { dateBox, clock, dateToday } from "../domElements.js"

export function dateAndTime() {
	const date = new Date()
	const month = date.toLocaleString('default', { month: 'long' })
	const today = date.getDate()
	dateToday.textContent = month+' '+today 
	clock.textContent = date.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
}