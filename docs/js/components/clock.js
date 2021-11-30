import { dateBox, clock, dateToday } from "../domElements.js"

export function dateAndTime() {
	const date = new Date()
	const month = date.getMonth()+1
	const today = date.getDate()
	clock.textContent = `${ date.toLocaleString([], { hour: '2-digit', minute: '2-digit' })}`
	dateToday.textContent = month+'/'+today 
}