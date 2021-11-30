const timeSection = `
<div id="dateBox" class="clockBox fadein invisible">
  <p id="date"></p>
  <h1 id="clock" class="clock"></h1>
</div>`

const focusOfToday = `
<div class="js-toDoBox toDoBox fadein invisible">
  <div class="js-toDoForm toDoForm">
    <label id="mainFocus">What is your main focus today?</label>
    <input type="text"/>
  </div>
  <ul class="to-do"></ul>
</div> `

const greetingSection = `
<div class="js-wholeGreeting">
  <div class="js-hajimemashite hajimemashite fadein showing">
    Hello, what's your name?
  </div>
  <div class="js-greetingBox greetingBox">
    <span class="js-greeting greeting fadein invisible"></span>
    <span id="hide"></span>
  </div>
  <div class="js-nameForm nameForm fadein showing">
    <input type="text" />
  </div>
</div>`

export const mainHTML = `
<main class="mainBox">
  ${timeSection}
  ${greetingSection}
  ${focusOfToday}
  <div id="popup" class="overlay">
    <a class="cancel" href="#"></a>
    <div class="popup">
      <h2>All Quotes</h2>
      <div class="content">
        <p>Click outside the popup to close.</p>
      </div>
    </div>
  </div>
</main>`