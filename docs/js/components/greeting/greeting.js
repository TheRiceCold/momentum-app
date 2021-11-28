import {setRenameBtn, setRenameForm} from './rename.js'
import { NAME, saveName } from './store.js'

const greetingBox = document.querySelector('.js-greetingBox')
const hide = document.querySelector('#hide')

function resize() {
  const renameInput = document.querySelector('.js-renameInput')
  hide.innerText = renameInput.value
  renameInput.style.width = hide.offsetWidth + 'px'
}

function greetingWhileRename() {
  const hourForGreet = new Date().getHours()
  if (hourForGreet > 6 && hourForGreet < 12) 
    greeting.innerText = `Good morning, `
  else if (hourForGreet >= 12 && hourForGreet < 18) 
    greeting.innerText = `Good afternoon, `
  else
    greeting.innerText = `You must be exhausted, `
  
  const owari = document.createElement("span")
  owari.innerText = "."
  owari.style.fontSize = "46px"
  owari.style.paddingRight = "25px"
  owari.classList.add("owari")
  greetingBox.appendChild(owari)
}

function handleSubmitRename(event) {
  event.preventDefault()
  const renameForm = document.querySelector(".js-renameForm")
  const renameInput = renameForm.querySelector(".js-renameInput")
  const currentValue = renameInput.value
  const owari = document.querySelector(".owari")
  greetingBox.removeChild(owari)
  saveName(currentValue)
  renameInput.value = ""
  paintGreeting(currentValue)
  setRenameBtn()
  setRenameForm(false)
  const nameExp = document.querySelector(".js-nameExp")
  nameExp.classList.add("blink")
  nameExp.addEventListener("animationend", () => nameExp.classList.remove("blink"))
}

function handleRenameBtnClick(event) {
  setRenameForm()
  setRenameBtn(false)
  greetingWhileRename()
  const renameInput = document.querySelector(".js-renameInput")
  renameInput.value = localStorage.getItem(NAME)
  resize()
  renameInput.classList.add("blink")
  renameInput.addEventListener("animationend", () => renameInput.classList.remove("blink"))
}

function genRenameForm() {
  const renameForm = document.createElement("form")
  const renameInput = document.createElement("input")
  renameInput.type = "text"
  renameInput.classList.add("js-renameInput")
  renameForm.classList.add("invisible")
  renameForm.classList.add("js-renameForm")
  renameForm.classList.add("renameForm")
  renameForm.addEventListener("input", resize)
  renameForm.addEventListener("submit", handleSubmitRename)
  renameForm.appendChild(renameInput)
  greetingBox.appendChild(renameForm)
}

function genBtn() {
  const renameBtn = document.createElement("i")
  renameBtn.classList.add("fas")
  renameBtn.classList.add("fa-pen")
  renameBtn.addEventListener("click", handleRenameBtnClick)
  renameBtn.classList.add("js-renameBtn")
  renameBtn.classList.add("renameBtn")
  renameBtn.classList.add("showingAsInline")
  greetingBox.appendChild(renameBtn)
}




const form = document.querySelector(".js-nameForm")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greeting")
const hajimemashite = document.querySelector(".js-hajimemashite")
const clockBoxForGreetingJs = document.querySelector(".js-clockBox")
const clockForGreetingJs = clockBoxForGreetingJs.querySelector(".js-clock")
const toDoBox = document.querySelector(".js-toDoBox")
const dummyBox = document.querySelector(".js-dummyBox")

export function resizeGreet() {
  input.addEventListener("input", () => {
    hide.innerText = input.value
    if (hide.offsetWidth >= 300) 
      input.style.width = hide.offsetWidth + "px"
  })
}

function addHoverOnRenameBtn() {
  greetingBox.addEventListener("mouseover", () => {
    const renameBtn = document.querySelector(".js-renameBtn")
    renameBtn.style.opacity = 100
  })
  greetingBox.addEventListener("mouseout", () => {
    const renameBtn = document.querySelector(".js-renameBtn")
    renameBtn.style.opacity = 0
  })
}

function seeDummyBox() {
  dummyBox.classList.remove("invisible")
}

function seeToDoBox() {
  toDoBox.classList.remove("invisible")
}

function seeClockBox() {
  clockBoxForGreetingJs.classList.remove("invisible")
}

function seeGreeting() {
  greeting.classList.remove("invisible")
  addHoverOnRenameBtn()
}

function seeAfterSubmit() {
  hajimemashite.addEventListener("animationend", () => {
    seeDummyBox()
    seeClockBox()
    seeGreeting()
    seeToDoBox()
    genRenameForm()
    genBtn()
  })
}

export function successLoad() {
  removeForm()
  removeHajimemashite()
  seeDummyBox()
  seeClockBox()
  seeGreeting()
  seeToDoBox()
  genRenameForm() 
  genBtn()
}

function removeForm() {
  form.classList.remove("showing")
}

function removeHajimemashite() {
  hajimemashite.classList.remove("showing")
}

export function removeFormAni() {
  form.classList.add("fadeout")
  form.removeEventListener("submit", handleSubmit)
  form.addEventListener("animationend", () => {
    form.classList.remove("fadeout")
    form.classList.remove("showing")
  })
}

export function removeHajimemashiteAni() {
  hajimemashite.classList.add("fadeout")
  hajimemashite.addEventListener("animationend", () => {
    hajimemashite.classList.remove("fadeout")
    hajimemashite.classList.remove("showing")
  })
}

export function paintGreeting(name) {
  const hourForGreet = new Date().getHours()
  if (hourForGreet > 6 && hourForGreet < 12) 
    greeting.innerText = `Good morning, `
  else if (hourForGreet >= 12 && hourForGreet < 18) 
    greeting.innerText = `Good afternoon, `
  else 
    greeting.innerText = `You must be exhausted, `
  const nameExp = document.createElement('span')
  nameExp.innerText = name
  nameExp.classList.add('js-nameExp')
  const owari = document.createElement('span')
  owari.innerText = "."
  greeting.appendChild(nameExp)
  greeting.appendChild(owari)
}


