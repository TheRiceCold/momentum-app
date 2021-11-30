import { logoutBtn } from '../domElements.js'

export function logout() {
  logoutBtn.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
  })
}