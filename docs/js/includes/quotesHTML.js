export const quotesHTML = `
<div id="allQuotes" class="overlay">
  <a class="cancel" href="#"></a>
  <div class="popup">
    <h2>All Quotes</h2>
    <div class="content">
      <ul id="quoteList" style="color: black;"></ul>
    </div>
  </div>
</div>`

export const addQuoteHTML = `
<div id="newQuote" class="overlay">
  <a class="cancel" href="#"></a>
  <div class="popup" style="height: 220px; width: 40%">
    <h2>Add New Quote</h2>
    <div class="content">
      <label style="color: black">Quote:</label>
      <input id="quoteInput" style="color: black; border-bottom: 1px solid black; outline: none; width: 100%; margin-bottom: 20px" type="text" />
      <label style="color: black">Person Name:</label>
      <input id="quotePersonInput" style="color: black; border-bottom: 1px solid black; outline: none; display: block; margin-bottom: 20px" type="text" />
      <button id="addQuote">Add Quote</button>
    </div>
  </div>
</div>`