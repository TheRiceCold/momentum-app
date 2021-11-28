export function removeHajimemashiteAni() {
  hajimemashite.classList.add("fadeout")
  hajimemashite.addEventListener("animationend", () => {
    hajimemashite.classList.remove("fadeout")
    hajimemashite.classList.remove("showing")
  })
}

export function removeFormAni() {
  form.classList.add("fadeout")
  form.removeEventListener("submit", handleSubmit)
  form.addEventListener("animationend", () => {
    form.classList.remove("fadeout")
    form.classList.remove("showing")
  })
}