import { dateBox, clock, dateToday } from "../domElements.js"

export function getTime(){
	const date = new Date()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const month = date.getMonth() + 1
	const today = date.getDate()
	clock.textContent = `${ hour < 10 ? `0${hour}` : hour}:${ minute < 10 ? `0${minute}` : minute}`
	dateToday.textContent = month+'/'+today 
}