import { greetingBox, hide, 
  nameForm, greeting, 
  askForName, logoutBtn,
  footer, todoWrapper } from '../../domElements.js'

export function removeAskName() {
  askForName.classList.add('fadeout')
  askForName.addEventListener('animationend', () => {
    askForName.classList.remove('fadeout')
    askForName.classList.remove('showing')
  })
}

export function showGreeting(name) {
  showGreetingTime()

  const curName = document.createElement('span')
  curName.textContent = name
  greeting.append(curName)
  
  logoutBtn.classList.remove('invisible')
  footer.classList.remove('invisible')
  todoWrapper.classList.remove('invisible')
}

export function showGreetingTime() {
  const getTime = new Date().getHours()
  const morningTime = getTime > 6 && getTime < 12
  const afternoonTime = getTime > 11 && getTime < 18
  
  greeting.textContent = 
    morningTime ? 'Good morning, ' 
    : afternoonTime ? 'Good afternoon, ' 
    : 'Good evening, '
}
