'use strict'
import { showGreeting, removeAskName } from './greeting.js'
import { 
  nameForm, nameInput, greetingBox, 
  askForName, greeting, dateBox,
  toDoBox } from '../../domElements.js'
import { resize, resizeGreet } from './resize.js'
import { renameBtn, genRenameForm } from './rename.js'

export const NAME = 'name'

function seeAfterSubmit() {
  askForName.addEventListener('animationend', () => {
    dateBox.classList.remove('invisible')
    greeting.classList.remove('invisible')
    toDoBox.classList.remove('invisible')
    genRenameForm()
    renameBtn()
  })
}

function successLoad() {
  nameForm.classList.remove('showing')
  askForName.classList.remove('showing')
  dateBox.classList.remove('invisible')
  greeting.classList.remove('invisible')
  toDoBox.classList.remove('invisible')
  genRenameForm() 
  renameBtn()
}

export function submitName(e) {
  if (e.key !== 'Enter') return

  const currentValue = nameInput.value
  localStorage.setItem(NAME, currentValue)
  removeAskName()
  removeFormAni()
  seeAfterSubmit()
  showGreeting(currentValue)
}

function removeFormAni() {
  nameForm.classList.add('fadeout')
  nameForm.removeEventListener('keypress', submitName)
  nameForm.addEventListener('animationend', () => {
    nameForm.classList.remove('fadeout')
    nameForm.classList.remove('showing')
  })
}

export function loadName() {
  const name = localStorage.getItem(NAME)
  if (!name) {
    resizeGreet()
    nameForm.addEventListener('keypress', submitName)
  }
  else {
    successLoad()
    showGreeting(name)
  }
}