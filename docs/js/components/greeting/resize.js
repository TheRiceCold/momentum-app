import { nameInput } from "../../domElements.js"

export function resize() {
  const renameInput = document.querySelector('.js-renameInput')
  hide.innerText = renameInput.value
  renameInput.style.width = hide.offsetWidth + 'px'
}

export function resizeGreet() {
  nameInput.addEventListener('input', () => {
    hide.innerText = nameInput.value
    if (hide.offsetWidth >= 300) 
      nameInput.style.width = hide.offsetWidth + 'px'
  })
}