'use strict'
import { setRenameBtn, setRenameForm } from './rename.js'
import { NAME, handleSubmit } from './nameForm.js'
import { resize } from './resize.js'
import { greetingBox, hide, nameForm, greeting } from '../../domElements.js'

function greetingWhileRename() {
  const greetTime = new Date().getHours()
  if (greetTime > 6 && greetTime < 12) 
    greeting.textContent = 'Good morning, '
  else if (greetTime >= 12 && greetTime < 18) 
    greeting.textContent = 'Good afternoon, '
  else
    greeting.textContent = 'You must be exhausted, '
}

function handleRenameBtnClick(event) {
  setRenameForm()
  setRenameBtn(false)
  greetingWhileRename()
  const renameInput = document.querySelector('.js-renameInput')
  renameInput.value = localStorage.getItem(NAME)
  resize()
  renameInput.classList.add('blink')
  renameInput.addEventListener('animationend', () => renameInput.classList.remove('blink'))
}

export function genBtn() {
  const renameBtn = document.createElement('i')
  renameBtn.classList.add('fas')
  renameBtn.classList.add('fa-pen')
  renameBtn.addEventListener('click', handleRenameBtnClick)
  renameBtn.classList.add('js-renameBtn')
  renameBtn.classList.add('renameBtn')
  renameBtn.classList.add('showingAsInline')
  greetingBox.appendChild(renameBtn)
}

export function seeGreeting() {
  greeting.classList.remove('invisible')
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


