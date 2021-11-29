export const mainHTML = `
<main class="mainBox">
  <div class="js-dummyBox dummyBox invisible"></div>
  <div id="dateBox" class="clockBox fadein invisible">
    <p id="date"></p>
    <h1 id="clock" class="clock"></h1>
  </div>
  <div class="js-wholeGreeting">
    <div class="js-hajimemashite hajimemashite fadein showing">
      Hello, what's your name?
    </div>
    <div class="js-greetingBox greetingBox">
      <span class="js-greeting greeting fadein invisible"></span>
      <span id="hide"></span>
    </div>
    <form class="js-nameForm nameForm fadein showing">
      <input type="text" />
    </form>
  </div>
  <div class="js-toDoBox toDoBox fadein invisible">
    <div class="js-toDoForm toDoForm">
      <label id="mainFocus">What is your main focus today?</label>
      <input type="text"/>
    </div>
    <ul class="to-do"></ul>
  </div> 
</main>`