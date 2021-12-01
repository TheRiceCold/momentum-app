import { clockHTML } from './clockHTML.js'
import { addQuoteHTML, quotesHTML } from './quotesHTML.js'
import { greetHTML } from './greetHTML.js'

const focusOfToday = `
<div class="js-toDoBox toDoBox fadein invisible">
  <div class="focusTodayBox">
    <label id="mainFocus">What is your main focus today?</label>
    <input type="text"/>
  </div>
  <ul id="focusList"></ul>
</div> `

export const mainHTML = `
<main class="mainBox">
  ${clockHTML}
  ${greetHTML}
  ${focusOfToday}
  ${quotesHTML}
  ${addQuoteHTML}
</main>`