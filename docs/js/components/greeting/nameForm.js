'use strict'
import { paintGreeting, seeGreeting, genBtn } from './greeting.js'
import { nameForm, nameInput, greetingBox } from '../../domElements.js'
import { resize } from './resize.js'
import { setRenameBtn, setRenameForm } from './rename.js'

export const NAME = 'name'
const hajimemashite = document.querySelector('.js-hajimemashite')
const toDoBox = document.querySelector('.js-toDoBox')
const clockBoxForGreetingJs = document.getElementById('dateBox')
const clockForGreetingJs = clockBoxForGreetingJs.querySelector('.js-clock')

function handleSubmitRename(event) {
  event.preventDefault()
  const renameInput = document.querySelector('.js-renameForm .js-renameInput')
  localStorage.name = renameInput.value
  paintGreeting(renameInput.value)
  setRenameBtn()
  setRenameForm(false)
  const nameExp = document.querySelector('.js-nameExp')
  nameExp.classList.add('blink')
  nameExp.addEventListener('animationend', () => nameExp.classList.remove('blink'))
}

function genRenameForm() {
  const renameForm = document.createElement('form')
  const renameInput = document.createElement('input')
  renameInput.type = 'text'
  renameInput.classList.add('js-renameInput')
  renameForm.classList.add('invisible')
  renameForm.classList.add('js-renameForm')
  renameForm.classList.add('renameForm')
  renameForm.addEventListener('input', resize)
  renameForm.addEventListener('submit', handleSubmitRename)
  renameForm.appendChild(renameInput)
  greetingBox.appendChild(renameForm)
}

function removeHajimemashiteAni() {
  hajimemashite.classList.add('fadeout')
  hajimemashite.addEventListener('animationend', () => {
    hajimemashite.classList.remove('fadeout')
    hajimemashite.classList.remove('showing')
  })
}

function resizeGreet() {
  nameInput.addEventListener('input', () => {
    hide.innerText = nameInput.value
    if (hide.offsetWidth >= 300) 
      nameInput.style.width = hide.offsetWidth + 'px'
  })
}

function seeAfterSubmit() {
  hajimemashite.addEventListener('animationend', () => {
    clockBoxForGreetingJs.classList.remove('invisible')
    seeGreeting()
    toDoBox.classList.remove('invisible')
    genRenameForm()
    genBtn()
  })
}

function successLoad() {
  nameForm.classList.remove('showing')
  hajimemashite.classList.remove('showing')
  clockBoxForGreetingJs.classList.remove('invisible')
  seeGreeting()
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