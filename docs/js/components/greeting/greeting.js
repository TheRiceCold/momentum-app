'use strict'
import { setRenameBtn, setRenameForm } from './rename.js'
import { NAME, handleSubmit } from './nameForm.js'
import { resize } from './resize.js'
import { greetingBox, hide, nameForm, greeting, hajimemashite } from '../../domElements.js'

export function greetingWhileRename() {
  const greetTime = new Date().getHours()
  if (greetTime > 6 && greetTime < 12) 
    greeting.textContent = 'Good morning, '
  else if (greetTime >= 12 && greetTime < 18) 
    greeting.textContent = 'Good afternoon, '
  else
    greeting.textContent = 'You must be exhausted, '
}

export function removeHajimemashiteAni() {
  hajimemashite.classList.add('fadeout')
  hajimemashite.addEventListener('animationend', () => {
    hajimemashite.classList.remove('fadeout')
    hajimemashite.classList.remove('showing')
  })
}

export function paintGreeting(name) {
  const hourForGreet = new Date().getHours()
  if (hourForGreet > 6 && hourForGreet < 12) 
    greeting.innerText = 'Good morning, '
  else if (hourForGreet >= 12 && hourForGreet < 18) 
    greeting.innerText = 'Good afternoon, '
  else 
    greeting.innerText = 'You must be exhausted, '
  const nameExp = document.createElement('span')
  nameExp.innerText = name
  nameExp.classList.add('js-nameExp')
  greeting.appendChild(nameExp)
}


