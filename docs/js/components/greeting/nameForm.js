'use strict'
import { paintGreeting, removeHajimemashiteAni } from './greeting.js'
import { nameForm, nameInput, greetingBox, hajimemashite, greeting } from '../../domElements.js'
import { resize, resizeGreet } from './resize.js'
import { setRenameBtn, setRenameForm, genBtn, handleSubmitRename, genRenameForm } from './rename.js'

export const NAME = 'name'
const toDoBox = document.querySelector('.js-toDoBox')
const clockBoxForGreetingJs = document.getElementById('dateBox')
const clockForGreetingJs = clockBoxForGreetingJs.querySelector('.js-clock')

function seeAfterSubmit() {
  hajimemashite.addEventListener('animationend', () => {
    clockBoxForGreetingJs.classList.remove('invisible')
    greeting.classList.remove('invisible')
    toDoBox.classList.remove('invisible')
    genRenameForm()
    genBtn()
  })
}

function successLoad() {
  nameForm.classList.remove('showing')
  hajimemashite.classList.remove('showing')
  clockBoxForGreetingJs.classList.remove('invisible')
  greeting.classList.remove('invisible')
  toDoBox.classList.remove('invisible')
  genRenameForm() 
  genBtn()
}

export function handleSubmit(event) {
  event.preventDefault()
  const currentValue = nameInput.value
  localStorage.setItem(NAME, currentValue)
  nameInput.value = ''
  removeHajimemashiteAni()
  removeFormAni()
  seeAfterSubmit()
  paintGreeting(currentValue)
}

function removeFormAni() {
  nameForm.classList.add('fadeout')
  nameForm.removeEventListener('submit', handleSubmit)
  nameForm.addEventListener('animationend', () => {
    nameForm.classList.remove('fadeout')
    nameForm.classList.remove('showing')
  })
}

function askForName() {
  resizeGreet()
  nameForm.addEventListener('submit', handleSubmit)
}

export function loadName() {
  const name = localStorage.getItem(NAME)
  if (!name) 
    askForName()
  else {
    successLoad()
    paintGreeting(name)
  }
}