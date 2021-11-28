const clockBox = document.querySelector('.js-clockBox')
const clock = clockBox.querySelector('.js-clock')

export function getTime(){
	const date = new Date()
	const hour = date.getHours()
	const minute = date.getMinutes()
	clock.innerText = `${ hour < 10 ? `0${hour}` : hour}:${ minute < 10 ? `0${minute}` : minute}`
}
