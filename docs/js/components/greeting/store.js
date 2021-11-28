import { resizeGreet } from "./greeting.js"
import {removeHajimemashiteAni, successLoad, paintGreeting} from './greeting.js'

export const NAME = 'name'
const form = document.querySelector(".js-nameForm")
const input = form.querySelector("input")

export function saveName(name) {
  localStorage.setItem(NAME, name)
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = input.value
  saveName(currentValue)
  input.value = ""
  removeHajimemashiteAni()
  removeFormAni()
  seeAfterSubmit()
  paintGreeting(currentValue)
}

function askForName() {
  resizeGreet()
  form.addEventListener("submit", handleSubmit)
}

export function loadName() {
  const name = localStorage.getItem(NAME)
  if (name === null) 
    askForName()
  else {
    successLoad()
    paintGreeting(name)
  }
}