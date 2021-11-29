export const mainHTML = `
<main class="mainBox">
  <div class="js-dummyBox dummyBox invisible"></div>
  <div class="js-clockBox clockBox fadein invisible">
    <h1 class="js-clock clock"></h1>
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
    <form class="js-toDoForm toDoForm">
      <label id="mainFocus">What is your main focus today?</label>
      <input type="text"/>
    </form>
    <ul class="to-do"><li></li></ul>
  </div> 
</main>`