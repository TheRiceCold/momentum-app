import { showGreeting, showGreetingTime } from './greeting.js'
import { resize } from './resize.js'
import { greetingBox } from '../../domElements.js'
import { NAME } from './nameForm.js'

function setRenameActive(active = true) {
  const renameForm = document.querySelector('.js-renameForm')
  if (active)
    renameForm.classList.remove('invisible')
  else 
    renameForm.classList.add('invisible')
}

function handleSubmitRename(e) {
  if (e.key !== 'Enter') return
  const renameInput = document.querySelector('.js-renameForm .js-renameInput')
  localStorage.name = renameInput.value
  showGreeting(renameInput.value)
  setRenameActive(false)
  const curName = document.querySelector('.currentName')
}

function handleRenameBtnClick(event) {
  setRenameActive()
  showGreetingTime()
  const renameInput = document.querySelector('.js-renameInput')
  renameInput.value = localStorage.getItem(NAME)
  resize()
}

export function renameBtn() {
  const renameBtn = document.createElement('i')
  renameBtn.classList.add('fas', 'fa-pen')
  renameBtn.addEventListener('click', handleRenameBtnClick)
  renameBtn.classList.add('js-renameBtn')
  renameBtn.classList.add('renameBtn')
  greetingBox.appendChild(renameBtn)
}

export function genRenameForm() {
  const renameBox = document.createElement('div')
  const renameInput = document.createElement('input')
  renameInput.classList.add('js-renameInput')
  renameBox.classList.add('invisible', 'js-renameForm', 'renameForm')
  renameBox.addEventListener('input', resize)
  renameBox.addEventListener('keypress', handleSubmitRename)
  renameBox.appendChild(renameInput)
  greetingBox.appendChild(renameBox)
}