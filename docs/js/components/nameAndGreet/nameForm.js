import { showGreeting, removeAskName } from './greeting.js'
import { nameForm, nameInput, greetingBox, 
  askForName, greeting, dateBox,
  toDoBox } from '../../domElements.js'
import { renameBtn, genRenameBox } from './rename.js'

function seeAfterSubmit() {
  askForName.addEventListener('animationend', () => {
    dateBox.classList.remove('invisible')
    greeting.classList.remove('invisible')
    toDoBox.classList.remove('invisible')
    genRenameBox()
    renameBtn()
  })
}

function successLoad() {
  nameForm.classList.remove('showing')
  askForName.classList.remove('showing')
  dateBox.classList.remove('invisible')
  greeting.classList.remove('invisible')
  toDoBox.classList.remove('invisible')
  genRenameBox() 
  renameBtn()
}

export function submitName(e) {
  if (e.key !== 'Enter') return

  const currentValue = nameInput.value
  localStorage.name = currentValue
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
  if (!localStorage.name) {
    nameForm.addEventListener('keypress', submitName)
  }
  else {
    successLoad()
    showGreeting(localStorage.name)
  }
}