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