import { footerHTML } from './includes/footerHTML.js'
import { mainHTML } from './includes/mainHTML.js'
import { headerHTML } from './includes/headerHTML.js'

const includeHTML = (...args) => document.body.innerHTML += args.join('') 

includeHTML(
  headerHTML,
  mainHTML,
  footerHTML,
)

