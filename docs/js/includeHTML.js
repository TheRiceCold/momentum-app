import { footerHTML } from './includes/footerHTML.js'
import { mainHTML } from './includes/mainHTML.js'
import { headerHTML } from './includes/headerHTML.js'
import { todoListHTML } from './includes/todoListHTML.js'

const includeHTML = (...args) => document.body.innerHTML += args.join('') 

includeHTML(
  headerHTML,
  mainHTML,
  todoListHTML,
  footerHTML,
)