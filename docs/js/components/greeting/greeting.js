'use strict'
import { NAME } from './nameForm.js'
import { resize } from './resize.js'
import { greetingBox, hide, nameForm, greeting, askForName } from '../../domElements.js'

export function removeGreetingAnim() {
  askForName.classList.add('fadeout')
  askForName.addEventListener('animationend', () => {
    askForName.classList.remove('fadeout')
    askForName.classList.remove('showing')
  })
}

export function showGreeting(name) {
  greetingTime()

  const curName = document.createElement('span')
  curName.textContent = name
  curName.classList.add('.currentName')
  
  greeting.appendChild(curName)
}

export function greetingTime() {
  const getTime = new Date().getHours()
  const morningTime = getTime > 6 && getTime < 12
  const afternoonTime = getTime >= 12 && getTime < 18
  
  greeting.textContent = 
    morningTime ? 'Good morning, ' 
    : afternoonTime ? 'Good afternoon, ' 
    : 'You must be exhausted, '
}
