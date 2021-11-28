export function resize() {
  const renameInput = document.querySelector('.js-renameInput')
  hide.innerText = renameInput.value
  renameInput.style.width = hide.offsetWidth + 'px'
}