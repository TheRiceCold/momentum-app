import { paintGreeting, greetingWhileRename } from './greeting.js'
import { resize } from './resize.js'
import { greetingBox } from '../../domElements.js'
import { NAME } from './nameForm.js'

export function setRenameBtn(active = true) {
  const renameBtn = document.querySelector(".js-renameBtn")
  if (active)
    renameBtn.classList.add("showingAsInline")
  else 
    renameBtn.classList.remove("showingAsInline")
}

export function setRenameForm(active = true) {
  const renameForm = document.querySelector(".js-renameForm")
  if (active)
    renameForm.classList.remove("invisible")
  else
    renameForm.classList.add("invisible")
}

export function handleSubmitRename(event) {
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

export function genRenameForm() {
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