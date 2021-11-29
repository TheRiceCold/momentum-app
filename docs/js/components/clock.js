const clockBox = document.querySelector('.js-clockBox')
const clock = clockBox.querySelector('.js-clock')
const dateToday = clockBox.querySelector('#date')

export function getTime(){
	const date = new Date()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const month = date.getMonth() + 1
	const today = date.getDate()
	clock.innerText = `${ hour < 10 ? `0${hour}` : hour}:${ minute < 10 ? `0${minute}` : minute}`
	dateToday.innerText = month+'/'+today 
}