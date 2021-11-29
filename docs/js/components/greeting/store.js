import { resizeGreet } from "./greeting.js"
import {paintGreeting} from './greeting.js'
import { removeHajimemashiteAni, removeFormAni } from "./animation.js"
import { seeGreeting, genRenameForm, genBtn } from './greeting.js'

export const NAME = 'name'
const form = document.querySelector(".js-nameForm")
const input = form.querySelector("input")
const dummyBox = document.querySelector(".js-dummyBox")
const hajimemashite = document.querySelector(".js-hajimemashite")
const toDoBox = document.querySelector(".js-toDoBox")
const clockBoxForGreetingJs = document.getElementById('dateBox')
const clockForGreetingJs = clockBoxForGreetingJs.querySelector(".js-clock")

export function saveName(name) {
  localStorage.setItem(NAME, name)
}

function seeAfterSubmit() {
  hajimemashite.addEventListener("animationend", () => {
    seeDummyBox()
    clockBoxForGreetingJs.classList.remove("invisible")
    seeGreeting()
    toDoBox.classList.remove("invisible")
    genRenameForm()
    genBtn()
  })
}


function successLoad() {
  form.classList.remove("showing")
  hajimemashite.classList.remove("showing")
  dummyBox.classList.remove("invisible")
  clockBoxForGreetingJs.classList.remove("invisible")
  seeGreeting()
  toDoBox.classList.remove("invisible")
  genRenameForm() 
  genBtn()
}

export function handleSubmit(event) {
  event.preventDefault()
  const currentValue = input.value
  localStorage.setItem(NAME, currentValue)
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
  if (!name) 
    askForName()
  else {
    successLoad()
    paintGreeting(name)
  }
}